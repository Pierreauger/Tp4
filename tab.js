function sum(numbers){
    let s = 0;
  for(let i = 0; i< numbers.length; i++){
    let n = numbers[i];
    s = n + s;
  } 
  return s;
}
function sum2(numbers){
    let result = 0;
    for(number of numbers){
        result = number + result;
    }
    return result;
}
function longestWord(words){
    let longest = "";
     for (word of words){
            if (longest.length < word.length)
            longest = word;
         }
         return longest;
     }

/*function  range(min, max, step){
    let range;
    if(min <= max){
        while
    }
    }
}*/
function nbOccurences(wordList, word){
        let nb = 0;
    for( let i = 0; i<wordList.length; i++){
        if(wordList[i] == word){
            nb++;
        }
    }
    return nb;
}