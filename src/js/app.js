import '../scss/app.scss';
import '../pug/index.pug';

import '@babel/polyfill';
import slider from './slider';

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
