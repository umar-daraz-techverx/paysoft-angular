import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';          
import { NzAlertModule } from 'ng-zorro-antd/alert';






@NgModule({
  imports: [
    WelcomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    NzModalModule,
    CommonModule, NzButtonModule,
    FormsModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzCardModule,
    NzAlertModule,
    NzButtonModule],
  declarations: [WelcomeComponent, PaymentModalComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
