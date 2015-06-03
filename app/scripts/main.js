/* jshint devel:true */
/* global TimelineLite, TweenLite, Power2, strings */
'use strict';


(function () {
  var timeline = new TimelineLite({ ease: Power2.easeIn });

  var getString = function () {
    return strings[Math.floor(Math.random() * strings.length)];
  };

  var displayWord = function () {
    var string = getString(),
        strLength = string.length;

    for (var i = 0; i < strLength; i++) {
      var letters = $('svg.' + string[i]),
          el = letters[Math.floor(Math.random() * letters.length)],
          path = $(el).find('path').first();

      if (typeof path !== 'undefined') {
        timeline.fromTo(path, 1, {
          attr: { 'stroke-dashoffset': pathLengthOf(path) }
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
    var timing = 1;
    stagger = (stagger - timing) * -1;

    $('#lipsums path').each(function (i, path) {
      timeline.to(
        $(path), timing,
        {
          attr: { 'stroke-dashoffset': -pathLengthOf($(path)) },
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
  };

  var setPathLengths = function () {
    $('#lipsums path').each(function (i, path) {
      TweenLite.set($(path), { attr: { 'stroke-dasharray': pathLengthOf($(path)) }});
    });
  };

  var setupGrid = function () {
    var chars = 'loremipsumdolorsitametconsecteturadipiscingelitse'.split(''),
        charsLength = chars.length,
        alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (var i = 0; i < charsLength; i++) {
      var index = alphabet.indexOf(chars[i]) + 1;
      index = index < 10 ? '0' + index : index;

      $('main').append(createSVG(index, chars[i]));
    }

    TweenLite.set($('#lipsums path'), { attr: { 'stroke-dashoffset': 0 }});
  };

  var createSVG = function (index, char) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        path = $('aside #letters-' + index).children('path').clone();

    svg.appendChild(path[0]);
    svg.setAttribute('id', 'letters-' + index);
    svg.setAttribute('class', char);

    return svg;
  };


  setupGrid();
  setPathLengths();
  clearLetters(0.025);

})(jQuery);