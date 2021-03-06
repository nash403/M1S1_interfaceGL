angular
  .module('pmr')
  .directive('navbarLogin',['users',function (users){
    return {
      restrict:'EA',
      scope:{},
      replace:true,
      templateUrl:'views/navbar-login/navbar-login.view.html',
      link: function(scope){
        scope.isloggedin = false;
        scope.haserror=false;

        scope.$watch(() => { return users.isloggedin;},function (newValue, oldValue) {
          scope.isloggedin = newValue != oldValue ? newValue: oldValue;
          scope.haserror = users.isloggedin;
        })
        scope.signin = function (l,m){
          users.signin(l,m);
        }
        scope.deco = function(){
          users.deco();
        }
      }
    }
  }]);
