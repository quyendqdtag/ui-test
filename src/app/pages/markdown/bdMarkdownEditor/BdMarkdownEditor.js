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
    $scope.content = "__bold__";
  }
})();