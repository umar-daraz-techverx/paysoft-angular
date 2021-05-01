import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '@full-fledged/alerts';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { RestApiService } from 'src/app/api.service';
import { MakePayment } from '../../models/make-payment.model';


@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss']
})
export class PaymentModalComponent {
  data: any;
  api: any;
  getStatus: boolean = false;
  form: FormGroup;
  empId : number
  @Input() id: any;
  isLoading : boolean;

  constructor(private apiService: RestApiService, private modal: NzModalRef, private alertService: AlertService, public service: RestApiService, private _fb: FormBuilder) {
    this.form = this._fb.group({
      apiKey: ['', Validators.required],
      schedule: ['', Validators.required],
      type: ['', Validators.required],
    });
  }
  ngOnInit() {
    
    this.apiService.getEmployees().subscribe(res => {
    });
  }



  destroyModal(): void {
    this.modal.destroy();
  }
  payment() {
    this.isLoading = true;
    this.getStatus = false;
    var makePayment = new MakePayment;
    this.modal.afterOpen.subscribe(res => {
    });
     
    makePayment.employeeId = Number(JSON.parse(localStorage.getItem("id")));
    makePayment.service = Number(this.form.controls.schedule.value);
    makePayment.serviceType =Number(this.form.controls.type.value);
    makePayment.key = this.form.controls.apiKey.value
    this.service.makePayment(makePayment).subscribe(res => {
      this.getStatus =true;
      this.isLoading = false;
      localStorage.clear();
      this.alertService.success('In process');
      this.destroyModal();
    },
    err=> this.alertService.warning('Not successfull'));
    

  }



}

