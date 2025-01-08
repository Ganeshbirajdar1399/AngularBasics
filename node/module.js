const PORT = 3000;

const sum = (a, b) => {
    return a + b;
};

module.exports = { PORT, sum };

//it is single .js file
//it may contain variable,objects and function etc.
//a module can export any of the above entities
//we need to export the module
//import using "require" keyword