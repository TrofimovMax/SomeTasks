const Router = require('express');
const router = new Router();
const fs = require('fs');

router.patch('/todos/:uuid', (req, res) => {
    try {
        if (!req.body) return res.sendStatus(400);
        const todoName = req.body.name;
        const todoDone = req.body.done;
        const todoUuid = req.body.uuid;
        let todo = { name: todoName, done: todoDone, uuid: todoUuid };
        let data = fs.readFileSync(filePath, "utf8");
        console.log(data);
        const todos = JSON.parse(data);
        for (var i = 0; i < todos.length; i++) {
            if (todos[i].uuid == todoUuid) {
                todo = todos[i];
                break;
            }
        }
        // изменяем данные у пользователя
        if (todo) {
            todo.done = !todoDone;
            todo.name = todoName;
            data = JSON.stringify(todos);
            fs.writeFileSync("todos.json", data);
            res.send(todo);
        }
        else {
            res.status(404).send(todo);
        }
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})

module.exports = router;