const options = {
    duration: 100
};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});


let productdetails = [
    {
        'productName': 'French Stack burger',
        'productImg': 'burger-1.png',
        'price': 459,
        'inputId': 'card-1',
        'count': '1'
    },
    {
        'productName': 'Killed Burger Kings',
        'productImg': 'burger-2.jpg',
        'price': 476,
        'inputId': 'card-2',
        'count': '1'
    },
    {
        'productName': 'Hamburger',
        'productImg': 'burger-3.jpg',
        'price': 400,
        'inputId': 'card-3',
        'count': '1'
    },
    {
        'productName': 'New gourmet burgers',
        'productImg': 'burger-4.jpg',
        'price': 380,
        'inputId': 'card-4',
        'count': '1'
    },
    {
        'productName': 'Zinger Burger',
        'productImg': 'burger-5.jpg',
        'price': 345,
        'inputId': 'card-5',
        'count': '1'
    },
    {
        'productName': 'Zinger Premium BBQ Double',
        'productImg': 'burger-6.jpg',
        'price': 475,
        'inputId': 'card-6',
        'count': '1'
    },
    {
        'productName': 'Chicken Teriyaki',
        'productImg': 'burger-7.jpg',
        'price': 380,
        'inputId': 'card-7',
        'count': '1'
    },
    {
        'productName': 'Turkey & Bacon Avocado',
        'productImg': 'burger-8.jpg',
        'price': 490,
        'inputId': 'card-8',
        'count': '1'
    },
    {
        'productName': 'Turkey Breast',
        'productImg': 'burger-9.jpg',
        'price': 490,
        'inputId': 'card-9',
        'count': '1'
    }
]

function init() {
    let sectionItem = document.querySelector('section');
    for (let i = 1; i < productdetails.length; i++) {

        sectionItem.innerHTML += `<div class="row">
        <!-- product card -->
        <div class="col s12 m6">
            <div class="card z-depth-5">
            <!-- product name -->
                <div class="card-content white center-align">
                    <p class='orange-text product-name'>${productdetails[i].productName}</p>
                </div>
            <!-- product img -->
                <div class="card-image">
                    <div class="img" id="img-1" 
                        style="background-image:url(images/burgers/${productdetails[i].productImg})">
                    </div>
                </div>
                <!-- add to order card and produect price -->
                <div class="card-content orange lighten-2">
                    <div class="form-group">
                        <!-- order to product -->
                        <div class="input-group mb-3">
                            <!-- 
                                if the user should reduce some of the order, 
                                so they will press this button 
                             -->
                            <div class="input-group-prepend subraction-btn" onclick="subraction('${i}')">
                                <span class="input-group-text">-</span>
                            </div>
                            <!-- this input show product quanitity-->
                            <input type="text" class="form-control add-count" id="${productdetails[i].inputId}" aria-label="Amount (to the nearest dollar)">
                            <!-- 
                                if the user purchase this product so they will press this button 
                            -->
                            <div class="input-group-append add-btn" onclick="add('${i}')">
                                <span class="input-group-text">+</span>
                            </div>
                        </div>
                    </div>
                    <!-- this is a product price element -->
                    <p>${productdetails[i].price}</p>
                </div>
            </div>
        </div>
    </div>
    `
    }
}


let numb = 1;
let totalAmount =0;
function subraction(index) {
      let count = productdetails[index].count;

    if (count > 0) {
     
        document.querySelector(`#${productdetails[index].inputId}`).value = productdetails[index].count--;
        document.querySelector('.card-numb').innerHTML = numb--;

         // total priice
      
      totalAmount = parseInt(document.querySelector('.total-price').innerHTML);
      totalAmount -= productdetails[index].price;
      document.querySelector('.total-price').innerHTML =parseFloat(totalAmount);
    }
     
}


function add(index) {
   
    // let price = productdetails[index].price
    document.querySelector(`#${productdetails[index].inputId}`).value = productdetails[index].count++;
    document.querySelector('.card-numb').innerHTML = numb++;

   // total priice
    
    totalAmount = parseInt(document.querySelector('.total-price').innerHTML);
    totalAmount += productdetails[index].price;
    document.querySelector('.total-price').innerHTML =parseFloat(totalAmount);
    
}




