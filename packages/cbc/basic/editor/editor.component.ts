import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

declare var CKEDITOR: any;

@Component({
  selector: 'coeditor',
  templateUrl: './editor.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoEditorComponent implements OnInit, OnDestroy {
  _html: string = '';
  id: any;
  @Input() set html(e: string) {
    this._html = e;
    this.setData();
  }
  @Input() coType: string = 'inline';
  @Input() coConfig: any = {};
  @Input() coPDFName: string;
  @Output() coChange = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.id = this.guid();
    this.cdr.detectChanges();
    this.initData();
  }

  // Generate four random hex digits.
  S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  // Generate a pseudo-GUID by concatenating random hexadecimal.
  guid() {
    return this.S4() + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + '-' + this.S4() + this.S4() + this.S4();
  }

  initData() {
    CKEDITOR[this.coType](this.id, {
      title: 'CITYOCEAN EDITOR',
      extraPlugins: 'print,exportpdf',
      allowedContent: true,
      toolbar: [
        {
          name: 'various',
          items: ['ExportPdf', '-', 'Print', 'Undo', 'Redo'],
        },
        {
          name: 'basicstyles',
          items: ['Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'Subscript', 'Superscript'],
        },
        {
          name: 'links',
          items: ['Link', 'Unlink'],
        },
        {
          name: 'paragraph',
          items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote'],
        },
        {
          name: 'insert',
          items: ['Image', 'Table'],
        },
        {
          name: 'editing',
          items: ['Scayt'],
        },
        '/',
        {
          name: 'styles',
          items: ['Format', 'Font', 'FontSize'],
        },
        {
          name: 'colors',
          items: ['TextColor', 'BGColor', 'CopyFormatting'],
        },
        {
          name: 'align',
          items: ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
        },
        {
          name: 'document',
          items: ['PageBreak', 'Source'],
        },
      ],
      bodyClass: 'co-editor',
      ...this.coConfig,
    });
    CKEDITOR.instances[this.id].config.exportPdf_fileName = this.coPDFName || 'CITYOCEAN';
    this.setData();
  }

  setData() {
    if (this.id) {
      CKEDITOR.instances[this.id].setData(this._html);
    }
  }

  getData() {
    return CKEDITOR.instances[this.id].getData();
  }

  getText() {
    CKEDITOR.instances[this.id].document.getBody().getText();
  }

  print() {
    CKEDITOR.instances[this.id].execCommand('print');
  }

  download() {
    CKEDITOR.instances[this.id].execCommand('exportpdf');
  }

  ngOnDestroy() {
    CKEDITOR.instances[this.id].destroy(true);
  }
}
