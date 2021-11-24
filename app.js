import Operations from "./Operations.js";


const myTodoList = new Operations;
const args = process.argv.slice(2);


if (args.includes("-l")) {
    myTodoList.printOrderedTodoList();

} else {
    myTodoList.printHelp();
}

myTodoList.checkListEmpty(2);


/*
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
*/
