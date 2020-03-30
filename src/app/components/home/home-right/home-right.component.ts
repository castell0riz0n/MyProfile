import { Component, OnInit } from '@angular/core';
import { Personinfo, IGetResumeResponse, ContactInfo } from '../../../models/IGetResumeResp.interface';
import { TooltipConfig } from 'ngx-bootstrap/tooltip';
import { DataService } from '../../../services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

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
  _contactInfo: ContactInfo = {
    emailAddress: '',
    phoneNumber: '',
    mobileNumber: '',
    linkedIn: '',
    github: '',
    telegramAccount: '',
    personId: 0,
    userId: 0,
    id: 0
  }

  constructor(
    private _data: DataService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this._data.currentResumeData.subscribe(res => {
      this._personInfo = res.person;
      this._contactInfo = res.contactInfo;
    });
  }

  sanitize(url: string) {
    return this._sanitizer.bypassSecurityTrustUrl(url);
  }

}
export function getAlertConfig(): TooltipConfig {
  return Object.assign(new TooltipConfig(), {
    placement: 'top',
    container: 'body'
  });
}
