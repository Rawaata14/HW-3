// //Task#5
// const fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(1, 1, "blueberry", "blackberry");
// alert(fruits);

// //Task#6
// const colors = ["red", "orange", "yellow", "green", "blue"];
// colors.splice(-2);
// colors.splice(0, 1);
// alert(colors);

// //Task#7
// const animals1 = ["cat", "dog"];
// const animals2 = ["lion", "tiger"];
// let animals3 = animals1.concat(animals2);
// alert(animals3);

// //Task#8
// const numbers = [7, 3, 9, 1, 5];
// numbers.sort(function (a, b) {
//     return a - b;
// });
// alert(numbers);

// //Task#9
// const letters = ["a", "b", "c", "d"];
// alert(letters.reverse());

// //Task#10
// const sentence = "JavaScript is awesome";
// let arr = sentence.split(' ');
// alert(arr);

// //Task#11
// const words = ["Hello", "world"];
// let sentence = words.join(' ');
// alert(sentence);

// //Task#14
// const students = ["דני", "נועה", "רן", "תמר"];
// students.forEach(function (elem) {
//     alert("שלום, " + elem + "! בהצלחה במבחן!");
// });

//Task#15
const pricesILS = [100, 250, 75, 320];
let priceDolar = pricesILS.map(function (elem) {
    return elem / 3.5;
});
alert(priceDolar);
