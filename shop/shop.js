//model
let list = [];
function Item(name,price){
    this.name=name;
    this.price = price;
}
function add(name,price,img){
    let item = new Item(name,price);
    console.log(item);
    list.push(item);
    view(list);
}
// controls
function addItem(e){
    e.preventDefault();
    const add_Item = inputName.value;
    const add_Price = inputPrice.value;
    add(add_Item,add_Price);
}



const form = document.forms['shop-form'];
const inputName = document.querySelector('#input-name');
const inputPrice = document.querySelector('#input-price');
form.addEventListener('submit',addItem);
// views


function view(name,price){

    const ul = document.querySelector('.shop-ul');        

    list.forEach((el,ind)=>{
      const li = `<li id=${ind} class = shop-list>
            <p>${el.name}</p>
            <p>${el.price}</p>
        </li>`

        ul.insertAdjacentHTML('afterbegin', li);
    })
    
    
}
