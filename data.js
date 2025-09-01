/***********************************************
 * Data.js
 *
 * For the mildly important variables n stuff
 **********************************************/

var bleh = {};
bleh.rewrites = 4;

bleh.start = function() {
    bleh.fps = 60;
    
    bleh.resources = { Coal: 0 };
    bleh.upgrades = {};
    bleh.buildings = {};

    bleh.displayelements = {buildings: [], upgrades: [], achievements: []};

    const generatorbox = document.querySelector('.generatorBox');
    const coaldisplay = document.getElementById('coalDisplay');
    const imagebox = document.querySelector('.imageBox');
}
