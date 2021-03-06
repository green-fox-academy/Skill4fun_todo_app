import fs from 'fs';
import TodoLists from "./TodoLists.js";

export default class Operations {

    list = new TodoLists;
    #userGuide = fs.readFileSync('help.txt', 'utf-8')

    printHelp() {
        return console.log(this.#userGuide);
    }


    printWarnUnsupportedArg() {
        return console.log("Nem támogatott argumentum!\nKérlek olvasd el az alábbi használati utasítást:\n");
    }


    checkListEmpty(listNumber = 1) {
        if (this.list[listNumber].length == 0 || this.list[listNumber] == '[]') {
            return console.log("\n Ezen a listán nincs több feladatod mára.")
        }
    }


    printOrderedTodoList(listNumber = 1) {
        let todoListArr = JSON.parse(this.list[listNumber])
        if (todoListArr.length != 0) {
            for (let i = 0; i < todoListArr.length; i++) {
                if (todoListArr[i][1] == true) {
                    todoListArr[i] = `${i + 1} - [X] ${todoListArr[i][0]}`;
                } else {
                    todoListArr[i] = `${i + 1} - [ ] ${todoListArr[i][0]}`;
                }
            }
            return console.log(`A(z) ${listNumber}. számú Todo lista elemei:\n${todoListArr.join("\n")}`)
        }
    }


    writeNewItemtoAList(listNumber = 1, message) {
        if (this.list[listNumber].length == 0) {
            let currentTodoListArr = [];
            currentTodoListArr.push(message)
            let updatedRawTodoList = JSON.stringify(currentTodoListArr);
            console.log(`A(z) ${listNumber}. számú listára mentettük az alábbi új elemet:\n${this.list[listNumber].length + 1} - [ ] ${message}`)
            return fs.writeFileSync(`./data/todos${listNumber}.json`, `[${updatedRawTodoList}]`)

        } else {
            let currentTodoListArr = JSON.parse(this.list[listNumber]);
            currentTodoListArr.push([message])
            let updatedRawTodoList = JSON.stringify(currentTodoListArr);
            console.log(`A(z) ${listNumber}. számú listára mentettük az alábbi új elemet:\n${currentTodoListArr.length} - [ ] ${message}`)
            return fs.writeFileSync(`./data/todos${listNumber}.json`, updatedRawTodoList)
        }
    }


    changeItemStatusToDone(listNumber = 1, argNumberWeGot) {
        let indexOfChangedItem = argNumberWeGot * -1 - 1;
        let currentTodoListArr = JSON.parse(this.list[listNumber])
        if (currentTodoListArr.length == 0) {
            return console.log("A lista, amin módosítani szeretnél, üres!")

        } else if (currentTodoListArr.length >= indexOfChangedItem && indexOfChangedItem >= 0) {
            if (currentTodoListArr[indexOfChangedItem].length > 1) {
                return console.log(`Az ${listNumber}. Todo listán, a megadott ${indexOfChangedItem + 1}. sorszámú feladat már elvégzett státuszban van!\nNézd: \n${indexOfChangedItem + 1} - [X] ${currentTodoListArr[indexOfChangedItem][0]}`)
            } else {
                currentTodoListArr[indexOfChangedItem].push(true);
                let updatedRawTodoList = JSON.stringify(currentTodoListArr);
                console.log(`A(z) ${listNumber}. számú listán módosítottuk a(z) ${indexOfChangedItem + 1}.számú elem státuszát, amely az alábbi:\n ${indexOfChangedItem + 1} - [X] ${currentTodoListArr[indexOfChangedItem][0]}`)
                return fs.writeFileSync(`./data/todos${listNumber}.json`, updatedRawTodoList)
            }

        } else {
            return console.log(`A megadott ${indexOfChangedItem + 1}. sorszám nem tartozik egyetlen listaelemhez sem a ${listNumber}.Todo-listán\nEzen a listán jelenleg ${currentTodoListArr.length} db lista-elem található!`)
        }
    }


    removeItemFromAList(listNumber = 1, argNumberWeGot) {
        let indexOfRemovedItem = argNumberWeGot * -1 - 1;
        let currentTodoListArr = JSON.parse(this.list[listNumber])
        let removedItemContainer = '';
        if (this.list[listNumber].length == 0) {
            return console.log("A lista, amiről törölni szeretnél, üres!")

        } else {
            if (indexOfRemovedItem >= 0 && indexOfRemovedItem < currentTodoListArr.length) {
                removedItemContainer = currentTodoListArr.splice(indexOfRemovedItem, 1)
                let updatedRawTodoList = JSON.stringify(currentTodoListArr);
                console.log(`A(z) ${listNumber}. számú listáról töröltük az alábbi ${indexOfRemovedItem + 1}. számú elemet:\n${indexOfRemovedItem + 1}. ${removedItemContainer}`)
                return fs.writeFileSync(`./data/todos${listNumber}.json`, updatedRawTodoList)

            } else {
                console.log(`Az ${listNumber}. Todo-listán nem található a megadott ${indexOfRemovedItem + 1}. sorszámmal ellátott lista-elem.\nEzen a listán jelenleg ${currentTodoListArr.length} db lista-elem található!`)
            }
        }

    }

}
