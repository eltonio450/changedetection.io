/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e){"use strict";if(typeof exports==="object"&&typeof exports.nodeName!=="string"){e(require("jquery"))}else if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(t){"use strict";var r=function(e){e=e||"once";if(typeof e!=="string"){throw new TypeError("The jQuery Once id parameter must be a string")}return e};t.fn.once=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)!==true}).data(n,true)};t.fn.removeOnce=function(e){return this.findOnce(e).removeData("jquery-once-"+r(e))};t.fn.findOnce=function(e){var n="jquery-once-"+r(e);return this.filter(function(){return t(this).data(n)===true})}});

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}((function(e){"use strict";return e.ui=e.ui||{},e.ui.version="1.13.1"}));

/*!
 * jQuery UI :data 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.extend(e.expr.pseudos,{data:e.expr.createPseudo?e.expr.createPseudo((function(n){return function(t){return!!e.data(t,n)}})):function(n,t,r){return!!e.data(n,r[3])}})}));

/*!
 * jQuery UI Disable Selection 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.fn.extend({disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(n+".ui-disableSelection",(function(e){e.preventDefault()}))}),enableSelection:function(){return this.off(".ui-disableSelection")}});var n}));

/*!
 * jQuery UI Focusable 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.focusable=function(i,t){var n,s,r,u,a,o=i.nodeName.toLowerCase();return"area"===o?(s=(n=i.parentNode).name,!(!i.href||!s||"map"!==n.nodeName.toLowerCase())&&((r=e("img[usemap='#"+s+"']")).length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(o)?(u=!i.disabled)&&(a=e(i).closest("fieldset")[0])&&(u=!a.disabled):u="a"===o&&i.href||t,u&&e(i).is(":visible")&&function(e){var i=e.css("visibility");for(;"inherit"===i;)i=(e=e.parent()).css("visibility");return"visible"===i}(e(i)))},e.extend(e.expr.pseudos,{focusable:function(i){return e.ui.focusable(i,null!=e.attr(i,"tabindex"))}}),e.ui.focusable}));

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())}));

/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";if(e.expr.pseudos||(e.expr.pseudos=e.expr[":"]),e.uniqueSort||(e.uniqueSort=e.unique),!e.escapeSelector){var n=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,t=function(e,n){return n?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e};e.escapeSelector=function(e){return(e+"").replace(n,t)}}e.fn.even&&e.fn.odd||e.fn.extend({even:function(){return this.filter((function(e){return e%2==0}))},odd:function(){return this.filter((function(e){return e%2==1}))}})}));

/*!
 * jQuery UI Keycode 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.plugin={add:function(n,i,t){var u,o=e.ui[n].prototype;for(u in t)o.plugins[u]=o.plugins[u]||[],o.plugins[u].push([i,t[u]])},call:function(e,n,i,t){var u,o=e.plugins[n];if(o&&(t||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(u=0;u<o.length;u++)e.options[o[u][0]]&&o[u][1].apply(e.element,i)}}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeActiveElement=function(e){var n;try{n=e.activeElement}catch(t){n=e.body}return n||(n=e.body),n.nodeName||(n=e.body),n}}));

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],e):e(jQuery)}((function(e){"use strict";return e.ui.safeBlur=function(n){n&&"body"!==n.nodeName.toLowerCase()&&e(n).trigger("blur")}}));

/*!
 * jQuery UI Scroll Parent 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.scrollParent=function(e){var s=this.css("position"),n="absolute"===s,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,i=this.parents().filter((function(){var e=t(this);return(!n||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==s&&i.length?i:t(this[0].ownerDocument||document)}}));

/*!
 * jQuery UI Unique ID 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],i):i(jQuery)}((function(i){"use strict";return i.fn.extend({uniqueId:(e=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++e)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&i(this).removeAttr("id")}))}});var e}));

/*!
 * jQuery UI Labels 1.13.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./version"],t):t(jQuery)}((function(t){"use strict";return t.fn.labels=function(){var e,s,i,n,a;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(n=this.eq(0).parents("label"),(i=this.attr("id"))&&(a=(e=this.eq(0).parents().last()).add(e.length?e.siblings():this.siblings()),s="label[for='"+t.escapeSelector(i)+"']",n=n.add(a.find(s).addBack(s))),this.pushStack(n)):this.pushStack([])}}));

/**
 * Helper library to render a venue config on products.
 */
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.venueConfigDisplay = {
    attach: function (context) {
      $('.plan').closest('.ticket-content-wrapper.no-map').removeClass('no-map');
    }
  }
})(jQuery, Drupal);
;
/**
 * Helper library to format a number.
 */
(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.hubberNumberFormatter = {
    /**
     * Format a number as a price.
     *
     * If integer, we do not add any fraction digits. Otherwise, force to 2 fraction digits.
     */
    formatPrice : function (number, currency_code) {
      const number_fraction_digits = (Number.isInteger(number)) ? 0 : 2;
      return new Intl.NumberFormat(drupalSettings.locale, { style: 'currency', currency: currency_code, minimumFractionDigits: number_fraction_digits, maximumFractionDigits: number_fraction_digits }).format(number);
    },
  }
})(jQuery, Drupal, drupalSettings);
;
/**
 * @file
 * Defines Javascript behaviors for seat view cam display.
 */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.hubberSeatViewCam = {

    /**
     * Attache all events when DOM is ready.
     *
     * @return null
     */
    attach: function (context) {
      var self = this;

      /**
       * Event : Click on view cam button.
       *
       * Display dialog box with view cam.
       *
       * View cam button is a DOM element with class js-view-cam-button.
       * View cam button must have 3 attributes :
       *   - cam-modeller : Modeller provides the view cam (ex: pacifa)
       *   - cam-url : Cam view URL
       *   - cam-id : Modeller cam id
       */
      $(document).once('view-cam-button').on('click', '.js-view-cam-button', function(e) {
        var button = $(this);
        if (!button.attr('cam-modeller') || !button.attr('cam-url') || !button.attr('cam-id')) {
         return false;
        }
        var seat = {
          'cam_modeller': button.attr('cam-modeller'),
          'cam_url': button.attr('cam-url'),
          'cam_id': button.attr('cam-id')
        };
        var content = self.getHtmlViewCam(seat, 'pano');
        var options = {
          classes: {
            "ui-dialog": "view-cam-full"
          }
        };
        Drupal.dialog(content, options).showModal();
      });
    },

    /**
     * Get the html element to display seat view
     *
     * @param seat
     * @returns {string|boolean}
     */
    getHtmlViewCam: function (seat, format = undefined) {
      if (!seat.cam_modeller || !seat.cam_url || !seat.cam_id) {
        return false;
      }
      var cssProps = 'class="view-cam" cam-modeller="' + seat.cam_modeller + '" cam-url="' + seat.cam_url + '" cam-id="' + seat.cam_id + '"';
      switch (seat.cam_modeller) {
        case 'pacifa':
          if (format === 'thumb') {
            var src = seat.cam_url + '/panos/P' + seat.cam_id.padStart(5, 0) + '.tiles/thumb.jpg';
            return '<div class="view-cam-wrapper"><img src="' + src + '" ' + cssProps + ' ></div>';
          }
          var src = seat.cam_url + '/Pano.html?p=P' + seat.cam_id.padStart(5, 0);
          return '<div class="view-cam-wrapper"><iframe src="' + src + '" ' + cssProps + ' /></div>';
        default:
          return false;
      }
    }

  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * Init the seat mode controller
 * Returns one controller for one place
 *
 * @param place
 */
jQuery.initSeatMode = function (place) {
  var $ = this;
  var seat_mode = {
    place: place,
    is_mobile: false,
    cats_datas: {},
    blocks_datas: {},
    offer_datas: {},
    panZoomInstance: null,  // Will be the zoom controller

    // Mains
    initialize: function () {
      $(this.place).prop('controller', this); // Double link between the map
                                              // element and the object
      this.goto_next_salle = false;
      this.load_datas();
    },
    // loading
    load_datas: function () {
      // Get map data for this product.
      this.hvsc_id = $(this.place).attr('hvsc-id');
      var data = drupalSettings.maps[this.hvsc_id];

      if (undefined == data) {
        return false;
      }

      // Get categories list.
      this.cats_datas = data.offer.prices.categories;

      this.blocks_datas = data.blocks;
      this.offer_datas = data.offer;

      this.lazy_init_arena($('svg', this.place).get(0).outerHTML);
    },
    lazyload_complete: function (arena) {
      var container = $('.arena', this.place);

      container.find('svg').remove();
      container.append(arena);

      // Keep current block open if still available

      $('.bloc_meeting', this.place).show(0, function () {
        $(this).trigger('placeLoaded');
      });
    },

    lazy_init_arena: function (arena) {
      var self = this;
      var svgImages = $(arena).find('image');
      var images = [];

      // Initialize images status array
      for (var i = 0; i < svgImages.length; i++) {
        images[i] = false;
      }

      svgImages.each(function (index) {
        $.ajax(
          $(this).attr('xlink:href'),
          {
            cache: true,
            complete: function () {
              images[index] = true;

              // Calculate current images state
              var imagesStatus = true;
              for (var i in images) {
                imagesStatus = imagesStatus && images[i];
              }

              // When all images are loaded, let's end lazyloading process
              if (imagesStatus) {
                self.lazyload_complete(arena);
              }
            }
          }
        );
      });

      if (0 === svgImages.length) {
        self.lazyload_complete(arena);
      }
    },

    highlight_has_class: function (element, className) {
      var currentClass = element.attr('class');

      return undefined !== currentClass && -1 !== currentClass.indexOf(className);
    },
    move_tooltip: function (container, mouse) {
      // Display a moving tip.
      var parent_offset = container.parent().offset();
      var posX = mouse.pageX - parent_offset.left - container.outerWidth() - 10;
      var posY = mouse.pageY - parent_offset.top - container.outerHeight() - 10;
      if ((posX - $(document).scrollLeft()) < 50) {
        posX = mouse.pageX - parent_offset.left - 10;
      }
      if (posY < 10) {
        posY = mouse.pageY - parent_offset.top + 20;
      }
      container.show().css({
        left: posX,
        top: posY
      });
    },
    move_tooltip_near_block: function (container, element) {
      var tooltip = container;
      var block = element;
      var map = tooltip.parent();
      var mapOffset = map.offset();
      var blockOffset = block.offset();
      var adjustment = 0.80;
      var origin = {
        left: blockOffset.left - mapOffset.left,
        top: blockOffset.top - mapOffset.top,
      };
      // Move tooltip box to top left corner of the block
      var left = origin.left - (tooltip.width() * adjustment);
      var top = origin.top - (tooltip.height() * adjustment);
      if(left < 0 || top < 0) {
        // If tooltip box go out of the map, mov it to bottom right corner of the block
        left = origin.left + (block[0].getBBox().width * adjustment);
        top = origin.top + (block[0].getBBox().height * adjustment);
      }
      container.show().css({
        left: left,
        top: top
      });
    },
    display_block_tooltip: function (element, mouse) {
      if ($(element).hasClass('js-polygon_block_locked')) {
        return;
      }

      // Don't display any tip is the block is not in current selection.
      if (!$(element).hasClass('polygon_block_filtered')) {
        return;
      }

      var container = $('.block_tooltip', this.place);
      var block_id = element.attr('block-id');
      var block_mode = element.attr('block-mode');
      var blocks = [];
      blocks.push(block_id);

      if (!this.highlight_has_class(element, 'polygon_block_disabled')) {
        if (block_id !== container.attr('block-id')) {
          if (-1 !== block_mode.indexOf('zone-')) {
            element.siblings('polygon[block-mode="' + block_mode + '"]').each(function () {
              blocks.push($(this).attr('block-id'));
            });
          }

          container.attr('block-id', block_id);

          // Display block id in tooltip area.
          container
            .find('.block_tooltip_title')
            .html(Drupal.t('Block %name', {
              '%name': this.blocks_datas[block_id].name,
            }));

          offer = this.offer_datas;

          // Get list of categories to display.
          var cats = {};
          for (var j in blocks) {
            var subblock_id = blocks[j];
            if (undefined !== offer.blocks[subblock_id]) {
              for (var cat_id in offer.blocks[subblock_id]) {
                // Get categories information from this block.
                var dispos = offer.blocks[subblock_id][cat_id];
                if (0 < dispos) {
                  if (undefined == cats[cat_id]) {
                    cats[cat_id] = {
                      color: offer.prices.categories[cat_id].color,
                      name: offer.prices.categories[cat_id].name,
                      price: offer.prices.categories[cat_id].price,
                      locked: (offer.prices.categories[cat_id].locked !== undefined) ? offer.prices.categories[cat_id].locked : false,
                      dispos: dispos,
                    };
                  }
                  else {
                    cats[cat_id].dispos += dispos;
                  }
                }
              }
            }
          }

          // Build html code for categories.
          var html = '';
          for (var id in cats) {
            if (cats[id].locked) {
              continue;
            }
            var formatted_amount = Drupal.behaviors.hubberNumberFormatter.formatPrice(cats[id].price, drupalSettings.currency);
            html += '<li class="block-tooltip-item"><div class="category-line"><div class="category-title"><div class="box" style="background-color:' + cats[id].color
              + '"></div><div class="block-tooltip-category-name">' + cats[id].name
              + '</div></div><div class="block-tooltip-price">'
              + Drupal.t('From %price', {'%price': formatted_amount})
              + '</div></div><div class="block-tooltip-dispo seat-disponibility">'
              + Drupal.formatPlural(cats[id].dispos, '@count seat left.', '@count seats left.') + '</div></li>';
          }

          // Display categories info in tooltip zone.
          container.find('.block-tooltip-categories').html(html);
        }

        // Display the mooving tip.
        this.move_tooltip(container, mouse);
      }
    },
    hide_block_tooltip: function () {
      var container = $('.block_tooltip', this.place);

      container.hide();
    },
    display_seat_tooltip: function (element, mouse) {
      var self = this;
      // Display tip for the seat.

      // Only if the seat is visible on the map.
      if (
        element.hasClass('filtered')
        || !element.hasClass('js-hvsc-seat polygon_seat_enabled')) {
        return;
      }

      var container = $('.seat_tooltip', this.place);

      // Get category of this seat.
      var catId = element.attr('category-id');
      var category = this.cats_datas[catId];

      container.find('.box').css('background-color', category.color);
      container.find('.seat_tooltip_category').text(category.name);

      // Put seats quantity information.
      var places = $('.js-hvsc-seat.hover');

      // Get selected prices for this category.
      var type_prices = drupalSettings.hubberVirtualCart.catPriceDatas[self.hvsc_id][catId].type_prices;
      var prices = $.map(this.getSelectedPrices(catId), function (id) {
        return type_prices[id].price;
      });

      // Display differs if we are on add more places step after contiguity
      // group addition.
      var addMode
        = !$('#commerce-product-ticketing-form').prop('contig')
        && $('.js-hvsc-vscart-contig-items').length > 0;
      if (addMode) {
        container
          .find('.seat_tooltip_tickets')
          .html(
            Drupal.t(
              '%n tickets',
              {
                '%n': places.length
                  + $('.js-hvsc-vscart-contig-items .js-hvsc-vscart-item').length,
              }));
        container.find('.seat_tooltip_additional').show();
      }
      else {
        container
          .find('.seat_tooltip_tickets')
          .html(
            places.length > 1
              ? Drupal.t('%n tickets', {'%n': places.length})
              : Drupal.t('1 ticket'));
        container.find('.seat_tooltip_additional').hide();
      }

      // Get information from each concerned product.
      var products = '';
      var map = $(element).closest('.block_map');

      // Get total price of current cart.
      var $vscart_total = $('.js-hvsc-vscart-total');
      var total = $vscart_total[0].hasAttribute('data-total-price') ? parseFloat($vscart_total.attr('data-total-price')) : 0;

      for (var i = 0; i < places.length; i++) {
        var place = $(places[i]);
        var row = place.attr('rank');
        var seat = place.attr('place');
        var has_row = false;
        if (typeof row !== typeof undefined && row !== false && row !== '') {
          has_row = true;
        }
        var seat_infos = '';
        if (has_row) {
          seat_infos = Drupal.t('Row %rank / Seat %seat', {'%rank': row, '%seat': seat});
        }
        else {
          seat_infos = Drupal.t('Seat %seat', {'%seat': seat});
        }

        products
          += '<li class="seat-tooltip-seat-item"><div class="seat_tooltip_name">' + seat_infos + '</div></li>';

        if (undefined == prices[i]) {
          total += category.price;
        }
        else {
          total += prices[i];
        }

        // Check if the place can make isolate another place.
        $('.js-hvsc-seat:not(.hover)[singlette=' + place.attr('provider-seat-id') + ']', map).addClass('singlette');
      }

      // Display total price in case of selection of these places.
      container
        .find('.seat_tooltip_total')
        .html(Drupal.t('From %price', {
          '%price': Drupal.behaviors.hubberNumberFormatter.formatPrice(total, drupalSettings.currency),
        }));

      // Set information in tip.
      var htmlViewCam = Drupal.behaviors.hubberSeatViewCam.getHtmlViewCam({
        'cam_modeller': $(places[0]).closest("g").attr('cam-modeller'),
        'cam_url': $(places[0]).closest("g").attr('cam-url'),
        'cam_id': $(places[0]).attr('cam-id')
      }, 'thumb');
      if (htmlViewCam) {
        container.find('.seat_tooltip_view').html(htmlViewCam);
      }
      container.find('.seat_tooltip_products').html(products);
      if ($('.singlette', map).length > 0) {
        container.find('.seat_tooltip_singlette').show();
      }
      else {
        container.find('.seat_tooltip_singlette').hide();
      }

      this.move_tooltip(container, mouse);
    },
    /**
     * Get prices selected in quantity filter.
     *
     * @param catId
     * @returns {*[]}
     */
    getSelectedPrices: function (catId) {
      var prices = [];
      $('.js-categories-panel[hvsc-id=' + this.hvsc_id + '] li[cat_id=' + catId + '] .js-quantity-filter-field').each(function () {
        var qty = $(this).val();
        var id = $(this).attr('data-price-id');
        for (var i = 0; i < qty; i++) {
          prices.push(id);
        }
      });
      return prices;
    },
    hide_seat_tooltip: function () {
      $('.seat_tooltip', this.place).hide();
    },

    /**
     * Attach events on the element to display a tooltip when hovering this
     * element.
     *
     * @param type
     *   Either 'block' or 'seat'
     * @param $element
     *   The jQuery selector element to attach events.
     */
    tooltip_modealaplace: function (type, $element) {

      var self = this;
      var is_mobile = false;
      var width_window = $(window).width();
      if (width_window <= 768) {
        is_mobile = true;
      }

      // Display tip if we are not a mobile.
      if (is_mobile == false) {
        switch (type) {
          case 'block':
            $element.on('mouseover', function (mouse) {
              self.display_block_tooltip($(this), mouse);
            }).on('mousemove', function (mouse) {
              self.display_block_tooltip($(this), mouse);
            }).on('mouseout', function () {
              self.hide_block_tooltip();
            });
            break;
          case 'seat':
            $element.on('mousemove', function (mouse) {
              // When the mouse is moved, move the tip.
              if ($(this).hasClass('hover')) {
                self.move_tooltip($('.seat_tooltip', self.place), mouse);
              }
            }).on('mouseleave', function () {
              self.hide_seat_tooltip();
              $('.singlette').removeClass('singlette');
            });
            break;
        }
      }
    },
  };
  seat_mode.initialize();
}

/**
 * Getting the map controller
 *
 * @param element
 */
jQuery.getSeatMode = function (element) {
  var $ = this;
  return $(element).closest('.js-hvsc-map').prop('controller'); // Send the
                                                                // controller
                                                                // object
                                                                // attached to
                                                                // a map
}
;
/*! Hammer.JS - v2.0.6 - 2016-01-06
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the  license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&ha(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return qa++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:ta?M:ua?P:sa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Aa&&d-e===0,g=b&(Ca|Da)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=ma(j.x)>ma(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===Aa||f.eventType===Ca)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Da&&(i>za||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ea:ma(a)>=ma(b)?0>a?Fa:Ga:0>b?Ha:Ia}function H(a,b,c){c||(c=Ma);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Ma);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Na)+I(a[1],a[0],Na)}function K(a,b){return H(b[0],b[1],Na)/H(a[0],a[1],Na)}function L(){this.evEl=Pa,this.evWin=Qa,this.allow=!0,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Ta,this.evWin=Ua,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Wa,this.evWin=Xa,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ca|Da)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=Za,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Aa|Ba)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Aa)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ca|Da)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a)}function S(a,b){this.manager=a,this.set(b)}function T(a){if(p(a,db))return db;var b=p(a,eb),c=p(a,fb);return b&&c?db:b||c?b?eb:fb:p(a,cb)?cb:bb}function U(a){this.options=ha({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=gb,this.simultaneous={},this.requireFail=[]}function V(a){return a&lb?"cancel":a&jb?"end":a&ib?"move":a&hb?"start":""}function W(a){return a==Ia?"down":a==Ha?"up":a==Fa?"left":a==Ga?"right":""}function X(a,b){var c=b.manager;return c?c.get(a):a}function Y(){U.apply(this,arguments)}function Z(){Y.apply(this,arguments),this.pX=null,this.pY=null}function $(){Y.apply(this,arguments)}function _(){U.apply(this,arguments),this._timer=null,this._input=null}function aa(){Y.apply(this,arguments)}function ba(){Y.apply(this,arguments)}function ca(){U.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function da(a,b){return b=b||{},b.recognizers=l(b.recognizers,da.defaults.preset),new ea(a,b)}function ea(a,b){this.options=ha({},da.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=y(this),this.touchAction=new S(this,this.options.touchAction),fa(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function fa(a,b){var c=a.element;c.style&&g(a.options.cssProps,function(a,d){c.style[u(c.style,d)]=b?a:""})}function ga(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ha,ia=["","webkit","Moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now;ha="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var oa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),pa=h(function(a,b){return oa(a,b,!0)},"merge","Use `assign`."),qa=1,ra=/mobile|tablet|ip(ad|hone|od)|android/i,sa="ontouchstart"in a,ta=u(a,"PointerEvent")!==d,ua=sa&&ra.test(navigator.userAgent),va="touch",wa="pen",xa="mouse",ya="kinect",za=25,Aa=1,Ba=2,Ca=4,Da=8,Ea=1,Fa=2,Ga=4,Ha=8,Ia=16,Ja=Fa|Ga,Ka=Ha|Ia,La=Ja|Ka,Ma=["x","y"],Na=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Oa={mousedown:Aa,mousemove:Ba,mouseup:Ca},Pa="mousedown",Qa="mousemove mouseup";i(L,x,{handler:function(a){var b=Oa[a.type];b&Aa&&0===a.button&&(this.pressed=!0),b&Ba&&1!==a.which&&(b=Ca),this.pressed&&this.allow&&(b&Ca&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:xa,srcEvent:a}))}});var Ra={pointerdown:Aa,pointermove:Ba,pointerup:Ca,pointercancel:Da,pointerout:Da},Sa={2:va,3:wa,4:xa,5:ya},Ta="pointerdown",Ua="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Ta="MSPointerDown",Ua="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Ra[d],f=Sa[a.pointerType]||a.pointerType,g=f==va,h=r(b,a.pointerId,"pointerId");e&Aa&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ca|Da)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Va={touchstart:Aa,touchmove:Ba,touchend:Ca,touchcancel:Da},Wa="touchstart",Xa="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Va[a.type];if(b===Aa&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ca|Da)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:va,srcEvent:a})}}});var Ya={touchstart:Aa,touchmove:Ba,touchend:Ca,touchcancel:Da},Za="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=Ya[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:va,srcEvent:a})}}),i(R,x,{handler:function(a,b,c){var d=c.pointerType==va,e=c.pointerType==xa;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ca|Da)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var $a=u(ja.style,"touchAction"),_a=$a!==d,ab="compute",bb="auto",cb="manipulation",db="none",eb="pan-x",fb="pan-y";S.prototype={set:function(a){a==ab&&(a=this.compute()),_a&&this.manager.element.style&&(this.manager.element.style[$a]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),T(a.join(" "))},preventDefaults:function(a){if(!_a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,db),f=p(d,fb),g=p(d,eb);if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}if(!g||!f)return e||f&&c&Ja||g&&c&Ka?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var gb=1,hb=2,ib=4,jb=8,kb=jb,lb=16,mb=32;U.prototype={defaults:{},set:function(a){return ha(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=X(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=X(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=X(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=X(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;jb>d&&b(c.options.event+V(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=jb&&b(c.options.event+V(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=mb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(mb|gb)))return!1;a++}return!0},recognize:function(a){var b=ha({},a);return k(this.options.enable,[this,b])?(this.state&(kb|lb|mb)&&(this.state=gb),this.state=this.process(b),void(this.state&(hb|ib|jb|lb)&&this.tryEmit(b))):(this.reset(),void(this.state=mb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(Y,U,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(hb|ib),e=this.attrTest(a);return d&&(c&Da||!e)?b|lb:d||e?c&Ca?b|jb:b&hb?b|ib:hb:mb}}),i(Z,Y,{defaults:{event:"pan",threshold:10,pointers:1,direction:La},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ja&&b.push(fb),a&Ka&&b.push(eb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ja?(e=0===f?Ea:0>f?Fa:Ga,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ea:0>g?Ha:Ia,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Y.prototype.attrTest.call(this,a)&&(this.state&hb||!(this.state&hb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=W(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i($,Y,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[db]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&hb)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(_,U,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[bb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ca|Da)&&!f)this.reset();else if(a.eventType&Aa)this.reset(),this._timer=e(function(){this.state=kb,this.tryEmit()},b.time,this);else if(a.eventType&Ca)return kb;return mb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===kb&&(a&&a.eventType&Ca?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),i(aa,Y,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[db]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&hb)}}),i(ba,Y,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Ja|Ka,pointers:1},getTouchAction:function(){return Z.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ja|Ka)?b=a.overallVelocity:c&Ja?b=a.overallVelocityX:c&Ka&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&ma(b)>this.options.velocity&&a.eventType&Ca},emit:function(a){var b=W(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ca,U,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[cb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Aa&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ca)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=kb,this.tryEmit()},b.interval,this),hb):kb}return mb},failTimeout:function(){return this._timer=e(function(){this.state=mb},this.options.interval,this),mb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==kb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),da.VERSION="2.0.6",da.defaults={domEvents:!1,touchAction:ab,enable:!0,inputTarget:null,inputClass:null,preset:[[aa,{enable:!1}],[$,{enable:!1},["rotate"]],[ba,{direction:Ja}],[Z,{direction:Ja},["swipe"]],[ca],[ca,{event:"doubletap",taps:2},["tap"]],[_]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var nb=1,ob=2;ea.prototype={set:function(a){return ha(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?ob:nb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&kb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===ob||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(hb|ib|jb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof U)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ga(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&fa(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},ha(da,{INPUT_START:Aa,INPUT_MOVE:Ba,INPUT_END:Ca,INPUT_CANCEL:Da,STATE_POSSIBLE:gb,STATE_BEGAN:hb,STATE_CHANGED:ib,STATE_ENDED:jb,STATE_RECOGNIZED:kb,STATE_CANCELLED:lb,STATE_FAILED:mb,DIRECTION_NONE:Ea,DIRECTION_LEFT:Fa,DIRECTION_RIGHT:Ga,DIRECTION_UP:Ha,DIRECTION_DOWN:Ia,DIRECTION_HORIZONTAL:Ja,DIRECTION_VERTICAL:Ka,DIRECTION_ALL:La,Manager:ea,Input:x,TouchAction:S,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:U,AttrRecognizer:Y,Tap:ca,Pan:Z,Swipe:ba,Pinch:$,Rotate:aa,Press:_,on:m,off:n,each:g,merge:pa,extend:oa,assign:ha,inherit:i,bindFn:j,prefixed:u});var pb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};pb.Hammer=da,"function"==typeof define&&define.amd?define(function(){return da}):"undefined"!=typeof module&&module.exports?module.exports=da:a[c]=da}(window,document,"Hammer");;
// svg-pan-zoom v3.6.1
// https://github.com/ariutta/svg-pan-zoom
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  var SvgUtils = require("./svg-utilities");
  
  module.exports = {
    enable: function(instance) {
      // Select (and create if necessary) defs
      var defs = instance.svg.querySelector("defs");
      if (!defs) {
        defs = document.createElementNS(SvgUtils.svgNS, "defs");
        instance.svg.appendChild(defs);
      }
  
      // Check for style element, and create it if it doesn't exist
      var styleEl = defs.querySelector("style#svg-pan-zoom-controls-styles");
      if (!styleEl) {
        var style = document.createElementNS(SvgUtils.svgNS, "style");
        style.setAttribute("id", "svg-pan-zoom-controls-styles");
        style.setAttribute("type", "text/css");
        style.textContent =
          ".svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }";
        defs.appendChild(style);
      }
  
      // Zoom Group
      var zoomGroup = document.createElementNS(SvgUtils.svgNS, "g");
      zoomGroup.setAttribute("id", "svg-pan-zoom-controls");
      zoomGroup.setAttribute(
        "transform",
        "translate(" +
          (instance.width - 70) +
          " " +
          (instance.height - 76) +
          ") scale(0.75)"
      );
      zoomGroup.setAttribute("class", "svg-pan-zoom-control");
  
      // Control elements
      zoomGroup.appendChild(this._createZoomIn(instance));
      zoomGroup.appendChild(this._createZoomReset(instance));
      zoomGroup.appendChild(this._createZoomOut(instance));
  
      // Finally append created element
      instance.svg.appendChild(zoomGroup);
  
      // Cache control instance
      instance.controlIcons = zoomGroup;
    },
  
    _createZoomIn: function(instance) {
      var zoomIn = document.createElementNS(SvgUtils.svgNS, "g");
      zoomIn.setAttribute("id", "svg-pan-zoom-zoom-in");
      zoomIn.setAttribute("transform", "translate(30.5 5) scale(0.015)");
      zoomIn.setAttribute("class", "svg-pan-zoom-control");
      zoomIn.addEventListener(
        "click",
        function() {
          instance.getPublicInstance().zoomIn();
        },
        false
      );
      zoomIn.addEventListener(
        "touchstart",
        function() {
          instance.getPublicInstance().zoomIn();
        },
        false
      );
  
      var zoomInBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier
      zoomInBackground.setAttribute("x", "0");
      zoomInBackground.setAttribute("y", "0");
      zoomInBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down
      zoomInBackground.setAttribute("height", "1400");
      zoomInBackground.setAttribute("class", "svg-pan-zoom-control-background");
      zoomIn.appendChild(zoomInBackground);
  
      var zoomInShape = document.createElementNS(SvgUtils.svgNS, "path");
      zoomInShape.setAttribute(
        "d",
        "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      );
      zoomInShape.setAttribute("class", "svg-pan-zoom-control-element");
      zoomIn.appendChild(zoomInShape);
  
      return zoomIn;
    },
  
    _createZoomReset: function(instance) {
      // reset
      var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, "g");
      resetPanZoomControl.setAttribute("id", "svg-pan-zoom-reset-pan-zoom");
      resetPanZoomControl.setAttribute("transform", "translate(5 35) scale(0.4)");
      resetPanZoomControl.setAttribute("class", "svg-pan-zoom-control");
      resetPanZoomControl.addEventListener(
        "click",
        function() {
          instance.getPublicInstance().reset();
        },
        false
      );
      resetPanZoomControl.addEventListener(
        "touchstart",
        function() {
          instance.getPublicInstance().reset();
        },
        false
      );
  
      var resetPanZoomControlBackground = document.createElementNS(
        SvgUtils.svgNS,
        "rect"
      ); // TODO change these background space fillers to rounded rectangles so they look prettier
      resetPanZoomControlBackground.setAttribute("x", "2");
      resetPanZoomControlBackground.setAttribute("y", "2");
      resetPanZoomControlBackground.setAttribute("width", "182"); // larger than expected because the whole group is transformed to scale down
      resetPanZoomControlBackground.setAttribute("height", "58");
      resetPanZoomControlBackground.setAttribute(
        "class",
        "svg-pan-zoom-control-background"
      );
      resetPanZoomControl.appendChild(resetPanZoomControlBackground);
  
      var resetPanZoomControlShape1 = document.createElementNS(
        SvgUtils.svgNS,
        "path"
      );
      resetPanZoomControlShape1.setAttribute(
        "d",
        "M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z"
      );
      resetPanZoomControlShape1.setAttribute(
        "class",
        "svg-pan-zoom-control-element"
      );
      resetPanZoomControl.appendChild(resetPanZoomControlShape1);
  
      var resetPanZoomControlShape2 = document.createElementNS(
        SvgUtils.svgNS,
        "path"
      );
      resetPanZoomControlShape2.setAttribute(
        "d",
        "M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z"
      );
      resetPanZoomControlShape2.setAttribute(
        "class",
        "svg-pan-zoom-control-element"
      );
      resetPanZoomControl.appendChild(resetPanZoomControlShape2);
  
      return resetPanZoomControl;
    },
  
    _createZoomOut: function(instance) {
      // zoom out
      var zoomOut = document.createElementNS(SvgUtils.svgNS, "g");
      zoomOut.setAttribute("id", "svg-pan-zoom-zoom-out");
      zoomOut.setAttribute("transform", "translate(30.5 70) scale(0.015)");
      zoomOut.setAttribute("class", "svg-pan-zoom-control");
      zoomOut.addEventListener(
        "click",
        function() {
          instance.getPublicInstance().zoomOut();
        },
        false
      );
      zoomOut.addEventListener(
        "touchstart",
        function() {
          instance.getPublicInstance().zoomOut();
        },
        false
      );
  
      var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, "rect"); // TODO change these background space fillers to rounded rectangles so they look prettier
      zoomOutBackground.setAttribute("x", "0");
      zoomOutBackground.setAttribute("y", "0");
      zoomOutBackground.setAttribute("width", "1500"); // larger than expected because the whole group is transformed to scale down
      zoomOutBackground.setAttribute("height", "1400");
      zoomOutBackground.setAttribute("class", "svg-pan-zoom-control-background");
      zoomOut.appendChild(zoomOutBackground);
  
      var zoomOutShape = document.createElementNS(SvgUtils.svgNS, "path");
      zoomOutShape.setAttribute(
        "d",
        "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
      );
      zoomOutShape.setAttribute("class", "svg-pan-zoom-control-element");
      zoomOut.appendChild(zoomOutShape);
  
      return zoomOut;
    },
  
    disable: function(instance) {
      if (instance.controlIcons) {
        instance.controlIcons.parentNode.removeChild(instance.controlIcons);
        instance.controlIcons = null;
      }
    }
  };
  
  },{"./svg-utilities":5}],2:[function(require,module,exports){
  var SvgUtils = require("./svg-utilities"),
    Utils = require("./utilities");
  
  var ShadowViewport = function(viewport, options) {
    this.init(viewport, options);
  };
  
  /**
   * Initialization
   *
   * @param  {SVGElement} viewport
   * @param  {Object} options
   */
  ShadowViewport.prototype.init = function(viewport, options) {
    // DOM Elements
    this.viewport = viewport;
    this.options = options;
  
    // State cache
    this.originalState = { zoom: 1, x: 0, y: 0 };
    this.activeState = { zoom: 1, x: 0, y: 0 };
  
    this.updateCTMCached = Utils.proxy(this.updateCTM, this);
  
    // Create a custom requestAnimationFrame taking in account refreshRate
    this.requestAnimationFrame = Utils.createRequestAnimationFrame(
      this.options.refreshRate
    );
  
    // ViewBox
    this.viewBox = { x: 0, y: 0, width: 0, height: 0 };
    this.cacheViewBox();
  
    // Process CTM
    var newCTM = this.processCTM();
  
    // Update viewport CTM and cache zoom and pan
    this.setCTM(newCTM);
  
    // Update CTM in this frame
    this.updateCTM();
  };
  
  /**
   * Cache initial viewBox value
   * If no viewBox is defined, then use viewport size/position instead for viewBox values
   */
  ShadowViewport.prototype.cacheViewBox = function() {
    var svgViewBox = this.options.svg.getAttribute("viewBox");
  
    if (svgViewBox) {
      var viewBoxValues = svgViewBox
        .split(/[\s\,]/)
        .filter(function(v) {
          return v;
        })
        .map(parseFloat);
  
      // Cache viewbox x and y offset
      this.viewBox.x = viewBoxValues[0];
      this.viewBox.y = viewBoxValues[1];
      this.viewBox.width = viewBoxValues[2];
      this.viewBox.height = viewBoxValues[3];
  
      var zoom = Math.min(
        this.options.width / this.viewBox.width,
        this.options.height / this.viewBox.height
      );
  
      // Update active state
      this.activeState.zoom = zoom;
      this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2;
      this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2;
  
      // Force updating CTM
      this.updateCTMOnNextFrame();
  
      this.options.svg.removeAttribute("viewBox");
    } else {
      this.simpleViewBoxCache();
    }
  };
  
  /**
   * Recalculate viewport sizes and update viewBox cache
   */
  ShadowViewport.prototype.simpleViewBoxCache = function() {
    var bBox = this.viewport.getBBox();
  
    this.viewBox.x = bBox.x;
    this.viewBox.y = bBox.y;
    this.viewBox.width = bBox.width;
    this.viewBox.height = bBox.height;
  };
  
  /**
   * Returns a viewbox object. Safe to alter
   *
   * @return {Object} viewbox object
   */
  ShadowViewport.prototype.getViewBox = function() {
    return Utils.extend({}, this.viewBox);
  };
  
  /**
   * Get initial zoom and pan values. Save them into originalState
   * Parses viewBox attribute to alter initial sizes
   *
   * @return {CTM} CTM object based on options
   */
  ShadowViewport.prototype.processCTM = function() {
    var newCTM = this.getCTM();
  
    if (this.options.fit || this.options.contain) {
      var newScale;
      if (this.options.fit) {
        newScale = Math.min(
          this.options.width / this.viewBox.width,
          this.options.height / this.viewBox.height
        );
      } else {
        newScale = Math.max(
          this.options.width / this.viewBox.width,
          this.options.height / this.viewBox.height
        );
      }
  
      newCTM.a = newScale; //x-scale
      newCTM.d = newScale; //y-scale
      newCTM.e = -this.viewBox.x * newScale; //x-transform
      newCTM.f = -this.viewBox.y * newScale; //y-transform
    }
  
    if (this.options.center) {
      var offsetX =
          (this.options.width -
            (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) *
          0.5,
        offsetY =
          (this.options.height -
            (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) *
          0.5;
  
      newCTM.e = offsetX;
      newCTM.f = offsetY;
    }
  
    // Cache initial values. Based on activeState and fix+center opitons
    this.originalState.zoom = newCTM.a;
    this.originalState.x = newCTM.e;
    this.originalState.y = newCTM.f;
  
    return newCTM;
  };
  
  /**
   * Return originalState object. Safe to alter
   *
   * @return {Object}
   */
  ShadowViewport.prototype.getOriginalState = function() {
    return Utils.extend({}, this.originalState);
  };
  
  /**
   * Return actualState object. Safe to alter
   *
   * @return {Object}
   */
  ShadowViewport.prototype.getState = function() {
    return Utils.extend({}, this.activeState);
  };
  
  /**
   * Get zoom scale
   *
   * @return {Float} zoom scale
   */
  ShadowViewport.prototype.getZoom = function() {
    return this.activeState.zoom;
  };
  
  /**
   * Get zoom scale for pubilc usage
   *
   * @return {Float} zoom scale
   */
  ShadowViewport.prototype.getRelativeZoom = function() {
    return this.activeState.zoom / this.originalState.zoom;
  };
  
  /**
   * Compute zoom scale for pubilc usage
   *
   * @return {Float} zoom scale
   */
  ShadowViewport.prototype.computeRelativeZoom = function(scale) {
    return scale / this.originalState.zoom;
  };
  
  /**
   * Get pan
   *
   * @return {Object}
   */
  ShadowViewport.prototype.getPan = function() {
    return { x: this.activeState.x, y: this.activeState.y };
  };
  
  /**
   * Return cached viewport CTM value that can be safely modified
   *
   * @return {SVGMatrix}
   */
  ShadowViewport.prototype.getCTM = function() {
    var safeCTM = this.options.svg.createSVGMatrix();
  
    // Copy values manually as in FF they are not itterable
    safeCTM.a = this.activeState.zoom;
    safeCTM.b = 0;
    safeCTM.c = 0;
    safeCTM.d = this.activeState.zoom;
    safeCTM.e = this.activeState.x;
    safeCTM.f = this.activeState.y;
  
    return safeCTM;
  };
  
  /**
   * Set a new CTM
   *
   * @param {SVGMatrix} newCTM
   */
  ShadowViewport.prototype.setCTM = function(newCTM) {
    var willZoom = this.isZoomDifferent(newCTM),
      willPan = this.isPanDifferent(newCTM);
  
    if (willZoom || willPan) {
      // Before zoom
      if (willZoom) {
        // If returns false then cancel zooming
        if (
          this.options.beforeZoom(
            this.getRelativeZoom(),
            this.computeRelativeZoom(newCTM.a)
          ) === false
        ) {
          newCTM.a = newCTM.d = this.activeState.zoom;
          willZoom = false;
        } else {
          this.updateCache(newCTM);
          this.options.onZoom(this.getRelativeZoom());
        }
      }
  
      // Before pan
      if (willPan) {
        var preventPan = this.options.beforePan(this.getPan(), {
            x: newCTM.e,
            y: newCTM.f
          }),
          // If prevent pan is an object
          preventPanX = false,
          preventPanY = false;
  
        // If prevent pan is Boolean false
        if (preventPan === false) {
          // Set x and y same as before
          newCTM.e = this.getPan().x;
          newCTM.f = this.getPan().y;
  
          preventPanX = preventPanY = true;
        } else if (Utils.isObject(preventPan)) {
          // Check for X axes attribute
          if (preventPan.x === false) {
            // Prevent panning on x axes
            newCTM.e = this.getPan().x;
            preventPanX = true;
          } else if (Utils.isNumber(preventPan.x)) {
            // Set a custom pan value
            newCTM.e = preventPan.x;
          }
  
          // Check for Y axes attribute
          if (preventPan.y === false) {
            // Prevent panning on x axes
            newCTM.f = this.getPan().y;
            preventPanY = true;
          } else if (Utils.isNumber(preventPan.y)) {
            // Set a custom pan value
            newCTM.f = preventPan.y;
          }
        }
  
        // Update willPan flag
        // Check if newCTM is still different
        if ((preventPanX && preventPanY) || !this.isPanDifferent(newCTM)) {
          willPan = false;
        } else {
          this.updateCache(newCTM);
          this.options.onPan(this.getPan());
        }
      }
  
      // Check again if should zoom or pan
      if (willZoom || willPan) {
        this.updateCTMOnNextFrame();
      }
    }
  };
  
  ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
    return this.activeState.zoom !== newCTM.a;
  };
  
  ShadowViewport.prototype.isPanDifferent = function(newCTM) {
    return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f;
  };
  
  /**
   * Update cached CTM and active state
   *
   * @param {SVGMatrix} newCTM
   */
  ShadowViewport.prototype.updateCache = function(newCTM) {
    this.activeState.zoom = newCTM.a;
    this.activeState.x = newCTM.e;
    this.activeState.y = newCTM.f;
  };
  
  ShadowViewport.prototype.pendingUpdate = false;
  
  /**
   * Place a request to update CTM on next Frame
   */
  ShadowViewport.prototype.updateCTMOnNextFrame = function() {
    if (!this.pendingUpdate) {
      // Lock
      this.pendingUpdate = true;
  
      // Throttle next update
      this.requestAnimationFrame.call(window, this.updateCTMCached);
    }
  };
  
  /**
   * Update viewport CTM with cached CTM
   */
  ShadowViewport.prototype.updateCTM = function() {
    var ctm = this.getCTM();
  
    // Updates SVG element
    SvgUtils.setCTM(this.viewport, ctm, this.defs);
  
    // Free the lock
    this.pendingUpdate = false;
  
    // Notify about the update
    if (this.options.onUpdatedCTM) {
      this.options.onUpdatedCTM(ctm);
    }
  };
  
  module.exports = function(viewport, options) {
    return new ShadowViewport(viewport, options);
  };
  
  },{"./svg-utilities":5,"./utilities":7}],3:[function(require,module,exports){
  var svgPanZoom = require("./svg-pan-zoom.js.js.js.js.js.js");
  
  // UMD module definition
  (function(window, document) {
    // AMD
    if (typeof define === "function" && define.amd) {
      define("svg-pan-zoom", function() {
        return svgPanZoom;
      });
      // CMD
    } else if (typeof module !== "undefined" && module.exports) {
      module.exports = svgPanZoom;
  
      // Browser
      // Keep exporting globally as module.exports is available because of browserify
      window.svgPanZoom = svgPanZoom;
    }
  })(window, document);
  
  },{"./svg-pan-zoom.js":4}],4:[function(require,module,exports){
  var Wheel = require("./uniwheel"),
    ControlIcons = require("./control-icons"),
    Utils = require("./utilities"),
    SvgUtils = require("./svg-utilities"),
    ShadowViewport = require("./shadow-viewport");
  
  var SvgPanZoom = function(svg, options) {
    this.init(svg, options);
  };
  
  var optionsDefaults = {
    viewportSelector: ".svg-pan-zoom_viewport", // Viewport selector. Can be querySelector string or SVGElement
    panEnabled: true, // enable or disable panning (default enabled)
    controlIconsEnabled: false, // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
    zoomEnabled: true, // enable or disable zooming (default enabled)
    dblClickZoomEnabled: true, // enable or disable zooming by double clicking (default enabled)
    mouseWheelZoomEnabled: true, // enable or disable zooming by mouse wheel (default enabled)
    preventMouseEventsDefault: true, // enable or disable preventDefault for mouse events
    zoomScaleSensitivity: 0.1, // Zoom sensitivity
    minZoom: 0.5, // Minimum Zoom level
    maxZoom: 10, // Maximum Zoom level
    fit: true, // enable or disable viewport fit in SVG (default true)
    contain: false, // enable or disable viewport contain the svg (default false)
    center: true, // enable or disable viewport centering in SVG (default true)
    refreshRate: "auto", // Maximum number of frames per second (altering SVG's viewport)
    beforeZoom: null,
    onZoom: null,
    beforePan: null,
    onPan: null,
    customEventsHandler: null,
    eventsListenerElement: null,
    onUpdatedCTM: null
  };
  
  var passiveListenerOption = { passive: true };
  
  SvgPanZoom.prototype.init = function(svg, options) {
    var that = this;
  
    this.svg = svg;
    this.defs = svg.querySelector("defs");
  
    // Add default attributes to SVG
    SvgUtils.setupSvgAttributes(this.svg);
  
    // Set options
    this.options = Utils.extend(Utils.extend({}, optionsDefaults), options);
  
    // Set default state
    this.state = "none";
  
    // Get dimensions
    var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
      svg
    );
    this.width = boundingClientRectNormalized.width;
    this.height = boundingClientRectNormalized.height;
  
    // Init shadow viewport
    this.viewport = ShadowViewport(
      SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector),
      {
        svg: this.svg,
        width: this.width,
        height: this.height,
        fit: this.options.fit,
        contain: this.options.contain,
        center: this.options.center,
        refreshRate: this.options.refreshRate,
        // Put callbacks into functions as they can change through time
        beforeZoom: function(oldScale, newScale) {
          if (that.viewport && that.options.beforeZoom) {
            return that.options.beforeZoom(oldScale, newScale);
          }
        },
        onZoom: function(scale) {
          if (that.viewport && that.options.onZoom) {
            return that.options.onZoom(scale);
          }
        },
        beforePan: function(oldPoint, newPoint) {
          if (that.viewport && that.options.beforePan) {
            return that.options.beforePan(oldPoint, newPoint);
          }
        },
        onPan: function(point) {
          if (that.viewport && that.options.onPan) {
            return that.options.onPan(point);
          }
        },
        onUpdatedCTM: function(ctm) {
          if (that.viewport && that.options.onUpdatedCTM) {
            return that.options.onUpdatedCTM(ctm);
          }
        }
      }
    );
  
    // Wrap callbacks into public API context
    var publicInstance = this.getPublicInstance();
    publicInstance.setBeforeZoom(this.options.beforeZoom);
    publicInstance.setOnZoom(this.options.onZoom);
    publicInstance.setBeforePan(this.options.beforePan);
    publicInstance.setOnPan(this.options.onPan);
    publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM);
  
    if (this.options.controlIconsEnabled) {
      ControlIcons.enable(this);
    }
  
    // Init events handlers
    this.lastMouseWheelEventTime = Date.now();
    this.setupHandlers();
  };
  
  /**
   * Register event handlers
   */
  SvgPanZoom.prototype.setupHandlers = function() {
    var that = this,
      prevEvt = null; // use for touchstart event to detect double tap
  
    this.eventListeners = {
      // Mouse down group
      mousedown: function(evt) {
        var result = that.handleMouseDown(evt, prevEvt);
        prevEvt = evt;
        return result;
      },
      touchstart: function(evt) {
        var result = that.handleMouseDown(evt, prevEvt);
        prevEvt = evt;
        return result;
      },
  
      // Mouse up group
      mouseup: function(evt) {
        return that.handleMouseUp(evt);
      },
      touchend: function(evt) {
        return that.handleMouseUp(evt);
      },
  
      // Mouse move group
      mousemove: function(evt) {
        return that.handleMouseMove(evt);
      },
      touchmove: function(evt) {
        return that.handleMouseMove(evt);
      },
  
      // Mouse leave group
      mouseleave: function(evt) {
        return that.handleMouseUp(evt);
      },
      touchleave: function(evt) {
        return that.handleMouseUp(evt);
      },
      touchcancel: function(evt) {
        return that.handleMouseUp(evt);
      }
    };
  
    // Init custom events handler if available
    // eslint-disable-next-line eqeqeq
    if (this.options.customEventsHandler != null) {
      this.options.customEventsHandler.init({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
      });
  
      // Custom event handler may halt builtin listeners
      var haltEventListeners = this.options.customEventsHandler
        .haltEventListeners;
      if (haltEventListeners && haltEventListeners.length) {
        for (var i = haltEventListeners.length - 1; i >= 0; i--) {
          if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
            delete this.eventListeners[haltEventListeners[i]];
          }
        }
      }
    }
  
    // Bind eventListeners
    for (var event in this.eventListeners) {
      // Attach event to eventsListenerElement or SVG if not available
      (this.options.eventsListenerElement || this.svg).addEventListener(
        event,
        this.eventListeners[event],
        !this.options.preventMouseEventsDefault ? passiveListenerOption : false
      );
    }
  
    // Zoom using mouse wheel
    if (this.options.mouseWheelZoomEnabled) {
      this.options.mouseWheelZoomEnabled = false; // set to false as enable will set it back to true
      this.enableMouseWheelZoom();
    }
  };
  
  /**
   * Enable ability to zoom using mouse wheel
   */
  SvgPanZoom.prototype.enableMouseWheelZoom = function() {
    if (!this.options.mouseWheelZoomEnabled) {
      var that = this;
  
      // Mouse wheel listener
      this.wheelListener = function(evt) {
        return that.handleMouseWheel(evt);
      };
  
      // Bind wheelListener
      var isPassiveListener = !this.options.preventMouseEventsDefault;
      Wheel.on(
        this.options.eventsListenerElement || this.svg,
        this.wheelListener,
        isPassiveListener
      );
  
      this.options.mouseWheelZoomEnabled = true;
    }
  };
  
  /**
   * Disable ability to zoom using mouse wheel
   */
  SvgPanZoom.prototype.disableMouseWheelZoom = function() {
    if (this.options.mouseWheelZoomEnabled) {
      var isPassiveListener = !this.options.preventMouseEventsDefault;
      Wheel.off(
        this.options.eventsListenerElement || this.svg,
        this.wheelListener,
        isPassiveListener
      );
      this.options.mouseWheelZoomEnabled = false;
    }
  };
  
  /**
   * Handle mouse wheel event
   *
   * @param  {Event} evt
   */
  SvgPanZoom.prototype.handleMouseWheel = function(evt) {
    if (!this.options.zoomEnabled || this.state !== "none") {
      return;
    }
  
    if (this.options.preventMouseEventsDefault) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  
    // Default delta in case that deltaY is not available
    var delta = evt.deltaY || 1,
      timeDelta = Date.now() - this.lastMouseWheelEventTime,
      divider = 3 + Math.max(0, 30 - timeDelta);
  
    // Update cache
    this.lastMouseWheelEventTime = Date.now();
  
    // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
    if ("deltaMode" in evt && evt.deltaMode === 0 && evt.wheelDelta) {
      delta = evt.deltaY === 0 ? 0 : Math.abs(evt.wheelDelta) / evt.deltaY;
    }
  
    delta =
      -0.3 < delta && delta < 0.3
        ? delta
        : ((delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10)) / divider;
  
    var inversedScreenCTM = this.svg.getScreenCTM().inverse(),
      relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
        inversedScreenCTM
      ),
      zoom = Math.pow(1 + this.options.zoomScaleSensitivity, -1 * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior
  
    this.zoomAtPoint(zoom, relativeMousePoint);
  };
  
  /**
   * Zoom in at a SVG point
   *
   * @param  {SVGPoint} point
   * @param  {Float} zoomScale    Number representing how much to zoom
   * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
   *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
   */
  SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
    var originalState = this.viewport.getOriginalState();
  
    if (!zoomAbsolute) {
      // Fit zoomScale in set bounds
      if (
        this.getZoom() * zoomScale <
        this.options.minZoom * originalState.zoom
      ) {
        zoomScale = (this.options.minZoom * originalState.zoom) / this.getZoom();
      } else if (
        this.getZoom() * zoomScale >
        this.options.maxZoom * originalState.zoom
      ) {
        zoomScale = (this.options.maxZoom * originalState.zoom) / this.getZoom();
      }
    } else {
      // Fit zoomScale in set bounds
      zoomScale = Math.max(
        this.options.minZoom * originalState.zoom,
        Math.min(this.options.maxZoom * originalState.zoom, zoomScale)
      );
      // Find relative scale to achieve desired scale
      zoomScale = zoomScale / this.getZoom();
    }
  
    var oldCTM = this.viewport.getCTM(),
      relativePoint = point.matrixTransform(oldCTM.inverse()),
      modifier = this.svg
        .createSVGMatrix()
        .translate(relativePoint.x, relativePoint.y)
        .scale(zoomScale)
        .translate(-relativePoint.x, -relativePoint.y),
      newCTM = oldCTM.multiply(modifier);
  
    if (newCTM.a !== oldCTM.a) {
      this.viewport.setCTM(newCTM);
    }
  };
  
  /**
   * Zoom at center point
   *
   * @param  {Float} scale
   * @param  {Boolean} absolute Marks zoom scale as relative or absolute
   */
  SvgPanZoom.prototype.zoom = function(scale, absolute) {
    this.zoomAtPoint(
      scale,
      SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height),
      absolute
    );
  };
  
  /**
   * Zoom used by public instance
   *
   * @param  {Float} scale
   * @param  {Boolean} absolute Marks zoom scale as relative or absolute
   */
  SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
    if (absolute) {
      scale = this.computeFromRelativeZoom(scale);
    }
  
    this.zoom(scale, absolute);
  };
  
  /**
   * Zoom at point used by public instance
   *
   * @param  {Float} scale
   * @param  {SVGPoint|Object} point    An object that has x and y attributes
   * @param  {Boolean} absolute Marks zoom scale as relative or absolute
   */
  SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
    if (absolute) {
      // Transform zoom into a relative value
      scale = this.computeFromRelativeZoom(scale);
    }
  
    // If not a SVGPoint but has x and y then create a SVGPoint
    if (Utils.getType(point) !== "SVGPoint") {
      if ("x" in point && "y" in point) {
        point = SvgUtils.createSVGPoint(this.svg, point.x, point.y);
      } else {
        throw new Error("Given point is invalid");
      }
    }
  
    this.zoomAtPoint(scale, point, absolute);
  };
  
  /**
   * Get zoom scale
   *
   * @return {Float} zoom scale
   */
  SvgPanZoom.prototype.getZoom = function() {
    return this.viewport.getZoom();
  };
  
  /**
   * Get zoom scale for public usage
   *
   * @return {Float} zoom scale
   */
  SvgPanZoom.prototype.getRelativeZoom = function() {
    return this.viewport.getRelativeZoom();
  };
  
  /**
   * Compute actual zoom from public zoom
   *
   * @param  {Float} zoom
   * @return {Float} zoom scale
   */
  SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
    return zoom * this.viewport.getOriginalState().zoom;
  };
  
  /**
   * Set zoom to initial state
   */
  SvgPanZoom.prototype.resetZoom = function() {
    var originalState = this.viewport.getOriginalState();
  
    this.zoom(originalState.zoom, true);
  };
  
  /**
   * Set pan to initial state
   */
  SvgPanZoom.prototype.resetPan = function() {
    this.pan(this.viewport.getOriginalState());
  };
  
  /**
   * Set pan and zoom to initial state
   */
  SvgPanZoom.prototype.reset = function() {
    this.resetZoom();
    this.resetPan();
  };
  
  /**
   * Handle double click event
   * See handleMouseDown() for alternate detection method
   *
   * @param {Event} evt
   */
  SvgPanZoom.prototype.handleDblClick = function(evt) {
    if (this.options.preventMouseEventsDefault) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  
    // Check if target was a control button
    if (this.options.controlIconsEnabled) {
      var targetClass = evt.target.getAttribute("class") || "";
      if (targetClass.indexOf("svg-pan-zoom-control") > -1) {
        return false;
      }
    }
  
    var zoomFactor;
  
    if (evt.shiftKey) {
      zoomFactor = 1 / ((1 + this.options.zoomScaleSensitivity) * 2); // zoom out when shift key pressed
    } else {
      zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2;
    }
  
    var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
      this.svg.getScreenCTM().inverse()
    );
    this.zoomAtPoint(zoomFactor, point);
  };
  
  /**
   * Handle click event
   *
   * @param {Event} evt
   */
  SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
    if (this.options.preventMouseEventsDefault) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  
    Utils.mouseAndTouchNormalize(evt, this.svg);
  
    // Double click detection; more consistent than ondblclick
    if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)) {
      this.handleDblClick(evt);
    } else {
      // Pan mode
      this.state = "pan";
      this.firstEventCTM = this.viewport.getCTM();
      this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
        this.firstEventCTM.inverse()
      );
    }
  };
  
  /**
   * Handle mouse move event
   *
   * @param  {Event} evt
   */
  SvgPanZoom.prototype.handleMouseMove = function(evt) {
    if (this.options.preventMouseEventsDefault) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  
    if (this.state === "pan" && this.options.panEnabled) {
      // Pan mode
      var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(
          this.firstEventCTM.inverse()
        ),
        viewportCTM = this.firstEventCTM.translate(
          point.x - this.stateOrigin.x,
          point.y - this.stateOrigin.y
        );
  
      this.viewport.setCTM(viewportCTM);
    }
  };
  
  /**
   * Handle mouse button release event
   *
   * @param {Event} evt
   */
  SvgPanZoom.prototype.handleMouseUp = function(evt) {
    if (this.options.preventMouseEventsDefault) {
      if (evt.preventDefault) {
        evt.preventDefault();
      } else {
        evt.returnValue = false;
      }
    }
  
    if (this.state === "pan") {
      // Quit pan mode
      this.state = "none";
    }
  };
  
  /**
   * Adjust viewport size (only) so it will fit in SVG
   * Does not center image
   */
  SvgPanZoom.prototype.fit = function() {
    var viewBox = this.viewport.getViewBox(),
      newScale = Math.min(
        this.width / viewBox.width,
        this.height / viewBox.height
      );
  
    this.zoom(newScale, true);
  };
  
  /**
   * Adjust viewport size (only) so it will contain the SVG
   * Does not center image
   */
  SvgPanZoom.prototype.contain = function() {
    var viewBox = this.viewport.getViewBox(),
      newScale = Math.max(
        this.width / viewBox.width,
        this.height / viewBox.height
      );
  
    this.zoom(newScale, true);
  };
  
  /**
   * Adjust viewport pan (only) so it will be centered in SVG
   * Does not zoom/fit/contain image
   */
  SvgPanZoom.prototype.center = function() {
    var viewBox = this.viewport.getViewBox(),
      offsetX =
        (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5,
      offsetY =
        (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5;
  
    this.getPublicInstance().pan({ x: offsetX, y: offsetY });
  };
  
  /**
   * Update content cached BorderBox
   * Use when viewport contents change
   */
  SvgPanZoom.prototype.updateBBox = function() {
    this.viewport.simpleViewBoxCache();
  };
  
  /**
   * Pan to a rendered position
   *
   * @param  {Object} point {x: 0, y: 0}
   */
  SvgPanZoom.prototype.pan = function(point) {
    var viewportCTM = this.viewport.getCTM();
    viewportCTM.e = point.x;
    viewportCTM.f = point.y;
    this.viewport.setCTM(viewportCTM);
  };
  
  /**
   * Relatively pan the graph by a specified rendered position vector
   *
   * @param  {Object} point {x: 0, y: 0}
   */
  SvgPanZoom.prototype.panBy = function(point) {
    var viewportCTM = this.viewport.getCTM();
    viewportCTM.e += point.x;
    viewportCTM.f += point.y;
    this.viewport.setCTM(viewportCTM);
  };
  
  /**
   * Get pan vector
   *
   * @return {Object} {x: 0, y: 0}
   */
  SvgPanZoom.prototype.getPan = function() {
    var state = this.viewport.getState();
  
    return { x: state.x, y: state.y };
  };
  
  /**
   * Recalculates cached svg dimensions and controls position
   */
  SvgPanZoom.prototype.resize = function() {
    // Get dimensions
    var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(
      this.svg
    );
    this.width = boundingClientRectNormalized.width;
    this.height = boundingClientRectNormalized.height;
  
    // Recalculate original state
    var viewport = this.viewport;
    viewport.options.width = this.width;
    viewport.options.height = this.height;
    viewport.processCTM();
  
    // Reposition control icons by re-enabling them
    if (this.options.controlIconsEnabled) {
      this.getPublicInstance().disableControlIcons();
      this.getPublicInstance().enableControlIcons();
    }
  };
  
  /**
   * Unbind mouse events, free callbacks and destroy public instance
   */
  SvgPanZoom.prototype.destroy = function() {
    var that = this;
  
    // Free callbacks
    this.beforeZoom = null;
    this.onZoom = null;
    this.beforePan = null;
    this.onPan = null;
    this.onUpdatedCTM = null;
  
    // Destroy custom event handlers
    // eslint-disable-next-line eqeqeq
    if (this.options.customEventsHandler != null) {
      this.options.customEventsHandler.destroy({
        svgElement: this.svg,
        eventsListenerElement: this.options.eventsListenerElement,
        instance: this.getPublicInstance()
      });
    }
  
    // Unbind eventListeners
    for (var event in this.eventListeners) {
      (this.options.eventsListenerElement || this.svg).removeEventListener(
        event,
        this.eventListeners[event],
        !this.options.preventMouseEventsDefault ? passiveListenerOption : false
      );
    }
  
    // Unbind wheelListener
    this.disableMouseWheelZoom();
  
    // Remove control icons
    this.getPublicInstance().disableControlIcons();
  
    // Reset zoom and pan
    this.reset();
  
    // Remove instance from instancesStore
    instancesStore = instancesStore.filter(function(instance) {
      return instance.svg !== that.svg;
    });
  
    // Delete options and its contents
    delete this.options;
  
    // Delete viewport to make public shadow viewport functions uncallable
    delete this.viewport;
  
    // Destroy public instance and rewrite getPublicInstance
    delete this.publicInstance;
    delete this.pi;
    this.getPublicInstance = function() {
      return null;
    };
  };
  
  /**
   * Returns a public instance object
   *
   * @return {Object} Public instance object
   */
  SvgPanZoom.prototype.getPublicInstance = function() {
    var that = this;
  
    // Create cache
    if (!this.publicInstance) {
      this.publicInstance = this.pi = {
        // Pan
        enablePan: function() {
          that.options.panEnabled = true;
          return that.pi;
        },
        disablePan: function() {
          that.options.panEnabled = false;
          return that.pi;
        },
        isPanEnabled: function() {
          return !!that.options.panEnabled;
        },
        pan: function(point) {
          that.pan(point);
          return that.pi;
        },
        panBy: function(point) {
          that.panBy(point);
          return that.pi;
        },
        getPan: function() {
          return that.getPan();
        },
        // Pan event
        setBeforePan: function(fn) {
          that.options.beforePan =
            fn === null ? null : Utils.proxy(fn, that.publicInstance);
          return that.pi;
        },
        setOnPan: function(fn) {
          that.options.onPan =
            fn === null ? null : Utils.proxy(fn, that.publicInstance);
          return that.pi;
        },
        // Zoom and Control Icons
        enableZoom: function() {
          that.options.zoomEnabled = true;
          return that.pi;
        },
        disableZoom: function() {
          that.options.zoomEnabled = false;
          return that.pi;
        },
        isZoomEnabled: function() {
          return !!that.options.zoomEnabled;
        },
        enableControlIcons: function() {
          if (!that.options.controlIconsEnabled) {
            that.options.controlIconsEnabled = true;
            ControlIcons.enable(that);
          }
          return that.pi;
        },
        disableControlIcons: function() {
          if (that.options.controlIconsEnabled) {
            that.options.controlIconsEnabled = false;
            ControlIcons.disable(that);
          }
          return that.pi;
        },
        isControlIconsEnabled: function() {
          return !!that.options.controlIconsEnabled;
        },
        // Double click zoom
        enableDblClickZoom: function() {
          that.options.dblClickZoomEnabled = true;
          return that.pi;
        },
        disableDblClickZoom: function() {
          that.options.dblClickZoomEnabled = false;
          return that.pi;
        },
        isDblClickZoomEnabled: function() {
          return !!that.options.dblClickZoomEnabled;
        },
        // Mouse wheel zoom
        enableMouseWheelZoom: function() {
          that.enableMouseWheelZoom();
          return that.pi;
        },
        disableMouseWheelZoom: function() {
          that.disableMouseWheelZoom();
          return that.pi;
        },
        isMouseWheelZoomEnabled: function() {
          return !!that.options.mouseWheelZoomEnabled;
        },
        // Zoom scale and bounds
        setZoomScaleSensitivity: function(scale) {
          that.options.zoomScaleSensitivity = scale;
          return that.pi;
        },
        setMinZoom: function(zoom) {
          that.options.minZoom = zoom;
          return that.pi;
        },
        setMaxZoom: function(zoom) {
          that.options.maxZoom = zoom;
          return that.pi;
        },
        // Zoom event
        setBeforeZoom: function(fn) {
          that.options.beforeZoom =
            fn === null ? null : Utils.proxy(fn, that.publicInstance);
          return that.pi;
        },
        setOnZoom: function(fn) {
          that.options.onZoom =
            fn === null ? null : Utils.proxy(fn, that.publicInstance);
          return that.pi;
        },
        // Zooming
        zoom: function(scale) {
          that.publicZoom(scale, true);
          return that.pi;
        },
        zoomBy: function(scale) {
          that.publicZoom(scale, false);
          return that.pi;
        },
        zoomAtPoint: function(scale, point) {
          that.publicZoomAtPoint(scale, point, true);
          return that.pi;
        },
        zoomAtPointBy: function(scale, point) {
          that.publicZoomAtPoint(scale, point, false);
          return that.pi;
        },
        zoomIn: function() {
          this.zoomBy(1 + that.options.zoomScaleSensitivity);
          return that.pi;
        },
        zoomOut: function() {
          this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity));
          return that.pi;
        },
        getZoom: function() {
          return that.getRelativeZoom();
        },
        // CTM update
        setOnUpdatedCTM: function(fn) {
          that.options.onUpdatedCTM =
            fn === null ? null : Utils.proxy(fn, that.publicInstance);
          return that.pi;
        },
        // Reset
        resetZoom: function() {
          that.resetZoom();
          return that.pi;
        },
        resetPan: function() {
          that.resetPan();
          return that.pi;
        },
        reset: function() {
          that.reset();
          return that.pi;
        },
        // Fit, Contain and Center
        fit: function() {
          that.fit();
          return that.pi;
        },
        contain: function() {
          that.contain();
          return that.pi;
        },
        center: function() {
          that.center();
          return that.pi;
        },
        // Size and Resize
        updateBBox: function() {
          that.updateBBox();
          return that.pi;
        },
        resize: function() {
          that.resize();
          return that.pi;
        },
        getSizes: function() {
          return {
            width: that.width,
            height: that.height,
            realZoom: that.getZoom(),
            viewBox: that.viewport.getViewBox()
          };
        },
        // Destroy
        destroy: function() {
          that.destroy();
          return that.pi;
        }
      };
    }
  
    return this.publicInstance;
  };
  
  /**
   * Stores pairs of instances of SvgPanZoom and SVG
   * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
   *
   * @type {Array}
   */
  var instancesStore = [];
  
  var svgPanZoom = function(elementOrSelector, options) {
    var svg = Utils.getSvg(elementOrSelector);
  
    if (svg === null) {
      return null;
    } else {
      // Look for existent instance
      for (var i = instancesStore.length - 1; i >= 0; i--) {
        if (instancesStore[i].svg === svg) {
          return instancesStore[i].instance.getPublicInstance();
        }
      }
  
      // If instance not found - create one
      instancesStore.push({
        svg: svg,
        instance: new SvgPanZoom(svg, options)
      });
  
      // Return just pushed instance
      return instancesStore[
        instancesStore.length - 1
      ].instance.getPublicInstance();
    }
  };
  
  module.exports = svgPanZoom;
  
  },{"./control-icons":1,"./shadow-viewport":2,"./svg-utilities":5,"./uniwheel":6,"./utilities":7}],5:[function(require,module,exports){
  var Utils = require("./utilities"),
    _browser = "unknown";
  
  // http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
  if (/*@cc_on!@*/ false || !!document.documentMode) {
    // internet explorer
    _browser = "ie";
  }
  
  module.exports = {
    svgNS: "http://www.w3.org/2000/svg",
    xmlNS: "http://www.w3.org/XML/1998/namespace",
    xmlnsNS: "http://www.w3.org/2000/xmlns/",
    xlinkNS: "http://www.w3.org/1999/xlink",
    evNS: "http://www.w3.org/2001/xml-events",
  
    /**
     * Get svg dimensions: width and height
     *
     * @param  {SVGSVGElement} svg
     * @return {Object}     {width: 0, height: 0}
     */
    getBoundingClientRectNormalized: function(svg) {
      if (svg.clientWidth && svg.clientHeight) {
        return { width: svg.clientWidth, height: svg.clientHeight };
      } else if (!!svg.getBoundingClientRect()) {
        return svg.getBoundingClientRect();
      } else {
        throw new Error("Cannot get BoundingClientRect for SVG.");
      }
    },
  
    /**
     * Gets g element with class of "viewport" or creates it if it doesn't exist
     *
     * @param  {SVGSVGElement} svg
     * @return {SVGElement}     g (group) element
     */
    getOrCreateViewport: function(svg, selector) {
      var viewport = null;
  
      if (Utils.isElement(selector)) {
        viewport = selector;
      } else {
        viewport = svg.querySelector(selector);
      }
  
      // Check if there is just one main group in SVG
      if (!viewport) {
        var childNodes = Array.prototype.slice
          .call(svg.childNodes || svg.children)
          .filter(function(el) {
            return el.nodeName !== "defs" && el.nodeName !== "#text";
          });
  
        // Node name should be SVGGElement and should have no transform attribute
        // Groups with transform are not used as viewport because it involves parsing of all transform possibilities
        if (
          childNodes.length === 1 &&
          childNodes[0].nodeName === "g" &&
          childNodes[0].getAttribute("transform") === null
        ) {
          viewport = childNodes[0];
        }
      }
  
      // If no favorable group element exists then create one
      if (!viewport) {
        var viewportId =
          "viewport-" + new Date().toISOString().replace(/\D/g, "");
        viewport = document.createElementNS(this.svgNS, "g");
        viewport.setAttribute("id", viewportId);
  
        // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes
        var svgChildren = svg.childNodes || svg.children;
        if (!!svgChildren && svgChildren.length > 0) {
          for (var i = svgChildren.length; i > 0; i--) {
            // Move everything into viewport except defs
            if (svgChildren[svgChildren.length - i].nodeName !== "defs") {
              viewport.appendChild(svgChildren[svgChildren.length - i]);
            }
          }
        }
        svg.appendChild(viewport);
      }
  
      // Parse class names
      var classNames = [];
      if (viewport.getAttribute("class")) {
        classNames = viewport.getAttribute("class").split(" ");
      }
  
      // Set class (if not set already)
      if (!~classNames.indexOf("svg-pan-zoom_viewport")) {
        classNames.push("svg-pan-zoom_viewport");
        viewport.setAttribute("class", classNames.join(" "));
      }
  
      return viewport;
    },
  
    /**
     * Set SVG attributes
     *
     * @param  {SVGSVGElement} svg
     */
    setupSvgAttributes: function(svg) {
      // Setting default attributes
      svg.setAttribute("xmlns", this.svgNS);
      svg.setAttributeNS(this.xmlnsNS, "xmlns:xlink", this.xlinkNS);
      svg.setAttributeNS(this.xmlnsNS, "xmlns:ev", this.evNS);
  
      // Needed for Internet Explorer, otherwise the viewport overflows
      if (svg.parentNode !== null) {
        var style = svg.getAttribute("style") || "";
        if (style.toLowerCase().indexOf("overflow") === -1) {
          svg.setAttribute("style", "overflow: hidden; " + style);
        }
      }
    },
  
    /**
     * How long Internet Explorer takes to finish updating its display (ms).
     */
    internetExplorerRedisplayInterval: 300,
  
    /**
     * Forces the browser to redisplay all SVG elements that rely on an
     * element defined in a 'defs' section. It works globally, for every
     * available defs element on the page.
     * The throttling is intentionally global.
     *
     * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
     * visible after pan/zoom when there are multiple SVGs on the page.
     * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
     * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
     */
    refreshDefsGlobal: Utils.throttle(
      function() {
        var allDefs = document.querySelectorAll("defs");
        var allDefsCount = allDefs.length;
        for (var i = 0; i < allDefsCount; i++) {
          var thisDefs = allDefs[i];
          thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
        }
      },
      this ? this.internetExplorerRedisplayInterval : null
    ),
  
    /**
     * Sets the current transform matrix of an element
     *
     * @param {SVGElement} element
     * @param {SVGMatrix} matrix  CTM
     * @param {SVGElement} defs
     */
    setCTM: function(element, matrix, defs) {
      var that = this,
        s =
          "matrix(" +
          matrix.a +
          "," +
          matrix.b +
          "," +
          matrix.c +
          "," +
          matrix.d +
          "," +
          matrix.e +
          "," +
          matrix.f +
          ")";
  
      element.setAttributeNS(null, "transform", s);
      if ("transform" in element.style) {
        element.style.transform = s;
      } else if ("-ms-transform" in element.style) {
        element.style["-ms-transform"] = s;
      } else if ("-webkit-transform" in element.style) {
        element.style["-webkit-transform"] = s;
      }
  
      // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
      // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
      // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/
      if (_browser === "ie" && !!defs) {
        // this refresh is intended for redisplaying the SVG during zooming
        defs.parentNode.insertBefore(defs, defs);
        // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
        // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
        // are located under any other element(s).
        window.setTimeout(function() {
          that.refreshDefsGlobal();
        }, that.internetExplorerRedisplayInterval);
      }
    },
  
    /**
     * Instantiate an SVGPoint object with given event coordinates
     *
     * @param {Event} evt
     * @param  {SVGSVGElement} svg
     * @return {SVGPoint}     point
     */
    getEventPoint: function(evt, svg) {
      var point = svg.createSVGPoint();
  
      Utils.mouseAndTouchNormalize(evt, svg);
  
      point.x = evt.clientX;
      point.y = evt.clientY;
  
      return point;
    },
  
    /**
     * Get SVG center point
     *
     * @param  {SVGSVGElement} svg
     * @return {SVGPoint}
     */
    getSvgCenterPoint: function(svg, width, height) {
      return this.createSVGPoint(svg, width / 2, height / 2);
    },
  
    /**
     * Create a SVGPoint with given x and y
     *
     * @param  {SVGSVGElement} svg
     * @param  {Number} x
     * @param  {Number} y
     * @return {SVGPoint}
     */
    createSVGPoint: function(svg, x, y) {
      var point = svg.createSVGPoint();
      point.x = x;
      point.y = y;
  
      return point;
    }
  };
  
  },{"./utilities":7}],6:[function(require,module,exports){
  // uniwheel 0.1.2 (customized)
  // A unified cross browser mouse wheel event handler
  // https://github.com/teemualap/uniwheel
  
  module.exports = (function(){
  
    //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel
  
    var prefix = "", _addEventListener, _removeEventListener, support, fns = [];
    var passiveOption = {passive: true};
  
    // detect event model
    if ( window.addEventListener ) {
      _addEventListener = "addEventListener";
      _removeEventListener = "removeEventListener";
    } else {
      _addEventListener = "attachEvent";
      _removeEventListener = "detachEvent";
      prefix = "on";
    }
  
    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
  
  
    function createCallback(element,callback) {
  
      var fn = function(originalEvent) {
  
        !originalEvent && ( originalEvent = window.event );
  
        // create a normalized event object
        var event = {
          // keep a ref to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: "wheel",
          deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
          deltaX: 0,
          delatZ: 0,
          preventDefault: function() {
            originalEvent.preventDefault ?
              originalEvent.preventDefault() :
              originalEvent.returnValue = false;
          }
        };
  
        // calculate deltaY (and deltaX) according to the event
        if ( support == "mousewheel" ) {
          event.deltaY = - 1/40 * originalEvent.wheelDelta;
          // Webkit also support wheelDeltaX
          originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
        } else {
          event.deltaY = originalEvent.detail;
        }
  
        // it's time to fire the callback
        return callback( event );
  
      };
  
      fns.push({
        element: element,
        fn: fn,
      });
  
      return fn;
    }
  
    function getCallback(element) {
      for (var i = 0; i < fns.length; i++) {
        if (fns[i].element === element) {
          return fns[i].fn;
        }
      }
      return function(){};
    }
  
    function removeCallback(element) {
      for (var i = 0; i < fns.length; i++) {
        if (fns[i].element === element) {
          return fns.splice(i,1);
        }
      }
    }
  
    function _addWheelListener(elem, eventName, callback, isPassiveListener ) {
      var cb;
  
      if (support === "wheel") {
        cb = callback;
      } else {
        cb = createCallback(elem, callback);
      }
  
      elem[_addEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);
    }
  
    function _removeWheelListener(elem, eventName, callback, isPassiveListener ) {
  
      var cb;
  
      if (support === "wheel") {
        cb = callback;
      } else {
        cb = getCallback(elem);
      }
  
      elem[_removeEventListener](prefix + eventName, cb, isPassiveListener ? passiveOption : false);
  
      removeCallback(elem);
    }
  
    function addWheelListener( elem, callback, isPassiveListener ) {
      _addWheelListener(elem, support, callback, isPassiveListener );
  
      // handle MozMousePixelScroll in older Firefox
      if( support == "DOMMouseScroll" ) {
        _addWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener );
      }
    }
  
    function removeWheelListener(elem, callback, isPassiveListener){
      _removeWheelListener(elem, support, callback, isPassiveListener);
  
      // handle MozMousePixelScroll in older Firefox
      if( support == "DOMMouseScroll" ) {
        _removeWheelListener(elem, "MozMousePixelScroll", callback, isPassiveListener);
      }
    }
  
    return {
      on: addWheelListener,
      off: removeWheelListener
    };
  
  })();
  
  },{}],7:[function(require,module,exports){
  module.exports = {
    /**
     * Extends an object
     *
     * @param  {Object} target object to extend
     * @param  {Object} source object to take properties from
     * @return {Object}        extended object
     */
    extend: function(target, source) {
      target = target || {};
      for (var prop in source) {
        // Go recursively
        if (this.isObject(source[prop])) {
          target[prop] = this.extend(target[prop], source[prop]);
        } else {
          target[prop] = source[prop];
        }
      }
      return target;
    },
  
    /**
     * Checks if an object is a DOM element
     *
     * @param  {Object}  o HTML element or String
     * @return {Boolean}   returns true if object is a DOM element
     */
    isElement: function(o) {
      return (
        o instanceof HTMLElement ||
        o instanceof SVGElement ||
        o instanceof SVGSVGElement || //DOM2
        (o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string")
      );
    },
  
    /**
     * Checks if an object is an Object
     *
     * @param  {Object}  o Object
     * @return {Boolean}   returns true if object is an Object
     */
    isObject: function(o) {
      return Object.prototype.toString.call(o) === "[object Object]";
    },
  
    /**
     * Checks if variable is Number
     *
     * @param  {Integer|Float}  n
     * @return {Boolean}   returns true if variable is Number
     */
    isNumber: function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
  
    /**
     * Search for an SVG element
     *
     * @param  {Object|String} elementOrSelector DOM Element or selector String
     * @return {Object|Null}                   SVG or null
     */
    getSvg: function(elementOrSelector) {
      var element, svg;
  
      if (!this.isElement(elementOrSelector)) {
        // If selector provided
        if (
          typeof elementOrSelector === "string" ||
          elementOrSelector instanceof String
        ) {
          // Try to find the element
          element = document.querySelector(elementOrSelector);
  
          if (!element) {
            throw new Error(
              "Provided selector did not find any elements. Selector: " +
                elementOrSelector
            );
            return null;
          }
        } else {
          throw new Error("Provided selector is not an HTML object nor String");
          return null;
        }
      } else {
        element = elementOrSelector;
      }
  
      if (element.tagName.toLowerCase() === "svg") {
        svg = element;
      } else {
        if (element.tagName.toLowerCase() === "object") {
          svg = element.contentDocument.documentElement;
        } else {
          if (element.tagName.toLowerCase() === "embed") {
            svg = element.getSVGDocument().documentElement;
          } else {
            if (element.tagName.toLowerCase() === "img") {
              throw new Error(
                'Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.'
              );
            } else {
              throw new Error("Cannot get SVG.");
            }
            return null;
          }
        }
      }
  
      return svg;
    },
  
    /**
     * Attach a given context to a function
     * @param  {Function} fn      Function
     * @param  {Object}   context Context
     * @return {Function}           Function with certain context
     */
    proxy: function(fn, context) {
      return function() {
        return fn.apply(context, arguments);
      };
    },
  
    /**
     * Returns object type
     * Uses toString that returns [object SVGPoint]
     * And than parses object type from string
     *
     * @param  {Object} o Any object
     * @return {String}   Object type
     */
    getType: function(o) {
      return Object.prototype.toString
        .apply(o)
        .replace(/^\[object\s/, "")
        .replace(/\]$/, "");
    },
  
    /**
     * If it is a touch event than add clientX and clientY to event object
     *
     * @param  {Event} evt
     * @param  {SVGSVGElement} svg
     */
    mouseAndTouchNormalize: function(evt, svg) {
      // If no clientX then fallback
      if (evt.clientX === void 0 || evt.clientX === null) {
        // Fallback
        evt.clientX = 0;
        evt.clientY = 0;
  
        // If it is a touch event
        if (evt.touches !== void 0 && evt.touches.length) {
          if (evt.touches[0].clientX !== void 0) {
            evt.clientX = evt.touches[0].clientX;
            evt.clientY = evt.touches[0].clientY;
          } else if (evt.touches[0].pageX !== void 0) {
            var rect = svg.getBoundingClientRect();
  
            evt.clientX = evt.touches[0].pageX - rect.left;
            evt.clientY = evt.touches[0].pageY - rect.top;
          }
          // If it is a custom event
        } else if (evt.originalEvent !== void 0) {
          if (evt.originalEvent.clientX !== void 0) {
            evt.clientX = evt.originalEvent.clientX;
            evt.clientY = evt.originalEvent.clientY;
          }
        }
      }
    },
  
    /**
     * Check if an event is a double click/tap
     * TODO: For touch gestures use a library (hammer.js) that takes in account other events
     * (touchmove and touchend). It should take in account tap duration and traveled distance
     *
     * @param  {Event}  evt
     * @param  {Event}  prevEvt Previous Event
     * @return {Boolean}
     */
    isDblClick: function(evt, prevEvt) {
      // Double click detected by browser
      if (evt.detail === 2) {
        return true;
      }
      // Try to compare events
      else if (prevEvt !== void 0 && prevEvt !== null) {
        var timeStampDiff = evt.timeStamp - prevEvt.timeStamp, // should be lower than 250 ms
          touchesDistance = Math.sqrt(
            Math.pow(evt.clientX - prevEvt.clientX, 2) +
              Math.pow(evt.clientY - prevEvt.clientY, 2)
          );
  
        return timeStampDiff < 250 && touchesDistance < 10;
      }
  
      // Nothing found
      return false;
    },
  
    /**
     * Returns current timestamp as an integer
     *
     * @return {Number}
     */
    now:
      Date.now ||
      function() {
        return new Date().getTime();
      },
  
    // From underscore.
    // Returns a function, that, when invoked, will only be triggered at most once
    // during a given window of time. Normally, the throttled function will run
    // as much as it can, without ever going more than once per `wait` duration;
    // but if you'd like to disable the execution on the leading edge, pass
    // `{leading: false}`. To disable execution on the trailing edge, ditto.
    throttle: function(func, wait, options) {
      var that = this;
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options) {
        options = {};
      }
      var later = function() {
        previous = options.leading === false ? 0 : that.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      };
      return function() {
        var now = that.now();
        if (!previous && options.leading === false) {
          previous = now;
        }
        var remaining = wait - (now - previous);
        context = this; // eslint-disable-line consistent-this
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
          if (!timeout) {
            context = args = null;
          }
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    },
  
    /**
     * Create a requestAnimationFrame simulation
     *
     * @param  {Number|String} refreshRate
     * @return {Function}
     */
    createRequestAnimationFrame: function(refreshRate) {
      var timeout = null;
  
      // Convert refreshRate to timeout
      if (refreshRate !== "auto" && refreshRate < 60 && refreshRate > 1) {
        timeout = Math.floor(1000 / refreshRate);
      }
  
      if (timeout === null) {
        return window.requestAnimationFrame || requestTimeout(33);
      } else {
        return requestTimeout(timeout);
      }
    }
  };
  
  /**
   * Create a callback that will execute after a given timeout
   *
   * @param  {Function} timeout
   * @return {Function}
   */
  function requestTimeout(timeout) {
    return function(callback) {
      window.setTimeout(callback, timeout);
    };
  }
  
  },{}]},{},[3]);
  ;
var maparea = {
  // Vars Sizes
  height: 0,
  width: 0,
  defaultHeight: 0,
  defaultWidth: 0,
  defaultMove: 100,

  // Vars Position
  baseTransX: 0,
  baseTransY: 0,
  transX: 0,
  transY: 0,

  // Vars Zoom
  baseScale: 1,
  scale: 1,
  zoomStep: 1.6,
  zoomMaxStep: 2,
  zoomMinStep: 0.2,
  zoomCurStep: 1,

  // Helpers
  initSizes: function(element) {
    this.height = element.height();
    this.width = element.width();

    this.defaultHeight = element.find('image').attr('height');
    this.defaultWidth = element.find('image').attr('width');
    
    this.zoomMinStep = Math.min(this.height / this.defaultHeight, this.width / this.defaultWidth);
  },

  setScale: function(element, scale) {
    this.scale = scale;
    this.applyTransform(element);
  },

  applyTransform: function(element) {
    var maxTransX, maxTransY, minTransX, minTransY;
    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX = (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY = (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    }
    else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    }
    else if (this.transX < minTransX) {
      this.transX = minTransX;
    }
    
    // 2014-04 GH :: Empecher le svg de se décaler vers le bas au chargement. Ca ne sert a rien de faire descendre le SVG
    if(this.zoomCurStep == 1) this.transY = 0;
    
    this.applyTransformParams(element, this.scale, this.transX, this.transY);
  },

  applyTransformParams: function(element, scale, transX, transY) {
   // element.find('g').attr('transform', 'scale(' + scale + ') translate(' + transX + ', ' + transY + ')');
  },

  // Block map
  adjust_map: function(element) {
    this.initSizes(element);

    var scale = Math.min(this.height / this.defaultHeight, this.width / this.defaultWidth);
    if(!isNaN(scale)) {
      this.setScale(element, scale);
    }
  },

  // Seat map
  adjust_scale: function(element) {
    this.initSizes(element);

    this.setScale(element, this.scale);
  },

  adjust_scale_ios: function(element) {

    var imgHeight = element.parent().find('.overrideIOS').get(0).naturalHeight;
    var imgWidth = element.parent().find('.overrideIOS').get(0).naturalWidth;

    var scale = Math.min(element.parent().find('.overrideIOS').height() / imgHeight, element.width() / imgWidth);  
    
    this.applyTransformParams(element, scale, 0, 0);
  },

  zoomIn: function(element) {
    this.initSizes(element);

    if (this.zoomCurStep < this.zoomMaxStep) {
      var curTransX = this.transX;
      var curTransY = this.transY;
      var curScale = this.scale;

      if(this.scale * this.zoomStep <= this.zoomMaxStep) {
        this.transX -= (this.width / this.scale - this.width / (this.scale * this.zoomStep)) / 2;
        this.transY -= (this.height / this.scale - this.height / (this.scale * this.zoomStep)) / 2;
        this.setScale(element, this.scale * this.zoomStep);
        this.zoomCurStep = this.scale;
      } else {
        this.transX -= (this.width / this.scale - this.width / this.zoomMaxStep) / 2;
        this.transY -= (this.height / this.scale - this.height / this.zoomMaxStep) / 2;
        this.setScale(element, this.zoomMaxStep);
        this.zoomCurStep = this.zoomMaxStep;
      }
    }
  },

  zoomOut: function(element) {
    this.initSizes(element);

    if (this.zoomCurStep > this.zoomMinStep) {
      var curTransX = this.transX;
      var curTransY = this.transY;
      var curScale = this.scale;

      if(this.scale / this.zoomStep >= this.zoomMinStep) {
        this.transX += (this.width / (this.scale / this.zoomStep) - this.width / this.scale) / 2;
        this.transY += (this.height / (this.scale / this.zoomStep) - this.height / this.scale) / 2;
        this.setScale(element, this.scale / this.zoomStep);
        this.zoomCurStep = this.scale;
      } else {
        this.transX += (this.width / this.zoomMinStep - this.width / this.scale) / 2;
        this.transY += (this.height / this.zoomMinStep - this.height / this.scale) / 2;
        this.setScale(element, this.zoomMinStep);
        this.zoomCurStep = this.zoomMinStep;
      }
    }
  },

  moveUp: function(element) {
    this.initSizes(element);
    this.transY += this.defaultMove / this.scale;
    this.applyTransform(element);
  },

  moveDown: function(element) {
    this.initSizes(element);
    this.transY -= this.defaultMove / this.scale;
    this.applyTransform(element);
  },

  moveLeft: function(element) {
    this.initSizes(element);
    this.transX += this.defaultMove / this.scale;
    this.applyTransform(element);
  },

  moveRight: function(element) {
    this.initSizes(element);
    this.transX -= this.defaultMove / this.scale;
    this.applyTransform(element);
  },

  makeDraggable: function(element) {
    var mouseDown = false;
    var oldPageX, oldPageY;
    var self = this;

    this.initSizes(element);

    this.isMoving = false;
    this.isMovingTimeout = false;

    element.mousemove(function(e) {
      if (mouseDown) {
        self.transX -= (oldPageX - e.pageX) / self.scale;
        self.transY -= (oldPageY - e.pageY) / self.scale;

        self.applyTransform($(this));

        oldPageX = e.pageX;
        oldPageY = e.pageY;

        self.isMoving = true;
        if (self.isMovingTimeout) {
          clearTimeout(self.isMovingTimeout);
        }
      }

      return false;
    }).mousedown(function(e) {
      mouseDown = true;
      oldPageX = e.pageX;
      oldPageY = e.pageY;
      
      $(this).css('cursor','move');

      return false;
    }).mouseup(function() {
      mouseDown = false;

      self.isMovingTimeout = setTimeout(function() {
        self.isMoving = false;
      }, 100);
      
      $(this).css('cursor','default');

      return false;
    }).mouseout(function(e) {
      mouseDown = false;

      self.isMovingTimeout = setTimeout(function() {
        self.isMoving = false;
      }, 100);

      return false;
    });
  },
  getCenterOfPolygon: function(element) {
    var points = element.attr('points');
    if (!points) {
      return;
    }
  
    var pointsArray = points.split(' ');
    var center = {
      x: 0,
      y: 0
    };
  
    for (var i = 0; i < pointsArray.length; i++) {
      var pair = pointsArray[i].split(',');
  
      center.x += (pair[0] / pointsArray.length);
      center.y += (pair[1] / pointsArray.length);
    }
  
    return center;
  }
};
;
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.hubberMapLoad = {
    attach: function (context) {
      var self = this;
      self.init(context);

      // If seat mode is available, switch on seat mode display.
      $('.seat-mode-content').each(function () {
        $(this).closest('.ticket-content-wrapper').addClass('css-seat-mode');
      });

      $('.js-hvsc-map', context).once('hsvc-map-load').on('placeLoaded', '.bloc_meeting', function (e) {
        var seat_mode = $.getSeatMode(this);  // Get the map controller
        var widthWindow = $(window).width();
        if (widthWindow <= 768) {
          $('.arena_img_toit', this).remove();
          $('.arena_img_toit_anime', this).remove();
        }
        else {
          $(this).mouseover(function () {
            $(seat_mode.place).trigger('removeRoof'); // Remove the roof
          });
        }
        // Temporisation affiche message infos pour zoom sur map en mobile
        if ($('.hammer_info', this).length > 0) {
          setTimeout(function () {
            $('.hammer_info', this).fadeOut('slow');
          }, 1500);
        }

        maparea.scale = 1;
        $(this).trigger('mapResize');

        // Blocks
        if (!seat_mode.is_mobile) {
          seat_mode.tooltip_modealaplace(
            'block', $('.arena svg[name=arena_map] .polygon_block', this)
          );

          // A tip will be displayed for every seat.
          seat_mode
            .tooltip_modealaplace(
              'seat', $('.arena svg[name=arena_map] .js-hvsc-seat', this));
        }
        if (typeof Drupal.behaviors.hubberVirtualSeatCart !== 'undefined') {
          // Load virtual seat cart
          Drupal.behaviors.hubberVirtualSeatCart.attach(context);
        }
        if (typeof Drupal.behaviors.hubberResaleSeatMode !== 'undefined') {
          // Load resale seat mode
          Drupal.behaviors.hubberResaleSeatMode.attach(context);
        }
      });

      /**
       * Removing roof
       */
      $('.js-hvsc-map', context).once('hvsc-map-open').on('removeRoof', function (e) {
        if ($('.arena_img_toit_anime', this).length > 0) {
          fade_image($("image.arena_img_toit_anime:first", this));
        }
        else {
          $('.arena_img_toit', this).fadeOut();
        }
      });

      $('.js-hvsc-map', context).once('hvsc-map-resize').on('mapResize', '.bloc_meeting', function (e) {
        var seat_mode = $.getSeatMode(this);  // Get the map controller
        var map = this;
        // mobile detect
        var window_size = $(window).width();

        // user agent detect
        var browser = function () {
          if (browser.prototype._cachedResult) {
            return browser.prototype._cachedResult;
          }
          // Opera 8.0+
          var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
          // Firefox 1.0+
          var isFirefox = typeof InstallTrigger !== 'undefined';
          // Safari 3.0+ "[object HTMLElementConstructor]"
          var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
            return p.toString() === "[object SafariRemoteNotification]";
          })(!window['safari'] || safari.pushNotification);
          // Internet Explorer 6-11
          var isIE = false || !!document.documentMode;
          // Edge 20+
          var isEdge = !isIE && !!window.StyleMedia;
          // Chrome 1+
          var isChrome = !!window.chrome && !!window.chrome.webstore;
          // Blink engine detection
          var isBlink = (isChrome || isOpera) && !!window.CSS;
          return browser.prototype._cachedResult =
            isOpera ? 'Opera' :
              isFirefox ? 'Firefox' :
                isSafari ? 'Safari' :
                  isChrome ? 'Chrome' :
                    isIE ? 'IE' :
                      isEdge ? 'Edge' :
                        "Don't know";
        };

        // calcul des limit x,y,x2,y2 du zoom
        var beforePan = function (oldPan, newPan) {
          var customPan = {},
            sizes = this.getSizes(),
            left = -(sizes.viewBox.width * sizes.realZoom - sizes.width),
            right = 0,
            top = -(sizes.viewBox.height * sizes.realZoom - sizes.height),
            bottom = 0;
          if (sizes.viewBox.width * sizes.realZoom > sizes.width) {
            if (newPan.x < left) {
              customPan.x = left;
            }
            if (newPan.x > right) {
              customPan.x = right;
            }
          }
          else {
            customPan.x = (sizes.width - sizes.viewBox.width * sizes.realZoom) / 2;
          }
          if (sizes.viewBox.height * sizes.realZoom > sizes.height) {
            if (newPan.y < top) {
              customPan.y = top;
            }
            if (newPan.y > bottom) {
              customPan.y = bottom;
            }
          }
          else {
            customPan.y = (sizes.height - sizes.viewBox.height * sizes.realZoom) / 2;
          }
          return customPan;
        };
        // mise en place des différent event pour zoomer pour différents
        // supports
        var eventsHandler = {
          haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
          , init: function (options) {
            var instance = options.instance
              , initialScale = 1
              , pannedX = 0
              , pannedY = 0
            // Init Hammer
            // Listen only for pointer and touch events
            this.hammer = Hammer(options.svgElement, {
              inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
            })
            // Enable pinch
            this.hammer.get('pinch').set({enable: true})
            // Handle double tap
            this.hammer.on('doubletap', function (ev) {
              instance.zoomIn()
            })
            // Handle pan
            this.hammer.on('panstart panmove', function (ev) {
              // On pan start reset panned variables
              if (ev.type === 'panstart') {
                pannedX = 0
                pannedY = 0
              }
              // Pan only the difference
              instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
              pannedX = ev.deltaX
              pannedY = ev.deltaY
            })
            // Handle pinch
            this.hammer.on('pinchstart pinchmove', function (ev) {
              // On pinch start remember initial zoom
              if (ev.type === 'pinchstart') {
                initialScale = instance.getZoom()
                instance.zoom(initialScale * ev.scale)
              }
              instance.zoom(initialScale * ev.scale)
            })
            // Prevent moving the page on some devices when panning over SVG
            options.svgElement.addEventListener('touchmove', function (e) {
              e.preventDefault();
            });
          }
          , destroy: function () {
            this.hammer.destroy()
          }
        };

        var init_svgPanZoom = function () {
          var options = {
            viewportSelector: '.svg-pan-zoom_viewport',
            panEnabled: true,
            controlIconsEnabled: false,
            zoomEnabled: true,
            dblClickZoomEnabled: false,
            mouseWheelZoomEnabled: true,
            preventMouseEventsDefault: true,
            zoomScaleSensitivity: 0.1,
            minZoom: 1,
            maxZoom: 10,
            center: true,
            contain: true,
            fit: false,
            customEventsHandler: eventsHandler,
            beforePan: beforePan
          };
          if ($(map).is(':visible') && $('.arena svg', map).length != 0) {
            seat_mode.panZoomInstance = svgPanZoom('.arena svg', options);
          }
        }

        // config et init du svgPenZoom
        var enableSvgZoomPan = function () {

          // initialisation de svgPanZoom
          init_svgPanZoom();

          $(document).off('click', '.zoom-in').on('click', '.zoom-in', function (e) {
            e.preventDefault();
            init_svgPanZoom();
            seat_mode.panZoomInstance.zoomIn();
          });
          $(document).off('click', '.zoom-out').on('click', '.zoom-out', function (e) {
            e.preventDefault();
            init_svgPanZoom();
            seat_mode.panZoomInstance.zoomOut();
          });

          $('.map-loading-container').fadeOut(300, function() {
            $(this).remove();
          })

        };
        enableSvgZoomPan();
        self.resizeSvg();
      });

      $(window).off('resize', self.resizeSvg).on('resize', self.resizeSvg);
      $(document).off('mapResize', self.resizeSvg).on('mapResize', self.resizeSvg);
    },

    resizeSvg: function() {
      $('.js-hvsc-map').each(function() {
        var seat_mode = $.getSeatMode(this);
        if (typeof seat_mode === 'undefined') {
          return true;
        }

        const widthWindow = $(window).width();
        let width_container = $('svg g image', this).attr('width'),
          height_container = $('svg g image', this).attr('height');
        if (widthWindow >= 992) {
          width_container = $('#commerce-product-ticketing-plan').width();
          height_container = $('#commerce-product-ticketing-plan').height();
        }
        let padding_container = 100 / (width_container / height_container);

        $('.arena', this).attr('style', 'padding-bottom:' + padding_container + '%');

        var panZoomSizes = seat_mode.panZoomInstance.getSizes();
        if (!panZoomSizes.height || !panZoomSizes.width) {
          return true;
        }
        seat_mode.panZoomInstance.resize();
        seat_mode.panZoomInstance.contain();
        seat_mode.panZoomInstance.center();
      });
    },

    refitSvgPanZoom: function(seat_mode) {
      if (!!drupalSettings.isMonoBlock) {
        return;
      }
      if (typeof seat_mode === 'undefined' || typeof seat_mode.panZoomInstance === 'undefined') {
        return;
      }
      seat_mode.panZoomInstance.updateBBox();
      seat_mode.panZoomInstance.resize();
      seat_mode.panZoomInstance.contain();
      seat_mode.panZoomInstance.center();
      seat_mode.panZoomInstance.resetZoom();
    },

    init: function (context) {
      $('.js-hvsc-map', context).once('init-seat-mode').each(function () {
        $.initSeatMode(this); // Init the map controller
      });
    },

    /**
     * A new block has been loaded through ajax.
     *
     * Resize the map container to fit the new block.
     *
     * @param seatMode
     *   The seat mode controller.
     * @param blockId
     *   The loaded block id.
     */
    onMapBlockLoaded: function(seatMode, blockId) {
      this.refitSvgPanZoom(seatMode);
    },

    /**
     * Refresh seats display on the map
     *
     * @param $seats
     * @param addedToCart
     */
    refreshSeatDisplay: function ($seats, addedToCart = false) {
      var self = this;
      var xmlns = 'http://www.w3.org/2000/svg';
      var seat_mode = $.getSeatMode($seats);

      if (!addedToCart) {
        $seats.each(function () {
          if (!$(this).is('g')) {
            return true;
          }
          $(this).off('click mouseleave mouseover');
          var html_element = $(this)[0];
          var polygon = document.createElementNS(xmlns, 'polygon');
          $.each(html_element.attributes, function ( index, attribute ) {
            polygon.setAttribute(attribute.name, attribute.value);
          });

          var $seat = $(this).children('.seat-back');
          $.each($seat[0].attributes, function ( index, attribute ) {
            if (attribute.name !== 'class') {
              polygon.setAttribute(attribute.name, attribute.value);
            }
          });
          html_element.replaceWith(polygon);
          if ($(this).hasClass('js-hvsc-seat')) {
            Drupal.behaviors.hubberVirtualSeatCart.bindSeatEvents($(polygon));
          }
          if ($(this).hasClass('js-resale-seat')) {
            Drupal.behaviors.hubberResaleSeatMode.bindSeatEvents($(polygon));
          }
          seat_mode.tooltip_modealaplace('seat', $(polygon));
        });
      }
      else {
        $seats.each(function () {
          if (!$(this).is('polygon')) {
            return true;
          }
          $(this).off('click mouseleave mouseover');
          var html_element = $(this)[0];
          var group = document.createElementNS(xmlns, 'g');
          var back_polygon = document.createElementNS(xmlns, 'polygon');
          var front_polygon = document.createElementNS(xmlns, 'polygon');
          back_polygon.setAttribute('class', 'seat-back');
          front_polygon.setAttribute('class', 'seat-shape');

          var child_attribute_names = ['style', 'shape', 'points'];
          $.each(html_element.attributes, function ( index, attribute ) {
            if (child_attribute_names.includes(attribute.name)) {
              back_polygon.setAttribute(attribute.name, attribute.value);
              if (attribute.name !== 'style') {
                front_polygon.setAttribute(attribute.name, attribute.value);
              }
            }
            else {
              group.setAttribute(attribute.name, attribute.value);
            }
          });
          group.append(back_polygon, front_polygon);
          html_element.replaceWith(group);
          if ($(this).hasClass('js-hvsc-seat')) {
            Drupal.behaviors.hubberVirtualSeatCart.bindSeatEvents($(group));
          }
          if ($(this).hasClass('js-resale-seat')) {
            Drupal.behaviors.hubberResaleSeatMode.bindSeatEvents($(group));
          }
          seat_mode.tooltip_modealaplace('seat', $(group));
        });
      }
    }

  }
})(jQuery, Drupal, drupalSettings);
;
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.hubberMapActions = {
    attach: function (context) {

      var self = this;

      if (drupalSettings.isMonoBlock) {
        const back_label = Drupal.t('I rather choose my seats automatically');
        $('.js-btn-cancel-choosen-block').html(back_label);
        $('.js-btn-cancel-choosen-block.ticket-block-head-mobile').html('<a class="btn-back auto-mode">' + back_label + '</a>');
      }

      /**
       * What happens when user is clicking a block
       */
      $('.js-hvsc-map', context).once('hvsc-map-blockzoom').on('click', '.bloc_meeting .polygon_block_enabled', function (e) {
        // If block is yet selected, nothing to do.
        if ($(this).hasClass('polygon_block_selected') || $(this).hasClass('js-polygon_block_locked')) {
          return;
        }

        var seat_mode = $.getSeatMode(this);

        // Go the block map if category is yet selected.
        var blockId = $(this).attr('block-id');
        var blockName = seat_mode.blocks_datas[blockId].name;

        // Note the current cart and the chosen block.
        var map = $(this).closest('[hvsc-id]');
        $('#commerce-product-ticketing-form').attr('hvsc-id', map.attr('hvsc-id'));

        // First, hide every blocks.
        $('.polygon_block_filtered', seat_mode.place)
          .removeClass('polygon_block_filtered');

        // And unselect any blocks.
        map.find('.polygon_block_selected').removeClass('polygon_block_selected');

        // Show the block as selected on the map
        $(this).addClass('polygon_block_selected');
        $(seat_mode.place).trigger('HMAEventUpdateBlockInfos'); // Update block
                                                                // informations

        $('.js-hvsc-map').trigger('HTATCFSelectBlock', [
          blockId,
          Drupal.t('Block %name', {
            '%name': blockName,
          }),
        ]);

        $('.js-block-list-categories').hide();
        $('.select-category-hint, .nb-tickets-hint, .js-back-to-category-list').addClass('d-none');
        $('.js-hvsc-vscart').removeClass('d-none');
      });

      $('.js-hvsc-map', context).once('hvsc-force-map-display').on('HTATCFForceMapDisplay', function (e) {
        // If Express mode is displayed, trigger a block selection.
        if ($('.js-block-list-categories').css('display') != 'none') {
          $('.js-block-list-categories').hide();
          $('.select-category-hint, .nb-tickets-hint, .js-back-to-category-list').addClass('d-none');
          $('.js-hvsc-vscart').removeClass('d-none');
          var seat_mode = $.getSeatMode(this);

          for (var block_id in seat_mode.offer_datas.blocks) {
            $(this).trigger('HTATCFSelectBlock', [block_id, '']);
          }
        }
      });

      $('.js-hvsc-map', context).once('hvsc-select-mono-block').on('HTATCFSelectMonoBlock', function (e) {
          var block_info = $('.ticket-category-head').html();
          var seat_mode = $.getSeatMode(this);

          for (var block_id in seat_mode.offer_datas.blocks) {
            $(this).trigger('HTATCFSelectBlock', [block_id, block_info]);
          }
      });

      // When block map is selected.
      $('.js-hvsc-map', context).once('hvsc-select-block').on('HTATCFSelectBlock', function (e, blockId, blockTitle) {
        // Set the block id in the hidden field of the form.
        $('#commerce-product-ticketing-form input[name=block_id]').val(blockId);
        $('#commerce-product-ticketing-form .field--name-variations').addClass('d-none d-lg-block');

        $('.js-hvsc-choose-block', this).show();
        $(this).trigger('HTATCFEventSelectMALP', [blockId]);
        $('.categ_block').show();
        $('.js-show-choice-panel').hide();

        // Display block information.
        $('.block-name', context).html(blockTitle);

        // Go directly to selected block.
        $('.js-categories-panel').attr('block-id', blockId);

        $('.ticket-category-body').hide();
        $('.ticket-content-filters.ticketing-filters').addClass('d-none d-lg-flex');
        $('.js-hvsc-vscart').each(function() {
          $(this).trigger('VSCartUpdateEvent', [$(this).attr('hvsc-id')]);
        });
        $('.js-hvsc-vscart').removeClass('d-none');
        $('.js-btn-cancel-choosen-block.ticket-block-head-mobile').removeClass('d-none');

        self.hidePageHeader();
      });

      // When from a block, user switch to block map.
      $('.js-click-seat-mode', context).once('hvsc-map-seat-mode').on('click', function () {
        var blockId = $('#commerce-product-ticketing-form input[name=block_id]').val();
        var map = $('.js-hvsc-map[hvsc-id=' + $('#commerce-product-ticketing-form').attr('hvsc-id') + ']');
        map.trigger('HTATCFSelectBlock', [
          blockId,
          Drupal.t('Block %name', {
            '%name': $.getSeatMode(map).blocks_datas[blockId].name,
          }),
        ]);
        $('.js-block-list-categories').hide();
        $(this).hide();
      });

      /**
       * Reset map
       */
      $('.js-hvsc-map', context).once('hvsc-map-reset').on('HTATCFEventBackToMap', function (e) { // back to global map event
        self.displayPageHeader();
        if (drupalSettings.isMonoBlock) {
          return;
        }
        var map = $('.main_map', this);
        // Come back in top view
        map.css('display', 'block');
        $('.block_map', this).css('display', 'none');

        $('.block_form', this).css('display', 'none');
        $('.polygon_neutral').css('fill', '').css('stroke', '');
        $('.polygon_block.hover', this).removeClass('hover');
        $('.polygon_block', this).not('.polygon_block_full').addClass('polygon_block_enabled');
        $('.polygon_block_selected', this)
          .removeClass('polygon_block_selected');
        Drupal.behaviors.hubberMapLoad.refitSvgPanZoom($.getSeatMode(this));
        $('.js-hvsc-choose-block').css('display', 'none');  // Remove "choose block" message

        map.trigger('MapResetEvent', [map]);
      });

      // Show blocks information for a category.
      $('.js-hvsc-map', context).once('hvsc-map-category-blocks-info').on('HTATCFEShowCategoryBlocksInfo', function (e, cat_id) {
        if (!drupalSettings.displayBlocksList) {
          $('.ticket-category-body').show();
          return;
        }

        var seat_mode = $.getSeatMode(this);
        var blocksList = '';
        var price
          = seat_mode.offer_datas.prices.categories[cat_id].display_price;

        // Count the displayed block numbers.
        var nbBlocks = 0;

        for (var block_id in seat_mode.offer_datas.blocks) {
          var nb = seat_mode.offer_datas.blocks[block_id][cat_id];
          if (undefined == nb) {
            continue;
          }

          // One more displayed block.
          nbBlocks++;

          blocksList += '<li block-id="' + block_id + '"><div class="block-infos-part-l"><div class="block-title">'
            + Drupal.t('Block %name', {
              '%name': seat_mode.blocks_datas[block_id].name,
            }) + '</div><div class="block-description">'
            + (undefined == seat_mode.blocks_datas[block_id].tribune ? '' : Drupal.t('Tribune %tribune', {
              '%tribune': seat_mode.blocks_datas[block_id].tribune,
            })) + '</div></div><div class="block-infos-part-r"><div class="block-price">' + price
            + '</div><div class="block-availability">'
            + Drupal.formatPlural(nb, '@count seat left.', '@count seats left.') + '</div></div><div class="actions"><span class="show-details"></span></div></li>';
        }

        // Show the list of the category blocks.
        $('.ticket-category-body ul').html(blocksList);

        // Show block details toogle click.
        $('.ticket-category-body li').on('click', function () {
          var block_id = $(this).closest('li').attr('block-id');
          var block_name = Drupal.t('Block %name', {
            '%name': seat_mode.blocks_datas[block_id].name,
          });
          var block_info = $('.ticket-category-head').html() + '<span class="separator">/</span>' + block_name;

          $('.js-hvsc-map').trigger('HTATCFSelectBlock', [
            block_id,
            block_info,
          ]);
        }).on('mouseover', function () {
          $('.js-hvsc-map').trigger('HTATCFEventBlockHover', [
            $(this).attr('block-id'),
          ]);
        }).on('mouseout', function () {
          $('.js-hvsc-map').trigger('HTATCFEventBlockOut');
        });

        // If only one block, it should have specific display.
        if (nbBlocks == 1) {
          $('.ticket-category-body li').addClass('css-single-filtered');
        }

        $('.ticket-category-body').show();
      });
    },

    displayPageHeader: function () {
      $('.ticket-header-wrapper, #header').removeClass('d-none d-lg-block');
    },
    hidePageHeader: function () {
      $('.ticket-header-wrapper, #header').addClass('d-none d-lg-block');
    },
  };
})(jQuery, Drupal, drupalSettings);
;
/**
 * Loading the seat selector form on a map
 */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.hubberMapFormLoad = {
    attach: function (context) {

      /**
       * Updating block informations
       */
      $('.js-hvsc-map', context).once('hvsc-map-blockform').on('HMAEventUpdateBlockInfos', function (e) {
        var seat_mode = $.getSeatMode(this);

        // Look if the user selected a category
        var catId;
        if ($('.js-show-category .js-btn-select-mode').prop('manual')) {
          catId = $('.js-show-category .js-btn-select-mode').attr('cat-id'); // Get selected category
        }

        var offers = seat_mode.offer_datas;

        // Printing block information
        var blockId = $(this).find('.polygon_block_selected').attr('block-id');
        var block = seat_mode.blocks_datas[blockId];
        var dispos = 0;
        if (undefined == catId) {
          for (var id in offers.blocks[blockId]) {
            dispos += offers.blocks[blockId][id];
          }

          if (Object.keys(offers.blocks[blockId]).length == 1) { // If the block is linked to only one category
            $('#commerce-product-ticketing-form').trigger('HMAEventSelectCategory', [id]);    // select this category
          } else {                                               // Otherwise,
            $('#commerce-product-ticketing-form').trigger('HTATCFEventReturnToCategoryList'); // come back to category list
          }
        } else {
          dispos += offers.blocks[blockId][catId];
        }
        $('.js-show-choice-panel').show();  // Show choice panel
        $('.js-show-choice-panel .stand-name').html(
          Drupal.t('Tribune %tribune - %name', {'%tribune': block.tribune, '%name': block.name})
        );
        $('.js-show-choice-panel .nb-dispo').html(Drupal.formatPlural(dispos, '@count seat left.', '@count seats left.'));
      });

      // Removing category filters
      $('.js-hvsc-map', context).once('hvsc-map-unfilter').on('HMAEventRemoveFilter', function (e) {
        var blocks = $(this).find('.polygon_block');
        blocks.not('.polygon_block_full').addClass('polygon_block_enabled');
        blocks.removeClass('polygon_block_filtered');
        $('.js-hvsc-seat.filtered', this).removeClass('filtered');  // Filter seats
      });
    },
  }
})(jQuery, Drupal, drupalSettings);

;
/**
 * Actions on the seat selector form
 */
(function ($, Drupal, drupalSettings) {
  'use strict';
  Drupal.behaviors.hubberMapFormActions = {
    attach: function (context) {
      var self = this;
      $('#info-block-submit', context).once('hvsc-submit-block').on('click', function () {
        $('.js-hvsc-map[hvsc-id=' + $(this).prop('hvsc-id') + ']').trigger('HTATCFSelectBlock', [
          $(this).prop('block-id'),
          Drupal.t('Block %name', {
            '%name': $(this).prop('block-name'),
          }),
        ]);
        $('#info-block').hide();
      });

      /**
       * When the user choose between different categories for a block
       */
      $('.js-hvsc-map', context).once('hvsc-choose-category').on('click', '.block_form_categories li', function (e) {
        var seat_mode = $.getSeatMode(this);
        $('.block_form_categories li', seat_mode.place)
          .addClass('category_unselected');
        $(this).removeClass('category_unselected');
        $('.block_form_express', seat_mode.place).css('display', 'block');
        $(seat_mode.place).trigger('update-choose-button'); // Update choose
                                                            // place button
                                                            // status
      });

      /**
       * Select block map for choosing place.
       */
      $('.js-hvsc-map', context).once('hvsc-choose-my-seats').on('HTATCFEventSelectMALP', function (e, blockId) {
        var seat_mode = $.getSeatMode(this);
        if ($('.block_map[block-id=' + blockId + ']').length > 0) {
          $('.main_map').css('display', 'none');
          $('.block_map[block-id=' + blockId + ']').css('display', 'block');
          Drupal.behaviors.hubberMapLoad.refitSvgPanZoom(seat_mode);
          $('.main_map').trigger('BlockSelectedOnMainMapEvent', [blockId]);
          return;
        }
        var maps = drupalSettings.maps;
        var product_id = Object.keys(maps)[0];
        var endpoint = Drupal.url('hubber_seat_mode/block/' + product_id + '/' + maps[product_id]['venue_config_id'] + '/' + blockId);
        $.getJSON(endpoint).done(function (data) {
          if (Drupal.behaviors.hubberFilterBlockModeAuto && Drupal.behaviors.hubberFilterBlockModeAuto.selected_category == undefined) {
            Drupal.behaviors.hubberFilterBlockModeAuto.selected_category = Object.keys(seat_mode.offer_datas.blocks[blockId]);
          }
          if (drupalSettings.isMonoBlock) {
            return;
          }
          if (data === '') {
            alert(Drupal.t('An error occurred while retrieving the block'));
            return;
          }
          $('.svg-pan-zoom_viewport').append(self.parseSVG((data)));
          $('.main_map').css('display', 'none');
          $('.block_map[block-id=' + blockId + ']').css('display', 'block');
          // Run all onMapBlockLoaded functions from Drupal.behaviors.
          Object.keys(Drupal.behaviors).forEach((i) => {
            if (typeof Drupal.behaviors[i].onMapBlockLoaded === 'function') {
              Drupal.behaviors[i].onMapBlockLoaded(seat_mode, blockId);
            }
          });
        });
      });

      /**
       * When the status of choose seat button should be updated
       */
      $('.js-hvsc-map', context).once('hvsc-update-choose-button').on('update-choose-button', function () {
        var block = $('.polygon_block_selected', this);
        if (block.length == 1 && block.attr('block-mode') == 2) {
          $('.block_form_choose', this).removeClass('disabled');
        }
        else {
          $('.block_form_choose', this).addClass('disabled');
        }
      });
    },
    parseSVG: function (s) {
      var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
      var frag = document.createDocumentFragment();
      while (div.firstChild.firstChild) {
        frag.appendChild(div.firstChild.firstChild);
      }
      return frag;
    }
  }
})(jQuery, Drupal, drupalSettings);

;
/**
 * @file
 * Actions from product filter to map
 */

(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.hubberMapFilterActions = {
    attach: function (context) {
      // At beginning, no category is selected.
      var oneCatMode = false;
      var self = this;

      $('.js-categories', context)
        .once('hsvc-map-category-select').on('change', function (e) {
        $('.js-hvsc-map').trigger('category-filter');
      });

      // Show linked blocks when mouse is over category selector.
      $('.js-hvsc-map', context)
        .once('hvsc-map-category-over')
        .on('HTATCFEventCategoryHover', function (e, catId) {
          // Not appliable if one category is selected.
          if (oneCatMode) {
            return;
          }

          $(this).trigger('removeRoof');  // Remove the roof if it's still here
          var seat_mode = $(this).prop('controller');
          var color = seat_mode.cats_datas[catId].color;
          for (var id in seat_mode.offer_datas.blocks) {
            var block = seat_mode.offer_datas.blocks[id];
            if (block[catId] != undefined) {
              $('.polygon_neutral[block-id=' + id + ']', this)
                .css('fill', color)
                .css('stroke', color);
              $('.polygon_block_enabled[block-id=' + id + ']', this)
                .addClass('hover');
            }
          }
        });

      // Bring back blocks to normal state when mouse is out of category
      // selector.
      $('.js-hvsc-map', context)
        .once('hvsc-map-category-out').on('HTATCFEventCategoryOut', function () {
        // Not appliable if one category is selected.
        if (oneCatMode) {
          return;
        }

        $('.polygon_neutral', this).css('fill', '').css('stroke', '');
        $('.polygon_block_enabled').removeClass('hover');
      });

      // When mouse is over element linked to a block.
      $('.js-hvsc-map', context).once('hvsc-map-block-over').on('HTATCFEventBlockHover', function (e, blockId) {
        if (oneCatMode) {
          $('.ticket-category-body li[block-id=' + blockId + ']').addClass('hover');

          // Highlight the block.
          $('.polygon_block_filtered[block-id=' + blockId + ']').addClass('hover');
        }
      });

      // When mouse leaves element linked to a block.
      $('.js-hvsc-map', context).once('hvsc-map-block-out').on('HTATCFEventBlockOut', function () {
        $('.ticket-category-body li').removeClass('hover');

        // Stop highlighting the block.
        $('.polygon_block_filtered').removeClass('hover');
      });

      // Keep only linked blocks when some categories are selected by filter.
      $('.js-hvsc-map', context)
        .once('hsvc-map-categories-filter')
        .on('HTATCFEventCategoriesFilter', function (e, catIds) {
          var seat_mode = $(this).prop('controller');

          // Bring back the map to initial state.
          if (undefined != seat_mode.panZoomInstance && !drupalSettings.isMonoBlock) {
            seat_mode.panZoomInstance.reset();
          }

          // First, hide every block and seat.
          $('.polygon_block_enabled', this)
            .removeClass('polygon_block_filtered')
            .removeClass('polygon_block_selected');

          // Count the number of categories.
          var n = catIds.length;

          // Show the blocks belonging to the categories.
          for (var id in seat_mode.offer_datas.blocks) {
            var block = seat_mode.offer_datas.blocks[id];
            for (var i = 0; i < n; i++) {
              if (block[catIds[i]] != undefined) {
                $('.polygon_block_enabled[block-id=' + id + ']', this)
                  .addClass('polygon_block_filtered');
                break;
              }
            }
          }

          // "Async" call to reset the seats to not slow down the main process
          setTimeout(self.filterSeats, 10, catIds);

          $(this).trigger('removeRoof');  // Remove the roof if it's still here
        });

      // When a category is selected.
      $('.js-hvsc-map', context).once('hvsc-map-select-category').on('HTATCFSelectCategory', function (e, catId) {
        oneCatMode = true;
        var color = $(this).prop('controller').cats_datas[catId].color;
        $('.polygon_neutral').css('fill', color).css('stroke', color);
        $(this).removeClass('js-initial-state');
        $('.polygon_block_enabled').removeClass('hover');

        // Link the form to current cart.
        $('#commerce-product-ticketing-form')
          .attr('hvsc-id', $(this).closest('[hvsc-id]').attr('hvsc-id'));
      });

      // When category is not selected anymore.
      $('.js-hvsc-map', context).once('hvsc-map-unselect-category').on('HTATCFUnSelectCategory', function () {
        oneCatMode = false;
        $('.polygon_neutral').css('fill', '').css('stroke', '');
        $(this).addClass('js-initial-state');

        // Leave the category selected mode and go back to initial map.
        $('.categ_block').hide();
        $(this).trigger('HTATCFEventBackToMap');
      });

      // When mouse is over a block.
      $('.js-hvsc-map', context).once('hvsc-block-over').on('mouseover', '.bloc_meeting .polygon_block_enabled', function (e) {
        if ($(this).hasClass('js-polygon_block_locked')) {
          return;
        }
        if (!$(this).hasClass('polygon_block_filtered')) {
          return;
        }

        $(this)
          .closest('.js-hvsc-map')
          .trigger('HTATCFEventBlockHover', [$(this).attr('block-id')]);
      });

      // When mouse leaves a block.
      $('.js-hvsc-map', context).once('hvsc-block-out').on('mouseout', '.bloc_meeting .polygon_block_enabled', function (e) {
        $(this).closest('.js-hvsc-map').trigger('HTATCFEventBlockOut');
      });
    },
    filterSeats: function (catIds) {
      $('.js-hvsc-seat:not(.unavailable)').addClass('filtered');
      for (var i = 0; i < catIds.length; i++) {
        // Show the seats belonging to the categories.
        $('.js-hvsc-seat[category-id=' + catIds[i] + '].filtered').removeClass('filtered');
      }
    }
  };
})(jQuery, Drupal, drupalSettings);
;
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(u){var e=function(){if(u&&u.fn&&u.fn.select2&&u.fn.select2.amd)var e=u.fn.select2.amd;var t,n,r,h,o,s,f,g,m,v,y,_,i,a,b;function w(e,t){return i.call(e,t)}function l(e,t){var n,r,i,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(r=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(i=(i=f[h.slice(0,d).join("/")])&&i[r]){o=i,a=u;break}if(o)break;!l&&g&&g[r]&&(l=g[r],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(w(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!w(m,e)&&!w(_,e))throw new Error("No "+e);return m[e]}function c(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?c(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},i=Object.prototype.hasOwnProperty,a=[].slice,b=/\.js$/,f=function(e,t){var n,r=c(e),i=r[0],o=t[1];return e=r[1],i&&(n=D(i=l(i,o))),i?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return l(e,t)}}(o)):l(e,o):(i=(r=c(e=l(e,o)))[0],e=r[1],i&&(n=D(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,r){var i,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(r=r||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)i=d[l]=g.module(e);else if(w(m,o)||w(v,o)||w(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(r,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(i&&i.exports!==h&&i.exports!==m[e]?m[e]=i.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,r,i){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=r,r=i),r?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(r=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),w(m,e)||w(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=r),e.define("almond",function(){}),e.define("jquery",[],function(){var e=u||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var i={};function u(e){var t=e.prototype,n=[];for(var r in t){"function"==typeof t[r]&&"constructor"!==r&&n.push(r)}return n}i.Extend=function(e,t){var n={}.hasOwnProperty;function r(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},i.Decorate=function(r,i){var e=u(i),t=u(r);function o(){var e=Array.prototype.unshift,t=i.prototype.constructor.length,n=r.prototype.constructor;0<t&&(e.call(arguments,r.prototype.constructor),n=i.prototype.constructor),n.apply(this,arguments)}i.displayName=r.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=r.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=i.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,r=e.length;n<r;n++)e[n].apply(this,t)},i.Observable=e,i.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},i.bind=function(e,t){return function(){e.apply(t,arguments)}},i._convertData=function(e){for(var t in e){var n=t.split("-"),r=e;if(1!==n.length){for(var i=0;i<n.length;i++){var o=n[i];(o=o.substring(0,1).toLowerCase()+o.substring(1))in r||(r[o]={}),i==n.length-1&&(r[o]=e[t]),r=r[o]}delete e[t]}}return e},i.hasScroll=function(e,t){var n=o(t),r=t.style.overflowX,i=t.style.overflowY;return(r!==i||"hidden"!==i&&"visible"!==i)&&("scroll"===r||"scroll"===i||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},i.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},i.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},i.__cache={};var n=0;return i.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},i.StoreData=function(e,t,n){var r=i.GetUniqueElementId(e);i.__cache[r]||(i.__cache[r]={}),i.__cache[r][t]=n},i.GetData=function(e,t){var n=i.GetUniqueElementId(e);return t?i.__cache[n]&&null!=i.__cache[n][t]?i.__cache[n][t]:o(e).data(t):i.__cache[n]},i.RemoveData=function(e){var t=i.GetUniqueElementId(e);null!=i.__cache[t]&&delete i.__cache[t],e.removeAttribute("data-select2-id")},i}),e.define("select2/results",["jquery","./utils"],function(h,f){function r(e,t,n){this.$element=e,this.data=n,this.options=t,r.__super__.constructor.call(this)}return f.Extend(r,f.Observable),r.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},r.prototype.clear=function(){this.$results.empty()},r.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),r=this.options.get("translations").get(e.message);n.append(t(r(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},r.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},r.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var r=e.results[n],i=this.option(r);t.push(i)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},r.prototype.position=function(e,t){t.find(".select2-results").append(e)},r.prototype.sort=function(e){return this.options.get("sorter")(e)},r.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},r.prototype.setClasses=function(){var t=this;this.data.current(function(e){var r=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,r)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},r.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},r.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},r.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},r=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var i in(null!=e.element&&r.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[i];t.setAttribute(i,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},r.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var r=n-1;0===e.length&&(r=0);var i=t.eq(r);i.trigger("mouseenter");var o=l.$results.offset().top,s=i.offset().top,a=l.$results.scrollTop()+(s-o);0===r?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var r=t.eq(n);r.trigger("mouseenter");var i=l.$results.offset().top+l.$results.outerHeight(!1),o=r.offset().top+r.outerHeight(!1),s=l.$results.scrollTop()+o-i;0===n?l.$results.scrollTop(0):i<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,r=0<e.deltaY&&t-e.deltaY<=0,i=e.deltaY<0&&n<=l.$results.height();r?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):i&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},r.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},r.prototype.destroy=function(){this.$results.remove()},r.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,r=e.offset().top,i=this.$results.scrollTop()+(r-n),o=r-n;i-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(i)}},r.prototype.template=function(e,t){var n=this.options.get("templateResult"),r=this.options.get("escapeMarkup"),i=n(e,t);null==i?t.style.display="none":"string"==typeof i?t.innerHTML=r(i):h(t).append(i)},r}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,r,i){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return r.Extend(o,r.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=r.GetData(this.$element[0],"old-tabindex")?this._tabindex=r.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,r=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===i.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",r),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&r.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,r){function i(){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},i.prototype.bind=function(t,e){var n=this;i.__super__.bind.apply(this,arguments);var r=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",r).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",r),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},i.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},i.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},i.prototype.selectionContainer=function(){return e("<span></span>")},i.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),r=this.display(t,n);n.empty().append(r);var i=t.title||t.text;i?n.attr("title",i):n.removeAttr("title")}else this.clear()},i}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(i,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var r=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){r.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!r.isDisabled()){var t=i(this).parent(),n=l.GetData(t[0],"data");r.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return i('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var r=e[n],i=this.selectionContainer(),o=this.display(r,i);i.append(o);var s=r.title||r.text;s&&i.attr("title",s),l.StoreData(i[0],"data",r),t.push(i)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var r=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(r)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(i,r,a){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){r._handleClear(e)}),t.on("keypress",function(e){r._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var r=a.GetData(n[0],"data"),i=this.$element.val();this.$element.val(this.placeholder.id);var o={data:r};if(this.trigger("clear",o),o.prevented)this.$element.val(i);else{for(var s=0;s<r.length;s++)if(o={data:r[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(i);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=r.DELETE&&t.which!=r.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),r=i('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(r[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(r)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(r,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=r('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),t.on("open",function(){r.$search.attr("aria-controls",i),r.$search.trigger("focus")}),t.on("close",function(){r.$search.val(""),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.trigger("focus")}),t.on("enable",function(){r.$search.prop("disabled",!1),r._transferTabIndex()}),t.on("disable",function(){r.$search.prop("disabled",!0)}),t.on("focus",function(e){r.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){r.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){r._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===r.$search.val()){var t=r.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");r.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){r.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?r.$selection.off("input.search input.searchcheck"):r.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)r.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&r.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var r=this,i=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,i)){t=t||{};var n=s.Event("select2:"+e,{params:t});r.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function r(e){this.dict=e||{}}return r.prototype.all=function(){return this.dict},r.prototype.get=function(e){return this.dict[e]},r.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},r._cache={},r.loadPath=function(e){if(!(e in r._cache)){var t=n(e);r._cache[e]=t}return new r(r._cache[e])},r}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(r){function n(e,t){n.__super__.constructor.call(this)}return r.Extend(n,r.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=r.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+r.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],r=this;this.$element.find(":selected").each(function(){var e=l(this),t=r.item(e);n.push(t)}),e(n)},n.prototype.select=function(i){var o=this;if(i.selected=!0,l(i.element).is("option"))return i.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(i=[i]).push.apply(i,e);for(var n=0;n<i.length;n++){var r=i[n].id;-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=i.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(i){var o=this;if(this.$element.prop("multiple")){if(i.selected=!1,l(i.element).is("option"))return i.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n].id;r!==i.id&&-1===l.inArray(r,t)&&t.push(r)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(r,e){var i=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(r,t);null!==n&&i.push(n)}}),e({results:i})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),r=this._normalizeItem(e);return r.element=t,a.StoreData(t,"data",r),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),r=[],i=0;i<n.length;i++){var o=l(n[i]),s=this.item(o);r.push(s)}t.children=r}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function r(e,t){this._dataToConvert=t.get("data")||[],r.__super__.constructor.call(this,e,t)}return f.Extend(r,e),r.prototype.bind=function(e,t){r.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},r.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),r.__super__.select.call(this,n)},r.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),r=n.map(function(){return t.item(g(this)).id}).get(),i=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,r)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}i.push(p)}}return i},r}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var r=o.ajax(e);return r.then(t),r.fail(n),r}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,r){var i=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=i.processResults(e,n);i.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),r(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||i.trigger("results:message",{message:"errorLoading"})});i._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var r=n.get("tags"),i=n.get("createTag");void 0!==i&&(this.createTag=i);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(r))for(var s=0;s<r.length;s++){var a=r[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var r=t.results,i=0;i<r.length;i++){var o=r[i],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=r,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(r,a)}t.results=r,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var r=n.get("tokenizer");void 0!==r&&(this.tokenizer=r),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var r=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t=r._normalizeItem(e);if(!r.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=r.option(t);n.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([n])}!function(e){r.trigger("select",{data:e})}(t)});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,r){for(var i=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,i)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(r(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(){r._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var r=this;this._checkIfMaximumSelected(function(){e.call(r,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var r=this;this.current(function(e){var t=null!=e?e.length:0;0<r.maximumSelectionLength&&t>=r.maximumSelectionLength?r.trigger("results:message",{message:"maximumSelected",args:{maximum:r.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var r=this,i=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){r.trigger("keypress",e),r._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){r.handleSearch(e)}),t.on("open",function(){r.$search.attr("tabindex",0),r.$search.attr("aria-controls",i),r.$search.trigger("focus"),window.setTimeout(function(){r.$search.trigger("focus")},0)}),t.on("close",function(){r.$search.attr("tabindex",-1),r.$search.removeAttr("aria-controls"),r.$search.removeAttr("aria-activedescendant"),r.$search.val(""),r.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||r.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(r.showSearch(e)?r.$searchContainer.removeClass("select2-search--hide"):r.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?r.$search.attr("aria-activedescendant",e.data._resultId):r.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,r){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,r)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),r=t.length-1;0<=r;r--){var i=t[r];this.placeholder.id===i.id&&n.splice(r,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,r){this.lastParams={},e.call(this,t,n,r),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("query",function(e){r.lastParams=e,r.loading=!0}),t.on("query:append",function(e){r.lastParams=e,r.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("open",function(){r._showDropdown(),r._attachPositioningHandler(t),r._bindContainerResultHandlers(t)}),t.on("close",function(){r._hideDropdown(),r._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,r="scroll.select2."+t.id,i="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(r,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(r+" "+i+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,r="resize.select2."+t.id,i="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+r+" "+i)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),r=null,i=this.$container.offset();i.bottom=i.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=i.top,o.bottom=i.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<i.top-s,u=l>i.bottom+s,d={left:i.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(r="below"),u||!c||t?!c&&u&&t&&(r="below"):r="above",("above"==r||t&&"below"!==r)&&(d.top=o.top-h.top-s),null!=r&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+r),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+r)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,r){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,r)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,r=0;r<t.length;r++){var i=t[r];i.children?n+=e(i.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("close",function(e){r._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var r=this.getHighlightedResults();if(!(r.length<1)){var i=o.GetData(r[0],"data");null!=i.element&&i.element.selected||null==i.element&&i.selected||this.trigger("select",{data:i})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var r=this;e.call(this,t,n),t.on("select",function(e){r._selectTriggered(e)}),t.on("unselect",function(e){r._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,$,b,w,A,x,D,S,E,C,O,T,q,L,I,j,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=b:null!=e.data?e.dataAdapter=$:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,w)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,I))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=E;else{var r=y.Decorate(E,C);e.dropdownAdapter=r}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,L)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var i=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,i)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var r=c.extend(!0,{},n),i=n.children.length-1;0<=i;i--)null==e(t,n.children[i])&&r.children.splice(i,1);return 0<r.children.length?r:e(t,r)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,r=this.defaults.language,i=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(i),this._resolveLanguage(n),this._resolveLanguage(r),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],r=0;r<t.length;r++)if(n.push(t[r]),"string"==typeof t[r]&&0<t[r].indexOf("-")){var i=t[r].split("-")[0];n.push(i)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,r=0;r<e.length;r++){var i=new s,o=e[r];if("string"==typeof o)try{i=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,i=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else i=c.isPlainObject(o)?new s(o):o;n.extend(i)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var r=y._convertData(n);c.extend(!0,this.defaults,r)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(r,d,i,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=i.applyFromElement(this.options,t)),this.options=i.apply(this.options),t&&t.is("input")){var n=r(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function r(e,t){return t.toUpperCase()}for(var i=0;i<e[0].attributes.length;i++){var o=e[0].attributes[i].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,r)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,r){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var i=this.render();this._placeContainer(i);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,i);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,i);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var r=this._resolveWidth(e,"style");return null!=r?r:this._resolveWidth(e,"element")}if("element"==t){var i=e.outerWidth(!1);return i<=0?"auto":i+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,r=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,r)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===r.ESC||t===r.TAB||t===r.UP&&e.altKey?(n.close(e),e.preventDefault()):t===r.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===r.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===r.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===r.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===r.ENTER||t===r.SPACE||t===r.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,r=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var i=0;i<t.addedNodes.length;i++){t.addedNodes[i].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(r._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),r=this;n&&this.dataAdapter.current(function(e){r.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,r={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in r){var i=r[e],o={prevented:!1,name:e,args:t};if(n.call(this,i,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("jquery-mousewheel",["jquery"],function(e){return e}),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(i,e,o,t,s){if(null==i.fn.select2){var a=["open","close","destroy"];i.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=i.extend(!0,{},t);new o(i(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,r=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,r)}),-1<i.inArray(t,a)?this:n}}return null==i.fn.select2.defaults&&(i.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return u.fn.select2.amd=e,t});;
/*! Sortable 1.14.0 - MIT | git://github.com/SortableJS/Sortable.git */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Sortable=e()}(this,function(){"use strict";function e(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function A(o){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?e(Object(i),!0).forEach(function(t){var e,n;e=o,t=i[n=t],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(i,t))})}return o}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,o=arguments[e];for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o=function(t,e){if(null==t)return{};for(var n,o={},i=Object.keys(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(t),r=0;r<i.length;r++)n=i[r],0<=e.indexOf(n)||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n]);return o}function r(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(n="Object"===n&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function t(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var y=t(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),w=t(/Edge/i),s=t(/firefox/i),u=t(/safari/i)&&!t(/chrome/i)&&!t(/android/i),n=t(/iP(ad|od|hone)/i),c=t(/chrome/i)&&t(/android/i),d={capture:!1,passive:!1};function h(t,e,n){t.addEventListener(e,n,!y&&d)}function f(t,e,n){t.removeEventListener(e,n,!y&&d)}function p(t,e){if(e&&(">"===e[0]&&(e=e.substring(1)),t))try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return}}function N(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"!==e[0]||t.parentNode===n)&&p(t,e)||o&&t===n)return t}while(t!==n&&(t=(i=t).host&&i!==document&&i.host.nodeType?i.host:i.parentNode))}var i;return null}var g,m=/\s+/g;function I(t,e,n){var o;t&&e&&(t.classList?t.classList[n?"add":"remove"](e):(o=(" "+t.className+" ").replace(m," ").replace(" "+e+" "," "),t.className=(o+(n?" "+e:"")).replace(m," ")))}function P(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];o[e=!(e in o||-1!==e.indexOf("webkit"))?"-webkit-"+e:e]=n+("string"==typeof n?"":"px")}}function v(t,e){var n="";if("string"==typeof t)n=t;else do{var o=P(t,"transform")}while(o&&"none"!==o&&(n=o+" "+n),!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function b(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function O(){var t=document.scrollingElement;return t||document.documentElement}function k(t,e,n,o,i){if(t.getBoundingClientRect||t===window){var r,a,l,s,c,u,d=t!==window&&t.parentNode&&t!==O()?(a=(r=t.getBoundingClientRect()).top,l=r.left,s=r.bottom,c=r.right,u=r.height,r.width):(l=a=0,s=window.innerHeight,c=window.innerWidth,u=window.innerHeight,window.innerWidth);if((e||n)&&t!==window&&(i=i||t.parentNode,!y))do{if(i&&i.getBoundingClientRect&&("none"!==P(i,"transform")||n&&"static"!==P(i,"position"))){var h=i.getBoundingClientRect();a-=h.top+parseInt(P(i,"border-top-width")),l-=h.left+parseInt(P(i,"border-left-width")),s=a+r.height,c=l+r.width;break}}while(i=i.parentNode);return o&&t!==window&&(o=(e=v(i||t))&&e.a,t=e&&e.d,e&&(s=(a/=t)+(u/=t),c=(l/=o)+(d/=o))),{top:a,left:l,bottom:s,right:c,width:d,height:u}}}function R(t,e,n){for(var o=M(t,!0),i=k(t)[e];o;){var r=k(o)[n];if(!("top"===n||"left"===n?r<=i:i<=r))return o;if(o===O())break;o=M(o,!1)}return!1}function X(t,e,n,o){for(var i=0,r=0,a=t.children;r<a.length;){if("none"!==a[r].style.display&&a[r]!==Bt.ghost&&(o||a[r]!==Bt.dragged)&&N(a[r],n.draggable,t,!1)){if(i===e)return a[r];i++}r++}return null}function Y(t,e){for(var n=t.lastElementChild;n&&(n===Bt.ghost||"none"===P(n,"display")||e&&!p(n,e));)n=n.previousElementSibling;return n||null}function B(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===Bt.clone||e&&!p(t,e)||n++;return n}function E(t){var e=0,n=0,o=O();if(t)do{var i=v(t),r=i.a,i=i.d}while(e+=t.scrollLeft*r,n+=t.scrollTop*i,t!==o&&(t=t.parentNode));return[e,n]}function M(t,e){if(!t||!t.getBoundingClientRect)return O();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=P(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return O();if(o||e)return n;o=!0}}}while(n=n.parentNode);return O()}function D(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function S(e,n){return function(){var t;g||(1===(t=arguments).length?e.call(this,t[0]):e.apply(this,t),g=setTimeout(function(){g=void 0},n))}}function F(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function _(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function C(t,e){P(t,"position","absolute"),P(t,"top",e.top),P(t,"left",e.left),P(t,"width",e.width),P(t,"height",e.height)}function T(t){P(t,"position",""),P(t,"top",""),P(t,"left",""),P(t,"width",""),P(t,"height","")}var j="Sortable"+(new Date).getTime();function x(){var e,o=[];return{captureAnimationState:function(){o=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(t){var e,n;"none"!==P(t,"display")&&t!==Bt.ghost&&(o.push({target:t,rect:k(t)}),e=A({},o[o.length-1].rect),!t.thisAnimationDuration||(n=v(t,!0))&&(e.top-=n.f,e.left-=n.e),t.fromRect=e)})},addAnimationState:function(t){o.push(t)},removeAnimationState:function(t){o.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(o,{target:t}),1)},animateAll:function(t){var c=this;if(!this.options.animation)return clearTimeout(e),void("function"==typeof t&&t());var u=!1,d=0;o.forEach(function(t){var e=0,n=t.target,o=n.fromRect,i=k(n),r=n.prevFromRect,a=n.prevToRect,l=t.rect,s=v(n,!0);s&&(i.top-=s.f,i.left-=s.e),n.toRect=i,n.thisAnimationDuration&&D(r,i)&&!D(o,i)&&(l.top-i.top)/(l.left-i.left)==(o.top-i.top)/(o.left-i.left)&&(t=l,s=r,r=a,a=c.options,e=Math.sqrt(Math.pow(s.top-t.top,2)+Math.pow(s.left-t.left,2))/Math.sqrt(Math.pow(s.top-r.top,2)+Math.pow(s.left-r.left,2))*a.animation),D(i,o)||(n.prevFromRect=o,n.prevToRect=i,e=e||c.options.animation,c.animate(n,l,i,e)),e&&(u=!0,d=Math.max(d,e),clearTimeout(n.animationResetTimer),n.animationResetTimer=setTimeout(function(){n.animationTime=0,n.prevFromRect=null,n.fromRect=null,n.prevToRect=null,n.thisAnimationDuration=null},e),n.thisAnimationDuration=e)}),clearTimeout(e),u?e=setTimeout(function(){"function"==typeof t&&t()},d):"function"==typeof t&&t(),o=[]},animate:function(t,e,n,o){var i,r;o&&(P(t,"transition",""),P(t,"transform",""),i=(r=v(this.el))&&r.a,r=r&&r.d,i=(e.left-n.left)/(i||1),r=(e.top-n.top)/(r||1),t.animatingX=!!i,t.animatingY=!!r,P(t,"transform","translate3d("+i+"px,"+r+"px,0)"),this.forRepaintDummy=t.offsetWidth,P(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),P(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){P(t,"transition",""),P(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o))}}}var H=[],L={initializeByDefault:!0},K={mount:function(e){for(var t in L)!L.hasOwnProperty(t)||t in e||(e[t]=L[t]);H.forEach(function(t){if(t.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),H.push(e)},pluginEvent:function(e,n,o){var t=this;this.eventCanceled=!1,o.cancel=function(){t.eventCanceled=!0};var i=e+"Global";H.forEach(function(t){n[t.pluginName]&&(n[t.pluginName][i]&&n[t.pluginName][i](A({sortable:n},o)),n.options[t.pluginName]&&n[t.pluginName][e]&&n[t.pluginName][e](A({sortable:n},o)))})},initializePlugins:function(n,o,i,t){for(var e in H.forEach(function(t){var e=t.pluginName;(n.options[e]||t.initializeByDefault)&&((t=new t(n,o,n.options)).sortable=n,t.options=n.options,n[e]=t,a(i,t.defaults))}),n.options){var r;n.options.hasOwnProperty(e)&&(void 0!==(r=this.modifyOption(n,e,n.options[e]))&&(n.options[e]=r))}},getEventProperties:function(e,n){var o={};return H.forEach(function(t){"function"==typeof t.eventProperties&&a(o,t.eventProperties.call(n[t.pluginName],e))}),o},modifyOption:function(e,n,o){var i;return H.forEach(function(t){e[t.pluginName]&&t.optionListeners&&"function"==typeof t.optionListeners[n]&&(i=t.optionListeners[n].call(e[t.pluginName],o))}),i}};function W(t){var e=t.sortable,n=t.rootEl,o=t.name,i=t.targetEl,r=t.cloneEl,a=t.toEl,l=t.fromEl,s=t.oldIndex,c=t.newIndex,u=t.oldDraggableIndex,d=t.newDraggableIndex,h=t.originalEvent,f=t.putSortable,p=t.extraEventProperties;if(e=e||n&&n[j]){var g,m=e.options,t="on"+o.charAt(0).toUpperCase()+o.substr(1);!window.CustomEvent||y||w?(g=document.createEvent("Event")).initEvent(o,!0,!0):g=new CustomEvent(o,{bubbles:!0,cancelable:!0}),g.to=a||n,g.from=l||n,g.item=i||n,g.clone=r,g.oldIndex=s,g.newIndex=c,g.oldDraggableIndex=u,g.newDraggableIndex=d,g.originalEvent=h,g.pullMode=f?f.lastPutMode:void 0;var v,b=A(A({},p),K.getEventProperties(o,e));for(v in b)g[v]=b[v];n&&n.dispatchEvent(g),m[t]&&m[t].call(e,g)}}function z(t,e){var n=(o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).evt,o=i(o,G);K.pluginEvent.bind(Bt)(t,e,A({dragEl:q,parentEl:V,ghostEl:Z,rootEl:$,nextEl:Q,lastDownEl:J,cloneEl:tt,cloneHidden:et,dragStarted:pt,putSortable:lt,activeSortable:Bt.active,originalEvent:n,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt,hideGhostForTarget:kt,unhideGhostForTarget:Rt,cloneNowHidden:function(){et=!0},cloneNowShown:function(){et=!1},dispatchSortableEvent:function(t){U({sortable:e,name:t,originalEvent:n})}},o))}var G=["evt"];function U(t){W(A({putSortable:lt,cloneEl:tt,targetEl:q,rootEl:$,oldIndex:nt,oldDraggableIndex:it,newIndex:ot,newDraggableIndex:rt},t))}var q,V,Z,$,Q,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht,ft,pt,gt,mt,vt,bt,yt=!1,wt=!1,Et=[],Dt=!1,St=!1,_t=[],Ct=!1,Tt=[],xt="undefined"!=typeof document,Ot=n,Mt=w||y?"cssFloat":"float",At=xt&&!c&&!n&&"draggable"in document.createElement("div"),Nt=function(){if(xt){if(y)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),It=function(t,e){var n=P(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=X(t,0,e),r=X(t,1,e),a=i&&P(i),l=r&&P(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+k(i).width,t=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+k(r).width;if("flex"===n.display)return"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal";if("grid"===n.display)return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(i&&a.float&&"none"!==a.float){e="left"===a.float?"left":"right";return!r||"both"!==l.clear&&l.clear!==e?"horizontal":"vertical"}return i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||o<=s&&"none"===n[Mt]||r&&"none"===n[Mt]&&o<s+t)?"vertical":"horizontal"},Pt=function(t){function l(r,a){return function(t,e,n,o){var i=t.options.group.name&&e.options.group.name&&t.options.group.name===e.options.group.name;if(null==r&&(a||i))return!0;if(null==r||!1===r)return!1;if(a&&"clone"===r)return r;if("function"==typeof r)return l(r(t,e,n,o),a)(t,e,n,o);e=(a?t:e).options.group.name;return!0===r||"string"==typeof r&&r===e||r.join&&-1<r.indexOf(e)}}var e={},n=t.group;n&&"object"==o(n)||(n={name:n}),e.name=n.name,e.checkPull=l(n.pull,!0),e.checkPut=l(n.put),e.revertClone=n.revertClone,t.group=e},kt=function(){!Nt&&Z&&P(Z,"display","none")},Rt=function(){!Nt&&Z&&P(Z,"display","")};xt&&document.addEventListener("click",function(t){if(wt)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),wt=!1},!0);function Xt(t){if(q){t=t.touches?t.touches[0]:t;var e=(i=t.clientX,r=t.clientY,Et.some(function(t){var e=t[j].options.emptyInsertThreshold;if(e&&!Y(t)){var n=k(t),o=i>=n.left-e&&i<=n.right+e,e=r>=n.top-e&&r<=n.bottom+e;return o&&e?a=t:void 0}}),a);if(e){var n,o={};for(n in t)t.hasOwnProperty(n)&&(o[n]=t[n]);o.target=o.rootEl=e,o.preventDefault=void 0,o.stopPropagation=void 0,e[j]._onDragOver(o)}}var i,r,a}function Yt(t){q&&q.parentNode[j]._isOutsideThisEl(t.target)}function Bt(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));this.el=t,this.options=e=a({},e),t[j]=this;var n,o,i={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(t.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return It(t,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==Bt.supportPointer&&"PointerEvent"in window&&!u,emptyInsertThreshold:5};for(n in K.initializePlugins(this,t,i),i)n in e||(e[n]=i[n]);for(o in Pt(e),this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&At,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?h(t,"pointerdown",this._onTapStart):(h(t,"mousedown",this._onTapStart),h(t,"touchstart",this._onTapStart)),this.nativeDraggable&&(h(t,"dragover",this),h(t,"dragenter",this)),Et.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),a(this,x())}function Ft(t,e,n,o,i,r,a,l){var s,c,u=t[j],d=u.options.onMove;return!window.CustomEvent||y||w?(s=document.createEvent("Event")).initEvent("move",!0,!0):s=new CustomEvent("move",{bubbles:!0,cancelable:!0}),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||k(e),s.willInsertAfter=l,s.originalEvent=a,t.dispatchEvent(s),c=d?d.call(u,s,a):c}function jt(t){t.draggable=!1}function Ht(){Ct=!1}function Lt(t){return setTimeout(t,0)}function Kt(t){return clearTimeout(t)}Bt.prototype={constructor:Bt,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(gt=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,q):this.options.direction},_onTapStart:function(e){if(e.cancelable){var n=this,o=this.el,t=this.options,i=t.preventOnFilter,r=e.type,a=e.touches&&e.touches[0]||e.pointerType&&"touch"===e.pointerType&&e,l=(a||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||l,c=t.filter;if(!function(t){Tt.length=0;var e=t.getElementsByTagName("input"),n=e.length;for(;n--;){var o=e[n];o.checked&&Tt.push(o)}}(o),!q&&!(/mousedown|pointerdown/.test(r)&&0!==e.button||t.disabled)&&!s.isContentEditable&&(this.nativeDraggable||!u||!l||"SELECT"!==l.tagName.toUpperCase())&&!((l=N(l,t.draggable,o,!1))&&l.animated||J===l)){if(nt=B(l),it=B(l,t.draggable),"function"==typeof c){if(c.call(this,e,l,this))return U({sortable:n,rootEl:s,name:"filter",targetEl:l,toEl:o,fromEl:o}),z("filter",n,{evt:e}),void(i&&e.cancelable&&e.preventDefault())}else if(c=c&&c.split(",").some(function(t){if(t=N(s,t.trim(),o,!1))return U({sortable:n,rootEl:t,name:"filter",targetEl:l,fromEl:o,toEl:o}),z("filter",n,{evt:e}),!0}))return void(i&&e.cancelable&&e.preventDefault());t.handle&&!N(s,t.handle,o,!1)||this._prepareDragStart(e,a,l)}}},_prepareDragStart:function(t,e,n){var o,i=this,r=i.el,a=i.options,l=r.ownerDocument;n&&!q&&n.parentNode===r&&(o=k(n),$=r,V=(q=n).parentNode,Q=q.nextSibling,J=n,at=a.group,st={target:Bt.dragged=q,clientX:(e||t).clientX,clientY:(e||t).clientY},ht=st.clientX-o.left,ft=st.clientY-o.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,q.style["will-change"]="all",o=function(){z("delayEnded",i,{evt:t}),Bt.eventCanceled?i._onDrop():(i._disableDelayedDragEvents(),!s&&i.nativeDraggable&&(q.draggable=!0),i._triggerDragStart(t,e),U({sortable:i,name:"choose",originalEvent:t}),I(q,a.chosenClass,!0))},a.ignore.split(",").forEach(function(t){b(q,t.trim(),jt)}),h(l,"dragover",Xt),h(l,"mousemove",Xt),h(l,"touchmove",Xt),h(l,"mouseup",i._onDrop),h(l,"touchend",i._onDrop),h(l,"touchcancel",i._onDrop),s&&this.nativeDraggable&&(this.options.touchStartThreshold=4,q.draggable=!0),z("delayStart",this,{evt:t}),!a.delay||a.delayOnTouchOnly&&!e||this.nativeDraggable&&(w||y)?o():Bt.eventCanceled?this._onDrop():(h(l,"mouseup",i._disableDelayedDrag),h(l,"touchend",i._disableDelayedDrag),h(l,"touchcancel",i._disableDelayedDrag),h(l,"mousemove",i._delayedDragTouchMoveHandler),h(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&h(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(o,a.delay)))},_delayedDragTouchMoveHandler:function(t){t=t.touches?t.touches[0]:t;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){q&&jt(q),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._disableDelayedDrag),f(t,"touchend",this._disableDelayedDrag),f(t,"touchcancel",this._disableDelayedDrag),f(t,"mousemove",this._delayedDragTouchMoveHandler),f(t,"touchmove",this._delayedDragTouchMoveHandler),f(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?this.options.supportPointer?h(document,"pointermove",this._onTouchMove):h(document,e?"touchmove":"mousemove",this._onTouchMove):(h(q,"dragend",this),h($,"dragstart",this._onDragStart));try{document.selection?Lt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){var n;yt=!1,$&&q?(z("dragStarted",this,{evt:e}),this.nativeDraggable&&h(document,"dragover",Yt),n=this.options,t||I(q,n.dragClass,!1),I(q,n.ghostClass,!0),Bt.active=this,t&&this._appendGhost(),U({sortable:this,name:"start",originalEvent:e})):this._nulling()},_emulateDragOver:function(){if(ct){this._lastX=ct.clientX,this._lastY=ct.clientY,kt();for(var t=document.elementFromPoint(ct.clientX,ct.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(ct.clientX,ct.clientY))!==e;)e=t;if(q.parentNode[j]._isOutsideThisEl(t),e)do{if(e[j])if(e[j]._onDragOver({clientX:ct.clientX,clientY:ct.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break}while(e=(t=e).parentNode);Rt()}},_onTouchMove:function(t){if(st){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=Z&&v(Z,!0),a=Z&&r&&r.a,l=Z&&r&&r.d,e=Ot&&bt&&E(bt),a=(i.clientX-st.clientX+o.x)/(a||1)+(e?e[0]-_t[0]:0)/(a||1),l=(i.clientY-st.clientY+o.y)/(l||1)+(e?e[1]-_t[1]:0)/(l||1);if(!Bt.active&&!yt){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}Z&&(r?(r.e+=a-(ut||0),r.f+=l-(dt||0)):r={a:1,b:0,c:0,d:1,e:a,f:l},r="matrix(".concat(r.a,",").concat(r.b,",").concat(r.c,",").concat(r.d,",").concat(r.e,",").concat(r.f,")"),P(Z,"webkitTransform",r),P(Z,"mozTransform",r),P(Z,"msTransform",r),P(Z,"transform",r),ut=a,dt=l,ct=i),t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!Z){var t=this.options.fallbackOnBody?document.body:$,e=k(q,!0,Ot,!0,t),n=this.options;if(Ot){for(bt=t;"static"===P(bt,"position")&&"none"===P(bt,"transform")&&bt!==document;)bt=bt.parentNode;bt!==document.body&&bt!==document.documentElement?(bt===document&&(bt=O()),e.top+=bt.scrollTop,e.left+=bt.scrollLeft):bt=O(),_t=E(bt)}I(Z=q.cloneNode(!0),n.ghostClass,!1),I(Z,n.fallbackClass,!0),I(Z,n.dragClass,!0),P(Z,"transition",""),P(Z,"transform",""),P(Z,"box-sizing","border-box"),P(Z,"margin",0),P(Z,"top",e.top),P(Z,"left",e.left),P(Z,"width",e.width),P(Z,"height",e.height),P(Z,"opacity","0.8"),P(Z,"position",Ot?"absolute":"fixed"),P(Z,"zIndex","100000"),P(Z,"pointerEvents","none"),Bt.ghost=Z,t.appendChild(Z),P(Z,"transform-origin",ht/parseInt(Z.style.width)*100+"% "+ft/parseInt(Z.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;z("dragStart",this,{evt:t}),Bt.eventCanceled?this._onDrop():(z("setupClone",this),Bt.eventCanceled||((tt=_(q)).draggable=!1,tt.style["will-change"]="",this._hideClone(),I(tt,this.options.chosenClass,!1),Bt.clone=tt),n.cloneId=Lt(function(){z("clone",n),Bt.eventCanceled||(n.options.removeCloneOnHide||$.insertBefore(tt,q),n._hideClone(),U({sortable:n,name:"clone"}))}),e||I(q,i.dragClass,!0),e?(wt=!0,n._loopId=setInterval(n._emulateDragOver,50)):(f(document,"mouseup",n._onDrop),f(document,"touchend",n._onDrop),f(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,q)),h(document,"drop",n),P(q,"transform","translateZ(0)")),yt=!0,n._dragStartId=Lt(n._dragStarted.bind(n,e,t)),h(document,"selectstart",n),pt=!0,u&&P(document.body,"user-select","none"))},_onDragOver:function(n){var o,i,r,t,a=this.el,l=n.target,e=this.options,s=e.group,c=Bt.active,u=at===s,d=e.sort,h=lt||c,f=this,p=!1;if(!Ct){if(void 0!==n.preventDefault&&n.cancelable&&n.preventDefault(),l=N(l,e.draggable,a,!0),T("dragOver"),Bt.eventCanceled)return p;if(q.contains(n.target)||l.animated&&l.animatingX&&l.animatingY||f._ignoreWhileAnimating===l)return O(!1);if(wt=!1,c&&!e.disabled&&(u?d||(i=V!==$):lt===this||(this.lastPutMode=at.checkPull(this,c,q,n))&&s.checkPut(this,c,q,n))){if(r="vertical"===this._getDirection(n,l),o=k(q),T("dragOverValid"),Bt.eventCanceled)return p;if(i)return V=$,x(),this._hideClone(),T("revert"),Bt.eventCanceled||(Q?$.insertBefore(q,Q):$.appendChild(q)),O(!0);var g=Y(a,e.draggable);if(!g||function(t,e,n){n=k(Y(n.el,n.options.draggable));return e?t.clientX>n.right+10||t.clientX<=n.right&&t.clientY>n.bottom&&t.clientX>=n.left:t.clientX>n.right&&t.clientY>n.top||t.clientX<=n.right&&t.clientY>n.bottom+10}(n,r,this)&&!g.animated){if(g===q)return O(!1);if((l=g&&a===n.target?g:l)&&(w=k(l)),!1!==Ft($,a,q,o,l,w,n,!!l))return x(),a.appendChild(q),V=a,M(),O(!0)}else if(g&&function(t,e,n){n=k(X(n.el,0,n.options,!0));return e?t.clientX<n.left-10||t.clientY<n.top&&t.clientX<n.right:t.clientY<n.top-10||t.clientY<n.bottom&&t.clientX<n.left}(n,r,this)){var m=X(a,0,e,!0);if(m===q)return O(!1);if(w=k(l=m),!1!==Ft($,a,q,o,l,w,n,!1))return x(),a.insertBefore(q,m),V=a,M(),O(!0)}else if(l.parentNode===a){var v,b,y,w=k(l),E=q.parentNode!==a,D=(D=q.animated&&q.toRect||o,C=l.animated&&l.toRect||w,S=(t=r)?D.left:D.top,s=t?D.right:D.bottom,g=t?D.width:D.height,m=t?C.left:C.top,D=t?C.right:C.bottom,C=t?C.width:C.height,!(S===m||s===D||S+g/2===m+C/2)),S=r?"top":"left",g=R(l,"top","top")||R(q,"top","top"),m=g?g.scrollTop:void 0;if(gt!==l&&(b=w[S],Dt=!1,St=!D&&e.invertSwap||E),0!==(v=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,t=o?n.top:n.left,o=o?n.bottom:n.right,n=!1;if(!a)if(l&&vt<c*i){if(Dt=!Dt&&(1===mt?t+c*r/2<s:s<o-c*r/2)?!0:Dt)n=!0;else if(1===mt?s<t+vt:o-vt<s)return-mt}else if(t+c*(1-i)/2<s&&s<o-c*(1-i)/2)return function(t){return B(q)<B(t)?1:-1}(e);if((n=n||a)&&(s<t+c*r/2||o-c*r/2<s))return t+c/2<s?1:-1;return 0}(n,l,w,r,D?1:e.swapThreshold,null==e.invertedSwapThreshold?e.swapThreshold:e.invertedSwapThreshold,St,gt===l)))for(var _=B(q);(y=V.children[_-=v])&&("none"===P(y,"display")||y===Z););if(0===v||y===l)return O(!1);mt=v;var C=(gt=l).nextElementSibling,E=!1,D=Ft($,a,q,o,l,w,n,E=1===v);if(!1!==D)return 1!==D&&-1!==D||(E=1===D),Ct=!0,setTimeout(Ht,30),x(),E&&!C?a.appendChild(q):l.parentNode.insertBefore(q,E?C:l),g&&F(g,0,m-g.scrollTop),V=q.parentNode,void 0===b||St||(vt=Math.abs(b-k(l)[S])),M(),O(!0)}if(a.contains(q))return O(!1)}return!1}function T(t,e){z(t,f,A({evt:n,isOwner:u,axis:r?"vertical":"horizontal",revert:i,dragRect:o,targetRect:w,canSort:d,fromSortable:h,target:l,completed:O,onMove:function(t,e){return Ft($,a,q,o,t,k(t),n,e)},changed:M},e))}function x(){T("dragOverAnimationCapture"),f.captureAnimationState(),f!==h&&h.captureAnimationState()}function O(t){return T("dragOverCompleted",{insertion:t}),t&&(u?c._hideClone():c._showClone(f),f!==h&&(I(q,(lt||c).options.ghostClass,!1),I(q,e.ghostClass,!0)),lt!==f&&f!==Bt.active?lt=f:f===Bt.active&&lt&&(lt=null),h===f&&(f._ignoreWhileAnimating=l),f.animateAll(function(){T("dragOverAnimationComplete"),f._ignoreWhileAnimating=null}),f!==h&&(h.animateAll(),h._ignoreWhileAnimating=null)),(l===q&&!q.animated||l===a&&!l.animated)&&(gt=null),e.dragoverBubble||n.rootEl||l===document||(q.parentNode[j]._isOutsideThisEl(n.target),t||Xt(n)),!e.dragoverBubble&&n.stopPropagation&&n.stopPropagation(),p=!0}function M(){ot=B(q),rt=B(q,e.draggable),U({sortable:f,name:"change",toEl:a,newIndex:ot,newDraggableIndex:rt,originalEvent:n})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){f(document,"mousemove",this._onTouchMove),f(document,"touchmove",this._onTouchMove),f(document,"pointermove",this._onTouchMove),f(document,"dragover",Xt),f(document,"mousemove",Xt),f(document,"touchmove",Xt)},_offUpEvents:function(){var t=this.el.ownerDocument;f(t,"mouseup",this._onDrop),f(t,"touchend",this._onDrop),f(t,"pointerup",this._onDrop),f(t,"touchcancel",this._onDrop),f(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;ot=B(q),rt=B(q,n.draggable),z("drop",this,{evt:t}),V=q&&q.parentNode,ot=B(q),rt=B(q,n.draggable),Bt.eventCanceled||(Dt=St=yt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Kt(this.cloneId),Kt(this._dragStartId),this.nativeDraggable&&(f(document,"drop",this),f(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),u&&P(document.body,"user-select",""),P(q,"transform",""),t&&(pt&&(t.cancelable&&t.preventDefault(),n.dropBubble||t.stopPropagation()),Z&&Z.parentNode&&Z.parentNode.removeChild(Z),($===V||lt&&"clone"!==lt.lastPutMode)&&tt&&tt.parentNode&&tt.parentNode.removeChild(tt),q&&(this.nativeDraggable&&f(q,"dragend",this),jt(q),q.style["will-change"]="",pt&&!yt&&I(q,(lt||this).options.ghostClass,!1),I(q,this.options.chosenClass,!1),U({sortable:this,name:"unchoose",toEl:V,newIndex:null,newDraggableIndex:null,originalEvent:t}),$!==V?(0<=ot&&(U({rootEl:V,name:"add",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"remove",toEl:V,originalEvent:t}),U({rootEl:V,name:"sort",toEl:V,fromEl:$,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),lt&&lt.save()):ot!==nt&&0<=ot&&(U({sortable:this,name:"update",toEl:V,originalEvent:t}),U({sortable:this,name:"sort",toEl:V,originalEvent:t})),Bt.active&&(null!=ot&&-1!==ot||(ot=nt,rt=it),U({sortable:this,name:"end",toEl:V,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){z("nulling",this),$=q=V=Z=Q=tt=J=et=st=ct=pt=ot=rt=nt=it=gt=mt=lt=at=Bt.dragged=Bt.ghost=Bt.clone=Bt.active=null,Tt.forEach(function(t){t.checked=!0}),Tt.length=ut=dt=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":q&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move");t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)N(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||function(t){var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;for(;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t,e){var n={},o=this.el;this.toArray().forEach(function(t,e){e=o.children[e];N(e,this.options.draggable,o,!1)&&(n[t]=e)},this),e&&this.captureAnimationState(),t.forEach(function(t){n[t]&&(o.removeChild(n[t]),o.appendChild(n[t]))}),e&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return N(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=K.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Pt(n)},destroy:function(){z("destroy",this);var t=this.el;t[j]=null,f(t,"mousedown",this._onTapStart),f(t,"touchstart",this._onTapStart),f(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(f(t,"dragover",this),f(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Et.splice(Et.indexOf(this.el),1),this.el=t=null},_hideClone:function(){et||(z("hideClone",this),Bt.eventCanceled||(P(tt,"display","none"),this.options.removeCloneOnHide&&tt.parentNode&&tt.parentNode.removeChild(tt),et=!0))},_showClone:function(t){"clone"===t.lastPutMode?et&&(z("showClone",this),Bt.eventCanceled||(q.parentNode!=$||this.options.group.revertClone?Q?$.insertBefore(tt,Q):$.appendChild(tt):$.insertBefore(tt,q),this.options.group.revertClone&&this.animate(q,tt),P(tt,"display",""),et=!1)):this._hideClone()}},xt&&h(document,"touchmove",function(t){(Bt.active||yt)&&t.cancelable&&t.preventDefault()}),Bt.utils={on:h,off:f,css:P,find:b,is:function(t,e){return!!N(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:S,closest:N,toggleClass:I,clone:_,index:B,nextTick:Lt,cancelNextTick:Kt,detectDirection:It,getChild:X},Bt.get=function(t){return t[j]},Bt.mount=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];(e=e[0].constructor===Array?e[0]:e).forEach(function(t){if(!t.prototype||!t.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));t.utils&&(Bt.utils=A(A({},Bt.utils),t.utils)),K.mount(t)})},Bt.create=function(t,e){return new Bt(t,e)};var Wt,zt,Gt,Ut,qt,Vt,Zt=[],$t=!(Bt.version="1.14.0");function Qt(){Zt.forEach(function(t){clearInterval(t.pid)}),Zt=[]}function Jt(){clearInterval(Vt)}var te,ee=S(function(n,t,e,o){if(t.scroll){var i,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,l=t.scrollSensitivity,s=t.scrollSpeed,c=O(),u=!1;zt!==e&&(zt=e,Qt(),Wt=t.scroll,i=t.scrollFn,!0===Wt&&(Wt=M(e,!0)));var d=0,h=Wt;do{var f=h,p=k(f),g=p.top,m=p.bottom,v=p.left,b=p.right,y=p.width,w=p.height,E=void 0,D=void 0,S=f.scrollWidth,_=f.scrollHeight,C=P(f),T=f.scrollLeft,p=f.scrollTop,D=f===c?(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX||"visible"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY||"visible"===C.overflowY)):(E=y<S&&("auto"===C.overflowX||"scroll"===C.overflowX),w<_&&("auto"===C.overflowY||"scroll"===C.overflowY)),T=E&&(Math.abs(b-r)<=l&&T+y<S)-(Math.abs(v-r)<=l&&!!T),p=D&&(Math.abs(m-a)<=l&&p+w<_)-(Math.abs(g-a)<=l&&!!p);if(!Zt[d])for(var x=0;x<=d;x++)Zt[x]||(Zt[x]={});Zt[d].vx==T&&Zt[d].vy==p&&Zt[d].el===f||(Zt[d].el=f,Zt[d].vx=T,Zt[d].vy=p,clearInterval(Zt[d].pid),0==T&&0==p||(u=!0,Zt[d].pid=setInterval(function(){o&&0===this.layer&&Bt.active._onTouchMove(qt);var t=Zt[this.layer].vy?Zt[this.layer].vy*s:0,e=Zt[this.layer].vx?Zt[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(Bt.dragged.parentNode[j],e,t,n,qt,Zt[this.layer].el)||F(Zt[this.layer].el,e,t)}.bind({layer:d}),24))),d++}while(t.bubbleScroll&&h!==c&&(h=M(h,!1)));$t=u}},30),n=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.activeSortable,r=t.dispatchSortableEvent,a=t.hideGhostForTarget,t=t.unhideGhostForTarget;e&&(i=n||i,a(),e=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,e=document.elementFromPoint(e.clientX,e.clientY),t(),i&&!i.el.contains(e)&&(r("spill"),this.onSpill({dragEl:o,putSortable:n})))};function ne(){}function oe(){}ne.prototype={startIndex:null,dragStart:function(t){t=t.oldDraggableIndex;this.startIndex=t},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();t=X(this.sortable.el,this.startIndex,this.options);t?this.sortable.el.insertBefore(e,t):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:n},a(ne,{pluginName:"revertOnSpill"}),oe.prototype={onSpill:function(t){var e=t.dragEl,t=t.putSortable||this.sortable;t.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),t.animateAll()},drop:n},a(oe,{pluginName:"removeOnSpill"});var ie,re,ae,le,se,ce=[],ue=[],de=!1,he=!1,fe=!1;function pe(n,o){ue.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)})}function ge(){ce.forEach(function(t){t!==ae&&t.parentNode&&t.parentNode.removeChild(t)})}return Bt.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){t=t.originalEvent;this.sortable.nativeDraggable?h(document,"dragover",this._handleAutoScroll):this.options.supportPointer?h(document,"pointermove",this._handleFallbackAutoScroll):t.touches?h(document,"touchmove",this._handleFallbackAutoScroll):h(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){t=t.originalEvent;this.options.dragOverBubble||t.rootEl||this._handleAutoScroll(t)},drop:function(){this.sortable.nativeDraggable?f(document,"dragover",this._handleAutoScroll):(f(document,"pointermove",this._handleFallbackAutoScroll),f(document,"touchmove",this._handleFallbackAutoScroll),f(document,"mousemove",this._handleFallbackAutoScroll)),Jt(),Qt(),clearTimeout(g),g=void 0},nulling:function(){qt=zt=Wt=$t=Vt=Gt=Ut=null,Zt.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(e,n){var o,i=this,r=(e.touches?e.touches[0]:e).clientX,a=(e.touches?e.touches[0]:e).clientY,t=document.elementFromPoint(r,a);qt=e,n||this.options.forceAutoScrollFallback||w||y||u?(ee(e,this.options,t,n),o=M(t,!0),!$t||Vt&&r===Gt&&a===Ut||(Vt&&Jt(),Vt=setInterval(function(){var t=M(document.elementFromPoint(r,a),!0);t!==o&&(o=t,Qt()),ee(e,i.options,t,n)},10),Gt=r,Ut=a)):this.options.bubbleScroll&&M(t,!0)!==O()?ee(e,this.options,M(t,!1),!1):Qt()}},a(t,{pluginName:"scroll",initializeByDefault:!0})}),Bt.mount(oe,ne),Bt.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){t=t.dragEl;te=t},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.onMove,i=t.activeSortable,r=t.changed,a=t.cancel;i.options.swap&&(t=this.sortable.el,i=this.options,n&&n!==t&&(t=te,te=!1!==o(n)?(I(n,i.swapClass,!0),n):null,t&&t!==te&&I(t,i.swapClass,!1)),r(),e(!0),a())},drop:function(t){var e,n,o=t.activeSortable,i=t.putSortable,r=t.dragEl,a=i||this.sortable,l=this.options;te&&I(te,l.swapClass,!1),te&&(l.swap||i&&i.options.swap)&&r!==te&&(a.captureAnimationState(),a!==o&&o.captureAnimationState(),n=te,t=(e=r).parentNode,l=n.parentNode,t&&l&&!t.isEqualNode(n)&&!l.isEqualNode(e)&&(i=B(e),r=B(n),t.isEqualNode(l)&&i<r&&r++,t.insertBefore(n,t.children[i]),l.insertBefore(e,l.children[r])),a.animateAll(),a!==o&&o.animateAll())},nulling:function(){te=null}},a(t,{pluginName:"swap",eventProperties:function(){return{swapItem:te}}})}),Bt.mount(new function(){function t(o){for(var t in this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this));o.options.supportPointer?h(document,"pointerup",this._deselectMultiDrag):(h(document,"mouseup",this._deselectMultiDrag),h(document,"touchend",this._deselectMultiDrag)),h(document,"keydown",this._checkKeyDown),h(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(t,e){var n="";ce.length&&re===o?ce.forEach(function(t,e){n+=(e?", ":"")+t.textContent}):n=e.textContent,t.setData("Text",n)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){t=t.dragEl;ae=t},delayEnded:function(){this.isMultiDrag=~ce.indexOf(ae)},setupClone:function(t){var e=t.sortable,t=t.cancel;if(this.isMultiDrag){for(var n=0;n<ce.length;n++)ue.push(_(ce[n])),ue[n].sortableIndex=ce[n].sortableIndex,ue[n].draggable=!1,ue[n].style["will-change"]="",I(ue[n],this.options.selectedClass,!1),ce[n]===ae&&I(ue[n],this.options.chosenClass,!1);e._hideClone(),t()}},clone:function(t){var e=t.sortable,n=t.rootEl,o=t.dispatchSortableEvent,t=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||ce.length&&re===e&&(pe(!0,n),o("clone"),t()))},showClone:function(t){var e=t.cloneNowShown,n=t.rootEl,t=t.cancel;this.isMultiDrag&&(pe(!1,n),ue.forEach(function(t){P(t,"display","")}),e(),se=!1,t())},hideClone:function(t){var e=this,n=(t.sortable,t.cloneNowHidden),t=t.cancel;this.isMultiDrag&&(ue.forEach(function(t){P(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),se=!0,t())},dragStartGlobal:function(t){t.sortable;!this.isMultiDrag&&re&&re.multiDrag._deselectMultiDrag(),ce.forEach(function(t){t.sortableIndex=B(t)}),ce=ce.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),fe=!0},dragStarted:function(t){var e,n=this,t=t.sortable;this.isMultiDrag&&(this.options.sort&&(t.captureAnimationState(),this.options.animation&&(ce.forEach(function(t){t!==ae&&P(t,"position","absolute")}),e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&C(t,e)}),de=he=!0)),t.animateAll(function(){de=he=!1,n.options.animation&&ce.forEach(function(t){T(t)}),n.options.sort&&ge()}))},dragOver:function(t){var e=t.target,n=t.completed,t=t.cancel;he&&~ce.indexOf(e)&&(n(!1),t())},revert:function(t){var n,o,e=t.fromSortable,i=t.rootEl,r=t.sortable,a=t.dragRect;1<ce.length&&(ce.forEach(function(t){r.addAnimationState({target:t,rect:he?k(t):a}),T(t),t.fromRect=a,e.removeAnimationState(t)}),he=!1,n=!this.options.removeCloneOnHide,o=i,ce.forEach(function(t,e){e=o.children[t.sortableIndex+(n?Number(e):0)];e?o.insertBefore(t,e):o.appendChild(t)}))},dragOverCompleted:function(t){var e,n=t.sortable,o=t.isOwner,i=t.insertion,r=t.activeSortable,a=t.parentEl,l=t.putSortable,t=this.options;i&&(o&&r._hideClone(),de=!1,t.animation&&1<ce.length&&(he||!o&&!r.options.sort&&!l)&&(e=k(ae,!1,!0,!0),ce.forEach(function(t){t!==ae&&(C(t,e),a.appendChild(t))}),he=!0),o||(he||ge(),1<ce.length?(o=se,r._showClone(n),r.options.animation&&!se&&o&&ue.forEach(function(t){r.addAnimationState({target:t,rect:le}),t.fromRect=le,t.thisAnimationDuration=null})):r._showClone(n)))},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,t=t.activeSortable;ce.forEach(function(t){t.thisAnimationDuration=null}),t.options.animation&&!n&&t.multiDrag.isMultiDrag&&(le=a({},e),e=v(ae,!0),le.top-=e.f,le.left-=e.e)},dragOverAnimationComplete:function(){he&&(he=!1,ge())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c,u,d,h=this.options,f=o.children;if(!fe)if(h.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),I(ae,h.selectedClass,!~ce.indexOf(ae)),~ce.indexOf(ae))ce.splice(ce.indexOf(ae),1),ie=null,W({sortable:i,rootEl:n,name:"deselect",targetEl:ae,originalEvt:e});else{if(ce.push(ae),W({sortable:i,rootEl:n,name:"select",targetEl:ae,originalEvt:e}),e.shiftKey&&ie&&i.el.contains(ie)){var p=B(ie),t=B(ae);if(~p&&~t&&p!==t)for(var g,m=p<t?(g=p,t):(g=t,p+1);g<m;g++)~ce.indexOf(f[g])||(I(f[g],h.selectedClass,!0),ce.push(f[g]),W({sortable:i,rootEl:n,name:"select",targetEl:f[g],originalEvt:e}))}else ie=ae;re=s}fe&&this.isMultiDrag&&(he=!1,(o[j].options.sort||o!==n)&&1<ce.length&&(c=k(ae),u=B(ae,":not(."+this.options.selectedClass+")"),!de&&h.animation&&(ae.thisAnimationDuration=null),s.captureAnimationState(),de||(h.animation&&(ae.fromRect=c,ce.forEach(function(t){var e;t.thisAnimationDuration=null,t!==ae&&(e=he?k(t):c,t.fromRect=e,s.addAnimationState({target:t,rect:e}))})),ge(),ce.forEach(function(t){f[u]?o.insertBefore(t,f[u]):o.appendChild(t),u++}),a===B(ae)&&(d=!1,ce.forEach(function(t){t.sortableIndex!==B(t)&&(d=!0)}),d&&r("update"))),ce.forEach(function(t){T(t)}),s.animateAll()),re=s),(n===o||l&&"clone"!==l.lastPutMode)&&ue.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=fe=!1,ue.length=0},destroyGlobal:function(){this._deselectMultiDrag(),f(document,"pointerup",this._deselectMultiDrag),f(document,"mouseup",this._deselectMultiDrag),f(document,"touchend",this._deselectMultiDrag),f(document,"keydown",this._checkKeyDown),f(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==fe&&fe||re!==this.sortable||t&&N(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;ce.length;){var e=ce[0];I(e,this.options.selectedClass,!1),ce.shift(),W({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},a(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[j];e&&e.options.multiDrag&&!~ce.indexOf(t)&&(re&&re!==e&&(re.multiDrag._deselectMultiDrag(),re=e),I(t,e.options.selectedClass,!0),ce.push(t))},deselect:function(t){var e=t.parentNode[j],n=ce.indexOf(t);e&&e.options.multiDrag&&~n&&(I(t,e.options.selectedClass,!1),ce.splice(n,1))}},eventProperties:function(){var n=this,o=[],i=[];return ce.forEach(function(t){var e;o.push({multiDragElement:t,index:t.sortableIndex}),e=he&&t!==ae?-1:he?B(t,":not(."+n.options.selectedClass+")"):B(t),i.push({multiDragElement:t,index:e})}),{items:r(ce),clones:[].concat(ue),oldIndicies:o,newIndicies:i}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":1<t.length&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})}),Bt});;
/**
 * @file
 * Select2 integration.
 */
(function ($, drupalSettings, Sortable) {
  'use strict';

  Drupal.behaviors.select2 = {
    attach: function (context) {
      $('.select2-widget', context).once('select2-init').each(function () {
        var config = $(this).data('select2-config');
        config.createTag = function (params) {
          var term = $.trim(params.term);
          if (term === '') {
            return null;
          }
          return {
            id: '$ID:' + term,
            text: term
          };
        };
        config.templateSelection = function (option, container) {
          // The placeholder doesn't have value.
          if ('element' in option && 'value' in option.element) {
            // Add option value to selection container for sorting.
            $(container).data('optionValue', option.element.value);
          }
          return option.text;
        };
        if (Object.prototype.hasOwnProperty.call(config, 'ajax')) {
          config.ajax.data = function (params) {
            var selected = [];
            if (Array.isArray($(this).val())) {
              selected = $(this).val();
            }
            else if ($(this).val() !== '') {
              selected = [$(this).val()];
            }
            return $.extend({}, params, {
              q: params.term,
              selected: selected.filter(function (selected) {
                return !selected.startsWith('$ID:');
              })
            });
          };
        }
        $(this).data('select2-config', config);

        // Emit an event, that other modules have the chance to modify the
        // select2 settings. Make sure that other JavaScript code that rely on
        // this event will be loaded first.
        // @see: modules/select2_publish/select2_publish.libraries.yml
        $(this).trigger('select2-init');
        config = $(this).data('select2-config');

        // If config has a dropdownParent property, wrap it a jQuery object.
        if (Object.prototype.hasOwnProperty.call(config, 'dropdownParent')) {
          config.dropdownParent = $(config.dropdownParent);
        }
        $(this).select2(config);

        // Copied from https://github.com/woocommerce/woocommerce/blob/master/assets/js/admin/wc-enhanced-select.js#L118
        if (Object.prototype.hasOwnProperty.call(config, 'ajax') && config.multiple) {
          var $select = $(this);
          var $list = $select.next('.select2-container').find('ul.select2-selection__rendered');
          Sortable.create($list[0], {
            draggable: 'li:not(.select2-search)',
            forceFallback: true,
            onEnd: function () {
              $($list.find('.select2-selection__choice').get().reverse()).each(function () {
                $select.prepend($select.find('option[value="' + $(this).data('optionValue') + '"]').first());
              });
            }
          });
        }
      });
    }
  };

})(jQuery, drupalSettings, Sortable);
;
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;e.define("select2/i18n/fr",[],function(){return{errorLoading:function(){return"Les résultats ne peuvent pas être chargés."},inputTooLong:function(e){var n=e.input.length-e.maximum;return"Supprimez "+n+" caractère"+(n>1?"s":"")},inputTooShort:function(e){var n=e.minimum-e.input.length;return"Saisissez au moins "+n+" caractère"+(n>1?"s":"")},loadingMore:function(){return"Chargement de résultats supplémentaires…"},maximumSelected:function(e){return"Vous pouvez seulement sélectionner "+e.maximum+" élément"+(e.maximum>1?"s":"")},noResults:function(){return"Aucun résultat trouvé"},searching:function(){return"Recherche en cours…"},removeAllItems:function(){return"Supprimer tous les éléments"}}}),e.define,e.require}();;
(function ($, Drupal) {

  /**
   * Interactions for map toggles.
   */
  Drupal.behaviors.mapToggles = {
    attach: function (context) {
      $('.map-toggle', context).once('map-toggles-init').on('click', function (e) {
        var $map_wrapper = $(this).closest('.plan');
        if (!$map_wrapper.length) {
          return;
        }
        var $map_toggles = $('.map-toggle');
        $map_toggles.removeClass('d-none');
        $(this).addClass('d-none');

        var classes_to_remove = [];
        $map_toggles.each(function() {
          classes_to_remove.push($(this).attr('data-map'));
        });
        $map_wrapper.removeClass(classes_to_remove).addClass($(this).attr('data-map'));

        if ('hide' === $(this).attr('data-map')) {
          $map_wrapper.find('.map-hidden-hint').removeClass('d-none');
          $(document).trigger('mapHidden');
        }
        else {
          $map_wrapper.find('.map-hidden-hint').addClass('d-none');
          $(document).trigger('mapResize'); // Trigger the event only if we do not hide the map.
        }
      });
    }
  };

})(jQuery, Drupal);
;
