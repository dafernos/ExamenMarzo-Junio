{
	let $sublista,$parrafito,$h3derecha;
	let f1 = function(){
		$h3derecha.animate({height:0},500,
			function(){
				$h3derecha.animate({height:50},500);
			}
		)
	};
	let f2 = function(){
		$('ul').fadeOut().fadeIn();
	}
	let f3 = function(){
		$sublista.animate({height:0},500,
			function(){
				$sublista.animate({height:40},500);
			}
		);
	}
	let f4 = function(){
		$parrafito.animate({width:0},1000,
			function(){
				$parrafito.animate({width:700},1000);
			}
		);
	};
	let f5 = function () {
		$('select[size=5] :selected').css({backgroundColor: "green"});
	}
	let f6 = function(){
		$('code').animate({margin:'5px'},500).addClass('highlight');
	}
	let bienvenida = function(){
		$(this).fadeOut().fadeIn();
	}
	let init = function(){
		let arrayFunciones = [f1,f2,f3,f4,f5,f6];
		$sublista = $('li').has('ul');
		//cambiar el nombre
		let $nombre= $('h1');
		$nombre.text($nombre.text().replace(/Nombre Apellido1 Apellido2/i, "Darío Fernández Osuna"));
		//meter mi nombre en el textarea cuando carga el dom
		let $txtarea=$('#customInput').val('Darío Fernández Osuna');
		let $botones = $('.sample-code + input');
		//recoger los h3
		$h3bienvenida = $(".example:first h3").attr('id','fernandez')
			//.fadeOut()
			//.fadeIn()
			.click(bienvenida)
			.click();
		$parrafito = $('p:first');
		//Comportamiento de los votones
		$.each($botones,function(index, el) {
			$(this).on('click',arrayFunciones[index]);
		});
		//peticion ajax
		$('#toggleCustom').on('click', function() {
			$.getJSON({
				url: 'archivo.json',
				success:function(data){
					$(data).each(function(indice, elemento) {
						$txtarea.val(elemento.texto);
					});
				}
			});	
		});
		$h3derecha = $("h3:first").plugin();
		$('#miId').plugin({
			background : "red",
			height : "100%",
			fontSize : "6em"
		});
	};
	$(init);
	//Plugin
	$.fn.plugin= function(options){
		var opts = $.extend(true, {}, $.fn.plugin.defaults, options);

		$(this).css('background',opts['background']).on('click', function(){
			$(this).css({
				height: opts['height'],
				fontSize: opts['fontSize']
			});
		})
			.on('dblclick', function(){
				$(this).css({
					height: '',
					fontSize: ''
				});
			});
		return this;
	}
	//Valores por defecto para el pluging
	$.fn.plugin.defaults={
		background:'yellow',
		height: '40%',
		fontSize: '3em',
	}
}