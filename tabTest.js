function tabTest(){
    console.log( sum([]) ); // => 0
    console.log( sum([42,404,1337]) ); // => 1783
    console.log( sum2([]) ); // => 0
    console.log( sum2([42,404,1337]) ); // => 1783
    console.log( longestWord(["lot", "of", "words", "of", "different", "sizes"]) ); // => different 
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo")); // => 3
    console.log(nbOccurences(text, "quux")); // => 0
    console.log(nbOccurences(text, "baz")); // => 1

}