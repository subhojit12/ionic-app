import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {
  constructor() { }

customers=[
{id:1,name:'Rudra',email:"Rudra@hshs",phone:"4567899393",address:"INDIA"},
// {id:2,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
// {id:3,name:'Rudra',email:"Rudra@hshs",phone:"4567899393",address:"INDIA"},
// {id:4,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
// {id:5,name:'Rudra',email:"Rudra@hshs",phone:"4567899393",address:"INDIA"},
// {id:6,name:'Gouda',email:"Goudaa@hshs",phone:"111119393",address:"ASIA"},
];
 

getCustomers(){
  
  if(localStorage.getItem('customers') != null){
    this.customers = JSON.parse(localStorage.getItem('customers'));
  }
  return this.customers;
}
addUpdateCustomer(customer){
  var updated = false;
  for(var i = 0; i < this.customers.length; i++){
    if(customer.id == this.customers[i].id){
      updated = true;
      this.customers[i] = customer;
      break;
    }
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
  if(!updated){
    customer.id = Math.round(Math.random()*1000000);
     this.customers.push(customer);
     localStorage.setItem('customers', JSON.stringify(this.customers));
   }
   
}

deleteAllCustomer(id){
  for(var i = 0; i< this.customers.length; i++){
    this.customers.splice(i, this.customers.length);
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }
}
deleteCustomer(c){
  for(var i = 0; i< this.customers.length; i++){
    if(c.id == this.customers[i].id){
      this.customers.splice(i, c.id);
      localStorage.setItem('customers', JSON.stringify(this.customers));
    }
    
  }
}
getCustomerById(id:number){
  for(var i = 0; i<this.customers.length; i++){
    if(this.customers[i].id==id){
      return this.customers[i];
    }
   
    }
  };
 
  
}