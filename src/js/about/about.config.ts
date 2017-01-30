// defines the home module configuration
namespace Lesson.About {

    Configuration.$inject = [
        '$stateProvider'
    ];
    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider.state('About', <ng.ui.IState>{
            url: '/about',
            // template: `<h1>This is our about page</h1>
            // <p>{{vm.message}}</p>`,
             templateUrl:'js/about/about.partial.html',
            controller: Lesson.About.AboutController,
            controllerAs: 'vm'
        })
    }
}