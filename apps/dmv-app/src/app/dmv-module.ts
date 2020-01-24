import { CoreModule } from '@dmv/demo/core';
import { ButtonModule } from '@dmv/demo/button';
import { LinkModule } from '@dmv/demo/link';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  exports: [CoreModule, LinkModule, ButtonModule],
  imports: [CoreModule, LinkModule, ButtonModule],
  providers: [],
  bootstrap: []
})
export class DmvModule {}
