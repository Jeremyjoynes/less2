namespace Lesson.Products {


    export class ProductsController {
        public products: Lesson.Models.Product[];
        public searchField: string = "";

        static $inject = [
         'ProductsService'
        ];

        constructor(
            private ProductsService: Lesson.Services.ProductsService
        ) {
          this.products = ProductsService.getAllProducts();
        }
        //public fetch
    }

    export class ProductController {
        public product: Lesson.Models.Product;

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

}