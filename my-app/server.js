import app from './src/crud.js'

const port = 4000;

app.listen(port, () => {
    console.log("Servidor online em http://localhost:" + port)
});