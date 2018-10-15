/**
 * @class JsBrowser
 * @description Description of your library
 */

import getQueryParams from './getQueryParams';

class Browser {
    constructor() {
        this.currentPage = null;
        this.prevPage = null;
        this.getQueryParams = getQueryParams;
    }

    /**
     * @see modules/shiftPage
     */
    shiftPage(currentPage) {
        if (currentPage && this.currentPage !== currentPage) {
            this.prevPage = this.currentPage;
            this.currentPage = currentPage;
        }
    }

    /**
     * @see modules/getPrevPage
     */
    getPrevPage() {
        return this.prevPage;
    }
}

export default new Browser();