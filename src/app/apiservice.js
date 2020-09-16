import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService {
    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    post(url, obj) {
        return httpClient.post(url, obj);
    }

    put(url, obj) {
        return httpClient.put(url, obj)
    }

    delete(url) {
        return httpClient.delete(url)
    }

    get(url) {
        return httpClient.get(url)
    }
}

export default ApiService