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
    console.log( flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log( flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]
    let noms = ["Bob", "Julien", "Roger"];
    affichnoms(noms);
    modifnoms(noms);
    //multiplicate();
    console.log(cesarencryption("ATTAQUEZ",3));
}