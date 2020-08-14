import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { LazyService } from '@co/core';

declare var CKEDITOR: any;
@Component({
  selector: 'coeditor',
  templateUrl: './editor.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CoEditorComponent implements OnInit {
  _html: string;
  @Input() set html(e: string) {
    this._html = e;
    this.setData();
  }
  @Input() config: any = {};

  CKEDITOR: any;
  constructor(private lazy: LazyService) {}

  ngOnInit() {
    this.lazy.load([`/assets/ckeditor/ckeditor.js`]).then(data => {
      this.initData();
    });
  }

  initData() {
    CKEDITOR.inline('editor', {
      extraPlugins: 'print,exportpdf',
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
      bodyClass: 'document-editor',
    });
    this.setData();
  }

  setData() {
    CKEDITOR.instances.editor.setData(this._html);
  }

  getSelection() {
    return CKEDITOR.instances.editor.getSelection();
  }

  getText() {
    CKEDITOR.instances.editor.document.getBody().getText();
  }

  print() {
    CKEDITOR.instances.editor.execCommand('print');
  }
}