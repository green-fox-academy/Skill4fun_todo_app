import fs from 'fs';

export default class TodoLists {
    1 = fs.readFileSync('./data/todos1.json', 'utf-8')
    2 = fs.readFileSync('./data/todos2.json', 'utf-8')
    3 = fs.readFileSync('./data/todos3.json', 'utf-8')
    4 = fs.readFileSync('./data/todos4.json', 'utf-8')
}