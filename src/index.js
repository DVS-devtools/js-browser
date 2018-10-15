/**
 * @class JsBrowser
 * @description Description of your library
 */

import getQueryParams from './getQueryParams';

class Browser {
    constructor() {
        this.currentPage = null;
        this.prevPage = null;

        /**
         * @see modules/getQueryParams
         */
        this.getQueryParams = getQueryParams;
    }

    /**
     * @memberof JsBrowser
     * @function shiftPage
     * @description Adapt the Browser.prevPage and Browser.currentPage
     * according to route's changement.
     * **NB:** route changements must be specified in the routing changement function
     * @param {String} currentPage set the previous page to the actual Browser.currentPage, then
     * set the Browser.currentPage to the given new value
     *
     * @example
     * import Browser from 'js-browser';
     *
     *
     *  Browser.shiftPage('/newPage');
     */
    shiftPage(currentPage) {
        if (currentPage && this.currentPage !== currentPage) {
            this.prevPage = this.currentPage;
            this.currentPage = currentPage;
        }
    }

    /**
     * @memberof JsBrowser
     * @function getPrevPage
     * @description Return the previous page you visited, is empty return null.
     *
     * @example
     * import Browser from 'js-browser';
     *
     *
     *  const prevPage = Browser.getPrevPage();
     */
    getPrevPage() {
        return this.prevPage;
    }
}

export default new Browser();