var strings=["alpacas","droopiestnips","soiledpants","imitationmeats","saturated","adulteraisin","saraconnor","crapdonut","aaasitonit","ameliorate"];!function(){var t=new TimelineLite({ease:Power2.easeIn}),e=function(){return strings[Math.floor(Math.random()*strings.length)]},a=function(){for(var a=e(),o=a.length,r=0;o>r;r++){var i=$("svg."+a[r]),f=i[Math.floor(Math.random()*i.length)],l=$(f).find("path").first();"undefined"!=typeof l&&t.fromTo(l,1,{attr:{"stroke-dashoffset":s(l)}},{attr:{"stroke-dashoffset":0},ease:t.vars.ease},"-= .1")}t.to("div.blank",2,{autoAlpha:0}),n(0)},n=function(e){var n=1;e=-1*(e-n),$("#lipsums path").each(function(a,o){t.to($(o),n,{attr:{"stroke-dashoffset":-s($(o))},ease:t.vars.ease},"-="+e)}),t.to("div.blank",2,{autoAlpha:0,onComplete:function(){a()}})},s=function(t){return"undefined"!=typeof t[0]&&"function"==typeof t[0].getTotalLength?t[0].getTotalLength():void 0},o=function(){$("#lipsums path").each(function(t,e){TweenLite.set($(e),{attr:{"stroke-dasharray":s($(e))}})})},r=function(){for(var t="loremipsumdolorsitametconsecteturadipiscingelitse".split(""),e=t.length,a="abcdefghijklmnopqrstuvwxyz".split(""),n=0;e>n;n++){var s=a.indexOf(t[n])+1;s=10>s?"0"+s:s,$("main").append(i(s,t[n]))}TweenLite.set($("#lipsums path"),{attr:{"stroke-dashoffset":0}})},i=function(t,e){var a=document.createElementNS("http://www.w3.org/2000/svg","svg"),n=$("aside #letters-"+t).children("path").clone();return a.appendChild(n[0]),a.setAttribute("id","letters-"+t),a.setAttribute("class",e),a};r(),o(),n(.025)}(jQuery);