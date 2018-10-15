import Browser from '../src/index.js';

let pageIndex = 0;
let paramIndex = 0;
let params = '';

window.shiftPage = () => {
    Browser.shiftPage(params + pageIndex);
    pageIndex += 1;


    console.log(['Browser.getPrevPage:', Browser.getPrevPage()])
    document.getElementById('prevPage').innerText = JSON.stringify(Browser.getPrevPage());
};



window.addQueryParams = () => {
    params = params + `params${paramIndex}=${paramIndex}&`;
    if (history.pushState) {
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +  `?${params}`;
        window.history.pushState({ path: newurl }, '', newurl);
    }

    paramIndex += 1;

    console.log(['Browser.getQueryParams:', Browser.getQueryParams()])
    document.getElementById('queryParams').innerText = JSON.stringify(Browser.getQueryParams());
}