
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import CustomerService from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private customerService:CustomerService,private router:Router) { }
  id: number;
  private sub: any;
  customer:any;
  // addUpdateCustomer(customer){
  //   this.customerService.addUpdateCustomer(customer);
  //   this.router.navigate(['/list-customer'])
  //   this.customerService.getCustomers();
  // }

  ngOnInit() {
    this.customer={id:0,name:'',email:'',address:''}
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       console.log("id is "+this.id);
       this.customerService.getRemoteCustomerById(this.id).subscribe((customer)=>{
         this.customer=customer
       })
      //  this.customer = this.customerService.getCustomerById(this.id);

       // In a real app: dispatch action to load the details here.
    });
  }
  addUpdateCustomer(customer){
    this.customerService.updateRemoteCustomer(customer).subscribe(()=>{

      this.router.navigate(['/list-customer']);
    })
  }
}
