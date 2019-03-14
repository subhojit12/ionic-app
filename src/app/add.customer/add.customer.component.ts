import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add.customer',
  templateUrl: './add.customer.component.html',
  styleUrls: ['./add.customer.component.scss'],
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService:CustomerService,private router:Router ) { }
  customers = this.customerService.getCustomers();
  customer = { id:0, name:'', email:'', address:'', phone:''}
  ngOnInit() {}

  addUpdateCustomer(customer){
    this.customerService.addUpdateCustomer(customer);
    this.router.navigate(['/list-customer'])
    this.customerService.getCustomers();
  }

  getCustomertById(id){
    this.customerService.getCustomerById(id);
    }


  
}
