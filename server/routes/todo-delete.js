const Router = require('express');
const router = new Router();
const fs = require('fs');
const filePath = "data.json";

router.delete('/todos/:uuid', (req, res) => {
    try {
        const uuid = req.params.uuid;
        const todos = JSON.parse(fs.readFileSync(filePath));
        const todo = todos.find(todo => todo.uuid === uuid )
        if(!todo) return res.status(404).send('Task not found');
        const newTodos = todos.filter(todo => todo.uuid !== uuid);
        fs.writeFileSync(filePath, JSON.stringify(newTodos));
        res.status(200).send(todo.uuid);
    } catch (e) {
        const errObj = {
            "code": e.code,
            "massage": e.message,
        }
        res.status(500).send(errObj)
    }
})

module.exports = router;