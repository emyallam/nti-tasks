document.write(`<h1>front end</h1>`);
console.log("HELLO");
window.alert("say hello");


//values
var x = 10;
var c = "ALI";
var flag = true;
var z;
var f = null;
console.log(typeof x);
console.log(typeof c);
console.log(typeof flag);
console.log(typeof z);
console.log(typeof f);


//array
var array = [1, 2, 3, 4];
var array = ["ali", "eman"];
var array = ["ali", 4000, "eman", 8000];
console.log(array);
console.log(typeof array);

//obj

var obj = {
    name: "Ali",
    age: 2,
    gender: "man"
}
console.log(obj);
console.log(typeof obj);


//compare

var x = [];
var y = x;
console.log(x === y);


console.log(10 == "10");
console.log(10 === "10");



// session-12

// -----string----
var x = "Mohamed Ali Mohamed";

console.log(x.lenght);
console.log(x.at(3));
console.log(x.charAt(8));
console.log(x.indexOf("a"));
console.log(x.indexOf("Ali"));
console.log(x.indexOf("Alo"));
console.log(x.indexOf("Ali", 9));
console.log(x.indexOf("a", 9));


console.log(x.lastIndexOf("a"));
console.log(x.lastIndexOf("Ali"));
console.log(x.lastIndexOf("h"));
console.log(x.lastIndexOf("a", 8));
console.log(x.includes("Ali"));


//chain
console.log(x.toLowerCase());
console.log(x.toUpperCase());


//split
console.log(x.split());
console.log(x.split("A"));
console.log(x.split(" "));
console.log(x.split(""));

var res = x.split("", 5);
console.log(res.join());
console.log(res.join(" "));
console.log(res.join(""));
console.log(res.join("*"));

console.log(x.split("", 5).join());


//slice
console.log(x.slice());
console.log(x.slice(2));
console.log(x.slice(2, 9));
console.log(x.slice(-8));
console.log(x.slice(-8, -2));
console.log(x.slice(9, 2));
console.log(x.slice(-2, -8));
console.log(x.slice(1, length - 1));
console.log(x.slice(1, -1));



// -------Array-------

var array = [1, 2, 3, 4, 5, [50, 30, 40], 6, 7, 8];

console.log(array.lenght);
console.log(array[5]);
console.log(array.lenght);



//splice

// console.log(array.splice(0));
// console.log(array.splice(2));
console.log(array.splice(3, 1));
console.log(array.splice(3, 1, "ali", "eman"));
console.log(array.splice(2, 5));
console.log(array.splice(2, 5, "ali"));
console.log(array);



//functions

function say1() {
    console.log("object");
}
say1()


function say2(name) {
    console.log(name);

}
say2("Ali")


function say3(name) {
    return name;
}
var resurt = say3("eman");
console.log(resurt);


// function say4(){
//     console.log("object");
// }
// say4()


//self function
(function () {
    var x = 10;
    var y = 20;
    var z = 50;
    console.log(x);
    console.log(y);

    function c() {
        console.log("c");
    }
    c()
}
)();

console.log(z);


//dom
//1-select ele
//2-add event
//3-action==func

// var input = document.getElementById("input");
// var btn = document.getElementById("btn");

// btn.onclick = function () {
//     console.log(input.value);
// }



var container = [];
var curIndex = 0;     //to update
//to save data
if (localStorage.getItem("products")) {
    container = JSON.parse(localStorage.getItem("products"));
    disPros();

}
var proName = document.getElementById("ProName");
var proPrice = document.getElementById("ProPrice");
var proCategory = document.getElementById("ProCategory");
var proDesc = document.getElementById("ProDesc");
var btn = document.getElementById("btn");


btn.onclick = function (e) {
    if (btn.innerHTML == "Add Product") {
        addPro();
    } else {
        updatePro();
    }
    e.preventDefault();
};
function addPro() {
    var pro = {
        title: proName.value,
        price: proPrice.value,
        category: proCategory.value,
        desc: proDesc.value,

    };

    container.push(pro);
    console.log(container);
    // localStorage.removeItem();   //to remove item
    // localStorage.clear()         //to clear all data
    localStorage.setItem("products", JSON.stringify(container))    // to save data
    disPros();
}


function disPros() {
    var allPros = ``
    for (let i = 0; i < container.length; i++) {
        allPros += `
           <tr>
              <td>${i + 1}</td>
              <td>${container[i].title}</td>
              <td>${container[i].price}</td>
              <td>${container[i].category}</td>
              <td>${container[i].desc}</td>
              <td>
                <button onclick="delPro(${i})" class="btn btn-danger">del</button>
                <button onclick="updPro(${i})" class="btn btn-warning">upd</button>
              </td>
            </tr>
        `
    }
    document.getElementById('tbody').innerHTML = allPros
}


// to delet product
function delPro(index) {
    console.log(index);
    container.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(container))
    disPros();
    console.log(container);
}

// to update product

function updPro(index) {
    var pro = container[index];

    proName.value = pro.title;
    proPrice.value = pro.price;
    proCategory.value = pro.category;
    proDesc.value = pro.desc;

    btn.innerHTML = "update product";
    curIndex = index;
}



function updatePro() {
    var pro = {
        title: proName.value,
        price: proPrice.value,
        category: proCategory.value,
        desc: proDesc.value,

    };
    container[curIndex] = pro;
    localStorage.setItem("products", JSON.stringify(container));
    disPros();

}



//search

proSearch.onkeyup = function(){
    // console.log(proSearch.value);
    search(proSearch.value);
}

function search(term){
    var allPros = ``
    for (let i = 0; i < container.length; i++) {
        if (container[i].title.toLowerCase().includes(term.toLowerCase())) {
            allPros += `
           <tr>
              <td>${i + 1}</td>
              <td>${container[i].title}</td>
              <td>${container[i].price}</td>
              <td>${container[i].category}</td>
              <td>${container[i].desc}</td>
              <td>
                <button onclick="delPro(${i})" class="btn btn-danger">del</button>
                <button onclick="updPro(${i})" class="btn btn-warning">upd</button>
              </td>
            </tr>
        `;
        }
    }
    document.getElementById("tbody").innerHTML = allPros;

}



