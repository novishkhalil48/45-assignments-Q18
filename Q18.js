"use strict";
// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Array of places to visit
let locationArr = ["Malaysia", "Korea", "Canada", "Turkey", "America"];
// .Print your array in its original order.
console.log(locationArr);
// .Print your array in alphabetical order without modifying the actual list.
locationArr.sort();
console.log(locationArr);
// .Show that your array is still in its original order by printing it.
console.log(locationArr);
// .Print your array in reverse alphabetical order without changing the order of the original list
locationArr.reverse();
console.log(locationArr);
// Show original order is unchanged
console.log("\nOriginal order after sorting:");
console.log(locationArr);
// Print array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], locationArr, true).sort().reverse());
// Show original order is still unchanged
console.log("\nOriginal order after reverse sorting:");
console.log(locationArr);
// Reverse the order of the list
locationArr.reverse();
console.log("\nReversed order:");
console.log(locationArr);
// Reverse the order of the list again to get back to the original order
locationArr.reverse();
console.log("\nOriginal order after double reversing:");
console.log(locationArr);
// Sort the array in alphabetical order
locationArr.sort();
console.log("\nSorted in alphabetical order:");
console.log(locationArr);
// Sort the array in reverse alphabetical order
locationArr.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:");
console.log(locationArr);
