namespace Lesson.Services{
    let module: ng.IModule = angular.module('lesson.services',[]);

    module.service('AuthenticationService', AuthenticationService);
    module.service('ProductsService',ProductsService);
}