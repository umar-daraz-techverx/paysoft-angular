import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from '@full-fledged/alerts';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { RestApiService } from 'src/app/api.service';
import { EmpList } from '../models/get-emp-list';
import { PaymentList } from '../models/get-payment.model';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  listOfData: PaymentList[];
  isVisible = false;
  isConfirmLoading = false;
  RestApiService: any;
  clientCode : string;



  constructor(private modalService: NzModalService,private alertService: AlertService, private apiService : RestApiService,private router : ActivatedRoute) { }




  ngOnInit() { 
     
    this.router.params.subscribe(param=>{
      this.clientCode = param['clientCode'];
       
      this.apiService.getPayment(this.clientCode).subscribe(res=>{
        this.listOfData = res.data;
        });
    });
    
  }


  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
 

}



