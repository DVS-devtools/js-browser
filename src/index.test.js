import Browser from './';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

describe('Browser feature', () => {

    test('getPrevPage equal to null', () => {
        expect(Browser.getPrevPage()).toBe(null);
    });

    test('Get prevPage equal to null after shifting 1 page', () => {
        Browser.shiftPage('/test');
        expect(Browser.getPrevPage()).toBe(null);
    });

    test('Get prevPage equal to /test after shifting first to /test then to /anotherTest', () => {
        Browser.shiftPage('/test');
        Browser.shiftPage('/anotherTest');
        expect(Browser.getPrevPage()).toBe('/test');
    });

    test('Get none query params', () => {
        const queryParams = Browser.getQueryParams();
        expect(queryParams).toEqual({});
    })

    test('Get more query params after hashbang', () => {
        window.history.pushState({}, 'Test Title', '#!/test.html?aqueryParams=1&anotherQueryParams=2');
        const queryParams = Browser.getQueryParams();
        expect(queryParams).toEqual({"aqueryParams": "1", "anotherQueryParams": "2"});
    })


    test('Get single query params after hashbang', () => {
        window.history.pushState({}, 'Test Title', '#!/test.html?aqueryParams=1');
        const queryParams = Browser.getQueryParams();
        expect(queryParams).toEqual({"aqueryParams": "1"});
    });
})