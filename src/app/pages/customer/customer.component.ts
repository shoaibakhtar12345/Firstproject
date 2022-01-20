import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  Customer:any
  customer:FormGroup

  constructor(private _customerService:CustomerService) {
    this.customer=new FormGroup({
      "firstname":new FormControl(''),
      "lastname":new FormControl(''),
      "Email":new FormControl(''),
      "gender":new FormControl(''),
      "id":new FormControl(null)
    })
   }
  ngOnInit(): void {
    this.LoadCustomer()
  }
  LoadCustomer(){
this._customerService.getCustomer().subscribe(result=>{
  //console.log(result)
  this.Customer=result;
})
  }
  submit(){
    console.log(this.customer.value);
    const data=this.customer.value;
    if(data.id==null){
      this._customerService.postCustomer(data).subscribe((result:any)=>{
        console.log(result)
        this.LoadCustomer()
        this.customer.reset()
      })
    }
   else{
     const id=data.id;
     delete data.id;
     this._customerService.UpdateCustomer(id,data).subscribe((response)=>{
       console.log(response)
       this.LoadCustomer()
       this.customer.reset()
     })
   } 
  }
  public deleteCustomer(id:number){
    event?.preventDefault()
    this._customerService.deleteCustomer(id).subscribe((response)=>{
      console.log(response)
      this.LoadCustomer()
    })

  }
  public Edit(id:number){
    event?.preventDefault()
    this._customerService.getCustomerById(id).subscribe((response)=>{
      console.log(response)
      this.customer.setValue({...response})
    })

  }

}
