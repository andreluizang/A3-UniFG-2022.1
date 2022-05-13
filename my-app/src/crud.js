import express from "express";
import db from "./dbConnect.js";
import filmes from './models/movies.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
});

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("a");
});

app.get('/register', (req, res) => {
  res.status(200).send("Register");
})

app.get('/login', (req, res) => {
  res.status(200).send("Login");
})

app.get('/movies', (req, res) => {
    filmes.find((err,movies) => {
        res.status(200).json(movies);
    })
})

app.get('/profile', (req, res) => {
  res.status(200).send("Perfil");
})

app.get('/admin', (req, res) => {
  res.status(200).send("admin");
})

app.post('/movies', (req, res) => {
  let filme = new filmes(req.body);
  filme.save((err) => {
      if(err){
          res.status(500).send({message: `${err.message} falha ao cadastrar o filme`});
      }else{
          res.status(201).send(filme.toJSON());
      }
  })
});

//PUT
app.put('/movies/:id', (req, res) =>{
  const id = req.params.id;
  filmes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err){
          res.status(500).send({message: err.message});
      }else{
          res.status(201).send({message: 'Filme atualizado com sucesso!'});
      }
  })
});

//DELETE
app.delete('/movies/:id', (req, res) =>{
  const id = req.params.id;
  livros.findByIdAndDelete(id, (err) =>{
      if(err){
          res.status(500).send({message: err.message})
      }else{
          res.status(201).send({message: 'Filme deletado com sucesso!'});
      }
  })
  
});

export default app;