import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL } from '../Class/BaseUrl';
import { EndRout } from '../Class/rout';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  public getCustomer(){
    return this._http.get(`${BASEURL}${EndRout.CUSTOMER}`)
  }
  public postCustomer(customer:any){
    return this._http.post(`${BASEURL}${EndRout.CUSTOMER}`,customer)

  }
  public deleteCustomer(id:number){
    return this._http.delete(`${BASEURL}${EndRout.CUSTOMER}/${id}`)

  }
  public getCustomerById(id:number){
    return this._http.get(`${BASEURL}${EndRout.CUSTOMER}/${id}`)

  }
  public UpdateCustomer(id:number,customer:any){
    return this._http.put(`${BASEURL}${EndRout.CUSTOMER}/${id}`,customer)

  }
  
}
