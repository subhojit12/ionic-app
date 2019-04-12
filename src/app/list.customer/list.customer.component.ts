import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list.customer',
  templateUrl: './list.customer.component.html',
  styleUrls: ['./list.customer.component.scss'],
})
export class ListCustomerComponent implements OnInit {
list=[];
  constructor(private customerService:CustomerService,private router:Router ) { }
  customer: any = { id:0, name:'', email:'', address:'', phone:''}

  ngOnInit() {
    this.list=this.customerService.getCustomers();
    // this.customerService.getDBCustomers();
    this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
  	// this.list = this.customerService.getCustomers();
  }

  deleteAllCustomer(customer){
    this.customerService.deleteAllCustomer(customer);
    this.customerService.getCustomers();

  }
  deleteCustomer(c){
    // this.customerService.deleteCustomer(c);
    this.customerService.deleteRemoteCustomer(c).subscribe((e) => {
      this.customerService.getRemoteCustomers().subscribe((result) => {this.list = result;});
    });

  }
 onEdit(c){
  //this.customer= this.customerService.getCustomerById(c);
  this.router.navigate(['/editcustomer/'+c.id]);

 }

}
