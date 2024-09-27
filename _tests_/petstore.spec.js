import got from 'got';
import { expect } from 'expect';

describe('Petstore API testing', () => {
    it('Test case 1 - Sending an image', async () => {
        let pet_id = 833;
        const response = await got.post('https://petstore.swagger.io/v2/pet', {
            json: {
                "id": pet_id,
                "additionalMetadata": 833
            },
            responseType: 'json'
        });
        expect(response.body.id).toEqual(pet_id);
    });

    it('Test case 2 - Create, update and search', async () => {
        let pet_id = 200;
        await got.post('https://petstore.swagger.io/v2/pet', {
            json: {
                "id": pet_id,
                "category": {
                    "id": 3,
                    "name": "Skillbox_pet_name"
                },
                "name": "Skillbox_pet_snake",
                "status": "available"
            },
            responseType: 'json'
        });

        await got.put('https://petstore.swagger.io/v2/pet', {
            json: {
                "id": pet_id,
                "category": {
                    "id": 4,
                    "name": "Skillbox_pet_newnames"
                },
                "name": "Skillbox_pet_newsnake",
                "status": "available"
            },
            responseType: 'json'
        });

        const responseGet = await got.get(`https://petstore.swagger.io/v2/pet/${pet_id}`, { responseType: 'json' });
        expect(responseGet.body.id).toEqual(pet_id);
    });

    it('Test case 3 - Create, delete and search', async () => {
        let pet_id = 300;
        const response = await got.post('https://petstore.swagger.io/v2/pet', {
            json: {
                "id": pet_id,
                "category": {
                    "id": 3,
                    "name": "Skillbox_pet_name"
                },
                "name": "Skillbox_pet_rabbit",
                "status": "available"
            },
            responseType: 'json'
        });

        await got.delete(`https://petstore.swagger.io/v2/pet/${pet_id}`);

        expect(response.body.id).toEqual(pet_id);
    });

    it('Test case 4 - Pet inventory', async () => {
        const responseInventory = await got.get('https://petstore.swagger.io/v2/store/inventory', { responseType: 'json' });
        let pet_id = 300;

        await got.post('https://petstore.swagger.io/v2/pet', {
            json: {
                "id": pet_id,
                "category": {
                    "id": 3,
                    "name": "Skillbox_pet_name"
                },
                "name": "Skillbox_pet_rabbit",
                "status": "available"
            },
            responseType: 'json'
        });

        const responseInventory2 = await got.get('https://petstore.swagger.io/v2/store/inventory', { responseType: 'json' });
        expect(responseInventory2.body).toBeDefined();
        console.log(responseInventory2.body);
    });
});
