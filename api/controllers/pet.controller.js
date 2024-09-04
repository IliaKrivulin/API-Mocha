import RequestBuilder from './requestBuilder.js';

export default class PetController {
    async getById(pet_id) {
        return (await new RequestBuilder()
           .url('https://petstore.swagger.io/v2/pet/${pet_id}')
           .get()).body;
    }

    async addPet(data = {}) {
        return new RequestBuilder()
           .url('https://petstore.swagger.io/v2/pet/${pet_id}')
           .data(data) 
           .post().body;  
    }       
}