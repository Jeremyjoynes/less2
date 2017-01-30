namespace Lesson.Login {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ){
        $stateProvider.state('Login',<Lesson.Models.IAuthState>{
            url: '/login',
            templateUrl: 'js/login/login.view.html',
            controller: Lesson.Login.LoginController,
            controllerAs: 'vm',
            data: {requireAuthentication: false}
        });
    }
}