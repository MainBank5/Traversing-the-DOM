//DOM Element relationship [follow parent -> children, children ->parentElement, 
//children -> previos/nextElementSibling, parent -> first/lastElementChild]

let output; 

// get the element with class "parent"
const parent = document.querySelector('.parent');
output = parent.children;
console.log(output);

//to select a specific index child - its iterable 
console.log(parent.children[1]);
console.log(parent.className);
console.log(parent.children[0].nodeName);

console.log(parent.children[0].innerText);
parent.children[0].innerText = 'Child One';
parent.children[1].innerText = 'Child Two';
parent.children[2].innerText = 'Child Three';

//styling
parent.children[0].style.color = 'red';

parent.firstElementChild.style.backgroundColor = 'Green';
parent.lastElementChild.style.backgroundColor = 'yellow';

//get parent from child
const child = document.querySelector('.child');
output = child.parentElement;
console.log(output);

child.parentElement.style.border = '1px solid red';
child.parentElement.style.padding = '80px';

//third child
const thirdChild = document.querySelector('.child:nth-child(3)');
thirdChild.previousElementSibling.style.background ='skyblue'

const secondChild = document.querySelector('.child:nth-child(2)');
secondChild.nextElementSibling.style.fontWeight='bold';
secondChild.nextElementSibling.style.color = 'brown';

const firstChild = document.querySelector('.child');
firstChild.nextElementSibling.style.color = 'yellow'

//DOM Node relationship works with all nodes while DOM element relationship works with elements only 
let display;
//select the parent
const parentz = document.querySelector('.parentz');

console.log(parentz.childNodes);
console.log(parentz.childNodes[0].textContent);
console.log(parentz.childNodes[0].nodeName);
console.log(parentz.childNodes[3].nodeName);
console.log(parentz.childNodes[3].innerHTML);
console.log(parentz.childNodes[5].outerHTML);

parentz.childNodes[7].innerText = 'Child Three';
parentz.childNodes[3].style.color = 'red';
parentz.childNodes[3].style.backgroundColor = 'yellow';
parentz.childNodes[7].style.backgroundColor = 'Green';
parentz.childNodes[3].innerHTML = 'Child One';
parentz.childNodes[5].innerHTML = 'Child Two';

console.log(parentz.firstChild);
console.log(parentz.lastChild);

parentz.lastChild.textContent = 'Hello';

//parent node from the child - both methods work 
 
const paren = document.querySelector('.childz');
console.log(paren.parentNode);
console.log(paren.parentElement);

paren.parentNode.style.backgroundColor = 'blue';

//siblings
const SecondItem = document.querySelector('.child:nth-child(2)');
output = SecondItem;
console.log(SecondItem);

console.log(SecondItem.nextSibling);
console.log(SecondItem.previousSibling);

//creating elements 
const div = document.createElement('div');
div.className = 'my-Element';
div.id = 'my-id';
div.setAttribute('title', 'myelement')

//div.innerText = 'Hello World'; //note that innerText is ideally used for changing an existing text. The best 
// way to create a new text is by using createTextNode

//div.createTextNode = 'Hello World'; - for demo reason this wont work

const text = document.createTextNode('Hello World');
div.appendChild(text);

//to dictate where your newly created element will appear and be seen by the client
/*document.body.appendChild(div);*/

document.querySelector('.parentz').appendChild(div)
console.log(div);

//adding new list items  
function createListItems(item) {
    const li = document.createElement("li");

    const goods = document.createTextNode(item);
    li.appendChild(goods);
    document.querySelector('.items').appendChild(li);
}

createListItems('eggs');
//quick way
/*function createListItems(item) {
    const li = document.createElement("li");
    li.innerHTML = item;
    document.querySelector('.items').appendChild(li);
}*/

//alternative way for adding elements 
//insertadjacent elemet
function InsertElement () {
    const heading = document.querySelector('.list-items');
    const h2 = document.createElement('h2');
    h2.innerText = 'filter items';

    heading.insertAdjacentElement('beforebegin', h2);
    

}

InsertElement();

//using insertAdjacent(specify where you want it to appear, element you created)
//you specify by using "beforebegin" to put the element just rigt above/before the selected element
//afterend - at the end of the selected element 
//afterbegin - after the begining of the selected element
//beforeend - before the end of the selected element (last child) it works similar to appendChild

//insertAdjacentText

function insertText () {
    const text = document.querySelector('.item');

    text.insertAdjacentText("afterend", 'addedthisadjascenttext')
}

insertText();

//adjacentHTML

function insertHtml () {
    const btn = document.querySelector('.btn');
    btn.insertAdjacentHTML('beforebegin', '<h1>Inserted an adjacent HTML </h1>');
}

insertHtml();

//insertBefore

function insertBeforeItem () {
   const ul = document.querySelector('ul');
   
   const li = document.createElement('li');
   li.textContent = 'Brocolli';

   //the item you want to replace
   const thirdItemz = document.querySelector('li:nth-child(3)');

   ul.insertBefore(li, thirdItemz);



}

insertBeforeItem();

//replacing elements
function replaceFirstItem () {
    const firstItem = document.getElementById('itemOne');

    const newItem = document.createElement('li');
    newItem.innerHTML = "Replaced item";

    firstItem.replaceWith(newItem);
}

replaceFirstItem();

function replaceSecondItem() {
    //selecting the second list element using querySelectorAll
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li> My second item replacement </li>' ;
}

replaceSecondItem();

function replaceall () {
    const itemsList = Array.from(document.querySelectorAll("li"));

    /*itemsList.forEach((item, index) => {
        if (index === 1) {
            //my list index is messed up since i had another list item 
            item.innerHTML = 'second item';
            } 
            else{
             item.textContent = 'replacements'   
            }
        
    })*/

    itemsList.forEach((item, index) => item.innerHTML = index === 1 ? 'second item' : 'replacements')
}

replaceall();

//replace child
function replacechildren () {
    //select the parent and the child you want to replace
    const listItemz = document.querySelector('.items').children[0];
    
    
    //create the replacement text node
    const newNode = document.createTextNode('Cadbury');

    //replace the old text node
    listItemz.replaceChild(newNode, listItemz.childNodes[0]);


}

replacechildren();

//const matriach = document.querySelector('.items');
//output = matriach.childNodes[0];
//console.log(output)


function replacingChild () {
    //select the parent and child you want to replace
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    //create the new replacement element 
    const h3 = document.createElement('h3');
    //h3.id ='app-title';
    h3.textContent ='Welcome!';

    //replace the old 
    header.replaceChild(h3, h1);


}

replacingChild();

//remove 

function removeButton () {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
}

removeButton();

//removechild 

function removeSecondChild () {
    //select the parent and child you want to remove
    const parent = document.querySelector('.tie');
    const secondChild = document.querySelector('li:nth-child(2)');

    parent.removeChild(secondChild);

}

removeSecondChild()

//the above didnt work due to conflicting list items 