require('./../css/kaguya.less');
window.$ = require('jquery');
var snowfall = require('./snowfall.jquery.js');
var ripples = require('imports-loader?$=jquery!./jquery.ripples.js');
var Kaguya = {
    init: function(image) {
        this.setStyle();
        this.setBackground('body', './images/' + image + '');
        // this.setSnow('body', './images/snow.png');
        this.setRipples('body');
        // this.setVideo();
        this.setSnow('body');
        // this.autoDrop();
    },
    setStyle: function() {
        $('*').css({
            'margin': 0,
            'padding': 0
        })
    },
    setBackground: function(ele, url) {
        $(ele).css({
            'background': 'url(' + url + ')',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'position': 'fixed',
            'top': '0',
            'bottom': '0',
            'left': '0',
            'right': '0',
            'width': '100%',
            'height': '100%'
        })
    },
    setSnow: function(ele, url) {
        if(arguments.length === 1) {
            $(ele).snowfall({
                minSize: 4,
                maxSize: 12,
                round: true,
                minSpeed: 6,
                maxSpeed: 8,
                shadow: true,
                round: true
            });
        } else if(arguments.length === 2) {
            $(ele).snowfall({
                image: url,
                minSize: 4,
                maxSize: 12,
                round: true,
                minSpeed: 6,
                maxSpeed: 8,
                // shadow: true,
                round: true
            });
        }
    },
    setRipples: function(ele) {
        $(ele).ripples('play');
        $(ele).ripples({
            resolution: 512,
            dropRadius: 20,
            perturbance: 0.04,
        });        
    },
    autoDrop: function() {
        setInterval(function() {
            var $el = $('body');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;
            $el.ripples('drop', x, y, dropRadius, strength);
        }, (1000 / 60) * 40);
    },
    setVideo: function() {
        var _audio = '<audio src="../video/kaguya.mp3" autoplay></audio>'
        $('body').append(_audio);
    }

};
Kaguya.init('kaguya.jpg');
