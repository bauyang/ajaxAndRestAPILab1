var myArray = ["hi", "hey", "hello", "howdy"];

function makeAllCaps(array, callback){
    let newArray = array.map(function(element){
        return element.toUpperCase();
    })
    console.log(newArray);
    callback(newArray);
};

function sortWords(array){
    array.sort();
    console.log(array);
};

makeAllCaps(myArray, sortWords); 