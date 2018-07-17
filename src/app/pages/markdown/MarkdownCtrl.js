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
            content: '__bold__  8-) :o',
            photos: [
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodzkua6IUyTjZCTg-9VtLudrvLSrEeD4dn2qrfelUQO5w4M5G',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6x0qGQamxaiAtVE-O8L5LVkC5wrT8Fe9AmKiJfk8bOpCj5mxZ4Q',
                'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
            ]
        };
    }
})();