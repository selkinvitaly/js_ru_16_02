import {comments as defaultComents} from '../fixtures'
import { ADD_COMMENT } from '../actions/constants'

export default (comments = defaultComents, action) => {
    const { type, data, generatedId:id } = action

    switch (type) {
      case ADD_COMMENT:
        return comments.concat({id: id, text: data.text});
    }

    return comments
}
