import axios from 'axios'

export function login(data) {
    return axios({
        method: 'post',
        url: '/login/',
        data: JSON.stringify(data)
    })
}