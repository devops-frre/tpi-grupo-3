import { UserType } from './models'

export enum AuthUserType {
  User = 'User',
}

export enum JWTEnum {
  Authentication = 'Authentication',
  PasswordChange = 'PasswordChange',
  Verification = 'Verification',
}

export enum AuthenticateEnum {
  JWT = 'jwt',
  PasswordChange = 'passwordChangeJwt',
  Verification = 'verificationJwt',
  UserLogin = 'userLocal',
}

// TODO when admins are incorpored to the scheme, you must add  type as required

export interface AuthenticatedUser {
  id: number
  email: string
  type?: UserType
}
