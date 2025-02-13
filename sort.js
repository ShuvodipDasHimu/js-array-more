const persons = ['rakib', 'nokib', 'sakib', 'akib', 'dakib', "anis", "Zakib", "Anis"];
const sortedPersons = persons.sort(); // sort e bhejal ase
console.log(sortedPersons);

// sort -->
// const numbers = [4, 7, 12, 8, 38, 6, 1];
/* Ascending ----> smaller to larger
   Descendig ----> larger to smaller */
const numbers = [4, 7, 12, 8, 43, 6, 1];
// const numbers_asc = numbers.sort(); not working properly
const numbers_asc = [...numbers].sort(function(a, b) {return a - b});
const numbers_dsc = [...numbers].sort(function(a, b) {return b - a});
console.log(numbers_asc);
console.log(numbers_dsc);