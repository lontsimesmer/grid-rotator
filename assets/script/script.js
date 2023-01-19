const button = document.querySelectorAll('.bttn')
const btn1 = document.getElementById('1')
const btn2 = document.getElementById('2')
const btn3 = document.getElementById('3')
const btn4 = document.getElementById('4')
const btn5 = document.getElementById('5')
const btn6 = document.getElementById('6')
const btn7 = document.getElementById('7')
const btn8 = document.getElementById('8')
const btn9 = document.getElementById('9')
const array = [1, 2, 3, 6, 9, 8, 7, 4]

btn5.onclick = function () {
  clockwise()
  swapp()
}
for (const i of button) {
  i.onclick = function () {
    anticlockwise()
    swapp()
  }
}

function clockwise () {
  const btn5 = array.pop()
  array.unshift(btn5)
}

function anticlockwise () {
  const swapp = array.shift()
  array.push(swapp)
}

function swapp () {
  btn1.innerHTML = array[0]
  btn2.innerHTML = array[1]
  btn3.innerHTML = array[2]
  btn4.innerHTML = array[7]
  btn6.innerHTML = array[3]
  btn7.innerHTML = array[6]
  btn8.innerHTML = array[5]
  btn9.innerHTML = array[4]
}
