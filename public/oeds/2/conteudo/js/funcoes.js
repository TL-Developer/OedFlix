// *********** PARA TROCAR INSTRUÇÕES CHAME A FUNÇÃO: TrocaInstrucao('INSTRUÇÃO NOVA');  ******************
// * ********* PARA TROCAR NAVEGABILIDADE CHAME A FUNÇÃO: TrocaNavegacao('NAVEGABILIDADE NOVA'); **********
// * ********* PARA ADICIONAR CLASSES DE ANIMAÇÕES(animate.css ou magic.css) CHAME A FUNÇÃO:
//  addAnimateClass('class da animação', tempo da animação);
//  exemplo1:
//	elemento.addAnimateClass('magictime puffIn', 1000);

//  exemplo2:
//	elemento.addAnimateClass('magictime puffIn'); se não declarar o tempo de animação, ele joga por default o tempo de 1000

//  exemplo3:
//	elemento.addAnimateClass('magictime puffIn', true); ao inserir true o elemento desaparece após finalizar animação

//  exemplo4:
//	elemento.addAnimateClass('magictime puffIn', true, function(){ alert('Chama proxima fase') }); Callback ativo para inserir funções após finalizar
//**********


// ************ AUDIOS PLUGIN HOWLER.JS  Documentação: http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library ***************

// Para declarar apenas um áudio
	// var trilha_sonora = new Howl({urls: ['media/audio/trilha_sonora.mp3'], volume: 1});

// Para declarar um sprite de áudio
/*
	var narracao = new Howl({  urls: ['media/audio/narracao1.mp3','media/audio/narracao1.ogg'],  sprite: {
		text1: [0, 53500],
		text2: [29500, 51500],
		text3: [29500, 51500]
	}});
*/

// Para chamar o áudio:
// trilha_sonora.stop().play();

// Para alterar volume do áudio, valor de 0 até 1
// trilha_sonora.volume(1);

// ************ AUDIOS PLUGIN HOWLER.JS ***************

'use strict';

var escalaElemento;

// REDIMENSIONA TODO CONTEUDO NO CENTRO NA PÁGINA
function redimensionaElemento() {
    var elemento = $('.container');

    var larguraJanela = $(window).width();
    var alturaJanela = $(window).height();
    var larguraInicialElemento = 1024;
    var alturaInicialElemento = 660;

    var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

    if (alturaJanela <= larguraJanela) {
        var alturaRedimensionada = alturaJanela;
        var larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
        if (larguraJanela < larguraRedimensionada) {
            var larguraRedimensionada = larguraJanela;
            var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
        }
    }

    else {
        var larguraRedimensionada = larguraJanela;
        var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
    }

    var escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
    var escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
    if(escalaLargura <= 1){
	    elemento.css({
	        '-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
	    });
	}else{
		elemento.css({
	        '-webkit-transform': 'scale(1))',
	        '-moz-transform': 'scale(1)',
	        '-ms-transform': 'scale(1)',
	        '-o-transform': 'scale(1)',
	        'transform': 'scale(1)'
	    });
	}

    var style = elemento.get(0).style;
    var matrix = new WebKitCSSMatrix(style.webkitTransform);

    escalaElemento = matrix.a;
};


var sound = new Howl({  urls: ['media/electricguitar.mp3','media/electricguitar.ogg'], loop: true, onend: function() { tocar_sound1();}});
var acert = new Howl({  urls: ['media/acerto.mp3','media/acerto.ogg']});
var erro = new Howl({  urls: ['media/erro.mp3','media/erro.ogg']});
var toc = new Howl({  urls: ['media/toc.mp3','media/toc.ogg']});
var textNarrador = new Howl({  urls: ['media/DLP3-02_PARTE_01.mp3','media/DLP3-02_PARTE_01.ogg'],  sprite: {    text1: [0, 1900], text2: [2000, 1900], text3: [4000, 5900], text4: [10000, 5900], text5: [16000, 5900], text6: [22000, 4900], text7: [27000, 10900], text8: [38000, 9500] }});
var textNarrador2 = new Howl({  urls: ['media/DLP3-02_PARTE_02.mp3','media/DLP3-02_PARTE_02.ogg'],  sprite: {     text1: [0, 1900], text2: [2000, 16900], text3: [19000, 4900], text4: [24000, 1900], text5: [26000, 8900], text6: [35000, 6900] }});

function tocar_sound1(){
	sound.stop();
	sound.play();
}

var startGame = {

	colorPopup: function(gameover){
		if( gameover == 'game1' ){
			$('.popup').children('.content').css('border','5px solid #00d705');
			$('.popup').children('.content').children('.btn').css('backgroundColor','#00d705');
		}else if( gameover == 'game2' ){
			$('.popup').children('.content').css('border','5px solid #25c29a');
			$('.popup').children('.content').children('.btn').css('backgroundColor','#25c29a');
		}else if( gameover == 'game3' ){
			$('.popup').children('.content').css('border','5px solid #ff5000');
			$('.popup').children('.content').children('.btn').css('backgroundColor','#ff5000');
		}else if( gameover == 'game4' ){
			$('.popup').children('.content').css('border','5px solid #ff7700');
			$('.popup').children('.content').children('.btn').css('backgroundColor','#ff7700');
		}
	},

	dragg: function(){
		$('.dragg').draggable({ revert: true });

		// GUARDAMOS TODAS AS POSIÇÕES INICIAIS DOS ALIMENTOS ANTES DO DRAG
		var areaClique = {x: 0, y: 0};

		$(".dragg").on({
		    dragstart:function(event){
		        areaClique.x = event.clientX;
		        areaClique.y = event.clientY;
		        console.log("Posição X = " + areaClique.x + "Posição Y = " + areaClique.y)
		    },
		    drag:function(event,ui){
		        ui.position = {
		            left: (event.clientX - areaClique.x + ui.originalPosition.left),
		            top: (event.clientY - areaClique.y + ui.originalPosition.top)
		        };
		    },
		    dragstop:function(){}
		});
	},

	game4: function(){
		setTimeout(function(){
			textNarrador2.stop().play('text4');
		}, 2000);
		textNarrador.stop();
		$('.droppGame4').droppable({
			drop: function(event, ui){
				var _self = $(ui.helper);
				var _target = $(event.target);
				startGame.colorPopup('game4');
				if ( _self.attr('id') == 'certo' ){
					acert.stop().play();
					_target.text( _self.text() ).css({
						'backgroundColor': _self.css('backgroundColor'),
						'color': _self.css('color'),
						'fontFamily': _self.css('fontFamily'),
						'fontSize': _self.css('fontSize'),
						'fontWeight': _self.css('fontWeight'),
						'paddingLeft': _self.css('paddingLeft'),
						'paddingRight': _self.css('paddingRight'),
						'paddingTop': _self.css('paddingTop'),
						'paddingBottom': _self.css('paddingBottom'),
						'height': _self.css('height'),
						'textAlign': _self.css('textAlign'),
					});
					_self.hide();

					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Perfeito! Sempre que perguntamos algo, precisamos utilizar o ponto de interrogação.');
					textNarrador.stop();
					textNarrador2.stop().play('text5');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);

						$('.game4').addAnimateClass('zoomOut-animation', 2000, true);

						setTimeout(function(){
							window.parent.location.href = '../index.html';
						},2000);

					});
				}else{
					erro.stop().play();
					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Tente novamente! Você precisa escolher o sinal de pontuação que indique dúvida.');
					textNarrador.stop();
					textNarrador2.stop().play('text6');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);
					});
				}
			}
		});
	},

	game3: function(){
		setTimeout(function(){
			textNarrador2.stop().play('text1');
		}, 2000);
		textNarrador.stop();
		$('.droppGame3').droppable({
			drop: function(event, ui){
				var _self = $(ui.helper);
				var _target = $(event.target);
				startGame.colorPopup('game3');
				if ( _self.attr('id') == 'certo' ){
					acert.stop().play();
					_target.text( _self.text() ).css({
						'backgroundColor': _self.css('backgroundColor'),
						'color': _self.css('color'),
						'fontFamily': _self.css('fontFamily'),
						'fontSize': _self.css('fontSize'),
						'fontWeight': _self.css('fontWeight'),
						'paddingLeft': _self.css('paddingLeft'),
						'paddingRight': _self.css('paddingRight'),
						'paddingTop': _self.css('paddingTop'),
						'paddingBottom': _self.css('paddingBottom'),
						'height': _self.css('height'),
						'textAlign': _self.css('textAlign'),
					});
					_self.hide();

					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Está correto! Utilizamos o ponto de exclamação para mostrar surpresa, espanto, alegria, entusiasmo, raiva e outras emoções. Ele também serve para enfatizar nossa fala, torná-la mais forte.');
					textNarrador.stop();
					textNarrador2.stop().play('text2');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);

						$('.game3').addAnimateClass('zoomOut-animation', 2000, true);
						setTimeout(function(){

						$('.game4').fadeIn();
						},2000);

						startGame.game4();

					});
				}else{
					erro.stop().play();
					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Tente novamente! Você precisa escolher a pontuação que enfatiza a fala.');
					textNarrador.stop();
					textNarrador2.stop().play('text3');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);
					});
				}
			}
		});
	},

	game2: function(){
		setTimeout(function(){
			textNarrador.stop().play('text6');
		}, 2000);
		textNarrador2.stop();
		$('.droppGame2').droppable({
			drop: function(event, ui){
				var _self = $(ui.helper);
				var _target = $(event.target);
				startGame.colorPopup('game2');
				if ( _self.attr('id') == 'certo' ){
					acert.stop().play();
					_target.text( _self.text() ).css({
						'backgroundColor': _self.css('backgroundColor'),
						'color': _self.css('color'),
						'fontFamily': _self.css('fontFamily'),
						'fontSize': _self.css('fontSize'),
						'fontWeight': _self.css('fontWeight'),
						'paddingLeft': _self.css('paddingLeft'),
						'paddingRight': _self.css('paddingRight'),
						'paddingTop': _self.css('paddingTop'),
						'paddingBottom': _self.css('paddingBottom'),
						'height': _self.css('height'),
						'textAlign': _self.css('textAlign'),
					});
					_self.hide();

					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Acertou! As reticências indicam hesitações, ou seja, um intervalo em que pensamos no que iremos dizer.');
					textNarrador2.stop();
					textNarrador.stop().play('text7');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);

						$('.game2').addAnimateClass('zoomOut-animation', 2000, true);
						setTimeout(function(){

						$('.game3').fadeIn();
						},2000);

						startGame.game3();

					});
				}else{
					erro.stop().play();
					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Tente novamente! Você precisa escolher a pontuação que indica hesitação, ou seja, uma pausa.');
					textNarrador2.stop();
					textNarrador.stop().play('text8');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);
					});
				}
			}
		});
	},

	game1: function(){
		textNarrador2.stop();
		textNarrador.stop().play('text2');
		$('.droppGame1').droppable({
			drop: function(event, ui){
				var _self = $(ui.helper);
				var _target = $(event.target);
				startGame.colorPopup('game1');
				if ( _self.attr('id') == 'certo' ){
					acert.stop().play();
					_target.text( _self.text() ).css({
						'backgroundColor': _self.css('backgroundColor'),
						'color': _self.css('color'),
						'fontFamily': _self.css('fontFamily'),
						'fontSize': _self.css('fontSize'),
						'fontWeight': _self.css('fontWeight'),
						'paddingLeft': _self.css('paddingLeft'),
						'paddingRight': _self.css('paddingRight'),
						'paddingTop': _self.css('paddingTop'),
						'paddingBottom': _self.css('paddingBottom'),
						'height': _self.css('height'),
						'textAlign': _self.css('textAlign'),
					});
					_self.hide();

					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Muito bem! O ponto final é utilizado para encerrar as falas.');
					textNarrador2.stop();
					textNarrador.stop().play('text4');

					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);

						$('.game1').addAnimateClass('zoomOut-animation', 2000, true);
						setTimeout(function(){

						$('.game2').fadeIn();
						},2000);

						startGame.game2();

					});
				}else{
					erro.stop().play();
					$(this).parent().siblings('.popup').fadeIn(500).children('.content').animate({
						'top' : '25%'
					},1000, 'easeOutBounce');

					$(this).parent().siblings('.popup').children('.content').children('p').html('Tente novamente! Você precisa utilizar a pontuação que encerra a ideia.');
					textNarrador2.stop();
					textNarrador.stop().play('text5');
					$(this).parent().siblings('.popup').children('.content').children('.btn').on('click', function(){
						textNarrador2.stop();
						textNarrador.stop();
						$(this).parent().animate({
							'top' : '-110%'
						},1000);

						$(this).parent().parent().fadeOut(1000);
					});
				}
			}
		});

	},

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){

		toc.stop().play();

		startGame.dragg();
		// $('.game2, .game3, .game4').scale('3');
		$('.game2, .game3, .game4').css({'opacity':'1','display':'none'});

		setTimeout(function(){

			setTimeout(function(){
				$(".videoContent video").get(0).play();
			}, 500);

			setTimeout(function(){
				$(".videoContent video").on("ended",function(){
					sound.stop().play().volume(0.05);
					setTimeout(function(){
						$(".videoContent").animate({rotate: '360deg', scale: '0', opacity: 0 }, 1500).fadeOut(100);
						startGame.game1();
						sound.stop().play().volume(0.2);
					}, 1000);
				});
			}, 3000);

		}, 200);

	}
};

// startGame.init();
