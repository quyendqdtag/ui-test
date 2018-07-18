/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown',
        [
            'ngSanitize',
            'sc.twemoji',
            'mdMarkdownIt',
            'angular-click-outside',
            'ngThumb',
            'angularFileUpload',
            'swangular'
        ])
        .config(routeConfig)
        .config(['markdownItConverterProvider', function (markdownItConverter) {
            markdownItConverter.config('default', {
                html:         true,        // Enable HTML tags in source
                xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                            // This is only for full CommonMark compatibility.
                breaks:       true,        // Convert '\n' in paragraphs into <br>
                langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                            // useful for external highlighters.
                linkify:      true,        // Autoconvert URL-like text to links

                // Enable some language-neutral replacement + quotes beautification
                typographer:  true,
            });
            markdownItConverter.use(window.markdownitEmoji);
            console.log(window);
        }]);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('markdown', {
                url: '/markdown',
                templateUrl: 'app/pages/markdown/markdown.html',
                title: 'markdown',
                controller: 'MarkdownCtrl',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();
