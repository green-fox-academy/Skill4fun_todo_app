import Operations from "./Operations.js";
import TodoLists from "./TodoLists.js";
const todoListContainer = new TodoLists;
const numberOfLists = Object.entries(todoListContainer).length;
const myTodoList = new Operations;
let newItemContent = '';
let indexOfItemToRemove = '';
let indexOfItemToChange = '';

const args = process.argv.slice(2);
let argNumber = 1;

function chooseList(listNumber = 1) {
    if (args.length == 0) {
        myTodoList.printHelp();
    } else {
        if (args.includes("-l")) {
            myTodoList.checkListEmpty(listNumber);
            myTodoList.printOrderedTodoList(listNumber);

        } else if (args.includes("-a")) {
            if (args[2] == null) {
                newItemContent = args[1]
            } else {
                newItemContent = args[2];
            }
            myTodoList.writeNewItemtoAList(listNumber, newItemContent);

        } else if (args.includes("-r")) {
            if (args[2] == null) {
                indexOfItemToRemove = args[1];
            } else {
                indexOfItemToRemove = args[2];
            }
            myTodoList.removeItemFromAList(listNumber, indexOfItemToRemove);

        } else if (args.includes("-c")) {
            if (args[2] == null) {
                indexOfItemToChange = args[1];
            } else {
                indexOfItemToChange = args[2];
            }
            myTodoList.changeItemStatusToDone(listNumber, indexOfItemToChange);

        } else {
            myTodoList.printWarnUnsupportedArg();
            myTodoList.printHelp();
        }
    }
}


function isSecondNumberArgAdded() {
    if (args.length > 1 && args[1] % 1 == 0) {
        if (parseInt(args[1].slice(1)) <= numberOfLists) {
            argNumber = parseInt(args[1].slice(1));
        } else { console.log(`\nNem létező listát keresel, túl nagy számot adtál meg második argumentumként! \nAktuális ToDo-listák száma: ${numberOfLists} \n`) }
    } else if (args.length > 1) { console.log("\nNem adtad meg második argumentumként a Todo lista sorszámát!\n") }
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
