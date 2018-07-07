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
        $scope.isEditMode = true;

        $scope.onClickEmoji = onClickEmoji;
        $scope.onClickVideo = onClickVideo;
        $scope.onClickImage = onClickImage;
        $scope.isShowMediaPreview = isShowMediaPreview;
        $scope.onMouseDownEditor = onMouseDownEditor;
        $scope.onClickOutsideEditor = onClickOutsideEditor;
        $scope.onClickOutsideEmojiPopup = onClickOutsideEmojiPopup;

        function onMouseDownEditor() {
            console.log('onMouseDownEditor');
            $scope.isEditMode = true;
        }

        function onClickOutsideEmojiPopup() {
            var emojiPopup = $(".wdt-emoji-popup");
            if(emojiPopup){
            }
        }
        function onClickOutsideEditor() {
            console.log('onMouseLeaveEditor');
            $scope.isEditMode = false;
            //Update height for markdown-view
            var editor = $("#markdown-editor");
            var viewer = $("#markdown-viewer");
            if (editor && viewer) {
                viewer.height(editor.height())
            }
        }

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