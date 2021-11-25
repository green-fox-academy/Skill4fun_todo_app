import fs from 'fs';
import TodoLists from "./TodoLists.js";

export default class Operations {

    list = new TodoLists;
    // #rawtodoList = fs.readFileSync('./data/todos.json', 'utf-8')
    #userGuide = fs.readFileSync('help.txt', 'utf-8')

    checkListEmpty(listNumber = 1) {
        if (this.list[listNumber].length == 0) {
            return console.log("\n Ezen a listán nincs több feladatod mára.")
        }
    }

    printOrderedTodoList(listNumber = 1) {
        if (this.list[listNumber].length != 0) {
            let todoListArr = JSON.parse(this.list[listNumber])
            for (let i = 0; i < todoListArr.length; i++) {
                todoListArr[i] = `${i + 1} - ${todoListArr[i]}`;
            }
            return console.log(`A(z) ${listNumber}. számú Todo lista elemei:\n${todoListArr.join("\n")}`)
        }
    }

    printHelp() {
        return console.log(this.#userGuide);
    }


    writeNewItemtoAList(listNumber = 1, message) {
        if (this.list[listNumber].length == 0) {
            let currentTodoListArr = [];
            currentTodoListArr.push(message)
            let updatedRawTodoList = JSON.stringify(currentTodoListArr);
            console.log(`A(z) ${listNumber}. számú listára mentettük az alábbi új elemet:\n${message}`)
            return fs.writeFileSync(`./data/todos${listNumber}.json`, updatedRawTodoList)

        } else {
            let currentTodoListArr = JSON.parse(this.list[listNumber]);
            currentTodoListArr.push(message)
            let updatedRawTodoList = JSON.stringify(currentTodoListArr);
            console.log(`A(z) ${listNumber}. számú listára mentettük az alábbi új elemet:\n${message}`)
            return fs.writeFileSync(`./data/todos${listNumber}.json`, updatedRawTodoList)
        }
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