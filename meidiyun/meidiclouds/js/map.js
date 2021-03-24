/*
 distributor map
 */

var domain = 'http://www.medi-globe.de/';
var canvas, ctx, currentPoint, pointsCircledStorer, finished, length, dontResize;
var zoomLevel = globalId = index = oldGlobalOffsetY = oldGlobalOffsetX = globalOffsetX = globalOffsetY = 0;
var dontResize = animating = false;
var $body = jQuery('body');
setBodyScale = function () {
    return;
    var scaleSource = $body.width(),
        scaleFactor = .1,
        maxScale = 600,
        minScale = 70; //Tweak these values to taste

    var fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

    if (fontSize > maxScale) fontSize = maxScale;
    if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums

    jQuery('#frame').css('font-size', fontSize + '%');
}

var oCanvas = {
    lines: [],
    setLine: function (id, startx, starty, endx, endy) {
        starty = starty + 100;
        endy = endy + 100;
        this.lines[id] = {sx: startx, sy: starty, ex: endx, ey: endy};
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = "1";
        ctx.strokeStyle = "rgb(192, 202, 216)";
        ctx.beginPath();
        var i = 0;
        while (i < globalId) {
            if (typeof(this.lines[i]) == 'object') {
                ctx.moveTo(this.lines[i].sx, this.lines[i].sy);
                ctx.lineTo(this.lines[i].ex, this.lines[i].ey);
                ctx.stroke();
            }
            i++;
        }
    },
    removeLines: function (id) {
        this.lines = [];
    },
    clear: function () {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
};

function AreaPoint(areaXML) {
    this.areaName = areaXML.attributes.getNamedItem('name').nodeValue;
    this.startx = areaXML.attributes.getNamedItem('x').nodeValue;
    this.starty = areaXML.attributes.getNamedItem('y').nodeValue;
    this.x = this.startx / globalRatio;
    this.y = this.starty / globalRatio;

    this.countryPoints = areaXML.childNodes;
    this.childPoints = [];
    this.childPointsTemp = [];

    this.paragraph = jQuery('<li class="location-area"><span>' + this.areaName + '</span></li>');
    jQuery('#left-bottom .locations > ul').append(this.paragraph);

    var j, counter = 0;
    for (j = 0; j < this.countryPoints.length; j++) {
        if (this.countryPoints[j].nodeType == 3) {
            continue;
        }
        this.childPointsTemp[counter] = this.countryPoints[j];
        counter++;
    }

    this.paragraph.append(jQuery('<ul class="map-country"></ul>'));

    for (j = 0; j < this.childPointsTemp.length; j++) {
        this.childPoints[j] = new CountryPoint();
        this.childPoints[j].startx = this.startx;
        this.childPoints[j].starty = this.startx;
        this.childPoints[j].totalPoints = this.childPointsTemp.length;
        this.childPoints[j].index = j;
        this.childPoints[j].countryName = this.childPointsTemp[j].attributes[0].nodeValue;
        this.childPoints[j].cities = this.childPointsTemp[j].childNodes;
        this.childPoints[j].render();
        this.childPoints[j].parent = this;
        counter++;
    }
    this.counter = 0;

    this.img = document.createElement('img');
    this.img.src = domain + 'files/mg_style/img/map/point.png';
    this.img.style.left = parseInt(this.x, 10) + 'px';
    this.img.style.top = parseInt(this.y, 10) + 'px';
    this.img.className = 'area-point';
    document.getElementById('frame').appendChild(this.img);
    jQuery(this.img).css({margin: '-' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.img).width() / 2) + 'px'});

    this.imgActive = document.createElement('img');
    this.imgActive.src = domain + 'files/mg_style/img/map/point_blue.png';
    this.imgActive.style.left = parseInt(this.x, 10) + 'px';
    this.imgActive.style.top = parseInt(this.y, 10) + 'px';
    this.imgActive.className = 'area-point';

    this.text = document.createElement('div');
    jQuery(this.text).text(this.areaName);
    this.text.style.left = parseInt(this.x, 10) + 'px';
    this.text.style.top = parseInt(this.y, 10) + 'px';
    this.text.className = 'area-text';
    document.getElementById('frame').appendChild(this.text);
    jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2 + 1) + 'px 0 0 -' + (jQuery(this.text).width() / 2 + 1) + 'px'});
    jQuery(this.img).click(jQuery.proxy(this.areaClicked, this));
    jQuery(this.text).click(jQuery.proxy(this.areaClicked, this));
    this.paragraph.click(jQuery.proxy(this.areaClicked, this));
    jQuery(this.img).height(jQuery(this.img).width());
}

AreaPoint.prototype.updatePosition = function () {
    this.x = ( this.x - oldGlobalOffsetX ) * oldGlobalRatio / globalRatio + globalOffsetX;
    this.y = ( this.y - oldGlobalOffsetY ) * oldGlobalRatio / globalRatio + globalOffsetY;

    this.text.style.left = this.img.style.left = parseInt(this.x, 10) + 'px';
    this.text.style.top = this.img.style.top = parseInt(this.y, 10) + 'px';
    jQuery(this.img).css({margin: '-' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.img).width() / 2) + 'px'});
    jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});
    jQuery(this.img).height(jQuery(this.img).width());
    for (l = 0; l < this.childPoints.length; l++) {
        this.childPoints[l].updatePosition();
    }
}

AreaPoint.prototype.areaClicked = function (event) {
    if (typeof(event) !== 'undefined') {
        event.stopPropagation();
        event.cancelBubble = true;
    }
    jQuery('.city-text').css({fontWeight: 'normal'});
    if (animating)return;
    jQuery('.location-area, .location-country, .location-city').removeClass('active');
    this.paragraph.addClass('active');
    animating = true;
    oCanvas.removeLines();
    oCanvas.clear();
    jQuery('#left-bottom').after(jQuery('#address').html(''));

    jQuery('.area-point, .country-point').each(function () {
        this.src = domain + 'files/point.png';
    });
    this.img.src = domain + 'files/point_blue.png';
    jQuery('.area-point, .area-text, .location-country, .location-city, .country-point, .country-text, .city-point, .city-text').hide();
    jQuery(this.img).show();
    jQuery(this.text).show();
    resizeWorld65(this);

    jQuery('.area-text').css({color: '#999999', fontSize: '1.0em'});
    jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

    var k;
    for (k = 0; k < this.childPoints.length; k++) {
        this.childPoints[k].startx = this.x;
        this.childPoints[k].starty = this.y;
    }
    this.moveChildsInterval();
}

AreaPoint.prototype.moveChildsInterval = function () {
    if (typeof(this.childPoints[index]) !== 'undefined') {
        this.childPoints[index].move();
        index++;
        setTimeout(jQuery.proxy(function () {
            this.moveChildsInterval();
        }, this), 1);
    }
    else {
        index = 0;
        setTimeout(jQuery.proxy(function () {
            animating = false;
        }, this), 500);
    }
    adjustDialersDiv();
}

function CountryPoint() {
    return {
        startx: 0,
        starty: 0,
        index: 0,
        img: {},
        cities: [],
        cityPoints: [],
        cityPointsTemp: [],
        active: false,
        selected: false,
        circleRounds: 5,
        id: false,
        render: function () {
            this.id = globalId;
            globalId++;
            this.img = document.createElement('img');
            this.img.src = domain + 'files/mg_style/img/map/point.png';
            this.img.style.left = parseInt(this.startx, 10) + 'px';
            this.img.style.top = parseInt(this.starty, 10) + 'px';
            this.img.className = 'country-point';

            this.text = document.createElement('div');

            jQuery(this.text).text(this.countryName);
            this.x = this.startx;
            this.y = this.starty;
            this.text.className = 'country-text';
            document.getElementById('frame').appendChild(this.text);
            jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

            document.getElementById('frame').appendChild(this.img);
            jQuery(this.img).css({margin: '-' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.img).width() / 2) + 'px'});
            this.img.style.display = 'none';
            this.text.style.display = 'none';

            this.paragraph = jQuery('<li style="display:none;" class="location-country"><span>' + this.countryName + '</span></li>');
            jQuery(jQuery('#left-bottom .locations > ul > li > ul')[jQuery('#left-bottom .locations > ul > li > ul').length - 1]).append(this.paragraph);


            jQuery(this.img).click(jQuery.proxy(this.countryClicked, this));
            jQuery(this.text).click(jQuery.proxy(this.countryClicked, this));
            this.paragraph.click(jQuery.proxy(this.countryClicked, this));

            var m;
            var counter = 0;
            for (m = 0; m < this.cities.length; m++) {
                if (this.cities[m].nodeType == 3) {
                    continue;
                }
                this.cityPointsTemp[counter] = this.cities[m];

                counter++;
            }

            this.paragraph.append(jQuery('<ul class="map-city"></ul>'));
            for (m = 0; m < this.cityPointsTemp.length; m++) {

                this.cityPoints[m] = new cityPoint();
                this.cityPoints[m].startx = this.startx;
                this.cityPoints[m].starty = this.starty;
                this.cityPoints[m].index = m;
                this.cityPoints[m].totalPoints = this.cityPointsTemp.length;

                var temp = [];
                var counter = 0;
                for (var z = 0; z < this.cityPointsTemp[m].childNodes.length; z++) {
                    if (this.cityPointsTemp[m].childNodes[z].nodeType !== 3) {
                        temp[counter] = this.cityPointsTemp[m].childNodes[z];
                        counter++;
                    }
                }
                for (var g = 0; g < temp.length; g++) {
                    if (temp[g].nodeName == 'name')
                        this.cityPoints[m].cityName = temp[g].childNodes[0].data;
                    if (temp[g].nodeName == 'companyName')
                        this.cityPoints[m].companyName = temp[g].childNodes[0].data;
                }
                this.cityPoints[m].addresses = [];
                var node;
                if (temp[2].nodeName == 'addresses') {
                    var addressCounter = 0;
                    for (var g = 0; g < temp[2].childNodes.length; g++) {
                        if (temp[2].childNodes[g].nodeType == 3) {
                            continue;
                        }

                        if (typeof(this.cityPoints[m].addresses[addressCounter]) == 'undefined')
                            this.cityPoints[m].addresses[addressCounter] = {};
                        if (temp[2].childNodes[g].nodeName == 'address')
                            this.cityPoints[m].addresses[addressCounter].address = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'phone')
                            this.cityPoints[m].addresses[addressCounter].phone = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'fax')
                            this.cityPoints[m].addresses[addressCounter].fax = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'web')
                            this.cityPoints[m].addresses[addressCounter].web = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'webtext')
                            this.cityPoints[m].addresses[addressCounter].webtext = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'contactmail')
                            this.cityPoints[m].addresses[addressCounter].contactMail = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'contact')
                            this.cityPoints[m].addresses[addressCounter].contact = temp[2].childNodes[g].childNodes[0].data;
                        if (temp[2].childNodes[g].nodeName == 'contact') {
                            addressCounter++;
                        }
                    }
                }
                else {
                    this.cityPoints[m].addresses[0] = {};
                    for (var g = 0; g < temp.length; g++) {
                        if (temp[g].nodeName == 'address')
                            this.cityPoints[m].addresses[0].address = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'phone')
                            this.cityPoints[m].addresses[0].phone = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'fax')
                            this.cityPoints[m].addresses[0].fax = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'web')
                            this.cityPoints[m].addresses[0].web = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'webtext')
                            this.cityPoints[m].addresses[0].webtext = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'contactmail')
                            this.cityPoints[m].addresses[0].contactMail = temp[g].childNodes[0].data;
                        if (temp[g].nodeName == 'contact')
                            this.cityPoints[m].addresses[0].contact = temp[g].childNodes[0].data;
                    }
                }
                this.cityPoints[m].render();
            }
            jQuery(this.img).height(jQuery(this.img).width());
        },
        move: function () {
            this.paragraph.show();
            this.active = true;
            this.x = this.startx;
            this.y = this.starty;
            if (( jQuery(window).width() / jQuery(window).height() ) < 1) {
                jQuery('#frame').height(jQuery('#world').width() / 1.5);
            }

            length = parseInt((jQuery('#frame').height() / 2.0), 10);
            if (length < 40)length = 40;

            this.newx = this.startx + length * Math.cos(0.0628 * ( ( this.index + 1 ) / this.totalPoints * 100 ));
            this.newy = this.starty + length * Math.sin(0.0628 * ( ( this.index + 1 ) / this.totalPoints * 100 ));

            this.ratiox = 0;
            this.ratioy = 0;
            if (this.newx < this.x) {
                this.ratiox = (this.x - this.newx) / 3;
            }
            if (this.newx > this.x) {
                this.ratiox = (this.newx - this.x) / 3;
            }
            if (this.newy < this.y) {
                this.ratioy = (this.y - this.newy) / 3;
            }
            if (this.newy > this.y) {
                this.ratioy = (this.newy - this.y) / 3;
            }
            this.img.style.display = 'block';
            this.text.style.display = 'block';

            this.doMove();
        },
        doMove: function () {
            this.stop = false;

            if (this.newx < this.x) {
                if (this.x < this.ratiox) {
                    this.stop = true;
                    this.x = this.x - this.ratiox;
                }
                else {
                    this.x = this.x - this.ratiox;
                }
            }
            if (this.newx > this.x) {
                if (( this.x + this.ratiox ) > this.newx) {
                    this.stop = true;
                    this.x = this.x + this.ratiox;
                }
                else {
                    this.x = this.x + this.ratiox;
                }
            }
            if (this.newy < this.y) {
                if (this.y < this.ratioy) {
                    this.stop = true;
                    this.y = this.y - this.ratioy;
                }
                else {
                    this.y = this.y - this.ratioy;
                }
            }
            if (this.newy > this.y) {
                if (( this.y + this.ratioy ) > this.newy) {
                    this.stop = true;
                    this.y = this.y + this.ratioy;
                }
                else {
                    this.y = this.y + this.ratioy;
                }
            }

            oCanvas.setLine(this.id, this.startx, this.starty, this.x, this.y);
            this.text.style.left = this.img.style.left = parseInt(this.x, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.y, 10) + 'px';
            if (( this.stop )) {
                this.circle();
                return;
            }
            this.ratioy = this.ratioy * 1.1;
            this.ratiox = this.ratiox * 1.1;
            setTimeout(jQuery.proxy(function () {
                this.doMove();
            }, this), 1);
        },
        circle: function () {
            this.circlex = this.newx + ( this.circleRounds ) * Math.cos(0.0628 * ( 100 / this.circleRounds * 100 ));
            this.circley = this.newy + ( this.circleRounds ) * Math.sin(0.0628 * ( 100 / this.circleRounds * 100 ));


            if (this.circleRounds == 1) {
                this.circlex = this.newx;
                this.circley = this.newy;
            }

            oCanvas.setLine(this.id, this.startx, this.starty, this.circlex, this.circley);
            this.text.style.left = this.img.style.left = parseInt(this.circlex, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.circley, 10) + 'px';

            this.circleRounds--;
            if (this.circleRounds > 0) {
                setTimeout(jQuery.proxy(function () {
                    this.circle();
                }, this), 1);
            }
            else {
                this.circleRounds = 5;
            }
        },
        updatePosition: function () {
            this.x = ( this.x - oldGlobalOffsetX ) * oldGlobalRatio / globalRatio + globalOffsetX;
            this.y = ( this.y - oldGlobalOffsetY ) * oldGlobalRatio / globalRatio + globalOffsetY;

            this.selected = false;

            this.text.style.left = this.img.style.left = parseInt(this.x, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.y, 10) + 'px';

            if (this.active === false) {
                this.text.style.display = 'none';
                this.img.style.display = 'none';
            }
            jQuery(this.img).css({margin: '-' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.img).width() / 2) + 'px'});
            jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});
            jQuery(this.img).height(jQuery(this.img).width());
        },
        countryClicked: function (event) {
            if (typeof(event) !== 'undefined') {
                event.stopPropagation();
                event.cancelBubble = true;
            }

            if (this.selected) {
                this.selected = !this.selected;
                this.parent.areaClicked();
                return;
            }

            jQuery('.location-country, .location-city').removeClass('active');
            this.paragraph.addClass('active');

            this.selected = !this.selected;
            jQuery('.city-text').css({fontWeight: 'normal', color: '#000000'});
            jQuery('.area-text').css({color: '#999999', fontSize: '1.0em'});
            jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

            if (animating)return;
            animating = true;
            oCanvas.removeLines();
            oCanvas.clear();
            jQuery('#left-bottom').after(jQuery('#address').html(''));

            jQuery('.country-point').each(function () {
                this.src = domain + 'files/mg_style/img/map/point.png';
            });
            this.img.src = domain + 'files/mg_style/img/map/point_blue.png';
            jQuery('.city-point, .city-text, .country-point, .country-text, .location-city').hide();
            jQuery(this.img).show();
            jQuery(this.text).show();
            this.parent.img.style.display = 'none';
            this.parent.text.style.display = 'none';
            this.x = this.parent.x;
            this.y = this.parent.y;
            var l;
            this.text.style.left = this.img.style.left = parseInt(this.x, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.y, 10) + 'px';
            for (l = 0; l < this.cityPoints.length; l++) {
                this.cityPoints[l].startx = this.x;
                this.cityPoints[l].starty = this.y;
            }
            this.moveChildsInterval();
        },
        moveChildsInterval: function () {
            if (typeof(this.cityPoints[index]) !== 'undefined') {
                this.cityPoints[index].move();
                index++;
                setTimeout(jQuery.proxy(function () {
                    this.moveChildsInterval();
                }, this), 1);
            }
            else {
                setTimeout(jQuery.proxy(function () {
                    animating = false;
                }, this), 500);
                index = 0;
            }
            adjustDialersDiv();
        }
    }
}


function cityPoint() {
    return {
        startx: 0,
        starty: 0,
        index: 0,
        img: {},
        cities: [],
        active: false,
        totalPoints: 0,
        circleRounds: 5,
        id: false,
        render: function () {
            this.id = globalId;
            globalId++;
            this.img = document.createElement('img');
            this.img.src = domain + 'files/mg_style/img/map/point.png';
            this.img.style.left = parseInt(this.startx, 10) + 'px';
            this.img.style.top = parseInt(this.starty, 10) + 'px';
            this.img.className = 'city-point';

            this.text = document.createElement('div');
            jQuery(this.text).text(this.cityName);

            this.text.className = 'city-text';
            document.getElementById('frame').appendChild(this.text);
            jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

            document.getElementById('frame').appendChild(this.img);

            this.paragraph = jQuery('<li style="display:none;" class="location-city"><span>' + this.cityName + '</span></li>');
            jQuery(jQuery('#left-bottom .locations > ul > li > ul > li > ul')[jQuery('#left-bottom .locations > ul > li > ul > li > ul').length - 1]).append(this.paragraph);
            //jQuery('#left-bottom .locations').append(this.paragraph);

            this.img.style.display = 'none';
            this.text.style.display = 'none';

            jQuery(this.img).click(jQuery.proxy(this.cityClicked, this));
            jQuery(this.text).click(jQuery.proxy(this.cityClicked, this));
            this.paragraph.click(jQuery.proxy(this.cityClicked, this));
            jQuery(this.img).height(jQuery(this.img).width());
        },
        move: function () {
            this.paragraph.show();

            this.active = true;
            this.x = this.startx;
            this.y = this.starty;

            length = jQuery('#frame').height() / 2;
            if (length < 40)length = 40;

            this.newx = this.startx + length * Math.cos(0.0628 * ( ( this.index + 1 ) / this.totalPoints * 100 ));
            this.newy = this.starty + length * Math.sin(0.0628 * ( ( this.index + 1 ) / this.totalPoints * 100 ));

            this.ratiox = 0;
            this.ratioy = 0;
            if (this.newx < this.x) {
                this.ratiox = (this.x - this.newx) / 2;
            }
            if (this.newx > this.x) {
                this.ratiox = (this.newx - this.x) / 2;
            }
            if (this.newy < this.y) {
                this.ratioy = (this.y - this.newy) / 2;
            }
            if (this.newy > this.y) {
                this.ratioy = (this.newy - this.y) / 2;
            }
            this.img.style.display = 'block';

            jQuery(this.img).height(jQuery(this.img).width());
            this.text.style.display = 'block';
            jQuery(this.img).css({margin: '-' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.img).width() / 2) + 'px'});
            jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

            this.doMove();
        },
        doMove: function () {
            if (this.newx < this.x) {
                if (this.x < this.ratiox) {
                    this.x = this.newx;
                }
                else {
                    this.x = this.x - this.ratiox;
                }
            }
            if (this.newx > this.x) {
                if (( this.x + this.ratiox ) > this.newx) {
                    this.x = this.newx;
                }
                else {
                    this.x = this.x + this.ratiox;
                }
            }
            if (this.newy < this.y) {
                if (this.y < this.ratioy) {
                    this.y = this.newy;
                }
                else {
                    this.y = this.y - this.ratioy;
                }
            }
            if (this.newy > this.y) {
                if (( this.y + this.ratioy ) > this.newy) {
                    this.y = this.newy;
                }
                else {
                    this.y = this.y + this.ratioy;
                }
            }

            oCanvas.setLine(this.id, this.startx, this.starty, this.x, this.y);
            this.text.style.left = this.img.style.left = parseInt(this.x, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.y, 10) + 'px';
            if (( this.newy == this.y && this.newx == this.x )) {
                this.circle();
                return;
            }
            setTimeout(jQuery.proxy(function () {
                this.doMove();
            }, this), 1);
        },
        circle: function () {
            this.circlex = this.newx + ( this.circleRounds ) * Math.cos(0.0628 * ( 100 / this.circleRounds * 100 ));
            this.circley = this.newy + ( this.circleRounds ) * Math.sin(0.0628 * ( 100 / this.circleRounds * 100 ));


            if (this.circleRounds == 1) {
                this.circlex = this.newx;
                this.circley = this.newy;
            }

            oCanvas.setLine(this.id, this.startx, this.starty, this.circlex, this.circley);
            this.text.style.left = this.img.style.left = parseInt(this.circlex, 10) + 'px';
            this.text.style.top = this.img.style.top = parseInt(this.circley, 10) + 'px';

            this.circleRounds--;
            if (this.circleRounds > 0) {
                setTimeout(jQuery.proxy(function () {
                    this.circle();
                }, this), 1);
            }
            else {
                this.circleRounds = 5;
            }
        },
        cityClicked: function (event) {
            if (typeof(event) !== 'undefined') {
                event.stopPropagation();
                event.cancelBubble = true;
            }
            dontResize = true;
            jQuery('.location-city').removeClass('active');
            this.paragraph.addClass('active');
            jQuery('.city-text').css({fontWeight: 'normal', color: '#999999'});
            this.text.style.fontWeight = 'bold';
            this.text.style.color = '#000000';
            if (jQuery(this.paragraph).find('#address').length > 0) {
                //jQuery('#left-bottom').after(jQuery('#address').html(''));
            }
            else {
                var address = '';
                for (var i = 0; i < this.addresses.length; i++) {
                    address += '<div class="company-data">';
                    if (typeof(this.addresses[i].address) != 'undefined') {
                        address += '<p class="label">Address</p><p>' + this.addresses[i].address + '</p>';
                    }
                    if (typeof(this.addresses[i].phone) != 'undefined') {
                        address += '<p class="label">Telephone</p><p>' + this.addresses[i].phone + '</p>';
                    }
                    if (typeof(this.addresses[i].fax) != 'undefined') {
                        address += '<p class="label">Telefax</p><p>' + this.addresses[i].fax + '</p>';
                    }
                    if (typeof(this.addresses[i].web) != 'undefined') {
                        address += '<p class="label">Web Address</p><p><a target="_blank" href="' + this.addresses[i].web + '">' + this.addresses[i].webtext + '</a></p>';
                    }
                    if (typeof(this.addresses[i].contactMail) != 'undefined') {
                        if (this.addresses[i].contactMail.split('?').length > 1) {
                            text = this.addresses[i].contactMail.split('?')[0];
                        }
                        else {
                            text = this.addresses[i].contactMail;
                        }
                        address += '<p class="label">Mail</p><p><a href="mailto:' + this.addresses[i].contactMail + '">' + text + '</a></p>';
                    }
                    if (typeof(this.addresses[i].contact) != 'undefined') {
                        address += '<p class="label">Contact</p><p>' + this.addresses[i].contact + '</p>';
                    }
                    address += '</div>';
                }
                if (typeof(this.companyName) == 'undefined') {
                    this.paragraph.append(jQuery('#address').html(address));
                }
                else {
                    this.paragraph.append(jQuery('#address').html('<div class="company-name"><p>' + this.companyName + '</p></div>' + address));
                }
                adjustDialersDiv();
            }
        }
    }
}


var globalRatio, oldGlobalRatio, orgGlobalRatio;
var areaIndex = 0;
;
var aPoint = [];

function init() {
    canvas = document.getElementById("cv");
    if (!canvas)return;
    ctx = canvas.getContext("2d");
    checkLandscape();
    jQuerybody = jQuery('body');
    setBodyScale();

    orgGlobalRatio = globalRatio = 2600 / jQuery('#world').width();
    canvas.height = jQuery(document).height();
    canvas.width = jQuery(document).width();
    canvas.style.marginTop = '-100px';
    jQuery('#frame').width(jQuery('#world').width()).height(jQuery('#world').width() / 2);

    jQuery.get("files/mg_style/xml/locations.xml?v=1.4")
        .done(function (data) {
            jQuery(data.documentElement.childNodes).each(function (index) {
                if (this.nodeType == 3)return;
                aPoint[areaIndex] = new AreaPoint(this);
                areaIndex++;
            });
        });
    jQuery('#world,#frame').click(reset);
}

var i, countPoints;
function resizeAll() {
    setBodyScale();
    oldGlobalRatio = globalRatio;
    globalRatio = 2600 / jQuery('#world').width();
    jQuery('#frame').width(jQuery('#world').width()).height(jQuery('#world').width() / 2);


    countPoints = aPoint.length;

    for (i = 0; i < countPoints; i++) {
        aPoint[i].updatePosition();
    }
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    oCanvas.clear();
    adjustDialersDiv();
}

function checkLandscape() {
    if (( jQuery(window).width() / jQuery(window).height() ) < 1) {
        jQuery('#frame, #world').css({width: '100%'});
        jQuery('#left-bottom').css({height: 'auto', width: 'auto', position: 'relative', left: 'auto', top: 'auto'});

        jQuery('#dialer').height('auto');
        return 'portrait';
    }
    else {
        jQuery('#frame, #world').css({width: '70%'});

        jQuery('#left-bottom').css({position: 'absolute', width: '20%', left: '80%', top: '0px', height: '100%'});

        if (jQuery('#left-bottom').height() > jQuery('#world').height()) {
            jQuery('#dialer').height(jQuery('#left-bottom').height() + 50);
        }
        else {
            jQuery('#dialer').height(jQuery('#world').height() + 50);
        }
        return 'landscape';
    }
}

function reset(areaPoint) {
    if (animating)return;

    jQuery('.location-country, .location-city, .country-point, .country-text, .city-point, .city-text').hide();
    jQuery('.area-point,.area-text').show();
    oCanvas.clear();
    checkLandscape();
    jQuery('#left-bottom').after(jQuery('#address').html(''));
    jQuery('#frame').height(jQuery('#world').width() / 2);

    jQuery('.city-text').css({fontWeight: 'normal', color: '#000000'});
    jQuery('.area-text').css({fontSize: '1.2em', color: '#000000'});
    jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

    oldGlobalOffsetX = globalOffsetX;
    oldGlobalOffsetY = globalOffsetY;

    globalOffsetX = 0;
    globalOffsetY = 0;
    jQuery('#world').css({margin: '0'});
    resizeAll();
    jQuery('.area-point, .country-point').each(function () {
        this.src = domain + 'files/mg_style/img/map/point.png';
    });
}

function resizeWorld65(areaPoint) {
    oCanvas.clear();
    checkLandscape();
    jQuery('#left-bottom').after(jQuery('#address').html(''));

    jQuery('.city-text').css({fontWeight: 'normal', color: '#000000'});
    jQuery('.area-text').css({fontSize: '1.2em', color: '#000000'});
    jQuery(this.text).css({margin: '+' + (jQuery(this.img).width() / 2) + 'px 0 0 -' + (jQuery(this.text).width() / 2) + 'px'});

    oldGlobalOffsetX = globalOffsetX;
    oldGlobalOffsetY = globalOffsetY;

    if (jQuery('#world').width() == 0) {
        resizeWorld65(areaPoint);
        return;
    }

    globalOffsetX = jQuery('#world').width() / 2 - ( areaPoint.startx / globalRatio );
    globalOffsetY = jQuery('#world').height() / 1.8 - ( areaPoint.starty / globalRatio );

    jQuery('#world').css({margin: globalOffsetY + 'px 0 0 ' + globalOffsetX + 'px'});
    resizeAll();
    jQuery('.area-point, .country-point').each(function () {
        this.src = domain + 'files/mg_style/img/map/point.png';
    });
}

jQuery(window).load(init);
jQuery(window).resize(function () {
    if (animating)return;
    if (dontResize) {
        dontResize = false;
        return;
    }
    if (typeof(canvas) !== 'undefined') {
        canvas.height = jQuery(document).height();
        canvas.width = jQuery(document).width();
    }
    zoomLevel = 0;
    checkLandscape();

    jQuery('.city-text').css({fontWeight: 'normal', color: '#000000'});
    jQuery('.area-text').css({fontSize: '1.2em', color: '#000000'});
    jQuery('.location-country, .location-city, .country-point, .country-text, .city-point, .city-text').hide();
    jQuery('.area-point,.area-text').show();
    jQuery('#world').css({margin: '0px'});
    jQuery('#frame').css({margin: '0px'});

    oldGlobalOffsetX = globalOffsetX;
    oldGlobalOffsetY = globalOffsetY;

    globalOffsetX = 0;
    globalOffsetY = 0;
    resizeAll();
    jQuery('.country-point, .area-point').each(function () {
        this.src = domain + 'files/mg_style/img/map/point.png';
    });
});

function adjustDialersDiv() {
    if (( jQuery(window).width() / jQuery(window).height() ) < 1) {
        jQuery('#dialer').height('auto');
    }
    else {
        if (jQuery('.locations').height() > jQuery('#world').height()) {
            jQuery('#dialer').height(jQuery('.locations').height() + 50);
        }
        else {
            jQuery('#dialer').height(jQuery('#world').height() + 50);
        }
    }
}
