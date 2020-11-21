// COMMENT: no-unused-vars is not working properly for types https://github.com/typescript-eslint/typescript-eslint/issues/1479
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthenticatedUser } from './auth'

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends AuthenticatedUser {}
  }
}
