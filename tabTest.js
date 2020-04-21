function tabTest(){
    console.log( sum([]) ); // => 0
    console.log( sum([42,404,1337]) ); // => 1783
    console.log( sum2([]) ); // => 0
    console.log( sum2([42,404,1337]) ); // => 1783
    //console.log( sum3([]) ); // => 0
    //console.log( sum3([42,404,1337]) ); // => 1783
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) ); // => different 
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6
    console.log( flatten2D2([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D2([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]
    let noms = ["Bob", "Julien", "Roger"];
    affichnoms(noms);
    modifnoms(noms);
    //multiplicate();
   // console.log(cesarencryption("ATTAQUEZ",3));
   let numbers = [-42, 3, 0, -1, 100];
    let absNumbers = abs(numbers);
    console.log(absNumbers); 	// => [42, 3, 0, 1, 100]
    console.log(numbers);    	// => [-42, 3, 0, -1, 100]
    console.log( evenOnly([0,1,2,3,4]) );  // => [0, 2, 4] 
    tab1=[];
    tab2=[42,404,1337];
    //console.log(sum3(tab1)); // => 0
    //console.log(sum3(tab2)); // => 1783
    //console.log( removeDuplicates([]) );                  // => []
    //console.log( removeDuplicates([1,2,3,4]) );           // => [1,2,3,4]
    //console.log( removeDuplicates([1,2,3,2,4,3,1,1]) );   // => [1,2,3,4]

}