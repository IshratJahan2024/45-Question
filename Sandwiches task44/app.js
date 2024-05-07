function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Bread", "Cheese", "Chicken", "Mayo", "Egg");
makeSandwich("Bread", "Chicken Spread", "Mayo");
makeSandwich("Bread", "Butter", "Mayo", "Ketchup", "Cheese", "Egg", "Chicken", "Tomato", "Cucumber");
