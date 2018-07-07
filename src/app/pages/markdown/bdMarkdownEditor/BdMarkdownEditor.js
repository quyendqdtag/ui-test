/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .controller('BdMarkdownEditorCtrl', BdMarkdownEditorCtrl);

    /** @ngInject */
    function BdMarkdownEditorCtrl($scope) {
        $scope.content = "__bold__ sweat_smile 8-) :o";
        $scope.photos = [];
        $scope.onClickEmoji = onClickEmoji;
        $scope.onClickVideo = onClickVideo;
        $scope.onClickImage = onClickImage;
        $scope.isShowMediaPreview = isShowMediaPreview;

        function isShowMediaPreview() {
            return $scope.photos && $scope.photos.length > 0;
        }

        function onClickEmoji() {
            alert('showEmojiPopup');
        }

        function onClickVideo() {
            alert('onClickVideo');
        }

        function onClickImage() {
            alert('onClickImage');
        }
    }
})();