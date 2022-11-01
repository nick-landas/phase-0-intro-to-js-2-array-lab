// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name);
    //console.log(cats);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    //console.log(cats);
}

function destructivelyRemoveLastCat(){
    cats.pop();
    //console.log(cats);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
    //console.log(cats);
}

function appendCat(name){
    return [...cats, name];
    //console.log([...cats, name]);
    //console.log(cats);
}

function prependCat(name){

    return [name, ...cats];
    //console.log([name, ...cats]);
    //console.log(cats);
}

function removeLastCat(){
   return cats.slice(0,cats.length - 1);
   //console.log(cats.slice(0,cats.length - 1));
   //console.log(cats);
}

function removeFirstCat(){
    return cats.slice(1);
    //console.log(cats.slice(1));
   //console.log(cats);
}