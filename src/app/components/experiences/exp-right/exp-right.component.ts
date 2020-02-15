import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../models/IGetResumeResp.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-exp-right',
  templateUrl: './exp-right.component.html',
  styleUrls: ['./exp-right.component.scss']
})
export class ExpRightComponent implements OnInit {
  _experienceList = {} as Experience[];
  constructor(
    private _data: DataService
  ) {
    this._data.currentResumeData.subscribe(res => this._experienceList = res.experiences);
  }

  ngOnInit() {
    console.log(this._experienceList);
  }

}
