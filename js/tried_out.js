// var task = document.getElementById('todotask');
// console.log(task);

// var task1 = document.getElementsByTagName('li');
// console.log(task1);
//---------------------------------------------------
//----------------------------------------------------

// let content = document.getElementById
// var task2 = document.getElementById('kuma');
// console.log(task2);

// let task5 = document.getElementById('todotask');

// function changeText() {
//     let task3 = document.getElementById('kuma');
//     task3.value = 'First change in text';
// }
// task5.onclick = changeText;
//---------------------------------------------------
let task4 = document.getElementById('todotask');
let ullist = document.getElementById('ullist');
let feed = document.getElementById('feedback');
let inside_content = [];
let task = '';

console.log("from start line");
console.log(inside_content);
console.log(ullist);
console.log(ullist.value);
console.log(ullist.textContent);
console.log(ullist.innerHTML);

function checkUsername() {
    if (task4.value == "") {
        feed.textContent = "Empty Task! Please mention task";
    }
    else {
        storeValue();
    }
}

function removeAlert() {
    feed.textContent = "";
}

function storeValue() {
    console.log("from storevalue");
    inside_content.push(task4.value);
    console.log(inside_content);
    console.log(task4.value);
    task = task4.value;
    console.log(task);
    task4.value = "";
    // addTask();
    printValue();
}

// function addTask() {
//     console.log("from addtask");
//     let pointer = inside_content.length;
//     console.log(pointer);
//     console.log(inside_content[pointer]);
//     pointer = pointer - 1;
//     console.log(pointer);
//     console.log(inside_content[pointer]);
//     printValue();
// }

function printValue() {
    console.log("from printvalue");
    if (inside_content.length == 1) {
        ullist.innerHTML = '<li class="list-group-item">' + task + '</li>';
        console.log("from printvalue1");
    } else {
        ullist.innerHTML += '<li class="list-group-item">' + task + '</li>';
        console.log("from printvalue2");
    }
    
}

task6 = document.getElementById('huhu');
task6.onclick = checkUsername;

task6.onblur = removeAlert;


// const fom = document.getElementById('opo');

// function logSubmit(event) {
//     let fieldd = document.getElementById('fldd');
//     console.log(fieldd.value);
//     log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//     event.preventDefault();
//   }
  
//   const form = document.getElementById('form');
//   const log = document.getElementById('log');
//   form.addEventListener('submit', logSubmit);

