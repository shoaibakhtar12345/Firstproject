import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message:string='No'
  childmsg:string=''

  constructor(private title:Title) { 
    this.title.setTitle("Home")
  }
  ngOnInit(): void {
  }
  data(txt:string){
    console.log(txt)
    this.childmsg=txt
  }

}
