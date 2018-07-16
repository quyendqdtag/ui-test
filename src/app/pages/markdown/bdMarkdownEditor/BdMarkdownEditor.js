/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .controller('BdMarkdownEditorCtrl', BdMarkdownEditorCtrl);

    /** @ngInject */
    function BdMarkdownEditorCtrl($scope, fileUploader) {
        var uploadConfig = {
            url: 'http://localhost:8080/fileupload',
            maxSize: 1, // 1MB
            maxQuantity: 3
        };
        $scope.uploader = fileUploader.buildPhotoUploader(uploadConfig);
        // TODO add photoUrl to photos

        $scope.content = "__bold__  8-) :o";

        $scope.emojiEditorOptions = {
        };

        $scope.photos = [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSodzkua6IUyTjZCTg-9VtLudrvLSrEeD4dn2qrfelUQO5w4M5G',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6x0qGQamxaiAtVE-O8L5LVkC5wrT8Fe9AmKiJfk8bOpCj5mxZ4Q',
            'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
        ];
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
         *
         * @param event
         * @param data {shortName: ":heart:", img: "<img src=''></img>"}
         * @private
         */
        function _onEmojiPicked(event, data) {
            console.log(data);
            $scope.content += ' ' + data.shortName;
            $scope.$apply();
        }

        function removePhoto(index) {
            $scope.photos.splice(index, 1);
            // TODO send request to server to remove this image
        }

        function onMouseDownEditor() {
            // console.log('onMouseDownEditor');
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
            // console.log('onClickOutsideEditor');
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
            alert('onClickMap');
        }

        function onClickImage() {
            alert('onClickImage');
        }
    }
})();