/**
 * @param {number} length - the length of the square
 * @param {number} width - the width of the square
 * @return {number} the area of the square
**/

function areaCal( height, width, length ){
    return  (height * width * length);
}

let rectangle1 = areaCal(5,10,11);
console.log (rectangle1); 

let rectangle2 = areaCal(5,10,1);
console.log (rectangle2); 