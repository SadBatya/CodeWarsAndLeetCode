// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

// Code Examples

//     prefill(3,1) --> [1,1,1]
    
//     prefill(2,"abc") --> ['abc','abc']
    
//     prefill("1", 1) --> [1]
    
//     prefill(3, prefill(2,'2d'))
//       --> [['2d','2d'],['2d','2d'],['2d','2d']]
      
//     prefill("xyz", 1)
//       --> throws TypeError with message "xyz is invalid"


function prefill(n, v) {
  const lengthInt = parseInt(n, 10);

  if (Number.isNaN(lengthInt) || lengthInt < 0 || lengthInt.toString() !== n.toString()) {
    throw new TypeError(`${n} is invalid`);
  }

  return new Array(lengthInt).fill(v);
}


// второй способ

const prefill = (n = 0, value) => {
  const length = parseFloat(n)

  if (length < 0 || !Number.isInteger(length)) throw new TypeError(n + ' is invalid')
    
  return Array(length).fill(value)
}
