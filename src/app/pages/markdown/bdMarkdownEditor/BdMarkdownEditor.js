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
            autoUpload: true
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
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

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
            if (emojiPopup) {
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
            return uploader && uploader.queue && uploader.queue.length > 0;
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