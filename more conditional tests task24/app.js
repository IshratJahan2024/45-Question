var car = 'subaru';
var age = 28;
var numbers = [1, 2, 3, 4];
//   'STRING TEST'
// Test 1: Equality (true)
console.log("is car == 'subaru'? I predict true.");
console.log(car === 'subaru');
// 'TEST 2 STRICT eQUALITY'
console.log("is car === 'subaru'? I predict false.");
console.log(car === 'subaru');
// TEST 3 INEQALITY
console.log("is car != 'Honda'? I predict I predict true.");
console.log(car != 'Honda');
// TEST 4 INEQUALITY
console.log("is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru');
// TEST 5 LOWERCASE CONVERSION
console.log("is car.toLowerCase () =='subaru'? I predict true.");
console.log(car.toLowerCase() == 'subaru');
// TEST 6 LOWERCASE CONVERSION
console.log("is car === car.toLowerCase()? I predict false.");
console.log(car === car.toLowerCase());
// TEST 7 EQUALITY
console.log("is age == 28? I predict true.");
console.log(age == 28);
// TEST 8 INEQUALITY
console.log("is age!= 35? I predict true");
console.log(age != 35);
// TEST 9 GREATER THAN
console.log("is age > 35? I predict false.");
console.log(age > 30);
//TEST 10 LESS THAN OR EQUAL
console.log("is age <= 28? I predict false.");
console.log(age <= 28);
// TEST 11 'AND'
console.log("is agr > 20 && age < 30? I predict true.");
console.log(age > 20 && age < 30);
// TEST 12 'OR'
console.log("is age > 30 || age < 18? I predict false.");
console.log(age < 30 || age > 18);
// TEST 13 IN ARRAY
console.log("is 3 in numbers? I predict true.");
console.log(3 in numbers);
// TEST 14 NOT IN ARRAY
console.log("is 5 not in numbers? I predict true.");
console.log(5, not in numbers);
