const Router = require('express');
const router = new Router();
const fs = require('fs');
const filePath = "data.json";
const { v4: uuidv4 } = require('uuid');


router.post('/todos', (req, res) => {
    try {
        const todoName = req.body.name;
        const todoDone = req.body.done;
        const todoUuid = uuidv4();
        let todo = { name: todoName, done: todoDone, uuid: todoUuid };
        let data = fs.readFileSync(filePath, "utf8");
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

module.exports = router;