'use strict';

module.exports = function emoji_html(tokens, idx /*, options, env */) {
    return '<span class="emoji emoji_' + tokens[idx].markup + '"></span>';
};
