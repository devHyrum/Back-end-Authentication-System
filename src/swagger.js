import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Back-end Authentication System',
        description: 'Mini Proyecto 1',
    },
    host: 'localhost:3000', // Cambia esto a tu host actual
    schemes: ['http'], // Cambia esto a https si usas https
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.js']; // Añade aquí las rutas que quieres documentar

swaggerAutogen(outputFile, routes, doc)