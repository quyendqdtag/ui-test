/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .controller('MarkdownCtrl', MarkdownCtrl);

    function MarkdownCtrl($scope) {

        $scope.options = {
            uploadServer: 'http://localhost:8080/fileupload',
            content: '__bold__  8-) :o'
        };

        console.log($scope.options);
    }
})();