import { RequestType } from '../enums/request-type.enum';
export interface IGetResumeRequest {
  PersonId: number;
  RequestType: RequestType;
}
