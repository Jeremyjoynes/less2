namespace Lesson {
   Run.$inject = [
        '$rootScope',
        '$state',
        'AuthenticationService'
    ];

    export function Run(
        $rootScope: ng.IRootScopeService,
        $state: ng.ui.IStateService,
        AuthenticationService: Lesson.Services.AuthenticationService
    ){

        let self = this;
        $rootScope.$on('stateChangeStart',
         (event:  ng.IAngularEvent,
          toState: Lesson.Models.IAuthState, toParams:any,
          fromState: ng.ui.IState, fromParms: any
          ) =>{
                if (toState.data && toState.data.requireAuthentication) {
                        if(!AuthenticationService.isLoggedIn()) {
                            event.preventDefault();
                            $state.go('Login');
                        }
                }
        });
    }
    // function isLoggedIn() {
    //     return document.cookie === 'login=true';
    //}

}