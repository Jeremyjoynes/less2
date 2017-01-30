namespace Lesson.Login {

    // LoginController.$inject = [
    //     '$stateService'
    // ];

    export class LoginController {
        public username: string = '';
        public password: string = '';

        static $inject = [
                '$state',
                'AuthenticationService'
        ];

        constructor(
            private $state: ng.ui.IStateService,
            private AuthenticationService: Lesson.Services.IAuthenticationService
        ) { }

        public signIn() {
            this.AuthenticationService.logUserIn();
            this.$state.go('Home');
        }
    }
}