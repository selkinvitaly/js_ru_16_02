import { LOGIN } from './constants'
import AppDispatcher from '../dispatcher'

export function login() {
    AppDispatcher.dispatch({
        type: LOGIN,
        data: {
            username: 'roma'
        }
    })
}