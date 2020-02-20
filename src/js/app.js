import '../scss/app.scss';
import '../pug/index.pug';

import '@babel/polyfill';
import slider from './slider';
import LazyLoad from './lazyload';

// check if browser supports webp format images
async function supportsWebp() {
    if (!self.createImageBitmap) return false;

    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
};

(async () => {
    if (!(await supportsWebp())) {
        document.body.classList.add("no-webp");
    }
})();

// show html after load
window.onload = function() {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
        // ... more custom settings?
    });
    document.body.classList.add('page-loaded');
    document.getElementById('loading').classList.add("hidden");
}

if (document.getElementsByClassName("slides").length) {
    var mySlider = slider('.slides');
}

var nav = document.querySelector('nav');
var navTrigger = document.getElementById('nav-trigger');
var menu = document.querySelector('.nav-links');

document.addEventListener('click', function(){}, {passive: false})

// Setup our function to run on various events
var toggleMenu = function (event) {

    if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        navTrigger.setAttribute('aria-label', 'open navigation menu');
        menu.classList.add('hidden');
    } else {
        nav.classList.add('open');
        navTrigger.setAttribute('aria-label', 'close navigation menu');
        menu.classList.remove('hidden');
    }
};

// Add our event listeners
navTrigger.addEventListener('click', toggleMenu, false);

// console.log('Hi, my name is Ukyo!'); // eslint-disable-line no-console
