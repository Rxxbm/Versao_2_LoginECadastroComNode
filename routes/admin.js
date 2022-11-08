const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require('../models/Categorias')
const Usuario = mongoose.model('categorias');

//inserindo arquivo na página principal
router.get('/', (req, res) => {
    res.render('admin/index') //renderiza o index.handlebars localizado na pasta admin
})
//insere o arquivo de login, localizazdo na pasta admin, no diretório /login
router.get('/login', (req, res) => {
    res.render('admin/login')
})
//insere o arquivo de cadastro, localizado na pasta admin, no diretório /cadastro
router.get('/cadastro', (req, res) => {
    res.render('admin/cadastrarusuario')
})

//adicionar usuarios no banco de dados
router.post('/usuarios/novo', (req, res) => {
    var erros = []

})

