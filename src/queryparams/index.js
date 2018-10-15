/**
 * @memberof JsBrowser
 * @function init
 * @description Return the message + ' world'
 * @param {Object} options (see attributes below)
 * @param {String} [options.message=''] message to show
 * @returns {String} Your message + ' world'

 *
 * @example
 * // Initialize JsBrowser
 *  var foo = JsBrowser.init({
 *      message: 'hello'
 *  });
 *  console.log(foo);
 */

export default () =>  {
    // take from BarneyBrowser.getQueryParams, we can change this after
    const url = window.location.href;
    const vars = {};
    let hash;

    if (url.indexOf('?') !== -1) {
        const querystring = url.slice(url.indexOf('?') + 1);
        if (querystring) {
            const hashes = querystring.split('&');
            for (let i = 0; i < hashes.length; i++) {
                if (hashes[i].indexOf('=') !== -1) {
                    hash = hashes[i].split('=');

                    vars[hash[0]] = window.decodeURIComponent(hash[1]);
                }
            }
        }
    }
    return vars;
};