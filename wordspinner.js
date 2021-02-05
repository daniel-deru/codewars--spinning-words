function spinWords(myString){
    let wordsArray = new Array;
   wordsArray = myString.split(' ') 
   let reversedArray = new Array;
    for(let i = 0; i < wordsArray.length; i++){
        if(wordsArray[i].length >= 5){
            wordsArray[i] = wordsArray[i].split('').reverse().join('')
        } else{
            wordsArray[i] = wordsArray[i]
        }
    }
    return wordsArray.join(' ')
  }