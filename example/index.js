import JsBrowser from '../src/index.js';

const foo = JsBrowser.init({
    message: 'hello'
});

document.write(foo);
console.log(foo);