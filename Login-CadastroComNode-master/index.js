const express = require('express');
const app = express()
const conectarBanco = require('./modules/db')
const handlebars = require('express-handlebars')
const admin = require('./routes/admin')
const path = require('path');
const session = require('express-session')
const flash = require('connect-flash')
const admin = require('../routes')
//configurando sessao
    app.use(session({
        secret: 'cursodenode',
        resave:true,
        saveUninitialized:true,
        cookie: {secure:true}
    }))
    app.use(flash())
//middleware
    app.use((req, res, next)=>{
        res.locals.success_msg = req.flash('success_msg');
        res.locals.error_msg = req.flash('error_msg');
        next();
    })

//configurações
    //configurar o bodyparse
    app.use(express.urlencoded({extended:false}))
    app.use(express.json())
    //configurando handlebars
    app.set('view engine', 'handlebars');
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main',  runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    
        allowProtoMethodsByDefault: true,
      }}))
//mongoose
// configuracao da pasta public
    app.use(express.static(path.join(__dirname, "public")))
//rotas
      app.use('/admin', )