import Operations from "./Operations.js";
import TodoLists from "./TodoLists.js";
const todoListContainer = new TodoLists;
const numberOfLists = Object.entries(todoListContainer).length;
const myTodoList = new Operations;

const args = process.argv.slice(2);
let argNumber = 1;

function chooseList(listNumber = 1) {
    if (args.includes("-l")) {
        myTodoList.printOrderedTodoList(listNumber);
    } else {
        myTodoList.printHelp();
    }
    myTodoList.checkListEmpty(listNumber);
}


function isSecondNumberArgAdded() {
    if (args.length > 1 && args[1] % 1 == 0) {
        if (parseInt(args[1].slice(1)) <= numberOfLists) {
            argNumber = parseInt(args[1].slice(1));
        } else { console.log(`\nNem létező listát keresel, túl nagy számot adtál meg második argumentumként! \nAktuális ToDo-listák száma: ${numberOfLists} \n\nHelyette itt van az 1-es lista:\n`) }
    } else { console.log("\nNem számot adtál meg második argumentumként!\nHelyette itt van az 1-es lista:\n") }
}

isSecondNumberArgAdded();
chooseList(argNumber);



/*
///// később még jóljöhető kódrészletek
let argNumber = 0;
for (var i = 3; i < process.argv.length; i++) {
    argNumber += Number(process.argv[i]);
}
console.log(argNumber);
*/


/*
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
*/
