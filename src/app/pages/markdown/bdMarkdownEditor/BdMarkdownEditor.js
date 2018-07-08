/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .controller('BdMarkdownEditorCtrl', BdMarkdownEditorCtrl);

    /** @ngInject */
    function BdMarkdownEditorCtrl($scope, FileUploader) {
        var uploader = $scope.uploader = new FileUploader({
            url: $scope.uploadServer,
            autoUpload: true,
            removeAfterUpload: true
        });

        // FILTERS

        uploader.filters.push({
            name: 'imageFilter',
            fn: function (item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        // CALLBACKS

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };

        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

        $scope.content = "__bold__ sweat_smile 8-) :o";
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
        $scope.onClickOutsideEmojiPopup = onClickOutsideEmojiPopup;
        $scope.removePhoto = removePhoto;

        function removePhoto(index) {
            $scope.photos.splice(index, 1);
            // TODO send request to server to remove this image
        }

        function onMouseDownEditorView() {
            $scope.isEditMode = true;
            setTimeout(function () {
                var editor = $("#markdown-editor");
                editor.focus();
            }, 0);

        }

        function onClickOutsideEmojiPopup() {
            var emojiPopup = $(".wdt-emoji-popup");
            if (emojiPopup) {
            }
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