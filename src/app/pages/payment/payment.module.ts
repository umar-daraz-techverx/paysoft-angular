import { NgModule } from '@angular/core';

import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';          
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { PaymentComponent } from './payment.component';






@NgModule({
  imports: [
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
  
})
export class PaymentModule { }
