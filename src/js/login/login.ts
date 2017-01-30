namespace Lesson.Login{
    let module = angular.module('lesson.login',[]);
    
    module.controller('LoginController', Lesson.Login.LoginController);
    module.config(Lesson.Login.Configuration);
}