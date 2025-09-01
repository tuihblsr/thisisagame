/***********************************************
 * Data.js
 *
 * For the mildly important variables n stuff
 **********************************************/

var bleh = {};
bleh.rewrites = 4;

bleh.start = function() {
    bleh.resources = { Coal: 0 };
    bleh.upgrades = {};
    bleh.buildings = {};

    bleh.renderedgenerators = new Set();

    /*  Now for the elements  */
    const generatorbox = document.querySelector('.generatorBox');
    const coaldisplay = document.getElementById('coalDisplay');
    const imagebox = document.querySelector('.imageBox');
}
