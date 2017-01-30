namespace Lesson.Products{
    let module = angular.module('lesson.products', []);

    module.controller('ProductController', Lesson.Products.ProductsController)
    module.controller('ProductsController', Lesson.Products.ProductsController);
    module.config(Lesson.Products.Configuration);
}