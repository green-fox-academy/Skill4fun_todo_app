import Operations from "./Operations.js";

const rawtodosArr = Operations.rawtodoList;
const orderedTodoListArr = new Operations;


// console.log(rawtodosArr);


const args = process.argv.slice(2);


if (args.includes("-l")) {
    console.log(orderedTodoListArr.printTodoList());

} else {
    console.log(`$ todo

    Parancssori Todo applikáció
    =============================

    Parancssori argumentumok:
    -l   Kilistázza a feladatokat
    -a   Új feladatot ad hozzá
    -r   Eltávolít egy feladatot
    -c   Teljesít egy feladatot`)
}

/*
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
*/
