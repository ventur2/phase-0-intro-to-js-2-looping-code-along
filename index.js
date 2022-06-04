// // for (let age = 30; age < 40; age++) {
// //     console.log(`I'm ${age} years old. Happy birthday to me!`);

//   const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//  writeCards (['Rae', 'Jay', 'Steph'], Birthday)
 
 function writeCards (name, events){
    let newArray = []

    for(let i =0; i<name.length; i++){
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${events} gift!`)
    }
    return newArray
    
 }
 
 
function countDown(down){
    

    while (down >= 0) {
        console.log (down--)
    }
}
// let count = 0;
