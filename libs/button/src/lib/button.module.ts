import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { CoreModule } from '@dmv/demo/core';
import { LinkModule } from '@dmv/demo/link';

@NgModule({
  imports: [CommonModule, CoreModule, LinkModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent]
})
export class ButtonModule {}
