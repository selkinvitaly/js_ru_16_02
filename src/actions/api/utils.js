import AppDispatcher from '../../dispatcher'
import { _SUCCESS, _FAIL, _START } from '../constants'

export function asyncAC(type, apiCall) {
    return function(data) {
        AppDispatcher.dispatch({
            type: type + _START,
            data
        })

        setTimeout(() => {
            apiCall(data)
                .done((response) => AppDispatcher.dispatch({
                    type: type + _SUCCESS,
                    response,
                    data
                }))
                .fail((error) => AppDispatcher.dispatch({
                    type: type + _FAIL,
                    error,
                    data
                }))
        }, 1000)
    }
}