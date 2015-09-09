function adjust (data) {
	// obtener items de menus
	var li = $('[data-target]');
	// filtrar
	switch(data.name){
		case 'Empresa':
			var tag = 'Empresa';
		break;
		case 'Servicios':
			var tag = 'Servicios';
		break;
		case 'Clientes':
			var tag = 'Clientes';
		break;
	};
	// cambiar class active
	for(var i=0; i<li.length; i++){ 
		if (li[i].className == 'active') li[i].className = '';
		if (li[i].id == tag) li[i].className = 'active';
	};
	// agregar contenido
	$('#h1').html(data.h1);
	$('#p').html(data.p);
};
// enviar ajax
function send (href) {
	var link = href;
	$.get(link, function (data) { adjust(data) });
};
// localizar vista
var latitud = -37.6028102 , 
		longitud = -62.4023118, 
		latMrk = -37.606633172077046,
		lngMrk = -62.40427494049072,
		zoom = 14,
		ref = 1;
//mapa ubicacion
function showhide(id) {
	var e = document.getElementById(id);
	if (ref === 1) {
		console.log(ref);
		// iniciar mapa por unica vez
		L.mapbox.accessToken = 'pk.eyJ1Ijoicm9kN3ZhbCIsImEiOiJ4NFVxa29rIn0.TsEEJODEdqc_EPaxE35YEw';
		var mapa = L.mapbox.map('map', 'rod7val.ldnnodk2');
		var layer = L.mapbox.featureLayer().addTo(mapa);
		mapa.setView([latitud, longitud], zoom);
		var marker = L.marker([latMrk, lngMrk], {
		    icon: L.mapbox.marker.icon({ 'marker-color': '#f86767' })
		});
		mapa.invalidateSize();
		ref--;
	}
	console.log(ref);
	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
}
$(document).ready(function () {
	//activar slider
  $('.carousel').carousel('pause');
  //obtener contenido de homepage por ajax
  $.get('/empresa', function (data) { adjust(data) });
});

