function city_country(city, country) {
    return " \"".concat(city, " , ").concat(country, "\"");
    console.log("\"".concat(city, " , ").concat(country, "\""));
}
city_country("Karachi", "Pakistan");
var mycities = city_country("Karachi", "Pakistan");
console.log(mycities);
console.log(city_country("Sydni", "Australia"));
console.log(city_country("New York", "USA"));
console.log(city_country("London", "England"));
