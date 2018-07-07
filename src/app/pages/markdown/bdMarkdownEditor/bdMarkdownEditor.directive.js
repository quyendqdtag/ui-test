/**
 * @author khanda
 * created on 07.07.2018
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.markdown')
      .directive('bdMarkdownEditor', bdMarkdownEditor);

  /** @ngInject */
  function bdMarkdownEditor() {
    return {
      restrict: 'E',
      controller: 'BdMarkdownEditorCtrl',
      templateUrl: 'app/pages/markdown/bdMarkdownEditor/bdMarkdownEditor.html'
    };
  }
})();