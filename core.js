/***********************************************
 * Core.js
 *
 * The main game loop and stuff
 **********************************************/

bleh.updoot = function() {
    bleh.resourcetick();
    bleh.updateui();
}

window.addEventListener("DOMContentLoaded", () => {
    bleh.start();
    setInterval(bleh.updoot, 1000 / bleh.fps);
})
