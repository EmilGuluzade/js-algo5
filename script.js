//! 1. Array reduce vasitesi ile asagidaki arrayde nece neferin "Vote" etdiyini qaytarin. Meselen 4 neferde "voted:true " dursa return elesin 4.

// const voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];

// const vote = (arr) => {
//   let totalVoted = arr.reduce((total, currentVoter) => {
//     return currentVoter.voted==true ? total + 1 : total;
//   }, 0);

//   return `${totalVoted} people voted`;
// };

// console.log(vote(voters));

//! 2. Array reduce vasitesile asagidaki arrayin qiymetleri cemini qaytarin:

// let wishlist = [
// { title: "Tesla Model S", price: 90000 },
// { title: "4 carat diamond ring", price: 45000 },
// { title: "Fancy hacky Sack", price: 5 },
// { title: "Gold fidgit spinner", price: 2000 },
// { title: "A second Tesla Model S", price: 90000 }
// ];

// const sum = (arr) => {
//     let sum = arr.reduce((total, currentWish) => {
//       return total+=currentWish.price
//     }, 0);

//     return `price ${sum} `;
//   };

//   console.log(sum(wishlist));

//! 3. Daxil olunmuş stringdə ən uzun sözü tapan function yazin.

// const longestString = (string) => {
//   let newString = string.split(" ");
//   longestWord = newString[0];
//   for (let i = 1; i < newString.length; i++) {
//     if (newString[i].length > longestWord.length) {
//       longestWord = newString[i];
//     }
//   }
//   return longestWord;
// };
// let string = "Web Development Tutorial ";

// console.log(longestString(string));

//! 4.Sətirdə hər sözün ilk hərfini böyük hərflə yazmaq üçün JavaScript funksiyasını yazın.

// const capitalize_Words = (string) => {
//   let arr = string.split(" ");
//   let newString = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].split("");
//   }

//   return newString;
// };

// console.log(capitalize_Words("js string exercises"));

//! 5.Verilmish stringdən müəyyən sayda sözə kəsmək üçün JavaScript funksiyasını yazın.

// const truncate = (str, num) => {
//     return str.split(" ").splice(0,num).join(" ")
// };

// console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
