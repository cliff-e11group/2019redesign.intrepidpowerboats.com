!function(t,e,a){"use strict";var r={};t.ARIAaccordion=r,r.NS="ARIAaccordion",r.AUTHOR="Scott O'Hara",r.VERSION="3.2.1",r.LICENSE="https://github.com/scottaohara/accessible_accordions/blob/master/LICENSE";var i="accordion",l=i+"__trigger",n=i+"__panel",o="[data-aria-accordion-heading]",d="[data-aria-accordion-panel]",c=0;r.create=function(){var t,a,s,u,A,g,h="none",b=e.querySelectorAll("[data-aria-accordion]");for(c+=1,g=0;g<b.length;g++){var f;if((t=b[g]).hasAttribute("id")||(t.id="acc_"+c+"-"+g),t.classList.add(i),e.querySelectorAll("#"+t.id+"> li").length?(a=e.querySelectorAll("#"+t.id+" li > "+d),s=e.querySelectorAll("#"+t.id+" li > "+o)):(a=e.querySelectorAll("#"+t.id+" > "+d),s=e.querySelectorAll("#"+t.id+" > "+o)),t.hasAttribute("data-default")&&(h=t.getAttribute("data-default")),A=t.hasAttribute("data-constant"),t.hasAttribute("data-multi"),t.hasAttribute("data-transition")){var y=t.querySelectorAll(d);for(f=0;f<y.length;f++)y[f].classList.add(n+"--transition")}for(r.setupPanels(t.id,a,h,A),r.setupHeadingButton(s,A),u=e.querySelectorAll("#"+t.id+"> li").length?e.querySelectorAll("#"+t.id+" li > "+o+" ."+l):e.querySelectorAll("#"+t.id+" > "+o+" ."+l),f=0;f<u.length;f++)u[f].addEventListener("click",r.actions),u[f].addEventListener("keydown",r.keytrolls)}},r.setupPanels=function(t,e,a,r){var i,l,o,d,c;for(i=0;i<e.length;i++)o=t+"_panel_"+(i+1),d=a,c=r,(l=e[i]).setAttribute("id",o),s(e[0],!0),l.classList.add(n),"none"!==d&&NaN!==parseInt(d)&&(d<=1?s(e[0],!1):d-1>=e.length?s(e[e.length-1],!1):s(e[d-1],!1)),(c&&"none"===d||NaN===parseInt(d))&&s(e[0],!1)},r.setupHeadingButton=function(t,a){var r,i,n,o,d,c;for(c=0;c<t.length;c++)i=(r=t[c]).nextElementSibling.id,n=e.getElementById(i).getAttribute("aria-hidden"),o=e.createElement("button"),d=r.textContent,r.innerHTML="",r.classList.add("accordion__heading"),o.setAttribute("type","button"),o.setAttribute("aria-controls",i),o.setAttribute("id",i+"_trigger"),o.classList.add(l),"false"===n?(u(o,!0),g(o,!0),a&&o.setAttribute("aria-disabled","true")):(u(o,!1),g(o,!1)),r.appendChild(o),o.appendChild(e.createTextNode(d))},r.actions=function(t){var a,i=this.id.replace(/_panel.*$/g,""),n=e.getElementById(this.getAttribute("aria-controls"));a=e.querySelectorAll("#"+i+"> li").length?e.querySelectorAll("#"+i+" li > "+o+" ."+l):e.querySelectorAll("#"+i+" > "+o+" ."+l),t.preventDefault(),r.togglePanel(t,i,n,a)},r.togglePanel=function(t,a,r,i){var l,n,o=t.target;if("true"!==o.getAttribute("aria-disabled")&&(l=o.getAttribute("aria-controls"),g(o,"true"),"true"===o.getAttribute("aria-expanded")?(u(o,"false"),s(r,"true")):(u(o,"true"),s(r,"false"),e.getElementById(a).hasAttribute("data-constant")&&A(o,"true")),e.getElementById(a).hasAttribute("data-constant")||!e.getElementById(a).hasAttribute("data-multi")))for(n=0;n<i.length;n++)o!==i[n]&&(g(i[n],"false"),l=i[n].getAttribute("aria-controls"),A(i[n],"false"),u(i[n],"false"),s(e.getElementById(l),"true"))},r.keytrolls=function(t){if(t.target.classList.contains(l)){var a,r=t.keyCode||t.which,i=this.id.replace(/_panel.*$/g,"");switch(a=e.querySelectorAll("#"+i+"> li").length?e.querySelectorAll("#"+i+" li > "+o+" ."+l):e.querySelectorAll("#"+i+" > "+o+" ."+l),r){case 35:t.preventDefault(),a[a.length-1].focus();break;case 36:t.preventDefault(),a[0].focus()}}},r.init=function(){r.create()};var s=function(t,e){t.setAttribute("aria-hidden",e)},u=function(t,e){t.setAttribute("aria-expanded",e)},A=function(t,e){t.setAttribute("aria-disabled",e)},g=function(t,e){t.setAttribute("data-current",e)};r.init()}(window,document);

/**
 * covert canvas to image
 * and save the image file
 */

var Canvas2Image = function() {

    // check if support sth.
    var $support = function() {
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

        return {
            canvas: !!ctx,
            imageData: !!ctx.getImageData,
            dataURL: !!canvas.toDataURL,
            btoa: !!window.btoa
        };
    }();

    var downloadMime = 'image/octet-stream';

    function scaleCanvas(canvas, width, height) {
        var w = canvas.width,
            h = canvas.height;
        if (width == undefined) {
            width = w;
        }
        if (height == undefined) {
            height = h;
        }

        var retCanvas = document.createElement('canvas');
        var retCtx = retCanvas.getContext('2d');
        retCanvas.width = width;
        retCanvas.height = height;
        retCtx.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
        return retCanvas;
    }

    function getDataURL(canvas, type, width, height) {
        canvas = scaleCanvas(canvas, width, height);
        return canvas.toDataURL(type);
    }

    function saveFile(strData, filename) {
        var save_link = document.createElement('a');
        save_link.href = strData;
        save_link.download = filename;
        var event = new MouseEvent('click', { "bubbles": false, "cancelable": false });
        save_link.dispatchEvent(event);

    }

    function genImage(strData) {
        var img = document.createElement('img');
        img.src = strData;
        return img;
    }

    function fixType(type) {
        type = type.toLowerCase().replace(/jpg/i, 'jpeg');
        var r = type.match(/png|jpeg|bmp|gif/)[0];
        return 'image/' + r;
    }

    function encodeData(data) {
        if (!window.btoa) { throw 'btoa undefined' }
        var str = '';
        if (typeof data == 'string') {
            str = data;
        } else {
            for (var i = 0; i < data.length; i++) {
                str += String.fromCharCode(data[i]);
            }
        }

        return btoa(str);
    }

    function getImageData(canvas) {
        var w = canvas.width,
            h = canvas.height;
        return canvas.getContext('2d').getImageData(0, 0, w, h);
    }

    function makeURI(strData, type) {
        return 'data:' + type + ';base64,' + strData;
    }


    /**
     * create bitmap image
     * 按照规则生成图片响应头和响应体
     */
    var genBitmapImage = function(oData) {

        //
        // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
        // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
        //

        var biWidth = oData.width;
        var biHeight = oData.height;
        var biSizeImage = biWidth * biHeight * 3;
        var bfSize = biSizeImage + 54; // total header size = 54 bytes

        //
        //  typedef struct tagBITMAPFILEHEADER {
        //  	WORD bfType;
        //  	DWORD bfSize;
        //  	WORD bfReserved1;
        //  	WORD bfReserved2;
        //  	DWORD bfOffBits;
        //  } BITMAPFILEHEADER;
        //
        var BITMAPFILEHEADER = [
            // WORD bfType -- The file type signature; must be "BM"
            0x42, 0x4D,
            // DWORD bfSize -- The size, in bytes, of the bitmap file
            bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
            // WORD bfReserved1 -- Reserved; must be zero
            0, 0,
            // WORD bfReserved2 -- Reserved; must be zero
            0, 0,
            // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
            54, 0, 0, 0
        ];

        //
        //  typedef struct tagBITMAPINFOHEADER {
        //  	DWORD biSize;
        //  	LONG  biWidth;
        //  	LONG  biHeight;
        //  	WORD  biPlanes;
        //  	WORD  biBitCount;
        //  	DWORD biCompression;
        //  	DWORD biSizeImage;
        //  	LONG  biXPelsPerMeter;
        //  	LONG  biYPelsPerMeter;
        //  	DWORD biClrUsed;
        //  	DWORD biClrImportant;
        //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
        //
        var BITMAPINFOHEADER = [
            // DWORD biSize -- The number of bytes required by the structure
            40, 0, 0, 0,
            // LONG biWidth -- The width of the bitmap, in pixels
            biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
            // LONG biHeight -- The height of the bitmap, in pixels
            biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
            // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
            1, 0,
            // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
            // has a maximum of 2^24 colors (16777216, Truecolor)
            24, 0,
            // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
            0, 0, 0, 0,
            // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
            biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
            // LONG biXPelsPerMeter, unused
            0, 0, 0, 0,
            // LONG biYPelsPerMeter, unused
            0, 0, 0, 0,
            // DWORD biClrUsed, the number of color indexes of palette, unused
            0, 0, 0, 0,
            // DWORD biClrImportant, unused
            0, 0, 0, 0
        ];

        var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

        var aImgData = oData.data;

        var strPixelData = '';
        var biWidth4 = biWidth << 2;
        var y = biHeight;
        var fromCharCode = String.fromCharCode;

        do {
            var iOffsetY = biWidth4 * (y - 1);
            var strPixelRow = '';
            for (var x = 0; x < biWidth; x++) {
                var iOffsetX = x << 2;
                strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
                    fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
                    fromCharCode(aImgData[iOffsetY + iOffsetX]);
            }

            for (var c = 0; c < iPadding; c++) {
                strPixelRow += String.fromCharCode(0);
            }

            strPixelData += strPixelRow;
        } while (--y);

        var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

        return strEncoded;
    };


    /**
     * [saveAsImage]
     * @param  {[obj]} canvas   [canvasElement]
     * @param  {[Number]} width    [optional] png width
     * @param  {[Number]} height   [optional] png height
     * @param  {[String]} type     [image type]
     * @param  {[String]} filename [image filename]
     * @return {[type]}          [description]
     */
    var saveAsImage = function(canvas, width, height, type, filename) {
        if ($support.canvas && $support.dataURL) {
            if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
            if (type == undefined) { type = 'png'; }
            filename = filename == undefined || filename.length === 0 ? Date.now() + '.' + type : filename + '.' + type
            type = fixType(type);

            if (/bmp/.test(type)) {
                var data = getImageData(scaleCanvas(canvas, width, height));
                var strData = genBitmapImage(data);

                saveFile(makeURI(strData, downloadMimedownloadMime), filename);
            } else {
                var strData = getDataURL(canvas, type, width, height);
                saveFile(strData.replace(type, downloadMime), filename);
            }
        }
    };

    var convertToImage = function(canvas, width, height, type) {
        if ($support.canvas && $support.dataURL) {
            if (typeof canvas == "string") { canvas = document.getElementById(canvas); }
            if (type == undefined) { type = 'png'; }
            type = fixType(type);

            if (/bmp/.test(type)) {
                var data = getImageData(scaleCanvas(canvas, width, height));
                var strData = genBitmapImage(data);
                return genImage(makeURI(strData, 'image/bmp'));
            } else {
                var strData = getDataURL(canvas, type, width, height);
                return genImage(strData);
            }
        }
    };


    return {
        saveAsImage: saveAsImage,
        saveAsPNG: function(canvas, width, height, fileName) {
            return saveAsImage(canvas, width, height, 'png', fileName);
        },
        saveAsJPEG: function(canvas, width, height, fileName) {
            return saveAsImage(canvas, width, height, 'jpeg', fileName);
        },
        saveAsGIF: function(canvas, width, height, fileName) {
            return saveAsImage(canvas, width, height, 'gif', fileName);
        },
        saveAsBMP: function(canvas, width, height, fileName) {
            return saveAsImage(canvas, width, height, 'bmp', fileName);
        },

        convertToImage: convertToImage,
        convertToPNG: function(canvas, width, height) {
            return convertToImage(canvas, width, height, 'png');
        },
        convertToJPEG: function(canvas, width, height) {
            return convertToImage(canvas, width, height, 'jpeg');
        },
        convertToGIF: function(canvas, width, height) {
            return convertToImage(canvas, width, height, 'gif');
        },
        convertToBMP: function(canvas, width, height) {
            return convertToImage(canvas, width, height, 'bmp');
        }
    };

}();

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                activetab_bg: 'white',
                inactive_bg: '#F5F5F5',
                active_border_color: '#c1c1c1',
                active_content_border_color: '#c1c1c1',
                activate: function () {
                }
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                var respTabsId = $respTabs.data('id');
                $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical')
                    $respTabsList.css('margin-top', '3px');

                $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area on page load
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        'background': 'none'
                    });

                    $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                   // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });

                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');

                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabAriaParts = $tabAria.split('tab_item-');
                            // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                }
                                else {
                                    newHash = currentHash;
                                }
                            }
                            else {
                                newHash = '#' + newHash;
                            }

                            history.replaceState(null, null, newHash);
                        }
                    });

                });

                //Window resize function
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });

            var $pageLoadHash = $('[data-id="' + hash.replace('#', '') +'"]');
            if($pageLoadHash.length > 0) {
                $pageLoadHash.trigger('click');
            }
        }
    });
})(jQuery);


// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
    "auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
        tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);

/*!
 * html2canvas 1.0.0-rc.5 <https://html2canvas.hertzen.com>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function(A,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(A=A||self).html2canvas=e()}(this,function(){"use strict";
    /*! *****************************************************************************
        Copyright (c) Microsoft Corporation. All rights reserved.
        Licensed under the Apache License, Version 2.0 (the "License"); you may not use
        this file except in compliance with the License. You may obtain a copy of the
        License at http://www.apache.org/licenses/LICENSE-2.0

        THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
        KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
        WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
        MERCHANTABLITY OR NON-INFRINGEMENT.

        See the Apache Version 2.0 License for specific language governing permissions
        and limitations under the License.
        ***************************************************************************** */var r=function(A,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(A,e){A.__proto__=e}||function(A,e){for(var t in e)e.hasOwnProperty(t)&&(A[t]=e[t])})(A,e)};function A(A,e){function t(){this.constructor=A}r(A,e),A.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var K=function(){return(K=Object.assign||function(A){for(var e,t=1,r=arguments.length;t<r;t++)for(var n in e=arguments[t])Object.prototype.hasOwnProperty.call(e,n)&&(A[n]=e[n]);return A}).apply(this,arguments)};function a(B,s,o,i){return new(o||(o=Promise))(function(A,e){function t(A){try{n(i.next(A))}catch(A){e(A)}}function r(A){try{n(i.throw(A))}catch(A){e(A)}}function n(e){e.done?A(e.value):new o(function(A){A(e.value)}).then(t,r)}n((i=i.apply(B,s||[])).next())})}function S(t,r){var n,B,s,A,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return A={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(A[Symbol.iterator]=function(){return this}),A;function e(e){return function(A){return function(e){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,B&&(s=2&e[0]?B.return:e[0]?B.throw||((s=B.return)&&s.call(B),0):B.next)&&!(s=s.call(B,e[1])).done)return s;switch(B=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return o.label++,{value:e[1],done:!1};case 5:o.label++,B=e[1],e=[0];continue;case 7:e=o.ops.pop(),o.trys.pop();continue;default:if(!(s=0<(s=o.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){o=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){o.label=e[1];break}if(6===e[0]&&o.label<s[1]){o.label=s[1],s=e;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(e);break}s[2]&&o.ops.pop(),o.trys.pop();continue}e=r.call(t,o)}catch(A){e=[6,A],B=0}finally{n=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,A])}}}var I=(n.prototype.add=function(A,e,t,r){return new n(this.left+A,this.top+e,this.width+t,this.height+r)},n.fromClientRect=function(A){return new n(A.left,A.top,A.width,A.height)},n);function n(A,e,t,r){this.left=A,this.top=e,this.width=t,this.height=r}for(var T=function(A){return I.fromClientRect(A.getBoundingClientRect())},c=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(55296<=n&&n<=56319&&t<r){var B=A.charCodeAt(t++);56320==(64512&B)?e.push(((1023&n)<<10)+(1023&B)+65536):(e.push(n),t--)}else e.push(n)}return e},l=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,B="";++n<t;){var s=A[n];s<=65535?r.push(s):(s-=65536,r.push(55296+(s>>10),s%1024+56320)),(n+1===t||16384<r.length)&&(B+=String.fromCharCode.apply(String,r),r.length=0)}return B},e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Q="undefined"==typeof Uint8Array?[]:new Uint8Array(256),t=0;t<e.length;t++)Q[e.charCodeAt(t)]=t;function B(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))}var s=(o.prototype.get=function(A){var e;if(0<=A){if(A<55296||56319<A&&A<=65535)return e=((e=this.index[A>>5])<<2)+(31&A),this.data[e];if(A<=65535)return e=((e=this.index[2048+(A-55296>>5)])<<2)+(31&A),this.data[e];if(A<this.highStart)return e=2080+(A>>11),e=this.index[e],e+=A>>5&63,e=((e=this.index[e])<<2)+(31&A),this.data[e];if(A<=1114111)return this.data[this.highValueIndex]}return this.errorValue},o);function o(A,e,t,r,n,B){this.initialValue=A,this.errorValue=e,this.highStart=t,this.highValueIndex=r,this.index=n,this.data=B}function C(A,e,t,r){var n=r[t];if(Array.isArray(A)?-1!==A.indexOf(n):A===n)for(var B=t;B<=r.length;){if((i=r[++B])===e)return!0;if(i!==H)break}if(n===H)for(B=t;0<B;){var s=r[--B];if(Array.isArray(A)?-1!==A.indexOf(s):A===s)for(var o=t;o<=r.length;){var i;if((i=r[++o])===e)return!0;if(i!==H)break}if(s!==H)break}return!1}function g(A,e){for(var t=A;0<=t;){var r=e[t];if(r!==H)return r;t--}return 0}function w(A,e,t,r,n){if(0===t[r])return Y;var B=r-1;if(Array.isArray(n)&&!0===n[B])return Y;var s=B-1,o=1+B,i=e[B],a=0<=s?e[s]:0,c=e[o];if(2===i&&3===c)return Y;if(-1!==j.indexOf(i))return"!";if(-1!==j.indexOf(c))return Y;if(-1!==$.indexOf(c))return Y;if(8===g(B,e))return"÷";if(11===q.get(A[B])&&(c===X||c===P||c===x))return Y;if(7===i||7===c)return Y;if(9===i)return Y;if(-1===[H,d,f].indexOf(i)&&9===c)return Y;if(-1!==[p,N,m,O,y].indexOf(c))return Y;if(g(B,e)===v)return Y;if(C(23,v,B,e))return Y;if(C([p,N],L,B,e))return Y;if(C(12,12,B,e))return Y;if(i===H)return"÷";if(23===i||23===c)return Y;if(16===c||16===i)return"÷";if(-1!==[d,f,L].indexOf(c)||14===i)return Y;if(36===a&&-1!==rA.indexOf(i))return Y;if(i===y&&36===c)return Y;if(c===R&&-1!==Z.concat(R,m,D,X,P,x).indexOf(i))return Y;if(-1!==Z.indexOf(c)&&i===D||-1!==Z.indexOf(i)&&c===D)return Y;if(i===M&&-1!==[X,P,x].indexOf(c)||-1!==[X,P,x].indexOf(i)&&c===b)return Y;if(-1!==Z.indexOf(i)&&-1!==AA.indexOf(c)||-1!==AA.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(-1!==[M,b].indexOf(i)&&(c===D||-1!==[v,f].indexOf(c)&&e[1+o]===D)||-1!==[v,f].indexOf(i)&&c===D||i===D&&-1!==[D,y,O].indexOf(c))return Y;if(-1!==[D,y,O,p,N].indexOf(c))for(var Q=B;0<=Q;){if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(-1!==[M,b].indexOf(c))for(Q=-1!==[p,N].indexOf(i)?s:B;0<=Q;){var w;if((w=e[Q])===D)return Y;if(-1===[y,O].indexOf(w))break;Q--}if(J===i&&-1!==[J,G,V,z].indexOf(c)||-1!==[G,V].indexOf(i)&&-1!==[G,k].indexOf(c)||-1!==[k,z].indexOf(i)&&c===k)return Y;if(-1!==tA.indexOf(i)&&-1!==[R,b].indexOf(c)||-1!==tA.indexOf(c)&&i===M)return Y;if(-1!==Z.indexOf(i)&&-1!==Z.indexOf(c))return Y;if(i===O&&-1!==Z.indexOf(c))return Y;if(-1!==Z.concat(D).indexOf(i)&&c===v||-1!==Z.concat(D).indexOf(c)&&i===N)return Y;if(41===i&&41===c){for(var u=t[B],U=1;0<u&&41===e[--u];)U++;if(U%2!=0)return Y}return i===P&&c===x?Y:"÷"}function u(t,A){A||(A={lineBreak:"normal",wordBreak:"normal"});var e=function(A,n){void 0===n&&(n="strict");var B=[],s=[],o=[];return A.forEach(function(A,e){var t=q.get(A);if(50<t?(o.push(!0),t-=50):o.push(!1),-1!==["normal","auto","loose"].indexOf(n)&&-1!==[8208,8211,12316,12448].indexOf(A))return s.push(e),B.push(16);if(4!==t&&11!==t)return s.push(e),31===t?B.push("strict"===n?L:X):t===W?B.push(_):29===t?B.push(_):43===t?131072<=A&&A<=196605||196608<=A&&A<=262141?B.push(X):B.push(_):void B.push(t);if(0===e)return s.push(e),B.push(_);var r=B[e-1];return-1===eA.indexOf(r)?(s.push(s[e-1]),B.push(r)):(s.push(e),B.push(_))}),[s,B,o]}(t,A.lineBreak),r=e[0],n=e[1],B=e[2];return"break-all"!==A.wordBreak&&"break-word"!==A.wordBreak||(n=n.map(function(A){return-1!==[D,_,W].indexOf(A)?X:A})),[r,n,"keep-all"===A.wordBreak?B.map(function(A,e){return A&&19968<=t[e]&&t[e]<=40959}):void 0]}var i,U,E,F,h,H=10,d=13,f=15,p=17,N=18,m=19,R=20,L=21,v=22,O=24,D=25,b=26,M=27,y=28,_=30,P=32,x=33,V=34,z=35,X=37,J=38,G=39,k=40,W=42,Y="×",q=(i=function(A){var e,t,r,n,B,s=.75*A.length,o=A.length,i=0;"="===A[A.length-1]&&(s--,"="===A[A.length-2]&&s--);var a="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array&&void 0!==Uint8Array.prototype.slice?new ArrayBuffer(s):new Array(s),c=Array.isArray(a)?a:new Uint8Array(a);for(e=0;e<o;e+=4)t=Q[A.charCodeAt(e)],r=Q[A.charCodeAt(e+1)],n=Q[A.charCodeAt(e+2)],B=Q[A.charCodeAt(e+3)],c[i++]=t<<2|r>>4,c[i++]=(15&r)<<4|n>>2,c[i++]=(3&n)<<6|63&B;return a}("KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA"),U=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t}(i):new Uint32Array(i),E=Array.isArray(i)?function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t}(i):new Uint16Array(i),F=B(E,12,U[4]/2),h=2===U[5]?B(E,(24+U[4])/2):function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))}(U,Math.ceil((24+U[4])/4)),new s(U[0],U[1],U[2],U[3],F,h)),Z=[_,36],j=[1,2,3,5],$=[H,8],AA=[M,b],eA=j.concat($),tA=[J,G,k,V,z],rA=[f,d],nA=(BA.prototype.slice=function(){return l.apply(void 0,this.codePoints.slice(this.start,this.end))},BA);function BA(A,e,t,r){this.codePoints=A,this.required="!"===e,this.start=t,this.end=r}var sA,oA;(oA=sA||(sA={}))[oA.STRING_TOKEN=0]="STRING_TOKEN",oA[oA.BAD_STRING_TOKEN=1]="BAD_STRING_TOKEN",oA[oA.LEFT_PARENTHESIS_TOKEN=2]="LEFT_PARENTHESIS_TOKEN",oA[oA.RIGHT_PARENTHESIS_TOKEN=3]="RIGHT_PARENTHESIS_TOKEN",oA[oA.COMMA_TOKEN=4]="COMMA_TOKEN",oA[oA.HASH_TOKEN=5]="HASH_TOKEN",oA[oA.DELIM_TOKEN=6]="DELIM_TOKEN",oA[oA.AT_KEYWORD_TOKEN=7]="AT_KEYWORD_TOKEN",oA[oA.PREFIX_MATCH_TOKEN=8]="PREFIX_MATCH_TOKEN",oA[oA.DASH_MATCH_TOKEN=9]="DASH_MATCH_TOKEN",oA[oA.INCLUDE_MATCH_TOKEN=10]="INCLUDE_MATCH_TOKEN",oA[oA.LEFT_CURLY_BRACKET_TOKEN=11]="LEFT_CURLY_BRACKET_TOKEN",oA[oA.RIGHT_CURLY_BRACKET_TOKEN=12]="RIGHT_CURLY_BRACKET_TOKEN",oA[oA.SUFFIX_MATCH_TOKEN=13]="SUFFIX_MATCH_TOKEN",oA[oA.SUBSTRING_MATCH_TOKEN=14]="SUBSTRING_MATCH_TOKEN",oA[oA.DIMENSION_TOKEN=15]="DIMENSION_TOKEN",oA[oA.PERCENTAGE_TOKEN=16]="PERCENTAGE_TOKEN",oA[oA.NUMBER_TOKEN=17]="NUMBER_TOKEN",oA[oA.FUNCTION=18]="FUNCTION",oA[oA.FUNCTION_TOKEN=19]="FUNCTION_TOKEN",oA[oA.IDENT_TOKEN=20]="IDENT_TOKEN",oA[oA.COLUMN_TOKEN=21]="COLUMN_TOKEN",oA[oA.URL_TOKEN=22]="URL_TOKEN",oA[oA.BAD_URL_TOKEN=23]="BAD_URL_TOKEN",oA[oA.CDC_TOKEN=24]="CDC_TOKEN",oA[oA.CDO_TOKEN=25]="CDO_TOKEN",oA[oA.COLON_TOKEN=26]="COLON_TOKEN",oA[oA.SEMICOLON_TOKEN=27]="SEMICOLON_TOKEN",oA[oA.LEFT_SQUARE_BRACKET_TOKEN=28]="LEFT_SQUARE_BRACKET_TOKEN",oA[oA.RIGHT_SQUARE_BRACKET_TOKEN=29]="RIGHT_SQUARE_BRACKET_TOKEN",oA[oA.UNICODE_RANGE_TOKEN=30]="UNICODE_RANGE_TOKEN",oA[oA.WHITESPACE_TOKEN=31]="WHITESPACE_TOKEN",oA[oA.EOF_TOKEN=32]="EOF_TOKEN";function iA(A){return 48<=A&&A<=57}function aA(A){return iA(A)||65<=A&&A<=70||97<=A&&A<=102}function cA(A){return 10===A||9===A||32===A}function QA(A){return function(A){return function(A){return 97<=A&&A<=122}(A)||function(A){return 65<=A&&A<=90}(A)}(A)||function(A){return 128<=A}(A)||95===A}function wA(A){return QA(A)||iA(A)||45===A}function uA(A,e){return 92===A&&10!==e}function UA(A,e,t){return 45===A?QA(e)||uA(e,t):!!QA(A)||!(92!==A||!uA(A,e))}function lA(A,e,t){return 43===A||45===A?!!iA(e)||46===e&&iA(t):iA(46===A?e:A)}var CA={type:sA.LEFT_PARENTHESIS_TOKEN},gA={type:sA.RIGHT_PARENTHESIS_TOKEN},EA={type:sA.COMMA_TOKEN},FA={type:sA.SUFFIX_MATCH_TOKEN},hA={type:sA.PREFIX_MATCH_TOKEN},HA={type:sA.COLUMN_TOKEN},dA={type:sA.DASH_MATCH_TOKEN},fA={type:sA.INCLUDE_MATCH_TOKEN},pA={type:sA.LEFT_CURLY_BRACKET_TOKEN},NA={type:sA.RIGHT_CURLY_BRACKET_TOKEN},KA={type:sA.SUBSTRING_MATCH_TOKEN},IA={type:sA.BAD_URL_TOKEN},TA={type:sA.BAD_STRING_TOKEN},mA={type:sA.CDO_TOKEN},RA={type:sA.CDC_TOKEN},LA={type:sA.COLON_TOKEN},vA={type:sA.SEMICOLON_TOKEN},OA={type:sA.LEFT_SQUARE_BRACKET_TOKEN},DA={type:sA.RIGHT_SQUARE_BRACKET_TOKEN},bA={type:sA.WHITESPACE_TOKEN},SA={type:sA.EOF_TOKEN},MA=(yA.prototype.write=function(A){this._value=this._value.concat(c(A))},yA.prototype.read=function(){for(var A=[],e=this.consumeToken();e!==SA;)A.push(e),e=this.consumeToken();return A},yA.prototype.consumeToken=function(){var A=this.consumeCodePoint();switch(A){case 34:return this.consumeStringToken(34);case 35:var e=this.peekCodePoint(0),t=this.peekCodePoint(1),r=this.peekCodePoint(2);if(wA(e)||uA(t,r)){var n=UA(e,t,r)?2:1,B=this.consumeName();return{type:sA.HASH_TOKEN,value:B,flags:n}}break;case 36:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),FA;break;case 39:return this.consumeStringToken(39);case 40:return CA;case 41:return gA;case 42:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),KA;break;case 43:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 44:return EA;case 45:var s=A,o=this.peekCodePoint(0),i=this.peekCodePoint(1);if(lA(s,o,i))return this.reconsumeCodePoint(A),this.consumeNumericToken();if(UA(s,o,i))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();if(45===o&&62===i)return this.consumeCodePoint(),this.consumeCodePoint(),RA;break;case 46:if(lA(A,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(A),this.consumeNumericToken();break;case 47:if(42===this.peekCodePoint(0))for(this.consumeCodePoint();;){var a=this.consumeCodePoint();if(42===a&&47===(a=this.consumeCodePoint()))return this.consumeToken();if(-1===a)return this.consumeToken()}break;case 58:return LA;case 59:return vA;case 60:if(33===this.peekCodePoint(0)&&45===this.peekCodePoint(1)&&45===this.peekCodePoint(2))return this.consumeCodePoint(),this.consumeCodePoint(),mA;break;case 64:var c=this.peekCodePoint(0),Q=this.peekCodePoint(1),w=this.peekCodePoint(2);if(UA(c,Q,w))return B=this.consumeName(),{type:sA.AT_KEYWORD_TOKEN,value:B};break;case 91:return OA;case 92:if(uA(A,this.peekCodePoint(0)))return this.reconsumeCodePoint(A),this.consumeIdentLikeToken();break;case 93:return DA;case 61:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),hA;break;case 123:return pA;case 125:return NA;case 117:case 85:var u=this.peekCodePoint(0),U=this.peekCodePoint(1);return 43!==u||!aA(U)&&63!==U||(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(A),this.consumeIdentLikeToken();case 124:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),dA;if(124===this.peekCodePoint(0))return this.consumeCodePoint(),HA;break;case 126:if(61===this.peekCodePoint(0))return this.consumeCodePoint(),fA;break;case-1:return SA}return cA(A)?(this.consumeWhiteSpace(),bA):iA(A)?(this.reconsumeCodePoint(A),this.consumeNumericToken()):QA(A)?(this.reconsumeCodePoint(A),this.consumeIdentLikeToken()):{type:sA.DELIM_TOKEN,value:l(A)}},yA.prototype.consumeCodePoint=function(){var A=this._value.shift();return void 0===A?-1:A},yA.prototype.reconsumeCodePoint=function(A){this._value.unshift(A)},yA.prototype.peekCodePoint=function(A){return A>=this._value.length?-1:this._value[A]},yA.prototype.consumeUnicodeRangeToken=function(){for(var A=[],e=this.consumeCodePoint();aA(e)&&A.length<6;)A.push(e),e=this.consumeCodePoint();for(var t=!1;63===e&&A.length<6;)A.push(e),e=this.consumeCodePoint(),t=!0;if(t){var r=parseInt(l.apply(void 0,A.map(function(A){return 63===A?48:A})),16),n=parseInt(l.apply(void 0,A.map(function(A){return 63===A?70:A})),16);return{type:sA.UNICODE_RANGE_TOKEN,start:r,end:n}}var B=parseInt(l.apply(void 0,A),16);if(45===this.peekCodePoint(0)&&aA(this.peekCodePoint(1))){this.consumeCodePoint(),e=this.consumeCodePoint();for(var s=[];aA(e)&&s.length<6;)s.push(e),e=this.consumeCodePoint();return n=parseInt(l.apply(void 0,s),16),{type:sA.UNICODE_RANGE_TOKEN,start:B,end:n}}return{type:sA.UNICODE_RANGE_TOKEN,start:B,end:B}},yA.prototype.consumeIdentLikeToken=function(){var A=this.consumeName();return"url"===A.toLowerCase()&&40===this.peekCodePoint(0)?(this.consumeCodePoint(),this.consumeUrlToken()):40===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.FUNCTION_TOKEN,value:A}):{type:sA.IDENT_TOKEN,value:A}},yA.prototype.consumeUrlToken=function(){var A=[];if(this.consumeWhiteSpace(),-1===this.peekCodePoint(0))return{type:sA.URL_TOKEN,value:""};var e,t=this.peekCodePoint(0);if(39===t||34===t){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===sA.STRING_TOKEN&&(this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0))?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:r.value}):(this.consumeBadUrlRemnants(),IA)}for(;;){var n=this.consumeCodePoint();if(-1===n||41===n)return{type:sA.URL_TOKEN,value:l.apply(void 0,A)};if(cA(n))return this.consumeWhiteSpace(),-1===this.peekCodePoint(0)||41===this.peekCodePoint(0)?(this.consumeCodePoint(),{type:sA.URL_TOKEN,value:l.apply(void 0,A)}):(this.consumeBadUrlRemnants(),IA);if(34===n||39===n||40===n||0<=(e=n)&&e<=8||11===e||14<=e&&e<=31||127===e)return this.consumeBadUrlRemnants(),IA;if(92===n){if(!uA(n,this.peekCodePoint(0)))return this.consumeBadUrlRemnants(),IA;A.push(this.consumeEscapedCodePoint())}else A.push(n)}},yA.prototype.consumeWhiteSpace=function(){for(;cA(this.peekCodePoint(0));)this.consumeCodePoint()},yA.prototype.consumeBadUrlRemnants=function(){for(;;){var A=this.consumeCodePoint();if(41===A||-1===A)return;uA(A,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},yA.prototype.consumeStringSlice=function(A){for(var e="";0<A;){var t=Math.min(6e4,A);e+=l.apply(void 0,this._value.splice(0,t)),A-=t}return this._value.shift(),e},yA.prototype.consumeStringToken=function(A){for(var e="",t=0;;){var r=this._value[t];if(-1===r||void 0===r||r===A)return e+=this.consumeStringSlice(t),{type:sA.STRING_TOKEN,value:e};if(10===r)return this._value.splice(0,t),TA;if(92===r){var n=this._value[t+1];-1!==n&&void 0!==n&&(10===n?(e+=this.consumeStringSlice(t),t=-1,this._value.shift()):uA(r,n)&&(e+=this.consumeStringSlice(t),e+=l(this.consumeEscapedCodePoint()),t=-1))}t++}},yA.prototype.consumeNumber=function(){var A=[],e=4,t=this.peekCodePoint(0);for(43!==t&&45!==t||A.push(this.consumeCodePoint());iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0);var r=this.peekCodePoint(1);if(46===t&&iA(r))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());t=this.peekCodePoint(0),r=this.peekCodePoint(1);var n=this.peekCodePoint(2);if((69===t||101===t)&&((43===r||45===r)&&iA(n)||iA(r)))for(A.push(this.consumeCodePoint(),this.consumeCodePoint()),e=8;iA(this.peekCodePoint(0));)A.push(this.consumeCodePoint());return[function(A){var e=0,t=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(t=-1),e++);for(var r=[];iA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(l.apply(void 0,r),10):0;46===A[e]&&e++;for(var B=[];iA(A[e]);)B.push(A[e++]);var s=B.length,o=s?parseInt(l.apply(void 0,B),10):0;69!==A[e]&&101!==A[e]||e++;var i=1;43!==A[e]&&45!==A[e]||(45===A[e]&&(i=-1),e++);for(var a=[];iA(A[e]);)a.push(A[e++]);var c=a.length?parseInt(l.apply(void 0,a),10):0;return t*(n+o*Math.pow(10,-s))*Math.pow(10,i*c)}(A),e]},yA.prototype.consumeNumericToken=function(){var A=this.consumeNumber(),e=A[0],t=A[1],r=this.peekCodePoint(0),n=this.peekCodePoint(1),B=this.peekCodePoint(2);if(UA(r,n,B)){var s=this.consumeName();return{type:sA.DIMENSION_TOKEN,number:e,flags:t,unit:s}}return 37===r?(this.consumeCodePoint(),{type:sA.PERCENTAGE_TOKEN,number:e,flags:t}):{type:sA.NUMBER_TOKEN,number:e,flags:t}},yA.prototype.consumeEscapedCodePoint=function(){var A=this.consumeCodePoint();if(aA(A)){for(var e=l(A);aA(this.peekCodePoint(0))&&e.length<6;)e+=l(this.consumeCodePoint());cA(this.peekCodePoint(0))&&this.consumeCodePoint();var t=parseInt(e,16);return 0===t||function(A){return 55296<=A&&A<=57343}(t)||1114111<t?65533:t}return-1===A?65533:A},yA.prototype.consumeName=function(){for(var A="";;){var e=this.consumeCodePoint();if(wA(e))A+=l(e);else{if(!uA(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),A;A+=l(this.consumeEscapedCodePoint())}}},yA);function yA(){this._value=[]}var _A=(PA.create=function(A){var e=new MA;return e.write(A),new PA(e.read())},PA.parseValue=function(A){return PA.create(A).parseComponentValue()},PA.parseValues=function(A){return PA.create(A).parseComponentValues()},PA.prototype.parseComponentValue=function(){for(var A=this.consumeToken();A.type===sA.WHITESPACE_TOKEN;)A=this.consumeToken();if(A.type===sA.EOF_TOKEN)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(A);for(var e=this.consumeComponentValue();(A=this.consumeToken()).type===sA.WHITESPACE_TOKEN;);if(A.type===sA.EOF_TOKEN)return e;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},PA.prototype.parseComponentValues=function(){for(var A=[];;){var e=this.consumeComponentValue();if(e.type===sA.EOF_TOKEN)return A;A.push(e),A.push()}},PA.prototype.consumeComponentValue=function(){var A=this.consumeToken();switch(A.type){case sA.LEFT_CURLY_BRACKET_TOKEN:case sA.LEFT_SQUARE_BRACKET_TOKEN:case sA.LEFT_PARENTHESIS_TOKEN:return this.consumeSimpleBlock(A.type);case sA.FUNCTION_TOKEN:return this.consumeFunction(A)}return A},PA.prototype.consumeSimpleBlock=function(A){for(var e={type:A,values:[]},t=this.consumeToken();;){if(t.type===sA.EOF_TOKEN||Be(t,A))return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue()),t=this.consumeToken()}},PA.prototype.consumeFunction=function(A){for(var e={name:A.value,values:[],type:sA.FUNCTION};;){var t=this.consumeToken();if(t.type===sA.EOF_TOKEN||t.type===sA.RIGHT_PARENTHESIS_TOKEN)return e;this.reconsumeToken(t),e.values.push(this.consumeComponentValue())}},PA.prototype.consumeToken=function(){var A=this._tokens.shift();return void 0===A?SA:A},PA.prototype.reconsumeToken=function(A){this._tokens.unshift(A)},PA);function PA(A){this._tokens=A}function xA(A){return A.type===sA.DIMENSION_TOKEN}function VA(A){return A.type===sA.NUMBER_TOKEN}function zA(A){return A.type===sA.IDENT_TOKEN}function XA(A){return A.type===sA.STRING_TOKEN}function JA(A,e){return zA(A)&&A.value===e}function GA(A){return A.type!==sA.WHITESPACE_TOKEN}function kA(A){return A.type!==sA.WHITESPACE_TOKEN&&A.type!==sA.COMMA_TOKEN}function WA(A){var e=[],t=[];return A.forEach(function(A){if(A.type===sA.COMMA_TOKEN){if(0===t.length)throw new Error("Error parsing function args, zero tokens for arg");return e.push(t),void(t=[])}A.type!==sA.WHITESPACE_TOKEN&&t.push(A)}),t.length&&e.push(t),e}function YA(A){return A.type===sA.NUMBER_TOKEN||A.type===sA.DIMENSION_TOKEN}function qA(A){return A.type===sA.PERCENTAGE_TOKEN||YA(A)}function ZA(A){return 1<A.length?[A[0],A[1]]:[A[0]]}function jA(A,e,t){var r=A[0],n=A[1];return[ae(r,e),ae(void 0!==n?n:r,t)]}function $A(A){return A.type===sA.DIMENSION_TOKEN&&("deg"===A.unit||"grad"===A.unit||"rad"===A.unit||"turn"===A.unit)}function Ae(A){switch(A.filter(zA).map(function(A){return A.value}).join(" ")){case"to bottom right":case"to right bottom":case"left top":case"top left":return[se,se];case"to top":case"bottom":return Qe(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[se,ie];case"to right":case"left":return Qe(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[ie,ie];case"to bottom":case"top":return Qe(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[ie,se];case"to left":case"right":return Qe(270)}return 0}function ee(A){return 0==(255&A)}function te(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"}function re(A,e){if(A.type===sA.NUMBER_TOKEN)return A.number;if(A.type!==sA.PERCENTAGE_TOKEN)return 0;var t=3===e?1:255;return 3===e?A.number/100*t:Math.round(A.number/100*t)}function ne(A){var e=A.filter(kA);if(3===e.length){var t=e.map(re),r=t[0],n=t[1],B=t[2];return ue(r,n,B,1)}if(4!==e.length)return 0;var s=e.map(re),o=(r=s[0],n=s[1],B=s[2],s[3]);return ue(r,n,B,o)}var Be=function(A,e){return e===sA.LEFT_CURLY_BRACKET_TOKEN&&A.type===sA.RIGHT_CURLY_BRACKET_TOKEN||(e===sA.LEFT_SQUARE_BRACKET_TOKEN&&A.type===sA.RIGHT_SQUARE_BRACKET_TOKEN||e===sA.LEFT_PARENTHESIS_TOKEN&&A.type===sA.RIGHT_PARENTHESIS_TOKEN)},se={type:sA.NUMBER_TOKEN,number:0,flags:4},oe={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},ie={type:sA.PERCENTAGE_TOKEN,number:100,flags:4},ae=function(A,e){if(A.type===sA.PERCENTAGE_TOKEN)return A.number/100*e;if(xA(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},ce=function(A){if(A.type===sA.DIMENSION_TOKEN)switch(A.unit){case"deg":return Math.PI*A.number/180;case"grad":return Math.PI/200*A.number;case"rad":return A.number;case"turn":return 2*Math.PI*A.number}throw new Error("Unsupported angle type")},Qe=function(A){return Math.PI*A/180},we=function(A){if(A.type===sA.FUNCTION){var e=he[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported color function "'+A.name+'"');return e(A.values)}if(A.type===sA.HASH_TOKEN){if(3===A.value.length){var t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),1)}if(4===A.value.length){t=A.value.substring(0,1),r=A.value.substring(1,2),n=A.value.substring(2,3);var B=A.value.substring(3,4);return ue(parseInt(t+t,16),parseInt(r+r,16),parseInt(n+n,16),parseInt(B+B,16)/255)}if(6===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),1)}if(8===A.value.length){t=A.value.substring(0,2),r=A.value.substring(2,4),n=A.value.substring(4,6),B=A.value.substring(6,8);return ue(parseInt(t,16),parseInt(r,16),parseInt(n,16),parseInt(B,16)/255)}}if(A.type===sA.IDENT_TOKEN){var s=He[A.value.toUpperCase()];if(void 0!==s)return s}return He.TRANSPARENT},ue=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(255*r)<<0)>>>0};function Ue(A,e,t){return t<0&&(t+=1),1<=t&&(t-=1),t<1/6?(e-A)*t*6+A:t<.5?e:t<2/3?6*(e-A)*(2/3-t)+A:A}function le(A){var e=A.filter(kA),t=e[0],r=e[1],n=e[2],B=e[3],s=(t.type===sA.NUMBER_TOKEN?Qe(t.number):ce(t))/(2*Math.PI),o=qA(r)?r.number/100:0,i=qA(n)?n.number/100:0,a=void 0!==B&&qA(B)?ae(B,1):1;if(0==o)return ue(255*i,255*i,255*i,1);var c=i<=.5?i*(1+o):i+o-i*o,Q=2*i-c,w=Ue(Q,c,s+1/3),u=Ue(Q,c,s),U=Ue(Q,c,s-1/3);return ue(255*w,255*u,255*U,a)}var Ce,ge,Ee,Fe,he={hsl:le,hsla:le,rgb:ne,rgba:ne},He={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199};(ge=Ce||(Ce={}))[ge.VALUE=0]="VALUE",ge[ge.LIST=1]="LIST",ge[ge.IDENT_VALUE=2]="IDENT_VALUE",ge[ge.TYPE_VALUE=3]="TYPE_VALUE",ge[ge.TOKEN_VALUE=4]="TOKEN_VALUE",(Fe=Ee||(Ee={}))[Fe.BORDER_BOX=0]="BORDER_BOX",Fe[Fe.PADDING_BOX=1]="PADDING_BOX";function de(A){var e=we(A[0]),t=A[1];return t&&qA(t)?{color:e,stop:t}:{color:e,stop:null}}function fe(A,t){var e=A[0],r=A[A.length-1];null===e.stop&&(e.stop=se),null===r.stop&&(r.stop=ie);for(var n=[],B=0,s=0;s<A.length;s++){var o=A[s].stop;if(null!==o){var i=ae(o,t);B<i?n.push(i):n.push(B),B=i}else n.push(null)}var a=null;for(s=0;s<n.length;s++){var c=n[s];if(null===c)null===a&&(a=s);else if(null!==a){for(var Q=s-a,w=(c-n[a-1])/(1+Q),u=1;u<=Q;u++)n[a+u-1]=w*u;a=null}}return A.map(function(A,e){return{color:A.color,stop:Math.max(Math.min(1,n[e]/t),0)}})}function pe(A,e,t){var r="number"==typeof A?A:function(A,e,t){var r=e/2,n=t/2,B=ae(A[0],e)-r,s=n-ae(A[1],t);return(Math.atan2(s,B)+2*Math.PI)%(2*Math.PI)}(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),B=e/2,s=t/2,o=n/2,i=Math.sin(r-Math.PI/2)*o,a=Math.cos(r-Math.PI/2)*o;return[n,B-a,B+a,s-i,s+i]}function Ne(A,e){return Math.sqrt(A*A+e*e)}function Ke(A,e,B,s,o){return[[0,0],[0,e],[A,0],[A,e]].reduce(function(A,e){var t=e[0],r=e[1],n=Ne(B-t,s-r);return(o?n<A.optimumDistance:n>A.optimumDistance)?{optimumCorner:e,optimumDistance:n}:A},{optimumDistance:o?1/0:-1/0,optimumCorner:null}).optimumCorner}function Ie(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&-1!==["top","left","right","bottom"].indexOf(t.value))return void(n=Ae(A));if($A(t))return void(n=(ce(t)+Qe(270))%Qe(360))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}}function Te(A){return 0===A[0]&&255===A[1]&&0===A[2]&&255===A[3]}var me={name:"background-clip",initialValue:"border-box",prefix:!(Fe[Fe.CONTENT_BOX=2]="CONTENT_BOX"),type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return Ee.PADDING_BOX;case"content-box":return Ee.CONTENT_BOX}return Ee.BORDER_BOX})}},Re={name:"background-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Le=function(A,e,t,r,n){var B="http://www.w3.org/2000/svg",s=document.createElementNS(B,"svg"),o=document.createElementNS(B,"foreignObject");return s.setAttributeNS(null,"width",A.toString()),s.setAttributeNS(null,"height",e.toString()),o.setAttributeNS(null,"width","100%"),o.setAttributeNS(null,"height","100%"),o.setAttributeNS(null,"x",t.toString()),o.setAttributeNS(null,"y",r.toString()),o.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(o),o.appendChild(n),s},ve=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})},Oe={get SUPPORT_RANGE_BOUNDS(){var A=function(A){if(A.createRange){var e=A.createRange();if(e.getBoundingClientRect){var t=A.createElement("boundtest");t.style.height="123px",t.style.display="block",A.body.appendChild(t),e.selectNode(t);var r=e.getBoundingClientRect(),n=Math.round(r.height);if(A.body.removeChild(t),123===n)return!0}}return!1}(document);return Object.defineProperty(Oe,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch(A){return!1}return!0}(document);return Object.defineProperty(Oe,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A="function"==typeof Array.from&&"function"==typeof window.fetch?function(r){var A=r.createElement("canvas"),n=100;A.width=n,A.height=n;var B=A.getContext("2d");if(!B)return Promise.reject(!1);B.fillStyle="rgb(0, 255, 0)",B.fillRect(0,0,n,n);var e=new Image,s=A.toDataURL();e.src=s;var t=Le(n,n,0,0,e);return B.fillStyle="red",B.fillRect(0,0,n,n),ve(t).then(function(A){B.drawImage(A,0,0);var e=B.getImageData(0,0,n,n).data;B.fillStyle="red",B.fillRect(0,0,n,n);var t=r.createElement("div");return t.style.backgroundImage="url("+s+")",t.style.height="100px",Te(e)?ve(Le(n,n,0,0,t)):Promise.reject(!1)}).then(function(A){return B.drawImage(A,0,0),Te(B.getImageData(0,0,n,n).data)}).catch(function(){return!1})}(document):Promise.resolve(!1);return Object.defineProperty(Oe,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=void 0!==(new Image).crossOrigin;return Object.defineProperty(Oe,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A="string"==typeof(new XMLHttpRequest).responseType;return Object.defineProperty(Oe,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Oe,"SUPPORT_CORS_XHR",{value:A}),A}},De=(be.prototype.debug=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.debug?console.debug.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.prototype.getTime=function(){return Date.now()-this.start},be.create=function(A){be.instances[A.id]=new be(A)},be.destroy=function(A){delete be.instances[A]},be.getInstance=function(A){var e=be.instances[A];if(void 0===e)throw new Error("No logger instance found with id "+A);return e},be.prototype.info=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&"undefined"!=typeof window&&window.console&&"function"==typeof console.info&&console.info.apply(console,[this.id,this.getTime()+"ms"].concat(A))},be.prototype.error=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];this.enabled&&("undefined"!=typeof window&&window.console&&"function"==typeof console.error?console.error.apply(console,[this.id,this.getTime()+"ms"].concat(A)):this.info.apply(this,A))},be.instances={},be);function be(A){var e=A.id,t=A.enabled;this.id=e,this.enabled=t,this.start=Date.now()}var Se=(Me.create=function(A,e){return Me._caches[A]=new ye(A,e)},Me.destroy=function(A){delete Me._caches[A]},Me.open=function(A){var e=Me._caches[A];if(void 0!==e)return e;throw new Error('Cache with key "'+A+'" not found')},Me.getOrigin=function(A){var e=Me._link;return e?(e.href=A,e.href=e.href,e.protocol+e.hostname+e.port):"about:blank"},Me.isSameOrigin=function(A){return Me.getOrigin(A)===Me._origin},Me.setContext=function(A){Me._link=A.document.createElement("a"),Me._origin=Me.getOrigin(A.location.href)},Me.getInstance=function(){var A=Me._current;if(null===A)throw new Error("No cache instance attached");return A},Me.attachInstance=function(A){Me._current=A},Me.detachInstance=function(){Me._current=null},Me._caches={},Me._origin="about:blank",Me._current=null,Me);function Me(){}var ye=(_e.prototype.addImage=function(A){var e=Promise.resolve();return this.has(A)||(Ye(A)||Ge(A))&&(this._cache[A]=this.loadImage(A)),e},_e.prototype.match=function(A){return this._cache[A]},_e.prototype.loadImage=function(s){return a(this,void 0,void 0,function(){var e,r,t,n,B=this;return S(this,function(A){switch(A.label){case 0:return e=Se.isSameOrigin(s),r=!ke(s)&&!0===this._options.useCORS&&Oe.SUPPORT_CORS_IMAGES&&!e,t=!ke(s)&&!e&&"string"==typeof this._options.proxy&&Oe.SUPPORT_CORS_XHR&&!r,e||!1!==this._options.allowTaint||ke(s)||t||r?(n=s,t?[4,this.proxy(n)]:[3,2]):[2];case 1:n=A.sent(),A.label=2;case 2:return De.getInstance(this.id).debug("Added image "+s.substring(0,256)),[4,new Promise(function(A,e){var t=new Image;t.onload=function(){return A(t)},t.onerror=e,(We(n)||r)&&(t.crossOrigin="anonymous"),t.src=n,!0===t.complete&&setTimeout(function(){return A(t)},500),0<B._options.imageTimeout&&setTimeout(function(){return e("Timed out ("+B._options.imageTimeout+"ms) loading image")},B._options.imageTimeout)})];case 3:return[2,A.sent()]}})})},_e.prototype.has=function(A){return void 0!==this._cache[A]},_e.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},_e.prototype.proxy=function(B){var s=this,o=this._options.proxy;if(!o)throw new Error("No proxy defined");var i=B.substring(0,256);return new Promise(function(e,t){var r=Oe.SUPPORT_RESPONSE_TYPE?"blob":"text",n=new XMLHttpRequest;if(n.onload=function(){if(200===n.status)if("text"==r)e(n.response);else{var A=new FileReader;A.addEventListener("load",function(){return e(A.result)},!1),A.addEventListener("error",function(A){return t(A)},!1),A.readAsDataURL(n.response)}else t("Failed to proxy resource "+i+" with status code "+n.status)},n.onerror=t,n.open("GET",o+"?url="+encodeURIComponent(B)+"&responseType="+r),"text"!=r&&n instanceof XMLHttpRequest&&(n.responseType=r),s._options.imageTimeout){var A=s._options.imageTimeout;n.timeout=A,n.ontimeout=function(){return t("Timed out ("+A+"ms) proxying "+i)}}n.send()})},_e);function _e(A,e){this.id=A,this._options=e,this._cache={}}function Pe(A){var n=rt.CIRCLE,B=Bt.FARTHEST_CORNER,s=[],o=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e?t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"center":return o.push(oe),!1;case"top":case"left":return o.push(se),!1;case"right":case"bottom":return o.push(ie),!1}else if(qA(e)||YA(e))return o.push(e),!1;return A},t):1===e&&(t=A.reduce(function(A,e){if(zA(e))switch(e.value){case"circle":return n=rt.CIRCLE,!1;case et:return n=rt.ELLIPSE,!1;case tt:case Ze:return B=Bt.CLOSEST_SIDE,!1;case je:return B=Bt.FARTHEST_SIDE,!1;case $e:return B=Bt.CLOSEST_CORNER,!1;case"cover":case At:return B=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(B)||(B=[]),B.push(e),!1;return A},t)),t){var r=de(A);s.push(r)}}),{size:B,shape:n,stops:s,position:o,type:xe.RADIAL_GRADIENT}}var xe,Ve,ze=/^data:image\/svg\+xml/i,Xe=/^data:image\/.*;base64,/i,Je=/^data:image\/.*/i,Ge=function(A){return Oe.SUPPORT_SVG_DRAWING||!qe(A)},ke=function(A){return Je.test(A)},We=function(A){return Xe.test(A)},Ye=function(A){return"blob"===A.substr(0,4)},qe=function(A){return"svg"===A.substr(-3).toLowerCase()||ze.test(A)},Ze="closest-side",je="farthest-side",$e="closest-corner",At="farthest-corner",et="ellipse",tt="contain";(Ve=xe||(xe={}))[Ve.URL=0]="URL",Ve[Ve.LINEAR_GRADIENT=1]="LINEAR_GRADIENT",Ve[Ve.RADIAL_GRADIENT=2]="RADIAL_GRADIENT";var rt,nt,Bt,st;(nt=rt||(rt={}))[nt.CIRCLE=0]="CIRCLE",nt[nt.ELLIPSE=1]="ELLIPSE",(st=Bt||(Bt={}))[st.CLOSEST_SIDE=0]="CLOSEST_SIDE",st[st.FARTHEST_SIDE=1]="FARTHEST_SIDE",st[st.CLOSEST_CORNER=2]="CLOSEST_CORNER",st[st.FARTHEST_CORNER=3]="FARTHEST_CORNER";var ot=function(A){if(A.type===sA.URL_TOKEN){var e={url:A.value,type:xe.URL};return Se.getInstance().addImage(A.value),e}if(A.type!==sA.FUNCTION)throw new Error("Unsupported image type");var t=ct[A.name];if(void 0===t)throw new Error('Attempting to parse an unsupported image function "'+A.name+'"');return t(A.values)};var it,at,ct={"linear-gradient":function(A){var n=Qe(180),B=[];return WA(A).forEach(function(A,e){if(0===e){var t=A[0];if(t.type===sA.IDENT_TOKEN&&"to"===t.value)return void(n=Ae(A));if($A(t))return void(n=ce(t))}var r=de(A);B.push(r)}),{angle:n,stops:B,type:xe.LINEAR_GRADIENT}},"-moz-linear-gradient":Ie,"-ms-linear-gradient":Ie,"-o-linear-gradient":Ie,"-webkit-linear-gradient":Ie,"radial-gradient":function(A){var B=rt.CIRCLE,s=Bt.FARTHEST_CORNER,o=[],i=[];return WA(A).forEach(function(A,e){var t=!0;if(0===e){var r=!1;t=A.reduce(function(A,e){if(r)if(zA(e))switch(e.value){case"center":return i.push(oe),A;case"top":case"left":return i.push(se),A;case"right":case"bottom":return i.push(ie),A}else(qA(e)||YA(e))&&i.push(e);else if(zA(e))switch(e.value){case"circle":return B=rt.CIRCLE,!1;case et:return B=rt.ELLIPSE,!1;case"at":return!(r=!0);case Ze:return s=Bt.CLOSEST_SIDE,!1;case"cover":case je:return s=Bt.FARTHEST_SIDE,!1;case tt:case $e:return s=Bt.CLOSEST_CORNER,!1;case At:return s=Bt.FARTHEST_CORNER,!1}else if(YA(e)||qA(e))return Array.isArray(s)||(s=[]),s.push(e),!1;return A},t)}if(t){var n=de(A);o.push(n)}}),{size:s,shape:B,stops:o,position:i,type:xe.RADIAL_GRADIENT}},"-moz-radial-gradient":Pe,"-ms-radial-gradient":Pe,"-o-radial-gradient":Pe,"-webkit-radial-gradient":Pe,"-webkit-gradient":function(A){var e=Qe(180),s=[],o=xe.LINEAR_GRADIENT,t=rt.CIRCLE,r=Bt.FARTHEST_CORNER;return WA(A).forEach(function(A,e){var t=A[0];if(0===e){if(zA(t)&&"linear"===t.value)return void(o=xe.LINEAR_GRADIENT);if(zA(t)&&"radial"===t.value)return void(o=xe.RADIAL_GRADIENT)}if(t.type===sA.FUNCTION)if("from"===t.name){var r=we(t.values[0]);s.push({stop:se,color:r})}else if("to"===t.name)r=we(t.values[0]),s.push({stop:ie,color:r});else if("color-stop"===t.name){var n=t.values.filter(kA);if(2===n.length){r=we(n[1]);var B=n[0];VA(B)&&s.push({stop:{type:sA.PERCENTAGE_TOKEN,number:100*B.number,flags:B.flags},color:r})}}}),o===xe.LINEAR_GRADIENT?{angle:(e+Qe(180))%Qe(360),stops:s,type:o}:{size:r,shape:t,stops:s,position:[],type:o}}},Qt={name:"background-image",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A.filter(function(A){return kA(A)&&function(A){return A.type!==sA.FUNCTION||ct[A.name]}(A)}).map(ot)}},wt={name:"background-origin",initialValue:"border-box",prefix:!1,type:Ce.LIST,parse:function(A){return A.map(function(A){if(zA(A))switch(A.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},ut={name:"background-position",initialValue:"0% 0%",type:Ce.LIST,prefix:!1,parse:function(A){return WA(A).map(function(A){return A.filter(qA)}).map(ZA)}};(at=it||(it={}))[at.REPEAT=0]="REPEAT",at[at.NO_REPEAT=1]="NO_REPEAT",at[at.REPEAT_X=2]="REPEAT_X";var Ut,lt,Ct={name:"background-repeat",initialValue:"repeat",prefix:!(at[at.REPEAT_Y=3]="REPEAT_Y"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(zA).map(function(A){return A.value}).join(" ")}).map(gt)}},gt=function(A){switch(A){case"no-repeat":return it.NO_REPEAT;case"repeat-x":case"repeat no-repeat":return it.REPEAT_X;case"repeat-y":case"no-repeat repeat":return it.REPEAT_Y;case"repeat":default:return it.REPEAT}};(lt=Ut||(Ut={})).AUTO="auto",lt.CONTAIN="contain";function Et(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"}}function Ft(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:Ce.LIST,parse:function(A){return ZA(A.filter(qA))}}}var ht,Ht,dt={name:"background-size",initialValue:"0",prefix:!(lt.COVER="cover"),type:Ce.LIST,parse:function(A){return WA(A).map(function(A){return A.filter(ft)})}},ft=function(A){return zA(A)||qA(A)},pt=Et("top"),Nt=Et("right"),Kt=Et("bottom"),It=Et("left"),Tt=Ft("top-left"),mt=Ft("top-right"),Rt=Ft("bottom-right"),Lt=Ft("bottom-left");(Ht=ht||(ht={}))[Ht.NONE=0]="NONE",Ht[Ht.SOLID=1]="SOLID";function vt(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"none":return ht.NONE}return ht.SOLID}}}function Ot(A){return{name:"border-"+A+"-width",initialValue:"0",type:Ce.VALUE,prefix:!1,parse:function(A){return xA(A)?A.number:0}}}var Dt,bt,St=vt("top"),Mt=vt("right"),yt=vt("bottom"),_t=vt("left"),Pt=Ot("top"),xt=Ot("right"),Vt=Ot("bottom"),zt=Ot("left"),Xt={name:"color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Jt={name:"display",initialValue:"inline-block",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).reduce(function(A,e){return A|Gt(e.value)},0)}},Gt=function(A){switch(A){case"block":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0};(bt=Dt||(Dt={}))[bt.NONE=0]="NONE",bt[bt.LEFT=1]="LEFT",bt[bt.RIGHT=2]="RIGHT",bt[bt.INLINE_START=3]="INLINE_START";var kt,Wt,Yt,qt,Zt={name:"float",initialValue:"none",prefix:!(bt[bt.INLINE_END=4]="INLINE_END"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"left":return Dt.LEFT;case"right":return Dt.RIGHT;case"inline-start":return Dt.INLINE_START;case"inline-end":return Dt.INLINE_END}return Dt.NONE}},jt={name:"letter-spacing",initialValue:"0",prefix:!1,type:Ce.VALUE,parse:function(A){return A.type===sA.IDENT_TOKEN&&"normal"===A.value?0:A.type===sA.NUMBER_TOKEN?A.number:A.type===sA.DIMENSION_TOKEN?A.number:0}},$t={name:"line-break",initialValue:(Wt=kt||(kt={})).NORMAL="normal",prefix:!(Wt.STRICT="strict"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"strict":return kt.STRICT;case"normal":default:return kt.NORMAL}}},Ar={name:"line-height",initialValue:"normal",prefix:!1,type:Ce.TOKEN_VALUE},er={name:"list-style-image",initialValue:"none",type:Ce.VALUE,prefix:!1,parse:function(A){return A.type===sA.IDENT_TOKEN&&"none"===A.value?null:ot(A)}};(qt=Yt||(Yt={}))[qt.INSIDE=0]="INSIDE";var tr,rr,nr={name:"list-style-position",initialValue:"outside",prefix:!(qt[qt.OUTSIDE=1]="OUTSIDE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"inside":return Yt.INSIDE;case"outside":default:return Yt.OUTSIDE}}};(rr=tr||(tr={}))[rr.NONE=-1]="NONE",rr[rr.DISC=0]="DISC",rr[rr.CIRCLE=1]="CIRCLE",rr[rr.SQUARE=2]="SQUARE",rr[rr.DECIMAL=3]="DECIMAL",rr[rr.CJK_DECIMAL=4]="CJK_DECIMAL",rr[rr.DECIMAL_LEADING_ZERO=5]="DECIMAL_LEADING_ZERO",rr[rr.LOWER_ROMAN=6]="LOWER_ROMAN",rr[rr.UPPER_ROMAN=7]="UPPER_ROMAN",rr[rr.LOWER_GREEK=8]="LOWER_GREEK",rr[rr.LOWER_ALPHA=9]="LOWER_ALPHA",rr[rr.UPPER_ALPHA=10]="UPPER_ALPHA",rr[rr.ARABIC_INDIC=11]="ARABIC_INDIC",rr[rr.ARMENIAN=12]="ARMENIAN",rr[rr.BENGALI=13]="BENGALI",rr[rr.CAMBODIAN=14]="CAMBODIAN",rr[rr.CJK_EARTHLY_BRANCH=15]="CJK_EARTHLY_BRANCH",rr[rr.CJK_HEAVENLY_STEM=16]="CJK_HEAVENLY_STEM",rr[rr.CJK_IDEOGRAPHIC=17]="CJK_IDEOGRAPHIC",rr[rr.DEVANAGARI=18]="DEVANAGARI",rr[rr.ETHIOPIC_NUMERIC=19]="ETHIOPIC_NUMERIC",rr[rr.GEORGIAN=20]="GEORGIAN",rr[rr.GUJARATI=21]="GUJARATI",rr[rr.GURMUKHI=22]="GURMUKHI",rr[rr.HEBREW=22]="HEBREW",rr[rr.HIRAGANA=23]="HIRAGANA",rr[rr.HIRAGANA_IROHA=24]="HIRAGANA_IROHA",rr[rr.JAPANESE_FORMAL=25]="JAPANESE_FORMAL",rr[rr.JAPANESE_INFORMAL=26]="JAPANESE_INFORMAL",rr[rr.KANNADA=27]="KANNADA",rr[rr.KATAKANA=28]="KATAKANA",rr[rr.KATAKANA_IROHA=29]="KATAKANA_IROHA",rr[rr.KHMER=30]="KHMER",rr[rr.KOREAN_HANGUL_FORMAL=31]="KOREAN_HANGUL_FORMAL",rr[rr.KOREAN_HANJA_FORMAL=32]="KOREAN_HANJA_FORMAL",rr[rr.KOREAN_HANJA_INFORMAL=33]="KOREAN_HANJA_INFORMAL",rr[rr.LAO=34]="LAO",rr[rr.LOWER_ARMENIAN=35]="LOWER_ARMENIAN",rr[rr.MALAYALAM=36]="MALAYALAM",rr[rr.MONGOLIAN=37]="MONGOLIAN",rr[rr.MYANMAR=38]="MYANMAR",rr[rr.ORIYA=39]="ORIYA",rr[rr.PERSIAN=40]="PERSIAN",rr[rr.SIMP_CHINESE_FORMAL=41]="SIMP_CHINESE_FORMAL",rr[rr.SIMP_CHINESE_INFORMAL=42]="SIMP_CHINESE_INFORMAL",rr[rr.TAMIL=43]="TAMIL",rr[rr.TELUGU=44]="TELUGU",rr[rr.THAI=45]="THAI",rr[rr.TIBETAN=46]="TIBETAN",rr[rr.TRAD_CHINESE_FORMAL=47]="TRAD_CHINESE_FORMAL",rr[rr.TRAD_CHINESE_INFORMAL=48]="TRAD_CHINESE_INFORMAL",rr[rr.UPPER_ARMENIAN=49]="UPPER_ARMENIAN",rr[rr.DISCLOSURE_OPEN=50]="DISCLOSURE_OPEN";function Br(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:Ce.TOKEN_VALUE}}var sr,or,ir={name:"list-style-type",initialValue:"none",prefix:!(rr[rr.DISCLOSURE_CLOSED=51]="DISCLOSURE_CLOSED"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"disc":return tr.DISC;case"circle":return tr.CIRCLE;case"square":return tr.SQUARE;case"decimal":return tr.DECIMAL;case"cjk-decimal":return tr.CJK_DECIMAL;case"decimal-leading-zero":return tr.DECIMAL_LEADING_ZERO;case"lower-roman":return tr.LOWER_ROMAN;case"upper-roman":return tr.UPPER_ROMAN;case"lower-greek":return tr.LOWER_GREEK;case"lower-alpha":return tr.LOWER_ALPHA;case"upper-alpha":return tr.UPPER_ALPHA;case"arabic-indic":return tr.ARABIC_INDIC;case"armenian":return tr.ARMENIAN;case"bengali":return tr.BENGALI;case"cambodian":return tr.CAMBODIAN;case"cjk-earthly-branch":return tr.CJK_EARTHLY_BRANCH;case"cjk-heavenly-stem":return tr.CJK_HEAVENLY_STEM;case"cjk-ideographic":return tr.CJK_IDEOGRAPHIC;case"devanagari":return tr.DEVANAGARI;case"ethiopic-numeric":return tr.ETHIOPIC_NUMERIC;case"georgian":return tr.GEORGIAN;case"gujarati":return tr.GUJARATI;case"gurmukhi":return tr.GURMUKHI;case"hebrew":return tr.HEBREW;case"hiragana":return tr.HIRAGANA;case"hiragana-iroha":return tr.HIRAGANA_IROHA;case"japanese-formal":return tr.JAPANESE_FORMAL;case"japanese-informal":return tr.JAPANESE_INFORMAL;case"kannada":return tr.KANNADA;case"katakana":return tr.KATAKANA;case"katakana-iroha":return tr.KATAKANA_IROHA;case"khmer":return tr.KHMER;case"korean-hangul-formal":return tr.KOREAN_HANGUL_FORMAL;case"korean-hanja-formal":return tr.KOREAN_HANJA_FORMAL;case"korean-hanja-informal":return tr.KOREAN_HANJA_INFORMAL;case"lao":return tr.LAO;case"lower-armenian":return tr.LOWER_ARMENIAN;case"malayalam":return tr.MALAYALAM;case"mongolian":return tr.MONGOLIAN;case"myanmar":return tr.MYANMAR;case"oriya":return tr.ORIYA;case"persian":return tr.PERSIAN;case"simp-chinese-formal":return tr.SIMP_CHINESE_FORMAL;case"simp-chinese-informal":return tr.SIMP_CHINESE_INFORMAL;case"tamil":return tr.TAMIL;case"telugu":return tr.TELUGU;case"thai":return tr.THAI;case"tibetan":return tr.TIBETAN;case"trad-chinese-formal":return tr.TRAD_CHINESE_FORMAL;case"trad-chinese-informal":return tr.TRAD_CHINESE_INFORMAL;case"upper-armenian":return tr.UPPER_ARMENIAN;case"disclosure-open":return tr.DISCLOSURE_OPEN;case"disclosure-closed":return tr.DISCLOSURE_CLOSED;case"none":default:return tr.NONE}}},ar=Br("top"),cr=Br("right"),Qr=Br("bottom"),wr=Br("left");(or=sr||(sr={}))[or.VISIBLE=0]="VISIBLE",or[or.HIDDEN=1]="HIDDEN",or[or.SCROLL=2]="SCROLL";function ur(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length-percentage"}}var Ur,lr,Cr,gr,Er={name:"overflow",initialValue:"visible",prefix:!(or[or.AUTO=3]="AUTO"),type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"hidden":return sr.HIDDEN;case"scroll":return sr.SCROLL;case"auto":return sr.AUTO;case"visible":default:return sr.VISIBLE}})}},Fr={name:"overflow-wrap",initialValue:(lr=Ur||(Ur={})).NORMAL="normal",prefix:!(lr.BREAK_WORD="break-word"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-word":return Ur.BREAK_WORD;case"normal":default:return Ur.NORMAL}}},hr=ur("top"),Hr=ur("right"),dr=ur("bottom"),fr=ur("left");(gr=Cr||(Cr={}))[gr.LEFT=0]="LEFT",gr[gr.CENTER=1]="CENTER";var pr,Nr,Kr={name:"text-align",initialValue:"left",prefix:!(gr[gr.RIGHT=2]="RIGHT"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"right":return Cr.RIGHT;case"center":case"justify":return Cr.CENTER;case"left":default:return Cr.LEFT}}};(Nr=pr||(pr={}))[Nr.STATIC=0]="STATIC",Nr[Nr.RELATIVE=1]="RELATIVE",Nr[Nr.ABSOLUTE=2]="ABSOLUTE",Nr[Nr.FIXED=3]="FIXED";var Ir,Tr,mr={name:"position",initialValue:"static",prefix:!(Nr[Nr.STICKY=4]="STICKY"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"relative":return pr.RELATIVE;case"absolute":return pr.ABSOLUTE;case"fixed":return pr.FIXED;case"sticky":return pr.STICKY}return pr.STATIC}},Rr={name:"text-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:He.TRANSPARENT,offsetX:se,offsetY:se,blur:se},t=0,r=0;r<A.length;r++){var n=A[r];YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:e.blur=n,t++):e.color=we(n)}return e})}};(Tr=Ir||(Ir={}))[Tr.NONE=0]="NONE",Tr[Tr.LOWERCASE=1]="LOWERCASE",Tr[Tr.UPPERCASE=2]="UPPERCASE";var Lr,vr,Or={name:"text-transform",initialValue:"none",prefix:!(Tr[Tr.CAPITALIZE=3]="CAPITALIZE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"uppercase":return Ir.UPPERCASE;case"lowercase":return Ir.LOWERCASE;case"capitalize":return Ir.CAPITALIZE}return Ir.NONE}},Dr={name:"transform",initialValue:"none",prefix:!0,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN&&"none"===A.value)return null;if(A.type!==sA.FUNCTION)return null;var e=br[A.name];if(void 0===e)throw new Error('Attempting to parse an unsupported transform function "'+A.name+'"');return e(A.values)}},br={matrix:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number});return 6===e.length?e:null},matrix3d:function(A){var e=A.filter(function(A){return A.type===sA.NUMBER_TOKEN}).map(function(A){return A.number}),t=e[0],r=e[1],n=(e[2],e[3],e[4]),B=e[5],s=(e[6],e[7],e[8],e[9],e[10],e[11],e[12]),o=e[13];e[14],e[15];return 16===e.length?[t,r,n,B,s,o]:null}},Sr={type:sA.PERCENTAGE_TOKEN,number:50,flags:4},Mr=[Sr,Sr],yr={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:Ce.LIST,parse:function(A){var e=A.filter(qA);return 2!==e.length?Mr:[e[0],e[1]]}};(vr=Lr||(Lr={}))[vr.VISIBLE=0]="VISIBLE",vr[vr.HIDDEN=1]="HIDDEN";var _r,Pr,xr={name:"visible",initialValue:"none",prefix:!(vr[vr.COLLAPSE=2]="COLLAPSE"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"hidden":return Lr.HIDDEN;case"collapse":return Lr.COLLAPSE;case"visible":default:return Lr.VISIBLE}}};(Pr=_r||(_r={})).NORMAL="normal",Pr.BREAK_ALL="break-all";var Vr,zr,Xr={name:"word-break",initialValue:"normal",prefix:!(Pr.KEEP_ALL="keep-all"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"break-all":return _r.BREAK_ALL;case"keep-all":return _r.KEEP_ALL;case"normal":default:return _r.NORMAL}}},Jr={name:"z-index",initialValue:"auto",prefix:!1,type:Ce.VALUE,parse:function(A){if(A.type===sA.IDENT_TOKEN)return{auto:!0,order:0};if(VA(A))return{auto:!1,order:A.number};throw new Error("Invalid z-index number parsed")}},Gr={name:"opacity",initialValue:"1",type:Ce.VALUE,prefix:!1,parse:function(A){return VA(A)?A.number:1}},kr={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:Ce.TYPE_VALUE,format:"color"},Wr={name:"text-decoration-line",initialValue:"none",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(zA).map(function(A){switch(A.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(A){return 0!==A})}},Yr={name:"font-family",initialValue:"",prefix:!1,type:Ce.LIST,parse:function(A){return A.filter(qr).map(function(A){return A.value})}},qr=function(A){return A.type===sA.STRING_TOKEN||A.type===sA.IDENT_TOKEN},Zr={name:"font-size",initialValue:"0",prefix:!1,type:Ce.TYPE_VALUE,format:"length"},jr={name:"font-weight",initialValue:"normal",type:Ce.VALUE,prefix:!1,parse:function(A){if(VA(A))return A.number;if(zA(A))switch(A.value){case"bold":return 700;case"normal":default:return 400}return 400}},$r={name:"font-variant",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return A.filter(zA).map(function(A){return A.value})}};(zr=Vr||(Vr={})).NORMAL="normal",zr.ITALIC="italic";function An(A,e){return 0!=(A&e)}function en(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""}var tn={name:"font-style",initialValue:"normal",prefix:!(zr.OBLIQUE="oblique"),type:Ce.IDENT_VALUE,parse:function(A){switch(A){case"oblique":return Vr.OBLIQUE;case"italic":return Vr.ITALIC;case"normal":default:return Vr.NORMAL}}},rn={name:"content",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){if(0===A.length)return[];var e=A[0];return e.type===sA.IDENT_TOKEN&&"none"===e.value?[]:A}},nn={name:"counter-increment",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;for(var t=[],r=A.filter(GA),n=0;n<r.length;n++){var B=r[n],s=r[n+1];if(B.type===sA.IDENT_TOKEN){var o=s&&VA(s)?s.number:1;t.push({counter:B.value,increment:o})}}return t}},Bn={name:"counter-reset",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return[];for(var e=[],t=A.filter(GA),r=0;r<t.length;r++){var n=t[r],B=t[r+1];if(zA(n)&&"none"!==n.value){var s=B&&VA(B)?B.number:0;e.push({counter:n.value,reset:s})}}return e}},sn={name:"quotes",initialValue:"none",prefix:!0,type:Ce.LIST,parse:function(A){if(0===A.length)return null;var e=A[0];if(e.type===sA.IDENT_TOKEN&&"none"===e.value)return null;var t=[],r=A.filter(XA);if(r.length%2!=0)return null;for(var n=0;n<r.length;n+=2){var B=r[n].value,s=r[n+1].value;t.push({open:B,close:s})}return t}},on={name:"box-shadow",initialValue:"none",type:Ce.LIST,prefix:!1,parse:function(A){return 1===A.length&&JA(A[0],"none")?[]:WA(A).map(function(A){for(var e={color:255,offsetX:se,offsetY:se,blur:se,spread:se,inset:!1},t=0,r=0;r<A.length;r++){var n=A[r];JA(n,"inset")?e.inset=!0:YA(n)?(0===t?e.offsetX=n:1===t?e.offsetY=n:2===t?e.blur=n:e.spread=n,t++):e.color=we(n)}return e})}},an=(cn.prototype.isVisible=function(){return 0<this.display&&0<this.opacity&&this.visibility===Lr.VISIBLE},cn.prototype.isTransparent=function(){return ee(this.backgroundColor)},cn.prototype.isTransformed=function(){return null!==this.transform},cn.prototype.isPositioned=function(){return this.position!==pr.STATIC},cn.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},cn.prototype.isFloating=function(){return this.float!==Dt.NONE},cn.prototype.isInlineLevel=function(){return An(this.display,4)||An(this.display,33554432)||An(this.display,268435456)||An(this.display,536870912)||An(this.display,67108864)||An(this.display,134217728)},cn);function cn(A){this.backgroundClip=Un(me,A.backgroundClip),this.backgroundColor=Un(Re,A.backgroundColor),this.backgroundImage=Un(Qt,A.backgroundImage),this.backgroundOrigin=Un(wt,A.backgroundOrigin),this.backgroundPosition=Un(ut,A.backgroundPosition),this.backgroundRepeat=Un(Ct,A.backgroundRepeat),this.backgroundSize=Un(dt,A.backgroundSize),this.borderTopColor=Un(pt,A.borderTopColor),this.borderRightColor=Un(Nt,A.borderRightColor),this.borderBottomColor=Un(Kt,A.borderBottomColor),this.borderLeftColor=Un(It,A.borderLeftColor),this.borderTopLeftRadius=Un(Tt,A.borderTopLeftRadius),this.borderTopRightRadius=Un(mt,A.borderTopRightRadius),this.borderBottomRightRadius=Un(Rt,A.borderBottomRightRadius),this.borderBottomLeftRadius=Un(Lt,A.borderBottomLeftRadius),this.borderTopStyle=Un(St,A.borderTopStyle),this.borderRightStyle=Un(Mt,A.borderRightStyle),this.borderBottomStyle=Un(yt,A.borderBottomStyle),this.borderLeftStyle=Un(_t,A.borderLeftStyle),this.borderTopWidth=Un(Pt,A.borderTopWidth),this.borderRightWidth=Un(xt,A.borderRightWidth),this.borderBottomWidth=Un(Vt,A.borderBottomWidth),this.borderLeftWidth=Un(zt,A.borderLeftWidth),this.boxShadow=Un(on,A.boxShadow),this.color=Un(Xt,A.color),this.display=Un(Jt,A.display),this.float=Un(Zt,A.cssFloat),this.fontFamily=Un(Yr,A.fontFamily),this.fontSize=Un(Zr,A.fontSize),this.fontStyle=Un(tn,A.fontStyle),this.fontVariant=Un($r,A.fontVariant),this.fontWeight=Un(jr,A.fontWeight),this.letterSpacing=Un(jt,A.letterSpacing),this.lineBreak=Un($t,A.lineBreak),this.lineHeight=Un(Ar,A.lineHeight),this.listStyleImage=Un(er,A.listStyleImage),this.listStylePosition=Un(nr,A.listStylePosition),this.listStyleType=Un(ir,A.listStyleType),this.marginTop=Un(ar,A.marginTop),this.marginRight=Un(cr,A.marginRight),this.marginBottom=Un(Qr,A.marginBottom),this.marginLeft=Un(wr,A.marginLeft),this.opacity=Un(Gr,A.opacity);var e=Un(Er,A.overflow);this.overflowX=e[0],this.overflowY=e[1<e.length?1:0],this.overflowWrap=Un(Fr,A.overflowWrap),this.paddingTop=Un(hr,A.paddingTop),this.paddingRight=Un(Hr,A.paddingRight),this.paddingBottom=Un(dr,A.paddingBottom),this.paddingLeft=Un(fr,A.paddingLeft),this.position=Un(mr,A.position),this.textAlign=Un(Kr,A.textAlign),this.textDecorationColor=Un(kr,A.textDecorationColor||A.color),this.textDecorationLine=Un(Wr,A.textDecorationLine),this.textShadow=Un(Rr,A.textShadow),this.textTransform=Un(Or,A.textTransform),this.transform=Un(Dr,A.transform),this.transformOrigin=Un(yr,A.transformOrigin),this.visibility=Un(xr,A.visibility),this.wordBreak=Un(Xr,A.wordBreak),this.zIndex=Un(Jr,A.zIndex)}var Qn,wn=function(A){this.content=Un(rn,A.content),this.quotes=Un(sn,A.quotes)},un=function(A){this.counterIncrement=Un(nn,A.counterIncrement),this.counterReset=Un(Bn,A.counterReset)},Un=function(A,e){var t=new MA,r=null!=e?e.toString():A.initialValue;t.write(r);var n=new _A(t.read());switch(A.type){case Ce.IDENT_VALUE:var B=n.parseComponentValue();return A.parse(zA(B)?B.value:A.initialValue);case Ce.VALUE:return A.parse(n.parseComponentValue());case Ce.LIST:return A.parse(n.parseComponentValues());case Ce.TOKEN_VALUE:return n.parseComponentValue();case Ce.TYPE_VALUE:switch(A.format){case"angle":return ce(n.parseComponentValue());case"color":return we(n.parseComponentValue());case"image":return ot(n.parseComponentValue());case"length":var s=n.parseComponentValue();return YA(s)?s:se;case"length-percentage":var o=n.parseComponentValue();return qA(o)?o:se}}throw new Error("Attempting to parse unsupported css format type "+A.format)},ln=function(A){this.styles=new an(window.getComputedStyle(A,null)),this.textNodes=[],this.elements=[],null!==this.styles.transform&&uB(A)&&(A.style.transform="none"),this.bounds=T(A),this.flags=0},Cn=function(A,e){this.text=A,this.bounds=e},gn=function(A){var e=A.ownerDocument;if(e){var t=e.createElement("html2canvaswrapper");t.appendChild(A.cloneNode(!0));var r=A.parentNode;if(r){r.replaceChild(t,A);var n=T(t);return t.firstChild&&r.replaceChild(t.firstChild,t),n}}return new I(0,0,0,0)},En=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),I.fromClientRect(n.getBoundingClientRect())},Fn=function(A,e){return 0!==e.letterSpacing?c(A).map(function(A){return l(A)}):hn(A,e)},hn=function(A,e){for(var t,r=function(A,e){var t=c(A),r=u(t,e),n=r[0],B=r[1],s=r[2],o=t.length,i=0,a=0;return{next:function(){if(o<=a)return{done:!0,value:null};for(var A=Y;a<o&&(A=w(t,B,n,++a,s))===Y;);if(A===Y&&a!==o)return{done:!0,value:null};var e=new nA(t,A,i,a);return i=a,{value:e,done:!1}}}}(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap===Ur.BREAK_WORD?"break-word":e.wordBreak}),n=[];!(t=r.next()).done;)t.value&&n.push(t.value.slice());return n},Hn=function(A,e){this.text=dn(A.data,e.textTransform),this.textBounds=function(A,t,r){var e=Fn(A,t),n=[],B=0;return e.forEach(function(A){if(t.textDecorationLine.length||0<A.trim().length)if(Oe.SUPPORT_RANGE_BOUNDS)n.push(new Cn(A,En(r,B,A.length)));else{var e=r.splitText(A.length);n.push(new Cn(A,gn(r))),r=e}else Oe.SUPPORT_RANGE_BOUNDS||(r=r.splitText(A.length));B+=A.length}),n}(this.text,e,A)},dn=function(A,e){switch(e){case Ir.LOWERCASE:return A.toLowerCase();case Ir.CAPITALIZE:return A.replace(fn,pn);case Ir.UPPERCASE:return A.toUpperCase();default:return A}},fn=/(^|\s|:|-|\(|\))([a-z])/g,pn=function(A,e,t){return 0<A.length?e+t.toUpperCase():A},Nn=(A(Kn,Qn=ln),Kn);function Kn(A){var e=Qn.call(this,A)||this;return e.src=A.currentSrc||A.src,e.intrinsicWidth=A.naturalWidth,e.intrinsicHeight=A.naturalHeight,Se.getInstance().addImage(e.src),e}var In,Tn=(A(mn,In=ln),mn);function mn(A){var e=In.call(this,A)||this;return e.canvas=A,e.intrinsicWidth=A.width,e.intrinsicHeight=A.height,e}var Rn,Ln=(A(vn,Rn=ln),vn);function vn(A){var e=Rn.call(this,A)||this,t=new XMLSerializer;return e.svg="data:image/svg+xml,"+encodeURIComponent(t.serializeToString(A)),e.intrinsicWidth=A.width.baseVal.value,e.intrinsicHeight=A.height.baseVal.value,Se.getInstance().addImage(e.svg),e}var On,Dn=(A(bn,On=ln),bn);function bn(A){var e=On.call(this,A)||this;return e.value=A.value,e}var Sn,Mn=(A(yn,Sn=ln),yn);function yn(A){var e=Sn.call(this,A)||this;return e.start=A.start,e.reversed="boolean"==typeof A.reversed&&!0===A.reversed,e}var _n,Pn=[{type:sA.DIMENSION_TOKEN,flags:0,unit:"px",number:3}],xn=[{type:sA.PERCENTAGE_TOKEN,flags:0,number:50}],Vn="checkbox",zn="radio",Xn="password",Jn=707406591,Gn=(A(kn,_n=ln),kn);function kn(A){var e=_n.call(this,A)||this;switch(e.type=A.type.toLowerCase(),e.checked=A.checked,e.value=function(A){var e=A.type===Xn?new Array(A.value.length+1).join("•"):A.value;return 0===e.length?A.placeholder||"":e}(A),e.type!==Vn&&e.type!==zn||(e.styles.backgroundColor=3739148031,e.styles.borderTopColor=e.styles.borderRightColor=e.styles.borderBottomColor=e.styles.borderLeftColor=2779096575,e.styles.borderTopWidth=e.styles.borderRightWidth=e.styles.borderBottomWidth=e.styles.borderLeftWidth=1,e.styles.borderTopStyle=e.styles.borderRightStyle=e.styles.borderBottomStyle=e.styles.borderLeftStyle=ht.SOLID,e.styles.backgroundClip=[Ee.BORDER_BOX],e.styles.backgroundOrigin=[0],e.bounds=function(A){return A.width>A.height?new I(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new I(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A}(e.bounds)),e.type){case Vn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=Pn;break;case zn:e.styles.borderTopRightRadius=e.styles.borderTopLeftRadius=e.styles.borderBottomRightRadius=e.styles.borderBottomLeftRadius=xn}return e}var Wn,Yn=(A(qn,Wn=ln),qn);function qn(A){var e=Wn.call(this,A)||this,t=A.options[A.selectedIndex||0];return e.value=t&&t.text||"",e}var Zn,jn=(A($n,Zn=ln),$n);function $n(A){var e=Zn.call(this,A)||this;return e.value=A.value,e}function AB(A){return we(_A.create(A).parseComponentValue())}var eB,tB=(A(rB,eB=ln),rB);function rB(A){var e=eB.call(this,A)||this;e.src=A.src,e.width=parseInt(A.width,10)||0,e.height=parseInt(A.height,10)||0,e.backgroundColor=e.styles.backgroundColor;try{if(A.contentWindow&&A.contentWindow.document&&A.contentWindow.document.documentElement){e.tree=iB(A.contentWindow.document.documentElement);var t=A.contentWindow.document.documentElement?AB(getComputedStyle(A.contentWindow.document.documentElement).backgroundColor):He.TRANSPARENT,r=A.contentWindow.document.body?AB(getComputedStyle(A.contentWindow.document.body).backgroundColor):He.TRANSPARENT;e.backgroundColor=ee(t)?ee(r)?e.styles.backgroundColor:r:t}}catch(A){}return e}function nB(A){return"STYLE"===A.tagName}var BB=["OL","UL","MENU"],sB=function(A,e,t){for(var r=A.firstChild,n=void 0;r;r=n)if(n=r.nextSibling,QB(r)&&0<r.data.trim().length)e.textNodes.push(new Hn(r,e.styles));else if(wB(r)){var B=oB(r);B.styles.isVisible()&&(aB(r,B,t)?B.flags|=4:cB(B.styles)&&(B.flags|=2),-1!==BB.indexOf(r.tagName)&&(B.flags|=8),e.elements.push(B),dB(r)||gB(r)||fB(r)||sB(r,B,t))}},oB=function(A){return hB(A)?new Nn(A):FB(A)?new Tn(A):gB(A)?new Ln(A):UB(A)?new Dn(A):lB(A)?new Mn(A):CB(A)?new Gn(A):fB(A)?new Yn(A):dB(A)?new jn(A):HB(A)?new tB(A):new ln(A)},iB=function(A){var e=oB(A);return e.flags|=4,sB(A,e,e),e},aB=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||EB(A)&&t.styles.isTransparent()},cB=function(A){return A.isPositioned()||A.isFloating()},QB=function(A){return A.nodeType===Node.TEXT_NODE},wB=function(A){return A.nodeType===Node.ELEMENT_NODE},uB=function(A){return void 0!==A.style},UB=function(A){return"LI"===A.tagName},lB=function(A){return"OL"===A.tagName},CB=function(A){return"INPUT"===A.tagName},gB=function(A){return"svg"===A.tagName},EB=function(A){return"BODY"===A.tagName},FB=function(A){return"CANVAS"===A.tagName},hB=function(A){return"IMG"===A.tagName},HB=function(A){return"IFRAME"===A.tagName},dB=function(A){return"TEXTAREA"===A.tagName},fB=function(A){return"SELECT"===A.tagName},pB=(NB.prototype.getCounterValue=function(A){var e=this.counters[A];return e&&e.length?e[e.length-1]:1},NB.prototype.getCounterValues=function(A){var e=this.counters[A];return e||[]},NB.prototype.pop=function(A){var e=this;A.forEach(function(A){return e.counters[A].pop()})},NB.prototype.parse=function(A){var t=this,e=A.counterIncrement,r=A.counterReset,n=!0;null!==e&&e.forEach(function(A){var e=t.counters[A.counter];e&&0!==A.increment&&(n=!1,e[Math.max(0,e.length-1)]+=A.increment)});var B=[];return n&&r.forEach(function(A){var e=t.counters[A.counter];B.push(A.counter),e||(e=t.counters[A.counter]=[]),e.push(A.reset)}),B},NB);function NB(){this.counters={}}function KB(r,A,e,n,t,B){return r<A||e<r?yB(r,t,0<B.length):n.integers.reduce(function(A,e,t){for(;e<=r;)r-=e,A+=n.values[t];return A},"")+B}function IB(A,e,t,r){for(var n="";t||A--,n=r(A)+n,e<=(A/=e)*e;);return n}function TB(A,e,t,r,n){var B=t-e+1;return(A<0?"-":"")+(IB(Math.abs(A),B,r,function(A){return l(Math.floor(A%B)+e)})+n)}function mB(A,e,t){void 0===t&&(t=". ");var r=e.length;return IB(Math.abs(A),r,!1,function(A){return e[Math.floor(A%r)]})+t}function RB(A,e,t,r,n,B){if(A<-9999||9999<A)return yB(A,tr.CJK_DECIMAL,0<n.length);var s=Math.abs(A),o=n;if(0===s)return e[0]+o;for(var i=0;0<s&&i<=4;i++){var a=s%10;0==a&&An(B,1)&&""!==o?o=e[a]+o:1<a||1==a&&0===i||1==a&&1===i&&An(B,2)||1==a&&1===i&&An(B,4)&&100<A||1==a&&1<i&&An(B,8)?o=e[a]+(0<i?t[i-1]:"")+o:1==a&&0<i&&(o=t[i-1]+o),s=Math.floor(s/10)}return(A<0?r:"")+o}var LB,vB,OB={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},DB={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},bB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},SB={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},MB="마이너스",yB=function(A,e,t){var r=t?". ":"",n=t?"、":"",B=t?", ":"",s=t?" ":"";switch(e){case tr.DISC:return"•"+s;case tr.CIRCLE:return"◦"+s;case tr.SQUARE:return"◾"+s;case tr.DECIMAL_LEADING_ZERO:var o=TB(A,48,57,!0,r);return o.length<4?"0"+o:o;case tr.CJK_DECIMAL:return mB(A,"〇一二三四五六七八九",n);case tr.LOWER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r).toLowerCase();case tr.UPPER_ROMAN:return KB(A,1,3999,OB,tr.DECIMAL,r);case tr.LOWER_GREEK:return TB(A,945,969,!1,r);case tr.LOWER_ALPHA:return TB(A,97,122,!1,r);case tr.UPPER_ALPHA:return TB(A,65,90,!1,r);case tr.ARABIC_INDIC:return TB(A,1632,1641,!0,r);case tr.ARMENIAN:case tr.UPPER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r);case tr.LOWER_ARMENIAN:return KB(A,1,9999,DB,tr.DECIMAL,r).toLowerCase();case tr.BENGALI:return TB(A,2534,2543,!0,r);case tr.CAMBODIAN:case tr.KHMER:return TB(A,6112,6121,!0,r);case tr.CJK_EARTHLY_BRANCH:return mB(A,"子丑寅卯辰巳午未申酉戌亥",n);case tr.CJK_HEAVENLY_STEM:return mB(A,"甲乙丙丁戊己庚辛壬癸",n);case tr.CJK_IDEOGRAPHIC:case tr.TRAD_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","負",n,14);case tr.TRAD_CHINESE_FORMAL:return RB(A,"零壹貳參肆伍陸柒捌玖","拾佰仟萬","負",n,15);case tr.SIMP_CHINESE_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬","负",n,14);case tr.SIMP_CHINESE_FORMAL:return RB(A,"零壹贰叁肆伍陆柒捌玖","拾佰仟萬","负",n,15);case tr.JAPANESE_INFORMAL:return RB(A,"〇一二三四五六七八九","十百千万","マイナス",n,0);case tr.JAPANESE_FORMAL:return RB(A,"零壱弐参四伍六七八九","拾百千万","マイナス",n,7);case tr.KOREAN_HANGUL_FORMAL:return RB(A,"영일이삼사오육칠팔구","십백천만",MB,B,7);case tr.KOREAN_HANJA_INFORMAL:return RB(A,"零一二三四五六七八九","十百千萬",MB,B,0);case tr.KOREAN_HANJA_FORMAL:return RB(A,"零壹貳參四五六七八九","拾百千",MB,B,7);case tr.DEVANAGARI:return TB(A,2406,2415,!0,r);case tr.GEORGIAN:return KB(A,1,19999,SB,tr.DECIMAL,r);case tr.GUJARATI:return TB(A,2790,2799,!0,r);case tr.GURMUKHI:return TB(A,2662,2671,!0,r);case tr.HEBREW:return KB(A,1,10999,bB,tr.DECIMAL,r);case tr.HIRAGANA:return mB(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case tr.HIRAGANA_IROHA:return mB(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case tr.KANNADA:return TB(A,3302,3311,!0,r);case tr.KATAKANA:return mB(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case tr.KATAKANA_IROHA:return mB(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case tr.LAO:return TB(A,3792,3801,!0,r);case tr.MONGOLIAN:return TB(A,6160,6169,!0,r);case tr.MYANMAR:return TB(A,4160,4169,!0,r);case tr.ORIYA:return TB(A,2918,2927,!0,r);case tr.PERSIAN:return TB(A,1776,1785,!0,r);case tr.TAMIL:return TB(A,3046,3055,!0,r);case tr.TELUGU:return TB(A,3174,3183,!0,r);case tr.THAI:return TB(A,3664,3673,!0,r);case tr.TIBETAN:return TB(A,3872,3881,!0,r);case tr.DECIMAL:default:return TB(A,48,57,!0,r)}},_B="data-html2canvas-ignore",PB=(xB.prototype.toIFrame=function(A,t){var e=this,r=XB(A,t);if(!r.contentWindow)return Promise.reject("Unable to find iframe window");var n=A.defaultView.pageXOffset,B=A.defaultView.pageYOffset,s=r.contentWindow,o=s.document,i=JB(r).then(function(){return a(e,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.scrolledElements.forEach(YB),s&&(s.scrollTo(t.left,t.top),!/(iPad|iPhone|iPod)/g.test(navigator.userAgent)||s.scrollY===t.top&&s.scrollX===t.left||(o.documentElement.style.top=-t.top+"px",o.documentElement.style.left=-t.left+"px",o.documentElement.style.position="absolute")),e=this.options.onclone,void 0===this.clonedReferenceElement?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:o.fonts&&o.fonts.ready?[4,o.fonts.ready]:[3,2];case 1:A.sent(),A.label=2;case 2:return"function"==typeof e?[2,Promise.resolve().then(function(){return e(o)}).then(function(){return r})]:[2,r]}})})});return o.open(),o.write(kB(document.doctype)+"<html></html>"),WB(this.referenceElement.ownerDocument,n,B),o.replaceChild(o.adoptNode(this.documentElement),o.documentElement),o.close(),i},xB.prototype.createElementClone=function(A){return FB(A)?this.createCanvasClone(A):nB(A)?this.createStyleClone(A):A.cloneNode(!1)},xB.prototype.createStyleClone=function(A){try{var e=A.sheet;if(e&&e.cssRules){var t=[].slice.call(e.cssRules,0).reduce(function(A,e){return e&&"string"==typeof e.cssText?A+e.cssText:A},""),r=A.cloneNode(!1);return r.textContent=t,r}}catch(A){if(De.getInstance(this.options.id).error("Unable to access cssRules property",A),"SecurityError"!==A.name)throw A}return A.cloneNode(!1)},xB.prototype.createCanvasClone=function(A){if(this.options.inlineImages&&A.ownerDocument){var e=A.ownerDocument.createElement("img");try{return e.src=A.toDataURL(),e}catch(A){De.getInstance(this.options.id).info("Unable to clone canvas contents, canvas is tainted")}}var t=A.cloneNode(!1);try{t.width=A.width,t.height=A.height;var r=A.getContext("2d"),n=t.getContext("2d");return n&&(r?n.putImageData(r.getImageData(0,0,A.width,A.height),0,0):n.drawImage(A,0,0)),t}catch(A){}return t},xB.prototype.cloneNode=function(A){if(QB(A))return document.createTextNode(A.data);if(!A.ownerDocument)return A.cloneNode(!1);var e=A.ownerDocument.defaultView;if(uB(A)&&e){var t=this.createElementClone(A),r=e.getComputedStyle(A),n=e.getComputedStyle(A,":before"),B=e.getComputedStyle(A,":after");this.referenceElement===A&&(this.clonedReferenceElement=t),EB(t)&&$B(t);for(var s=this.counters.parse(new un(r)),o=this.resolvePseudoContent(A,t,n,LB.BEFORE),i=A.firstChild;i;i=i.nextSibling)wB(i)&&("SCRIPT"===i.tagName||i.hasAttribute(_B)||"function"==typeof this.options.ignoreElements&&this.options.ignoreElements(i))||this.options.copyStyles&&wB(i)&&nB(i)||t.appendChild(this.cloneNode(i));o&&t.insertBefore(o,t.firstChild);var a=this.resolvePseudoContent(A,t,B,LB.AFTER);return a&&t.appendChild(a),this.counters.pop(s),r&&this.options.copyStyles&&!HB(A)&&GB(r,t),0===A.scrollTop&&0===A.scrollLeft||this.scrolledElements.push([t,A.scrollLeft,A.scrollTop]),(dB(A)||fB(A))&&(dB(t)||fB(t))&&(t.value=A.value),t}return A.cloneNode(!1)},xB.prototype.resolvePseudoContent=function(U,A,e,t){var l=this;if(e){var r=e.content,C=A.ownerDocument;if(C&&r&&"none"!==r&&"-moz-alt-content"!==r&&"none"!==e.display){this.counters.parse(new un(e));var g=new wn(e),E=C.createElement("html2canvaspseudoelement");GB(e,E),g.content.forEach(function(A){if(A.type===sA.STRING_TOKEN)E.appendChild(C.createTextNode(A.value));else if(A.type===sA.URL_TOKEN){var e=C.createElement("img");e.src=A.value,e.style.opacity="1",E.appendChild(e)}else if(A.type===sA.FUNCTION){if("attr"===A.name){var t=A.values.filter(zA);t.length&&E.appendChild(C.createTextNode(U.getAttribute(t[0].value)||""))}else if("counter"===A.name){var r=A.values.filter(kA),n=r[0],B=r[1];if(n&&zA(n)){var s=l.counters.getCounterValue(n.value),o=B&&zA(B)?ir.parse(B.value):tr.DECIMAL;E.appendChild(C.createTextNode(yB(s,o,!1)))}}else if("counters"===A.name){var i=A.values.filter(kA),a=(n=i[0],i[1]);if(B=i[2],n&&zA(n)){var c=l.counters.getCounterValues(n.value),Q=B&&zA(B)?ir.parse(B.value):tr.DECIMAL,w=a&&a.type===sA.STRING_TOKEN?a.value:"",u=c.map(function(A){return yB(A,Q,!1)}).join(w);E.appendChild(C.createTextNode(u))}}}else if(A.type===sA.IDENT_TOKEN)switch(A.value){case"open-quote":E.appendChild(C.createTextNode(en(g.quotes,l.quoteDepth++,!0)));break;case"close-quote":E.appendChild(C.createTextNode(en(g.quotes,--l.quoteDepth,!1)));break;default:E.appendChild(C.createTextNode(A.value))}}),E.className=qB+" "+ZB;var n=t===LB.BEFORE?" "+qB:" "+ZB;return function(A){return"object"==typeof A.className}(A)?A.className.baseValue+=n:A.className+=n,E}}},xB.destroy=function(A){return!!A.parentNode&&(A.parentNode.removeChild(A),!0)},xB);function xB(A,e){if(this.options=e,this.scrolledElements=[],this.referenceElement=A,this.counters=new pB,this.quoteDepth=0,!A.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(A.ownerDocument.documentElement)}(vB=LB||(LB={}))[vB.BEFORE=0]="BEFORE",vB[vB.AFTER=1]="AFTER";var VB,zB,XB=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(_B,"true"),A.body.appendChild(t),t},JB=function(n){return new Promise(function(e,A){var t=n.contentWindow;if(!t)return A("No window assigned for iframe");var r=t.document;t.onload=n.onload=r.onreadystatechange=function(){t.onload=n.onload=r.onreadystatechange=null;var A=setInterval(function(){0<r.body.childNodes.length&&"complete"===r.readyState&&(clearInterval(A),e(n))},50)}})},GB=function(A,e){for(var t=A.length-1;0<=t;t--){var r=A.item(t);"content"!==r&&e.style.setProperty(r,A.getPropertyValue(r))}return e},kB=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},WB=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},YB=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},qB="___html2canvas___pseudoelement_before",ZB="___html2canvas___pseudoelement_after",jB='{\n    content: "" !important;\n    display: none !important;\n}',$B=function(A){As(A,"."+qB+":before"+jB+"\n         ."+ZB+":after"+jB)},As=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}};(zB=VB||(VB={}))[zB.VECTOR=0]="VECTOR",zB[zB.BEZIER_CURVE=1]="BEZIER_CURVE";function es(A,t){return A.length===t.length&&A.some(function(A,e){return A===t[e]})}var ts=(rs.prototype.add=function(A,e){return new rs(this.x+A,this.y+e)},rs);function rs(A,e){this.type=VB.VECTOR,this.x=A,this.y=e}function ns(A,e,t){return new ts(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)}var Bs=(ss.prototype.subdivide=function(A,e){var t=ns(this.start,this.startControl,A),r=ns(this.startControl,this.endControl,A),n=ns(this.endControl,this.end,A),B=ns(t,r,A),s=ns(r,n,A),o=ns(B,s,A);return e?new ss(this.start,t,B,o):new ss(o,s,n,this.end)},ss.prototype.add=function(A,e){return new ss(this.start.add(A,e),this.startControl.add(A,e),this.endControl.add(A,e),this.end.add(A,e))},ss.prototype.reverse=function(){return new ss(this.end,this.endControl,this.startControl,this.start)},ss);function ss(A,e,t,r){this.type=VB.BEZIER_CURVE,this.start=A,this.startControl=e,this.endControl=t,this.end=r}function os(A){return A.type===VB.BEZIER_CURVE}var is,as,cs=function(A){var e=A.styles,t=A.bounds,r=jA(e.borderTopLeftRadius,t.width,t.height),n=r[0],B=r[1],s=jA(e.borderTopRightRadius,t.width,t.height),o=s[0],i=s[1],a=jA(e.borderBottomRightRadius,t.width,t.height),c=a[0],Q=a[1],w=jA(e.borderBottomLeftRadius,t.width,t.height),u=w[0],U=w[1],l=[];l.push((n+o)/t.width),l.push((u+c)/t.width),l.push((B+U)/t.height),l.push((i+Q)/t.height);var C=Math.max.apply(Math,l);1<C&&(n/=C,B/=C,o/=C,i/=C,c/=C,Q/=C,u/=C,U/=C);var g=t.width-o,E=t.height-Q,F=t.width-c,h=t.height-U,H=e.borderTopWidth,d=e.borderRightWidth,f=e.borderBottomWidth,p=e.borderLeftWidth,N=ae(e.paddingTop,A.bounds.width),K=ae(e.paddingRight,A.bounds.width),I=ae(e.paddingBottom,A.bounds.width),T=ae(e.paddingLeft,A.bounds.width);this.topLeftBorderBox=0<n||0<B?us(t.left,t.top,n,B,is.TOP_LEFT):new ts(t.left,t.top),this.topRightBorderBox=0<o||0<i?us(t.left+g,t.top,o,i,is.TOP_RIGHT):new ts(t.left+t.width,t.top),this.bottomRightBorderBox=0<c||0<Q?us(t.left+F,t.top+E,c,Q,is.BOTTOM_RIGHT):new ts(t.left+t.width,t.top+t.height),this.bottomLeftBorderBox=0<u||0<U?us(t.left,t.top+h,u,U,is.BOTTOM_LEFT):new ts(t.left,t.top+t.height),this.topLeftPaddingBox=0<n||0<B?us(t.left+p,t.top+H,Math.max(0,n-p),Math.max(0,B-H),is.TOP_LEFT):new ts(t.left+p,t.top+H),this.topRightPaddingBox=0<o||0<i?us(t.left+Math.min(g,t.width+p),t.top+H,g>t.width+p?0:o-p,i-H,is.TOP_RIGHT):new ts(t.left+t.width-d,t.top+H),this.bottomRightPaddingBox=0<c||0<Q?us(t.left+Math.min(F,t.width-p),t.top+Math.min(E,t.height+H),Math.max(0,c-d),Q-f,is.BOTTOM_RIGHT):new ts(t.left+t.width-d,t.top+t.height-f),this.bottomLeftPaddingBox=0<u||0<U?us(t.left+p,t.top+h,Math.max(0,u-p),U-f,is.BOTTOM_LEFT):new ts(t.left+p,t.top+t.height-f),this.topLeftContentBox=0<n||0<B?us(t.left+p+T,t.top+H+N,Math.max(0,n-(p+T)),Math.max(0,B-(H+N)),is.TOP_LEFT):new ts(t.left+p+T,t.top+H+N),this.topRightContentBox=0<o||0<i?us(t.left+Math.min(g,t.width+p+T),t.top+H+N,g>t.width+p+T?0:o-p+T,i-(H+N),is.TOP_RIGHT):new ts(t.left+t.width-(d+K),t.top+H+N),this.bottomRightContentBox=0<c||0<Q?us(t.left+Math.min(F,t.width-(p+T)),t.top+Math.min(E,t.height+H+N),Math.max(0,c-(d+K)),Q-(f+I),is.BOTTOM_RIGHT):new ts(t.left+t.width-(d+K),t.top+t.height-(f+I)),this.bottomLeftContentBox=0<u||0<U?us(t.left+p+T,t.top+h,Math.max(0,u-(p+T)),U-(f+I),is.BOTTOM_LEFT):new ts(t.left+p+T,t.top+t.height-(f+I))};(as=is||(is={}))[as.TOP_LEFT=0]="TOP_LEFT",as[as.TOP_RIGHT=1]="TOP_RIGHT",as[as.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",as[as.BOTTOM_LEFT=3]="BOTTOM_LEFT";function Qs(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]}function ws(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]}var us=function(A,e,t,r,n){var B=(Math.sqrt(2)-1)/3*4,s=t*B,o=r*B,i=A+t,a=e+r;switch(n){case is.TOP_LEFT:return new Bs(new ts(A,a),new ts(A,a-o),new ts(i-s,e),new ts(i,e));case is.TOP_RIGHT:return new Bs(new ts(A,e),new ts(A+s,e),new ts(i,a-o),new ts(i,a));case is.BOTTOM_RIGHT:return new Bs(new ts(i,e),new ts(i,e+o),new ts(A+s,a),new ts(A,a));case is.BOTTOM_LEFT:default:return new Bs(new ts(i,a),new ts(i-s,a),new ts(A,e+o),new ts(A,e))}},Us=function(A,e,t){this.type=0,this.offsetX=A,this.offsetY=e,this.matrix=t,this.target=6},ls=function(A,e){this.type=1,this.target=e,this.path=A},Cs=function(A){this.element=A,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]},gs=(Es.prototype.getParentEffects=function(){var A=this.effects.slice(0);if(this.container.styles.overflowX!==sr.VISIBLE){var e=Qs(this.curves),t=ws(this.curves);es(e,t)||A.push(new ls(t,6))}return A},Es);function Es(A,e){if(this.container=A,this.effects=e.slice(0),this.curves=new cs(A),null!==A.styles.transform){var t=A.bounds.left+A.styles.transformOrigin[0].number,r=A.bounds.top+A.styles.transformOrigin[1].number,n=A.styles.transform;this.effects.push(new Us(t,r,n))}if(A.styles.overflowX!==sr.VISIBLE){var B=Qs(this.curves),s=ws(this.curves);es(B,s)?this.effects.push(new ls(B,6)):(this.effects.push(new ls(B,2)),this.effects.push(new ls(s,4)))}}function Fs(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))}function hs(A){var e=A.styles,t=A.bounds,r=ae(e.paddingLeft,t.width),n=ae(e.paddingRight,t.width),B=ae(e.paddingTop,t.width),s=ae(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,B+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+B+s))}function Hs(A,e,t){var r=function(A,e){return 0===A?e.bounds:2===A?hs(e):Fs(e)}(Ts(A.styles.backgroundOrigin,e),A),n=function(A,e){return A===Ee.BORDER_BOX?e.bounds:A===Ee.CONTENT_BOX?hs(e):Fs(e)}(Ts(A.styles.backgroundClip,e),A),B=Is(Ts(A.styles.backgroundSize,e),t,r),s=B[0],o=B[1],i=jA(Ts(A.styles.backgroundPosition,e),r.width-s,r.height-o);return[ms(Ts(A.styles.backgroundRepeat,e),i,B,r,n),Math.round(r.left+i[0]),Math.round(r.top+i[1]),s,o]}function ds(A){return zA(A)&&A.value===Ut.AUTO}function fs(A){return"number"==typeof A}var ps=function(c,Q,w,u){c.container.elements.forEach(function(A){var e=An(A.flags,4),t=An(A.flags,2),r=new gs(A,c.getParentEffects());An(A.styles.display,2048)&&u.push(r);var n=An(A.flags,8)?[]:u;if(e||t){var B=e||A.styles.isPositioned()?w:Q,s=new Cs(r);if(A.styles.isPositioned()||A.styles.opacity<1||A.styles.isTransformed()){var o=A.styles.zIndex.order;if(o<0){var i=0;B.negativeZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(i=e,!1):0<i}),B.negativeZIndex.splice(i,0,s)}else if(0<o){var a=0;B.positiveZIndex.some(function(A,e){return o>A.element.container.styles.zIndex.order?(a=e+1,!1):0<a}),B.positiveZIndex.splice(a,0,s)}else B.zeroOrAutoZIndexOrTransformedOrOpacity.push(s)}else A.styles.isFloating()?B.nonPositionedFloats.push(s):B.nonPositionedInlineLevel.push(s);ps(r,s,e?s:w,n)}else A.styles.isInlineLevel()?Q.inlineLevel.push(r):Q.nonInlineLevel.push(r),ps(r,Q,w,n);An(A.flags,8)&&Ns(A,n)})},Ns=function(A,e){for(var t=A instanceof Mn?A.start:1,r=A instanceof Mn&&A.reversed,n=0;n<e.length;n++){var B=e[n];B.container instanceof Dn&&"number"==typeof B.container.value&&0!==B.container.value&&(t=B.container.value),B.listValue=yB(t,B.container.styles.listStyleType,!0),t+=r?-1:1}},Ks=function(A,e,t,r){var n=[];return os(A)?n.push(A.subdivide(.5,!1)):n.push(A),os(t)?n.push(t.subdivide(.5,!0)):n.push(t),os(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),os(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},Is=function(A,e,t){var r=e[0],n=e[1],B=e[2],s=A[0],o=A[1];if(qA(s)&&o&&qA(o))return[ae(s,t.width),ae(o,t.height)];var i=fs(B);if(zA(s)&&(s.value===Ut.CONTAIN||s.value===Ut.COVER))return fs(B)?t.width/t.height<B!=(s.value===Ut.COVER)?[t.width,t.width/B]:[t.height*B,t.height]:[t.width,t.height];var a=fs(r),c=fs(n),Q=a||c;if(ds(s)&&(!o||ds(o)))return a&&c?[r,n]:i||Q?Q&&i?[a?r:n*B,c?n:r/B]:[a?r:t.width,c?n:t.height]:[t.width,t.height];if(i){var w=0,u=0;return qA(s)?w=ae(s,t.width):qA(o)&&(u=ae(o,t.height)),ds(s)?w=u*B:o&&!ds(o)||(u=w/B),[w,u]}var U=null,l=null;if(qA(s)?U=ae(s,t.width):o&&qA(o)&&(l=ae(o,t.height)),null===U||o&&!ds(o)||(l=a&&c?U/r*n:t.height),null!==l&&ds(s)&&(U=a&&c?l/n*r:t.width),null!==U&&null!==l)return[U,l];throw new Error("Unable to calculate background-size for element")},Ts=function(A,e){var t=A[e];return void 0===t?A[0]:t},ms=function(A,e,t,r,n){var B=e[0],s=e[1],o=t[0],i=t[1];switch(A){case it.REPEAT_X:return[new ts(Math.round(r.left),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(r.top+s)),new ts(Math.round(r.left+r.width),Math.round(i+r.top+s)),new ts(Math.round(r.left),Math.round(i+r.top+s))];case it.REPEAT_Y:return[new ts(Math.round(r.left+B),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.top)),new ts(Math.round(r.left+B+o),Math.round(r.height+r.top)),new ts(Math.round(r.left+B),Math.round(r.height+r.top))];case it.NO_REPEAT:return[new ts(Math.round(r.left+B),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s)),new ts(Math.round(r.left+B+o),Math.round(r.top+s+i)),new ts(Math.round(r.left+B),Math.round(r.top+s+i))];default:return[new ts(Math.round(n.left),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.top)),new ts(Math.round(n.left+n.width),Math.round(n.height+n.top)),new ts(Math.round(n.left),Math.round(n.height+n.top))]}},Rs="Hidden Text",Ls=(vs.prototype.parseMetrics=function(A,e){var t=this._document.createElement("div"),r=this._document.createElement("img"),n=this._document.createElement("span"),B=this._document.body;t.style.visibility="hidden",t.style.fontFamily=A,t.style.fontSize=e,t.style.margin="0",t.style.padding="0",B.appendChild(t),r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",r.width=1,r.height=1,r.style.margin="0",r.style.padding="0",r.style.verticalAlign="baseline",n.style.fontFamily=A,n.style.fontSize=e,n.style.margin="0",n.style.padding="0",n.appendChild(this._document.createTextNode(Rs)),t.appendChild(n),t.appendChild(r);var s=r.offsetTop-n.offsetTop+2;t.removeChild(n),t.appendChild(this._document.createTextNode(Rs)),t.style.lineHeight="normal",r.style.verticalAlign="super";var o=r.offsetTop-t.offsetTop+2;return B.removeChild(t),{baseline:s,middle:o}},vs.prototype.getMetrics=function(A,e){var t=A+" "+e;return void 0===this._data[t]&&(this._data[t]=this.parseMetrics(A,e)),this._data[t]},vs);function vs(A){this._data={},this._document=A}var Os=(Ds.prototype.applyEffects=function(A,e){for(var t=this;this._activeEffects.length;)this.popEffect();A.filter(function(A){return An(A.target,e)}).forEach(function(A){return t.applyEffect(A)})},Ds.prototype.applyEffect=function(A){this.ctx.save(),function(A){return 0===A.type}(A)&&(this.ctx.translate(A.offsetX,A.offsetY),this.ctx.transform(A.matrix[0],A.matrix[1],A.matrix[2],A.matrix[3],A.matrix[4],A.matrix[5]),this.ctx.translate(-A.offsetX,-A.offsetY)),function(A){return 1===A.type}(A)&&(this.path(A.path),this.ctx.clip()),this._activeEffects.push(A)},Ds.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},Ds.prototype.renderStack=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return(e=t.element.container.styles).isVisible()?(this.ctx.globalAlpha=e.opacity,[4,this.renderStackContent(t)]):[3,2];case 1:A.sent(),A.label=2;case 2:return[2]}})})},Ds.prototype.renderNode=function(e){return a(this,void 0,void 0,function(){return S(this,function(A){switch(A.label){case 0:return e.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(e)]:[3,3];case 1:return A.sent(),[4,this.renderNodeContent(e)];case 2:A.sent(),A.label=3;case 3:return[2]}})})},Ds.prototype.renderTextWithLetterSpacing=function(t,A){var r=this;0===A?this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+t.bounds.height):c(t.text).map(function(A){return l(A)}).reduce(function(A,e){return r.ctx.fillText(e,A,t.bounds.top+t.bounds.height),A+r.ctx.measureText(e).width},t.bounds.left)},Ds.prototype.createFontStyle=function(A){var e=A.fontVariant.filter(function(A){return"normal"===A||"small-caps"===A}).join(""),t=A.fontFamily.join(", "),r=xA(A.fontSize)?""+A.fontSize.number+A.fontSize.unit:A.fontSize.number+"px";return[[A.fontStyle,e,A.fontWeight,r,t].join(" "),t,r]},Ds.prototype.renderTextNode=function(r,o){return a(this,void 0,void 0,function(){var e,t,n,B,s=this;return S(this,function(A){return e=this.createFontStyle(o),t=e[0],n=e[1],B=e[2],this.ctx.font=t,r.textBounds.forEach(function(r){s.ctx.fillStyle=te(o.color),s.renderTextWithLetterSpacing(r,o.letterSpacing);var A=o.textShadow;A.length&&r.text.trim().length&&(A.slice(0).reverse().forEach(function(A){s.ctx.shadowColor=te(A.color),s.ctx.shadowOffsetX=A.offsetX.number*s.options.scale,s.ctx.shadowOffsetY=A.offsetY.number*s.options.scale,s.ctx.shadowBlur=A.blur.number,s.ctx.fillText(r.text,r.bounds.left,r.bounds.top+r.bounds.height)}),s.ctx.shadowColor="",s.ctx.shadowOffsetX=0,s.ctx.shadowOffsetY=0,s.ctx.shadowBlur=0),o.textDecorationLine.length&&(s.ctx.fillStyle=te(o.textDecorationColor||o.color),o.textDecorationLine.forEach(function(A){switch(A){case 1:var e=s.fontMetrics.getMetrics(n,B).baseline;s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top+e),r.bounds.width,1);break;case 2:s.ctx.fillRect(r.bounds.left,Math.round(r.bounds.top),r.bounds.width,1);break;case 3:var t=s.fontMetrics.getMetrics(n,B).middle;s.ctx.fillRect(r.bounds.left,Math.ceil(r.bounds.top+t),r.bounds.width,1)}}))}),[2]})})},Ds.prototype.renderReplacedElement=function(A,e,t){if(t&&0<A.intrinsicWidth&&0<A.intrinsicHeight){var r=hs(A),n=ws(e);this.path(n),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(t,0,0,A.intrinsicWidth,A.intrinsicHeight,r.left,r.top,r.width,r.height),this.ctx.restore()}},Ds.prototype.renderNodeContent=function(l){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U;return S(this,function(A){switch(A.label){case 0:this.applyEffects(l.effects,4),e=l.container,t=l.curves,r=e.styles,n=0,B=e.textNodes,A.label=1;case 1:return n<B.length?(s=B[n],[4,this.renderTextNode(s,r)]):[3,4];case 2:A.sent(),A.label=3;case 3:return n++,[3,1];case 4:if(!(e instanceof Nn))return[3,8];A.label=5;case 5:return A.trys.push([5,7,,8]),[4,this.options.cache.match(e.src)];case 6:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,8];case 7:return A.sent(),De.getInstance(this.options.id).error("Error loading image "+e.src),[3,8];case 8:if(e instanceof Tn&&this.renderReplacedElement(e,t,e.canvas),!(e instanceof Ln))return[3,12];A.label=9;case 9:return A.trys.push([9,11,,12]),[4,this.options.cache.match(e.svg)];case 10:return w=A.sent(),this.renderReplacedElement(e,t,w),[3,12];case 11:return A.sent(),De.getInstance(this.options.id).error("Error loading svg "+e.svg.substring(0,255)),[3,12];case 12:return e instanceof tB&&e.tree?[4,new Ds({id:this.options.id,scale:this.options.scale,backgroundColor:e.backgroundColor,x:0,y:0,scrollX:0,scrollY:0,width:e.width,height:e.height,cache:this.options.cache,windowWidth:e.width,windowHeight:e.height}).render(e.tree)]:[3,14];case 13:o=A.sent(),e.width&&e.height&&this.ctx.drawImage(o,0,0,e.width,e.height,e.bounds.left,e.bounds.top,e.bounds.width,e.bounds.height),A.label=14;case 14:if(e instanceof Gn&&(i=Math.min(e.bounds.width,e.bounds.height),e.type===Vn?e.checked&&(this.ctx.save(),this.path([new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i),new ts(e.bounds.left+.16*i,e.bounds.top+.5549*i),new ts(e.bounds.left+.27347*i,e.bounds.top+.44071*i),new ts(e.bounds.left+.39694*i,e.bounds.top+.5649*i),new ts(e.bounds.left+.72983*i,e.bounds.top+.23*i),new ts(e.bounds.left+.84*i,e.bounds.top+.34085*i),new ts(e.bounds.left+.39363*i,e.bounds.top+.79*i)]),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore()):e.type===zn&&e.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e.bounds.left+i/2,e.bounds.top+i/2,i/4,0,2*Math.PI,!0),this.ctx.fillStyle=te(Jn),this.ctx.fill(),this.ctx.restore())),bs(e)&&e.value.length){switch(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign=Ms(e.styles.textAlign),U=hs(e),a=0,e.styles.textAlign){case Cr.CENTER:a+=U.width/2;break;case Cr.RIGHT:a+=U.width}c=U.add(a,0,0,-U.height/2+1),this.ctx.save(),this.path([new ts(U.left,U.top),new ts(U.left+U.width,U.top),new ts(U.left+U.width,U.top+U.height),new ts(U.left,U.top+U.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new Cn(e.value,c),r.letterSpacing),this.ctx.restore(),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"}if(!An(e.styles.display,2048))return[3,20];if(null===e.styles.listStyleImage)return[3,19];if((Q=e.styles.listStyleImage).type!==xe.URL)return[3,18];w=void 0,u=Q.url,A.label=15;case 15:return A.trys.push([15,17,,18]),[4,this.options.cache.match(u)];case 16:return w=A.sent(),this.ctx.drawImage(w,e.bounds.left-(w.width+10),e.bounds.top),[3,18];case 17:return A.sent(),De.getInstance(this.options.id).error("Error loading list-style-image "+u),[3,18];case 18:return[3,20];case 19:l.listValue&&e.styles.listStyleType!==tr.NONE&&(this.ctx.font=this.createFontStyle(r)[0],this.ctx.fillStyle=te(r.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",U=new I(e.bounds.left,e.bounds.top+ae(e.styles.paddingTop,e.bounds.width),e.bounds.width,function(A,e){return zA(A)&&"normal"===A.value?1.2*e:A.type===sA.NUMBER_TOKEN?e*A.number:qA(A)?ae(A,e):e}(r.lineHeight,r.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new Cn(l.listValue,U),r.letterSpacing),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),A.label=20;case 20:return[2]}})})},Ds.prototype.renderStackContent=function(C){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l;return S(this,function(A){switch(A.label){case 0:return[4,this.renderNodeBackgroundAndBorders(C.element)];case 1:A.sent(),e=0,t=C.negativeZIndex,A.label=2;case 2:return e<t.length?(l=t[e],[4,this.renderStack(l)]):[3,5];case 3:A.sent(),A.label=4;case 4:return e++,[3,2];case 5:return[4,this.renderNodeContent(C.element)];case 6:A.sent(),r=0,n=C.nonInlineLevel,A.label=7;case 7:return r<n.length?(l=n[r],[4,this.renderNode(l)]):[3,10];case 8:A.sent(),A.label=9;case 9:return r++,[3,7];case 10:B=0,s=C.nonPositionedFloats,A.label=11;case 11:return B<s.length?(l=s[B],[4,this.renderStack(l)]):[3,14];case 12:A.sent(),A.label=13;case 13:return B++,[3,11];case 14:o=0,i=C.nonPositionedInlineLevel,A.label=15;case 15:return o<i.length?(l=i[o],[4,this.renderStack(l)]):[3,18];case 16:A.sent(),A.label=17;case 17:return o++,[3,15];case 18:a=0,c=C.inlineLevel,A.label=19;case 19:return a<c.length?(l=c[a],[4,this.renderNode(l)]):[3,22];case 20:A.sent(),A.label=21;case 21:return a++,[3,19];case 22:Q=0,w=C.zeroOrAutoZIndexOrTransformedOrOpacity,A.label=23;case 23:return Q<w.length?(l=w[Q],[4,this.renderStack(l)]):[3,26];case 24:A.sent(),A.label=25;case 25:return Q++,[3,23];case 26:u=0,U=C.positiveZIndex,A.label=27;case 27:return u<U.length?(l=U[u],[4,this.renderStack(l)]):[3,30];case 28:A.sent(),A.label=29;case 29:return u++,[3,27];case 30:return[2]}})})},Ds.prototype.mask=function(A){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(A.slice(0).reverse()),this.ctx.closePath()},Ds.prototype.path=function(A){this.ctx.beginPath(),this.formatPath(A),this.ctx.closePath()},Ds.prototype.formatPath=function(A){var r=this;A.forEach(function(A,e){var t=os(A)?A.start:A;0===e?r.ctx.moveTo(t.x,t.y):r.ctx.lineTo(t.x,t.y),os(A)&&r.ctx.bezierCurveTo(A.startControl.x,A.startControl.y,A.endControl.x,A.endControl.y,A.end.x,A.end.y)})},Ds.prototype.renderRepeat=function(A,e,t,r){this.path(A),this.ctx.fillStyle=e,this.ctx.translate(t,r),this.ctx.fill(),this.ctx.translate(-t,-r)},Ds.prototype.resizeImage=function(A,e,t){if(A.width===e&&A.height===t)return A;var r=this.canvas.ownerDocument.createElement("canvas");return r.width=e,r.height=t,r.getContext("2d").drawImage(A,0,0,A.width,A.height,0,0,e,t),r},Ds.prototype.renderBackgroundImage=function(b){return a(this,void 0,void 0,function(){var O,e,D,t,r,n;return S(this,function(A){switch(A.label){case 0:O=b.styles.backgroundImage.length-1,e=function(e){var t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f,p,N,K,I,T,m,R,L,v;return S(this,function(A){switch(A.label){case 0:if(e.type!==xe.URL)return[3,5];t=void 0,r=e.url,A.label=1;case 1:return A.trys.push([1,3,,4]),[4,D.options.cache.match(r)];case 2:return t=A.sent(),[3,4];case 3:return A.sent(),De.getInstance(D.options.id).error("Error loading background-image "+r),[3,4];case 4:return t&&(n=Hs(b,O,[t.width,t.height,t.width/t.height]),g=n[0],f=n[1],p=n[2],h=n[3],H=n[4],l=D.ctx.createPattern(D.resizeImage(t,h,H),"repeat"),D.renderRepeat(g,l,f,p)),[3,6];case 5:!function(A){return A.type===xe.LINEAR_GRADIENT}(e)?function(A){return A.type===xe.RADIAL_GRADIENT}(e)&&(C=Hs(b,O,[null,null,null]),g=C[0],E=C[1],F=C[2],h=C[3],H=C[4],d=0===e.position.length?[oe]:e.position,f=ae(d[0],h),p=ae(d[d.length-1],H),N=function(A,e,t,r,n){var B=0,s=0;switch(A.size){case Bt.CLOSEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.min(Math.abs(e),Math.abs(e-r)),s=Math.min(Math.abs(t),Math.abs(t-n)));break;case Bt.CLOSEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.min(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){var o=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),i=Ke(r,n,e,t,!0),a=i[0],c=i[1];s=o*(B=Ne(a-e,(c-t)/o))}break;case Bt.FARTHEST_SIDE:A.shape===rt.CIRCLE?B=s=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===rt.ELLIPSE&&(B=Math.max(Math.abs(e),Math.abs(e-r)),s=Math.max(Math.abs(t),Math.abs(t-n)));break;case Bt.FARTHEST_CORNER:if(A.shape===rt.CIRCLE)B=s=Math.max(Ne(e,t),Ne(e,t-n),Ne(e-r,t),Ne(e-r,t-n));else if(A.shape===rt.ELLIPSE){o=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r));var Q=Ke(r,n,e,t,!1);a=Q[0],c=Q[1],s=o*(B=Ne(a-e,(c-t)/o))}}return Array.isArray(A.size)&&(B=ae(A.size[0],r),s=2===A.size.length?ae(A.size[1],n):B),[B,s]}(e,f,p,h,H),K=N[0],I=N[1],0<K&&0<K&&(T=D.ctx.createRadialGradient(E+f,F+p,0,E+f,F+p,K),fe(e.stops,2*K).forEach(function(A){return T.addColorStop(A.stop,te(A.color))}),D.path(g),D.ctx.fillStyle=T,K!==I?(m=b.bounds.left+.5*b.bounds.width,R=b.bounds.top+.5*b.bounds.height,v=1/(L=I/K),D.ctx.save(),D.ctx.translate(m,R),D.ctx.transform(1,0,0,L,0,0),D.ctx.translate(-m,-R),D.ctx.fillRect(E,v*(F-R)+R,h,H*v),D.ctx.restore()):D.ctx.fill())):(B=Hs(b,O,[null,null,null]),g=B[0],f=B[1],p=B[2],h=B[3],H=B[4],s=pe(e.angle,h,H),o=s[0],i=s[1],a=s[2],c=s[3],Q=s[4],(w=document.createElement("canvas")).width=h,w.height=H,u=w.getContext("2d"),U=u.createLinearGradient(i,c,a,Q),fe(e.stops,o).forEach(function(A){return U.addColorStop(A.stop,te(A.color))}),u.fillStyle=U,u.fillRect(0,0,h,H),0<h&&0<H&&(l=D.ctx.createPattern(w,"repeat"),D.renderRepeat(g,l,f,p))),A.label=6;case 6:return O--,[2]}})},D=this,t=0,r=b.styles.backgroundImage.slice(0).reverse(),A.label=1;case 1:return t<r.length?(n=r[t],[5,e(n)]):[3,4];case 2:A.sent(),A.label=3;case 3:return t++,[3,1];case 4:return[2]}})})},Ds.prototype.renderBorder=function(e,t,r){return a(this,void 0,void 0,function(){return S(this,function(A){return this.path(function(A,e){switch(e){case 0:return Ks(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return Ks(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return Ks(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return Ks(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}}(r,t)),this.ctx.fillStyle=te(e),this.ctx.fill(),[2]})})},Ds.prototype.renderNodeBackgroundAndBorders=function(c){return a(this,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a=this;return S(this,function(A){switch(A.label){case 0:return this.applyEffects(c.effects,2),e=c.container.styles,t=!ee(e.backgroundColor)||e.backgroundImage.length,r=[{style:e.borderTopStyle,color:e.borderTopColor},{style:e.borderRightStyle,color:e.borderRightColor},{style:e.borderBottomStyle,color:e.borderBottomColor},{style:e.borderLeftStyle,color:e.borderLeftColor}],n=Ss(Ts(e.backgroundClip,0),c.curves),t||e.boxShadow.length?(this.ctx.save(),this.path(n),this.ctx.clip(),ee(e.backgroundColor)||(this.ctx.fillStyle=te(e.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(c.container)]):[3,2];case 1:A.sent(),this.ctx.restore(),e.boxShadow.slice(0).reverse().forEach(function(A){a.ctx.save();var e=Qs(c.curves),t=A.inset?0:1e4,r=function(A,t,r,n,B){return A.map(function(A,e){switch(e){case 0:return A.add(t,r);case 1:return A.add(t+n,r);case 2:return A.add(t+n,r+B);case 3:return A.add(t,r+B)}return A})}(e,-t+(A.inset?1:-1)*A.spread.number,(A.inset?1:-1)*A.spread.number,A.spread.number*(A.inset?-2:2),A.spread.number*(A.inset?-2:2));A.inset?(a.path(e),a.ctx.clip(),a.mask(r)):(a.mask(e),a.ctx.clip(),a.path(r)),a.ctx.shadowOffsetX=A.offsetX.number+t,a.ctx.shadowOffsetY=A.offsetY.number,a.ctx.shadowColor=te(A.color),a.ctx.shadowBlur=A.blur.number,a.ctx.fillStyle=A.inset?te(A.color):"rgba(0,0,0,1)",a.ctx.fill(),a.ctx.restore()}),A.label=2;case 2:s=B=0,o=r,A.label=3;case 3:return s<o.length?(i=o[s]).style===ht.NONE||ee(i.color)?[3,5]:[4,this.renderBorder(i.color,B,c.curves)]:[3,7];case 4:A.sent(),A.label=5;case 5:B++,A.label=6;case 6:return s++,[3,3];case 7:return[2]}})})},Ds.prototype.render=function(t){return a(this,void 0,void 0,function(){var e;return S(this,function(A){switch(A.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(this.options.x-this.options.scrollX,this.options.y-this.options.scrollY,this.options.width,this.options.height)),e=function(A){var e=new gs(A,[]),t=new Cs(e),r=[];return ps(e,t,t,r),Ns(e.container,r),t}(t),[4,this.renderStack(e)];case 1:return A.sent(),this.applyEffects([],2),[2,this.canvas]}})})},Ds);function Ds(A){this._activeEffects=[],this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),(this.options=A).canvas||(this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px"),this.fontMetrics=new Ls(document),this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),this.ctx.textBaseline="bottom",this._activeEffects=[],De.getInstance(A.id).debug("Canvas renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}var bs=function(A){return A instanceof jn||(A instanceof Yn||A instanceof Gn&&A.type!==zn&&A.type!==Vn)},Ss=function(A,e){switch(A){case Ee.BORDER_BOX:return Qs(e);case Ee.CONTENT_BOX:return function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]}(e);case Ee.PADDING_BOX:default:return ws(e)}},Ms=function(A){switch(A){case Cr.CENTER:return"center";case Cr.RIGHT:return"right";case Cr.LEFT:default:return"left"}},ys=(_s.prototype.render=function(r){return a(this,void 0,void 0,function(){var e,t;return S(this,function(A){switch(A.label){case 0:return e=Le(Math.max(this.options.windowWidth,this.options.width)*this.options.scale,Math.max(this.options.windowHeight,this.options.height)*this.options.scale,this.options.scrollX*this.options.scale,this.options.scrollY*this.options.scale,r),[4,xs(e)];case 1:return t=A.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=te(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(t,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},_s);function _s(A){this.canvas=A.canvas?A.canvas:document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.options=A,this.canvas.width=Math.floor(A.width*A.scale),this.canvas.height=Math.floor(A.height*A.scale),this.canvas.style.width=A.width+"px",this.canvas.style.height=A.height+"px",this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-A.x+A.scrollX,-A.y+A.scrollY),De.getInstance(A.id).debug("EXPERIMENTAL ForeignObject renderer initialized ("+A.width+"x"+A.height+" at "+A.x+","+A.y+") with scale "+A.scale)}function Ps(A){return we(_A.create(A).parseComponentValue())}var xs=function(r){return new Promise(function(A,e){var t=new Image;t.onload=function(){A(t)},t.onerror=e,t.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent((new XMLSerializer).serializeToString(r))})};"undefined"!=typeof window&&Se.setContext(window);var Vs=function(p,N){return a(void 0,void 0,void 0,function(){var e,t,r,n,B,s,o,i,a,c,Q,w,u,U,l,C,g,E,F,h,H,d,f;return S(this,function(A){switch(A.label){case 0:if(!(e=p.ownerDocument))throw new Error("Element is not attached to a Document");if(!(t=e.defaultView))throw new Error("Document is not attached to a Window");return r=(Math.round(1e3*Math.random())+Date.now()).toString(16),n=EB(p)||function(A){return"HTML"===A.tagName}(p)?function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new I(0,0,r,n)}(e):T(p),B=n.width,s=n.height,o=n.left,i=n.top,a=K({},{allowTaint:!1,imageTimeout:15e3,proxy:void 0,useCORS:!1},N),c={backgroundColor:"#ffffff",cache:N.cache?N.cache:Se.create(r,a),logging:!0,removeContainer:!0,foreignObjectRendering:!1,scale:t.devicePixelRatio||1,windowWidth:t.innerWidth,windowHeight:t.innerHeight,scrollX:t.pageXOffset,scrollY:t.pageYOffset,x:o,y:i,width:Math.ceil(B),height:Math.ceil(s),id:r},Q=K({},c,a,N),w=new I(Q.scrollX,Q.scrollY,Q.windowWidth,Q.windowHeight),De.create({id:r,enabled:Q.logging}),De.getInstance(r).debug("Starting document clone"),u=new PB(p,{id:r,onclone:Q.onclone,ignoreElements:Q.ignoreElements,inlineImages:Q.foreignObjectRendering,copyStyles:Q.foreignObjectRendering}),(U=u.clonedReferenceElement)?[4,u.toIFrame(e,w)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return l=A.sent(),C=e.documentElement?Ps(getComputedStyle(e.documentElement).backgroundColor):He.TRANSPARENT,g=e.body?Ps(getComputedStyle(e.body).backgroundColor):He.TRANSPARENT,E=N.backgroundColor,F="string"==typeof E?Ps(E):null===E?He.TRANSPARENT:4294967295,h=p===e.documentElement?ee(C)?ee(g)?F:g:C:F,H={id:r,cache:Q.cache,canvas:Q.canvas,backgroundColor:h,scale:Q.scale,x:Q.x,y:Q.y,scrollX:Q.scrollX,scrollY:Q.scrollY,width:Q.width,height:Q.height,windowWidth:Q.windowWidth,windowHeight:Q.windowHeight},Q.foreignObjectRendering?(De.getInstance(r).debug("Document cloned, using foreign object rendering"),[4,new ys(H).render(U)]):[3,3];case 2:return d=A.sent(),[3,5];case 3:return De.getInstance(r).debug("Document cloned, using computed rendering"),Se.attachInstance(Q.cache),De.getInstance(r).debug("Starting DOM parsing"),f=iB(U),Se.detachInstance(),h===f.styles.backgroundColor&&(f.styles.backgroundColor=He.TRANSPARENT),De.getInstance(r).debug("Starting renderer"),[4,new Os(H).render(f)];case 4:d=A.sent(),A.label=5;case 5:return!0===Q.removeContainer&&(PB.destroy(l)||De.getInstance(r).error("Cannot detach cloned iframe as it is not in the DOM anymore")),De.getInstance(r).debug("Finished rendering"),De.destroy(r),Se.destroy(r),[2,d]}})})};return function(A,e){return void 0===e&&(e={}),Vs(A,e)}});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/*!
 * iro.js v4.5.3
 * 2016-2019 James Daniel
 * Licensed under MPL 2.0
 * github.com/jaames/iro.js
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.iro=e()}(this,function(){"use strict";var c=function(){},i={},h=[],u=[];function p(t,e){var o,n,r,i,s=arguments,a=u;for(i=arguments.length;2<i--;)h.push(s[i]);for(e&&null!=e.children&&(h.length||h.push(e.children),delete e.children);h.length;)if((n=h.pop())&&void 0!==n.pop)for(i=n.length;i--;)h.push(n[i]);else"boolean"==typeof n&&(n=null),(r="function"!=typeof t)&&(null==n?n="":"number"==typeof n?n=String(n):"string"!=typeof n&&(r=!1)),r&&o?a[a.length-1]+=n:a===u?a=[n]:a.push(n),o=r;var l=new c;return l.nodeName=t,l.children=a,l.attributes=null==e?void 0:e,l.key=null==e?void 0:e.key,l}function M(t,e){for(var o in e)t[o]=e[o];return t}function l(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}var e="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,o=[];function s(t){!t._dirty&&(t._dirty=!0)&&1==o.push(t)&&e(n)}function n(){for(var t;t=o.pop();)t._dirty&&I(t)}function S(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function E(t){var e=M({},t.attributes);e.children=t.children;var o=t.nodeName.defaultProps;if(void 0!==o)for(var n in o)void 0===e[n]&&(e[n]=o[n]);return e}function N(t){var e=t.parentNode;e&&e.removeChild(t)}function v(t,e,o,n,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)l(o,null),l(n,t);else if("class"!==e||r)if("style"===e){if(n&&"string"!=typeof n&&"string"!=typeof o||(t.style.cssText=n||""),n&&"object"==typeof n){if("string"!=typeof o)for(var i in o)i in n||(t.style[i]="");for(var i in n)t.style[i]="number"==typeof n[i]&&!1===f.test(i)?n[i]+"px":n[i]}}else if("dangerouslySetInnerHTML"===e)n&&(t.innerHTML=n.__html||"");else if("o"==e[0]&&"n"==e[1]){var s=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),n?o||t.addEventListener(e,d,s):t.removeEventListener(e,d,s),(t._listeners||(t._listeners={}))[e]=n}else if("list"!==e&&"type"!==e&&!r&&e in t){try{t[e]=null==n?"":n}catch(t){}null!=n&&!1!==n||"spellcheck"==e||t.removeAttribute(e)}else{var a=r&&e!==(e=e.replace(/^xlink:?/,""));null==n||!1===n?a?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof n&&(a?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):t.setAttribute(e,n))}else t.className=n||""}function d(t){return this._listeners[t.type](t)}var T=[],H=0,g=!1,_=!1;function P(){for(var t;t=T.shift();)t.componentDidMount&&t.componentDidMount()}function A(t,e,o,n,r,i){H++||(g=null!=r&&void 0!==r.ownerSVGElement,_=null!=t&&!("__preactattr_"in t));var s=U(t,e,o,n,i);return r&&s.parentNode!==r&&r.appendChild(s),--H||(_=!1,i||P()),s}function U(t,e,o,n,r){var i=t,s=g;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),O(t,!0))),i.__preactattr_=!0,i;var a,l,c=e.nodeName;if("function"==typeof c)return function(t,e,o,n){var r=t&&t._component,i=r,s=t,a=r&&t._componentConstructor===e.nodeName,l=a,c=E(e);for(;r&&!l&&(r=r._parentComponent);)l=r.constructor===e.nodeName;r&&l&&(!n||r._component)?(j(r,c,3,o,n),t=r.base):(i&&!a&&(L(i),t=s=null),r=R(e.nodeName,c,o),t&&!r.nextBase&&(r.nextBase=t,s=null),j(r,c,1,o,n),t=r.base,s&&t!==s&&(s._component=null,O(s,!1)));return t}(t,e,o,n);if(g="svg"===c||"foreignObject"!==c&&g,c=String(c),(!t||!S(t,c))&&(a=c,(l=g?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a)).normalizedNodeName=a,i=l,t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),O(t,!0)}var h=i.firstChild,u=i.__preactattr_,p=e.children;if(null==u){u=i.__preactattr_={};for(var f=i.attributes,d=f.length;d--;)u[f[d].name]=f[d].value}return!_&&p&&1===p.length&&"string"==typeof p[0]&&null!=h&&void 0!==h.splitText&&null==h.nextSibling?h.nodeValue!=p[0]&&(h.nodeValue=p[0]):(p&&p.length||null!=h)&&function(t,e,o,n,r){var i,s,a,l,c,h=t.childNodes,u=[],p={},f=0,d=0,v=h.length,g=0,_=e?e.length:0;if(0!==v)for(var m=0;m<v;m++){var y=h[m],b=y.__preactattr_,w=_&&b?y._component?y._component.__key:b.key:null;null!=w?(f++,p[w]=y):(b||(void 0!==y.splitText?!r||y.nodeValue.trim():r))&&(u[g++]=y)}if(0!==_)for(var m=0;m<_;m++){l=e[m],c=null;var w=l.key;if(null!=w)f&&void 0!==p[w]&&(c=p[w],p[w]=void 0,f--);else if(d<g)for(i=d;i<g;i++)if(void 0!==u[i]&&(x=s=u[i],C=r,"string"==typeof(k=l)||"number"==typeof k?void 0!==x.splitText:"string"==typeof k.nodeName?!x._componentConstructor&&S(x,k.nodeName):C||x._componentConstructor===k.nodeName)){c=s,u[i]=void 0,i===g-1&&g--,i===d&&d++;break}c=U(c,l,o,n),a=h[m],c&&c!==t&&c!==a&&(null==a?t.appendChild(c):c===a.nextSibling?N(a):t.insertBefore(c,a))}var x,k,C;if(f)for(var m in p)void 0!==p[m]&&O(p[m],!1);for(;d<=g;)void 0!==(c=u[g--])&&O(c,!1)}(i,p,o,n,_||null!=u.dangerouslySetInnerHTML),function(t,e,o){var n;for(n in o)e&&null!=e[n]||null==o[n]||v(t,n,o[n],o[n]=void 0,g);for(n in e)"children"===n||"innerHTML"===n||n in o&&e[n]===("value"===n||"checked"===n?t[n]:o[n])||v(t,n,o[n],o[n]=e[n],g)}(i,e.attributes,u),g=s,i}function O(t,e){var o=t._component;o?L(o):(null!=t.__preactattr_&&l(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||N(t),r(t))}function r(t){for(t=t.lastChild;t;){var e=t.previousSibling;O(t,!0),t=e}}var a=[];function R(t,e,o){var n,r=a.length;for(t.prototype&&t.prototype.render?(n=new t(e,o),y.call(n,e,o)):((n=new y(e,o)).constructor=t,n.render=m);r--;)if(a[r].constructor===t)return n.nextBase=a[r].nextBase,a.splice(r,1),n;return n}function m(t,e,o){return this.constructor(t,o)}function j(t,e,o,n,r){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||r?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,n)),n&&n!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=n),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==o&&(1!==o&&!1===i.syncComponentUpdates&&t.base?s(t):I(t,1,r)),l(t.__ref,t))}function I(t,e,o,n){if(!t._disable){var r,i,s,a=t.props,l=t.state,c=t.context,h=t.prevProps||a,u=t.prevState||l,p=t.prevContext||c,f=t.base,d=t.nextBase,v=f||d,g=t._component,_=!1,m=p;if(t.constructor.getDerivedStateFromProps&&(l=M(M({},l),t.constructor.getDerivedStateFromProps(a,l)),t.state=l),f&&(t.props=h,t.state=u,t.context=p,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(a,l,c)?_=!0:t.componentWillUpdate&&t.componentWillUpdate(a,l,c),t.props=a,t.state=l,t.context=c),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!_){r=t.render(a,l,c),t.getChildContext&&(c=M(M({},c),t.getChildContext())),f&&t.getSnapshotBeforeUpdate&&(m=t.getSnapshotBeforeUpdate(h,u));var y,b,w=r&&r.nodeName;if("function"==typeof w){var x=E(r);(i=g)&&i.constructor===w&&x.key==i.__key?j(i,x,1,c,!1):(y=i,t._component=i=R(w,x,c),i.nextBase=i.nextBase||d,i._parentComponent=t,j(i,x,0,c,!1),I(i,1,o,!0)),b=i.base}else s=v,(y=g)&&(s=t._component=null),(v||1===e)&&(s&&(s._component=null),b=A(s,r,c,o||!f,v&&v.parentNode,!0));if(v&&b!==v&&i!==g){var k=v.parentNode;k&&b!==k&&(k.replaceChild(b,v),y||(v._component=null,O(v,!1)))}if(y&&L(y),(t.base=b)&&!n){for(var C=t,S=t;S=S._parentComponent;)(C=S).base=b;b._component=C,b._componentConstructor=C.constructor}}for(!f||o?T.push(t):_||t.componentDidUpdate&&t.componentDidUpdate(h,u,m);t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);H||n||P()}}function L(t){var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var o=t._component;o?L(o):e&&(null!=e.__preactattr_&&l(e.__preactattr_.ref,null),N(t.nextBase=e),a.push(t),r(e)),l(t.__ref,null)}function y(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function b(t,e,o,n){void 0===n&&(n={});for(var r=0;r<e.length;r++)t.addEventListener(e[r],o,n)}function w(t,e,o,n){void 0===n&&(n={});for(var r=0;r<e.length;r++)t.removeEventListener(e[r],o,n)}M(y.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=M(M({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),s(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),I(this,2)},render:function(){}});var x="mousedown",k="mousemove",C="mouseup",B="touchstart",D="touchmove",W="touchend",t=function(e){function t(t){e.call(this,t),this.uid=(Math.random()+1).toString(36).substring(5)}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidMount=function(){b(this.base,[x,B],this,{passive:!1})},t.prototype.componentWillUnmount=function(){w(this.base,[x,B],this)},t.prototype.handleEvent=function(t){t.preventDefault();var e=t.touches?t.changedTouches[0]:t,o=e.clientX,n=e.clientY,r=this.base.getBoundingClientRect();switch(t.type){case x:case B:b(document,[k,D,C,W],this,{passive:!1}),this.handleInput(o,n,r,"START");break;case k:case D:this.handleInput(o,n,r,"MOVE");break;case C:case W:this.handleInput(o,n,r,"END"),w(document,[k,D,C,W],this,{passive:!1})}},t}(y),V=document.getElementsByTagName("base");function F(t){var e=window.location,o=window.navigator.userAgent,n=/^((?!chrome|android).)*safari/i.test(o),r=/iPhone|iPod|iPad/i.test(o);return(n||r)&&0<V.length?e.protocol+"//"+e.host+e.pathname+e.search+t:t}function $(t,e,o,n,r){var i=r-n<=180?0:1;return n*=Math.PI/180,r*=Math.PI/180,"M "+(t+o*Math.cos(r))+" "+(e+o*Math.sin(r))+" A "+o+" "+o+" 0 "+i+" 0 "+(t+o*Math.cos(n))+" "+(e+o*Math.sin(n))}function G(t){var e=t.r,o=t.url;return p("svg",{class:"iro__handle",x:t.x,y:t.y,style:{overflow:"visible"}},o&&p("use",Object.assign({},{xlinkHref:F(o)},t.origin)),!o&&p("circle",{class:"iro__handle__inner",r:e,fill:"none","stroke-width":2,stroke:"#000"}),!o&&p("circle",{class:"iro__handle__outer",r:e-2,fill:"none","stroke-width":2,stroke:"#fff"}))}G.defaultProps={x:0,y:0,r:8,url:null,origin:{x:0,y:0}};var z=Array.apply(null,{length:360}).map(function(t,e){return e}),q=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype._transformAngle=function(t,e){var o=this.props.wheelAngle;return((t="clockwise"===this.props.wheelDirection?-360+t-(e?-o:o):o-t)%360+360)%360},e.prototype.render=function(t){var e=this,o=t.width,n=t.borderWidth,r=t.handleRadius,i=t.color.hsv,s=o/2-n,a=this._transformAngle(i.h,!0)*(Math.PI/180),l=i.s/100*(s-t.padding-r-n),c=s+n,h=s+n;return p("svg",{class:"iro__wheel",width:o,height:o,style:{overflow:"visible",display:"block"}},p("defs",null,p("radialGradient",{id:this.uid},p("stop",{offset:"0%","stop-color":"#fff"}),p("stop",{offset:"100%","stop-color":"#fff","stop-opacity":"0"}))),p("g",{class:"iro__wheel__hue","stroke-width":s,fill:"none"},z.map(function(t){return p("path",{key:t,d:$(c,h,s/2,t,t+1.5),stroke:"hsl("+e._transformAngle(t)+", 100%, 50%)"})})),p("circle",{class:"iro__wheel__saturation",cx:c,cy:h,r:s,fill:"url("+F("#"+this.uid)+")"}),t.wheelLightness&&p("circle",{class:"iro__wheel__lightness",cx:c,cy:h,r:s,fill:"#000",opacity:1-i.v/100}),p("circle",{class:"iro__wheel__border",cx:c,cy:h,r:s,fill:"none",stroke:t.borderColor,"stroke-width":n}),p(G,{r:r,url:t.handleSvg,origin:t.handleOrigin,x:c+l*Math.cos(a),y:h+l*Math.sin(a)}))},e.prototype.handleInput=function(t,e,o,n){var r=o.left,i=o.top,s=this.props,a=s.width/2,l=a-s.padding-s.handleRadius-s.borderWidth;t=a-(t-r),e=a-(e-i);var c=Math.atan2(e,t),h=this._transformAngle(Math.round(c*(180/Math.PI))+180),u=Math.min(Math.sqrt(t*t+e*e),l);s.onInput(n,{h:h,s:Math.round(100/l*u)})},e}(t);function X(t,e){var o=-1<t.indexOf("%"),n=parseFloat(t);return o?e/100*n:n}function Y(t){return parseInt(t,16)}function J(t){return t.toString(16).padStart(2,"0")}var K="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",Q="[\\s|\\(]+("+K+")[,|\\s]+("+K+")[,|\\s]+("+K+")\\s*\\)?",Z="[\\s|\\(]+("+K+")[,|\\s]+("+K+")[,|\\s]+("+K+")[,|\\s]+("+K+")\\s*\\)?",tt=new RegExp("rgb"+Q),et=new RegExp("rgba"+Z),ot=new RegExp("hsl"+Q),nt=new RegExp("hsla"+Z),rt="^(?:#?|0x?)",it="([0-9a-fA-F]{1})",st="([0-9a-fA-F]{2})",at=new RegExp(""+rt+it+it+it+"$"),lt=new RegExp(""+rt+it+it+it+it+"$"),ct=new RegExp(""+rt+st+st+st+"$"),ht=new RegExp(""+rt+st+st+st+st+"$"),ut=function(t){this._onChange=!1,this._value={h:0,s:0,v:0,a:1},t&&this.set(t)},pt={hsv:{configurable:!0},rgb:{configurable:!0},hsl:{configurable:!0},rgbString:{configurable:!0},hexString:{configurable:!0},hslString:{configurable:!0}};ut.prototype.set=function(t){var e="string"==typeof t,o="object"==typeof t;if(e&&/^(?:#?|0x?)[0-9a-fA-F]{3,8}$/.test(t))this.hexString=t;else if(e&&/^rgba?/.test(t))this.rgbString=t;else if(e&&/^hsla?/.test(t))this.hslString=t;else if(o&&t instanceof ut)this.hsv=t.hsv;else if(o&&"r"in t&&"g"in t&&"b"in t)this.rgb=t;else if(o&&"h"in t&&"s"in t&&"v"in t)this.hsv=t;else{if(!(o&&"h"in t&&"s"in t&&"l"in t))throw new Error("invalid color value");this.hsl=t}},ut.prototype.setChannel=function(t,e,o){var n;this[t]=Object.assign({},this[t],((n={})[e]=o,n))},ut.prototype.clone=function(){return new ut(this)},ut.hsvToRgb=function(t){var e=t.h/60,o=t.s/100,n=t.v/100,r=Math.floor(e),i=e-r,s=n*(1-o),a=n*(1-i*o),l=n*(1-(1-i)*o),c=r%6;return{r:255*[n,a,s,s,l,n][c],g:255*[l,n,n,a,s,s][c],b:255*[s,s,l,n,n,a][c]}},ut.rgbToHsv=function(t){var e,o=t.r/255,n=t.g/255,r=t.b/255,i=Math.max(o,n,r),s=Math.min(o,n,r),a=i-s,l=i,c=0===i?0:a/i;switch(i){case s:e=0;break;case o:e=(n-r)/a+(n<r?6:0);break;case n:e=(r-o)/a+2;break;case r:e=(o-n)/a+4}return{h:60*e,s:100*c,v:100*l}},ut.hsvToHsl=function(t){var e=t.s/100,o=t.v/100,n=(2-e)*o,r=n<=1?n:2-n,i=r<1e-9?0:e*o/r;return{h:t.h,s:100*i,l:50*n}},ut.hslToHsv=function(t){var e=2*t.l,o=t.s*(e<=100?e:200-e)/100,n=e+o<1e-9?0:2*o/(e+o);return{h:t.h,s:100*n,v:(e+o)/2}},pt.hsv.get=function(){var t=this._value;return{h:t.h,s:t.s,v:t.v}},pt.hsv.set=function(t){var e=this._value;if(t=Object.assign({},e,t),this._onChange){var o={};for(var n in e)o[n]=t[n]!=e[n];this._value=t,(o.h||o.s||o.v||o.a)&&this._onChange(this,o)}else this._value=t},pt.rgb.get=function(){var t=ut.hsvToRgb(this._value),e=t.r,o=t.g,n=t.b;return{r:Math.round(e),g:Math.round(o),b:Math.round(n)}},pt.rgb.set=function(t){this.hsv=Object.assign({},ut.rgbToHsv(t),{a:void 0===t.a?1:t.a})},pt.hsl.get=function(){var t=ut.hsvToHsl(this._value),e=t.h,o=t.s,n=t.l;return{h:Math.round(e),s:Math.round(o),l:Math.round(n)}},pt.hsl.set=function(t){this.hsv=Object.assign({},ut.hslToHsv(t),{a:void 0===t.a?1:t.a})},pt.rgbString.get=function(){var t=this.rgb;return"rgb("+t.r+", "+t.g+", "+t.b+")"},pt.rgbString.set=function(t){var e,o,n,r,i=1;if((e=tt.exec(t))?(o=X(e[1],255),n=X(e[2],255),r=X(e[3],255)):(e=et.exec(t))&&(o=X(e[1],255),n=X(e[2],255),r=X(e[3],255),i=X(e[4],1)),!e)throw new Error("invalid rgb string");this.rgb={r:o,g:n,b:r,a:i}},pt.hexString.get=function(){var t=this.rgb;return"#"+J(t.r)+J(t.g)+J(t.b)},pt.hexString.set=function(t){var e,o,n,r,i=255;if((e=at.exec(t))?(o=17*Y(e[1]),n=17*Y(e[2]),r=17*Y(e[3])):(e=lt.exec(t))?(o=17*Y(e[1]),n=17*Y(e[2]),r=17*Y(e[3]),i=17*Y(e[4])):(e=ct.exec(t))?(o=Y(e[1]),n=Y(e[2]),r=Y(e[3])):(e=ht.exec(t))&&(o=Y(e[1]),n=Y(e[2]),r=Y(e[3]),i=Y(e[4])),!e)throw new Error("invalid hex string");this.rgb={r:o,g:n,b:r,a:i/255}},pt.hslString.get=function(){var t=this.hsl;return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},pt.hslString.set=function(t){var e,o,n,r,i=1;if((e=ot.exec(t))?(o=X(e[1],360),n=X(e[2],100),r=X(e[3],100)):(e=nt.exec(t))&&(o=X(e[1],360),n=X(e[2],100),r=X(e[3],100),i=X(e[4],1)),!e)throw new Error("invalid hsl string");this.hsl={h:o,s:n,l:r,a:i}},Object.defineProperties(ut.prototype,pt);var ft=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.renderGradient=function(t){var e=t.color.hsv,o=[];switch(t.sliderType){case"hue":o=[{offset:"0",color:"#f00"},{offset:"16.666",color:"#ff0"},{offset:"33.333",color:"#0f0"},{offset:"50",color:"#0ff"},{offset:"66.666",color:"#00f"},{offset:"83.333",color:"#f0f"},{offset:"100",color:"#f00"}];break;case"saturation":var n=ut.hsvToHsl({h:e.h,s:0,v:e.v}),r=ut.hsvToHsl({h:e.h,s:100,v:e.v});o=[{offset:"0",color:"hsl("+n.h+", "+n.s+"%, "+n.l+"%)"},{offset:"100",color:"hsl("+r.h+", "+r.s+"%, "+r.l+"%)"}];break;case"value":default:var i=ut.hsvToHsl({h:e.h,s:e.s,v:100});o=[{offset:"0",color:"#000"},{offset:"100",color:"hsl("+i.h+", "+i.s+"%, "+i.l+"%)"}]}return p("linearGradient",{id:this.uid},o.map(function(t){return p("stop",{offset:t.offset+"%","stop-color":t.color})}))},e.prototype.render=function(t){var e=t.width,o=t.sliderHeight,n=t.borderWidth,r=t.handleRadius;o=o||2*t.padding+2*r+2*n,this.width=e;var i,s=(this.height=o)/2,a=e-2*s,l=t.color.hsv;switch(t.sliderType){case"hue":i=l.h/=3.6;break;case"saturation":i=l.s;break;case"value":default:i=l.v}return p("svg",{class:"iro__slider",width:e,height:o,style:{marginTop:t.sliderMargin,overflow:"visible",display:"block"}},p("defs",null,this.renderGradient(t)),p("rect",{class:"iro__slider__value",rx:s,ry:s,x:n/2,y:n/2,width:e-n,height:o-n,"stroke-width":n,stroke:t.borderColor,fill:"url("+F("#"+this.uid)+")"}),p(G,{r:r,url:t.handleSvg,origin:t.handleOrigin,x:s+i/100*a,y:o/2}))},e.prototype.getValueFromPoint=function(t,e,o){var n=o.left,r=this.width-this.height;t-=n+this.height/2;var i=Math.max(Math.min(t,r),0);return Math.round(100/r*i)},e.prototype.handleInput=function(t,e,o,n){var r,i,s=this.getValueFromPoint(t,e,o);switch(this.props.sliderType){case"hue":i="h",s*=3.6;break;case"saturation":i="s";break;case"value":default:i="v"}this.props.onInput(n,((r={})[i]=s,r))},e}(t);var dt=function(e){function i(t){e.call(this,t),this.emitHook("init:before"),this._events={},this._deferredEvents={},this._colorUpdateActive=!1,this._colorUpdateSrc=null,this.id=t.id,this.color=new ut(t.color),this.deferredEmit("color:init",this.color,{h:!1,s:!1,v:!1,a:!1}),this.color._onChange=this.updateColor.bind(this),this.state=Object.assign({},t,{color:this.color,ref:void 0}),this.emitHook("init:state"),t.layout?this.layout=t.layout:this.layout=[{component:q,options:{}},{component:ft,options:{}}],this.emitHook("init:after")}return e&&(i.__proto__=e),((i.prototype=Object.create(e&&e.prototype)).constructor=i).prototype.on=function(t,e){var o=this,n=this._events;(Array.isArray(t)?t:[t]).forEach(function(t){o.emitHook("event:on",t,e),(n[t]||(n[t]=[])).push(e),o._deferredEvents[t]&&(o._deferredEvents[t].forEach(function(t){e.apply(null,t)}),o._deferredEvents[t]=[])})},i.prototype.off=function(t,o){var n=this;(Array.isArray(t)?t:[t]).forEach(function(t){var e=n._events[t];n.emitHook("event:off",t,o),e&&e.splice(e.indexOf(o),1)})},i.prototype.emit=function(t){for(var e,o=[],n=arguments.length-1;0<n--;)o[n]=arguments[n+1];(e=this).emitHook.apply(e,[t].concat(o));for(var r=this._events[t]||[],i=0;i<r.length;i++)r[i].apply(this,o)},i.prototype.deferredEmit=function(t){for(var e,o=[],n=arguments.length-1;0<n--;)o[n]=arguments[n+1];var r=this._deferredEvents;(e=this).emit.apply(e,[t].concat(o)),(r[t]||(r[t]=[])).push(o)},i.prototype.resize=function(t){this.setState({width:t})},i.prototype.reset=function(){this.color.set(this.props.color)},i.addHook=function(t,e){var o=i.pluginHooks;(o[t]||(o[t]=[])).push(e)},i.prototype.emitHook=function(t){for(var e=[],o=arguments.length-1;0<o--;)e[o]=arguments[o+1];for(var n=i.pluginHooks[t]||[],r=0;r<n.length;r++)n[r].apply(this,e)},i.prototype.onMount=function(t){this.el=t,this.deferredEmit("mount",this)},i.prototype.updateColor=function(t,e){this.emitHook("color:beforeUpdate",t,e),this.setState({color:t}),this.emitHook("color:afterUpdate",t,e),this._colorUpdateActive||(this._colorUpdateActive=!0,"input"==this._colorUpdateSrc&&this.emit("input:change",t,e),this.emit("color:change",t,e),this._colorUpdateActive=!1)},i.prototype.handleInput=function(t,e){"START"===t&&this.emit("input:start",this.color),"MOVE"===t&&this.emit("input:move",this.color),this._colorUpdateSrc="input",this.color.hsv=e,"END"===t&&this.emit("input:end",this.color),this._colorUpdateSrc=null},i.prototype.render=function(t,n){var r=this;return p("div",{class:"iro__colorPicker",id:t.id,style:{display:n.display,width:n.width}},this.layout.map(function(t){var e=t.component,o=t.options;return p(e,Object.assign({},n,o,{onInput:function(t,e){return r.handleInput(t,e)},parent:r}))}))},i}(y);dt.pluginHooks={},dt.defaultProps={width:300,height:300,handleRadius:8,handleSvg:null,handleOrigin:{x:0,y:0},color:"#fff",borderColor:"#fff",borderWidth:0,display:"block",id:null,wheelLightness:!0,wheelAngle:0,wheelDirection:"anticlockwise",sliderHeight:null,sliderMargin:12,padding:6,layout:null};var vt,gt,_t,mt,yt=((gt=function(e,t){var o,n,r,i=null,s=document.createElement("div");return o=p(vt,Object.assign({},{ref:function(t){return i=t}},t)),A(n,o,{},!1,s,!1),r=function(){var t=e instanceof Element?e:document.querySelector(e);t.appendChild(i.base),i.onMount(t)},"loading"!==document.readyState?r():b(document,["DOMContentLoaded"],r),i}).prototype=(vt=dt).prototype,Object.assign(gt,vt),gt.__component=vt,gt);return mt=[],(_t={Color:ut,ColorPicker:yt,ui:{h:p,Component:t,Handle:G,Slider:ft,Wheel:q},util:{resolveUrl:F,createArcPath:$,parseUnit:X,parseHexInt:Y,intToHex:J},version:"4.5.3"}).use=function(t,e){void 0===e&&(e={}),-1<mt.indexOf(t)||(t(_t,e),mt.push(t))},_t.installedPlugins=mt,_t});
//# sourceMappingURL=iro.min.js.map

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/item',[
        'ev-emitter/ev-emitter',
        'get-size/get-size'
      ],
      factory
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      require('ev-emitter'),
      require('get-size')
    );
  } else {
    // browser global
    window.Outlayer = {};
    window.Outlayer.Item = factory(
      window.EvEmitter,
      window.getSize
    );
  }

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'outlayer/outlayer',[
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './item'
      ],
      function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }
    );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./item')
    );
  } else {
    // browser global
    window.Outlayer = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      window.Outlayer.Item
    );
  }

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));

/**
 * Isotope Item
**/

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/item',[
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.Item = factory(
      window.Outlayer
    );
  }

}( window, function factory( Outlayer ) {
'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
function Item() {
  Outlayer.Item.apply( this, arguments );
}

var proto = Item.prototype = Object.create( Outlayer.Item.prototype );

var _create = proto._create;
proto._create = function() {
  // assign id, used for original-order sorting
  this.id = this.layout.itemGUID++;
  _create.call( this );
  this.sortData = {};
};

proto.updateSortData = function() {
  if ( this.isIgnored ) {
    return;
  }
  // default sorters
  this.sortData.id = this.id;
  // for backward compatibility
  this.sortData['original-order'] = this.id;
  this.sortData.random = Math.random();
  // go thru getSortData obj and apply the sorters
  var getSortData = this.layout.options.getSortData;
  var sorters = this.layout._sorters;
  for ( var key in getSortData ) {
    var sorter = sorters[ key ];
    this.sortData[ key ] = sorter( this.element, this );
  }
};

var _destroy = proto.destroy;
proto.destroy = function() {
  // call super
  _destroy.apply( this, arguments );
  // reset display, #741
  this.css({
    display: ''
  });
};

return Item;

}));

/**
 * Isotope LayoutMode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-mode',[
        'get-size/get-size',
        'outlayer/outlayer'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('get-size'),
      require('outlayer')
    );
  } else {
    // browser global
    window.Isotope = window.Isotope || {};
    window.Isotope.LayoutMode = factory(
      window.getSize,
      window.Outlayer
    );
  }

}( window, function factory( getSize, Outlayer ) {
  'use strict';

  // layout mode class
  function LayoutMode( isotope ) {
    this.isotope = isotope;
    // link properties
    if ( isotope ) {
      this.options = isotope.options[ this.namespace ];
      this.element = isotope.element;
      this.items = isotope.filteredItems;
      this.size = isotope.size;
    }
  }

  var proto = LayoutMode.prototype;

  /**
   * some methods should just defer to default Outlayer method
   * and reference the Isotope instance as `this`
  **/
  var facadeMethods = [
    '_resetLayout',
    '_getItemLayoutPosition',
    '_manageStamp',
    '_getContainerSize',
    '_getElementOffset',
    'needsResizeLayout',
    '_getOption'
  ];

  facadeMethods.forEach( function( methodName ) {
    proto[ methodName ] = function() {
      return Outlayer.prototype[ methodName ].apply( this.isotope, arguments );
    };
  });

  // -----  ----- //

  // for horizontal layout modes, check vertical size
  proto.needsVerticalResizeLayout = function() {
    // don't trigger if size did not change
    var size = getSize( this.isotope.element );
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var hasSizes = this.isotope.size && size;
    return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
  };

  // ----- measurements ----- //

  proto._getMeasurement = function() {
    this.isotope._getMeasurement.apply( this, arguments );
  };

  proto.getColumnWidth = function() {
    this.getSegmentSize( 'column', 'Width' );
  };

  proto.getRowHeight = function() {
    this.getSegmentSize( 'row', 'Height' );
  };

  /**
   * get columnWidth or rowHeight
   * segment: 'column' or 'row'
   * size 'Width' or 'Height'
  **/
  proto.getSegmentSize = function( segment, size ) {
    var segmentName = segment + size;
    var outerSize = 'outer' + size;
    // columnWidth / outerWidth // rowHeight / outerHeight
    this._getMeasurement( segmentName, outerSize );
    // got rowHeight or columnWidth, we can chill
    if ( this[ segmentName ] ) {
      return;
    }
    // fall back to item of first element
    var firstItemSize = this.getFirstItemSize();
    this[ segmentName ] = firstItemSize && firstItemSize[ outerSize ] ||
      // or size of container
      this.isotope.size[ 'inner' + size ];
  };

  proto.getFirstItemSize = function() {
    var firstItem = this.isotope.filteredItems[0];
    return firstItem && firstItem.element && getSize( firstItem.element );
  };

  // ----- methods that should reference isotope ----- //

  proto.layout = function() {
    this.isotope.layout.apply( this.isotope, arguments );
  };

  proto.getSize = function() {
    this.isotope.getSize();
    this.size = this.isotope.size;
  };

  // -------------------------- create -------------------------- //

  LayoutMode.modes = {};

  LayoutMode.create = function( namespace, options ) {

    function Mode() {
      LayoutMode.apply( this, arguments );
    }

    Mode.prototype = Object.create( proto );
    Mode.prototype.constructor = Mode;

    // default options
    if ( options ) {
      Mode.options = options;
    }

    Mode.prototype.namespace = namespace;
    // register in Isotope
    LayoutMode.modes[ namespace ] = Mode;

    return Mode;
  };

  return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'masonry-layout/masonry',[
        'outlayer/outlayer',
        'get-size/get-size'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('outlayer'),
      require('get-size')
    );
  } else {
    // browser global
    window.Masonry = factory(
      window.Outlayer,
      window.getSize
    );
  }

}( window, function factory( Outlayer, getSize ) {



// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/masonry',[
        '../layout-mode',
        'masonry-layout/masonry'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode'),
      require('masonry-layout')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode,
      window.Masonry
    );
  }

}( window, function factory( LayoutMode, Masonry ) {
'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var MasonryMode = LayoutMode.create('masonry');

  var proto = MasonryMode.prototype;

  var keepModeMethods = {
    _getElementOffset: true,
    layout: true,
    _getMeasurement: true
  };

  // inherit Masonry prototype
  for ( var method in Masonry.prototype ) {
    // do not inherit mode methods
    if ( !keepModeMethods[ method ] ) {
      proto[ method ] = Masonry.prototype[ method ];
    }
  }

  var measureColumns = proto.measureColumns;
  proto.measureColumns = function() {
    // set items, used if measuring first item
    this.items = this.isotope.filteredItems;
    measureColumns.call( this );
  };

  // point to mode options for fitWidth
  var _getOption = proto._getOption;
  proto._getOption = function( option ) {
    if ( option == 'fitWidth' ) {
      return this.options.isFitWidth !== undefined ?
        this.options.isFitWidth : this.options.fitWidth;
    }
    return _getOption.apply( this.isotope, arguments );
  };

  return MasonryMode;

}));

/**
 * fitRows layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/fit-rows',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof exports == 'object' ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var FitRows = LayoutMode.create('fitRows');

var proto = FitRows.prototype;

proto._resetLayout = function() {
  this.x = 0;
  this.y = 0;
  this.maxY = 0;
  this._getMeasurement( 'gutter', 'outerWidth' );
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();

  var itemWidth = item.size.outerWidth + this.gutter;
  // if this element cannot fit in the current row
  var containerWidth = this.isotope.size.innerWidth + this.gutter;
  if ( this.x !== 0 && itemWidth + this.x > containerWidth ) {
    this.x = 0;
    this.y = this.maxY;
  }

  var position = {
    x: this.x,
    y: this.y
  };

  this.maxY = Math.max( this.maxY, this.y + item.size.outerHeight );
  this.x += itemWidth;

  return position;
};

proto._getContainerSize = function() {
  return { height: this.maxY };
};

return FitRows;

}));

/**
 * vertical layout mode
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'isotope-layout/js/layout-modes/vertical',[
        '../layout-mode'
      ],
      factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('../layout-mode')
    );
  } else {
    // browser global
    factory(
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( LayoutMode ) {
'use strict';

var Vertical = LayoutMode.create( 'vertical', {
  horizontalAlignment: 0
});

var proto = Vertical.prototype;

proto._resetLayout = function() {
  this.y = 0;
};

proto._getItemLayoutPosition = function( item ) {
  item.getSize();
  var x = ( this.isotope.size.innerWidth - item.size.outerWidth ) *
    this.options.horizontalAlignment;
  var y = this.y;
  this.y += item.size.outerHeight;
  return { x: x, y: y };
};

proto._getContainerSize = function() {
  return { height: this.y };
};

return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
        'outlayer/outlayer',
        'get-size/get-size',
        'desandro-matches-selector/matches-selector',
        'fizzy-ui-utils/utils',
        'isotope-layout/js/item',
        'isotope-layout/js/layout-mode',
        // include default layout modes
        'isotope-layout/js/layout-modes/masonry',
        'isotope-layout/js/layout-modes/fit-rows',
        'isotope-layout/js/layout-modes/vertical'
      ],
      function( Outlayer, getSize, matchesSelector, utils, Item, LayoutMode ) {
        return factory( window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode );
      });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('outlayer'),
      require('get-size'),
      require('desandro-matches-selector'),
      require('fizzy-ui-utils'),
      require('isotope-layout/js/item'),
      require('isotope-layout/js/layout-mode'),
      // include default layout modes
      require('isotope-layout/js/layout-modes/masonry'),
      require('isotope-layout/js/layout-modes/fit-rows'),
      require('isotope-layout/js/layout-modes/vertical')
    );
  } else {
    // browser global
    window.Isotope = factory(
      window,
      window.Outlayer,
      window.getSize,
      window.matchesSelector,
      window.fizzyUIUtils,
      window.Isotope.Item,
      window.Isotope.LayoutMode
    );
  }

}( window, function factory( window, Outlayer, getSize, matchesSelector, utils,
  Item, LayoutMode ) {



// -------------------------- vars -------------------------- //

var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

var trim = String.prototype.trim ?
  function( str ) {
    return str.trim();
  } :
  function( str ) {
    return str.replace( /^\s+|\s+$/g, '' );
  };

// -------------------------- isotopeDefinition -------------------------- //

  // create an Outlayer layout class
  var Isotope = Outlayer.create( 'isotope', {
    layoutMode: 'masonry',
    isJQueryFiltering: true,
    sortAscending: true
  });

  Isotope.Item = Item;
  Isotope.LayoutMode = LayoutMode;

  var proto = Isotope.prototype;

  proto._create = function() {
    this.itemGUID = 0;
    // functions that sort items
    this._sorters = {};
    this._getSorters();
    // call super
    Outlayer.prototype._create.call( this );

    // create layout modes
    this.modes = {};
    // start filteredItems with all items
    this.filteredItems = this.items;
    // keep of track of sortBys
    this.sortHistory = [ 'original-order' ];
    // create from registered layout modes
    for ( var name in LayoutMode.modes ) {
      this._initLayoutMode( name );
    }
  };

  proto.reloadItems = function() {
    // reset item ID counter
    this.itemGUID = 0;
    // call super
    Outlayer.prototype.reloadItems.call( this );
  };

  proto._itemize = function() {
    var items = Outlayer.prototype._itemize.apply( this, arguments );
    // assign ID for original-order
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      item.id = this.itemGUID++;
    }
    this._updateItemsSortData( items );
    return items;
  };


  // -------------------------- layout -------------------------- //

  proto._initLayoutMode = function( name ) {
    var Mode = LayoutMode.modes[ name ];
    // set mode options
    // HACK extend initial options, back-fill in default options
    var initialOpts = this.options[ name ] || {};
    this.options[ name ] = Mode.options ?
      utils.extend( Mode.options, initialOpts ) : initialOpts;
    // init layout mode instance
    this.modes[ name ] = new Mode( this );
  };


  proto.layout = function() {
    // if first time doing layout, do all magic
    if ( !this._isLayoutInited && this._getOption('initLayout') ) {
      this.arrange();
      return;
    }
    this._layout();
  };

  // private method to be used in layout() & magic()
  proto._layout = function() {
    // don't animate first layout
    var isInstant = this._getIsInstant();
    // layout flow
    this._resetLayout();
    this._manageStamps();
    this.layoutItems( this.filteredItems, isInstant );

    // flag for initalized
    this._isLayoutInited = true;
  };

  // filter + sort + layout
  proto.arrange = function( opts ) {
    // set any options pass
    this.option( opts );
    this._getIsInstant();
    // filter, sort, and layout

    // filter
    var filtered = this._filter( this.items );
    this.filteredItems = filtered.matches;

    this._bindArrangeComplete();

    if ( this._isInstant ) {
      this._noTransition( this._hideReveal, [ filtered ] );
    } else {
      this._hideReveal( filtered );
    }

    this._sort();
    this._layout();
  };
  // alias to _init for main plugin method
  proto._init = proto.arrange;

  proto._hideReveal = function( filtered ) {
    this.reveal( filtered.needReveal );
    this.hide( filtered.needHide );
  };

  // HACK
  // Don't animate/transition first layout
  // Or don't animate/transition other layouts
  proto._getIsInstant = function() {
    var isLayoutInstant = this._getOption('layoutInstant');
    var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
      !this._isLayoutInited;
    this._isInstant = isInstant;
    return isInstant;
  };

  // listen for layoutComplete, hideComplete and revealComplete
  // to trigger arrangeComplete
  proto._bindArrangeComplete = function() {
    // listen for 3 events to trigger arrangeComplete
    var isLayoutComplete, isHideComplete, isRevealComplete;
    var _this = this;
    function arrangeParallelCallback() {
      if ( isLayoutComplete && isHideComplete && isRevealComplete ) {
        _this.dispatchEvent( 'arrangeComplete', null, [ _this.filteredItems ] );
      }
    }
    this.once( 'layoutComplete', function() {
      isLayoutComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'hideComplete', function() {
      isHideComplete = true;
      arrangeParallelCallback();
    });
    this.once( 'revealComplete', function() {
      isRevealComplete = true;
      arrangeParallelCallback();
    });
  };

  // -------------------------- filter -------------------------- //

  proto._filter = function( items ) {
    var filter = this.options.filter;
    filter = filter || '*';
    var matches = [];
    var hiddenMatched = [];
    var visibleUnmatched = [];

    var test = this._getFilterTest( filter );

    // test each item
    for ( var i=0; i < items.length; i++ ) {
      var item = items[i];
      if ( item.isIgnored ) {
        continue;
      }
      // add item to either matched or unmatched group
      var isMatched = test( item );
      // item.isFilterMatched = isMatched;
      // add to matches if its a match
      if ( isMatched ) {
        matches.push( item );
      }
      // add to additional group if item needs to be hidden or revealed
      if ( isMatched && item.isHidden ) {
        hiddenMatched.push( item );
      } else if ( !isMatched && !item.isHidden ) {
        visibleUnmatched.push( item );
      }
    }

    // return collections of items to be manipulated
    return {
      matches: matches,
      needReveal: hiddenMatched,
      needHide: visibleUnmatched
    };
  };

  // get a jQuery, function, or a matchesSelector test given the filter
  proto._getFilterTest = function( filter ) {
    if ( jQuery && this.options.isJQueryFiltering ) {
      // use jQuery
      return function( item ) {
        return jQuery( item.element ).is( filter );
      };
    }
    if ( typeof filter == 'function' ) {
      // use filter as function
      return function( item ) {
        return filter( item.element );
      };
    }
    // default, use filter as selector string
    return function( item ) {
      return matchesSelector( item.element, filter );
    };
  };

  // -------------------------- sorting -------------------------- //

  /**
   * @params {Array} elems
   * @public
   */
  proto.updateSortData = function( elems ) {
    // get items
    var items;
    if ( elems ) {
      elems = utils.makeArray( elems );
      items = this.getItems( elems );
    } else {
      // update all items if no elems provided
      items = this.items;
    }

    this._getSorters();
    this._updateItemsSortData( items );
  };

  proto._getSorters = function() {
    var getSortData = this.options.getSortData;
    for ( var key in getSortData ) {
      var sorter = getSortData[ key ];
      this._sorters[ key ] = mungeSorter( sorter );
    }
  };

  /**
   * @params {Array} items - of Isotope.Items
   * @private
   */
  proto._updateItemsSortData = function( items ) {
    // do not update if no items
    var len = items && items.length;

    for ( var i=0; len && i < len; i++ ) {
      var item = items[i];
      item.updateSortData();
    }
  };

  // ----- munge sorter ----- //

  // encapsulate this, as we just need mungeSorter
  // other functions in here are just for munging
  var mungeSorter = ( function() {
    // add a magic layer to sorters for convienent shorthands
    // `.foo-bar` will use the text of .foo-bar querySelector
    // `[foo-bar]` will use attribute
    // you can also add parser
    // `.foo-bar parseInt` will parse that as a number
    function mungeSorter( sorter ) {
      // if not a string, return function or whatever it is
      if ( typeof sorter != 'string' ) {
        return sorter;
      }
      // parse the sorter string
      var args = trim( sorter ).split(' ');
      var query = args[0];
      // check if query looks like [an-attribute]
      var attrMatch = query.match( /^\[(.+)\]$/ );
      var attr = attrMatch && attrMatch[1];
      var getValue = getValueGetter( attr, query );
      // use second argument as a parser
      var parser = Isotope.sortDataParsers[ args[1] ];
      // parse the value, if there was a parser
      sorter = parser ? function( elem ) {
        return elem && parser( getValue( elem ) );
      } :
      // otherwise just return value
      function( elem ) {
        return elem && getValue( elem );
      };

      return sorter;
    }

    // get an attribute getter, or get text of the querySelector
    function getValueGetter( attr, query ) {
      // if query looks like [foo-bar], get attribute
      if ( attr ) {
        return function getAttribute( elem ) {
          return elem.getAttribute( attr );
        };
      }

      // otherwise, assume its a querySelector, and get its text
      return function getChildText( elem ) {
        var child = elem.querySelector( query );
        return child && child.textContent;
      };
    }

    return mungeSorter;
  })();

  // parsers used in getSortData shortcut strings
  Isotope.sortDataParsers = {
    'parseInt': function( val ) {
      return parseInt( val, 10 );
    },
    'parseFloat': function( val ) {
      return parseFloat( val );
    }
  };

  // ----- sort method ----- //

  // sort filteredItem order
  proto._sort = function() {
    if ( !this.options.sortBy ) {
      return;
    }
    // keep track of sortBy History
    var sortBys = utils.makeArray( this.options.sortBy );
    if ( !this._getIsSameSortBy( sortBys ) ) {
      // concat all sortBy and sortHistory, add to front, oldest goes in last
      this.sortHistory = sortBys.concat( this.sortHistory );
    }
    // sort magic
    var itemSorter = getItemSorter( this.sortHistory, this.options.sortAscending );
    this.filteredItems.sort( itemSorter );
  };

  // check if sortBys is same as start of sortHistory
  proto._getIsSameSortBy = function( sortBys ) {
    for ( var i=0; i < sortBys.length; i++ ) {
      if ( sortBys[i] != this.sortHistory[i] ) {
        return false;
      }
    }
    return true;
  };

  // returns a function used for sorting
  function getItemSorter( sortBys, sortAsc ) {
    return function sorter( itemA, itemB ) {
      // cycle through all sortKeys
      for ( var i = 0; i < sortBys.length; i++ ) {
        var sortBy = sortBys[i];
        var a = itemA.sortData[ sortBy ];
        var b = itemB.sortData[ sortBy ];
        if ( a > b || a < b ) {
          // if sortAsc is an object, use the value given the sortBy key
          var isAscending = sortAsc[ sortBy ] !== undefined ? sortAsc[ sortBy ] : sortAsc;
          var direction = isAscending ? 1 : -1;
          return ( a > b ? 1 : -1 ) * direction;
        }
      }
      return 0;
    };
  }

  // -------------------------- methods -------------------------- //

  // get layout mode
  proto._mode = function() {
    var layoutMode = this.options.layoutMode;
    var mode = this.modes[ layoutMode ];
    if ( !mode ) {
      // TODO console.error
      throw new Error( 'No layout mode: ' + layoutMode );
    }
    // HACK sync mode's options
    // any options set after init for layout mode need to be synced
    mode.options = this.options[ layoutMode ];
    return mode;
  };

  proto._resetLayout = function() {
    // trigger original reset layout
    Outlayer.prototype._resetLayout.call( this );
    this._mode()._resetLayout();
  };

  proto._getItemLayoutPosition = function( item  ) {
    return this._mode()._getItemLayoutPosition( item );
  };

  proto._manageStamp = function( stamp ) {
    this._mode()._manageStamp( stamp );
  };

  proto._getContainerSize = function() {
    return this._mode()._getContainerSize();
  };

  proto.needsResizeLayout = function() {
    return this._mode().needsResizeLayout();
  };

  // -------------------------- adding & removing -------------------------- //

  // HEADS UP overwrites default Outlayer appended
  proto.appended = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // add to filteredItems
    this.filteredItems = this.filteredItems.concat( filteredItems );
  };

  // HEADS UP overwrites default Outlayer prepended
  proto.prepended = function( elems ) {
    var items = this._itemize( elems );
    if ( !items.length ) {
      return;
    }
    // start new layout
    this._resetLayout();
    this._manageStamps();
    // filter, layout, reveal new items
    var filteredItems = this._filterRevealAdded( items );
    // layout previous items
    this.layoutItems( this.filteredItems );
    // add to items and filteredItems
    this.filteredItems = filteredItems.concat( this.filteredItems );
    this.items = items.concat( this.items );
  };

  proto._filterRevealAdded = function( items ) {
    var filtered = this._filter( items );
    this.hide( filtered.needHide );
    // reveal all new items
    this.reveal( filtered.matches );
    // layout new items, no transition
    this.layoutItems( filtered.matches, true );
    return filtered.matches;
  };

  /**
   * Filter, sort, and layout newly-appended item elements
   * @param {Array or NodeList or Element} elems
   */
  proto.insert = function( elems ) {
    var items = this.addItems( elems );
    if ( !items.length ) {
      return;
    }
    // append item elements
    var i, item;
    var len = items.length;
    for ( i=0; i < len; i++ ) {
      item = items[i];
      this.element.appendChild( item.element );
    }
    // filter new stuff
    var filteredInsertItems = this._filter( items ).matches;
    // set flag
    for ( i=0; i < len; i++ ) {
      items[i].isLayoutInstant = true;
    }
    this.arrange();
    // reset flag
    for ( i=0; i < len; i++ ) {
      delete items[i].isLayoutInstant;
    }
    this.reveal( filteredInsertItems );
  };

  var _remove = proto.remove;
  proto.remove = function( elems ) {
    elems = utils.makeArray( elems );
    var removeItems = this.getItems( elems );
    // do regular thing
    _remove.call( this, elems );
    // bail if no items to remove
    var len = removeItems && removeItems.length;
    // remove elems from filteredItems
    for ( var i=0; len && i < len; i++ ) {
      var item = removeItems[i];
      // remove item from collection
      utils.removeFrom( this.filteredItems, item );
    }
  };

  proto.shuffle = function() {
    // update random sortData
    for ( var i=0; i < this.items.length; i++ ) {
      var item = this.items[i];
      item.sortData.random = Math.random();
    }
    this.options.sortBy = 'random';
    this._sort();
    this._layout();
  };

  /**
   * trigger fn without transition
   * kind of hacky to have this in the first place
   * @param {Function} fn
   * @param {Array} args
   * @returns ret
   * @private
   */
  proto._noTransition = function( fn, args ) {
    // save transitionDuration before disabling
    var transitionDuration = this.options.transitionDuration;
    // disable transition
    this.options.transitionDuration = 0;
    // do it
    var returnValue = fn.apply( this, args );
    // re-enable transition for reveal
    this.options.transitionDuration = transitionDuration;
    return returnValue;
  };

  // ----- helper methods ----- //

  /**
   * getter method for getting filtered item elements
   * @returns {Array} elems - collection of item elements
   */
  proto.getFilteredItemElements = function() {
    return this.filteredItems.map( function( item ) {
      return item.element;
    });
  };

  // -----  ----- //

  return Isotope;

}));



(function($){$.belowthefold=function(element,settings){var fold=$(window).height()+$(window).scrollTop();return fold<=$(element).offset().top-settings.threshold;};$.abovethetop=function(element,settings){var top=$(window).scrollTop();return top>=$(element).offset().top+$(element).height()-settings.threshold;};$.rightofscreen=function(element,settings){var fold=$(window).width()+$(window).scrollLeft();return fold<=$(element).offset().left-settings.threshold;};$.leftofscreen=function(element,settings){var left=$(window).scrollLeft();return left>=$(element).offset().left+$(element).width()-settings.threshold;};$.inviewport=function(element,settings){return!$.rightofscreen(element,settings)&&!$.leftofscreen(element,settings)&&!$.belowthefold(element,settings)&&!$.abovethetop(element,settings);};$.extend($.expr[':'],{"below-the-fold":function(a,i,m){return $.belowthefold(a,{threshold:0});},"above-the-top":function(a,i,m){return $.abovethetop(a,{threshold:0});},"left-of-screen":function(a,i,m){return $.leftofscreen(a,{threshold:0});},"right-of-screen":function(a,i,m){return $.rightofscreen(a,{threshold:0});},"in-viewport":function(a,i,m){return $.inviewport(a,{threshold:0});}});})(jQuery);
/*
 * On the head set the plugin's name, version, author details and license
 * for example, for example:
 *
 * ------------------------------------------------------------------------
 *
 * jquery-plugin.js Version 0.1
 * jQuery Plugin Boilerplate code helps creating your custom jQuery plugins.
 *
 * Licensed under MIT license
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2013 Antonio Santiago
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

(function ($, window, document, undefined) {

    var namespace = 'e11';

    if (!$[namespace]) {
        $[namespace] = {};
    }

    if (!$[namespace].fn) {
        $[namespace].fn = {};
    }

    $[namespace].fn.pluginGenerator = function (Plugin) {

        $[namespace].fn[Plugin.prototype.name] = function (options) {
            var args = arguments;

            if (options === undefined || typeof options === 'object') {
                // Creates a new plugin instance, for each selected element, and
                // stores a reference withint the element's data
                return this.each(function (i) {
                    if (!$.data(this, namespace + '_' + Plugin.prototype.name)) {
                        $.data(this, namespace + '_' + Plugin.prototype.name, new Plugin(this, i, options));
                    }
                });
            } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
                // Call a public pluguin method (not starting with an underscore) for each
                // selected element.
                if (Array.prototype.slice.call(args, 1).length === 0 && $.inArray(options, $[namespace].fn[Plugin.prototype.name].getters) !== -1) {
                    // If the user does not pass any arguments and the method allows to
                    // work as a getter then break the chainability so we can return a value
                    // instead the element reference.
                    var instance = $.data(this[0], namespace + '_' + Plugin.prototype.name);
                    return instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                } else {
                    // Invoke the speficied method on each selected element
                    return this.each(function () {
                        var instance = $.data(this, namespace + '_' + Plugin.prototype.name);
                        if (instance instanceof Plugin && typeof instance[options] === 'function') {
                            var removeData = function() {
                                instance.$el
                                    .removeData(namespace + '_' + Plugin.prototype.name);
                            };
                            if (options === 'destroy') {
                                if (instance.destroy && typeof instance.destroy === 'function') {
                                    instance.destroy.call(instance, removeData);
                                } else {
                                    removeData();
                                }

                            } else {
                                instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                            }
                        }
                    });
                }
            }
        };

        $[namespace].fn[Plugin.prototype.name].getters = [];

        $.fn[namespace + '_' + Plugin.prototype.name] = function (options) {
            $[namespace].fn[Plugin.prototype.name].apply(this, arguments);
        };

    };

})(jQuery, window, document);

/*! Select2 4.0.8 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(d){var e=function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd)var e=d.fn.select2.amd;var t,n,i,h,o,s,f,g,m,v,y,_,r,a,w,l;function b(e,t){return r.call(e,t)}function c(e,t){var n,i,r,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(r=(r=f[h.slice(0,d).join("/")])&&r[i]){o=r,a=u;break}if(o)break;!l&&g&&g[i]&&(l=g[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function S(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function D(e){return e?u(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},r=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,i=u(e),r=i[0],o=t[1];return e=i[1],r&&(n=S(r=c(r,o))),r?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return c(e,t)}}(o)):c(e,o):(r=(i=u(e=c(e,o)))[0],e=i[1],r&&(n=S(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,i){var r,o,s,a,l,c,u,d=[],p=typeof n;if(c=D(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)r=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=S(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(i,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(r&&r.exports!==h&&r.exports!==m[e]?m[e]=r.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,i,r){if("string"==typeof e)return g[e]?g[e](t):S(f(e,D(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=r),i?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=d||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var r={};function u(e){var t=e.prototype,n=[];for(var i in t){"function"==typeof t[i]&&"constructor"!==i&&n.push(i)}return n}r.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r.Decorate=function(i,r){var e=u(r),t=u(i);function o(){var e=Array.prototype.unshift,t=r.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=r.prototype.constructor),n.apply(this,arguments)}r.displayName=i.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=i.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=r.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},r.Observable=e,r.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},r.bind=function(e,t){return function(){e.apply(t,arguments)}},r._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},r.hasScroll=function(e,t){var n=o(t),i=t.style.overflowX,r=t.style.overflowY;return(i!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===i||"scroll"===r||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},r.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},r.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},r.__cache={};var n=0;return r.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},r.StoreData=function(e,t,n){var i=r.GetUniqueElementId(e);r.__cache[i]||(r.__cache[i]={}),r.__cache[i][t]=n},r.GetData=function(e,t){var n=r.GetUniqueElementId(e);return t?r.__cache[n]&&null!=r.__cache[n][t]?r.__cache[n][t]:o(e).data(t):r.__cache[n]},r.RemoveData=function(e){var t=r.GetUniqueElementId(e);null!=r.__cache[t]&&delete r.__cache[t]},r}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var r in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[r];t.setAttribute(r,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var r=t.eq(i);r.trigger("mouseenter");var o=l.$results.offset().top,s=r.offset().top,a=l.$results.scrollTop()+(s-o);0===i?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var r=l.$results.offset().top+l.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),s=l.$results.scrollTop()+o-r;0===n?l.$results.scrollTop(0):r<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,r=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),r=n(e,t);null==r?t.style.display="none":"string"==typeof r?t.innerHTML=i(r):h(t).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,r){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return i.Extend(o,i.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e},o.prototype.bind=function(e,t){var n=this,i=(e.id,e.id+"-results");this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===r.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex)}),e.on("disable",function(){n.$selection.attr("tabindex","-1")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){n(this);this!=t[0]&&i.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(t,e){var n=this;r.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i),n.attr("title",t.title||t.text)}else this.clear()},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(r,e,a){function n(e,t){n.__super__.constructor.apply(this,arguments)}return a.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.options.get("disabled")){var t=r(this).parent(),n=a.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=this.selectionContainer(),o=this.display(i,r);r.append(o),r.attr("title",i.title||i.text),a.StoreData(r[0],"data",i),t.push(r)}var s=this.$selection.find(".select2-selection__rendered");a.appendMany(s,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(r,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),r=this.$element.val();this.$element.val(this.placeholder.id);var o={data:i};if(this.trigger("clear",o),o.prevented)this.$element.val(r);else{for(var s=0;s<i.length;s++)if(o={data:i[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(r);this.$element.trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=r('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,s,a){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){i.$search.attr("aria-activedescendant",e.id)}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===a.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=s.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}});var r=document.documentMode,o=r&&r<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(o&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=a.SHIFT&&t!=a.CTRL&&t!=a.ALT&&t!=a.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").innerWidth():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,r)){t=t||{};var n=s.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(r){var o=this;if(r.selected=!0,l(r.element).is("option"))return r.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(r=[r]).push.apply(r,e);for(var n=0;n<r.length;n++){var i=r[n].id;-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")});else{var e=r.id;this.$element.val(e),this.$element.trigger("change")}},n.prototype.unselect=function(r){var o=this;if(this.$element.prop("multiple")){if(r.selected=!1,l(r.element).is("option"))return r.element.selected=!1,void this.$element.trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==r.id&&-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var r=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(i,t);null!==n&&r.push(n)}}),e({results:r})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],r=0;r<n.length;r++){var o=l(n[r]),s=this.item(o);i.push(s)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){var n=t.get("data")||[];i.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return f.Extend(i,e),i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),r=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,i)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}r.push(p)}}return r},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var i=o.ajax(e);return i.then(t),i.fail(n),i}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var r=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=r.processResults(e,n);r.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,r=0;r<i.length;r++){var o=i[r],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,function(e){var t=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=i.option(t);n.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([n])}!function(e){i.trigger("select",{data:e})}(t)});r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.trigger("focus")),t.term=r.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var r=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,r)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(i(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.query=function(n,i,r){var o=this;this.current(function(e){var t=null!=e?e.length:0;0<o.maximumSelectionLength&&t>=o.maximumSelectionLength?o.trigger("results:message",{message:"maximumSelected",args:{maximum:o.maximumSelectionLength}}):n.call(o,i,r)})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(r,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=n.get("dropdownParent")||f(document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this,r=!1;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),r||(r=!0,t.on("results:all",function(){i._positionDropdown(),i._resizeDropdown()}),t.on("results:append",function(){i._positionDropdown(),i._resizeDropdown()}))}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,r="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+r+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+r)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<r.top-s,u=l>r.bottom+s,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h=p.offset();d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=o.top-h.top-s),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var r=o.GetData(i[0],"data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(f,g,m,v,y,_,w,$,b,A,x,t,S,D,C,E,O,q,T,j,L,k,I,P,M,R,U,z,e){function n(){this.reset()}return n.prototype.apply=function(t){if(null==(t=f.extend(!0,{},this.defaults,t)).dataAdapter){if(null!=t.ajax?t.dataAdapter=C:null!=t.data?t.dataAdapter=D:t.dataAdapter=S,0<t.minimumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,q)),0<t.maximumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,T)),0<t.maximumSelectionLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,j)),t.tags&&(t.dataAdapter=A.Decorate(t.dataAdapter,E)),null==t.tokenSeparators&&null==t.tokenizer||(t.dataAdapter=A.Decorate(t.dataAdapter,O)),null!=t.query){var e=g(t.amdBase+"compat/query");t.dataAdapter=A.Decorate(t.dataAdapter,e)}if(null!=t.initSelection){var n=g(t.amdBase+"compat/initSelection");t.dataAdapter=A.Decorate(t.dataAdapter,n)}}if(null==t.resultsAdapter&&(t.resultsAdapter=m,null!=t.ajax&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,P)),null!=t.placeholder&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,I)),t.selectOnClose&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,U))),null==t.dropdownAdapter){if(t.multiple)t.dropdownAdapter=L;else{var i=A.Decorate(L,k);t.dropdownAdapter=i}if(0!==t.minimumResultsForSearch&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,R)),t.closeOnSelect&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,z)),null!=t.dropdownCssClass||null!=t.dropdownCss||null!=t.adaptDropdownCssClass){var r=g(t.amdBase+"compat/dropdownCss");t.dropdownAdapter=A.Decorate(t.dropdownAdapter,r)}t.dropdownAdapter=A.Decorate(t.dropdownAdapter,M)}if(null==t.selectionAdapter){if(t.multiple?t.selectionAdapter=y:t.selectionAdapter=v,null!=t.placeholder&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,_)),t.allowClear&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,w)),t.multiple&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,$)),null!=t.containerCssClass||null!=t.containerCss||null!=t.adaptContainerCssClass){var o=g(t.amdBase+"compat/containerCss");t.selectionAdapter=A.Decorate(t.selectionAdapter,o)}t.selectionAdapter=A.Decorate(t.selectionAdapter,b)}if("string"==typeof t.language)if(0<t.language.indexOf("-")){var s=t.language.split("-")[0];t.language=[t.language,s]}else t.language=[t.language];if(f.isArray(t.language)){var a=new x;t.language.push("en");for(var l=t.language,c=0;c<l.length;c++){var u=l[c],d={};try{d=x.loadPath(u)}catch(e){try{u=this.defaults.amdLanguageBase+u,d=x.loadPath(u)}catch(e){t.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+u+'" could not be automatically loaded. A fallback will be used instead.');continue}}a.extend(d)}t.translations=a}else{var p=x.loadPath(this.defaults.amdLanguageBase+"en"),h=new x(t.language);h.extend(p),t.translations=h}return t},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:A.escapeMarkup,language:e,matcher:function e(t,n){if(""===f.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=f.extend(!0,{},n),r=n.children.length-1;0<=r;r--)null==e(t,n.children[r])&&i.children.splice(r,1);return 0<i.children.length?i:e(t,i)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.set=function(e,t){var n={};n[f.camelCase(e)]=t;var i=A._convertData(n);f.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,r,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),this.options=r.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var r=0;r<e[0].attributes.length;r++){var o=e[0].attributes[r].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(r,c,u,i){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var i=this.options.get("dataAdapter");this.dataAdapter=new i(e,this.options);var r=this.render();this._placeContainer(r);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,r);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,r);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){r.each(e,t._syncA),r.each(e,t._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===r.inArray(e,i)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._syncSubtree=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var r=0;r<t.addedNodes.length;r++){t.addedNodes[r].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})}},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var r=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,r,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.trigger("query",{})},d.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];r.isArray(t)&&(t=r.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("select2/compat/utils",["jquery"],function(s){return{syncCssClasses:function(e,t,n){var i,r,o=[];(i=s.trim(e.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&o.push(this)}),(i=s.trim(t.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=n(this))&&o.push(r)}),e.attr("class",o.join(" "))}}}),e.define("select2/compat/containerCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("containerCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptContainerCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("containerCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/dropdownCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("dropdownCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptDropdownCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("dropdownCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/initSelection",["jquery"],function(i){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return e.prototype.current=function(e,t){var n=this;this._isInitialized?e.call(this,t):this.initSelection.call(null,this.$element,function(e){n._isInitialized=!0,i.isArray(e)||(e=[e]),t(e)})},e}),e.define("select2/compat/inputData",["jquery","../utils"],function(s,i){function e(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return e.prototype.current=function(e,t){function i(e,t){var n=[];return e.selected||-1!==s.inArray(e.id,t)?(e.selected=!0,n.push(e)):e.selected=!1,e.children&&n.push.apply(n,i(e.children,t)),n}for(var n=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r];n.push.apply(n,i(o,this.$element.val().split(this._valueSeparator)))}t(n)},e.prototype.select=function(e,t){if(this.options.get("multiple")){var n=this.$element.val();n+=this._valueSeparator+t.id,this.$element.val(n),this.$element.trigger("change")}else this.current(function(e){s.map(e,function(e){e.selected=!1})}),this.$element.val(t.id),this.$element.trigger("change")},e.prototype.unselect=function(e,r){var o=this;r.selected=!1,this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];r.id!=i.id&&t.push(i.id)}o.$element.val(t.join(o._valueSeparator)),o.$element.trigger("change")})},e.prototype.query=function(e,t,n){for(var i=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r],s=this.matches(t,o);null!==s&&i.push(s)}n({results:i})},e.prototype.addOptions=function(e,t){var n=s.map(t,function(e){return i.GetData(e[0],"data")});this._currentData.push.apply(this._currentData,n)},e}),e.define("select2/compat/matcher",["jquery"],function(s){return function(o){return function(e,t){var n=s.extend(!0,{},t);if(null==e.term||""===s.trim(e.term))return n;if(t.children){for(var i=t.children.length-1;0<=i;i--){var r=t.children[i];o(e.term,r.text,r)||n.children.splice(i,1)}if(0<n.children.length)return n}return o(e.term,t.text,t)?n:null}}}),e.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),e.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),e.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),e.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),l=function(p){var h,f,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(p.event.fixHooks)for(var n=e.length;n;)p.event.fixHooks[e[--n]]=p.event.mouseHooks;var m=p.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;p.data(this,"mousewheel-line-height",m.getLineHeight(this)),p.data(this,"mousewheel-page-height",m.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;p.removeData(this,"mousewheel-line-height"),p.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=p(e),n=t["offsetParent"in p.fn?"offsetParent":"parent"]();return n.length||(n=p("body")),parseInt(n.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return p(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=g.call(arguments,1),r=0,o=0,s=0,a=0,l=0;if((e=p.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*s,s=0),r=0===s?o:s,"deltaY"in n&&(r=s=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===s&&(r=-1*o)),0!==s||0!==o){if(1===n.deltaMode){var c=p.data(this,"mousewheel-line-height");r*=c,s*=c,o*=c}else if(2===n.deltaMode){var u=p.data(this,"mousewheel-page-height");r*=u,s*=u,o*=u}if(t=Math.max(Math.abs(s),Math.abs(o)),(!f||t<f)&&y(n,f=t)&&(f/=40),y(n,t)&&(r/=40,o/=40,s/=40),r=Math[1<=r?"floor":"ceil"](r/f),o=Math[1<=o?"floor":"ceil"](o/f),s=Math[1<=s?"floor":"ceil"](s/f),m.settings.normalizeOffset&&this.getBoundingClientRect){var d=this.getBoundingClientRect();a=e.clientX-d.left,l=e.clientY-d.top}return e.deltaX=o,e.deltaY=s,e.deltaFactor=f,e.offsetX=a,e.offsetY=l,e.deltaMode=0,i.unshift(e,r,o,s),h&&clearTimeout(h),h=setTimeout(v,200),(p.event.dispatch||p.event.handle).apply(this,i)}}function v(){f=null}function y(e,t){return m.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}p.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof e.define&&e.define.amd?e.define("jquery-mousewheel",["jquery"],l):"object"==typeof exports?module.exports=l:l(d),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(r,e,o,t,s){if(null==r.fn.select2){var a=["open","close","destroy"];r.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=r.extend(!0,{},t);new o(r(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<r.inArray(t,a)?this:n}}return null==r.fn.select2.defaults&&(r.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return d.fn.select2.amd=e,t});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
            (factory((global.SpriteSpin = {})));
}(this, (function (exports) { 'use strict';

    /**
     * @internal
     */
    var Api = /** @class */ (function () {
        function Api(data) {
            this.data = data;
        }
        return Api;
    }());
    /**
     * Adds methods to the SpriteSpin api
     *
     * @public
     */
    function extendApi(methods) {
        var api = Api.prototype;
        for (var key in methods) {
            if (methods.hasOwnProperty(key)) {
                if (api[key]) {
                    throw new Error('API method is already defined: ' + key);
                }
                else {
                    api[key] = methods[key];
                }
            }
        }
        return api;
    }

    var $$1 = window.jQuery || window.$;

    function getCursorPosition(event) {
        var touches = event.touches;
        var source = event;
        // jQuery Event normalization does not preserve the 'event.touches'
        // try to grab touches from the original event
        if (event.touches === undefined && event.originalEvent !== undefined) {
            touches = event.originalEvent.touches;
        }
        // get current touch or mouse position
        if (touches !== undefined && touches.length > 0) {
            source = touches[0];
        }
        return {
            x: source.clientX || 0,
            y: source.clientY || 0
        };
    }

    var canvas;
    var context;
    function detectionContext() {
        if (context) {
            return context;
        }
        if (!canvas) {
            canvas = document.createElement('canvas');
        }
        if (!canvas || !canvas.getContext) {
            return null;
        }
        context = canvas.getContext('2d');
        return context;
    }
    /**
     * Idea taken from https://github.com/stomita/ios-imagefile-megapixel
     * Detects whether the image has been sub sampled by the browser and does not have its original dimensions.
     * This method unfortunately does not work for images that have transparent background.
     */
    function detectSubsampling(img, width, height) {
        if (!detectionContext()) {
            return false;
        }
        // sub sampling happens on images above 1 megapixel
        if (width * height <= 1024 * 1024) {
            return false;
        }
        // set canvas to 1x1 pixel size and fill it with magenta color
        canvas.width = canvas.height = 1;
        context.fillStyle = '#FF00FF';
        context.fillRect(0, 0, 1, 1);
        // render the image with a negative offset to the left so that it would
        // fill the canvas pixel with the top right pixel of the image.
        context.drawImage(img, -width + 1, 0);
        // check color value to confirm image is covering edge pixel or not.
        // if color still magenta, the image is assumed to be sub sampled.
        try {
            var dat = context.getImageData(0, 0, 1, 1).data;
            return (dat[0] === 255) && (dat[1] === 0) && (dat[2] === 255);
        }
        catch (err) {
            // avoids cross origin exception for chrome when code runs without a server
            return false;
        }
    }

    /**
     *
     */
    function getOuterSize(data) {
        var width = Math.floor(data.width || data.frameWidth || data.target.innerWidth());
        var height = Math.floor(data.height || data.frameHeight || data.target.innerHeight());
        return {
            aspect: width / height,
            height: height,
            width: width
        };
    }
    function getComputedSize(data) {
        var size = getOuterSize(data);
        if (typeof window.getComputedStyle !== 'function') {
            return size;
        }
        var style = window.getComputedStyle(data.target[0]);
        if (!style.width) {
            return size;
        }
        size.width = Math.floor(Number(style.width.replace('px', '')));
        size.height = Math.floor(size.width / size.aspect);
        return size;
    }
    /**
     *
     */
    function getInnerSize(data) {
        var width = Math.floor(data.frameWidth || data.width || data.target.innerWidth());
        var height = Math.floor(data.frameHeight || data.height || data.target.innerHeight());
        return {
            aspect: width / height,
            height: height,
            width: width
        };
    }
    /**
     *
     */
    function getInnerLayout(mode, inner, outer) {
        // get mode
        var isFit = mode === 'fit';
        var isFill = mode === 'fill';
        var isMatch = mode === 'stretch';
        // resulting layout
        var layout = {
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            overflow: 'hidden'
        };
        // no calculation here
        if (!mode || isMatch) {
            return layout;
        }
        // get size and aspect
        var aspectIsGreater = inner.aspect >= outer.aspect;
        // mode == original
        var width = inner.width;
        var height = inner.height;
        // keep aspect ratio but fit/fill into container
        if (isFit && aspectIsGreater || isFill && !aspectIsGreater) {
            width = outer.width;
            height = outer.width / inner.aspect;
        }
        if (isFill && aspectIsGreater || isFit && !aspectIsGreater) {
            height = outer.height;
            width = outer.height * inner.aspect;
        }
        // floor the numbers
        width = Math.floor(width);
        height = Math.floor(height);
        // position in center
        layout.width = width;
        layout.height = height;
        layout.top = Math.floor((outer.height - height) / 2);
        layout.left = Math.floor((outer.width - width) / 2);
        layout.right = layout.left;
        layout.bottom = layout.top;
        return layout;
    }

    var img;
    /**
     * gets the original width and height of an image element
     */
    function naturalSize(image) {
        // for browsers that support naturalWidth and naturalHeight properties
        if (image.naturalWidth) {
            return {
                height: image.naturalHeight,
                width: image.naturalWidth
            };
        }
        // browsers that do not support naturalWidth and naturalHeight properties have to fall back to the width and
        // height properties. However, the image might have a css style applied so width and height would return the
        // css size. To avoid thet create a new Image object that is free of css rules and grab width and height
        // properties
        //
        // assume that the src has already been downloaded, so no onload callback is needed.
        img = img || new Image();
        img.src = image.src;
        return {
            height: img.height,
            width: img.width
        };
    }

    /**
     * Measures the image frames that are used in the given data object
     */
    function measure(images, options) {
        if (images.length === 1) {
            return [measureSheet(images[0], options)];
        }
        else if (options.framesX && options.framesY) {
            return measureMutipleSheets(images, options);
        }
        else {
            return measureFrames(images, options);
        }
    }
    function measureSheet(image, options) {
        var result = { id: 0, sprites: [] };
        measureImage(image, options, result);
        var frames = options.frames;
        var framesX = Number(options.framesX) || frames;
        var framesY = Math.ceil(frames / framesX);
        var frameWidth = Math.floor(result.width / framesX);
        var frameHeight = Math.floor(result.height / framesY);
        var divisor = result.isSubsampled ? 2 : 1;
        for (var i = 0; i < frames; i++) {
            var x = (i % framesX) * frameWidth;
            var y = Math.floor(i / framesX) * frameHeight;
            result.sprites.push({
                id: i,
                x: x, y: y,
                width: frameWidth,
                height: frameHeight,
                sampledX: x / divisor,
                sampledY: y / divisor,
                sampledWidth: frameWidth / divisor,
                sampledHeight: frameHeight / divisor
            });
        }
        return result;
    }
    function measureFrames(images, options) {
        var result = [];
        for (var id = 0; id < images.length; id++) {
            // TODO: optimize
            // dont measure images with same size twice
            var sheet = measureSheet(images[id], { frames: 1, framesX: 1, detectSubsampling: options.detectSubsampling });
            sheet.id = id;
            result.push(sheet);
        }
        return result;
    }
    function measureMutipleSheets(images, options) {
        var result = [];
        for (var id = 0; id < images.length; id++) {
            // TODO: optimize
            // dont measure images with same size twice
            var sheet = measureSheet(images[id], {
                frames: undefined,
                framesX: options.framesX,
                framesY: options.framesY,
                detectSubsampling: options.detectSubsampling
            });
            sheet.id = id;
            result.push(sheet);
        }
        return result;
    }
    function measureImage(image, options, result) {
        var size = naturalSize(image);
        result.isSubsampled = options.detectSubsampling && detectSubsampling(image, size.width, size.height);
        result.width = size.width;
        result.height = size.height;
        result.sampledWidth = size.width / (result.isSubsampled ? 2 : 1);
        result.sampledHeight = size.height / (result.isSubsampled ? 2 : 1);
        return result;
    }
    function findSpecs(metrics, frames, frame, lane) {
        var spriteId = lane * frames + frame;
        var sheetId = 0;
        var sprite = null;
        var sheet = null;
        while (true) {
            sheet = metrics[sheetId];
            if (!sheet) {
                break;
            }
            if (spriteId >= sheet.sprites.length) {
                spriteId -= sheet.sprites.length;
                sheetId++;
                continue;
            }
            sprite = sheet.sprites[spriteId];
            break;
        }
        return { sprite: sprite, sheet: sheet };
    }

    function indexOf(element, arr) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === element) {
                return i;
            }
        }
    }
    function noop() {
        //
    }
    function preload(opts) {
        var src;
        var input = opts.source;
        src = typeof input === 'string' ? [input] : input;
        // const src: string[] =  ? [opts.source] : opts.source
        var images = [];
        var targetCount = (opts.preloadCount || src.length);
        var onInitiated = opts.initiated || noop;
        var onProgress = opts.progress || noop;
        var onComplete = opts.complete || noop;
        var count = 0;
        var completed = false;
        var firstLoaded = false;
        var tick = function () {
            count += 1;
            onProgress({
                index: indexOf(this, images),
                loaded: count,
                total: src.length,
                percent: Math.round((count / src.length) * 100)
            });
            firstLoaded = firstLoaded || (this === images[0]);
            if (firstLoaded && !completed && (count >= targetCount)) {
                completed = true;
                onComplete(images);
            }
        };
        for (var _i = 0, src_1 = src; _i < src_1.length; _i++) {
            var url = src_1[_i];
            var img = new Image();
            // push result
            images.push(img);
            // bind logic, dont care about abort/errors
            img.onload = img.onabort = img.onerror = tick;
            // begin load
            img.src = url;
        }
        onInitiated(images);
    }

    function padNumber(num, length, pad) {
        var result = String(num);
        while (result.length < length) {
            result = String(pad) + result;
        }
        return result;
    }
    /**
     * Generates an array of source strings
     *
     * @remarks
     * Takes a template string and generates an array of strings by interpolating {lane} and {frame} placeholders.
     *
     * ```
     * sourceArray('http://example.com/image_{frame}.jpg, { frame: [1, 3], digits: 2 })
     * // gives:
     * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
     *
     * sourceArray('http://example.com/image_FRAME.jpg, { frame: [1, 3], digits: 2, framePlacer: 'FRAME' })
     * // gives:
     * // [ 'http://example.com/image_01.jpg', 'http://example.com/image_02.jpg', 'http://example.com/image_03.jpg' ]
     * ```
     *
     * @param template - The template string
     * @param opts - Interpolation options
     *
     * @public
     */
    function sourceArray(template, opts) {
        var digits = opts.digits || 2;
        var lPlacer = opts.lanePlacer || '{lane}';
        var fPlacer = opts.framePlacer || '{frame}';
        var fStart = 0;
        var fEnd = 0;
        if (opts.frame) {
            fStart = opts.frame[0];
            fEnd = opts.frame[1];
        }
        var lStart = 0;
        var lEnd = 0;
        if (opts.lane) {
            lStart = opts.lane[0];
            lEnd = opts.lane[1];
        }
        var result = [];
        for (var lane = lStart; lane <= lEnd; lane += 1) {
            for (var frame = fStart; frame <= fEnd; frame += 1) {
                result.push(template
                    .replace(lPlacer, padNumber(lane, digits, '0'))
                    .replace(fPlacer, padNumber(frame, digits, '0')));
            }
        }
        return result;
    }

    /**
     * The namespace that is used to bind functions to DOM events and store the data object
     */
    var namespace = 'spritespin';
    /**
     * Event names that are recognized by SpriteSpin. A module can implement any of these and they will be bound
     * to the target element on which the plugin is called.
     */
    var eventNames = [
        'mousedown',
        'mousemove',
        'mouseup',
        'mouseenter',
        'mouseover',
        'mouseleave',
        'mousewheel',
        'wheel',
        'click',
        'dblclick',
        'touchstart',
        'touchmove',
        'touchend',
        'touchcancel',
        'selectstart',
        'gesturestart',
        'gesturechange',
        'gestureend'
    ];
    /**
     *
     */
    var callbackNames = [
        'onInit',
        'onProgress',
        'onLoad',
        'onFrameChanged',
        'onFrame',
        'onDraw',
        'onComplete',
        'onDestroy'
    ];
    /**
     * Names of events for that the default behavior should be prevented.
     */
    var eventsToPrevent = [
        'dragstart'
    ];
    /**
     * Default set of SpriteSpin options. This also represents the majority of data attributes that are used during the
     * lifetime of a SpriteSpin instance. The data is stored inside the target DOM element on which the plugin is called.
     */
    var defaults = {
        source: undefined,
        width: undefined,
        height: undefined,
        frames: undefined,
        framesX: undefined,
        lanes: 1,
        sizeMode: undefined,
        renderer: 'canvas',
        lane: 0,
        frame: 0,
        frameTime: 40,
        animate: true,
        retainAnimate: false,
        reverse: false,
        loop: true,
        stopFrame: 0,
        wrap: true,
        wrapLane: false,
        sense: 1,
        senseLane: undefined,
        orientation: 'horizontal',
        detectSubsampling: true,
        preloadCount: undefined,
        touchScrollTimer: [200, 1500],
        responsive: undefined,
        plugins: undefined
    };

    function noop$1() {
        // noop
    }
    function wrapConsole(type) {
        return console && console[type] ? function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return console.log.apply(console, args);
        } : noop$1;
    }
    var log = wrapConsole('log');
    var warn = wrapConsole('warn');
    var error = wrapConsole('error');
    function toArray(value) {
        return Array.isArray(value) ? value : [value];
    }
    /**
     * clamps the given value by the given min and max values
     */
    function clamp(value, min, max) {
        return (value > max ? max : (value < min ? min : value));
    }
    /**
     *
     */
    function wrap(value, min, max, size) {
        while (value > max) {
            value -= size;
        }
        while (value < min) {
            value += size;
        }
        return value;
    }
    /**
     * prevents default action on the given event
     */
    function prevent(e) {
        e.preventDefault();
        return false;
    }
    /**
     * Binds on the given target and event the given function.
     * The SpriteSpin namespace is attached to the event name
     */
    function bind(target, event, func) {
        if (func) {
            target.bind(event + '.' + namespace, function (e) {
                func.apply(target, [e, target.spritespin('data')]);
            });
        }
    }
    /**
     * Unbinds all SpriteSpin events from given target element
     */
    function unbind(target) {
        target.unbind('.' + namespace);
    }
    /**
     * Checks if given object is a function
     */
    function isFunction(fn) {
        return typeof fn === 'function';
    }
    function pixelRatio(context) {
        var devicePixelRatio = window.devicePixelRatio || 1;
        var backingStoreRatio = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return devicePixelRatio / backingStoreRatio;
    }



    var _Utils = Object.freeze({
        $: $$1,
        getCursorPosition: getCursorPosition,
        detectSubsampling: detectSubsampling,
        getOuterSize: getOuterSize,
        getComputedSize: getComputedSize,
        getInnerSize: getInnerSize,
        getInnerLayout: getInnerLayout,
        measure: measure,
        findSpecs: findSpecs,
        naturalSize: naturalSize,
        preload: preload,
        sourceArray: sourceArray,
        noop: noop$1,
        log: log,
        warn: warn,
        error: error,
        toArray: toArray,
        clamp: clamp,
        wrap: wrap,
        prevent: prevent,
        bind: bind,
        unbind: unbind,
        isFunction: isFunction,
        pixelRatio: pixelRatio
    });

    /**
     * Applies css attributes to layout the SpriteSpin containers.
     *
     * @internal
     */
    function applyLayout(data) {
        // disable selection
        data.target
            .attr('unselectable', 'on')
            .css({
                width: '',
                height: '',
                '-ms-user-select': 'none',
                '-moz-user-select': 'none',
                '-khtml-user-select': 'none',
                '-webkit-user-select': 'none',
                'user-select': 'none'
            });
        var size = data.responsive ? getComputedSize(data) : getOuterSize(data);
        var layout = getInnerLayout(data.sizeMode, getInnerSize(data), size);
        // apply layout on target
        data.target.css({
            width: size.width,
            height: size.height,
            position: 'relative',
            overflow: 'hidden'
        });
        // apply layout on stage
        data.stage
            .css(layout)
            .hide();
        if (!data.canvas) {
            return;
        }
        // apply layout on canvas
        data.canvas.css(layout).hide();
        // apply pixel ratio on canvas
        data.canvasRatio = data.canvasRatio || pixelRatio(data.context);
        if (typeof layout.width === 'number' && typeof layout.height === 'number') {
            data.canvas[0].width = (layout.width * data.canvasRatio) || size.width;
            data.canvas[0].height = (layout.height * data.canvasRatio) || size.height;
        }
        else {
            data.canvas[0].width = (size.width * data.canvasRatio);
            data.canvas[0].height = (size.height * data.canvasRatio);
        }
        // width and height must be set before calling scale
        data.context.scale(data.canvasRatio, data.canvasRatio);
    }

    /**
     * Gets a state object by name.
     * @internal
     * @param data - The SpriteSpin instance data
     * @param name - The name of the state object
     */
    function getState(data, name) {
        data.state = data.state || {};
        data.state[name] = data.state[name] || {};
        return data.state[name];
    }
    /**
     * Gets a plugin state object by name.
     *
     * @remarks
     * Plugins should use this method to get or create a state object where they can
     * store any instance variables.
     *
     * @public
     * @param data - The SpriteSpin instance data
     * @param name - The name of the plugin
     */
    function getPluginState(data, name) {
        var state = getState(data, 'plugin');
        state[name] = state[name] || {};
        return state[name];
    }
    /**
     * Checks whether a flag is set. See {@link flag}.
     *
     * @public
     * @param data - The SpriteSpin instance data
     * @param key - The name of the flag
     */
    function is(data, key) {
        return !!getState(data, 'flags')[key];
    }
    /**
     * Sets a flag value. See {@link is}.
     *
     * @public
     * @param data - The SpriteSpin instance data
     * @param key - The name of the flag
     * @param value - The value to set
     */
    function flag(data, key, value) {
        getState(data, 'flags')[key] = !!value;
    }

    /**
     * Gets the playback state
     *
     * @public
     * @param data - The SpriteSpin instance data
     */
    function getPlaybackState(data) {
        return getState(data, 'playback');
    }
    function updateLane(data, lane) {
        data.lane = data.wrapLane
            ? wrap(lane, 0, data.lanes - 1, data.lanes)
            : clamp(lane, 0, data.lanes - 1);
    }
    function updateAnimationFrame(data) {
        data.frame += (data.reverse ? -1 : 1);
        // wrap the frame value to fit in range [0, data.frames)
        data.frame = wrap(data.frame, 0, data.frames - 1, data.frames);
        // stop animation if loop is disabled and the stopFrame is reached
        if (!data.loop && (data.frame === data.stopFrame)) {
            stopAnimation(data);
        }
    }
    function updateInputFrame(data, frame) {
        data.frame = Number(frame);
        data.frame = data.wrap
            ? wrap(data.frame, 0, data.frames - 1, data.frames)
            : clamp(data.frame, 0, data.frames - 1);
    }
    function updateAnimation(data) {
        var state = getPlaybackState(data);
        if (state.handler) {
            updateBefore(data);
            updateAnimationFrame(data);
            updateAfter(data);
        }
    }
    function updateBefore(data) {
        var state = getPlaybackState(data);
        state.lastFrame = data.frame;
        state.lastLane = data.lane;
    }
    function updateAfter(data) {
        var state = getPlaybackState(data);
        if (state.lastFrame !== data.frame || state.lastLane !== data.lane) {
            data.target.trigger('onFrameChanged.' + namespace, data);
        }
        data.target.trigger('onFrame.' + namespace, data);
        data.target.trigger('onDraw.' + namespace, data);
    }
    /**
     * Updates the frame or lane number of the SpriteSpin data.
     *
     * @public
     * @param data - The SpriteSpin instance data
     * @param frame - The frame number to set
     * @param lane - The lane number to set
     */
    function updateFrame(data, frame, lane) {
        updateBefore(data);
        if (frame != null) {
            updateInputFrame(data, frame);
        }
        if (lane != null) {
            updateLane(data, lane);
        }
        updateAfter(data);
    }
    /**
     * Stops the running animation.
     *
     * @public
     * @param data - The SpriteSpin instance data
     */
    function stopAnimation(data) {
        data.animate = false;
        var state = getPlaybackState(data);
        if (state.handler != null) {
            window.clearInterval(state.handler);
            state.handler = null;
        }
    }
    /**
     * Starts animation playback if needed.
     *
     * @remarks
     * Starts animation playback if `animate` property is `true` and the animation is not yet running.
     *
     * @public
     * @param data - The SpriteSpin instance data
     */
    function applyAnimation(data) {
        var state = getPlaybackState(data);
        if (state.handler && (!data.animate || state.frameTime !== data.frameTime)) {
            stopAnimation(data);
        }
        if (data.animate && !state.handler) {
            state.frameTime = data.frameTime;
            state.handler = window.setInterval(function () { return updateAnimation(data); }, state.frameTime);
        }
    }
    /**
     * Starts the animation playback
     *
     * @remarks
     * Starts the animation playback and also sets the `animate` property to `true`
     *
     * @public
     * @param data - The SpriteSpin instance data
     */
    function startAnimation(data) {
        data.animate = true;
        applyAnimation(data);
    }

    var plugins = {};
    /**
     * Registers a plugin.
     *
     * @remarks
     * Use this to add custom Rendering or Updating modules that can be addressed with the 'module' option.
     *
     * @public
     * @param name - The name of the plugin
     * @param plugin - The plugin implementation
     */
    function registerPlugin(name, plugin) {
        if (plugins[name]) {
            error("Plugin name \"" + name + "\" is already taken");
            return;
        }
        plugin = plugin || {};
        plugins[name] = plugin;
        return plugin;
    }
    /**
     * Registers a plugin.
     *
     * @public
     * @deprecated Use {@link registerPlugin} instead
     * @param name - The name of the plugin
     * @param plugin - The plugin implementation
     */
    function registerModule(name, plugin) {
        warn('"registerModule" is deprecated, use "registerPlugin" instead');
        registerPlugin(name, plugin);
    }
    /**
     * Gets an active plugin by name
     *
     * @internal
     * @param name - The name of the plugin
     */
    function getPlugin(name) {
        return plugins[name];
    }
    /**
     * Replaces module names on given SpriteSpin data and replaces them with actual implementations.
     * @internal
     */
    function applyPlugins(data) {
        fixPlugins(data);
        for (var i = 0; i < data.plugins.length; i += 1) {
            var name_1 = data.plugins[i];
            if (typeof name_1 !== 'string') {
                continue;
            }
            var plugin = getPlugin(name_1);
            if (!plugin) {
                error('No plugin found with name ' + name_1);
                continue;
            }
            data.plugins[i] = plugin;
        }
    }
    function fixPlugins(data) {
        // tslint:disable no-string-literal
        if (data['mods']) {
            warn('"mods" option is deprecated, use "plugins" instead');
            data.plugins = data['mods'];
            delete data['mods'];
        }
        if (data['behavior']) {
            warn('"behavior" option is deprecated, use "plugins" instead');
            data.plugins.push(data['behavior']);
            delete data['behavior'];
        }
        if (data['module']) {
            warn('"module" option is deprecated, use "plugins" instead');
            data.plugins.push(data['module']);
            delete data['module'];
        }
    }

    var $$2 = $$1;
    var counter = 0;
    /**
     * Collection of all SpriteSpin instances
     */
    var instances = {};
    function pushInstance(data) {
        counter += 1;
        data.id = String(counter);
        instances[data.id] = data;
    }
    function popInstance(data) {
        delete instances[data.id];
    }
    function eachInstance(cb) {
        for (var id in instances) {
            if (instances.hasOwnProperty(id)) {
                cb(instances[id]);
            }
        }
    }
    var lazyinit = function () {
        // replace function with a noop
        // this logic must run only once
        lazyinit = function () { };
        function onEvent(eventName, e) {
            eachInstance(function (data) {
                for (var _i = 0, _a = data.plugins; _i < _a.length; _i++) {
                    var module_1 = _a[_i];
                    if (typeof module_1[eventName] === 'function') {
                        module_1[eventName].apply(data.target, [e, data]);
                    }
                }
            });
        }
        function onResize() {
            eachInstance(function (data) {
                if (data.responsive) {
                    boot(data);
                }
            });
        }
        var _loop_1 = function (eventName) {
            $$2(window.document).bind(eventName + '.' + namespace, function (e) {
                onEvent('document' + eventName, e);
            });
        };
        for (var _i = 0, eventNames_1 = eventNames; _i < eventNames_1.length; _i++) {
            var eventName = eventNames_1[_i];
            _loop_1(eventName);
        }
        var resizeTimeout = null;
        $$2(window).on('resize', function () {
            window.clearTimeout(resizeTimeout);
            resizeTimeout = window.setTimeout(onResize, 100);
        });
    };
    /**
     * (re)binds all spritespin events on the target element
     *
     * @internal
     */
    function applyEvents(data) {
        var target = data.target;
        // Clear all SpriteSpin events on the target element
        unbind(target);
        // disable all default browser behavior on the following events
        // mainly prevents image drag operation
        for (var _i = 0, eventsToPrevent_1 = eventsToPrevent; _i < eventsToPrevent_1.length; _i++) {
            var eName = eventsToPrevent_1[_i];
            bind(target, eName, prevent);
        }
        // Bind module functions to SpriteSpin events
        for (var _a = 0, _b = data.plugins; _a < _b.length; _a++) {
            var plugin = _b[_a];
            for (var _c = 0, eventNames_2 = eventNames; _c < eventNames_2.length; _c++) {
                var eName = eventNames_2[_c];
                bind(target, eName, plugin[eName]);
            }
            for (var _d = 0, callbackNames_1 = callbackNames; _d < callbackNames_1.length; _d++) {
                var eName = callbackNames_1[_d];
                bind(target, eName, plugin[eName]);
            }
        }
        // bind auto start function to load event.
        bind(target, 'onLoad', function (e, d) {
            applyAnimation(d);
        });
        // bind all user events that have been passed on initialization
        for (var _e = 0, callbackNames_2 = callbackNames; _e < callbackNames_2.length; _e++) {
            var eName = callbackNames_2[_e];
            bind(target, eName, data[eName]);
        }
    }
    function applyMetrics(data) {
        if (!data.images) {
            data.metrics = [];
        }
        data.metrics = measure(data.images, data);
        var spec = findSpecs(data.metrics, data.frames, 0, 0);
        if (spec.sprite) {
            // TODO: try to remove frameWidth/frameHeight
            data.frameWidth = spec.sprite.width;
            data.frameHeight = spec.sprite.height;
        }
    }
    /**
     * Runs the boot process.
     *
     * @remarks
     * (re)initializes plugins, (re)initializes the layout, (re)binds events and loads source images.
     *
     * @internal
     */
    function boot(data) {
        applyPlugins(data);
        applyEvents(data);
        applyLayout(data);
        data.source = toArray(data.source);
        data.loading = true;
        data.target
            .addClass('loading')
            .trigger('onInit.' + namespace, data);
        preload({
            source: data.source,
            preloadCount: data.preloadCount,
            progress: function (progress) {
                data.progress = progress;
                data.target.trigger('onProgress.' + namespace, data);
            },
            complete: function (images) {
                data.images = images;
                data.loading = false;
                data.frames = data.frames || images.length;
                applyMetrics(data);
                applyLayout(data);
                data.stage.show();
                data.target
                    .removeClass('loading')
                    .trigger('onLoad.' + namespace, data)
                    .trigger('onFrame.' + namespace, data)
                    .trigger('onDraw.' + namespace, data)
                    .trigger('onComplete.' + namespace, data);
            }
        });
    }
    /**
     * Creates a new SpriteSpin instance
     *
     * @public
     */
    function create(options) {
        var _this = this;
        var target = options.target;
        // SpriteSpin is not initialized
        // Create default settings object and extend with given options
        var data = $$2.extend(true, {}, defaults, options);
        // ensure source is set
        data.source = data.source || [];
        // ensure plugins are set
        data.plugins = data.plugins || [
            '360',
            'drag'
        ];
        // if image tags are contained inside this DOM element
        // use these images as the source files
        target.find('img').each(function () {
            if (!Array.isArray(data.source)) {
                data.source = [];
            }
            data.source.push($$2(_this).attr('src'));
        });
        // build inner html
        // <div>
        //   <div class='spritespin-stage'></div>
        //   <canvas class='spritespin-canvas'></canvas>
        // </div>
        target
            .empty()
            .addClass('spritespin-instance')
            .append("<div class='spritespin-stage'></div>");
        // add the canvas element if canvas rendering is enabled and supported
        if (data.renderer === 'canvas') {
            var canvas = document.createElement('canvas');
            if (!!(canvas.getContext && canvas.getContext('2d'))) {
                data.canvas = $$2(canvas).addClass('spritespin-canvas');
                data.context = canvas.getContext('2d');
                target.append(data.canvas);
                target.addClass('with-canvas');
            }
            else {
                // fallback to image rendering mode
                data.renderer = 'image';
            }
        }
        // setup references to DOM elements
        data.target = target;
        data.stage = target.find('.spritespin-stage');
        // store the data
        target.data(namespace, data);
        pushInstance(data);
        return data;
    }
    /**
     * Creates a new SpriteSpin instance, or updates an existing one
     *
     * @public
     */
    function createOrUpdate(options) {
        lazyinit();
        var data = options.target.data(namespace);
        if (!data) {
            data = create(options);
        }
        else {
            $$2.extend(data, options);
        }
        boot(data);
        return data;
    }
    /**
     * Destroys the SpriteSpin instance
     *
     * @remarks
     * - stops running animation
     * - unbinds all events
     * - deletes the data on the target element
     *
     * @public
     */
    function destroy(data) {
        popInstance(data);
        stopAnimation(data);
        data.target
            .trigger('onDestroy', data)
            .html(null)
            .attr('style', null)
            .attr('unselectable', null)
            .removeClass(['spritespin-instance', 'with-canvas']);
        unbind(data.target);
        data.target.removeData(namespace);
    }

    /**
     * Gets the current input state
     *
     * @public
     * @param data - The SpriteSpin instance data
     */
    function getInputState(data) {
        return getState(data, 'input');
    }
    /**
     * Updates the input state using a mous or touch event.
     *
     * @public
     * @param e - The input event
     * @param data - The SpriteSpin instance data
     */
    function updateInput(e, data) {
        var cursor = getCursorPosition(e);
        var state = getInputState(data);
        // cache positions from previous frame
        state.oldX = state.currentX;
        state.oldY = state.currentY;
        state.currentX = cursor.x;
        state.currentY = cursor.y;
        // Fix old position.
        if (state.oldX === undefined || state.oldY === undefined) {
            state.oldX = state.currentX;
            state.oldY = state.currentY;
        }
        // Cache the initial click/touch position and store the frame number at which the click happened.
        // Useful for different behavior implementations. This must be restored when the click/touch is released.
        if (state.startX === undefined || state.startY === undefined) {
            state.startX = state.currentX;
            state.startY = state.currentY;
            state.clickframe = data.frame;
            state.clicklane = data.lane;
        }
        // Calculate the vector from start position to current pointer position.
        state.dX = state.currentX - state.startX;
        state.dY = state.currentY - state.startY;
        // Calculate the vector from last frame position to current pointer position.
        state.ddX = state.currentX - state.oldX;
        state.ddY = state.currentY - state.oldY;
        // Normalize vectors to range [-1:+1]
        state.ndX = state.dX / data.target.innerWidth();
        state.ndY = state.dY / data.target.innerHeight();
        state.nddX = state.ddX / data.target.innerWidth();
        state.nddY = state.ddY / data.target.innerHeight();
    }
    /**
     * Resets the input state.
     *
     * @public
     */
    function resetInput(data) {
        var input = getInputState(data);
        input.startX = input.startY = undefined;
        input.currentX = input.currentY = undefined;
        input.oldX = input.oldY = undefined;
        input.dX = input.dY = 0;
        input.ddX = input.ddY = 0;
        input.ndX = input.ndY = 0;
        input.nddX = input.nddY = 0;
    }

    function extension(option, value) {
        var $target = $$1(this);
        if (option === 'data') {
            return $target.data(namespace);
        }
        if (option === 'api') {
            var data = $target.data(namespace);
            data.api = data.api || new Api(data);
            return data.api;
        }
        if (option === 'destroy') {
            return $target.each(function () {
                var data = $target.data(namespace);
                if (data) {
                    destroy(data);
                }
            });
        }
        if (arguments.length === 2 && typeof option === 'string') {
            option = (_a = {}, _a[option] = value, _a);
        }
        if (typeof option === 'object') {
            return createOrUpdate($$1.extend(true, { target: $target }, option)).target;
        }
        throw new Error('Invalid call to spritespin');
        var _a;
    }
    $$1.fn[namespace] = extension;

// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
    extendApi({
        // Gets a value indicating whether the animation is currently running.
        isPlaying: function () {
            return getPlaybackState(this.data).handler != null;
        },
        // Gets a value indicating whether the animation looping is enabled.
        isLooping: function () {
            return this.data.loop;
        },
        // Starts/Stops the animation playback
        toggleAnimation: function () {
            if (this.isPlaying()) {
                this.stopAnimation();
            }
            else {
                this.startAnimation();
            }
        },
        // Stops animation playback
        stopAnimation: function () {
            this.data.animate = false;
            stopAnimation(this.data);
        },
        // Starts animation playback
        startAnimation: function () {
            this.data.animate = true;
            applyAnimation(this.data);
        },
        // Sets a value indicating whether the animation should be looped or not.
        // This might start the animation (if the 'animate' data attribute is set to true)
        loop: function (value) {
            this.data.loop = value;
            applyAnimation(this.data);
            return this;
        },
        // Gets the current frame number
        currentFrame: function () {
            return this.data.frame;
        },
        // Updates SpriteSpin to the specified frame.
        updateFrame: function (frame) {
            updateFrame(this.data, frame);
            return this;
        },
        // Skips the given number of frames
        skipFrames: function (step) {
            var data = this.data;
            updateFrame(data, data.frame + (data.reverse ? -step : +step));
            return this;
        },
        // Updates SpriteSpin so that the next frame is shown
        nextFrame: function () {
            return this.skipFrames(1);
        },
        // Updates SpriteSpin so that the previous frame is shown
        prevFrame: function () {
            return this.skipFrames(-1);
        },
        // Starts the animations that will play until the given frame number is reached
        // options:
        //   force [boolean] starts the animation, even if current frame is the target frame
        //   nearest [boolean] animates to the direction with minimum distance to the target frame
        playTo: function (frame, options) {
            var data = this.data;
            options = options || {};
            if (!options.force && data.frame === frame) {
                return;
            }
            if (options.nearest) {
                // distance to the target frame
                var a = frame - data.frame;
                // distance to last frame and the to target frame
                var b = frame > data.frame ? a - data.frames : a + data.frames;
                // minimum distance
                var c = Math.abs(a) < Math.abs(b) ? a : b;
                data.reverse = c < 0;
            }
            data.animate = true;
            data.loop = false;
            data.stopFrame = frame;
            applyAnimation(data);
            return this;
        }
    });

    function pick(target, names) {
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name_1 = names_1[_i];
            if (target[name_1] || name_1 in target) {
                return name_1;
            }
        }
        return names[0];
    }
    var browser = {
        requestFullscreen: pick(document.documentElement, [
            'requestFullscreen',
            'webkitRequestFullScreen',
            'mozRequestFullScreen',
            'msRequestFullscreen'
        ]),
        exitFullscreen: pick(document, [
            'exitFullscreen',
            'webkitExitFullscreen',
            'webkitCancelFullScreen',
            'mozCancelFullScreen',
            'msExitFullscreen'
        ]),
        fullscreenElement: pick(document, [
            'fullscreenElement',
            'webkitFullscreenElement',
            'webkitCurrentFullScreenElement',
            'mozFullScreenElement',
            'msFullscreenElement'
        ]),
        fullscreenEnabled: pick(document, [
            'fullscreenEnabled',
            'webkitFullscreenEnabled',
            'mozFullScreenEnabled',
            'msFullscreenEnabled'
        ]),
        fullscreenchange: pick(document, [
            'onfullscreenchange',
            'onwebkitfullscreenchange',
            'onmozfullscreenchange',
            'onMSFullscreenChange'
        ]).replace(/^on/, ''),
        fullscreenerror: pick(document, [
            'onfullscreenerror',
            'onwebkitfullscreenerror',
            'onmozfullscreenerror',
            'onMSFullscreenError'
        ]).replace(/^on/, '')
    };
    var changeEvent = browser.fullscreenchange + '.' + namespace + '-fullscreen';
    function unbindChangeEvent() {
        $$1(document).unbind(changeEvent);
    }
    function bindChangeEvent(callback) {
        unbindChangeEvent();
        $$1(document).bind(changeEvent, callback);
    }
    var orientationEvent = 'orientationchange.' + namespace + '-fullscreen';
    function unbindOrientationEvent() {
        $$1(window).unbind(orientationEvent);
    }
    function bindOrientationEvent(callback) {
        unbindOrientationEvent();
        $$1(window).bind(orientationEvent, callback);
    }
    function requestFullscreenNative(e) {
        e = e || document.documentElement;
        e[browser.requestFullscreen]();
    }
    function exitFullscreen() {
        return document[browser.exitFullscreen]();
    }
    function fullscreenEnabled() {
        return document[browser.fullscreenEnabled];
    }
    function fullscreenElement() {
        return document[browser.fullscreenElement];
    }
    function isFullscreen() {
        return !!fullscreenElement();
    }
    function toggleFullscreen(data, opts) {
        if (isFullscreen()) {
            this.apiRequestFullscreen(opts);
        }
        else {
            this.exitFullscreen();
        }
    }
    function requestFullscreen(data, opts) {
        opts = opts || {};
        var oWidth = data.width;
        var oHeight = data.height;
        var oSource = data.source;
        var oSize = data.sizeMode;
        var oResponsive = data.responsive;
        var enter = function () {
            data.width = window.screen.width;
            data.height = window.screen.height;
            data.source = (opts.source || oSource);
            data.sizeMode = opts.sizeMode || 'fit';
            data.responsive = false;
            boot(data);
        };
        var exit = function () {
            data.width = oWidth;
            data.height = oHeight;
            data.source = oSource;
            data.sizeMode = oSize;
            data.responsive = oResponsive;
            boot(data);
        };
        bindChangeEvent(function () {
            if (isFullscreen()) {
                enter();
                bindOrientationEvent(enter);
            }
            else {
                unbindChangeEvent();
                unbindOrientationEvent();
                exit();
            }
        });
        requestFullscreenNative(data.target[0]);
    }
    extendApi({
        fullscreenEnabled: fullscreenEnabled,
        fullscreenElement: fullscreenElement,
        exitFullscreen: exitFullscreen,
        toggleFullscreen: function (opts) {
            toggleFullscreen(this.data, opts);
        },
        requestFullscreen: function (opts) {
            requestFullscreen(this.data, opts);
        }
    });

    (function () {
        var NAME = 'click';
        function click(e, data) {
            if (data.loading || !data.stage.is(':visible')) {
                return;
            }
            updateInput(e, data);
            var input = getInputState(data);
            var half, pos;
            var target = data.target, offset = target.offset();
            if (data.orientation === 'horizontal') {
                half = target.innerWidth() / 2;
                pos = input.currentX - offset.left;
            }
            else {
                half = target.innerHeight() / 2;
                pos = input.currentY - offset.top;
            }
            updateFrame(data, data.frame + (pos > half ? 1 : -1));
        }
        registerPlugin(NAME, {
            name: NAME,
            mouseup: click,
            touchend: click
        });
    })();

    (function () {
        var NAME = 'drag';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getAxis(data) {
            if (typeof data.orientation === 'number') {
                return data.orientation * Math.PI / 180;
            }
            if (data.orientation === 'horizontal') {
                return 0;
            }
            return Math.PI / 2;
        }
        function onInit(e, data) {
            var state = getState$$1(data);
            var d = [200, 1500];
            var t = data.touchScrollTimer || d;
            state.minTime = t[0] || d[0];
            state.maxTime = t[1] || d[1];
        }
        function dragStart(e, data) {
            var state = getState$$1(data);
            if (data.loading || is(data, 'dragging') || data['zoomPinFrame'] && !data.stage.is(':visible')) {
                return;
            }
            // Touch scroll can only be disabled by cancelling the 'touchstart' event.
            // If we would try to cancel the 'touchmove' event during a scroll
            // chrome browser raises an error
            //
            // When a user interacts with sprite spin, we dont know whether the intention
            // is to scroll the page or to roll the spin.
            //
            // On first interaction with SpriteSpin the scroll is not disabled
            // On double tap within 200ms the scroll is not disabled
            // Scroll is only disabled if there was an interaction with SpriteSpin in the past 1500ms
            var now = new Date().getTime();
            if (state.endAt && (now - state.endAt > state.maxTime)) {
                // reset timer if the user has no interaction with spritespin within 1500ms
                state.startAt = null;
                state.endAt = null;
            }
            if (state.startAt && (now - state.startAt > state.minTime)) {
                // disable scroll only if there was already an interaction with spritespin
                // however, allow scrolling on double tab within 200ms
                e.preventDefault();
            }
            state.startAt = now;
            state.wasPlaying = !!getPlaybackState(data).handler;
            state.frame = data.frame || 0;
            state.lane = data.lane || 0;
            flag(data, 'dragging', true);
            updateInput(e, data);
        }
        function dragEnd(e, data) {
            if (is(data, 'dragging')) {
                getState$$1(data).endAt = new Date().getTime();
                flag(data, 'dragging', false);
                resetInput(data);
                if (data.retainAnimate && getState$$1(data).wasPlaying) {
                    startAnimation(data);
                }
            }
        }
        function drag(e, data) {
            var state = getState$$1(data);
            var input = getInputState(data);
            if (!is(data, 'dragging')) {
                return;
            }
            updateInput(e, data);
            var rad = getAxis(data);
            var sn = Math.sin(rad);
            var cs = Math.cos(rad);
            var x = ((input.nddX * cs - input.nddY * sn) * data.sense) || 0;
            var y = ((input.nddX * sn + input.nddY * cs) * (data.senseLane || data.sense)) || 0;
            // accumulate
            state.frame += data.frames * x;
            state.lane += data.lanes * y;
            // update spritespin
            var oldFrame = data.frame;
            var oldLane = data.lane;
            updateFrame(data, Math.floor(state.frame), Math.floor(state.lane));
            stopAnimation(data);
        }
        function mousemove(e, data) {
            dragStart(e, data);
            drag(e, data);
        }
        registerPlugin('drag', {
            name: 'drag',
            onInit: onInit,
            mousedown: dragStart,
            mousemove: drag,
            mouseup: dragEnd,
            documentmousemove: drag,
            documentmouseup: dragEnd,
            touchstart: dragStart,
            touchmove: drag,
            touchend: dragEnd,
            touchcancel: dragEnd
        });
        registerPlugin('move', {
            name: 'move',
            onInit: onInit,
            mousemove: mousemove,
            mouseleave: dragEnd,
            touchstart: dragStart,
            touchmove: drag,
            touchend: dragEnd,
            touchcancel: dragEnd
        });
    })();

    (function () {
        var NAME = 'hold';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function rememberOptions(data) {
            var state = getState$$1(data);
            state.frameTime = data.frameTime;
            state.animate = data.animate;
            state.reverse = data.reverse;
        }
        function restoreOptions(data) {
            var state = getState$$1(data);
            data.frameTime = state.frameTime;
            data.animate = state.animate;
            data.reverse = state.reverse;
        }
        function start(e, data) {
            if (is(data, 'loading') || is(data, 'dragging') || !data.stage.is(':visible')) {
                return;
            }
            rememberOptions(data);
            updateInput(e, data);
            flag(data, 'dragging', true);
            data.animate = true;
            applyAnimation(data);
        }
        function stop(e, data) {
            flag(data, 'dragging', false);
            resetInput(data);
            stopAnimation(data);
            restoreOptions(data);
            applyAnimation(data);
        }
        function update(e, data) {
            if (!is(data, 'dragging')) {
                return;
            }
            updateInput(e, data);
            var input = getInputState(data);
            var half, delta;
            var target = data.target, offset = target.offset();
            if (data.orientation === 'horizontal') {
                half = target.innerWidth() / 2;
                delta = (input.currentX - offset.left - half) / half;
            }
            else {
                half = (data.height / 2);
                delta = (input.currentY - offset.top - half) / half;
            }
            data.reverse = delta < 0;
            delta = delta < 0 ? -delta : delta;
            data.frameTime = 80 * (1 - delta) + 20;
            if (((data.orientation === 'horizontal') && (input.dX < input.dY)) ||
                ((data.orientation === 'vertical') && (input.dX < input.dY))) {
                e.preventDefault();
            }
        }
        function onFrame(e, data) {
            data.animate = true;
            applyAnimation(data);
        }
        registerPlugin(NAME, {
            name: NAME,
            mousedown: start,
            mousemove: update,
            mouseup: stop,
            mouseleave: stop,
            touchstart: start,
            touchmove: update,
            touchend: stop,
            touchcancel: stop,
            onFrame: onFrame
        });
    })();

    (function () {
        var NAME = 'swipe';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getOption(data, name, fallback) {
            return data[name] || fallback;
        }
        function init(e, data) {
            var state = getState$$1(data);
            state.fling = getOption(data, 'swipeFling', 10);
            state.snap = getOption(data, 'swipeSnap', 0.50);
        }
        function start(e, data) {
            if (!data.loading && !is(data, 'dragging')) {
                updateInput(e, data);
                flag(data, 'dragging', true);
            }
        }
        function update(e, data) {
            if (!is(data, 'dragging')) {
                return;
            }
            updateInput(e, data);
            var frame = data.frame;
            var lane = data.lane;
            updateFrame(data, frame, lane);
        }
        function end(e, data) {
            if (!is(data, 'dragging')) {
                return;
            }
            flag(data, 'dragging', false);
            var state = getState$$1(data);
            var input = getInputState(data);
            var frame = data.frame;
            var lane = data.lane;
            var snap = state.snap;
            var fling = state.fling;
            var dS, dF;
            if (data.orientation === 'horizontal') {
                dS = input.ndX;
                dF = input.ddX;
            }
            else {
                dS = input.ndY;
                dF = input.ddY;
            }
            if (dS >= snap || dF >= fling) {
                frame = data.frame - 1;
            }
            else if (dS <= -snap || dF <= -fling) {
                frame = data.frame + 1;
            }
            resetInput(data);
            updateFrame(data, frame, lane);
            stopAnimation(data);
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: init,
            mousedown: start,
            mousemove: update,
            mouseup: end,
            mouseleave: end,
            touchstart: start,
            touchmove: update,
            touchend: end,
            touchcancel: end
        });
    })();

    (function () {
        var NAME = 'wheel';
        function wheel(e, data) {
            if (!data.loading && data.stage.is(':visible')) {
                e.preventDefault();
                var we = e.originalEvent;
                var signX = we.deltaX === 0 ? 0 : we.deltaX > 0 ? 1 : -1;
                var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
                updateFrame(data, data.frame + signY, data.lane + signX);
            }
        }
        registerPlugin(NAME, {
            name: NAME,
            wheel: wheel
        });
    })();

    (function () {
        var template = "\n<div class='spritespin-progress'>\n  <div class='spritespin-progress-label'></div>\n  <div class='spritespin-progress-bar'></div>\n</div>\n";
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        var NAME = 'progress';
        function onInit(e, data) {
            var state = getState$$1(data);
            if (!state.stage) {
                state.stage = $$1(template);
                state.stage.appendTo(data.target);
            }
            state.stage.find('.spritespin-progress-label')
                .text("0%")
                .css({ 'text-align': 'center' });
            state.stage.find('.spritespin-progress-bar').css({
                width: "0%"
            });
            state.stage.hide().fadeIn();
        }
        function onProgress(e, data) {
            var state = getState$$1(data);
            state.stage.find('.spritespin-progress-label')
                .text(data.progress.percent + "%")
                .css({ 'text-align': 'center' });
            state.stage.find('.spritespin-progress-bar').css({
                width: data.progress.percent + "%"
            });
        }
        function onLoad(e, data) {
            $$1(getState$$1(data).stage).fadeOut();
        }
        function onDestroy(e, data) {
            $$1(getState$$1(data).stage).remove();
        }
        registerPlugin(NAME, {
            name: NAME,
            onInit: onInit,
            onProgress: onProgress,
            onLoad: onLoad,
            onDestroy: onDestroy
        });
    })();

    (function () {
        var NAME = '360';
        function onLoad(e, data) {
            data.stage.find('.spritespin-frames').detach();
            if (data.renderer === 'image') {
                $(data.images).addClass('spritespin-frames').appendTo(data.stage);
            }
        }
        function onDraw(e, data) {
            var specs = findSpecs(data.metrics, data.frames, data.frame, data.lane);
            var sheet = specs.sheet;
            var sprite = specs.sprite;
            if (!sheet || !sprite) {
                return;
            }
            var src = data.source[sheet.id];
            var image = data.images[sheet.id];
            if (data.renderer === 'canvas') {
                data.canvas.show();
                var w = data.canvas[0].width / data.canvasRatio;
                var h = data.canvas[0].height / data.canvasRatio;
                data.context.clearRect(0, 0, w, h);
                data.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
                return;
            }
            var scaleX = data.stage.innerWidth() / sprite.sampledWidth;
            var scaleY = data.stage.innerHeight() / sprite.sampledHeight;
            var top = Math.floor(-sprite.sampledY * scaleY);
            var left = Math.floor(-sprite.sampledX * scaleX);
            var width = Math.floor(sheet.sampledWidth * scaleX);
            var height = Math.floor(sheet.sampledHeight * scaleY);
            if (data.renderer === 'background') {
                data.stage.css({
                    'background-image': "url('" + src + "')",
                    'background-position': left + "px " + top + "px",
                    'background-repeat': 'no-repeat',
                    // set custom background size to enable responsive rendering
                    '-webkit-background-size': width + "px " + height + "px",
                    '-moz-background-size': width + "px " + height + "px",
                    '-o-background-size': width + "px " + height + "px",
                    'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
                });
                return;
            }
            $(data.images).hide();
            $(image).show().css({
                position: 'absolute',
                top: top,
                left: left,
                'max-width': 'initial',
                width: width,
                height: height
            });
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: onLoad,
            onDraw: onDraw
        });
    })();

    (function () {
        var NAME = 'blur';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getOption(data, name, fallback) {
            return data[name] || fallback;
        }
        function init(e, data) {
            var state = getState$$1(data);
            state.canvas = state.canvas || $$1("<canvas class='blur-layer'></canvas>");
            state.context = state.context || state.canvas[0].getContext('2d');
            state.steps = state.steps || [];
            state.fadeTime = Math.max(getOption(data, 'blurFadeTime', 200), 1);
            state.frameTime = Math.max(getOption(data, 'blurFrameTime', data.frameTime), 16);
            state.trackTime = null;
            state.cssBlur = !!getOption(data, 'blurCss', false);
            var inner = getInnerSize(data);
            var outer = data.responsive ? getComputedSize(data) : getOuterSize(data);
            var css = getInnerLayout(data.sizeMode, inner, outer);
            state.canvas[0].width = data.width * data.canvasRatio;
            state.canvas[0].height = data.height * data.canvasRatio;
            state.canvas.css(css).show();
            state.context.scale(data.canvasRatio, data.canvasRatio);
            data.target.append(state.canvas);
        }
        function onFrame(e, data) {
            var state = getState$$1(data);
            trackFrame(data);
            if (state.timeout == null) {
                loop(data);
            }
        }
        function trackFrame(data) {
            var state = getState$$1(data);
            var ani = getPlaybackState(data);
            // distance between frames
            var d = Math.abs(data.frame - ani.lastFrame);
            // shortest distance
            d = d >= data.frames / 2 ? data.frames - d : d;
            state.steps.unshift({
                frame: data.frame,
                lane: data.lane,
                live: 1,
                step: state.frameTime / state.fadeTime,
                d: d,
                alpha: 0
            });
        }
        var toRemove = [];
        function removeOldFrames(frames) {
            toRemove.length = 0;
            for (var i = 0; i < frames.length; i += 1) {
                if (frames[i].alpha <= 0) {
                    toRemove.push(i);
                }
            }
            for (var _i = 0, toRemove_1 = toRemove; _i < toRemove_1.length; _i++) {
                var item = toRemove_1[_i];
                frames.splice(item, 1);
            }
        }
        function loop(data) {
            var state = getState$$1(data);
            state.timeout = window.setTimeout(function () { tick(data); }, state.frameTime);
        }
        function killLoop(data) {
            var state = getState$$1(data);
            window.clearTimeout(state.timeout);
            state.timeout = null;
        }
        function applyCssBlur(canvas, d) {
            var amount = Math.min(Math.max((d / 2) - 4, 0), 2.5);
            var blur = "blur(" + amount + "px)";
            canvas.css({
                '-webkit-filter': blur,
                filter: blur
            });
        }
        function clearFrame(data, state) {
            state.canvas.show();
            var w = state.canvas[0].width / data.canvasRatio;
            var h = state.canvas[0].height / data.canvasRatio;
            // state.context.clearRect(0, 0, w, h)
        }
        function drawFrame(data, state, step) {
            if (step.alpha <= 0) {
                return;
            }
            var specs = findSpecs(data.metrics, data.frames, step.frame, step.lane);
            var sheet = specs.sheet;
            var sprite = specs.sprite;
            if (!sheet || !sprite) {
                return;
            }
            var src = data.source[sheet.id];
            var image = data.images[sheet.id];
            if (image.complete === false) {
                return;
            }
            state.canvas.show();
            var w = state.canvas[0].width / data.canvasRatio;
            var h = state.canvas[0].height / data.canvasRatio;
            state.context.globalAlpha = step.alpha;
            state.context.drawImage(image, sprite.sampledX, sprite.sampledY, sprite.sampledWidth, sprite.sampledHeight, 0, 0, w, h);
        }
        function tick(data) {
            var state = getState$$1(data);
            killLoop(data);
            if (!state.context) {
                return;
            }
            var d = 0;
            clearFrame(data, state);
            state.context.clearRect(0, 0, data.width, data.height);
            for (var _i = 0, _a = state.steps; _i < _a.length; _i++) {
                var step = _a[_i];
                step.live = Math.max(step.live - step.step, 0);
                step.alpha = Math.max(step.live - 0.25, 0);
                drawFrame(data, state, step);
                d += step.alpha + step.d;
            }
            if (state.cssBlur) {
                applyCssBlur(state.canvas, d);
            }
            removeOldFrames(state.steps);
            if (state.steps.length) {
                loop(data);
            }
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: init,
            onFrameChanged: onFrame
        });
    })();

    (function () {
        var max = Math.max;
        var min = Math.min;
        var NAME = 'ease';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getOption(data, name, fallback) {
            return data[name] || fallback;
        }
        function init(e, data) {
            var state = getState$$1(data);
            state.maxSamples = max(getOption(data, 'easeMaxSamples', 5), 0);
            state.damping = max(min(getOption(data, 'easeDamping', 0.9), 0.999), 0);
            state.abortTime = max(getOption(data, 'easeAbortTime', 250), 16);
            state.updateTime = max(getOption(data, 'easeUpdateTime', data.frameTime), 16);
            state.samples = [];
            state.steps = [];
        }
        function update(e, data) {
            if (is(data, 'dragging')) {
                killLoop(data);
                sampleInput(data);
            }
        }
        function end(e, data) {
            var state = getState$$1(data);
            var samples = state.samples;
            var last;
            var lanes = 0;
            var frames = 0;
            var time = 0;
            for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
                var sample = samples_1[_i];
                if (!last) {
                    last = sample;
                    continue;
                }
                var dt = sample.time - last.time;
                if (dt > state.abortTime) {
                    lanes = frames = time = 0;
                    return killLoop(data);
                }
                frames += sample.frame - last.frame;
                lanes += sample.lane - last.lane;
                time += dt;
                last = sample;
            }
            samples.length = 0;
            if (!time) {
                return;
            }
            state.lane = data.lane;
            state.lanes = 0;
            state.laneStep = lanes / time * state.updateTime;
            state.frame = data.frame;
            state.frames = 0;
            state.frameStep = frames / time * state.updateTime;
            loop(data);
        }
        function sampleInput(data) {
            var state = getState$$1(data);
            // add a new sample
            state.samples.push({
                time: new Date().getTime(),
                frame: data.frame,
                lane: data.lane
            });
            // drop old samples
            while (state.samples.length > state.maxSamples) {
                state.samples.shift();
            }
        }
        function killLoop(data) {
            var state = getState$$1(data);
            if (state.handler != null) {
                window.clearTimeout(state.handler);
                state.handler = null;
            }
        }
        function loop(data) {
            var state = getState$$1(data);
            state.handler = window.setTimeout(function () { tick(data); }, state.updateTime);
        }
        function tick(data) {
            var state = getState$$1(data);
            state.lanes += state.laneStep;
            state.frames += state.frameStep;
            state.laneStep *= state.damping;
            state.frameStep *= state.damping;
            var frame = Math.floor(state.frame + state.frames);
            var lane = Math.floor(state.lane + state.lanes);
            updateFrame(data, frame, lane);
            if (is(data, 'dragging')) {
                killLoop(data);
            }
            else if (Math.abs(state.frameStep) > 0.005 || Math.abs(state.laneStep) > 0.005) {
                loop(data);
            }
            else {
                killLoop(data);
            }
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: init,
            mousemove: update,
            mouseup: end,
            mouseleave: end,
            touchmove: update,
            touchend: end,
            touchcancel: end
        });
    })();

    (function () {
        var NAME = 'gallery';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getOption(data, name, fallback) {
            return data[name] || fallback;
        }
        function load(e, data) {
            var state = getState$$1(data);
            state.images = [];
            state.offsets = [];
            state.frame = data.frame;
            state.speed = getOption(data, 'gallerySpeed', 500);
            state.opacity = getOption(data, 'galleryOpacity', 0.25);
            state.stage = getOption(data, 'galleryStage', $$1('<div></div>'));
            state.stage.empty().addClass('gallery-stage').prependTo(data.stage);
            var size = 0;
            for (var _i = 0, _a = data.images; _i < _a.length; _i++) {
                var image = _a[_i];
                var naturalSize$$1 = naturalSize(image);
                var scale = data.height / naturalSize$$1.height;
                var img = $$1(image);
                state.stage.append(img);
                state.images.push(img);
                state.offsets.push(-size + (data.width - image.width * scale) / 2);
                size += data.width;
                img.css({
                    'max-width': 'initial',
                    opacity: state.opacity,
                    width: data.width,
                    height: data.height
                });
            }
            var innerSize = getInnerSize(data);
            var outerSize = data.responsive ? getComputedSize(data) : getOuterSize(data);
            var layout = getInnerLayout(data.sizeMode, innerSize, outerSize);
            state.stage.css(layout).css({ width: size, left: state.offsets[state.frame] });
            state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
        }
        function draw(e, data) {
            var state = getState$$1(data);
            var input = getInputState(data);
            var isDragging = is(data, 'dragging');
            if (state.frame !== data.frame && !isDragging) {
                state.stage.stop(true, false).animate({ left: state.offsets[data.frame] }, { duration: state.speed });
                state.images[state.frame].animate({ opacity: state.opacity }, { duration: state.speed });
                state.frame = data.frame;
                state.images[state.frame].animate({ opacity: 1 }, { duration: state.speed });
                state.stage.animate({ left: state.offsets[state.frame] });
            }
            else if (isDragging || state.dX !== input.dX) {
                state.dX = input.dX;
                state.ddX = input.ddX;
                state.stage.stop(true, true).css({ left: state.offsets[state.frame] + state.dX });
            }
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: load,
            onDraw: draw
        });
    })();

    (function () {
        var NAME = 'panorama';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function onLoad(e, data) {
            var state = getState$$1(data);
            var sprite = data.metrics[0];
            if (!sprite) {
                return;
            }
            if (data.orientation === 'horizontal') {
                state.scale = data.target.innerHeight() / sprite.sampledHeight;
                data.frames = sprite.sampledWidth;
            }
            else {
                state.scale = data.target.innerWidth() / sprite.sampledWidth;
                data.frames = sprite.sampledHeight;
            }
            var width = Math.floor(sprite.sampledWidth * state.scale);
            var height = Math.floor(sprite.sampledHeight * state.scale);
            data.stage.css({
                'background-image': "url(" + data.source[sprite.id] + ")",
                'background-repeat': 'repeat-both',
                // set custom background size to enable responsive rendering
                '-webkit-background-size': width + "px " + height + "px",
                '-moz-background-size': width + "px " + height + "px",
                '-o-background-size': width + "px " + height + "px",
                'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
            });
        }
        function onDraw(e, data) {
            var state = getState$$1(data);
            var px = data.orientation === 'horizontal' ? 1 : 0;
            var py = px ? 0 : 1;
            var offset = data.frame % data.frames;
            var left = Math.round(px * offset * state.scale);
            var top = Math.round(py * offset * state.scale);
            data.stage.css({ 'background-position': left + "px " + top + "px" });
        }
        registerPlugin(NAME, {
            name: NAME,
            onLoad: onLoad,
            onDraw: onDraw
        });
    })();

    (function () {
        var NAME = 'zoom';
        function getState$$1(data) {
            return getPluginState(data, NAME);
        }
        function getOption(data, name, fallback) {
            return name in data ? data[name] : fallback;
        }
        function onInit(e, data) {
            var state = getState$$1(data);
            state.source = getOption(data, 'zoomSource', data.source);
            state.useWheel = getOption(data, 'zoomUseWheel', false);
            state.useClick = getOption(data, 'zoomUseClick', true);
            state.pinFrame = getOption(data, 'zoomPinFrame', true);
            state.doubleClickTime = getOption(data, 'zoomDoubleClickTime', 500);
            state.stage = state.stage || $$1("<div class='zoom-stage'></div>");
            state.stage.css({
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute'
            })
                .appendTo(data.target)
                .hide();
        }
        function onDestroy(e, data) {
            var state = getState$$1(data);
            if (state.stage) {
                state.stage.remove();
                delete state.stage;
            }
        }
        function updateInput$$1(e, data) {
            var state = getState$$1(data);
            if (!state.stage.is(':visible')) {
                return;
            }
            e.preventDefault();
            if (state.pinFrame) {
                // hack into drag/move module and disable dragging
                // prevents frame change during zoom mode
                flag(data, 'dragging', false);
            }
            // grab touch/cursor position
            var cursor = getCursorPosition(e);
            // normalize cursor position into [0:1] range
            var x = cursor.x / data.width;
            var y = cursor.y / data.height;
            if (state.oldX == null) {
                state.oldX = x;
                state.oldY = y;
            }
            if (state.currentX == null) {
                state.currentX = x;
                state.currentY = y;
            }
            // calculate move delta since last frame and remember current position
            var dx = x - state.oldX;
            var dy = y - state.oldY;
            state.oldX = x;
            state.oldY = y;
            // invert drag direction for touch events to enable 'natural' scrolling
            if (e.type.match(/touch/)) {
                dx = -dx;
                dy = -dy;
            }
            // accumulate display coordinates
            state.currentX = clamp(state.currentX + dx, 0, 1);
            state.currentY = clamp(state.currentY + dy, 0, 1);
            updateFrame(data, data.frame, data.lane);
        }
        function onClick(e, data) {
            var state = getState$$1(data);
            if (!state.useClick) {
                return;
            }
            e.preventDefault();
            // simulate double click
            var clickTime = new Date().getTime();
            if (!state.clickTime) {
                // on first click
                state.clickTime = clickTime;
                return;
            }
            // on second click
            var timeDelta = clickTime - state.clickTime;
            if (timeDelta > state.doubleClickTime) {
                // took too long, back to first click
                state.clickTime = clickTime;
                return;
            }
            // on valid double click
            state.clickTime = undefined;
            if (toggleZoom(data)) {
                updateInput$$1(e, data);
            }
        }
        function onMove(e, data) {
            var state = getState$$1(data);
            if (state.stage.is(':visible')) {
                updateInput$$1(e, data);
            }
        }
        function onDraw(e, data) {
            var state = getState$$1(data);
            // calculate the frame index
            var index = data.lane * data.frames + data.frame;
            // get the zoom image. Use original frames as fallback. This won't work for spritesheets
            var source = state.source[index];
            var spec = findSpecs(data.metrics, data.frames, data.frame, data.lane);
            // get display position
            var x = state.currentX;
            var y = state.currentY;
            // fallback to centered position
            if (x == null) {
                x = state.currentX = 0.5;
                y = state.currentY = 0.5;
            }
            if (source) {
                // scale up from [0:1] to [0:100] range
                x = Math.floor(x * 100);
                y = Math.floor(y * 100);
                // update background image and position
                state.stage.css({
                    'background-repeat': 'no-repeat',
                    'background-image': "url('" + source + "')",
                    'background-position': x + "% " + y + "%"
                });
            }
            else if (spec.sheet && spec.sprite) {
                var sprite = spec.sprite;
                var sheet = spec.sheet;
                var src = data.source[sheet.id];
                var left = -Math.floor(sprite.sampledX + x * (sprite.sampledWidth - data.width));
                var top_1 = -Math.floor(sprite.sampledY + y * (sprite.sampledHeight - data.height));
                var width = sheet.sampledWidth;
                var height = sheet.sampledHeight;
                state.stage.css({
                    'background-image': "url('" + src + "')",
                    'background-position': left + "px " + top_1 + "px",
                    'background-repeat': 'no-repeat',
                    // set custom background size to enable responsive rendering
                    '-webkit-background-size': width + "px " + height + "px",
                    '-moz-background-size': width + "px " + height + "px",
                    '-o-background-size': width + "px " + height + "px",
                    'background-size': width + "px " + height + "px" /* Chrome, Firefox 4+, IE 9+, Opera, Safari 5+ */
                });
            }
        }
        function toggleZoom(data) {
            var state = getState$$1(data);
            if (!state.stage) {
                throw new Error('zoom module is not initialized or is not available.');
            }
            if (state.stage.is(':visible')) {
                showZoom(data);
            }
            else {
                hideZoom(data);
                return true;
            }
            return false;
        }
        function showZoom(data) {
            var state = getState$$1(data);
            state.stage.fadeOut();
            data.stage.fadeIn();
        }
        function hideZoom(data) {
            var state = getState$$1(data);
            state.stage.fadeIn();
            data.stage.fadeOut();
        }
        function wheel(e, data) {
            var state = getState$$1(data);
            if (!data.loading && state.useWheel) {
                var we = e.originalEvent;
                var signY = we.deltaY === 0 ? 0 : we.deltaY > 0 ? 1 : -1;
                if (typeof state.useWheel === 'number') {
                    signY *= state.useWheel;
                }
                if (state.stage.is(':visible') && signY > 0) {
                    e.preventDefault();
                    showZoom(data);
                }
                if (!state.stage.is(':visible') && signY < 0) {
                    e.preventDefault();
                    hideZoom(data);
                }
            }
        }
        registerPlugin(NAME, {
            name: NAME,
            mousedown: onClick,
            touchstart: onClick,
            mousemove: onMove,
            touchmove: onMove,
            wheel: wheel,
            onInit: onInit,
            onDestroy: onDestroy,
            onDraw: onDraw
        });
        extendApi({
            toggleZoom: function () { toggleZoom(this.data); } // tslint:disable-line
        });
    })();

    var Utils = _Utils;

    exports.Utils = Utils;
    exports.sourceArray = sourceArray;
    exports.Api = Api;
    exports.extendApi = extendApi;
    exports.instances = instances;
    exports.applyEvents = applyEvents;
    exports.boot = boot;
    exports.create = create;
    exports.createOrUpdate = createOrUpdate;
    exports.destroy = destroy;
    exports.namespace = namespace;
    exports.eventNames = eventNames;
    exports.callbackNames = callbackNames;
    exports.eventsToPrevent = eventsToPrevent;
    exports.defaults = defaults;
    exports.getInputState = getInputState;
    exports.updateInput = updateInput;
    exports.resetInput = resetInput;
    exports.applyLayout = applyLayout;
    exports.getPlaybackState = getPlaybackState;
    exports.updateFrame = updateFrame;
    exports.stopAnimation = stopAnimation;
    exports.applyAnimation = applyAnimation;
    exports.startAnimation = startAnimation;
    exports.registerPlugin = registerPlugin;
    exports.registerModule = registerModule;
    exports.getPlugin = getPlugin;
    exports.applyPlugins = applyPlugins;
    exports.getState = getState;
    exports.getPluginState = getPluginState;
    exports.is = is;
    exports.flag = flag;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=spritespin.js.map

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
    if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
        u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
        h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
        a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
        y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

$(function () {

    var $landingHero = $('.landing-hero');

    if ($landingHero.length > 0) {
        var $landingHero__item = $landingHero.find('.landing-hero__item'),
            activeAboutClass = 'landing-hero__item--active';

        $landingHero__item.each(function () {
            var $this = $(this),
                $landingHero__content = $this.find('.landing-hero__content'),
                $siblings = $this.siblings();

            $landingHero__content.on('mouseover', function () {
                $siblings.removeClass(activeAboutClass);
                $this.addClass(activeAboutClass);
            });
        });
    }

});

$(function () {

    $('.page__single--boat').e11_BuildABoat();

    var $body = $('body'),
        $spinner__toggle = $('[data-class="spinner__open"]'),
        $spinnerView = $('#spinner-view'),
        $spinner__close = $('[data-class="spinner__close"]');

    if ($spinner__toggle.length > 0 && $spinnerView.length > 0) {
        var $wpadminbar = $('#wpadminbar'),
            $wpadminbarHeight = 0;

        if ($wpadminbar.length > 0) {
            $wpadminbarHeight = $wpadminbar.outerHeight();
        }
        var $heroModel = $('.hero--model'),
            $spinner__toggleContainer = $('.spinner__toggle.icon-close'),
            $spinnerView__instructions = $('.spinner-view__instructions'),
            setSpinnerPositions = function () {
                $spinner__toggleContainer.css({
                    'top': Math.floor($spinnerView.offset().top - $wpadminbarHeight)
                });
                $spinnerView__instructions.css({
                    'top': $spinnerView.offset().top + $spinnerView.outerHeight() - $wpadminbarHeight
                });
            },
            loadSpinnerInstructions = function () {
                setTimeout(function () {
                    $spinnerView__instructions.fadeIn(function () {
                        setTimeout(function () {
                            $spinnerView__instructions.fadeOut();
                        }, 3000);
                    });
                }, 500);
            };

        $spinner__toggle.on('click', function () {
            $body.css({
                'position': 'fixed',
                'width': '100%',
                'top': '-' + $(window).scrollTop() + 'px'
            });
            setSpinnerPositions();
            loadSpinnerInstructions();
            $heroModel.addClass('spinner-active');
        });

        $spinner__close.on('click', function () {
            // When the modal is hidden...
            var scrollY = document.body.style.top;
            $body.css({
                'position': '',
                'width': '',
                'top': ''
            });
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
            $heroModel.removeClass('spinner-active');
        });

        $(window).resize(function () {
            setTimeout(function () {
                setSpinnerPositions();
            }, 150);
        });

        $(window).resize(function () {
            setTimeout(function () {
                setSpinnerPositions();
            }, 150);
        });

        $spinnerView.spritespin({
            source: view_360_urls,
            animate: false,
            responsive: true,
            sizeMode: 'fill',
            sense: -1
        });
    }


    //
    // Email Options
    //
    var $emailOptionsForm = $('#gform_8'),
        $emailOptionsFormSubmit = $emailOptionsForm.find('#gform_submit_button_8'),
        $emailOptionsChoice = $('[data-form-wrap="1"] .option-list__item'),
        $formOptionsInput = $emailOptionsForm.find('.gfield.input-options textarea'),
        $formEmailChoiceInput = $emailOptionsForm.find('.gfield.input-email-choice');

    if ($emailOptionsChoice.length > 0) {
        $emailOptionsChoice.on('click', function () {
            var $this = $(this),
                $emailChoice = $this.data('email-choice');

            $this.toggleClass('selected');
            $this.siblings().removeClass('selected');

            // Email Options Form Inputs
            $formEmailChoiceInput.find('input[value="' + $emailChoice + '"]').prop('checked', true);
        });

        $emailOptionsFormSubmit.click(function (e) {
            e.preventDefault();
            // Form data - Options
            var $emailOptions = $('.model-option.model-option--main .option-list__item.boatOption.selected');
            if ($emailOptions.length > 0) {
                var $emailOptionsData = [];

                $emailOptions.each(function () {
                    $emailOptionsData.push($(this).find('.option-list__text').text());
                });

                $emailOptionsData = $emailOptionsData.join('\n');
                $formOptionsInput.val($emailOptionsData);
            }

            $emailOptionsForm.trigger('submit');
        });
    }

    var $successClass = 'bab-form-submitted-';

    $(document).bind('gform_post_render', function (event, form_id, current_page) {
        $('body').addClass($successClass + form_id);
    });

});

(function ($, window, document, undefined) {

    var name = 'BuildABoat';

    function BuildABoat(element, index, options) {
        this.$el = $(element);
        this.options = $.extend({}, $.e11.fn[name].defaults, options);
        this.init();
    }

    BuildABoat.prototype = {

        name: name,

        init: function () {

            var self = this;

            // Toggle BAB module
            this.$toggle = this.$el.find('[data-class="build-a-boat-toggle"]');
            this.$buildABoat = this.$el.find('.build-a-boat');
            this.$buildABoatNameForm = this.$el.find('.form--sticky');
            this.$buildABoatNameInput = this.$buildABoatNameForm.find('input[name="boat-name"]');
            this.$buildABoatName = this.$el.find('.custom-hero__title strong');
            this.$editModelName = this.$el.find('.icon-box--edit');
            this.activeBABModelNameClass = 'build-a-boat--modelName';
            this.activeBABClass = 'build-a-boat--active';

            this.$editModelName.on('click', function (e) {
                e.preventDefault();

                self.$buildABoat.toggleClass(self.activeBABModelNameClass);
            });

            this.$buildABoatNameForm.on('submit', function (e) {
                e.preventDefault();
                self.$buildABoatName.text(self.$buildABoatNameInput.val());
                self.$buildABoat.removeClass(self.activeBABModelNameClass);
                self.$formBoatNameInput.val(' - ' + self.$buildABoatNameInput.val());
            });

            this.$toggle.on('click', function (e) {
                e.preventDefault();

                var BABpadding = $('.header').outerHeight(true),
                    BABpaddingAdminbarHeight = 0,
                    $BABwpadminbar = $('#wpadminbar'),
                    BABpaddingTranslateBarHeight = 0,
                    $BABtranslateBar = $('.goog-te-banner-frame');

                if ($BABwpadminbar.length > 0) {
                    BABpaddingAdminbarHeight = $BABwpadminbar.outerHeight();
                }

                if ($BABtranslateBar.length > 0) {
                    BABpaddingTranslateBarHeight = $BABtranslateBar.outerHeight();
                }

                BABpadding = BABpadding + BABpaddingAdminbarHeight + BABpaddingTranslateBarHeight;

                $('body').toggleClass(self.activeBABClass);
                self.$buildABoat.css('top', BABpadding);
            });

            //Navigate through BAB steps
            this.$items = this.$el.find('.form-step .step__item');
            this.$nav = this.$el.find('.step-nagivation--alt');
            this.$steps = $('[data-class="step"]');
            this.$prev = this.$el.find('[data-class="prev"]');
            this.$next = this.$el.find('[data-class="next"]');
            this.$prevText = this.$nav.find('.step-prev').find('span');
            this.$nextText = this.$el.find('.step-next');
            this.skipText = 'Skip this step >';
            this.nextText = 'Next step >';
            this.$formBoatNameInput = self.$el.find('.gfield.input-boat-name input');
            this.activeClass = 'step__item--active';
            this.finishClass = 'build-a-boat--finish';
            this.startClass = 'build-a-boat--start';
            this.endClass = 'build-a-boat--end';
            this.activeItem = 0;

            this.$items.click(function () {
                self.deactivateItem(self.activeItem);
                self.activeItem = $(this).index();
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            this.$prev.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem--;
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            this.$next.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem++;
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            //
            //EXTERIOR - Color Picker
            //
            this.$stepColorMod = false;
            this.$colorBlock = this.$el.find('.color-block');
            this.$mobileBlockActiveHolder = this.$el.find('.mobile__active-holder');
            this.mobileBlockActiveClass = 'mobile__active-holder--active';
            this.$colorPicker = this.$el.find('#color-picker');
            this.$colorItems = this.$el.find('.area-list__item');
            this.$colorPalette = this.$el.find('.color-palette');
            this.$colorPaletteClear = this.$el.find('.color-block__picker--clear');
            this.$colorPaletteWhite = this.$el.find('.color-block__picker--white');
            this.$reflection = this.$el.find('#reflection');
            this.$recentColors = this.$el.find('#recent-colors');
            this.colorItemActiveClass = 'active';
            this.$activeColorItem = this.$colorItems.eq(0);
            this.boatLayer = this.$activeColorItem.attr('data-boat-layer');
            this.$boatLayer = $("#" + self.boatLayer).find('path');

            this.$reflection.css({
                'display': 'block',
                'opacity': 0.2
            });

            //Mobile controls
            this.$mobileBlockActiveHolder.click(function () {
                $(this).closest('[data-class="step"]').toggleClass(self.mobileBlockActiveClass)
            });

            // Activate color picker
            var colorPicker = new iro.ColorPicker('#color-picker', {
                width: 180,
                color: '#ffffff'
            });

            this.$mobileBlockActiveHolderColor = $('.color-block .mobile__active-holder');

            function onColorChange(color, changes) {
                self.$activeColorItem.find('.area-list__color-box').css('background', color.hexString);
                self.$mobileBlockActiveHolderColor.find('.area-list__color-box').css('background', color.hexString);
                self.updateBoatLayerColor(self.$boatLayer, {'fill': color.hexString});
                if (self.$stepColorMod == false) {
                    self.$nextText.text(self.nextText);
                    self.$stepColorMod = true;
                }
            }

            colorPicker.on('color:change', onColorChange);

            this.$colorItems.each(function () {
                var $this = $(this),
                    $defaultColor = $this.data('default-color');

                if ($defaultColor) {
                    var $colorBox = $this.find('.area-list__color-box'),
                        $boatColorLayer = $this.data('boat-layer');

                    $colorBox.css('background', $defaultColor);
                    self.updateBoatLayerColor($("#" + $boatColorLayer).find('path, polygon'), {'fill': $defaultColor});
                }

            });

            // Toggle between active color item
            this.$colorItems.on('click', function () {
                var $this = $(this),
                    activeColor = undefined,
                    recentColor = self.$activeColorItem.find('.area-list__color-box').css('background-color');

                // If color was chosen, add it to recently used colors
                if (recentColor !== 'undefined' && recentColor !== 'rgba(0, 0, 0, 0)') {
                    var $recentColors = self.$recentColors.find('.color-list__item'),
                        recentColors = [];

                    // Build array of recent colors
                    $recentColors.each(function () {
                        recentColors.push($(this).css('background-color'));
                    });

                    // If color is already in recent colors, do nothing
                    if ($.inArray(recentColor, recentColors) === -1) {
                        self.$colorPalette.addClass('has-recent-colors');
                        self.$recentColors.prepend('<li class="color-list__item" style="background-color: ' + recentColor + ';"></li>')

                        // If 6 or more recent colors exist, remove the oldest one
                        if ($recentColors.length >= 8) {
                            $recentColors.last().remove();
                        }
                    }
                }

                // Activate the clicked color item
                $this
                    .addClass(self.colorItemActiveClass)
                    .siblings().removeClass(self.colorItemActiveClass);

                // Update active color item so picker can update correct item
                self.$activeColorItem = $this;
                self.boatLayer = self.$activeColorItem.attr('data-boat-layer');
                self.$boatLayer = $("#" + self.boatLayer).find('path, polygon');

                self.$mobileBlockActiveHolderColor.html($this.children().clone());
                self.$colorBlock.addClass(self.mobileBlockActiveClass);
            });

            this.$colorPaletteClear.on('click', function (e) {
                e.preventDefault();
                self.$activeColorItem.find('.area-list__color-box').css({
                    'background': ''
                });
                self.$mobileBlockActiveHolder.find('.area-list__color-box').css({
                    'background': ''
                });
                self.updateBoatLayerColor(self.$boatLayer, {'fill': 'none'});
            });

            this.$colorPaletteWhite.on('click', function (e) {
                e.preventDefault();
                self.$activeColorItem.find('.area-list__color-box').css({
                    'background': '#ffffff'
                });
                self.$mobileBlockActiveHolder.find('.area-list__color-box').css({
                    'background': '#ffffff'
                });
                self.updateBoatLayerColor(self.$boatLayer, {'fill': '#ffffff'});
                colorPicker.color.rgbString = 'rgb(255, 255, 255)';
            });

            // Listen for click of recent colors
            $(document).on('click', '.color-list__item', function () {
                var recentlyUsedColor = $(this).css('background-color');

                // Update active color item with chosen color
                self.$activeColorItem.find('.area-list__color-box').css('background', recentlyUsedColor);
                colorPicker.color.rgbString = recentlyUsedColor;
                self.updateBoatLayerColor(self.$boatLayer, {'fill': recentlyUsedColor});
            });

            //
            // MOTORS
            //
            this.$stepMotorMod = false;
            this.motorColorContainer = this.$el.find('.motor-color__container');
            this.$motorImgContainer = this.$el.find('.motor-thumbnail');
            this.$motorImg = this.$motorImgContainer.find('img');
            this.$motorOption = this.$el.find('.motor-option');
            this.$motorDescription = this.$el.find('.motor-option__description');
            this.$motorItems = this.$el.find('.motor-option__list-item');
            this.motorItemActiveClass = 'active';
            this.$activeMotorItem = this.$el.find('.motor-option__list-item.active');

            this.$motorColors = this.$el.find('.motor-color__item');
            this.motorColorActiveClass = 'active';
            this.$activeMotorColor = this.$activeMotorItem.find('.motor-color__item.active');

            this.activeMotorLayer = this.$activeMotorColor.data('motor-layer');
            this.activeMotorImg = this.$activeMotorColor.data('motor-image');

            // Hide all boat motors except active boat motor
            this.$motorColors.each(function () {
                var motorLayer = $(this).data('motor-layer');
                // Hide motor
                self.updateBoatLayerMotor(self.$el.find("#" + motorLayer), {
                    'display': 'none',
                    'opacity': 0
                });
            });

            // Toggle between active motor item
            this.$motorItems.on('click', function () {
                var $this = $(this),
                    $desc = $this.find('.motor__description'),
                    $motorColors = $this.find('.motor-color'),
                    $activeMotor = $this.find('.motor-color__item.active'),
                    $activeMotorColor = $activeMotor.data('motor-layer'),
                    $activeMotorImg = $activeMotor.data('motor-image');

                // Activate the clicked motor item
                $this
                    .addClass(self.motorItemActiveClass)
                    .siblings().removeClass(self.motorItemActiveClass);

                self.$motorImgContainer.addClass('motor-thumbnail--active');

                self.$motorImg.attr('src', $activeMotorImg);
                self.motorColorContainer.html($motorColors.clone(true));
                self.$motorDescription.html($desc.clone());

                if (self.activeMotor !== undefined) {
                    self.updateBoatLayerMotor(self.activeMotor, {
                        'display': 'none',
                        'opacity': 0
                    });
                }

                self.activeMotor = self.$el.find("#" + $activeMotorColor);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'block',
                    'opacity': 1
                });

                self.$motorOption.find('.mobile__active-holder .area-list__title').text($this.find('.motor-option__list-title').text());
                self.$motorOption.find('.mobile__active-holder .area-list__color-box').css('background', $this.find('.motor-color__item.active .motor-color__title').text());
                self.$motorOption.addClass(self.mobileBlockActiveClass);

                if (self.$stepMotorMod == false) {
                    self.$nextText.text(self.nextText);
                    self.$stepMotorMod = true;
                }

            });

            // Toggle between active motor color
            this.$motorColors.on('click', function () {
                var $this = $(this),
                    $activeMotorColor = $this.data('motor-layer'),
                    $activeMotorImg = $this.data('motor-image');

                // Activate the clicked motor item
                $this
                    .addClass(self.motorColorActiveClass)
                    .siblings().removeClass(self.motorColorActiveClass);

                self.$motorImg.attr('src', $activeMotorImg);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'none',
                    'opacity': 0
                });
                self.activeMotor = self.$el.find("#" + $activeMotorColor);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'block',
                    'opacity': 1
                });

                self.$motorOption.find('.mobile__active-holder .area-list__color-box').css('background', $this.find('.motor-color__title').text());
            });

            // Activate active motor
            // this.activeMotor = self.$el.find("#" + this.activeMotorLayer);
            // this.updateBoatLayerMotor(this.activeMotor, {
            //     'display': 'block',
            //     'opacity': 1
            // });
            // this.$motorImg.attr('src', this.activeMotorImg);
            // this.motorColorContainer.html(this.$activeMotorItem.find('.motor-color').clone(true));
            // this.$motorDescription.html(this.$activeMotorItem.find('.motor__description').clone());


            //
            // Options
            //
            this.$stepOptionsMod = false;
            this.$optionItems = self.$el.find('.boatOption');

            // Hide all options on load
            this.$optionItems.each(function () {
                var $this = $(this),
                    userChoices = $this.closest('.option-list').data('user-choices'),
                    $optionLayer = $this.attr('data-boat-layer');

                userChoices = userChoices.toString();

                $this.on('click', function () {
                    var $this = $(this),
                        $optionDisplay = 'none',
                        $optionOpacity = '0';

                    $this.toggleClass('selected');

                    if (userChoices === '1') {
                        var $siblings = $this.siblings();

                        if ($siblings.length > 0) {
                            $siblings.removeClass('selected');

                            $siblings.each(function () {
                                var $this = $(this),
                                    $siblingLayer = $this.attr('data-boat-layer');

                                if ($siblingLayer != 'undefined' || $siblingLayer != '' || $siblingLayer != null) {
                                    var $boatOptionLayer = self.$el.find("#" + $siblingLayer);
                                    if ($boatOptionLayer !== 'undefined') {

                                        self.updateBoatLayerOption($boatOptionLayer, {
                                            'display': 'none',
                                            'opacity': 0
                                        });
                                    }
                                }
                            });
                        }
                    }

                    if ($optionLayer != 'undefined' || $optionLayer != '' || $optionLayer != null) {
                        var $boatOptionLayer = self.$el.find("#" + $optionLayer);
                        if ($boatOptionLayer !== 'undefined') {
                            $optionDisplay = $this.hasClass('selected') ? 'block' : 'none';
                            $optionOpacity = $this.hasClass('selected') ? 1 : 0;

                            self.updateBoatLayerOption($boatOptionLayer, {
                                'display': $optionDisplay,
                                'opacity': $optionOpacity
                            });
                        }
                    }

                    if (self.$stepOptionsMod == false) {
                        self.$nextText.text(self.nextText);
                        self.$stepOptionsMod = true;
                    }
                });
            });

            this.$optionSection = self.$el.find('.model-option');
            this.$optionItemTitle = self.$optionSection.find('.option-title');
            this.$optionItemMobileHolder = self.$optionSection.find('.mobile__active-holder');
            this.$optionItemActiveMobileTitle = self.$optionSection.find('.area-list__title');
            this.$optionSectionActiveMobileClass = 'model-options--active';

            this.$optionItemTitle.click(function () {
                var $this = $(this),
                    $container = $this.closest('div');

                $container.addClass(self.$optionSectionActiveMobileClass);
                self.$optionSection.addClass(self.mobileBlockActiveClass);
                self.$optionItemActiveMobileTitle.text($this.text());
            });

            this.$optionItemMobileHolder.click(function () {
                self.$optionItemTitle.closest('div').each(function () {
                    $(this).removeClass(self.$optionSectionActiveMobileClass);
                });
            });

            //
            // Make It Yours
            //
            this.$form = self.$el.find('#gform_7');
            this.$formSubmit = self.$form.find('#gform_submit_button_7');
            this.$contactItems = self.$el.find('.contact-block .option-list__item');

            this.$formSubmit.click(function (e) {
                e.preventDefault();
                self.$formSubmit.val('Loading... Please Wait');
                self.processImage();
            });

            this.$contactItems.on('click', function () {
                var $this = $(this);

                $this.toggleClass('selected');
                $this.siblings().removeClass('selected');
            });

            // Form inputs
            this.$formMotorInput = self.$el.find('.gfield.input-motor input');
            this.$formOptionsInput = self.$el.find('.gfield.input-options textarea');
            this.$formEmailChoiceInput = self.$el.find('.gfield.input-email-choice');
            this.$formImageInput = self.$el.find('.gfield.input-boat-image input');
            this.$formEmailChoices = self.$el.find('.email-input__choice');

            this.$formEmailChoices.on('click', function () {
                var $emailChoice = $(this).data('email-choice');

                self.$formEmailChoiceInput.find('input[value="' + $emailChoice + '"]').prop('checked', true);
            });

            $('.bab-form__refresh a').click(function () {
                location.reload(true);
            });

        },
        processImage: function (img) {
            var that = this;

            var boatImage = document.querySelector("#bab-image svg");
            var xmlImage = new XMLSerializer().serializeToString(boatImage);
            xmlImage = xmlImage.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, "");
            var xmlData = JSON.stringify({svgElement: xmlImage});

            $.ajax({
                url: "https://wt-e853d581b8c1ce10789506e9fec791ab-0.sandbox.auth0-extend.com/async-svg-canvas",
                data: xmlData,
                contentType: 'application/json',
                dataType: 'json',
                type: 'POST',
                success: function(data) {
                    uploadImage(data.image);
                },
                fail: function (data) {
                    console.error("Failed to parse SVG to PNG");
                }
            });

            var uploadImage = function (img) {

                $.ajax({
                    url: localized.ajaxurl, // AJAX handler
                    data: {
                        'action': 'e11_upload_baseImage',
                        'img': img,
                        'title': 'BAB-image'
                    },
                    dataType: 'json',
                    type: 'POST',
                    beforeSend: function () {
                        // button.text('Loading...');
                    },
                    success: function (data) {
                        if (data) {
                            console.log(data);
                            that.$formImageInput.val(data['boat_url'][0]);

                        } else {
                            console.log('no data');
                        }
                        that.$form.trigger('submit');
                    }
                });

            };
        },
        updateForm: function () {
            // Form data - Motor
            this.$formMotor = this.$el.find('.motor-option__list-item.active');
            if (this.$formMotor.length > 0) {
                this.$formMotorData = this.$formMotor.find('.motor-option__list-title').text();
                this.$formMotorInput.val(this.$formMotorData);
            }

            // Form data - Options
            this.$formOptions = this.$el.find('.model-option.model-option--alt .option-list__item.boatOption.selected');
            if (this.$formOptions.length > 0) {
                this.$formOptionsData = [];
                var that = this;
                this.$formOptions.each(function () {
                    that.$formOptionsData.push($(this).find('.option-list__text').text());
                });

                that.$formOptionsData = that.$formOptionsData.join('\n');
                this.$formOptionsInput.val(that.$formOptionsData);
            }
        },
        updateBoatLayerColor: function (layer, css) {
            layer.css(css);
        },
        updateBoatLayerMotor: function (layer, css) {
            layer.css(css);
        },
        updateBoatLayerOption: function (layer, css) {
            layer.css(css);
        },
        updateNav: function () {
            // Add class if at first step
            if (this.activeItem === 0) {
                this.$nav.addClass(this.startClass);
                if (this.$stepColorMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            } else {
                this.$nav.find('.step-prev span').text(this.$items.eq(this.activeItem).attr('data-label-back'));
                this.$nav.removeClass(this.startClass);
            }

            if (this.activeItem === 1) {
                if (this.$stepMotorMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            }

            // Add class if at second last step
            if (this.activeItem === 2) {
                this.$nav.addClass(this.finishClass);

                if (this.$stepOptionsMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            } else {
                this.$nav.removeClass(this.finishClass);
            }

            // Add class if at last step
            if (this.activeItem === 3) {
                this.$nav.addClass(this.endClass);
            } else {
                this.$nav.removeClass(this.endClass);
            }
        },
        activateItem: function (i) {
            this.$items.eq(i).addClass(this.activeClass);
            this.$steps.eq(i).addClass(this.activeClass);

            if (this.activeItem === 2) {
                if ($(window).width() > 767) {
                    var settings = {
                        autoplay: false,
                        autoplaySpeed: 3000,
                        dots: true,
                        arrows: true,
                        draggable: false,
                        infinite: false,
                        speed: 1000,
                        pauseOnFocus: false,
                        pauseOnHover: true,
                        pauseOnArrowsHover: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 1100,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                },

                            },
                            {
                                breakpoint: 768,
                                settings: 'unslick'
                            }
                        ]
                    };

                    $('.option-slider')[1].slick.refresh(settings);
                }
            }
            if (this.activeItem === 3) {
                this.$buildABoat.addClass(this.endClass);
                this.updateForm();
            } else {
                this.$buildABoat.removeClass(this.endClass);
            }
        },
        deactivateItem: function (i) {
            this.$items.eq(i).removeClass(this.activeClass);
            this.$steps.eq(i).removeClass(this.activeClass);
        }
    };

    $.e11.fn.pluginGenerator(BuildABoat);

})
(jQuery, window, document);

jQuery(document).ready(function ($) {

    $(window).on('load', function () {
        $('body').addClass('page-loaded');
    });

    var $WYSIWYGiframes = $('.content-block iframe');

    if ($WYSIWYGiframes.length > 0) {
        $WYSIWYGiframes.each(function () {
            var $this = $(this),
                src = $this.attr('src');

            if(src.indexOf("youtube") >= 0 || src.indexOf("vimeo") >= 0) {
                $this.wrap('<div class="video-container"></div>');
            }
        });
    }

    $(window).scroll(function () {
        doAnimateCss();
    });

    doAnimateCss();

    function doAnimateCss() {
        $('[data-animate-css]').each(function () {
            if ($(this).is(':in-viewport')) {
                animateCss($(this));
            }
        })
    }

    function animateCss(elements) {
        elements.each(function () {
            $(this).css('animation-delay', $(this).attr('data-animate-css-delay'));
            $(this).addClass('animated ' + $(this).attr('data-animate-css'));
            $(this).css('visibility', 'visible');
        })
    }

    // init Isotope
    // var $grid = $('.model-list__grid').isotope({
    //     itemSelector: '.model-list__block',
    //     layoutMode: 'fitRows',
    //     isFitWidth: true,
    // });
    var $grid = $('.model-list__grid').isotope({
        itemSelector: '.model-list__block',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        length: function () {
            var number = $(this).find('.length .detail').text();
            return parseInt(number, 10) == 40;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.length .detail').text();
            return name.match(/40$/);
        },
        // flatten object by concatting values
        concatValues: function (obj) {
            var value = '';
            for (var prop in obj) {
                value += obj[prop];
            }
            return value;
        }
    };

    // bind filter on select change
    var selected_length_filter;
    $('.filters-select').on('change', function () {
        // get filter value from option value
        var filterValue = this.value;
        selected_length_filter = filterValue;

        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        var filters = [filterValue, selected_cat_filter];

        if (selected_cat_filter) {
            var finalFilterValue = filterFns.concatValues(filters);
        } else {
            var finalFilterValue = filterValue;
        }

        $grid.isotope({filter: finalFilterValue});

    });
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    var $cat_filters = $('[data-filter-category]');
    if ($cat_filters.length > 0) {

        var selected_cat_filter;

        $cat_filters.each(function () {
            var $this = $(this);

            $this.on('click', function (e) {
                e.preventDefault();
                var filterValue = $this.data('filter-category'),
                    $container = $(this).closest('li'),
                    $siblings = $container.siblings('.filter-type__container');

                selected_cat_filter = filterValue;

                $siblings.removeClass('filter-type--active');
                $container.addClass('filter-type--active');

                var filters = [filterValue, selected_length_filter];

                if (selected_length_filter) {
                    var finalFilterValue = filterFns.concatValues(filters);
                } else {
                    var finalFilterValue = filterValue;
                }
                $grid.isotope({filter: finalFilterValue});

            });
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
    }


    $('.filters-select').select2();

    var $modelList__block = $('.model-list__block');

    if ($modelList__block.length > 0) {
        $modelList__block.each(function () {
            var $this = $(this),
                $modelList__trigger = $this.find('.model-list__trigger-container'),
                $sliblings = $this.siblings('.model-list__block');

            $modelList__trigger.on('click', function () {
                $sliblings.removeClass('active');
                $this.toggleClass('active');
            });
        });
    }

    $('.motor-list__trigger-container').on('click', function () {
        $(this)
            .closest(".motor-list__content").toggleClass('active')
            .closest(".motor-list__item").toggleClass('active');
        $(this).closest(".motor-list__content").children(".motor-list__description").slideToggle(200);
    });

    $('.column-model__trigger').on('click', function () {
        $(this).closest(".column-model__item").toggleClass('active');
        $(this).closest(".column-model__item").children(".column-model__content").slideToggle();
    });

    $('.newsletter-block__title, .language-switcher__title').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });

    if ($(window).width() > 1100) {
        $(".mega-menu li:not(:last) a").on({
            "mouseover": function () {
                image_url = $(this).data('src');
                $(".menu-content").addClass('active');
                $(".menu-content").children().hide();
                $(".menu-content").css({'background': 'url(' + image_url + ') no-repeat center center / cover'});
            },
            "mouseout": function () {
                $(".menu-content").children().show();
                $(".menu-content").css({'background': 'none'});
                $(".menu-content").removeClass('active');
            }
        });
    }

    $('.filter-list__toggle, .category-block .widget-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active')
    });

    var $compareMode = $('[data-class="compare-mode"]'),
        $modelList__grid = $('.model-list__grid');

    if ($compareMode.length > 0 && $modelList__grid.length > 0) {
        var $moduleComparision__list = $(".module-comparision__list"),
            selectedCompareModels = [],
            compareModeActiveBodyClass = 'compare-mode',
            compareModeActiveClass = 'compare-mode--active';

        $compareMode.on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass(compareModeActiveBodyClass);
            $modelList__grid.toggleClass(compareModeActiveClass);
            $('.model-list__block').removeClass('active').removeClass('selected');
            $('.module-comparision__block').fadeOut();
            selectedCompareModels = [];
        });

        $('.model-list__compare').on('click', function () {
            var $this = $(this),
                activeClass = 'selected',
                $container = $this.closest('.model-list__block'),
                id = $container.index() - 2;

            if ($container.hasClass(activeClass)) {
                $container.removeClass(activeClass);
                selectedCompareModels = $.grep(selectedCompareModels, function (value) {
                    return value !== id;
                });
            } else {
                $container.addClass(activeClass);
                selectedCompareModels.push(id);
            }

            var select_length = selectedCompareModels.length;

            if (select_length > 1) {
                $('.module-btn-box').fadeIn("slow");
                $('.module-selection-count a').text("COMPARE THESE " + select_length + ' MODELS');
            } else {
                $('.module-btn-box').fadeOut("slow");
            }
        });

        var modalContainer = $('.module-comparision__block.module-item-box');

        $('.compare-btn').on('click', function () {
            modalContainer.css('opacity', 0);

            var i;
            for (i = 0; i < selectedCompareModels.length; i++) {

                var $compareItem = $('.model-list__block').eq(selectedCompareModels[i]),
                    $details = $compareItem.find('.model-list-stat__container').clone(),
                    data = $compareItem.find('img').data();

                var $newHtmlStart = $("<div class=\"module-comparision__item\">" +
                    "<div class=\"model-list__image\">" +
                    "    <img src=\"" + data['imgSrc'] + "\" alt=\"" + data['alt'] + "\">" +
                    "</div>" +
                    "<div class=\"model-list__detail\">" +
                    "    <div class=\"model-list__title-wrap\">" +
                    "        <h3 class='model-list__title'>" + data['title'] + "</h3>" +
                    "        <button class=\"model-list__trigger-container compareMode__remove\"><span class=\"model-list__trigger\"></span></button>" +
                    "    </div>" +
                    "    <div class=\"model-list-hidden__content\">" +
                    "        <div class=\"model-list-cta__container\">" +
                    "            <a href=\"" + data['link'] + "\" class=\"btn btn--outline\">Visit Model Page</a>" +
                    "        </div>" +
                    "    </div>" +
                    "</div>" +
                    "</div>");

                $newHtmlStart.find('.model-list-hidden__content').prepend($details);
                $moduleComparision__list.append($newHtmlStart);
            }

            $moduleComparision__list.on('init', function (event, slick) {
                $('.module-item-box').hide(function () {
                    modalContainer.css('opacity', 1);
                    $('.module-item-box').slideDown("slow");
                });
            });

            $('.module-item-box').slideDown("slow", function () {
                $moduleComparision__list.slick({
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 800,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 400,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            });
        });

        $('.module-comparision__block.module-btn-box .close').on('click', e11_close_and_clear_list);

        $('.module-comparision__block.module-item-box .close').on('click', e11_close_and_clear_list);

        function e11_close_and_clear_list(e){
            e.preventDefault();
            $('.module-comparision__block').fadeOut("slow", function () {
                $('.model-list__block').removeClass('selected');
                if ($moduleComparision__list.hasClass('slick-initialized')) {
                    $moduleComparision__list.slick('destroy');
                }
                $modelList__grid.removeClass(compareModeActiveClass);
                $('body').removeClass(compareModeActiveBodyClass);
                selectedCompareModels = [];
                $moduleComparision__list.empty();
            });
        }

        $(document).on('click', '.compareMode__remove', function () {
            var $this = $(this),
                $container = $this.closest('.module-comparision__item');

            $moduleComparision__list.slick('slickRemove', $container.index());
        });
    }




    $(".mobile-nav__toggle").click(function (e) {

        $('.menu-item-has-children').each(function (index, value) {
            if ($(this).children('a').hasClass("menu-open")) {
                $(this).children('.sub-menu').css({height: 'auto'});
            } else {
                $(this).children('.sub-menu').css({"height": "0"});
            }
        });

    });

    if ($(".menu-item-has-children ").length > 0) {
        $('.primary-nav li.menu-item-has-children > a')
            .prepend('<svg class="icon icon-nav-left icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg>')
            .append('<button class="nav__parent-arrow--mobile" data-class="mobile-nav-dropdown-toggle"></button>')
            .append('<svg class="icon icon-nav-right icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg>');
        $(".nav__parent-arrow--mobile").click(function (e) {
            e.preventDefault();
            if ($(this).parent().hasClass("menu-open")) {
                $(this).parent().siblings(".sub-menu").animate({"left": "100vw", "height": "0"}, 350);
                $(this).parent().removeClass('menu-open');
                $(this).closest('.menu-item-has-children').removeClass('menu-open-parent');
                $(this).closest('.menu-item-has-children').siblings().show();
                $('.secondary-nav, .social-block').show();
            } else {
                $(this).parent().addClass('menu-open');
                $(this).closest('.menu-item-has-children').addClass('menu-open-parent');
                var heightfull = $(this).parent().siblings(".sub-menu").css({height: 'auto'}).outerHeight(true);
                $(this).parent().siblings(".sub-menu").animate({"left": "0", "height": heightfull}, 350);
                $(this).closest('.menu-item-has-children').siblings().hide();
                $('.secondary-nav, .social-block').hide();
            }

        });
    }

    var $form_toggles = $('[data-form-toggle]'),
        $form_wraps = $('[data-form-wrap]');

    if ($form_toggles.length > 0) {
        var $formButtonClass = 'form-toggle--active',
            $formWrapClass = 'form-wrap--active';

        $form_toggles.each(function () {

            var $this = $(this),
                $formNum = $this.data('form-toggle'),
                $form_wrap = $('.form-wrap[data-form-wrap="' + $formNum + '"]'),
                $form_wrapSibling = $form_wrap.siblings('.form-wrap');

            $this.on('click', function (e) {
                e.preventDefault();

                $this.toggleClass($formButtonClass);
                $form_wrap.toggleClass($formWrapClass);
                $form_wrapSibling.removeClass($formWrapClass);
            });
        });
        $('.model-nav__item').click(function () {
            $form_toggles.removeClass($formButtonClass);
            $form_wraps.removeClass($formWrapClass);
        });
    }


    var settings = {
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        draggable: false,
        infinite: false,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnArrowsHover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },

            },
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    };
    $('.option-slider').slick(settings);
    // var slickClients = $('.option-slider').slick(settings);
    // $(window).on('resize', function () {
    //     if ($(window).width() > 768 && !slickClients.hasClass('slick-initialized')) {
    //
    //     }
    // });

    $('#parentTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            var $tab = $(this);
            var $active_tab_text = $tab.text().trim();
            $('.nav-block__toggle, .nav-block__inner').removeClass('active');

            if ($active_tab_text != ' Virtual Tour ' && $active_tab_text != ' Gallery ') {
                // $('.nav-block__toggle, .nav-block__inner').toggleClass('active');
                $(".nav-block__active-tab").text($active_tab_text);
            }

            if ($active_tab_text == 'Options') {
                $('.form-toggle__email-list').css('display', 'block');
            } else {
                $('.form-toggle__email-list').css('display', 'none');
            }

            if ($(window).width() > 767) {
                $('.option-slider')[0].slick.refresh();
            }

            if( $active_tab_text == 'Options' ){
                var newHash = 'optional-equipment';
            } else if($active_tab_text == 'Overview'){
                var newHash = 'about';
            } else{
                var newHash = $active_tab_text.toLowerCase().replace(' ', '-');
            }

            window.location.hash = newHash;

        }
    });

    if (window.location.hash !== '') {
        var urlHash = window.location.hash;

         $('#parentTab').find(urlHash).click();
    }

    // add the class .tab-link to any old <a> tag, set the href attribute to the #id of the tab you want to switch to.
    $('.tab-link').click(function (e) {
        var thisHref = $(this).attr('href');

        e.preventDefault();
        $(thisHref).click();
    });

    // Child Tab
    $('#childTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        tabidentify: 'hor_child_1', // The tab groups identifier
    });

    $active_text = $(".model-nav__item.resp-tab-active").text();
    $(".nav-block__active-tab").text($active_text);

    var $modelNav__item = $('.model-nav__item'),
        $overviewNav__item = $('.overview-nav__item a');

    if ($overviewNav__item.length > 0 && $modelNav__item.length > 0) {
        $overviewNav__item.on('click', function (e) {
            e.preventDefault();
            var $target = $(this).data('target');

            if ($target !== undefined) {
                $('[data-class="' + $target + '"]').trigger('click');
                var $subtarget = $(this).data('subtarget');
                if ($subtarget !== undefined) {
                    $('[data-class="' + $subtarget + '"]').trigger('click');
                }
            }
        });
    }


    $('.motor-thumbnail .icon-close').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest(".motor-option__inner").children('.motor-option__description').slideToggle();
    });

    $('.nav-block__toggle').on('click', function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            $this.removeClass('active');
            $this.next('.nav-block__inner').removeClass('active');
        } else {
            $this.addClass('active');
            $this.next('.nav-block__inner').addClass('active');
        }
    });

    $('.scroll-to-top').on('click', function (e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    $('.image-slider').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        draggable: false,
        fade: false,
        speed: 500,
    });

    // $('.instagram-block #sbi_images').slick({
    //     autoplay: false,
    //     autoplaySpeed: 3000,
    //     slide: '.sbi_item',
    //     dots: false,
    //     arrows: false,
    //     draggable: false,
    //     speed: 1000,
    //     pauseOnFocus: false,
    //     pauseOnHover: false,
    //     pauseOnArrowsHover: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // });

    // var $sbi_images = $('.instagram-feed #sbi_images');
    //
    // if ($sbi_images.length > 0) {
    //
    //     $sbi_images.slick({
    //         autoplay: true,
    //         autoplaySpeed: 3000,
    //         dots: false,
    //         arrows: true,
    //         draggable: false,
    //         speed: 1000,
    //         pauseOnFocus: false,
    //         pauseOnHover: false,
    //         pauseOnArrowsHover: false,
    //         slidesToShow: 5,
    //         slidesToScroll: 1,
    //         responsive: [
    //             {
    //                 breakpoint: 1000,
    //                 settings: {
    //                     slidesToShow: 4,
    //                     slidesToScroll: 1,
    //                 }
    //
    //             },
    //             {
    //                 breakpoint: 800,
    //                 settings: {
    //                     slidesToShow: 3,
    //                     slidesToScroll: 1,
    //                 }
    //
    //             },
    //             {
    //                 breakpoint: 600,
    //                 settings: {
    //                     slidesToShow: 2,
    //                     slidesToScroll: 1,
    //                 }
    //
    //             },
    //             {
    //                 breakpoint: 400,
    //                 settings: {
    //                     slidesToShow: 1,
    //                     slidesToScroll: 1,
    //                 }
    //
    //             }
    //         ]
    //     });
    // }
    //
    // $('.sbi_photo').fancybox();

    var $toggleList__item = $('.toggle-list__item');

    if ($toggleList__item.length > 0) {
        var activeToggle = 0,
            $contactForm__title = $('.contact-form__title'),
            $fakeSelect = $('.fake-select'),
            $toggleList = $('.toggle-list'),
            activeToggleClass = 'active',
            activeToggleTitleClass = 'contact-form__title--active';

        $toggleList__item.each(function () {
            var $this = $(this),
                toggleIndex = $this.index(),
                $toggleItems = $this.siblings(),
                $toggleContent__item = $('.toggle-content__item').eq(toggleIndex),
                $fakeSelectText = $fakeSelect.text();

            $this.on('click', function () {
                if ($this.hasClass(activeToggleClass)) {
                    $this.removeClass(activeToggleClass);
                    $toggleContent__item.removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(0).addClass(activeToggleClass);

                    if ($contactForm__title.length > 0) {
                        $contactForm__title.removeClass(activeToggleTitleClass);
                    }
                    $fakeSelect.text($fakeSelectText);

                } else {
                    $toggleItems.removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(0).removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(activeToggle).removeClass(activeToggleClass);

                    if ($contactForm__title.length > 0) {
                        $contactForm__title.addClass(activeToggleTitleClass);
                    }
                    $this.addClass(activeToggleClass);
                    $toggleContent__item.addClass(activeToggleClass);
                    $fakeSelect.text($this.text());
                }

                $toggleList.removeClass(activeToggleClass);

                activeToggle = toggleIndex;
            })
        });

        if ($fakeSelect.length > 0) {
            $fakeSelect.on('click', function () {
                $toggleList.toggleClass(activeToggleClass);
            });
        }
    }

    // $('.toggle-list__item').on('click', function () {
    //     $(".toggle-nav__title").hide();
    //     $(".contact-form__title").removeClass('contact-form__title--hide');
    //     $(".contact-form__title:first-child").addClass('contact-form__title--hide');
    //     $(".toggle-list__item, .toggle-content__item").siblings().removeClass('active');
    //     var index = $(".toggle-list__item").index(this);
    //     $(this).addClass('active');
    //     $(".toggle-content__item").eq(index).addClass('active');
    //     $active_text = $(this).text();
    //     $('.fake-select').text($active_text);
    //     $(this).parent().removeClass('active');
    //     $(this).parent().prev().addClass('active');
    // });

    $('.service-form__trigger').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest(".service-form").children(".service-form__content").slideToggle();
    });

    $('.custom-tab__bg.tab-0').addClass('active');
    $('.custom-tab__nav-item:first-child a').addClass('active');
    $('.custom-tab__content-item:first-child').addClass('active');
    $('.custom-tab__nav-item a').click(function (e) {
        e.preventDefault();
        $('.custom-tab__nav-item a').removeClass('active');
        $(this).addClass('active');
        var tagid = $(this).attr('href');
        $('.custom-tab__content-item').removeClass('active').addClass('hide');
        $('.custom-tab__bg').removeClass('active').addClass('hide');
        $('.' + tagid).addClass('active').removeClass('hide');

    });

    $('.custom-tab-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

    $('.model-option .form-wrap .option-list__item').on('click', function () {
        $(this)
            .addClass('selected')
            .siblings().removeClass('selected');
    });

    $('.custom-tab-slider').on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($('.custom-tab-slider').slick('slickCurrentSlide') !== index) {
            $('.custom-tab-slider').slick('slickGoTo', index);
        }
    });

    var $deckPoint__container = $('.deck-point__container');

    if ($deckPoint__container.length > 0) {
        var activeDeckPoint = undefined,
            activeDeckContainer = undefined;
        $deckPoint__container.each(function () {
            var $this = $(this),
                $deckPointInfo = $this.find('.deck-block__info'),
                $deckPointClose = $this.find('.close'),
                $deckPoint = $this.find('.deck-point'),
                $siblings = $this.siblings('.deck-point__container'),
                activeClass = 'deck-point--active';

            $deckPoint.on('click', function () {
                if (activeDeckPoint !== undefined && activeDeckContainer !== undefined) {
                    activeDeckContainer.removeClass(activeClass);
                    activeDeckPoint.removeClass(activeClass);
                    activeDeckPoint.appendTo(activeDeckContainer);
                }

                if ($this.hasClass(activeClass)) {
                    $this.removeClass(activeClass);
                    $deckPointInfo.removeClass(activeClass);
                    $deckPointInfo.appendTo($this);

                } else {
                    $siblings.removeClass(activeClass);
                    $this.addClass(activeClass);
                    $deckPointInfo.appendTo('body');
                    $deckPointInfo.addClass(activeClass);
                }
                activeDeckContainer = $this;
                activeDeckPoint = $deckPointInfo;
            });

            $deckPointClose.on('click', function () {
                $this.removeClass(activeClass);
                $deckPointInfo.removeClass(activeClass);
                $deckPointInfo.appendTo($this);
            });

            $modelNav__item.on('click', function () {
                $this.removeClass(activeClass);
                $deckPointInfo.removeClass(activeClass);
                $deckPointInfo.appendTo($this);
            });
        });
    }

    var $adminbarHeight = 0,
        $wpadminbar = $('#wpadminbar');

    if ($wpadminbar.length > 0) {
        $adminbarHeight = $wpadminbar.outerHeight();
    }

    $(".page__single--boat .nav-block").stick_in_parent({
        offset_top: $('.header').outerHeight() + $adminbarHeight
    });

    var $highContrastLink = $('.high-contrast-link');

    if ($highContrastLink.length > 0) {
        $highContrastLink.click(function (e) {
            e.preventDefault();
            $('body').toggleClass('high-contrast--active');
        });
    }

    var timer = setInterval(checkScriptExists, 1000);

    function checkScriptExists() {
        var google_script_url = "//translate.google.com/translate_a/element.js";
        if ($("script[src*='" + google_script_url + "']")[0]) {
            // run google translate function
            new google.translate.TranslateElement(
                {
                    pageLanguage: "en",
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                "header-site-translation"
            );
            clearInterval(timer);
            return;
        }
    }
});




$(function () {

    $('.header').e11_MobileNav();

});

(function ($, window, document, undefined) {

    var name = 'MobileNav';

    function MobileNav(element, index, options) {
        this.$el = $(element);
        this.options = $.extend({}, $.e11.fn[name].defaults, options);
        this.init();
    }

    MobileNav.prototype = {

        name: name,

        init: function () {

            var self = this;

            this.$toggle = this.$el.find('[data-class="nav__toggle"]');

            this.activeClass = 'nav__visible';

            this.$toggle.on('click', function (e) {
                e.preventDefault();

                $('body').toggleClass(self.activeClass);
                $(this).children('.mobile-nav__header').text($(this).children('.mobile-nav__header').text() == 'close' ? 'menu' : 'close');
            });
        }
    };

    $.e11.fn.pluginGenerator(MobileNav);

})
(jQuery, window, document);

jQuery(function($){

	$loadMoreButton = $('[data-class="load-more"]');

	if( $loadMoreButton.length > 0 ){

		$loadMoreButton.click(function(e){

		e.preventDefault();

		var excludeId = $(this).data('exclude').toString(),
		excludedPosts = excludeId.split(', ');

		var loadMoreQuery = jQuery.parseJSON(localized.posts);
			loadMoreQuery.post__not_in = excludedPosts,
			formattedQuery = JSON.stringify(loadMoreQuery);


			var button = $(this),
			$container = $('.post-list__wrap'),
			data = {
				'action': 'e11_load_more',
				'query': formattedQuery,
				'page': localized.current_page,
			};

			$.ajax({
				url: localized.ajaxurl, // AJAX handler
				data: data,
				type: 'POST',
				beforeSend: function () {
					button.text('Loading...');
				},
				success: function (data) {
					if (data) {
						button.text('Load More Posts');

						localized.current_page++;

						if (localized.current_page === localized.max_page) {
							button.remove(); // if last page, remove the button
						}

						var $data = $(data);

						$container.append( $data );

					} else {
						button.remove(); // if no data, remove the button as well
					}
				}
			});

		});

	}
});

$(function () {

    var $addButton = $('[data-class="owner-portal__add-section"]');

    var getNumericPart = function(id) {
        var $num = parseInt(id.replace(/[^\d]+/, ''));
        return $num;
    }

    if($addButton.length > 0){

        $addButton.each(function(){
            var $this = $(this);

            $this.click(function(){
                var $form = $this.parents('.owner-portal__form'),
                $lastSection = $form.find('.owners-portal__form-section').last(),
                newId = getNumericPart($lastSection.attr('id')) + 1,
                idString = 'owners-portal__image-form-section';


                //clone last section
                var $newSection = $lastSection.clone();

                //change id
                $newSection.attr('id', idString + '-' + newId);

                //get all new inputs
                var $newInputs = $newSection.find('input'),
                    $newTextField = $newSection.find('textarea');
                // console.log($newInputs);

                //change names/ids of inputs inside
                $newInputs.each(function(){
                    // var nameString = ''
                    // $(this).attr('name', $(this).attr('name' + '-' + newId));
                    // console.log($(this));
                    // $(this).val('');
                });

                //append remove button to new section
                var removeButton = '<button class=" btn btn--dark" type="button" data-class="owner-portal__remove-section" style="margin-bottom: 10px;">remove this section</button>';
                $newSection.append(removeButton);

                //apend to last section
                $newSection.insertAfter($lastSection);


                //change button to plural on adding another upload field
                $submitButton = $form.find('[data-class="owner-portal__submit"]');
                submitText = $submitButton.val();

                if($('.owners-portal__form-section').length > 1 && $submitButton.val().slice(-1) !== 's'){
                    var oldText = $submitButton.val();
                    $submitButton.val(oldText + 's');
                }


            });
        });
    }

    var $removeButton = $('[data-class="owner-portal__remove-section"]');

    $(document).on('click', $removeButton, function(){
        console.log($(this).parents('.owners-portal__form-section'));
        $(this).parents('.owners-portal__form-section').remove();
    });
});


//add ability to remove added setion
//clear out chosen file and other inputs when new section added

$(function () {

    var $portalLogin = $('.portal-login');

    if ($portalLogin.length > 0) {
        var $portalLogin__login = $portalLogin.find('.portal-login__login'),
            $portalLogin__createAccount = $portalLogin.find('.portal-login__create-account'),
            $portalLogin__lostPassword = $portalLogin.find('.portal-login__lost-password'),
            $portalLogin__linkForgotPassword = $portalLogin.find('.portal-login__link-forgot-password'),
            $portalLogin__linkCreateAccount = $portalLogin.find('.portal-login__link-create-account'),
            $portalLogin__linkBackCreateAccount = $portalLogin.find('.portal-login__link-back-from-create-account'),
            $portalLogin__linkBackLostPass = $portalLogin.find('.portal-login__link-back-from-lost-pass');

        $portalLogin__linkForgotPassword.on('click', function () {
            $portalLogin__login.fadeOut(300, function () {
                    $portalLogin__lostPassword.fadeIn(300);
                }
            );
        });

        $portalLogin__linkBackLostPass.on('click', function () {
            $portalLogin__lostPassword.fadeOut(300, function () {
                    $portalLogin__login.fadeIn(300);
                }
            );
        });

        $portalLogin__linkCreateAccount.on('click', function () {
            $portalLogin__login.fadeOut(300, function () {
                    $portalLogin__createAccount.fadeIn(300);
                }
            );
        });

        $portalLogin__linkBackCreateAccount.on('click', function () {
            $portalLogin__createAccount.fadeOut(300, function () {
                    $portalLogin__login.fadeIn(300);
                }
            );
        });
    }

});


var player;
    function onYouTubeIframeAPIReady() {
        console.log(video_id);
    player = new YT.Player('heroVideo', {
        videoId: video_id,
        events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
        },
        host: 'http://www.youtube-nocookie.com',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'mute': 1,
            'enablejsapi': 1,
            'loop' : 1,
            'playlist': video_id},
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById('heroVideo').style.opacity = 1;
    }

    if (event.data == YT.PlayerState.ENDED) {
        document.getElementById('heroVideo').style.opacity = 0;
    }
}

