let task4 = document.getElementById('todotask');
let ullist = document.getElementById('todolist');
let feed = document.getElementById('feedback');
let inside_content = [];
let task = '';

// console.log("from start line");
// console.log(inside_content);
// console.log(ullist);
// console.log(ullist.value);
// console.log(ullist.textContent);
// console.log(ullist.innerHTML);

function checkUsername() {
    if (task4.value == "") {
        feed.textContent = "Empty Task! Please mention task";
    } else {
        storeValue();
    }
}

function removeAlert() {
    feed.textContent = "";
}

function storeValue() {
    // console.log("from storevalue");
    inside_content.push(task4.value);
    // console.log(inside_content);
    // console.log(task4.value);
    task = task4.value;
    // console.log(task);
    task4.value = "";
    // addTask();
    displayValue();
}

function displayValue() {
    // console.log("from displayValue");
    if (inside_content.length == 1) {
        ullist.innerHTML = '<li class="list-group-item">' + task + '</li>';
        // console.log("from displayValue")
    } else {
        ullist.innerHTML += '<li class="list-group-item">' + task + '</li>';
        // console.log("from displayValue")
    }
    
}

addbtn = document.getElementById('addbutton');
addbtn.onclick = checkUsername;
addbtn.onblur = removeAlert;

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
