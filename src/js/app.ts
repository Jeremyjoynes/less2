// Application Defined here
namespace Lesson {
    let module = angular.module("lesson", [
        //external Dependencies
        'ui.router',
        //application Modules
        'lesson.services',
        'lesson.home',
        'lesson.about',
        'lesson.products',
        'lesson.login',

    ]);
    module.config(Lesson.Configuration);
    module.run(Lesson.Run);
}