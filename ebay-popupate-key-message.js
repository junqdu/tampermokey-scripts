// ==UserScript==
// @name         Ebay Message
// @version      0.1
// @description  Bulk reveal and copy keys from Humble Bundle
// @match        https://www.ebay.com/contact/sendmsg*
// @icon         https://www.google.com/s2/favicons?domain=ebay.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const keyContainer = document.getElementsByClassName('msg-wrapper')[0];

  const populateMessage = () => {
    const textarea = document.getElementById('msg_cnt_cnt');
    const userName = document.getElementById('user-title').textContent.split(' (')[0];
    const gameName = document.getElementById('item-title').textContent.split(' Steam ')[0];
    textarea.value = `Hi ${userName},

Here is the Steam key for ${gameName}, KEY, enjoy the game and if you are happy with your purchase, please leave me a positive feedback.

Thanks,`;
  };

  const populateButton = document.createElement('button');
  populateButton.innerText = 'Populate Message';
  populateButton.onclick = populateMessage;

  keyContainer.prepend(populateButton);
})();
