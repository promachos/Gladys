
(function () {
    'use strict';

    angular
        .module('gladys')
        .factory('houseService', houseService);

    houseService.$inject = ['$http'];

    function houseService($http) {
        var service = {
            create: create,
            get: get, 
            getUsers: getUsers,
            update: update,
            destroy: destroy
        };

        return service;

        function create(house) {
            return $http({method: 'POST', url: '/house', data: house});
        }

        function get() {
            return $http({method: 'GET', url: '/house'});
        }
        
        function update(id, house) {
            return $http({method: 'PATCH', url: '/house/' + id, data: house});
        }
        
        function destroy(id) {
            return $http({method: 'DELETE', url: '/house/' + id});
        }

        function getUsers(houseId){
            return $http({method: 'GET', url: '/house/' + houseId + '/user'});
        }

    }
})();
