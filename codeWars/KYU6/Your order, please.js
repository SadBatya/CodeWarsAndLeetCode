function order(words){
  if(!words){
    return words
  }
  var arr = words.split(' ')

  var obj = {}

  for(let el of arr){
    var number = getNumber(el)

    obj[number] = el
  }
  return Object.values(obj).join()
}


function getNumber(str){
  return str.match(/\d/)[0]
}