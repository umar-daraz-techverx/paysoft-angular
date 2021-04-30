import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '@full-fledged/alerts';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { RestApiService } from 'src/app/api.service';
import { EmpList } from '../models/get-emp-list';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  listOfData: EmpList[];
  isVisible = false;
  isConfirmLoading = false;
  RestApiService: any;



  constructor(private modalService: NzModalService,private alertService: AlertService, private apiService : RestApiService,private route : Router) { }


  showModal2(id:any): void {
    localStorage.setItem("id", JSON.stringify(id));
    this.modalService.create({
      nzTitle: 'Payment Settings',
      nzContent: PaymentModalComponent,
    });
  }


  ngOnInit() { 
    this.apiService.getEmployees().subscribe(res=>{
      this.listOfData = res.data;
      });
  }

  getDetail(clientCode){
     ;
    this.route.navigate(['/payment',clientCode] )
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



