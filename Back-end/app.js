require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Perfil = require('./models/Perfil')
const Filme = require('./models/Filme')

const app = express();

const dbUser = process.env.DB_User
const dbpassword = process.env.DB_PASS


app.use(express.json());

mongoose.connect(`mongodb+srv://${dbUser}:${dbpassword}@cluster0.j4oft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then( () => {
    app.listen(3000)
    console.log('Conectou ao banco de dados!')
})
.catch((err) => console.log(err))


//Função para validação do token do usuário
function checkToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({message: "Acesso negado!"})
    }

    try{
        const secret = process.env.SECRET

        jwt.verify(token, secret)
        next()
    } catch(error){
        res.status(400).json({message: "Token inválido!"})
    }
}


// Home
app.get('/home', (req,res) => {
    res.status(200).json({message: "Bem-vindo a nossa API!"})
});


// Cadastro de usuário
app.post('/cadastro', async (req,res) => {
    const {nome, email, senha} = req.body

    if(!nome){
        return res.status(422).json({ message: 'O nome é obrigatório!'})
    }
    if(!email){
        return res.status(422).json({ message: 'O email é obrigatório!'})
    }
    if(!senha){
        return res.status(422).json({ message: 'A senha é obrigatório!'})
    }

    const perfilExists = await Perfil.findOne({email: email})

    if(perfilExists){
        return res.status(422).json({ message: 'Já existe um usário cadastrado com esse email!'})
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(senha, salt)

    const perfil = new Perfil({
        nome,
        email,
        senha: passwordHash,
    })

    try{
        await perfil.save()
        res.status(201).json({message: "Usuário cadastrado com sucesso!"})
    } catch(error){
        console.log(error)
        res.status(500).json({message: "Houve um erro inesperado, tente novamente mais tarde!"})
    }
});


// Login
app.post("/login", async (req,res) => {
    
    const {email, senha} = req.body

    if(!email){
        return res.status(422).json({ message: 'O email é obrigatório!'})
    }
    if(!senha){
        return res.status(422).json({ message: 'A senha é obrigatório!'})
    }

    const perfil = await Perfil.findOne({email: email})

    if(!perfil){
        return res.status(404).json({ message: 'Usuário não encontrado!'})
    }

    const checkPassword = await bcrypt.compare(senha, perfil.senha)

    if(!checkPassword){
        return res.status(422).json({ message: 'Senha inválida!'})
    }

    try {
        const secret = process.env.SECRET
        const token = jwt.sign({
            id: perfil._id
        }, secret)

        res.status(200).json({message: "Autenticação realizada com sucesso", token})

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Houve um erro inesperado, tente novamente mais tarde!" })
    }

});


// Perfil do usuário
app.get("/perfil/:id", checkToken, async (req, res) => {
    const id = req.params.id

    const perfil = await Perfil.findById(id, '-senha')

    if(!perfil){
        return res.status(404).json({message: "Usuário não encontrado!"})
    }

    res.status(200).json({perfil})
});


// Cadastro de filme
app.post("/filme/cadastro", checkToken, async (req, res) => {
    const {nome, diretor, genero} = req.body

    if(!nome){
        return res.status(422).json({ message: 'O nome é obrigatório!'})
    }
    if(!diretor){
        return res.status(422).json({ message: 'O diretor é obrigatório!'})
    }
    if(!genero){
        return res.status(422).json({ message: 'O gênero é obrigatório!'})
    }

    const moviesExists = await Filme.findOne({nome: nome})

    if(moviesExists){
        return res.status(422).json({ message: 'Já existe um filme cadastrado com esse nome!'})
    }

    const movies = new Filme({
        nome,
        diretor,
        genero,
    })

    try{
        await movies.save()
        res.status(201).json({message: "Filme cadastrado com sucesso!"})
    } catch(error){
        console.log(error)
        res.status(500).json({message: "Houve um erro inesperado, tente novamente mais tarde!"})
    }
});


// Busca de filme por id
app.get("/filme/:id", checkToken, async (req, res) => {
    const id = req.params.id

    const movies = await Filme.findById(id)

    if(!movies){
        return res.status(404).json({message: "Filme não encontrado!"})
    }

    res.status(200).json({movies})
});


// Atualizar filme por id
app.put("/filme/atualizar/:id", checkToken, async (req, res) => {
    const id = req.params.id;

    Filme.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(err){
            res.status(500).send({message: err.message});
        }else{
            res.status(201).send({message: 'Filme atualizado com sucesso!'});
        }
    })
})


// Apagar filme por id
app.delete("/filme/apagar/:id", checkToken, async (req, res) => {
    const id = req.params.id;

    Filme.findByIdAndDelete(id, (err) =>{
        if(err){
            res.status(500).send({message: err.message})
        }else{
            res.status(201).send({message: 'Filme deletado com sucesso!'});
        }
    })
    
})