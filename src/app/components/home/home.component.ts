import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DataService } from '../../services/data.service';
import { Personinfo } from '../../models/IGetResumeResp.interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  deviceInfo: any = {};
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktopDevice: boolean = false;

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
    private deviceDetector: DeviceDetectorService,
    private _data: DataService
  ) {
    this.epicFunction();
  }

  ngOnInit() {
    this._data.currentResumeData.subscribe(res => this._personInfo = res.person);
    console.log(this._personInfo);
  }

  epicFunction() {
    this.deviceInfo = this.deviceDetector.getDeviceInfo();
    this.isMobile = this.deviceDetector.isMobile();
    this.isTablet = this.deviceDetector.isTablet();
    this.isDesktopDevice = this.deviceDetector.isDesktop();
  }
}
