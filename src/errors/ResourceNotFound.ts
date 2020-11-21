import { GenericError } from './GenericError'

class ResourceNotFound extends GenericError {
  constructor(resource: string) {
    super(404, `${resource} not found`, 'ResourceNotFound')
  }
}

export { ResourceNotFound }
