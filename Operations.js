import fs from 'fs';
import TodoLists from "./TodoLists.js";

export default class Operations {

    list = new TodoLists;
    #rawtodoList = fs.readFileSync('./data/todos.json', 'utf-8')
    #userGuide = fs.readFileSync('help.txt', 'utf-8')

    checkListEmpty(listNumber = 1) {
        if (this.list[listNumber].length == 0) {
            return console.log("\n Nincs több feladatod mára.")
        } else {
            return console.log("\n Még vannak feladataid")
        }
    }

    printOrderedTodoList(listNumber = 1) {
        if (this.list[listNumber].length != 0) {
            let todoListArr = JSON.parse(this.list[listNumber])
            for (let i = 0; i < todoListArr.length; i++) {
                todoListArr[i] = `${i + 1} - ${todoListArr[i]}`;
            }
            return console.log(todoListArr.join("\n"))
        }
    }

    printHelp() {
        return console.log(this.#userGuide);
    }

}

/*
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

*/