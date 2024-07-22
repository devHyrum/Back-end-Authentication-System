import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Back-end Authentication System',
        description: 'Mini Proyecto 1',
    },
    host: 'localhost:3000', 
    schemes: ['http'], 
};

const outputFile = './swagger-output.json';
const routes = ['./src/index.js']; 

swaggerAutogen(outputFile, routes, doc)