import {comments as defaultComents} from '../fixtures'

export default (comments = defaultComents, action) => {
    const { type, data } = action

    switch (type) {

    }

    return comments
}