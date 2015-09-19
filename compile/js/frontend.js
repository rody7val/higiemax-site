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
	$('#p').empty();
	if (data.p != undefined) $('#p').html(data.p);;	
	$('#dl').empty();
	if(data.dt != undefined) {
		$('#dl').html(data.dt);
		var allPanels = $('.accordion > dd').hide();
  	$('.accordion > dt > a').click(function() {
  	  allPanels.slideUp();
  	  $(this).parent().next().slideDown();
  	  return false;
  	});
	};
};

// enviar ajax
function send (href, id) {
	change_carousel(id);
	var link = href;
	$.get(link, function (data) { adjust(data) });
};

// servicios carousel
function send_serv_carousel (href) {
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
	e.style.display = (e.style.display == 'block') ? 'none' : 'block';
	if (ref === 1) {
		console.log(ref);
		// iniciar mapa por unica vez
		L.mapbox.accessToken = 'pk.eyJ1Ijoicm9kN3ZhbCIsImEiOiJ4NFVxa29rIn0.TsEEJODEdqc_EPaxE35YEw';
		var mapa = L.mapbox.map('map', 'rod7val.ldnnodk2').setView([latitud, longitud], zoom);
		var layer = L.mapbox.featureLayer().addTo(mapa);
		var marker = L.marker([latMrk, lngMrk], {
		    icon: L.mapbox.marker.icon({ 'marker-color': '#f86767' })
		}).addTo(mapa);
		mapa.invalidateSize();
		ref--;
	}
	console.log(ref);
}

function remove_class_carousel(){
	$('#carousel_menu').removeClass('carousel');
	$('#carousel_final-de-eventos').removeClass('carousel');
	$('#carousel_final-de-obras').removeClass('carousel');
	$('#carousel_vidrios').removeClass('carousel');
	$('#carousel_oficinas').removeClass('carousel');
	$('#carousel_especiales').removeClass('carousel');
}

function change_carousel(id){
	//cambiar slider
	remove_class_carousel();
	$('#carousel_'+id).addClass('carousel');

	$('.carousel').carousel({
		interval: 5000
	});

}

$(document).ready(function () {
	//activar slider menu
  $('.carousel').carousel({
		interval: false
	});
  //obtener contenido de homepage por ajax
  $.get('/empresa', function (data) { adjust(data) });
});

