angular.module('test1App').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/main.html',
    "<div class=\"container\"> <div class=\"col-md-6\"> <div ng-repeat=\"post in posts\" class=\"panel panel-default\"> <div class=\"panel-heading\">{{post.title}}</div> <div class=\"panel-body\"> {{post.body}} </div> </div> </div> <div class=\"col-md-6\"> <table class=\"table table-bordered\"> <thead> <tr> <th>#</th> <th>Name</th> <th>Username</th> <th>Email</th> <th>User comment</th> </tr> </thead> <tbody> <tr ng-repeat=\"user in usersData\"> <th scope=\"row\">{{user.id}}</th> <td>{{user.name}}</td> <td>{{user.username}}</td> <td>{{user.email}}</td> <td><a ng-click=\"this.getComment(user.id)\" class=\"btn btn-default\">comment</a></td> </tr>  </tbody> </table> </div> </div>"
  );

}]);
