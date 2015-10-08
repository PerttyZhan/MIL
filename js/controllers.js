var editCtrls = angular.module('editCtrls', ["editServices"]);

editCtrls.controller('artcleContr', ['$scope','editServices_1',
    function($scope,editServices_1) {
        $scope.artcleList = editServices_1;
    }
]);



/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */