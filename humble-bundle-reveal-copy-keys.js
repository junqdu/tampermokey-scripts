// ==UserScript==
// @name         HB Reveal Key
// @version      0.3
// @description  Bulk reveal and copy keys from Humble Bundle
// @match        https://www.humblebundle.com/downloads*
// @icon         https://www.google.com/s2/favicons?domain=humblebundle.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const keyContainer = document.getElementsByClassName('key-container')[0];

  const revealAll = () => {
    for (const element of document.getElementsByClassName('js-keyfield')) {
      element.click();
    }
  };

  const copyAll = () => {
    const titles = document.getElementsByClassName('heading-text');
    const keys = document.getElementsByClassName('keyfield-value');
    let result = '';
    for (let i = 0; i < titles.length; i++) {
      result += `${titles[i].innerText} - ${keys[i]?.innerText}\n`;
    }
    navigator.clipboard.writeText(result);
  };

  const revealButton = document.createElement('button');
  revealButton.innerText = 'Reveal All Keys';
  revealButton.onclick = revealAll;

  const copyButton = document.createElement('button');
  copyButton.innerText = 'Copy All Keys';
  copyButton.onclick = copyAll;

  keyContainer.prepend(revealButton, copyButton);
})();
