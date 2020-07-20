import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  Component,
  ViewEncapsulation,
  ViewChild, ElementRef, forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LifeCycleComponent } from '@co/core';

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

  @Input() coParam:any = {
    width :600 ,
  };

  @ViewChild('reportIframe' , {static:true} ) reportIframe : ElementRef;

  private indexs:number = 0;

  nextDisble :boolean = true;

  preDisble :boolean = false;

  isHide :boolean = false;

  constructor(cdr: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();
    this.coParam.ids.length == 1 ? this.isHide = true : this.isHide = false;
    this.getReportData(this.indexs);
  }

  /**
   * 切换报表
   * @coParam bl
   */
  chooseReport(bl){

    //上一个
    if(bl && this.indexs > 0 ){
      this.nextDisble = true;
      this.indexs = this.indexs - 1;
      this.getReportData(this.indexs);
      bl && this.indexs == 0 ? this.preDisble = false: this.nextDisble = true;
    }

    //下一个
    if( !bl  && this.indexs < this.coParam.ids.length*1-1 ) {
      this.preDisble = true;
      this.indexs = this.indexs + 1;
      this.getReportData(this.indexs);
      this.indexs == this.coParam.ids.length*1-1 ?  this.nextDisble = false : this.preDisble = true;
    }

  }

  /**
   * 获取报表数据
   * @param idx
   */
  getReportData( idx ){

    this.reportIframe.nativeElement.setAttribute("width",this.coParam.width);
    if( this.coParam.type == 'order'){
      //http://192.168.1.5:8002/FCM/WarehouseReceipt/GetWarehouseRecipt?Id=
      this.reportIframe.nativeElement.setAttribute("src", this.coParam.getReportUrl + this.coParam.ids[idx] );

    }else {
      //http://192.168.1.5:8002/FCM/SideMarksReport/GetReport?FileId=
      this.reportIframe.nativeElement.setAttribute("src", this.coParam.getReportUrl + this.coParam.ids[idx] );
    }

  }

}
