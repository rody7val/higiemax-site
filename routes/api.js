var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'HigieMAX', data: [] });
});

// GET /empresa (ajax)
router.get('/empresa', function (req, res) {
    res.json_v2({
        name: 'Empresa',
        h1: 'Nuestra Empresa',
        p: 'Somos una empresa dedicada al servicio de limpieza, pioneros en la zona.'
    })
});

// GET /servicios (ajax)
router.get('/servicios', function (req, res) {
    res.json_v2({
        name: 'Servicios',
        h1: 'Servicios',
        p: [],
        dt: [
        // -- FINAL DE EVENTOS --
        '<dt '+
          'data-target="#carousel_final-de-eventos">'+ //data-terget to carousel
          '<a '+
            'id="final-de-eventos"'+
            'onclick="change_carousel(this.id)"'+
          '>Final de eventos</a></dt>'+
        '<dd '+ //info collapse
          'class="collapse"'+
          'id="collapse_final-de-eventos"'+
        '>Descripcion de final de eventos [/...]</dd>'
        ,
        // -- FINAL DE OBRAS --
        '<dt '+
          'data-target="#carousel_final-de-obras">'+ //data-terget to carousel
          '<a '+
            'id="final-de-obras"'+
            'onclick="change_carousel(this.id)"'+
          '>Final de obras</a></dt>'+
        '<dd '+ //info collapse
          'class="collapse"'+
          'id="collapse_final-de-obras"'+
        '>Descripcion de final de obras [/...]</dd>'
        ,
        // -- VIDRIOS --
        '<dt '+
          'data-target="#carousel_vidrios">'+ //data-terget to carousel
          '<a '+
            'id="vidrios"'+
            'onclick="change_carousel(this.id)"'+
          '>Vidrios</a></dt>'+
        '<dd '+  //info collapse
          'class="collapse"'+
          'id="collapse_final-de-obras"'+
        '>Descripcion de vidrios [/...]</dd>'
        ,
        // -- OFICINAS --
        '<dt '+
          'data-target="#carousel_oficinas">'+ //data-target to carousel
          '<a '+
            'id="oficinas" '+
            'onclick="change_carousel(this.id)"'+
          '>Oficinas</a></dt>'+
        '<dd '+  //info collapse
          'class="collapse"'+
          'id="collapse_oficinas"'+
        '>Descripcion de oficinas [/...]</dd>'
        ,
        // -- ESPECIALES --
        '<dt '+
          'data-target="#carousel_especiales">'+ //data-target to carousel
          '<a '+
            'id="especiales" '+
            'onclick="change_carousel(this.id)"'+
          '>Especiales</a></dt>'+
        '<dd '+  //info collapse
          'class="collapse"'+
          'id="collapse_especiales"'+
        '>Descripcion de especiales [/...]</dd>'
        ]
    })
});

// GET /clientes (ajax)
router.get('/clientes', function (req, res) {
    res.json_v2({
        name: 'Clientes',
        h1: 'Nuestros Clientes',
        p: 'clubes, fabricas, comercios'
    })
});

module.exports = router;
