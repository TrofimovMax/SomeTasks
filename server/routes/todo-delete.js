const Router = require('express');
const router = new Router();
const fs = require('fs');
const filePath = "data.json";

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

module.exports = router;