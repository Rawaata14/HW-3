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

// //Task#15
// const pricesILS = [100, 250, 75, 320];
// let priceDolar = pricesILS.map(function (elem) {
//     return elem / 3.5;
// });
// alert(priceDolar);

// //Task#16
// const users = [
//     { username: "Tom", isLoggedIn: true },
//     { username: "Jerry", isLoggedIn: false },
//     { username: "Spike", isLoggedIn: true }
// ];
// let res = users.filter(function (elem) {
//     if (elem.isLoggedIn)
//         return true;
// });
// console.log(res);

// //Task#17
// const products = [
//     { name: "Book", quantity: 3 },
//     { name: "Pen", quantity: 0 },
//     { name: "Notebook", quantity: 5 }
// ];
// let res = products.some(function (elem) {
//     return elem.quantity == 0;
// });
// console.log(res);

// //Task#18
// const grades = [72, 85, 90, 67, 58];
// let check = grades.every(function (elem) {
//     return (elem >= 60);
// });
// console.log(check);

//Task#19
const employees = [
    { name: "Sharon", salary: 9500 },
    { name: "David", salary: 7800 },
    { name: "Lior", salary: 12000 }
];
let res = employees.filter(function (elem) {
    if (elem.salary > 8000)
        return true;
});
res.forEach(function (elem) {
    console.log(elem.name.toUpperCase());
});
