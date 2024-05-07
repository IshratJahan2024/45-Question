var guest_list = ["Isra", "Nazia", "Yasha", "Zeeshan", "Naseer"];
var not_present = "Zeeshan";
var new_guest = "Sheeba";
guest_list[3] = new_guest;
guest_list.unshift("Sadaf", "Tasleem", "Fatima");
console.log('\nunfortunately we can not arrange big table , only two people allow.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log('sorry Sir/Madam.${remove_guest} you are not ivited on for dinner.');
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected Sir/Madam' + guest_list[i] + ',\nyes you are still invited on tomorrow dinner\nthank you\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
