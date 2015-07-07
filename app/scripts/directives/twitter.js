'use strict';
'use strict';

/**
 * @ngdoc function
 * @name chgApp.directive:chgTwitter
 * @description
 * # chgTwitter
 * Directive for showing embedded twitter timelines
 */

angular.module('chgApp').directive('chgTwitter', function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<a class="twitter-timeline" href="https://twitter.com/CHGAssociate/lists/transit-news" data-widget-id="617558521438183424">Tweets from https://twitter.com/CHGAssociate/lists/transit-news</a>',

                link: function (scope, el, attr) {

                    if (typeof twttr === 'undefined') { //twitter hasn't been loaded yet, do so

                        var twitterFun = function (d, s, id) {
                            var js, fjs = d.getElementsByTagName(s)[0],
                                p = /^http:/.test(d.location) ? 'http' : 'https';
                            if (!d.getElementById(id)) {
                                js = d.createElement(s);
                                js.id = id;
                                js.src = p + "://platform.twitter.com/widgets.js";
                                fjs.parentNode.insertBefore(js, fjs);
                            }
                        }
                        console.log('Setting up twitter widget');
                        twitterFun(document, "script", "twitter-wjs");

                    } else { //twitter was previously added to the dom, just reload.
                        twttr.widgets.load();

                    }
                }}});
