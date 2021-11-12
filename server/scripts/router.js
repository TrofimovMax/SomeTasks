import Router from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid';


const router = new Router()

router.post('/todos', (req, res)=>{
    try{
        const dataString = JSON.stringify({...req.body, uuid: uuidv4()}, null, 2);
        fs.appendFile("data.json", dataString, 
        function(err, result) {
            if(err) console.log('error', err);
        });
        res.status(200).send(dataString)
    }catch(e){
        res.status(500).send('error')
    }
})

export default router;