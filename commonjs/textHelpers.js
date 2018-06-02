// export mulitple functions
const print = (message) => log(message, new Date());

const log  = (message, timestamp) => console.log(`${timestamp.toString()}:${message}`);

const TEST_STRING = 'test';

module.exports = {print, log, TEST_STRING};