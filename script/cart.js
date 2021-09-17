let itemsArray = localStorage.getItem('btnitems') ? JSON.parse(localStorage.getItem('btnitems')) : [];

var btnIndexArray=JSON.parse(localStorage.getItem('btnitems'));

let productNames=[
    'Cheeseburger','Double Cheeseburger','Bacon Cheeseburger','Grilled Chicken Burger',
    'BBQ Chicken Burger','Mexican Chicken Burger','Popcorn Chicken','Chicekn Nuggets',
    'Poutine','Fries','Chicken Wings','Salad',
    'Coca-Cola','Iced Tea','Coffee','Hot Chocolate',
    'Lemon Soda','Fruit Smoothies'
];


function updateCartRow(){
    if(btnIndexArray!=null){

    }
}


addbtn.addEventListener('click', function (e) {
    e.preventDefault();
    itemsArray.push(input.value);
    localStorage.setItem('btnitems', JSON.stringify(itemsArray));
    liMaker(input.value);
    input.value = "";
  });


const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }