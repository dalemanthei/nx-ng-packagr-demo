import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link.component';
import { CoreModule } from '@dmv/core';

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [LinkComponent],
  exports: [LinkComponent]
})
export class LinkModule {}
