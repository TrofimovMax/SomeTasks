const Router = require('express');
const router = new Router();
const fs = require('fs');
const filePath = "data.json";

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

module.exports = router;