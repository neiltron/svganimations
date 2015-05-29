/* jshint devel:true */
/* global TimelineMax */
'use strict';


(function () {

  var timeline = new TimelineMax();

  timeline.staggerFromTo('#Layer_2 path', 5, { attr: { 'stroke-dashoffset': 1000 } }, { attr: { 'stroke-dashoffset': 0 }, repeat: -1, yoyo: true }, 1);

})(jQuery);