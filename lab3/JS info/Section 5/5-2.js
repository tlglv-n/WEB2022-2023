
// Task 1
// let a = +prompt("1st number", "");
// let b = +prompt("2nd second number", "");
// alert( a + b );

// Task 2
// alert( Math.round(6.35 * 10) / 10 );

// Task 3
// function readNumber() {
//     let num;
//     do {
//       num = prompt("Enter a number please?", 0);
//     } while ( !isFinite(num) );
//     if (num === null || num === '') return null;
//     return +num;
//   }
//   alert(`Read: ${readNumber()}`);

// Task 4
// let i = 0;
// while (i < 11) {
//   i += 0.2;
//   if (i > 9.8 && i < 10.2) alert( i );
// }

// Task 5
// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }
  
//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );

// Task 6
function randomInteger(min, max) {
    // now rand is from  (min-0.5) to (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );