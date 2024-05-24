

import { PermissionValues } from './permission.model';


export interface LoginResponse {
  user: string;
  token: string;
}


export interface IdToken {
  iat: number;
  exp: number;
  iss: string;
  aud: string | string[];
  sub: string;
  role: string | string[];
  permission: PermissionValues | PermissionValues[];
  name: string;
  email: string;
  phone_number: string;
  fullname: string;
  jobtitle: string;
  configuration: string;
}
