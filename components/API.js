import { BASE_URL, API_KEY } from '../hooks/config'

export const GET = async (url) => {
    const API_URL = `${BASE_URL}${url}?api_key=${API_KEY}`

    let response = await fetch(API_URL, { method: 'GET', query: searchKey })

    return response
}