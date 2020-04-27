import get from 'lodash/fp/get'
import pipe from 'lodash/fp/pipe'

const getUser = get('user')

export const getUserToken = pipe(
    getUser,
    get('token')
)