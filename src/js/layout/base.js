/**
 * # layout/base
 *
 * Base constructor for the canvas layout managers
 *
 * > http://draeton.github.com/stitches<br/>
 * > Copyright 2013, Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */
/*global require, define */

define([
    "jquery"
],
function ($) {

    "use strict";

    var defaults = {
        maxPass: 2
    };

    /**
     * ## BaseLayout
     *
     * Create a new `BaseLayout` instance
     *
     * @constructor
     * @param {object} options
     */
    var BaseLayout = function (options) {
        this.settings = $.extend({}, defaults, options);
    };

    BaseLayout.prototype = {
        constructor: BaseLayout,

        /**
         * ### BaseLayout.prototype.getDimensions
         * ...
         */
        getDimensions: function () {},

        /**
         * ### BaseLayout.prototype.getDimensions
         * ...
         */
        placeSprites: function () {},

        /**
         * ### BaseLayout.prototype.getDimensions
         * ...
         */
        intersection: function (sprite, obstacles) {
            var x1, x2, y1, y2;
            var intersections = [];
            var intersection;

            $.map(obstacles, function (obstacle) {
                x1 = (obstacle.x < sprite.x + sprite.width);
                x2 = (obstacle.x + obstacle.width > sprite.x);
                y1 = (obstacle.y < sprite.y + sprite.height);
                y2 = (obstacle.y + obstacle.height > sprite.y);

                if (x1 && x2 && y1 && y2) {
                    intersections.push(obstacle);
                }
            });

            if (intersections.length) {
                intersection = intersections.pop();
            }

            return intersection;
        }
    };

    return BaseLayout;

});