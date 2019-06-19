class GoodsItem {
    constructor(title = "none", price = 0) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
        <div class="goods-item">
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="add-goods-button">Добавить</button>
        </div>`;
    }
}

class GoodsList {
    constructor (el = ".goods-list") {
        this.el = el;
        this.goods = [];
        this.totalPrice = 0;
    }
    fetchGoods() {
        this.goods = [
            { title: "Shirt", price: 150 },
            { title: "Socks", price: 50 },
            { price: 350 },
            { title: "Jacket", price: 350 },
            { title: "Shoes" },
        ];
    }
    render() {
        const listHtml = this.goods.reduce((acc, good) => {
            const goodItem = new GoodsItem(good.title, good.price);
            return acc += goodItem.render();
        }, '');
        document.querySelector(this.el).innerHTML = listHtml;
    }

    calcPrice () {

        this.fetchGoods();

        this.totalPrice = this.goods.reduce((acc, good) => {

            if (!!good.price) {
                return acc += parseInt(good.price);
            } else {
                return acc;
            }
            
        }, 0);

        console.log(totalPrice);

    }


}

class BasketItem {
    constructor () {

    }

    changeQuantity () {

    }
}

class Basket {
    constructor () {

    }

    addItem () {

    }

    removeItem () {

    }

    calcBasket () {

    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
