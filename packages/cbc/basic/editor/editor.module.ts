import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoLocaleModule } from '@co/common';
import { CoEditorComponent } from './editor.component';

const COMPONENTS = [CoEditorComponent];

@NgModule({
  imports: [CommonModule, CoLocaleModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoEditorModule {}
