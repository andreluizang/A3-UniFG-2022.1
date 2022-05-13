import express from "express";
import db from "./dbConnect.js";
import filmes from './models/movies.js';
import contas from './models/accounts.js';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
});

const app = express();

app.use(express.json());

//GET
app.get('/', (req, res) => {
    res.status(200).send("HOME");
});

app.get('/movies', (req, res) => {
  filmes.find((err,movies) => {
      res.status(200).json(movies);
  })
})

app.get('/movies/:id', (req, res) => {
  let id = req.params.id;
  filmes.findById(id, (err,movies) => {
      res.status(200).json(movies);
  })
})

app.get('/accounts/:id', (req, res) => {
  let id = req.params.id;
  contas.findById(id, (err,accounts) => {
      res.status(200).json(accounts);
  })
})

app.get('/accounts', (req, res) => {
  contas.find((err,accounts) => {
      res.status(200).json(accounts);
  })
})

//POST
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

app.post('/accounts', (req, res) => {
  let conta = new contas(req.body);
  conta.save((err) => {
      if(err){
          res.status(500).send({message: `${err.message} falha ao cadastrar`});
      }else{
          res.status(201).send(conta.toJSON());
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

app.put('/accounts/:id', (req, res) =>{
  const id = req.params.id;
  contas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err){
          res.status(500).send({message: err.message});
      }else{
          res.status(201).send({message: 'Atualizado com sucesso!'});
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

app.delete('/accounts/:id', (req, res) =>{
  const id = req.params.id;
  contas.findByIdAndDelete(id, (err) =>{
      if(err){
          res.status(500).send({message: err.message})
      }else{
          res.status(201).send({message: 'Conta deletada com sucesso!'});
      }
  })
  
});

export default app;