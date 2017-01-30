namespace Lesson.Services{
    export class AuthenticationService implements IAuthenticationService {
        private isUserLoggedIn: boolean = false;

        public logUserIn = (): void =>{
            this.isUserLoggedIn = true;
        }

        public logUserOut = ():void =>{
            this.isUserLoggedIn = false;
        }

        public isLoggedIn = ():boolean => {
            return this.isUserLoggedIn;
        }
    }

    export interface IAuthenticationService{
        logUserIn: () => void;
        logUserOut: () => void;
        isLoggedIn: () => boolean;
    }
}