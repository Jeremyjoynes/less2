namespace Lesson.Services{
    export class ProductsService {
        private products: Lesson.Models.Product[];

        static $inject = [
            '$http'
        ];
        constructor(
            private $http: ng.IHttpService
        ){}

        public getAllProducts(): Lesson.Models.Product[]{
            return this.products;
        }

        public getProductById(id: number): Lesson.Models.Product{
            return this.products.filter(function(item) {
                return item.id == id;
            })[0];
        }
    }
}
