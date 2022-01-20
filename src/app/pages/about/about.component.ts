import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() hello:string='';

  @Output() parent=new EventEmitter<string>();

  constructor(private title:Title) { 
    this.title.setTitle("About Us")
  }

  ngOnInit(): void {
  }
  send(txt:string){
    this.parent.emit(txt)
  }

}
