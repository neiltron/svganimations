var strings=["alpacas","droopiestnips","soiledpants","imitationmeats","saturated","adulteraisin","saraconnor","crapdonut","aaasitonit","ameliorate"];!function(){var t=new TimelineMax({ease:Power2.easeIn});TweenMax.set($("#lipsums path"),{attr:{"stroke-dashoffset":0}});var a=function(){return strings[Math.floor(Math.random()*strings.length)]},e=function(){for(var e=a(),s=e.length,r=0;s>r;r++){var i=$("svg ."+e[r]),f=i[Math.floor(Math.random()*i.length)],u=$(f).find("path").first();"undefined"!=typeof u&&t.fromTo(u,1,{attr:{"stroke-dashoffset":-o(u)}},{attr:{"stroke-dashoffset":0},ease:t.vars.ease},"-= .1")}t.to("div.blank",2,{autoAlpha:0}),n(0)},n=function(a){var n=1;a=-1*(a-n),$("#lipsums path").each(function(e,s){t.to($(s),n,{attr:{"stroke-dashoffset":-1*o($(s))},ease:t.vars.ease},"-="+a)}),t.to("div.blank",2,{autoAlpha:0,onComplete:function(){e()}})},o=function(t){return"undefined"!=typeof t[0]&&"function"==typeof t[0].getTotalLength?t[0].getTotalLength():void 0};n(.025)}(jQuery);