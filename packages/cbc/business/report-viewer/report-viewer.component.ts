import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
// import {
//   ExportSideMarksReportInput,
//   GenerateWarehouseReciptInput,
//   SideMarksReportService,
//   WarehouseReceiptService,
// } from '@co/cds';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { LifeCycleComponent } from '@co/cbc/core';

@Component({
  selector: 'co-report-viewer',
  exportAs: 'coReportViewer',
  templateUrl: './report-viewer.component.html',
  host: { '[class.co-report-viewer]': 'true' },
  preserveWhitespaces: false,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ReportViewerComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ReportViewerComponent extends LifeCycleComponent {
  @Input() coParam: any;

  @ViewChild('reportIframe', { static: true }) reportIframe: ElementRef;

  private indexs: number = 0;

  nextDisble: boolean = true;

  preDisble: boolean = false;

  isHide: boolean = false;

  constructor(cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) // private warehouseReceiptService: WarehouseReceiptService,
  // private sideMarksReportService : SideMarksReportService,
  {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.coParam.ids.length == 1 ? (this.isHide = true) : (this.isHide = false);
    this.getReportData(this.indexs);
  }

  /**
   * 切换报表
   * @coParam bl
   */
  chooseReport(bl) {
    // 上一个
    if (bl && this.indexs > 0) {
      this.indexs = this.indexs - 1;
      this.getReportData(this.indexs);
      bl && this.indexs == 0 ? (this.preDisble = false) : (this.nextDisble = true);
    }

    // 下一个
    if (!bl && this.indexs < this.coParam.ids.length * 1 - 1) {
      this.indexs = this.indexs + 1;
      this.getReportData(this.indexs);
      this.indexs == this.coParam.ids.length * 1 - 1 ? (this.nextDisble = false) : (this.preDisble = true);
    }
  }

  /**
   * 获取报表数据
   * @param idx
   */
  getReportData(idx) {
    // if( this.coParam.type == 'order'){
    //   let req:GenerateWarehouseReciptInput = {
    //     ids : [this.coParam.ids[idx]]
    //   }
    //   this.warehouseReceiptService.generateWarehouseRecipt(req).subscribe(res =>{
    //     this.reportIframe.nativeElement.setAttribute("src", 'http://192.168.1.5:8002/FCM/WarehouseReceipt/GetWarehouseRecipt?Id='+res.fileIds[0] );
    //   })
    // }else {
    //   let req:ExportSideMarksReportInput = {
    //     ids : [this.coParam.ids[idx]]
    //   }
    //   this.sideMarksReportService.exportReport(req).subscribe(res =>{
    //     this.reportIframe.nativeElement.setAttribute("src", 'http://192.168.1.5:8002/FCM/SideMarksReport/GetReport?FileId='+res.fileId[0] );
    //   })
    // }
  }
}
