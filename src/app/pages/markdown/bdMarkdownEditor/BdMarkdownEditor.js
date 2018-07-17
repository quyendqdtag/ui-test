/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .controller('BdMarkdownEditorCtrl', BdMarkdownEditorCtrl);

    /** @ngInject */
    function BdMarkdownEditorCtrl($scope, bdFileUploaderHelper) {
        console.log($scope.options);
        var uploadConfig = {
            url: $scope.uploadServer,
            maxSize: 1, // 1MB
            maxQuantity: 3
        };
        $scope.uploader = bdFileUploaderHelper.buildPhotoUploader(uploadConfig);
        // TODO add photoUrl to photos

        $scope.emojiEditorOptions = {
        };

        $scope.isEditMode = true;

        $scope.onClickEmoji = onClickEmoji;
        $scope.onClickVideo = onClickVideo;
        $scope.onClickImage = onClickImage;
        $scope.isShowMediaPreview = isShowMediaPreview;
        $scope.onMouseDownEditorView = onMouseDownEditorView;
        $scope.onClickOutsideEditor = onClickOutsideEditor;
        $scope.onMouseDownEditor = onMouseDownEditor;
        $scope.onClickOutsideEmojiPopup = onClickOutsideEmojiPopup;
        $scope.removePhoto = removePhoto;

        $scope.$on('EMOJI_PICKED', _onEmojiPicked);

        /**
         * append emoji for markdown
         * @param event
         * @param data {shortName: ":heart:", img: "<img src=''></img>"}
         * @private
         */
        function _onEmojiPicked(event, data) {
            $scope.options.content += ' ' + data.shortName;
            $scope.$apply();
        }

        function removePhoto(index) {
            $scope.options.photos.splice(index, 1);
            // TODO send request to server to remove this image
        }

        function onMouseDownEditor() {
            $scope.isEditMode = true;
        }

        function onMouseDownEditorView(event) {
            $scope.isEditMode = true;
            setTimeout(function () {
                var editor = $("#markdown-editor");
                editor.focus();
            }, 0);

        }

        function onClickOutsideEmojiPopup() {

        }

        function onClickOutsideEditor() {
            $scope.isEditMode = false;
            //Update height for markdown-view
            var editor = $("#markdown-editor");
            var viewer = $("#markdown-viewer");
            if (editor && viewer) {
                viewer.height(editor.height())
            }
        }

        function isShowMediaPreview() {
            return $scope.options.photos && $scope.options.photos.length > 0;
        }

        function onClickEmoji() {
            alert('showEmojiPopup');
        }

        function onClickVideo() {
            alert('onClickMap');
        }

        function onClickImage() {
            alert('onClickImage');
        }
    }
})();