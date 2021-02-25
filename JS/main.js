   class Products {
       data = [];
       products = [];
       container = null;
       cartdata = [];

       constructor(selector) {
           this.container = document.querySelector(selector);
           this._fetchdata();
           this._render();
           this.addcartitem();
       }
       _fetchdata() {
           this.data = [{
                   name: 'BMW',
                   id: 1,
                   price: 100
                },
               {
                   name: 'Mercedes-Benz',
                   id: 2,
                   price: 110
                },
               {
                   name: 'Porsche',
                   id: 3,
                   price: 120
                },
               {
                   name: 'Audi',
                   id: 4,
                   price: 90
                },
            ];
       }
       _render() {
           for (let data of this.data) {
               const product = new ProductItem(data);
               this.products.push(product);
               this.container.insertAdjacentHTML('beforeend', product.render());

           }
       }

       addcartitem() {
           for (let data of this.data) {
               const prod = new ProductItem(data);

               document.getElementById(prod.id).addEventListener('click', () => {
                   let prodobj = {
                       name: prod.name,
                       id: prod.id,
                       price: prod.price
                   }
                   const cartdata = this.cartdata.push(prodobj);

               });
           }
           //console.log(this.cartdata);
       }


   }



   class ProductItem {
       name = '';
       id = 0;
       price = 0;
       img = '';

       constructor(product, img = 'https://placehold.it/200x150') {
           ({
               name: this.name,
               price: this.price,
               id: this.id
           } = product);
           this.img = img;
       }

       render() {
           return `
            <div class=contain-goods__descr> ${this.name} only for ${this.price}K USD
                <div class=contain-goods__buttonadd id=${this.id}> buy!</div>
            </div>`
       }

   }

   const list = new Products('.contain-goods');



   //--------------------------------c a r t--------------------------------

   class Cart {
       cartlist = [];
       container = null;

       constructor(selector, cartdata) {
           this.container = document.querySelector(selector);
           this.cartlist = cartdata;
           this.cartdisplay();
       }

       cartfetch() {
           //берет данные с сервера(представление которого сейчас массив cartdata), которые были отправлены туда обрабочиками кликов из класса products

           const cartli = this.cartlist;
           console.log(cartli);
           //console.log(cartlist);

       }
       cartdisplay() {
           //формирует выпадающий список товаров cartarr cо структурой одного товара из Cartitem. Пока сделал алертом
           this.container.addEventListener('click', () => {
               alert(this.cartfetch(cartdata));
           });
       }

   }
   class Cartitem {
       //формирует карточку товара в корзину
   }

   const cartvis = new Cart('.contain-header__bin', list.cartdata);
