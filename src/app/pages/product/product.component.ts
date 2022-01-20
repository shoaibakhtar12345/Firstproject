import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private title:Title,private meta:Meta,
    private http:HttpClient) { 
    this.title.setTitle("Product")
    this.meta.addTag({
      name:'Product Page',
      content:'Books, Mobiles,Jeans,T-Shirts'
    })
    this.Callapi()
    
  }
  Callapi(){
this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe((a:any)=>{
  console.log(a)
})
  }
  

  ngOnInit(): void {
  }
  

}
