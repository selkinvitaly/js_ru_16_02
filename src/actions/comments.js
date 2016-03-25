import { ADD_COMMENT } from './constants'

export function addComment(text, articleId) {
  return {
    type: ADD_COMMENT,
      data: {
        text, articleId
      }
  };
}
