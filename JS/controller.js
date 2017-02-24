var app = angular.module('register', ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
        templateUrl: 'register.html',
        controller: 'registerCON'
    })
    .when('/register',{
        resolve:{
            "check": function($location, $rootScope){
                if(!$rootScope.loggedIn){
                    $location.path('/');
                }
            }
        },
        templateUrl: 'register.html',
        controller : 'regiterCON'
    })

     .when('/login',{
           resolve:{
            "check": function($location, $rootScope){
                if(!$rootScope.loggedIn){
                    $location.path('/');
                }
            }
        },
        templateUrl : 'login.html',
        controller: 'logi'
    })
    .when('/about',{
        templateUrl : 'about.html',
        controller: 'newAbout'
    })
     .when('/welcome',{
        templateUrl : 'welcome.html',
        controller : 'logi'
    })
    .otherwise({
        redirectTo:'/'
    });
});

app.controller('registerCON', function($scope, $location, $rootScope){
    $scope.save = function(){
        console.log($scope.name);
        console.log($scope.email);
        console.log($scope.gender);
        console.log($scope.cont);
        if(!$scope.name == '' && !$scope.email == '' && !$scope.gender==''&& !$scope.cont=='' && !$scope.pass==''){
            $rootScope.loggedIn = true;
            alert('You have been successfuly registered.')
            $location.path('/login');
        } else{
            $location.path('/register');
            alert('Please fill all the Fields');
        }
    };
});

app.controller('newAbout',function($scope){
    $scope.cont = 'This is the demo application on Angular JS routing concept';
})

app.controller('logi',function($scope, $location, $rootScope){
    $scope.save = function(){
        if($rootScope.uname === $rootScope.name && $rootScope.passw === $rootScope.pass){
            console.log($rootScope.uname === $rootScope.name && $rootScope.passw === $rootScope.pass);
            $rootScope.loggedIn = true;
//        if(angular.equals($scope.uname ,$rootScope.name)){
    $rootScope.loggedIn = true;
            alert('fine');
            $location.path('/welcome');
            console.log($rootScope.loggedIn);
        }
        else{
            alert('User Not Registered');
        }
    };
});
