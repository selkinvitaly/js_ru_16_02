
export default (state = 0, action) => {
    const { data, type } = action
    switch (type) {
        case 'increment': return state + data.value
    }
    return state
}