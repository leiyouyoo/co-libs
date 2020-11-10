import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emojiMap, emojiName, emojiUrl } from '../../entity/emojiMap';
import { ImService } from '../../service/im.service';
import { parseText } from '../../service/IMservices';

@Component({
  selector: 'app-text-element',
  templateUrl: './text-element.component.html',
  styleUrls: ['./text-element.component.less'],
})
export class TextElementComponent implements OnInit {
  @Input() payload;
  @Output() showPreviewImg: EventEmitter<string> = new EventEmitter<string>();
  textList: Array<any> = [];
  showPreviewer: boolean;
  constructor(private imTemplateService: ImService) {}

  ngOnInit() {
    this.contentList();
  }

  contentList() {
    const data = this.payload;
    if (data.text.includes('/Storage/File/GetDownLoadFile?') || data.text.includes('data:image/png;base64,')) {
      this.textList = [{ name: 'picture', src: this.imTemplateService.getImgUrl(data.text) }];
    }
    this.textList = parseText(data, emojiMap, emojiUrl);
  }
  handlePreview(src) {
    this.showPreviewImg.emit(src);
    this.showPreviewer = true;
  }
}
