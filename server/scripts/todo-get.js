import router from './router.js'

router.get('/todos', (req, res)=>{
    try{
        const dataString = fs.readFile("data.json",
        function(err, result) {
            if(err) console.log('error', err);
        });
        res.status(200).send(dataString)
    }catch(e){
        res.status(500).send('error')
    }
})

app.get('/todos',sendAll);
 
 function sendAll(request,response){
 response.send(words);

 }