function describe_city(nameOfCity, country) {
    if (country === void 0) { country = "Pakistan"; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
var city1 = describe_city("Jeddah", "Saudi Arabia");
var city2 = describe_city("New York", "USA");
var city3 = describe_city("Sydni", "Australia");
var city4 = describe_city("London", "England");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
