//console.log('Hello world!')
/*'use strict'
console.log('учим')
console.log('JS')
//запись в одну строку выдает в консолe ошибку
//после каждой инструкции ставить точку с запятой, поможет избежать ошибок
// инструкции в JS могут состоять из ; значение, операторы, выражения, ключевые слова, комментарии

// значение переменной можно сменить походу написания кода
// можно передать одно значение переменной в другую
let myAge = 25
let myNewAge = 18
myAge = myNewAge
console.log(myAge)

//var переменную можно использовать еще до ее обявления ключевым словом var

let user = 'Tatyana'
let userName = 'Vasil'
user = userName
console.log(userName)*/

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ тип данных меняется когда присваеваем значение

/*
let userName //обявляем переменную

console.log(typeof userName)

userName = 'Tanya' //string (строка)

console.log(typeof userName)

userName = 30 // number (число)
console.log(typeof userName)
*/

//UNDERFINED - неопределенный тип
//let userName // обявляем переменную ----
//получаем тип данных
//console.log(typeof userName)
// получаем значение переменной
//console.log(userName)
//ИМЕЕТ ТОЛЬКО ОДИН ТИП ДАННЫХ ИСПОЛЬЗУЕТСЯ ЧТО БЫ ПРОВЕРИТЬ БЫЛАЛИ ОПРЕДЕЛЕНА ПЕРЕМЕННАЯ

//NULL- содержит только одно значние null
//значение определяющее пустое место не путать с UNDERFINED тотому что переменная определена

/*let userName = null
console.log(userName)
*/

//BOOLEAN - логический тип может принемать только два значения: истина (true) или ложь (false)

/*let willYouMarryMe = false
if (willYouMarryMe) {
  console.log(':)')
} else {
  console.log(':(')
}
*/
// МОЖНО ИСПОЛЬЗОВАТЬ С ОПЕРАТОРАМИ СРАВНЕНИЯ
//let trueOrFalse = 60 < 20
//console.log(trueOrFalse)
// получаем False

// ОПЕРАНДЫ
//ОПЕРАНД - то к чему прикрепляется оператор аргумент)
// УНАРНЫЕ БИНАРНЫЕ
/*let userAge = 30 - 6; // числа это операнды 
 let userHeight = h - y // переменные - это операнды */

//БИНАРНЫЕ - ОПЕРАТОРЫ КОТОРЫЕ ПРИМЕНЯЮТСЯ К ДВУМ ОПЕРАНДАМ
// УНАРНЫЕ- ОПЕРАТОРЫ КОТОРЫЕ ПРИМЕНЯЮТСЯ К ОДНОМУ ОПЕРАНДУ
/*let x
x = 10 + 5
console.log(`результат сложения: ${x}`)
x = 20 - 10
console.log(`результат вычетания: ${x}`)
let resultOne = 'Tatyana' + ' ' + 'Savchuk'
console.log(resultOne)

//ИНКРИМЕНТ И ДИКРИМЕНТ - УВЕЛИЧИВАЕТ И УМЕНЬШАЕТ ЗНАЧЕНИЕ ЧИСЛА НА ЕДИНИЦУ
let addUser = 2
addUser++
console.log(addUser)

let userName = ''
let userNickName = 'Savchuk'

let user = userName || userNickName || 'без имени'
console.log(user)

let admins = 0
let users = 5
admins > users || users++
console.log(users)*/

//console.log(true && true)

//ЦЫКЛ
//let num = 0

/*while (num < 5) {
  console.log(num)
  num++
}*/

/*for (let num = 0; num < 5; num++) {
  console.log(num)
  if (num == 2) break
}
console.log(`работа окончена, num = ${num}`)*/
/*for (; num < 5; num++) {
  if (num == 2) continue
  console.log(num)
}*/
/*firstFor: for (let num = 0; num < 2; num++) {
  for (let size = 0; size < 3; size++) {
    if (size == 2) {
      break firstFor
    }
    console.log(size)
  }
}*/

//ПОЛУЧАЕМ ОБЕКТ body

//const bodyElement = document.body

//ПЕРВЫЕ И ПОСЛЕДНИЕ ДОЧЕРНИЕ ЭЛЕМЕНТЫ
//const firstChildNode = bodyElement.firstChild
//const lastChildNode = bodyElement.lastChild

//console.log(firstChildNode)
//console.log(lastChildNode)

// коллекция childNodes содержит список всех детей включая текстовые узлы
//const childNodes = bodyElement.childNodes
//console.log(childNodes)

// для проверки наличия дочерних узлов существует спец функция hasChildNodes()
//console.log(bodyElement.hasChildNodes())

//перебор колекции
/*for (let node of childNodes) {
  console.log(node) //покажет все узлы из коллекции
}*/

// ПОЛУЧАЕМ КОЛЛЕКЦИЮ ВСЕХ ДОЧЕРНИХ ЭЛЕМЕНТОВ
//const bodyChildren = bodyElement.children
//console.log(bodyChildren)

//СОДЕРЖИМОЕ ЭЛЕМЕНТА InnerHTML
// ПОЛУЧАЕМ ОБЪЕКТ
//const textElement = document.querySelector('.lesson__text')

//const textElementContent = textElement.innerHTML
//console.log(textElementContent)

//ПЕРЕЗАПИСЫВАЕМ СОДЕРЖИМОЕ ОБЪЕКТА
//textElement.innerHTML = `верю что все получится `

// Дописываем содержимое обекта
//textElement.innerHTML = `<p>${textElementContent}</p>  <p> верю что все получится </p>`
//console.log(textElement.innerHTML)

//const textElementContent = textElement.outerHTML
//console.log(textElementContent)
// можно изменить объект в элементе, но получить аутер данного обекта, то получим старую оригинальную запись
//const textElementContent = textElement.textContent
//console.log(textElementContent)

/*const textElement = document.querySelector('.lesson__text')
const getComment = textElement.nextSibling
console.log(getComment)
console.log(getComment.data)
getComment.data = 'привет саня'
console.log(getComment.data)*/

//ИЗМЕНЕНИЕ ДОКУМЕНТА ---- СОЗДАНИЕ НОВОГО ЭЛЕМЕНТА (ТЕГА)
/*const textElement = document.querySelector('.lesson__text')
const newElement = document.createElement('div')

newElement.innerHTML = `<p> вижу свет в конце <span class=c-red>тунеля </span></p>`
console.log(newElement)
const newText = document.createTextNode('HELLO')
console.log(newText)*/

// МЕТОДЫ ВСТАВКИ ОБЕКТА В ДОКУМЕНТ
/* ---- вставить элемент перед объектом 
     textElement.before(newElement)*/
/* ----- втавить элемент после
textElement.after(newElement)*/
/* ----- вставить внутри и в начале
textElement.prepend(newElement)*/
/* ----- вставить внутри и в конце объекта
textElement.append(newElement)*/

/*const textElement = document.querySelector('.lesson__text')
textElement.insertAdjacentHTML(
  'afterend',
  `<p> вижу свет в конце <span class=c-red>тунеля </span></p>`
)*/

//ПЕРЕНОС ОБЕКТА
/*const lessonBlock = document.querySelector('.lesson')
const title = document.querySelector('h3')
lessonBlock.append(title)*/

//КЛОННИРУЕМ ОБЕКТ

/*const textElement = document.querySelector('.lesson__text')
const cloneTextElement = textElement.cloneNode(true)

const lessonBlock = document.querySelector('.lesson')
lessonBlock.append(cloneTextElement)*/

//const element = document.querySelector('.lesson__text')
//element.style.color = 'red'
//element.style.fontSize = ' 30px'
//console.log(element.style.fontSize)
//element.style.cssText = `
//font-size: 30px;
//color: red;
//`
/*const elementStyle = getComputedStyle(element)
console.log(elementStyle.fontSize)

const elementBeforeStyle = getComputedStyle(element, '::before')
console.log(elementBeforeStyle.background)
*/

// ---ЗАДАЧА 1
// ПОЛУЧИТЬ В ПЕРЕМЕННУЮ ЭЛЕМЕНТ С АТРИБУТОМ data-say-hi И ПРОЧИТАТЬ ЗНАЧЕНИЕ ЭТОГО АРТИБУТА
/*let dataSayHi = 'привет!'
console.log(dataSayHi)

// ---ЗАДАЧА 2
// ПОЛУЧИТЬ В ПЕРЕМЕННУЮ ЭЛЕМЕНТ С ТЕКСТОМ йончи
let listItem = 'Йончи'
console.log(listItem)

// ---ЗАДАЧА 3
// ПОЛУЧИТЬ В ПЕРЕМЕННУЮ КОЛЕКЦИЮ ЭЛЕМЕНТОВ С КЛАССОМ like

function showMessege() {
  console.log('сообщение')
}

showMessege()

function getSumm() {
  let numOne, numTwo
  function getNumOne() {
    numOne = 5
  }
  function getNumTwo() {
    numTwo = 10
  }
  getNumOne()
  getNumTwo()
  let numSumm = numOne + numTwo
  console.log(numSumm)
}

getSumm()

function getSumm1(numOne, numTwo) {
  console.log(numOne + numTwo)
}

getSumm1(5, 10)

//========================================1

function getSumm2(numOne, numTwo) {
  console.log(numOne + numTwo)
}

getSumm2(5, 101)

//========================================2

const getSumm3 = (numOne, numTwo) => {
  console.log(numOne + ' ' + numTwo)
}

getSumm3(5, 101)

//========================================2

const getSumm4 = (numOne, numTwo) => {
  return numOne + ' ' + numTwo
}

console.log(getSumm4(5, 101))

//========================================2

let a = 'hello'
console.log('a: ', a)
const getSumm5 = (name) => {
  a = 'hello ' + name
}
getSumm5('Tania')
console.log('a: ', a)

console.log(document.getElementsByClassName('counter').length)

class MyCollection {
  array = undefined
  constructor(array) {
    if (Array.isArray(array)) {
      this.array = array
    } else {
      throw Error('array is not type of Array')
    }
  }
  getLength() {
    if (this.array !== undefined) return this.array.length
    else throw Error('array is not type of Array')
  }
}

let arr = new MyCollection(['dsdsds'])
console.log('arr.getLength(): ', arr.getLength())*/

//    ===========================================
/*let arrOne = ['Ivan', 'Nadya', 'kolya']
// РАЗЛИЧНЫЕ ТИПЫ ЗНАЧЕНИЙ МАССИВОВ
let arrTwo = [
  'Tanya', //------ строка
  {
    // ------- щбъект с элементами
    type: 'JS',
    age: 25,
  },
  true, // --------- булевый тип
  function () {
    // ------- функция
    console.log('hi, i am Tanya')
  },
]
console.log(arrTwo)
console.log(arrTwo[1])
arrTwo[3]()

// МНОГОМЕРНЫЕ МАССИВЫ
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log(matrix)
console.log(matrix[1][2])

// ПОЛУЧЕНИЕ ЗНАЧЕНИЯ
let arrOne1 = [
  'Ivan', // 0я позиция
  'Nadya', // 1я позиция
  'kolya', // 2я позиция
]
console.log(arrOne1[2])
console.log(arrOne1[0])

let arrOne2 = ['Ivan', 'Nadya', 'kolya']
console.log(arrOne2)
console.log(arrOne2.length)

let arrOne3 = ['Ivan', 'Nadya', 'kolya']
console.log(arrOne3)
let arrOne3New = arrOne3
arrOne3New.length = 1
console.log(arrOne3)

// ====== изменить значение
let arrOne4 = ['Ivan', 'Nadya', 'kolya']
console.log(arrOne4)
// меняем существующее значение
arrOne4[1] = 'vasya'
console.log(arrOne4)

// добавить значение
let arrOne5 = ['Ivan', 'Nadya', 'kolya']
console.log(arrOne5)
arrOne5[3] = 'Sveta'
console.log(arrOne5)

//МЕТОДИ МАСИВОВ

//метод ---push----- добавляет элемент в конце массива

let arrOne6 = ['Ivan', 'Nadya', 'kolya']
arrOne6.push('Kiss')
console.log(arrOne6)

//метод ----shift---- удаляет элемент в начале, смещая элементы

let arrOne7 = ['Ivan', 'Nadya', 'kolya']
arrOne6.shift()
console.log(arrOne7)

//метод ----pop---- удаляет элемент в конце массива
let arrOne8 = ['Ivan', 'Nadya', 'kolya']
arrOne8.pop()
console.log(arrOne8)

// метод ----unshift--- добавляет элементы в начало массива
let arrOne9 = ['Ivan', 'Nadya', 'kolya']
arrOne9.unshift('Kiss', 'fuu')
console.log(arrOne9)

//удаление/добавление/изменение конкретных элементов
let arrTwo1 = ['Ivan', 'Nadya', 'kolya']
delete arrTwo1[1]
console.log(arrTwo1)

//удалить элемент

let arrTwo2 = ['Ivan', 'Nadya', 'kolya']
arrTwo2.splice(1, 2)
console.log(arrTwo2)
// возвращаем в переменную
let arrTwo3 = ['Ivan', 'Nadya', 'kolya']
let removed = arrTwo3.splice(1, 2)
console.log(removed)
// замена єлемена
let arrTwo4 = ['Ivan', 'Nadya', 'kolya']
arrTwo4.splice(0, 1, 'Gena')
console.log(arrTwo4)

// добавление элемента
let arrThree = ['Ivan', 'Nadya', 'kolya']
arrThree.splice(1, 0, 'jfhghv', 'ufghhv')
console.log(arrThree)

//удаляем элемент с конца
let arrThree1 = ['Ivan', 'Nadya', 'kolya']
arrThree1.splice(-1, 1)
console.log(arrThree1)
*/
// метод slice.
// создаем новый масим и копируем в него часть или весь нужный нам масив
// синтаксис arr.slice([start], [end]) не включая [end]
/*let arrThree3 = ['Ivan', 'Nadya', 'kolya']
console.log(arrThree3.slice(1, 2))

let arrThree2 = ['Ivan', 'Nadya', 'kolya']
let arrThree2New = arrThree2.slice(-2, -1)
console.log(arrThree2New)

const beasts = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log('beasts: ', beasts)

//======================== ПОИСК В МАСИВЕ =================
console.log('======================== indexOf ======================')
const beasts1 = ['ant', 'bison', 'camel', 'duck', 'elephant']
//indexOf
console.log(beasts1.indexOf('bison'))
console.log(beasts1.indexOf('ghbdt'))
console.log(beasts1.indexOf('huij', 1))

if (beasts1.indexOf('bison') > -1) {
  console.log('bison в массиве')
}*/

//includes
//console.log('======================== includes ======================')
//console.log(beasts1.includes('bison'))
///=====================Циклы
// for
// filter
// map
// forEach
/*console.log('======================== for ======================')
// for (let i = 0; beasts.length > i; i++) {
//   console.log(beasts[i])
// }
let arrThree4 = [
  {name: 'Ivan', age: 20},
  {name: 'Nadya', age: 18},
  {name: 'kolya', age: 13},
]
let resultOne = arrThree4.filter(function (item, index, array) {
  return item.age >= 18
})
console.log(resultOne)

// =======reverse=====

let beasts2 = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(beasts2.reverse())
let beasts3 = ['ant', 'bison', 'camel', 'duck', 'elephant']
let result = beasts3.map(function (item, index, array) {
  return item[3]
})*/

//======split====================
// преобразовует строку в масив
/*console.log(result)
let str = 'ant, bison, camel'
let beasts4 = str.split(',')
console.log(beasts4)
//можно ограничить количество обектов которые попадут в масив

let str1 = 'ant, bison, camel'
let beasts5 = str1.split(',', 2)
console.log(beasts5)
//=======join================
// приобразовует масив в строку
let beasts6 = ['ant', 'bison', 'camel', 'duck', 'elephant']
let str2 = beasts6.join(',')
console.log(str2)*/

/*//--------------- ПРОВЕРКА ЯВЛЯЕТСЯ ЛИ ОБЕКТ МАССИВОМ -------------------
let obj = {}
let arr = []
if (Array.isArray(arr)) {
  console.log('это массив!')
} else {
  console.log('это не массив!')
}

//=============ПЕРЕБОР ЭЛЕМЕНТОВ============
console.log('//=============ЦИКЛ FOR======================')

let beasts7 = ['ant', 'bison', 'camel', 'duck', 'elephant']
for (let i = 0; i < beasts7.length; i++) {
  console.log(beasts7[i])
}

console.log('//=============ЦИКЛ FOR IN======================')
const object = {a: 1, b: 2, c: 3}

for (const property in object) {
  console.log(`${property}: ${object[property]}`)
}
console.log('//=============ЦИКЛ FOR OF======================')
let beasts8 = ['ant', 'bison', 'camel', 'duck', 'elephant']
for (let beasts8Item of beasts8) {
  console.log(beasts8Item)
}
*/
/*let animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
for (let animalsItem of animals) {
  console.log(animalsItem)
}*/

//===========================Достать данные с сервера и отобразить на странице=========
// var res
// var userListData = ''
// const fetchData = async () => {
//   try {
//     res = await fetch('https://random-data-api.com/api/users/random_user?size=3')
//     res = await res.json()
//     for (let i = 0; i < res.length; i++) {
//       userListData += `<li id="korchi">
//         Full name: ${res[i].first_name} ${res[i].last_name} <br>
//         City: ${res[i].address.city}
//       </li>`
//     }
//     document.getElementById('users').innerHTML = userListData
//   } catch (e) {
//     console.error(e)
//   }
// }
// fetchData()
//===========================/Достать данные с сервера и отобразить на странице=========
/*console.log('//=============ЦИКЛ ForEach======================')
let beasts9 = ['ant', 'bison', 'camel', 'duck', 'elephant']
beasts9.forEach((item, index, array) => {
  console.log(`${item} находится на ${index} позиции в ${array}`)
})
console.log('//=============МЕТОД REDUCE====================== 1')
let one = [1, 2, 3, 4, 5]
let reduceResult = one.reduce(function (previousValue, item, index, array) {
  return item + previousValue
}, 0)
console.log(reduceResult)

console.log('//=============МЕТОД REDUCE====================== 2')
const array1 = [1, 2, 3, 4]
// 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
)
*/
/*console.log('========задача1========')
let one = ['Ваня', 'Иштван', 'Оля']
let newOne = one
newOne.push('Петя')
console.log(one.length)
console.log('========задача2========')
let users = ['Ваня', 'Иштван']
users.push('Оля')
console.log(users)
users[1] = 'Петя'
console.log(users)
let shiftedUser = users.shift()
console.log(users)
console.log(shiftedUser)
users.unshift('Маша', 'Паша')
console.log(users)

console.log('========задача3========удаление')
let arr = ['Ваня', 'Иштван', 'Оля']
console.log('arr: ', arr)
removed = arr.splice(1, 2)
console.log('arr: ', arr)
console.log('removed: ', removed)
console.log('========задача3========возврат')
arr.splice(1, 0, ...removed)
console.log('arr: ', arr) 

console.log('========задача3========Spread operator')
//...removed
console.log('========задача4========')
let str = 'Ваня, Иштван, Оля '
let strArr = str.split(',')
console.log(strArr)

console.log('========задача5========')
let arrOne1 = [9, 2, 8]

let reduceResult = arrOne1.reduce(function (previousValue, item, index, array) {
  return item + previousValue
}, 0)
console.log(reduceResult)*/
/*function showMessege() {
  console.log('messege!')
}

showMessege()*/
/*const button = document.querySelector('.button')
button.onclick = function () {
  console.log('клик!')
}
*/
/*const button = document.querySelector('.button')
function showConsole() {
  console.log('клик!')
}
button.onclick = showConsole
*/

const people = [
  {name: 'Ivan', age: 20, budget: 40000},
  {name: 'Vasya', age: 30, budget: 70000},
  {name: 'Katya', age: 18, budget: 20000},
  {name: 'Tanya', age: 40, budget: 20000},
  {name: 'Petya', age: 34, budget: 50000},
]
for (let i = 0; i < people.length; i++) {
  console.log(people[i])
}
people.forEach(function (person, index, pArr) {
  console.log(person)
})
people.forEach((person) => console.log(person))
