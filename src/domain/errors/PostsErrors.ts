import { CustomError } from '@errors/CustomError'

class PostErrorNotFound extends CustomError {
  constructor(message: string = 'Posts have not been found') {
    super(message)
    this.name = 'PostErrorNotFound'
  }
}

const PostsErrors = {
  PostErrorNotFound,
}

export default PostsErrors
