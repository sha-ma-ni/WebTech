import { Component, OnInit } from '@angular/core';
import {Member} from "../shared/members";
import {MembersService} from "../shared/members.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  members: Member[] = [];  //???
  buttonText = 'Tabelle verstecken';
  show = true;

  constructor(private ms: MembersService) {}

  ngOnInit(): void {
    this.ms.getAll().then(resp => {
      this.members = resp;
    })
  }
  tableOnOff(): void{
    if(this.buttonText == 'Tabelle anzeigen'){
      this.buttonText = 'Tabelle verstecken';
      this.show = true;
    }
    else{
      this.buttonText = 'Tabelle anzeigen';
      this.show = false;
    }
  }
}
