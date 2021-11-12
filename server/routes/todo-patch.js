const Router = require('express');
const router = new Router();
const fs = require('fs');
const filePath = "data.json";


router.patch('/todos/:uuid', (req, res) => {
    try {
        if (!req.body) return res.sendStatus(400);
        const { name, done } = req.body;
        const uuid = req.params.uuid;
        const todos = JSON.parse(fs.readFileSync(filePath));
        const todo = todos.find(todo => todo.uuid === uuid)
        if (!todo) return res.status(404).send('Task not found');
        const newTodos = todos.map(todo => {
            if (todo.uuid === uuid) {
                todo.name = name;
                todo.done = done;
            }
            return todo
        })
        fs.writeFileSync(filePath, JSON.stringify(newTodos));
        res.status(200).send({ uuid, name, done });
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})

module.exports = router;