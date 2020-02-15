import { Component, OnInit } from '@angular/core';
import { Personinfo } from '../../../models/IGetResumeResp.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home-left',
  templateUrl: './home-left.component.html',
  styleUrls: ['./home-left.component.scss']
})
export class HomeLeftComponent implements OnInit {

  _personInfo: Personinfo = {
    about: '',
    birthDate: '',
    firstName: '',
    lastName: '',
    nationality: '',
    userId: 0,
    id: 0
  };

  constructor(
    private _data: DataService
  ) { }

  ngOnInit() {
    this._data.currentResumeData.subscribe(res => this._personInfo = res.person);
    console.log(this._personInfo);

  }

}
