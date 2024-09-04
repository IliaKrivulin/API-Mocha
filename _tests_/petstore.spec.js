import got from 'got'
import { expect } from 'expect'
//import { PetController } from '../api/controllers/pet.controller'

describe('Petstore API testing', () => {
    it('Test case 1 - Sending an image', async () => {
      let pet_id = 833
        const responce = await got.post('https://petstore.swagger.io/v2/pet', {
          json:  {
            "id": pet_id,
            "additionalMetadata": 833
                    
          }})
          const body = JSON.parse(responce.body)
          expect(body.id).toEqual(pet_id)   
    })  

    it('Test case 2 - Create, update and search', async () => {
        let pet_id = 200
        const responce = await got.post('https://petstore.swagger.io/v2/pet', {
          json:  {
            "id": pet_id,
            "category": {
              "id": 3,
              "name": "Skillbox_pet_name"
            },
            "name": "Skillbox_pet_snake",
            "status": "available"
          }
        })

        const responceUpdate = await got.put('https://petstore.swagger.io/v2/pet', {
            json:  {
              "id": pet_id,
              "category": {
                "id": 4,
                "name": "Skillbox_pet_newnames"
              },
              "name": "Skillbox_pet_newsnake",
              "status": "available"
            }
        })
        const responceget = await got.get('https://petstore.swagger.io/v2/pet/200')
        const body = JSON.parse(responce.body)
        expect(body.id).toEqual(pet_id)
     }) 

    it('Test case 3 - Create, delete and search', async () => {
        let pet_id = 300
        const responce = await got.post('https://petstore.swagger.io/v2/pet', {
          json:  {
            "id": pet_id,
            "category": {
              "id": 3,
              "name": "Skillbox_pet_name"
            },
            "name": "Skillbox_pet_rabbit",
            "status": "available"
          }
        })
        const responcedelete = await got.delete('https://petstore.swagger.io/v2/pet/300')
        const body = JSON.parse(responce.body)
        expect(body.id).toEqual(pet_id)
    }) 

    it('Test case 4 - Pet inventory', async () => {
        const responceinventory = await got.get('https://petstore.swagger.io/v2/store/inventory')
        let pet_id = 300
        const responce = await got.post('https://petstore.swagger.io/v2/pet', {
          json:  {
            "id": pet_id,
            "category": {
              "id": 3,
              "name": "Skillbox_pet_name"
            },
            "name": "Skillbox_pet_rabbit",
            "status": "available"
          } 
        })
         const responceinventory2 = await got.get('https://petstore.swagger.io/v2/store/inventory')
         const body = JSON.parse(responce.body)
         expect(body.id).toEqual(pet_id)
         console.log(body)
    }) 
})