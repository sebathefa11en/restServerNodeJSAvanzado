const { response } = require('express');
const Usuario = require('../models/usuario');


const usuariosGet =  (req, res = response) => {
	
	const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

	const id = req.params.id;

	    res.status(200).json({
		msg : 'GET Api',
		q,
		nombre,
		apikey,
		page,
		limit
	    });
	};

const usuariosPost = async(req, res = response) => {

	const body = req.body;
	const usuario = new Usuario( body );
	
	await usuario.save();

	    res.status(201).json({
		msg : 'POST Api',
		usuario
	    });
	};

const usuariosPut = (req, res = response) => {

	const id = req.params.id;

	    res.status(201).json({
		msg : 'PUT Api',
		id
	    });
	};

const usuariosDelete = (req, res = response) => {
	    res.status(201).json({
		msg : 'DELETE Api'
	    });
	};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}
