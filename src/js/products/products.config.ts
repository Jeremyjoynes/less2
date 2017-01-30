namespace Lesson.Products {
    Configuration.$inject = [
        '$stateProvider'
    ];
    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Products', <Lesson.Models.IAuthState>{
                url: '/products',
                templateUrl: 'js/products/products.view.html',
                controller: Lesson.Products.ProductsController,
                controllerAs: 'vm',
                data: {
                    requireAuthentication: true
                }
            })
            .state('Product', <Lesson.Models.IAuthState>{
                url: '/products/:id',
                templateUrl: 'js/products/product.view.html',
                controller: Lesson.Products.ProductController,
                controllerAs: 'vm',
                               data: {
                    requireAuthentication: true
                }
            })
    }
}