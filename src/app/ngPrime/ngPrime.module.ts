import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [],
  imports: [ButtonModule, InputTextModule, MessagesModule, MessageModule],
  exports: [ButtonModule, InputTextModule, MessagesModule, MessageModule],
})
export class ngPrimeModule {}
