import { CoreModule } from '@dmv/core';
import { ButtonModule } from '@dmv/button';
import { LinkModule } from '@dmv/link';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [CoreModule, LinkModule, ButtonModule],
  imports: [CoreModule, LinkModule, ButtonModule],
  providers: [],
  bootstrap: []
})
export class DmvModule {}
