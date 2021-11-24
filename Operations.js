import fs from 'fs';

export default class Operations {

    static rawtodoList = fs.readFileSync('./data/todos.json', 'utf-8')


    printTodoList(rawtodoList = fs.readFileSync('./data/todos.json', 'utf-8')) {
        let todoListArr = JSON.parse(rawtodoList)
        for (let i = 0; i < todoListArr.length; i++) {
            todoListArr[i] = `${i + 1}. ${todoListArr[i]}`;
        }
        return todoListArr
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