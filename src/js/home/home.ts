// Defines the Home module
namespace Lesson.Home {
    let module = angular.module('lesson.home', []);

    // module.controller('HomeController', HomeController);
    module.controller('HomeController', Lesson.Home.HomeController);
    module.config(Lesson.Home.Configuration);
    //single resonserbility principle
    //dry 
}