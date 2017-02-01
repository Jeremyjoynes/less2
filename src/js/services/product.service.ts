namespace Lesson.Services{
    export class ProductsService {
        private products: Lesson.Models.Product[];

        static $inject = [
            '$http'
        ];
        constructor(
            private $http: ng.IHttpService
        ){

            $http.get<Lesson.Models.Product[]>('data/product.list.json')
            .then((response)=>{
                return this.products = response.data;
            })
            .catch((response) =>{
                console.error('could not retrieve product database');
            });
        }

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
