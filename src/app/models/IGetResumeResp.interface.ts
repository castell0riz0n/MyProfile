import { SkillLevel } from '../enums/skill-level.enum';

export interface BaseResponse<T> {
  result: T;
  targetUrl: string | null;
  success: boolean;
  error: object | null;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}


export interface IGetResumeResponse {
  person: Personinfo;
  contactInfo: ContactInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  educations: Education[];
  certificates: Certificate[];
  hobbiesAndInterests: HobbyAndInterest[];
}

export interface Personinfo {
  firstName: string;
  lastName: string;
  nationality: string;
  birthDate: string;
  about: string;
  userId: number;
  id: number;
}

export interface ContactInfo {
  emailAddress: string;
  phoneNumber: string;
  mobileNumber: string;
  linkedIn: string;
  github: string;
  telegramAccount: string;
  personId: number;
  userId: number;
  id: number;
}

export interface Experience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  stillWorkingHere: boolean;
  details: string;
  personId: number;
  userId: number;
  id: number;
}

export interface Skill {
  skillName: string;
  level: SkillLevel;
  personId: number;
  userId: number;
  id: number;
}

export interface Project {
  ProjectName: string;
  ProjectDetails: string;
  WorkingOnThisProject: boolean;
  Year: number | null;
  PersonId: number;
  UserId: number;
}

export interface Education {
  InstituteName: string;
  DegreeName: string;
  StartDate: Date | string;
  EndDate: Date | string | null;
  StillWasteMyTimeHere: boolean;
  FiledOfStudy: string;
  PersonId: number;
  UserId: number;
}

export interface Certificate {
  CertificateName: string;
  InstituteName: string;
  Year: number | null;
  PersonId: number;
  UserId: number;
}

export interface HobbyAndInterest {
  Name: string;

  Details: string;

  Icon: string;

  PersonId: number;

  UserId: number;
}


export class GetResumeResponse implements IGetResumeResponse {
  constructor() { }
  person: Personinfo;
  contactInfo: ContactInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  educations: Education[];
  certificates: Certificate[];
  hobbiesAndInterests: HobbyAndInterest[];
}
