import { MethodGet, MethodPost } from './Method'
import { cookiesGet } from './Cookies'

const token = cookiesGet({ key: 'token' })
const baseApi = process.env.REACT_APP_API


export const MakePost = async ({ url, data }) => {
  return await fetch(
    `${baseApi}${url}`,
    MethodPost({ token: token, data: data })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
    })
}

export const MakeGet = async function ({ url }) {
  return await fetch(
    `${baseApi}${url}`,
    MethodGet({ token: token })
  )
    .then(res => res.json())
    .catch(e => {
      console.error('err : ', e)
    })
}