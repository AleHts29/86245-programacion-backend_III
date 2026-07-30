import chai from 'chai';
import supertest from 'supertest';


const expect = chai.expect;
const requester = supertest('http://localhost:8081');



describe('Testing AdoptMe App', () => {


    /*=============================================
    =                   Section 01                =
    =============================================*/
    describe('Testing Pets Api', () => {


        // test_01
        it("Crear Mascota: El API POST /api/pets debe crear una nueva mascota correctamente", async () => {
            // Given
            const newPet = {
                name: "Firulais",
                specie: "Perro",
                birthDate: "2020-01-01",
            }

            // Then
            const { statusCode, ok, _body } = await requester.post('/api/pets').send(newPet);
            // console.log("Response:", { statusCode, ok, _body });


            // Assert
            expect(statusCode).to.be.equal(200);
            expect(_body.payload).is.ok.and.to.have.property('_id')
            expect(_body.payload.name).to.be.equal(newPet.name)
            expect(_body.payload).to.have.property('adopted').that.is.false
        })


        // test_02
        it("Crear Mascota sin nombre: El API POST /api/pets debe retornar un estado HTTP 400 con error.", async () => {
            // Given
            const newPet = {
                specie: "Perro",
                birthDate: "2020-01-01",
            }

            // Then
            const { statusCode, ok, _body } = await requester.post('/api/pets').send(newPet);
            // console.log("Response:", { statusCode, ok, _body });


            // Assert
            expect(statusCode).to.be.equal(400);
            expect(_body).is.ok.and.to.have.property('error').that.is.equal('Incomplete values')
        })


        // test_03
        it("Crear mascota con Avatar (Test con uploads): Debe poder crearse una mascota con la ruta de la imagen.", async () => {
            // Given
            const newPet = {
                name: "Firulais",
                specie: "Perro",
                birthDate: "2020-01-01",
            }

            // Then
            const result = await requester.post('/api/pets/withimage')
                .field('name', newPet.name)
                .field('specie', newPet.specie)
                .field('birthDate', newPet.birthDate)
                .attach('image', './test/files/coderDog.jpg');



            // Assert
            expect(result.statusCode).to.be.equal(200);
            expect(result._body.payload.image).is.ok;
        })

    })




    /*=============================================
    =                   Section 02                =
    =============================================*/
    describe('Testing Users Api', () => {

        before(function () {
            this.cookie;
            this.mockUser = {
                first_name: "Test",
                last_name: "User",
                email: "testuser@example.com",
                password: "testpassword",
            }
        })


        // test_01 --> User register
        it("Test Registro Usuario: Debe poder registrar correctamente un usuario", async function () {

            // then
            const { statusCode, ok, _body } = await requester.post('/api/sessions/register').send(this.mockUser);


            // Assert
            expect(statusCode).to.be.equal(200);
            // expect(_body.payload.email).to.be.equal(this.mockUser.email)
        })



        // // test_02 --> User login
        it("Test Login Usuario: Debe poder hacer login correctamente con el usuario registrado previamente.", async function () {
            //Given
            const loginCredentials = {
                email: this.mockUser.email,
                password: this.mockUser.password
            }

            // then
            const result = await requester.post('/api/sessions/login').send(loginCredentials);
            const cookieResult = result.headers['set-cookie'][0];



            // necesitamos extraer la cookie de la respuesta para usarla en la siguiente prueba
            const cookieData = cookieResult.split('=')
            this.cookie = {
                name: cookieData[0],
                value: cookieData[1]
            }



            // Assert
            expect(cookieResult).to.be.ok.and.to.include('coderCookie=');
            expect(result.statusCode).to.be.equal(200);

        })




        // test_03 --> User login with wrong credentials
        it("Test Ruta Protegida: Debe enviar la cookie que contiene el usuario y destructurarla correctamente.", async function () {


            // then
            const result = await requester.get('/api/sessions/current').set('Cookie', [`${this.cookie.name}=${this.cookie.value}`]);



            // Assert
            expect(result.statusCode).to.be.equal(200);
            expect(result._body.payload.email).to.be.equal(this.mockUser.email)
        })


    })

})