import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {
        Authorization: 'XpIC9SGQYhH18rPQUmAu1kaJBeFXwJycwHkNCqUjDD8aR5zVFLdIzCSt'
    }
})