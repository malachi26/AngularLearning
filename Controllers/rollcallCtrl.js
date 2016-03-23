(function () {
    'use strict';

    angular
        .module('app')
        .controller('rollcallCtrl', rollcallCtrl);

    rollcallCtrl.$inject = ['$location','$http']; 

    function rollcallCtrl($location,$http) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'rollcallCtrl';
        
        var getStudents = $http.get("data\studentData.txt")
            .success(function (response) {
                vm.students = response;
            });

    }
})();
