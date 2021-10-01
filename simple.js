// function add(val1, val2) {
//     return val1 + parseInt(val2);
// }

// function concatstring(txt1, txt2) {
//     return `${txt1} ${txt2}`
// }

// // template literalls

// let string1 = "John";
// let string2 = "Smith";

// let num1 = 1;
// let num2 = "2";

// let sum = add(num1, num2);
// let concat = concatstring(string1, string2)
// console.log(sum);
// console.log(concat);

// let myObject = {
//     first: 1,
//     second: 2,
//     third: 3,
// };

// myObject["four"] = 4;
// myObject.five = 5;

// let accessname = "first";

// console.log(myObject);
// console.log(myObject.third);
// console.log(myObject["second"]);
// console.log(myObject[accessname]);
// console.log(myObject.hasOwnProperty("second"));
// console.log(myObject.hasOwnProperty("six"));
// console.log(myObject.six);

// // let app = document.querySelector('#app');

// // app.innerHTML = "Bye!";
// // app.classList.add("red");

// console.log(app);

// function makeRed() {
//     let app = document.querySelector('body');
//     app.classList.add("red");
// }

// let myArray = [1, 2, 3, 4];
// let result = myArray.pop();
// myArray.push(5);

// console.log(myArray);
// console.log(result);

// let obj = [{
//         name: "dog",
//         legs: 4,
//     },
//     {
//         name: "human",
//         legs: 2,
//     },
//     {
//         name: "spider",
//         legs: 8,
//     },
// ];

// function addKey(localObject) {
//     localObject.forEach(element => {
//         // console.log(element);
//         element.head = 1;
//     });
//     return localObject;
// };

// let resultadd = addKey(obj);

// console.log(resultadd);

// function less(localObject2, num) {
//     let array = [];
//     localObject2.forEach(element => {
//         // if (element.legs < num) {
//         //     array.push(element);
//         // }
//         element.legs < num ? array.push(element) : "";
//     });
//     return array;
// }

// //Ternary operator
// // condition ? true : false;

// let resultless = less(obj, 5);

// console.log(resultless);

// //Add a small button next to each section
// //Each button should be able to expand or collapse it's section
// //use javascript

// //email: sandeep@ramgolam.com

// alert();

// function add() {

//     let num1 = 1;
//     let num2 = 10;

//     let sum = num1 + num2;

//     console.log(sum);
// }

// setTimeout(add, 2000);

// //Anonymous function
// setTimeout(() => {
//     add();
// }, 5000);

function getData() {
    showLoadingScreen();
    const API_ENDPOINT = "https://pomber.github.io/covid19/timeseries.json";
    fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => latestmau(data))
        .catch((err) => errorHandler(err));
    setTimeout(() => {
        hideLoading()
    }, 1000);
}

function showLoadingScreen() {
    document.getElementById('content').style.display = "none";
}

function hideLoading() {
    document.getElementById('loads').style.display = "none";
    document.getElementById('content').style.display = "flex";
}

function processData(data) {
    //console.table(data)
    extractMauritiusData(data)
}

function errorHandler(err) {
    console.log(err)
}

function extractMauritiusData(data, country) {
    console.log(data[country])
}

//slice
function extractMauritiusData(data) {
    //console.table(data[country])
    let mau = data["Mauritius"];
    let latestmau = mau.slice(-1);
    console.log(latestmau);
}

function mau(data) {
    let mau = data["Mauritius"];
    console.log(mau[mau.length - 1]);
}

function latestmau(data) {
    let mau = data["Mauritius"].slice(-1);
    document.getElementById('confirmed').innerHTML = mau[0]['confirmed'];
    document.getElementById('recovered').innerHTML = mau[0]['recovered'];
    document.getElementById('deaths').innerHTML = mau[0]['deaths'];
}

getData();