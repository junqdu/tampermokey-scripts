// ==UserScript==
// @name         Cube Cobra Arrow Replace
// @version      0.1
// @description  Replace the arrow icon in History tab with ->
// @match        https://cubecobra.com/cube/history/*
// @icon         https://www.google.com/s2/favicons?domain=cubecobra.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
  
    const keyContainer = document.getElementsByClassName('infinite-scroll-component__outerdiv')[0];
  
    const onClick = () => {
        const arrows = document.querySelectorAll('.d-sm-block a+svg.mx-1');
        arrows.forEach(element => {
            element.outerHTML = '->';
        })
    };
  
    const populateButton = document.createElement('button');
    populateButton.innerText = 'Replace Arrows';
    populateButton.onclick = onClick;
  
    keyContainer.prepend(populateButton);
  })();