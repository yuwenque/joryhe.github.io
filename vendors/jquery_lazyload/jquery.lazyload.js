!function(e,t,n,o){var r=e(t);e.fn.lazyload=function(i){function f(){var t=0;l.each(function(){var n=e(this);if(!h.skip_invisible||n.is(":visible"))if(e.abovethetop(this,h)||e.leftofbegin(this,h));else if(e.belowthefold(this,h)||e.rightoffold(this,h)){if(++t>h.failure_limit)return!1}else n.trigger("appear"),t=0})}var a,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return i&&(o!==i.failurelimit&&(i.failure_limit=i.failurelimit,delete i.failurelimit),o!==i.effectspeed&&(i.effect_speed=i.effectspeed,delete i.effectspeed),e.extend(h,i)),a=h.container===o||h.container===t?r:e(h.container),0===h.event.indexOf("scroll")&&a.bind(h.event,function(){return f()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.attr("src")!==o&&n.attr("src")!==!1||n.is("img")&&n.attr("src",h.placeholder),n.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(t,o,h)}e("<img />").bind("load",function(){var o=n.attr("data-"+h.data_attribute);n.hide(),n.is("img")?(n.attr("src",o),n.parent().attr("href",o),n.parent().attr("rel","external nofollow")):n.css("background-image","url('"+o+"')"),n[h.effect](h.effect_speed),t.loaded=!0;var r=e.grep(l,function(e){return!e.loaded});if(l=e(r),h.load){var i=l.length;h.load.call(t,i,h)}}).attr("src",n.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&n.bind(h.event,function(){t.loaded||n.trigger("appear")})}),r.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&r.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(n).ready(function(){f()}),this},e.belowthefold=function(n,i){var f;return f=i.container===o||i.container===t?(t.innerHeight?t.innerHeight:r.height())+r.scrollTop():e(i.container).offset().top+e(i.container).height(),f<=e(n).offset().top-i.threshold},e.rightoffold=function(n,i){var f;return f=i.container===o||i.container===t?r.width()+r.scrollLeft():e(i.container).offset().left+e(i.container).width(),f<=e(n).offset().left-i.threshold},e.abovethetop=function(n,i){var f;return f=i.container===o||i.container===t?r.scrollTop():e(i.container).offset().top,f>=e(n).offset().top+i.threshold+e(n).height()},e.leftofbegin=function(n,i){var f;return f=i.container===o||i.container===t?r.scrollLeft():e(i.container).offset().left,f>=e(n).offset().left+i.threshold+e(n).width()},e.inviewport=function(t,n){return!(e.rightoffold(t,n)||e.leftofbegin(t,n)||e.belowthefold(t,n)||e.abovethetop(t,n))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window,document);