namespace Lesson.Models{
    export class Product{
        constructor(
            public id:number,
            public name: string,
            public price: number,
            public outOfStock: boolean
        ){}
    }
}