import mongoose from 'mongoose';

const contasSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        diretor: {type: String, required: true},
        genero: {type: String, required: true},
    }
)

const contas = mongoose.model('accounts', contasSchema);

export default contas;