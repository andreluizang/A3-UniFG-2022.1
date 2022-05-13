import app from './src/crud.js'

const port = 3000;

app.listen(port, () => {
    console.log("Servidor online em http://localhost:" + port)
});