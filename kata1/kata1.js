let str = 'abracadabra'

let getCount = (str) => {
  let symbolsArray = ['a','e','i','o','u']
  let count = 0;
  const string = str.toLowerCase().split('')

  for (let i = 0; i < string.length; i++) {
    const charts = string[i]

    if(symbolsArray.includes(charts)){
      count++
    }
    
  }
  return console.log(count)
}

getCount(str)