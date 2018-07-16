/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.markdown')
        .directive('bdEmojiPicker', bdEmojiPicker);

    /** @ngInject */
    function bdEmojiPicker() {
        function link(scope, element, attrs) {
            console.log(scope.emojiOptions);

            // Config Emoji
            var emoji = element.emojioneArea({
                standalone: true,
                autocomplete: false,
                search: false,
                pickerPosition: "bottom",
                filter: false,
                hidePickerOnBlur: true,
                tones: false,
                recent: false,
                shortnames: true,
                saveEmojisAs: 'shortname', // 'unicode' | 'shortname' | 'image',

            });

            emoji[0].emojioneArea.on("emojibtn.click", function (button, event) {
                var data = {
                    shortName: button[0].dataset.name,
                    img: button[0].innerHTML
                };
                scope.$emit('EMOJI_PICKED', data);
            });
        }

        return {
            link: link,
            scope: {
                emojiOptions: '='
            }
        };
    }
})();