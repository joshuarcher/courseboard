'use strict';

/* USER Controllers */

angular.module('courseboard')
  .controller('CoursesIndexCtrl', ['$scope', '$http', '$auth', 'Auth', 'GlobalAlert', function($scope, $http, $auth, Auth, GlobalAlert) {

      $scope.courses = [
          {title: "CS Theory", teacher: "Alan", description: "Learn about CS Theory!", credits: 3, duration: "6 Weeks"},
          {title: "MEAN", teacher: "Braus", description: "Learn about the MEAN Stack!", credits: 3, duration: "4 Weeks"},
          {title: "Improv", teacher: "Alan", description: "Learn the art of Improv from the master himself.", credits: 3, duration: "12 Weeks"},
          {title: "Job Hunt", teacher: "Dan", description: "Job hunting has never been harder! Learn the tricks!", credits: 3, duration: "12 Weeks"}
      ]

  }]);
