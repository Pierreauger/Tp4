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
    let words = wordList.split(" ");
    for( let i = 0; i<words.length; i++){
        if(words[i] == word){
            nb++;
        }
    }
    return nb;
}

function flatten2D(array){
    let array2 = array.flat(3);
    return array2
}

function affichnoms(noms){
    for( let nom of noms){
        console.log(nom);
    }
}
function modifnoms(noms){
    let array2 = noms.pop();
    console.log(noms);
    let array3 = noms.push("Pierre");
    console.log(noms);
}
function multiplicate(){
    for( let i = 0; i<=10; i++){
        for(let j = 0; j<=10; j++){
            console.log(i*j);
        }
    }
}
function cesarencryption (mot,clef){
    let array = [];
    let text = "";
    let ascii;
   for(let i = 0; i<mot.length;i++){
        if(text[i] != " "){
        ascii = mot.charCodeAt(i);
        ascii = ascii+clef;
        ascii = ascii%26;
        text += .toString(ascii);
        }
        else{
            text = text + " ";
        }
    }
    return text;
}