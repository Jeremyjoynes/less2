namespace Lesson.About{
    let module = angular.module('lesson.about',[]);

    module.controller('AboutController', Lesson.About.AboutController);
    module.config(Lesson.About.Configuration);
}