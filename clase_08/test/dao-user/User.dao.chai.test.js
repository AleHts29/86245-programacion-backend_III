import mongoose from "mongoose";
import UserDao from "../../src/dao/Users.dao.js";
import chai from "chai";

const expect = chai.expect;

// Conexion a la DB
mongoose.connect(`mongodb://localhost:27017/clase40-adoptme-test?retryWrites=true&w=majority`)



describe("Testing Users Dao", () => {
    // Before
    // BeforeEach
    //
    // it: Test_01
    // it: Test_02
    // it: Test_03
    // ...
    //
    // AfterEach
    // After

    before(function () {
        this.userDao = new UserDao();
    })


    beforeEach(function () {
        this.timeout(5000);
        mongoose.connection.collections.users.drop();
    })

    it('El dao debe devolver los usuarios en formato de arreglo.', async function () {
        // Given
        const isArray = true;


        // Then
        const users = await this.userDao.get();
        // console.log(`Usuarios obtenidos: ${JSON.stringify(users)}`);

        // Assert
        expect(Array.isArray(users)).to.be.equal(isArray);
        expect(users.length).to.be.equal(0);
        expect(users).to.be.deep.equal([]);

    })


    it('El Dao debe agregar el usuario correctamente a la BD.', async function () {
        // Given
        const user = {
            first_name: "Juan",
            last_name: "Perez",
            email: "juan.perez@example.com",
            password: "123456"
        };

        // Then
        const result = await this.userDao.save(user);
        // console.log(`Usuario agregado: ${result}`);


        // Assert
        expect(result._id).to.be.ok;
        expect(result.first_name).to.be.equal("Juan");
    })





})


// como ejecutar el test: npx mocha test/dao-user/User.dao.test.js