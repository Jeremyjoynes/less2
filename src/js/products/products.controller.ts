namespace Lesson.Products {


    export class ProductsController {
        public products: Lesson.Models.Product[];

        static $inject = [
            'ProductsService'
        ];

        constructor(
            private ProductsService: Lesson.Services.ProductsService
        ) {
               this.products = ProductsService.getAllProducts();
        }
    }

    export class ProductController {
        public product: Product;

                static $inject = [
                    '$stateParams',
                    'ProductsService'
                ];

        constructor(
            $stateParams: ng.ui.IStateParamsService,
            private ProductsService: Lesson.Services.ProductsService
        ) {
            // this.product = productList[$stateParams['id']];
            let productId: number = <number>$stateParams['id'];
            this.product = ProductsService.getProductById(productId);
        }
    }

    export class Product {
        constructor(
            public name: string,
            public price: number,
            public outOfStock: boolean)
        { }
    }
}