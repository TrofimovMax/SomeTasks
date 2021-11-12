import Router from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';

const filePath = "data.json";
const router = new Router()

router.post('/todos', (req, res) => {
    try {
        const todoName = req.body.name;
        const todoDone = req.body.done;
        const todoUuid = uuidv4();
        let todo = { name: todoName, done: todoDone, uuid: todoUuid };
        let data = fs.readFileSync(filePath, "utf8");
        console.log(data);
        let todos = []
        if (data) {
            todos = JSON.parse(data);
        }
        // добавляем пользователя в массив
        todos.push(todo);
        console.log(todos);
        data = JSON.stringify(todos);
        // перезаписываем файл с новыми данными
        fs.writeFileSync(filePath, data);
        res.status(200).send(todo);
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})

router.get('/todos', (req, res) => {
    try {
        const content = fs.readFileSync(filePath, "utf8");
        const todos = JSON.parse(content);
        res.status(200).send(todos);
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})

router.delete('/todos/:uuid', (req, res) => {
    try {
        const id = req.params.uuid;
        let data = fs.readFileSync(filePath, "utf8");
        let todos = JSON.parse(data);
        let index = -1;
        // находим индекс пользователя в массиве
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].uuid == id) {
                index = i;
                break;
            }
        }
        if (index > -1) {
            // удаляем пользователя из массива по индексу
            const todo = todos.splice(index, 1)[0];
            data = JSON.stringify(todos);
            fs.writeFileSync("todos.json", data);
            // отправляем uuid удаленного пользователя
            res.status(200).send(todo.uuid);
        }
        else {
            res.status(404).send(`error: todo with id ${req.params.uuid} does not exist`);
        }
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})




export default router;