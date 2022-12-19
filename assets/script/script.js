let bttn = document.querySelector('bttn')
let btn1 = document.getElementById('1')
let btn2 = document.getElementById('2')
let btn3 = document.getElementById('3')
let btn4 = document.getElementById('4')
let btn5 = document.getElementById('5')
let btn6 = document.getElementById('6')
let btn7 = document.getElementById('7')
let btn8 = document.getElementById('8')
let btn9 = document.getElementById('9')
let array = [1, 2, 3, 6, 9, 8, 7, 4]

btn5.onclick = function clockwise1() {
    clockwise()
    paint()
}

bttn.onclick = function anticlockwise1() {
  anticlockwise()
  paint()
}


function clockwise() {
  btn5 = array.pop()
  array.unshift(btn5)
}

function anticlockwise() {
  bttn = array.unshift()
  array.push(bttn)
}

function paint() {
  btn1.innerHTML = array[0]
  btn2.innerHTML = array[1]
  btn3.innerHTML = array[2]
  btn4.innerHTML = array[7]
  btn6.innerHTML = array[3]
  btn7.innerHTML = array[6]
  btn8.innerHTML = array[5]
  btn9.innerHTML = array[4]
}

/* function swapp() {
  btn1.innerHTML = arr[0]
  btn2.innerHTML = arr[7]
  btn3.innerHTML = arr[6]
  btn4.innerHTML = arr[1]
  btn6.innerHTML = arr[5]
  btn7.innerHTML = arr[2]
  btn8.innerHTML = arr[3]
  btn9.innerHTML = arr[4]
} */