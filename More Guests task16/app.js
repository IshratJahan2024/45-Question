var guest_list = ["Isra", "Nazia", "Yasha", "Zeeshan", "Naseer"];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected Sir/Madam` + guest_list[i] + `,\n I invite you on a Dinner Tomorrow.\nThank you\n`)
// }
var not_present = "Zeeshan";
var new_guest = "Sheeba";
guest_list[3] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\n I invite you on a Dinner Tomorrow.\nThank you\n");
}
console.log("Mr. ".concat(not_present, "will not coming on tomorrow Dinner. "));
guest_list.unshift("Sadaf", "Tasleem", "Fatima");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\n I invite you on a Dinner Tomorrow. I found a Big table so i decied to invite 3 more Guests\nThank you\n");
}
