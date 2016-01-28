'use strict';

$(function(){

  const System = {

    // FUNÇÃO DE MOUSE OVER NAS DIVS DOS OEDS
    mouseOverInOeds: function(){
      var oeds = $('.contentOeds').children('.oed');
      oeds.hover(function(){
        console.log($(this));
        $(this).children('.view').addClass('anMouseOverOed');
      });
    },

    init: function(){
      System.mouseOverInOeds();
    }

  };

  System.init()

});
