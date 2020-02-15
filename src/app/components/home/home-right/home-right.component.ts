import { Component, OnInit } from '@angular/core';
import { Personinfo, IGetResumeResponse } from '../../../models/IGetResumeResp.interface';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-home-right',
  templateUrl: './home-right.component.html',
  styleUrls: ['./home-right.component.scss']
})
export class HomeRightComponent implements OnInit {
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
  }

}
export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'top',
    container: 'body'
  });
}
