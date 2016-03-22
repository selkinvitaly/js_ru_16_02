export function increment(value) {
    return {
        type: 'increment',
        data: { value }
    }
}