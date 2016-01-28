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
var trilha_sonora = new Howl({
	urls: ['media/audio/trilha_sonora.mp3','media/audio/trilha_sonora.ogg'],
	autoplay: false,
	loop: true,
	volume: 0.8
});

var trilha_sonora_2 = new Howl({
	urls: ['media/audio/trilha_sonora_2.mp3','media/audio/trilha_sonora_2.ogg'],
	autoplay: false,
	loop: true,
	volume: 0.1
});

var hover = new Howl({
	urls: ['media/audio/hover.mp3','media/audio/hover.ogg'],
	autoplay: false,
	volume: 0.5
});

var accept = new Howl({
	urls: ['media/audio/accept.mp3','media/audio/accept.ogg'],
	autoplay: false,
	volume: 1
});

var effectsZoom = new Howl({
	urls: ['media/audio/effectsZoom.mp3','media/audio/effectsZoom.ogg'],
	autoplay: false,
	volume: 1
});

var fogosSound = new Howl({
	urls: ['media/audio/fogos.mp3','media/audio/fogos.ogg'],
	autoplay: false,
	volume: 1
});

var espirraAgua = new Howl({
	urls: ['media/audio/espirra_agua.mp3','media/audio/espirra_agua.ogg'],
	autoplay: false,
	volume: 1
});

var jogaVaraSound = new Howl({
	urls: ['media/audio/joga-vara.mp3','media/audio/joga-vara.ogg'],
	autoplay: false,
	volume: 1
});

var puxaVara = new Howl({
	urls: ['media/audio/puxa-vara.mp3','media/audio/puxa-vara.ogg'],
	autoplay: false,
	volume: 1
});

var erroSound = new Howl({
	urls: ['media/audio/erro.mp3','media/audio/erro.ogg'],
	autoplay: false,
	volume: 1
});

var pushIn = new Howl({
	urls: ['media/audio/hover_push.mp3','media/audio/hover_push.ogg'],
	autoplay: false,
	volume: 1
});

var toc = new Howl({
	urls: ['media/audio/toc.mp3','media/audio/toc.ogg'],
	autoplay: false,
	volume: 1
});

var flip = new Howl({
	urls: ['media/audio/flip.mp3','media/audio/flip.ogg'],
	autoplay: false,
	volume: 1
});

var narracao1 = new Howl({
	urls: ['media/audio/narracao1.mp3'],
	sprite: {
		text1: [0, 6000],
		text2: [6200, 14100],
		peteca: [20900, 1100],
		boneca: [22250, 1100],
		aviao: [23500, 1100],
		estrela: [25000, 1100],
		ursinho: [26400, 1100],
		bola: [27800, 1100],
		ioio: [28900, 1100],
		carrinho: [30200, 1100],
		oculos: [31700, 1100],
		text3: [33100, 5500],
		text4: [39200, 7500],
		text5: [47150, 5500],
		text6: [53100, 7500]
	}
});

var narracao2 = new Howl({  urls: ['media/audio/narracao2.mp3','media/audio/narracao2.ogg'],  sprite: {
	text1: [0200, 5500],
	text2: [7150, 7500],
	text3: [15100, 5500],
	text4: [20200, 7500],
	text5: [28200, 5500],
	text6: [34200, 9500],
	text7: [44200, 6500],
	text8: [52000, 3500],
	text9: [57050, 4000]
}});



// ************ AUDIOS PLUGIN HOWLER.JS ***************

'use strict';

var startGame = {

	audioBrinquedos: function(self){
		if(self.hasClass('peteca')){
			narracao1.stop().play('peteca');
		}else if(self.hasClass('boneca')){
			narracao1.stop().play('boneca');
		}else if(self.hasClass('aviao')){
			narracao1.stop().play('aviao');
		}else if(self.hasClass('estrela')){
			narracao1.stop().play('estrela');
		}else if(self.hasClass('ursinho')){
			narracao1.stop().play('ursinho');
		}else if(self.hasClass('bola')){
			narracao1.stop().play('bola');
		}else if(self.hasClass('ioio')){
			narracao1.stop().play('ioio');
		}else if(self.hasClass('carrinho')){
			narracao1.stop().play('carrinho');
		}else if(self.hasClass('oculos')){
			narracao1.stop().play('oculos');
		}
	},

	fogos: function(){
		var tela = $('.fogos')
			,	fogos = tela.children('.fogo');

		tela.show();

		fogosSound.stop().play();

		var anFogos = function(){
			fogos.each(function(i) {
		    var $self = $(this);
		    setTimeout(function() {
		      $self.show().addAnimateClass('fadeIn magictime', function(){
		      	$self.show().addAnimateClass('puffOut magictime', true);
		      });
		    }, i*100);
	  	});
	  };

	  anFogos();
	  setTimeout(function(){
	  	fogosSound.stop().play();
	  	anFogos();
	  	setTimeout(function(){
	  		fogosSound.stop().play();
		  	anFogos();
		  },2500);
	  },2500);
	},

	entradaLetra: function(letter){
		var popup = $('.popup-letras')
			,	letra = popup.children('.letra');

		$(popup).removeClass('popupOut');
		$(letra).removeClass('letraOut');

		if(letter == 'a'){
			letra.attr('src','img/letra_a.png');
		}else if(letter == 'e'){
			letra.attr('src','img/letra_e.png');
		}else if(letter == 'i'){
			letra.attr('src','img/letra_i.png');
		}else if(letter == 'o'){
			letra.attr('src','img/letra_o.png');
		}else if(letter == 'u'){
			letra.attr('src','img/letra_u.png');
		}


		popup.fadeIn(1000, function(){

			setTimeout(function(){
				accept.stop().play();
			}, 500);

			letra.show().addAnimateClass('zoomIn animated', function(){
				effectsZoom.stop().play();
				$(popup).addClass('popupOut');
				$(letra).addClass('letraOut');
				$('.criancas').hide();
				$('.meninoPescando').show();
				$('.meninaPescando').show();
				$('.criancaPiscando').show();
			});
		});
	},

	insereObjbarco: function(objetos, srcObj, left, top, zIndex, width, feedbackFalaAcerto, proximaTela, locucao, tempo){
		var caixaObjetos = $('.caixa-objetos');

		caixaObjetos.show();
		caixaObjetos.append('<img src="'+srcObj+'" alt="objetos" style="left:'+left+'; top:'+top+'; width:'+width+'; z-index:'+zIndex+';">');
		caixaObjetos.children('img').last().show().addAnimateClass('bounceIn animated');


		var feedbackAcerto = function(){
			locucao();
			pushIn.stop().play();
			feedbackFalaAcerto.show().addAnimateClass('lightSpeedIn animated', tempo, function(){
				setTimeout(function(){
					pushIn.stop().play();
				}, 500);
				feedbackFalaAcerto.addAnimateClass('bounceOut animated', true, function(){
					proximaTela();
				});
			});
		};

		setTimeout(function(){
			$('.popup-letras').fadeOut(1000, function(){
				$('.popup-letras').removeClass('popupOut');
				$('.popup-letras').children('img').removeClass('letraOut').hide();
			});
			objetos.eq(0).addAnimateClass('fadeOutDown animated', true);
			setTimeout(function(){
				objetos.eq(1).addAnimateClass('fadeOutDown animated', true);

				setTimeout(function(){
					objetos.eq(2).addAnimateClass('fadeOutDown animated', true, function(){
						feedbackAcerto();
					});
				},250);

			},250);
		},1000);
	},

	pescaVogais: function(){

		TrocaInstrucao('Clique no ícone da casa para acessar a tela inicial. <br />Clique nas letras que são vogais.');

		var tela = $('.tela-vogais')
			,	letras = tela.children('.letras')
			, feedbackAcerto = $('.fala-letras-feed-acerto')
			, feedbackErro = $('.fala-letras-feed-erro');

		$('.block').hide();

		feedbackErro.attr('src','img/vogal_erro.png');
		feedbackAcerto.attr('src','img/feedback_vogais_finalizadas.png').css({
			'top': '92px',
  		'right': '299px'
		});

		tela.show();

	  letras.each(function(i) {
	    var $self = $(this);
	    setTimeout(function() {
	    	pushIn.stop().play();
	      $self.show().addAnimateClass('fadeInUp animated');
	    }, i*100);
	  });

	  var lancaLetraNoPainel = function(vogal){
	  	var painel = $('.painel-vogais');

	  	flip.stop().play();
	  	painel.show().addClass('flipInX animated');
	  	setTimeout(function(){
	  		$('.block').hide();
				pushIn.stop().play();
	  		painel.children('.'+vogal).show().addAnimateClass('lightSpeedIn animated');
	  		painel.children('.'+vogal).addClass('visto');

		  	if(painel.children('.visto').length == 5){

		  		letras.each(function(i) {
				    var $self = $(this);
				    setTimeout(function() {
				    	pushIn.stop().play();
				      $self.show().addAnimateClass('fadeOutDown animated', true);
				    }, i*100);
				  });

		  		setTimeout(function(){
		  			$('.tela-principal').addClass('telaPrincipalOut');
			  			setTimeout(function(){

			  				painel.removeClass('flipInX animated');
			  				flip.stop().play();
			  				painel.addAnimateClass('flipOutX animated', true);

			  				setTimeout(function(){
			  					startGame.fogos();
			  					narracao2.play('text9');
			  					pushIn.stop().play();
				  				feedbackAcerto.show().addAnimateClass('lightSpeedIn animated', 4000,function(){
				  					setTimeout(function(){
											pushIn.stop().play();
										}, 500);
										feedbackAcerto.show().addAnimateClass('bounceOut animated', true, function(){
											setTimeout(function(){
												window.parent.location.href = '../index.html';
											}, 3500);
										});
									});
				  			}, 1000);

			  			},1000);
			  		}, 2500);

	  		}

	  	}, 500);
	  };

	  var jogaVara = function(linha, selfLetra, vogal, pessoa){
	  	if(pessoa == 'menina'){
		  	jogaVaraSound.stop().play();
		  	$('.meninaPescando').addClass('anJogaVara');
		  	$('.block').show();
				setTimeout(function(){
					$('.'+linha).show();
					espirraAgua.stop().play();
					$('.espirra-agua').show().addAnimateClass('magictime puffOut', true);

					setTimeout(function(){
						startGame.audioBrinquedos(selfLetra);
						$('.'+linha).hide();
						puxaVara.stop().play();
						$('.meninaPescando').addClass('anJogaVaraOut');

						selfLetra.addAnimateClass('fadeOutUp animated', true);

						setTimeout(function(){
							$('.meninaPescando').removeClass('anJogaVara anJogaVaraOut');
							lancaLetraNoPainel(vogal);
						}, 500);
					},1000);
				}, 500);
			}else{
				jogaVaraSound.stop().play();
		  	$('.meninoPescando').addClass('anJogaVaraMenino');
		  	$('.block').show();
				setTimeout(function(){
					$('.'+linha).show();
					espirraAgua.stop().play();
					$('.espirra-agua-menino').show().addAnimateClass('magictime puffOut', true);

					setTimeout(function(){
						startGame.audioBrinquedos(selfLetra);
						$('.'+linha).hide();
						puxaVara.stop().play();
						$('.meninoPescando').addClass('anJogaVaraMeninoOut');

						selfLetra.addAnimateClass('fadeOutUp animated', true);

						setTimeout(function(){
							$('.meninoPescando').removeClass('anJogaVaraMenino anJogaVaraMeninoOut');
							lancaLetraNoPainel(vogal);
						}, 500);
					},1000);
				}, 500);
			}
	  };

	  letras.on('mouseover', function(){
			hover.stop().play();
		});

	  letras.off('click').on('click', function(){
	  	toc.stop().play();
	  	var id = this.id
	  		,	self = $(this);

	  	if(id == 'letra-a'){
	  		jogaVara('linha-letra-a', self, 'vogal-a', 'menina');
	  	}else if(id == 'letra-e'){
	  		jogaVara('linha-letra-e', self, 'vogal-e');
	  	}else if(id == 'letra-i'){
	  		jogaVara('linha-letra-i', self, 'vogal-i', 'menina');
	  	}else if(id == 'letra-o'){
	  		jogaVara('linha-letra-o', self, 'vogal-o');
	  	}else if(id == 'letra-u'){
	  		jogaVara('linha-letra-u', self, 'vogal-u', 'menina');
	  	}else{
	  		$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao2.play('text8');
						pushIn.stop().play();
						feedbackErro.show().addAnimateClass('lightSpeedIn animated', 3500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							feedbackErro.show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
	  	}
	  });
	},

	// SCRIPTS TELA 5 AQUI
	tela5: function(){
		var tela = $('.tela-5')
			,	objetos = tela.children('.objetos')
			,	objetoCertoSrc = tela.children('#certo').attr('src')
			, feedbackAcerto = $('.fala-letras-feed-acerto')
			, feedbackErro = $('.fala-letras-feed-erro');

		$('.block').hide();

		feedbackErro.attr('src','img/letra_u_erro_feedback.png');
		feedbackAcerto.attr('src','img/letra_u_acerto_feedback.png').css({
			'top': '232px',
  		'right': '9px'
		});

		var cliqueObjetos = function(){

			objetos.on('mouseover', function(){
				hover.stop().play();
			});

			objetos.off('click').on('click', function(){
				toc.stop().play();
				var id = this.id;
				var that = $(this);

				if(id == 'certo'){
					jogaVaraSound.stop().play();
					$('.meninaPescando').addClass('anJogaVara');
					$('.block').show();
					setTimeout(function(){
						$('.linha3').show();
						espirraAgua.stop().play();
						$('.espirra-agua').show().addAnimateClass('magictime puffOut', true);

						setTimeout(function(){
							startGame.audioBrinquedos(that);
							$('.linha3').hide();
							puxaVara.stop().play();
							$('.meninaPescando').addClass('anJogaVaraOut');

							tela.children('#certo').addAnimateClass('fadeOutUp animated', true);

							setTimeout(function(){
								$('.meninaPescando').removeClass('anJogaVara anJogaVaraOut');
								startGame.insereObjbarco(objetos, objetoCertoSrc, '80px', '5px', 4, '85px',feedbackAcerto ,function(){
									startGame.pescaVogais();
								}, function(){
									narracao2.play('text6');
								}, 9500);

							}, 500);
						},1000);

					}, 500);
				}else{
					startGame.audioBrinquedos(that);
					$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao2.play('text5');
						pushIn.stop().play();
						feedbackErro.show().addAnimateClass('lightSpeedIn animated', 5500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							feedbackErro.show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
				}
			});
		};

		startGame.entradaLetra('u');

		setTimeout(function(){

			tela.show();
			pushIn.stop().play();
			objetos.eq(0).show().addAnimateClass('fadeInUp animated');
			setTimeout(function(){
				pushIn.stop().play();
				objetos.eq(1).show().addAnimateClass('fadeInUp animated');

				setTimeout(function(){
					pushIn.stop().play();
					objetos.eq(2).show().addAnimateClass('fadeInUp animated', function(){
						cliqueObjetos();
					});
				},250);
			},250);

		},3000);

	},

	// SCRIPTS TELA 4 AQUI
	tela4: function(){
		var tela = $('.tela-4')
			,	objetos = tela.children('.objetos')
			,	objetoCertoSrc = tela.children('#certo').attr('src')
			, feedbackAcerto = $('.fala-letras-feed-acerto')
			, feedbackErro = $('.fala-letras-feed-erro');

		$('.block').hide();

		feedbackErro.attr('src','img/letra_o_erro_feedback.png');
		feedbackAcerto.attr('src','img/letra_o_acerto_feedback.png');

		var cliqueObjetos = function(){

			objetos.on('mouseover', function(){
				hover.stop().play();
			});

			objetos.off('click').on('click', function(){
				toc.stop().play();
				var id = this.id;
				var that = $(this);

				if(id == 'certo'){
					jogaVaraSound.stop().play();
					$('.meninoPescando').addClass('anJogaVaraMenino');
					$('.block').show();
					setTimeout(function(){
						$('.linha1-menino').show();
						espirraAgua.stop().play();
						$('.espirra-agua-menino').show().addAnimateClass('magictime puffOut', true);

						setTimeout(function(){
							startGame.audioBrinquedos(that);
							$('.linha1-menino').hide();
							puxaVara.stop().play();
							$('.meninoPescando').addClass('anJogaVaraMeninoOut');

							tela.children('#certo').addAnimateClass('fadeOutUp animated', true);

							setTimeout(function(){
								$('.meninoPescando').removeClass('anJogaVaraMenino anJogaVaraMeninoOut');
								startGame.insereObjbarco(objetos, objetoCertoSrc, '0px', '-5px', 3, '102px',feedbackAcerto ,function(){
									startGame.tela5();
								}, function(){
									narracao2.play('text4');
								}, 7500);

							}, 500);
						},1000);

					}, 500);
				}else{
					startGame.audioBrinquedos(that);
					$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao2.play('text3');
						pushIn.stop().play();
						feedbackErro.show().addAnimateClass('lightSpeedIn animated', 5500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							feedbackErro.show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
				}
			});
		};

		startGame.entradaLetra('o');

		setTimeout(function(){

			tela.show();
			pushIn.stop().play();
			objetos.eq(0).show().addAnimateClass('fadeInUp animated');
			setTimeout(function(){
				pushIn.stop().play();
				objetos.eq(1).show().addAnimateClass('fadeInUp animated');

				setTimeout(function(){
					pushIn.stop().play();
					objetos.eq(2).show().addAnimateClass('fadeInUp animated', function(){
						cliqueObjetos();
					});
				},250);
			},250);

		},3000);

	},

	// SCRIPTS TELA 3 AQUI
	tela3: function(){
		var tela = $('.tela-3')
			,	objetos = tela.children('.objetos')
			,	objetoCertoSrc = tela.children('#certo').attr('src')
			, feedbackAcerto = $('.fala-letras-feed-acerto')
			, feedbackErro = $('.fala-letras-feed-erro');

		$('.block').hide();

		feedbackErro.attr('src','img/letra_i_erro_feedback.png');
		feedbackAcerto.attr('src','img/letra_i_acerto_feedback.png');

		var cliqueObjetos = function(){

			objetos.on('mouseover', function(){
				hover.stop().play();
			});

			objetos.off('click').on('click', function(){
				toc.stop().play();
				var id = this.id;
				var that = $(this);

				if(id == 'certo'){
					jogaVaraSound.stop().play();
					$('.meninaPescando').addClass('anJogaVara');
					$('.block').show();
					setTimeout(function(){
						$('.linha3').show();
						espirraAgua.stop().play();
						$('.espirra-agua').show().addAnimateClass('magictime puffOut', true);

						setTimeout(function(){
							startGame.audioBrinquedos(that);
							$('.linha3').hide();
							puxaVara.stop().play();
							$('.meninaPescando').addClass('anJogaVaraOut');

							tela.children('#certo').addAnimateClass('fadeOutUp animated', true);

							setTimeout(function(){
								$('.meninaPescando').removeClass('anJogaVara anJogaVaraOut');
								startGame.insereObjbarco(objetos, objetoCertoSrc, '211px', '5px', 2, '78px',feedbackAcerto ,function(){
									startGame.tela4();
								}, function(){
									narracao2.play('text2');
								}, 7500);

							}, 500);
						},1000);

					}, 500);
				}else{
					startGame.audioBrinquedos(that);
					$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao2.play('text1');
						pushIn.stop().play();
						feedbackErro.show().addAnimateClass('lightSpeedIn animated', 5500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							feedbackErro.show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
				}
			});
		};

		startGame.entradaLetra('i');

		setTimeout(function(){

			tela.show();
			pushIn.stop().play();
			objetos.eq(0).show().addAnimateClass('fadeInUp animated');
			setTimeout(function(){
				pushIn.stop().play();
				objetos.eq(1).show().addAnimateClass('fadeInUp animated');

				setTimeout(function(){
					pushIn.stop().play();
					objetos.eq(2).show().addAnimateClass('fadeInUp animated', function(){
						cliqueObjetos();
					});
				},250);
			},250);

		},3000);

	},

	// SCRIPTS TELA 2 AQUI
	tela2: function(){
		var tela = $('.tela-2')
			,	objetos = tela.children('.objetos')
			,	objetoCertoSrc = tela.children('#certo').attr('src')
			, feedbackAcerto = $('.fala-letras-feed-acerto')
			, feedbackErro = $('.fala-letras-feed-erro');

		$('.block').hide();

		feedbackErro.attr('src','img/letra_e_erro_feedback.png');
		feedbackAcerto.attr('src','img/letra_e_acerto_feedback.png');

		var cliqueObjetos = function(){

			objetos.on('mouseover', function(){
				hover.stop().play();
			});

			objetos.off('click').on('click', function(){
				toc.stop().play();
				var id = this.id;
				var that = $(this);

				if(id == 'certo'){
					jogaVaraSound.stop().play();
					$('.meninoPescando').addClass('anJogaVaraMenino');
					$('.block').show();
					setTimeout(function(){
						$('.linha3-menino').show();
						espirraAgua.stop().play();
						$('.espirra-agua-menino').show().addAnimateClass('magictime puffOut', true);

						setTimeout(function(){
							startGame.audioBrinquedos(that);
							$('.linha3-menino').hide();
							puxaVara.stop().play();
							$('.meninoPescando').addClass('anJogaVaraMeninoOut');

							tela.children('#certo').addAnimateClass('fadeOutUp animated', true);

							setTimeout(function(){
								$('.meninoPescando').removeClass('anJogaVaraMenino anJogaVaraMeninoOut');
								startGame.insereObjbarco(objetos, objetoCertoSrc, '208px', '3px', 1, '77px',feedbackAcerto ,function(){
									startGame.tela3();
								}, function(){
									narracao1.play('text6');
								}, 7500);

							}, 500);
						},1000);

					}, 500);
				}else{
					startGame.audioBrinquedos(that);
					$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao1.play('text5');
						pushIn.stop().play();
						feedbackErro.show().addAnimateClass('lightSpeedIn animated', 5500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							feedbackErro.show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
				}
			});
		};

		startGame.entradaLetra('e');

		setTimeout(function(){

			tela.show();
			pushIn.stop().play();
			objetos.eq(0).show().addAnimateClass('fadeInUp animated');
			setTimeout(function(){
				pushIn.stop().play();
				objetos.eq(1).show().addAnimateClass('fadeInUp animated');

				setTimeout(function(){
					pushIn.stop().play();
					objetos.eq(2).show().addAnimateClass('fadeInUp animated', function(){
						cliqueObjetos();
					});
				},250);
			},250);

		},3000);

	},

	// SCRIPTS TELA 1 AQUI
	tela1: function(){

		TrocaInstrucao('Clique no ícone da casa para acessar a tela inicial. <br />Clique no objeto correto para ir à fase seguinte.');

		var tela = $('.tela-1')
			,	objetos = tela.children('.objetos')
			,	objetoCertoSrc = tela.children('#certo').attr('src')
			, feedbackAcerto = $('.fala-letra-a-feed-acerto');

		var cliqueObjetos = function(){

			objetos.on('mouseover', function(){
				hover.stop().play();
			});

			objetos.off('click').on('click', function(){
				toc.stop().play();
				var id = this.id;
				var that = $(this);


				if(id == 'certo'){
					jogaVaraSound.stop().play();
					$('.meninaPescando').addClass('anJogaVara');
					$('.block').show();
					setTimeout(function(){
						$('.linha2').show();
						espirraAgua.stop().play();
						$('.espirra-agua').show().addAnimateClass('magictime puffOut', true);

						setTimeout(function(){
							startGame.audioBrinquedos(that);
							$('.linha2').hide();
							puxaVara.stop().play();
							$('.meninaPescando').addClass('anJogaVaraOut');

							tela.children('#certo').addAnimateClass('fadeOutUp animated', true);

							setTimeout(function(){
								$('.meninaPescando').removeClass('anJogaVara anJogaVaraOut');
								startGame.insereObjbarco(objetos, objetoCertoSrc, '26px', '23px', 10, '100px',feedbackAcerto, function(){
									startGame.tela2();
								}, function(){
									narracao1.play('text4');
								}, 7500);

							}, 500);
						},1000);

					}, 500);
				}else{
					startGame.audioBrinquedos(that);
					$('.crianca-triste').show();
					$('.block').show();
					erroSound.stop().play();
					$(this).addAnimateClass('wobble animated');
					setTimeout(function(){
						narracao1.play('text3');
						pushIn.stop().play();
						$('.fala-letra-a-feed-erro').show().addAnimateClass('lightSpeedIn animated', 5500,function(){
							setTimeout(function(){
								pushIn.stop().play();
							}, 500);
							$('.fala-letra-a-feed-erro').show().addAnimateClass('bounceOut animated', true, function(){
								$('.crianca-triste').hide();
								$('.block').hide();
							});
						});
					}, 500);
				}
			});
		};

		startGame.entradaLetra('a');

		setTimeout(function(){

			tela.show();
			pushIn.stop().play();
			objetos.eq(0).show().addAnimateClass('fadeInUp animated');
			setTimeout(function(){
				pushIn.stop().play();
				objetos.eq(1).show().addAnimateClass('fadeInUp animated');

				setTimeout(function(){
					pushIn.stop().play();
					objetos.eq(2).show().addAnimateClass('fadeInUp animated', function(){
						cliqueObjetos();
					});
				},250);
			},250);

		},3000);

	},

	animacaoInicial: function(){
		pushIn.stop().play();
		narracao1.stop().play('text2');
		$('.fala-letra-a-inicio').show().addAnimateClass('lightSpeedIn animated', 14100, function(){
			setTimeout(function(){
				pushIn.stop().play();
			}, 500);
			$('.fala-letra-a-inicio').addAnimateClass('bounceOut animated', true, function(){
				$('.tela-principal').addClass('telaPrincipal');
				$('.barco').addClass('barcoZoomOut');
				$('.criancas').addClass('criancasZoomOut');
				setTimeout(function(){
					startGame.tela1();
					trilha_sonora.play();
					trilha_sonora_2.play();
					$('.agua').addClass('agua-animation');
					$('.detalhe-agua1').addClass('detalhe-agua-animation');
				}, 1000);

				setTimeout(function(){
					$('.barcoFull').addClass('moveBarco');
				}, 1500);

			});
		});
	},

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
		var piscaCrianca = setInterval(function(){
			$('.criancaPiscando').addAnimateClass('anCriancasPiscando');
		}, 5000);
		startGame.animacaoInicial();
	}
};

// startGame.init();
