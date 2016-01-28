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

var hover = new Howl({
  urls: ['media/audio/hover.mp3','media/audio/hover.ogg'],
  autoplay: false,
  volume: 0.5
});

var errou = new Howl({
	urls: ['media/audio/errou.mp3','media/audio/errou.ogg'],
	autoplay: false,
	volume: 0.5
});

var parabens = new Howl({
  urls: ['media/audio/parabens.mp3','media/audio/parabens.ogg'],
  autoplay: false,
  volume: 0.5
});

var inserted = new Howl({
  urls: ['media/audio/inserted.mp3','media/audio/inserted.ogg'],
  autoplay: false,
  volume: 1
});

var percianaSound = new Howl({
	urls: ['media/audio/perciana.mp3','media/audio/perciana.ogg'],
	autoplay: false,
	volume: 1
});

// var erroSound = new Howl({
// 	urls: ['media/audio/erro.mp3','media/audio/erro.ogg'],
// 	autoplay: false,
// 	volume: 1
// });

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



var narracao = new Howl({  urls: ['media/audio/narracao.mp3','media/audio/narracao.ogg'],  sprite: {
	text1: [0, 12000],
	text2: [13000, 16000],
	fantoche: [30000, 2000],
	galocha: [33000, 1000],
	mochila: [35000, 1000],
	chapeu: [37000, 2000],
	palhaco: [40000, 1000],
	baralho: [42000, 1000],
	medalha: [44000, 1000],
	sapatilha: [46000, 2000],
	massinha: [49000, 1000],
	desenho: [51000, 1000],
	carrinho: [53000, 1000],
	cozinha: [55000, 1000]
}});



// ************ AUDIOS PLUGIN HOWLER.JS ***************

'use strict';

var tenteNovamente = false;

var startGame = {

  initAnimation: function(){
    var perciana = $('.tela-principal .perciana')
      , telaPrincipal = $('.tela-principal')
      , predios = $('.predios');

    telaPrincipal.addClass('por-do-sol-animation');
    predios.addClass('por-do-sol-animation');

    percianaSound.stop().play();

    perciana.animate({
      top: '-175px'
    },10000);
  },

  popupInicial: function(){
    var popup = $('.popup-inicial')
      , personagem = popup.children('.personagem')
      , balaoFala = popup.children('.balao-fala');

    popup.fadeIn(1000, function(){
      pushIn.stop().play();
      balaoFala.show().addAnimateClass('fadeInRight animated');
      personagem.show().addAnimateClass('fadeInLeft animated', function(){
        personagem.addClass('anPersonagem');
        narracao.stop().play('text2');
      });
    });

    setTimeout(function(){
      personagem.removeClass('anPersonagem');
      balaoFala.addAnimateClass('fadeOutRight animated', true);
      personagem.addAnimateClass('fadeOutLeft animated', true, function(){
        popup.fadeOut(1000, function(){
          setTimeout(function(){
            trilha_sonora.fadeIn(1, 1500);
          },5000);
          startGame.draggAndDropp();
          TrocaInstrucao('Clique nos objetos para ouvir o nome de cada um e, depois, arraste-os para a caixa a que pertencem.<br />Clique no ícone da casa para voltar à tela inicial.');
        });
      });

    },18200);
  },

  feedbackFinal: function(ch, nh, lh){

    TrocaInstrucao('');

    var popup = $('.feedback-final')
      , titulo = popup.children('.titulo')
      , conteudo = popup.children('.content')
      , btnFechar = popup.children('.btn-fechar');

    trilha_sonora.volume(0.3);

    popup.fadeIn(1000, function(){
      if(tenteNovamente == true){
        titulo.css('background','none').html('').hide();
        btnFechar.css('background','url(img/feedback_fechar_erro.png)');
        btnFechar.css({
          'width': '284px',
          'height': '61px',
          'top': '422px',
          'left': '330px',
          'padding': '10px 0 0 15px'
        }).html('Tente novamente!');

        errou.stop().play();

        btnFechar.on('click', function(){

          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            window.parent.location.href = '../index.html';
          }else{
            window.location.href = 'game.html';
          }

        });
      }else{
        parabens.stop().play();
        btnFechar.on('click', function(){
          window.parent.location.href = '../index.html';
        });
      }

      pushIn.stop().play();

      titulo.show().addAnimateClass('bounceIn animated');
      conteudo.show().addAnimateClass('bounceIn animated');
      btnFechar.show().addAnimateClass('bounceIn animated');

      $('.cxCH').children('span').html(ch);
      $('.cxNH').children('span').html(nh);
      $('.cxLH').children('span').html(lh);

    });
  },

  draggAndDropp: function(){
    var drags = $('.dragg')
      , drops = $('.dropp');

    var caixaCH = 0
      , caixaNH = 0
      , caixaLH = 0;

    startGame.initAnimation();

    setTimeout(function(){
      drags.each(function(i) {
        var $self = $(this);
        setTimeout(function() {
          pushIn.stop().play();
          $self.show().addAnimateClass('fadeInUp animated');
        }, i*100);
      });
    },7000);

    drags.on('mouseover', function(){
      hover.stop().play();
    });

    drags.on('mousedown', function(){
      var audio = $(this).attr('data-sound');
      toc.stop().play();

      narracao.stop().play(audio);
    });

    drags.on('mouseup', function(){
      toc.stop().play();
    });

    drags.draggable({
      drag: function(event, ui){
        $(ui.helper).css('zIndex','5');
        hover.volume(0);
      },
      stop: function(event, ui){
        $(ui.helper).css('zIndex','15');
        hover.volume(1);
      },
      containment: ".tela-principal"
    });

    drops.droppable({
      drop: function(event, ui){
        var elem  = $(ui.helper)
          , caixa = $(event.target)
          , elemId = elem.attr('data-id')
          , caixaId = caixa.attr('data-id');

        inserted.stop().play();

        elem.addClass('inserted').hide();
        caixa.children('.conteudo-brinquedos').append('<img src="'+elem.attr('src')+'" alt="">');
        caixa.children('.conteudo-brinquedos').children('img').last().addAnimateClass('bounceIn animated');

        if(elemId == 'ch' && caixaId == 'ch'){
          caixaCH++;
        }else if(elemId == 'nh' && caixaId == 'nh'){
          caixaNH++;
        }else if(elemId == 'lh' && caixaId == 'lh'){
          caixaLH++;
        }else{
          tenteNovamente = true;
        }

        if($('.brinquedos').children('.inserted').length == 11){
          startGame.feedbackFinal(caixaCH, caixaNH, caixaLH);
        }
      }
    });
  },

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
    toc.stop().play();
    startGame.popupInicial();
	}
};

// startGame.init();
