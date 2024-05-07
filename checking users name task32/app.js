var current_users = ["Ishrat", "Admin", "nazia", "Yasha", "Isra"];
var new_users = ["Tasleem", "Sadaf", "Admin", "Fatima", "Kanwal"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
