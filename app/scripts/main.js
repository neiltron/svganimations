/* jshint devel:true */
(function ($) {

  var timeline = new TimelineMax();

  timeline.staggerFromTo('#nobodywrites path', 5, { attr: { 'stroke-dashoffset': 1000 } }, { attr: { 'stroke-dashoffset': 0 }, repeat: -1, yoyo: true }, 1);

})(jQuery);