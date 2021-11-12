// подключение express
import express from 'express'
import router from "./scripts/router.js";
const PORT = process.env.PORT ?? 3000;


// создаем объект приложения
const app = express();
//express не может явно преобразовывать в JSON формат
app.use(express.json()); 

app.use('/api', router)

// начинаем прослушивать подключения на 3000 порту
app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))