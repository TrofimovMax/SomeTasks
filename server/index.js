// подключение express
const express = require("express");

const PORT = process.env.PORT ?? 3000;


// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(PORT, () => {
    console.log('server has been started...')
});