// подключение express
const express = require('express');
const PORT = process.env.PORT ?? 3000;



// создаем объект приложения
const app = express();
//express не может явно преобразовывать в JSON формат
app.use(express.json()); 

const recursive = require('recursive-readdir-sync');

recursive(`${__dirname}/routes`)
    .forEach(file => app.use('/', require(file)));

// начинаем прослушивать подключения на 3000 порту
app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))