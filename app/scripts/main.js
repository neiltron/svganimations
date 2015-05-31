/* jshint devel:true */
/* global TimelineMax */
'use strict';


(function () {

  var timeline = new TimelineMax({ ease: Power2.easeIn });

  TweenMax.set($('#lipsums path'), { attr: { 'stroke-dashoffset': 0 }});

  var getString = function () {
    return strings[Math.floor(Math.random() * strings.length)];
  };

  var displayWord = function () {
    var string = getString(),
        strLength = string.length;

    for (var i = 0; i < strLength; i++) {
      var letters = $('svg .' + string[i]),
          el = letters[Math.floor(Math.random() * letters.length)],
          path = $(el).find('path').first();

      if (typeof path !== 'undefined') {
        timeline.fromTo(path, 1, {
          attr: { 'stroke-dashoffset': -pathLengthOf(path) }
        }, {
          attr: { 'stroke-dashoffset': 0 },
          ease: timeline.vars.ease
        }, '-= .1');
      }
    }

    timeline.to('div.blank', 2, { autoAlpha:0 });
    clearLetters(0);
  };

  var clearLetters = function (stagger) {
    var timing = 1,
        stagger = (stagger - timing) * -1;

    $('#lipsums path').each(function (i, path) {
      timeline.to(
        $(path), timing,
        {
          attr: { 'stroke-dashoffset': pathLengthOf($(path)) * -1 },
          ease: timeline.vars.ease
        },
        '-=' + stagger
      );
    });

    timeline.to('div.blank', 2, { autoAlpha:0, onComplete: function () {
      displayWord();
    } });
  };

  var pathLengthOf = function (el) {
    if (typeof el[0] !== 'undefined' && typeof el[0].getTotalLength === 'function') {
      return el[0].getTotalLength();
    }
  }

  clearLetters(.025);

})(jQuery);