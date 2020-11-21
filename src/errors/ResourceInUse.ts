import { GenericError } from './GenericError'

class ResourceInUse extends GenericError {
  constructor(resource: string) {
    super(400, `${resource} already used.`, 'ResourceInUse')
  }
}

export { ResourceInUse }
