import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { IGetResumeRequest } from '../models/IGetResumeReq.interface';
import { RequestType } from '../enums/request-type.enum';
import { BaseResponse, IGetResumeResponse, GetResumeResponse } from '../models/IGetResumeResp.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  _apiUrl = environment.apiBaseUrl;

  resumeData = new BehaviorSubject<IGetResumeResponse>(null);
  currentResumeData = this.resumeData.asObservable();
  constructor(
    private _http: HttpClient
  ) { }

  getAllResumeInfo(): Promise<any> {
    localStorage.removeItem('pData');
    const req: IGetResumeRequest = {
      PersonId: environment.personId,
      RequestType: RequestType.All
    };

    return this._http.post(this._apiUrl + 'Resume/GetResume', req).pipe(map((res: BaseResponse<IGetResumeResponse>) => {
      const Result = res.result;
      if (!Result) {
        console.log(res);
      }
      this.updateResumeData(res.result);
      localStorage.setItem('pData', JSON.stringify(res.result));
      return Result;
    }))
      .toPromise()
      .catch((err: any) => {
        console.log(err);
        return Promise.resolve();
      });
  }

  updateResumeData(data: IGetResumeResponse) {
    this.resumeData.next(data);
  }

}
