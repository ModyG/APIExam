'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('MainCtrl', function ($http, $scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.post = function () {
      $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
      }).then(function successCallback(response) {
        $scope.posts = response.data;
      }, function errorCallback(response) {
        console.log('JSON Error Data :' + JSON.stringify(response));
      });
    };

    this.users = function () {
      $http({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
      }).then(function successCallback(response) {
        $scope.usersData = response.data;
      }, function errorCallback(response) {
        console.log('JSON Error Data :' + JSON.stringify(response));
      });
    };

    this.getComment = function (userID) {

      Console.log(userID);

    };


    this.post();
    this.users();

  });
