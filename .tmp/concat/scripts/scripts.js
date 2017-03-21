'use strict';

/**
 * @ngdoc overview
 * @name test1App
 * @description
 * # test1App
 *
 * Main module of the application.
 */
angular
  .module('test1App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('MainCtrl', ["$http", "$scope", function ($http, $scope) {
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

  }]);

'use strict';

/**
 * @ngdoc function
 * @name test1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the test1App
 */
angular.module('test1App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('test1App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <div class=\"col-md-6\"> <div ng-repeat=\"post in posts\" class=\"panel panel-default\"> <div class=\"panel-heading\">{{post.title}}</div> <div class=\"panel-body\"> {{post.body}} </div> </div> </div> <div class=\"col-md-6\"> <table class=\"table table-bordered\"> <thead> <tr> <th>#</th> <th>Name</th> <th>Username</th> <th>Email</th> <th>User comment</th> </tr> </thead> <tbody> <tr ng-repeat=\"user in usersData\"> <th scope=\"row\">{{user.id}}</th> <td>{{user.name}}</td> <td>{{user.username}}</td> <td>{{user.email}}</td> <td><a ng-click=\"this.getComment(user.id)\" class=\"btn btn-default\">comment</a></td> </tr>  </tbody> </table> </div> </div>"
  );

}]);
