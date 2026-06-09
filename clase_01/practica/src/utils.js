import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { faker } from '@faker-js/faker';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default __dirname;



faker.locale = "es";

export const generateUser = () => {
    let numOfProducts = faker.random.numeric(1, { bannedDigits: ["0"] });

    const roles = ["admin", "user", "premium", "developer", "trainee"];


    let products = [];
    for (let i = 0; i <= numOfProducts; i++) {
        products.push(generateProduct());
    }


    // retornar un objeto user
    return {
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        sex: faker.name.sexType(),
        email: faker.internet.email(),
        products: products,
        role: roles[Math.floor(Math.random() * roles.length)]
    }
}


export const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        name: faker.commerce.product(),
        price: faker.commerce.price(),
        stock: faker.random.numeric(2),
        image: faker.image.image()
    }
}