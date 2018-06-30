    (function() {
     'use strict';
     
     angular
     .module('app')
     .factory('userService', Service);
     
     Service.$inject = ['$http', 'globalConfig'];
     
     function Service($http, globalConfig) {
     var url = "";
     return {
     getUsers: function() {
     url = globalConfig.apiAddress + "/pop";
     return $http.get(url);
     },
     getUser: function(id) {
     url = globalConfig.apiAddress + "/pop/" + id;
     return $http.get(url);
     },
     createUser: function(user) {
     url = globalConfig.apiAddress + "/pop";
     return $http.post(url, user);
     },
     updateUser: function(user) {
     url = globalConfig.apiAddress + "/pop/" + user._id;
     return $http.put(url, user);
     },
     deleteUser: function(id) {
     url = globalConfig.apiAddress + "/pop/" + id;
     return $http.delete(url);
     }
     };
     }
    })();