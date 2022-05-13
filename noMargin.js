// ==UserScript==
// @name         Asurascans noMargin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add a noMargin button, useful when there are margin between pages
// @author       MissNook
// @match        https://www.asurascans.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var headerTab = document.getElementsByClassName("navlef")[0];
    createButton(headerTab, toggleMargin);

    function createButton(context, func){
        var button = document.createElement("a");        
        button.value = "No Margin";
        button.onclick = func;       
        button.style = "padding:5px 15px;border-radius: 20px;color: #fff;font-size: 13px;background: #0c70de;line-height: 25px;background: #913fe2;";
        context.appendChild(button);
    }

    function toggleMargin(context, func){
       var allPreloadingDivs = document.querySelectorAll('[data-ref="vm-preloader"]');
       var hideMargin = (this.value =="No Margin");
        this.value = hideMargin?"Margin":"No Margin";
        for(var i=0;i<allPreloadingDivs.length;i++){
            allPreloadingDivs[i].style.display=hideMargin?"none":"flex";
        }
    }
    
})();
