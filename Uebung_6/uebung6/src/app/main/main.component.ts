import { Component, OnInit } from '@angular/core';
import {Member} from "../shared/members";
import {MembersService} from "../shared/members.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  buttonText = 'Tabelle anzeigen';
  show = true;
members: Member[] | undefined;


  constructor() {

  }

  ngOnInit(): void {
  }
  tableOnOff(): void{
    if(this.buttonText === 'Tabelle anzeigen'){
      this.buttonText = 'Tabelle verstecken';
      this.show = false;
    }
    else{
      this.buttonText = 'Tabelle anzeigen';
      this.show = true;
    }
  }
}
