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
            markdownItConverter.config('commonmark', {
                breaks: true,
                html: true
            });
            markdownItConverter.use(window.markdownitEmoji);
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
