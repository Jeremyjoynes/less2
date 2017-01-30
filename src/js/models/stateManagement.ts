namespace Lesson.Models {
    export interface IAuthState extends ng.ui.IState {
        data?: AuthData;
    }
    class AuthData {
        public requireAuthentication: boolean = false;

    }

}