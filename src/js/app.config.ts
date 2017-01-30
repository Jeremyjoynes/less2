// Defines the app Module Config

namespace Lesson {
    Configuration.$inject = [
        '$locationProvider',
        '$urlRouterProvider'

    ];
    export function Configuration(
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider

    ) {
        //Establish HTML5 Route Mode
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        // Establish unhandled Route Control
        $urlRouterProvider.otherwise('/');
    }
}