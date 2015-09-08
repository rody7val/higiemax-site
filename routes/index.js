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
// GET /servicio (ajax)
router.get('/servicios', function (req, res) {
    res.json_v2({
        name: 'Servicios',
        h1: 'Servicios',
        p: 'Limpieza institucional, finales de obra y eventos.'
    })
});
// GET /contacto (ajax)
router.get('/clientes', function (req, res) {
    res.json_v2({
        name: 'Clientes',
        h1: 'Nuestros Clientes',
        p: 'clubes, fabricas, comercios'
    })
});

module.exports = router;
