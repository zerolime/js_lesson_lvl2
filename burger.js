class Burger {
    constructor() {

        this.type = {
            "small" : {'price' : 50, 'kkal' : 20},
            "big" : {'price' : 100, 'kkal' : 40},
        };

        this.toppings = {
            'cheese' : {'price' : 10, 'kkal' : 20},
            'greens' : {'price' : 20, 'kkal' : 5},
            'potato' : {'price' : 15, 'kkal' : 10},
        };

        this.sauce = {
            'mayo' : {'price' : 20, 'kkal' : 5},
            'space' : {'price' : 15, 'kkal' : 0},
        };
    }

    makeBurger(type = 'big', topping = 'cheese', sause = ["mayo"]) {
        this.price = 0;
        this.kkal = 0;

        this.price += this.type[type].price;
        this.price += this.toppings[topping].price;

        this.kkal += this.type[type].kkal;
        this.kkal += this.toppings[topping].kkal;

        const calcSause = sause.reduce((acc, s) => {

            acc.price += this.sauce[s].price;
            acc.kkal +=  this.sauce[s].kkal;

            return acc;


        }, {'price' : 0, 'kkal' : 0});


        this.price += calcSause.price;
        this.kkal += calcSause.kkal;


        console.info('price = ', this.price );
        console.info('kkal = ', this.kkal );


    }
}
