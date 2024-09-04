import got from 'got';

export default class RequestBuilder {
   constructor() {
    this.options = {}
        responseType: 'json'
   }

    url(url) {
        this.options.url = url;
        return this;
    }

    data(data) {
        this.options.json = data;
        return this;
    }


    async get() {
        return got.get(this.options)
    }

    async post() {
        return got.post(this.options)
    }
}