
'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received ${this.mainMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // У пасты будут 3 обязательных ингридиента
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //Напишем метод заказа пиццы с помощью оператора rest 
  //Для нашей пиццы должен быть 1 обязательный ингридиент, а остальные опциональные 
  orderPizza: function (mainIngrideinet, ...otherIngridients) {
    console.log(mainIngrideinet);
    console.log(otherIngridients);
  },


// Попробовать саммому 
  orderPizzaStr: function (mainIngrideinet, ...otherIngridients) {
console.log(`Main ingridient ${mainIngrideinet}; Others ingtiditnrs ${otherIngridients}`);
  },

};

const mainIng = prompt('Главный ингридиент');
const ootherIng  = [prompt('Напишите остальные ингридиенты ')];

restaurant.orderPizzaStr(mainIng,ootherIng);

restaurant.orderDelivery({
  address: 'Via del solo, 21',
  startIndex: 2.
})


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del solo, 21',
  mainIndex: 2,
  startIndex: 2.
})

restaurant.orderPizza('Mushroom', 'onion', 'olives', 'spinach'); // Мы увидием отдельны ингридиент Грибы, и остальные в массиве 
restaurant.orderPizza('mushroom'); //Теперь вывдится грибы и еще пустой массив(так как нет больше знаений которые мы могли бы положить в него )
// Так мы можем использовать логику и создать строку, основанную на всех этих ингридиентах
restaurant.orderPizza



// Spread operator

//Spread syntax
//Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах
//для функций: где ожидаемое количество аргументов для вызовов функций равно нулю или больше нуля
//для элементов (литералов массива)
//для выражений объектов: в местах, где количество пар "ключ-значение" должно быть равно нулю или больше (для объектных литералов)
//

//  Мы можем использовать Spread operator чтобы действительно расширить массив для всех элементов. Таким образом, в основном распаковывая все элементы массива в один

// Для примера у нас есть массив И мы хотим создать новый массив основанный на этом массиве. Но с некоторыми новыми элементами в начале. 
const arr1 = [7, 8, 9];

// Мы могли бы создать цикл по всему массиву или хуже задать их в ручнуюю Для примера как ниже
const badNewArr1 = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr1); // Масив из 5 чисел [1,2,7,8,9] C 3мя старыми элементами и с 2мя новыми 

// Но начиная с ES6 у нас есть более лучший путь это сделать использовать spread operator. Так с оператором spread это будет работать так. Создадим новый массив 
const newArr1 = [1, 2, ...arr1]; // в начале добавим новые элементы 1, 2 а затем добавляем элементы из старрого массива с поомщью оператора spread ...arr
console.log(newArr1); // Выведется новые элементы которые мы вписали 1,2 и элементы из старого массива ...arr с помощью оператора сперд которым мы расширили массив для всех этих элементов

//Spread оператор делает то, что в основном берет все значения из arr массива и вписывает их индивидуально, так как если бы мы вписыали 7, 8, 9 вручную. Если бы мы не использовали этот оператор то тогда мы получили бы другой массив внутри массива было бы так([1,2,[7,8,9]])
// Потому что мы бы положили целый массив в массив

//Но с оператором spread мы берез все элементы из arr и вписываем их в новый массив, как делали бы это вручную поэтому мы получаем [1,2,7,8,9]

// Это означает что мы можем использовать оператор spread всякий раз, когда мы иначе написали бы несколько значений разделенных запятой(commas)
// И если эта ситуация соучается, вский раз когда мы пишем массив , как сделали выше const arr = [7, 8, 9];
// Но это первая ситуация в которой очень полезно расширить массив 



// И вторая ситуация это когда мы передаем аргументы в функцию 
// Но если мы используем просто sprea оператор? xnj vs hfcibhbnm newArr, тогда мы получим  индивидуальные элементы массива, как индивидуальные элементы массива 
console.log(...newArr1); // 1 2 7 8 9
// Это будет тоже самое что и ниже если бы мы просто вывели индивидуально 
console.log(1, 2, 7, 8, 9);

// То есть всякий раз когда нам нужны элементы массива индивидуально, тогда мы можем использовать spread оператор. И то очень полезно, когда мы пишем массив и когда нам нужно передать несколько элементов в функцию как мы сделали выше console.log(1,2,7,8,9);


// Посмотрим на более полезный пример 
// ейчас создадим массив с еще одним элементов food в main menu массиве(объекта restaurant)

//То есть создаем новое меню здесь 
const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Создали новый массив главное меню, в конец которого добавится 'Gnocci'
//То есть мы создали совершенно новый массив.  И мы не манипулируем с массивом restaurant.mainMenu. То есть мы создали новый массив с нуля и  мы можем видеть квадратные скобки, То есть этот синтак [квадратные скобки] здесь, это простой способ которым мы всегда прописываем новый массив
console.log(newMenu);

// TODO
// Spread оператор на самом деле немного похож на деструктуризацию(распаковку), потому что также помогат получить элементы из массива  
// Но большая разница в том что spread operator берет все элементы из массива ии также не создает новые переменные. И, как следсвие мы может только использовать в местах где мы можем в противном случае написать значения, разделенные запятами(commas)


//Изучим два важных случая(дела) использования spread оператора, который создает shellow (мелкую поверхностную) копию массива. И объеденение двух массивов вместе 

// Copy arrat
const mainMenuCopy = [...restaurant.mainMenu]; //Мы так просто создали поверхностную(shallow) копию этого массива 
// Это немного похоже с Object.assign, который мы использовали в прошлой секции. Но здессь синтаксис значительно проще использовать 

// Join two arrays togethe (merge arrays) ну или большее количество 
// Мы можем испольщовать такую же технику
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // Теперь мы полуили массив с полным меню из двух массивов

// Но spread оператор не всегда работает с массивами. Потому что spread оператор на самом деле работает со всеми so called iterables (все так называемые итерациями)

// ITERABLE - ЭТО 
//ОБЪЕКТ, предоставляющий возможность поочерёдного прохода по своим элементам.(такие как массивы, строки, maps, sets )

// Так есть разные iterables( ВЫШЕ ПОЯСНЕНИЕ ) в Js. И мы поговорим об всех них в конце курса
// Iterables - это вещи такие как массивы, строки, maps, sets 
// Таким образом, большинство встроенных структур данных в Js сейчас являются Iterables, кроме объектов 

// ITERABLES: ARRAYS, STRINGS, MAPS, SETS. NOT OBJECTS 
// Во всяком случае, поскольку строки также являются итерируемыми. Это значит что мы можем использовать spread оператор для строк , так же хорошо

const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters); // Получится массив ["J","o","n","a","s", " ", "S."]
// С индивидуальными элементами 
// Как мы и ожидали, так мы и распокавали массив. 

console.log(...str); // Получится отдельные значения(individual elements ) J o n a s
console.log('J', 'o', 'n', 'a', 's'); // Получится отдельные значения(individual elements ) J o n a s

// Но мы не сможем использовать этот оператор в Template string (``), так как это не место где ожидаются несколько значений разделенных запятой
// console.log(`${...str} Schmedtmann`); // Тут выведится ошибка unexpected tiken ...
// TODO
// Еще раз несколько переменных разделенных запятой, обычно ожидаются когда мы передаем аргументы в функцию или когда мы собираем(создаем) новый массив



//Real-world example
// Теперь напишем функцию которая применяет несколько аргументов и затм использовать spread оператор чтобы фактически передать эти аргументы
//Напишем как реальный пример метод  orderPasta
// Сделаем массив, в котором будут записаны данные с помощью метода prompt
const ingridiendts = [
  //prompt("Let's make a pasta! Ingridient 1?"),
  //prompt("Ingridient 2?"),
  //prompt("Ingridient 3?")
];
console.log(ingridiendts); // Выведется массив с 3мя эелементами,которые мы вели через prompt

// Выозов метода orderPasta
// По старому
restaurant.orderPasta(ingridiendts[0], ingridiendts[1], ingridiendts[2]);
// По новому с помощью spread оператора 
restaurant.orderPasta(...ingridiendts); // Here is your declicious pasta with mushrooms, aspargus, cheese





// Objects
// Начиная с 2018 spread оператор также работает и с объектами. Даже если объекты не являются ITERABLES
// Создадим новый объект 
const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);
// Получили новый объект с данными из старого по середине
// {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}


// Теперь сделаем shallow copy объектов используя spread оператор, как мы делали и с массиваи 
//Вместо использования Object.assign, как мы делали в прошлой лекции 
const restaurantCopy = {...restaurant}; // скопировали challow(поверхностну или мелко)
restaurantCopy.name = 'Ristorante Roma'; //  Изменили свойство у скопированного объекта 
// У них будут разные значения у свойств, что означает сто мы сделали копию restaurant. Потому что при простом изменении свойства у одного объекта, то оно бы изменилось у всех связанныхх с адресом
console.log(restaurantCopy.name); // Ristorante Roma
console.log(restaurant.name); // Classico Italiano






// Rest Pattern and Parametres (Rest - остальные )

// 1) Destructuring

// TODO Деструктуризация (destructuring assignment) – это особый синтаксис присваивания, при котором можно присвоить массив или объект сразу нескольким переменным, разбив его на части.
//TODO
// The rest pattern в основном собирает(коллекционирует) элементы, которые были не использованы в присваивании(=) распаковки(деструктуризации)
// При использовании оператора spread мы расширяли массив индивидуальными элементами. Rest оператор используют такой же синаксис. Однакоко чтобы собрать несколько элементов и поместить их в массив. Это противоположно  тому что мы делали в операторе spread 

// Rest - явный оператор и поэтому он должен быть в конце [a,b,...others]

// Спред оператор распаковывает массив. Когда rest пакует элементы в массив

// SPREAD BEACAUSE OF RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]]

// REST BECAUSE OF LEFT SIDE =
const [a, b, ...others] = [1, 2, 3, 4, 5]; // Называется rest потому что он ,берет rest (остальные) элементы  и ложит их в новый массв. Поэтому мы называем этот массив others
console.log(a, b, others); // Мы получили 1 и 2 отдельно. А остальные числа остались в массиве [3,4,5]. То есть получилось 1 2 [3, 4, 5]

// Теперь использует три точки на обоих сторонах оператора присваивания(=)
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risotto, otherFood); // Получили значения Pizza Rissoto( ЭТО БЫЛО БЫ 3 ЗНАЧЕНИЯ( ТОЕСТЬ ПОЛНОСТЬЮ ИЗ 1 ГО МАССИВА. 3 потому что был еще пропущенный , ' ',)) и массив ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'] из второго массива который полностью из элементов 
// То есть мы записали свои переменные и остальные взяли из расспакованных mainMenu и starterMenu

// Rest - явный оператор и поэтому он должен быть в конце поэтому У ОПЕРАТОРА ПРИСВАИВАНИЯ (=) МОЖЕТ БЫТЬ ТОЛЬКО 1 ОПЕРАТОР РЕСТ  

// Objects 

const {
  sat,
  ...weekdays
} = restaurant.openingHours; // Здесь мы извлекам объект sat полностью, а остальное запишит в отдельный созданный объект weekdays
console.log(weekdays); // {thu: {…}, fri: {…}}


// 2) Functions 
// Ипосльзуем rest паттерн в функциях, он будет еать противоположное, тому что делал spread оператор. Берем несколько индивидуальных значений и упаковываем их в один массив
// То есть когда мы используем spread оператор мы расширяем, а с оператором rest мы сжимаем 

// То есть благодаря Оператору rest  в качесте параметра мы можем передать несколько значений(чтобы объеденить их в массив)

// Поэтому (...numbers) называются rest аргументами 
const add = function (...numbers) {
  console.log(numbers);
};
add(2, 3); // Создаст массив [2,3] 
add(5, 3, 7, 2); // Создаст массив [5,3,7,2]
add(8, 2, 5, 3, 2, 1, 4); // Создаст массив [8,2,5,3,2,1,4]

const add2 = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add2(2, 3); // Покажет сумму элементов sum 5
add2(5, 3, 7, 2); // Покажет сумму элементов sum 17
add2(8, 2, 5, 3, 2, 1, 4); // Покажет сумму элементов sum 25

const x = [23, 5, 7];
add(...x);
// Используя rest pattern напишем метод 
