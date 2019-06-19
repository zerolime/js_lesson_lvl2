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
        this.goods = []
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
}

const list = new GoodsList();
list.fetchGoods();
list.render();
