const eShop = {
    name: 'E-Shop',
    phoneNumber: '8 700 555 66 77',
    products: [
        { productName: 'Сыр', category: ['сүт өнімі', 'тоқбасар', 'ақ уыз'], price: 2000, stock: 50 },
        { productName: 'Сок', category: ['су', 'сусын', 'көмірсу'], price: 500, stock: 120 },
        { productName: 'Жұмыртқа', category: ['ақ уыз', 'тауық өнімі', 'жұмыртқа өнімі'], price: 1200, stock: 360 },
        { productName: 'Сиыр еті', category: ['ет өнімдері', 'ақ уыз', 'сиыр өнімі'], price: 7000, stock: 80 },
        { productName: 'Сүт', category: ['сүт өнімі', 'сиыр өнімі', 'ақ уыз'], price: 1500, stock: 70 },
    ],
    changeShopName: function () {
        let newNameShop = prompt('Жаңа дүкеннің атын енгізіңіз');
        this.name = newNameShop;
    },
    changePhoneNumber: function () {
        let newNumber = prompt('Жаңа дүкеннің номерін енгізіңіз');
        this.phoneNumber = newNumber;
    },
    listProductNames: function () {
        let productsNames = []
        for (let i = 0; i < this.products.length; i++) {
            productsNames.push(this.products[i].productName + ' ' + (this.products[i].price));
        };
        alert(`Дукендегі заттар тізімі:\n${productsNames.join('\n')}`)
    },
    addProduct: function () {
        let newProductName = prompt('Жаңа тауар атын енгізіңіз');
        let newPrice = +prompt('Жаңа тауар бағасын енгізіңіз');
        let newStock = +prompt('Жаңа тауар санын енгізіңіз');
        let newCategory = [];

        for (let i = 1; i <= 3; i++) {
            let addNewCategory = prompt('Жаңа тауар категорияларын енгізіңіз');
            newCategory.push(addNewCategory);
        }

        this.products.push({ productName: newProductName, category: newCategory, price: newPrice, stock: newStock });
    },
    applyDiscountToCategory: function () {
        let nameOfCategory = prompt('Категория атын жазыңыз');
        let discountOfCategory = +prompt('Жеңлдікті жазыңыз');
        discountOfCategory = discountOfCategory / 100;


        for (let i = 0; i < this.products.length; i++) {
            let newprice = 0
            if (this.products[i].category.includes(nameOfCategory)) {
                newprice = this.products[i].price - (this.products[i].price * discountOfCategory);
                this.products[i].price = newprice;
                alert(this.products[i].productName + ' жеңілдікпен бағасы: ' + (newprice));
            }


        }
    },
}

function menu() {
    while (true) {
        let menu = prompt('Мәзір \n1)Дүкен атауын өзгерту\n2)Телефон нөмірін жаңарту\n3)Барлық өнімдерді көру\n4)Жаңа өнім қосу\n5)Белгілі бір категорияға жеңілдік жасау\n6)Шығу');

        if (menu == '1') {
            eShop.changeShopName();
        } else if (menu == '2') {
            eShop.changePhoneNumber();
        } else if (menu == '3') {
            eShop.listProductNames();
        } else if (menu == '4') {
            eShop.addProduct();
        } else if (menu == '5') {
            eShop.applyDiscountToCategory();
        } else if (menu == '6') {
            break;
        }
    }
}

menu();









