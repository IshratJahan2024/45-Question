// Question:-16 . More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program 
// informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.


let guest_list : string [] = [`Isra`,`Nazia`,`Yasha`,`Zeeshan`,`Naseer`];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`Respected Sir/Madam` + guest_list[i] + `,\n I invite you on a Dinner Tomorrow.\nThank you\n`)
// }
 let not_present : string = `Zeeshan`;
let new_guest : string = `Sheeba`;
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respected Sir/Madam` + guest_list[i] + `,\n I invite you on a Dinner Tomorrow.\nThank you\n`)
}
console.log(`Mr. ${not_present}will not coming on tomorrow Dinner. `);

guest_list.unshift(`Sadaf`,`Tasleem`,`Fatima`);
    for(let i=0; i<guest_list.length; i++){
        console.log(`Respected Sir/Madam` + guest_list[i] + `,\n I invite you on a Dinner Tomorrow. I found a Big table so i decied to invite 3 more Guests\nThank you\n`)
       
}


