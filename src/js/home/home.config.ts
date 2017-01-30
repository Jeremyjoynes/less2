//Defines the Home Configuration
namespace Lesson.Home {

    Configuration.$inject = [
        '$stateProvider'
    ];
    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider.state('Home', <ng.ui.IState>{
            url: '/',
            // template: `<h1>This is our home page</h1>
            // <p>{{vm.message}}</p>`,
             templateUrl: 'js/home/home.partial.html',
            controller: Lesson.Home.HomeController,
            controllerAs: 'vm'
        })
    }
}