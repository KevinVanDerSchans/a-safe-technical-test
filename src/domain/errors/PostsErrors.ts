import { CustomError } from '@errors/CustomError'

class PostsErrorNotFound extends CustomError {
  constructor(message: string = 'Posts have not been found') {
    super(message)
    this.name = 'PostErrorNotFound'
  }
}

class PostsErrorFetching extends CustomError {
  constructor(message: string = 'Error when fetching Posts') {
    super(message)
    this.name = 'PostErrorFetching'
  }
}

const PostsErrors = {
  PostsErrorNotFound,
  PostsErrorFetching,
}

export default PostsErrors
