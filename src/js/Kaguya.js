require('./../css/kaguya.less');
window.$ = require('./jquery-2.1.4.min.js');
var snowfall = require('./snowfall.jquery.js');
var Kaguya = {
    init: function(image) {
        this.setBackground('body', './images/' + image + '');
        this.setSnow('body', './images/snow.png');
        // this.setSnow(ele);
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
                minSize: 2,
                maxSize: 8,
                round: true,
                // minSpeed: 5,
                // maxSpeed: 10,
                shadow: true
            });
        } else if(arguments.length === 2) {
            $(ele).snowfall({
                image: url,
                minSize: 8,
                maxSize: 24,
                // minSpeed: 5,
                // maxSpeed: 10,
                round: true
            });
        }

    }
};
Kaguya.init('kaguya.jpg');
