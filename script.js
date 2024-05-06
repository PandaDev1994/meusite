var text = document.getElementById('alexandreId')

var tooltip = document.getElementById('tooltip')



text.addEventListener('mouseover' ,function(){
    tooltip.classList.remove('esconder');
});

text.addEventListener('mouseout',function(){
    tooltip.classList.add('esconder');
});

var video = document.getElementById('video-projeto-lista')

var frase = document.getElementById('frase-video-lista')

frase.addEventListener('mouseover' , function(){
    video.classList.remove('esconder');
});

frase.addEventListener('mouseout',function(){
    video.classList.add('esconder');
});

var video1 = document.getElementById('video-projeto-tempo')

var frase1 = document.getElementById('frase-video-tempo')





frase1.addEventListener('mouseover' , function(){
    video1.classList.remove('esconder');
});

frase1.addEventListener('mouseout',function(){
    video1.classList.add('esconder');
});


var vid = document.getElementById('video-tempo')

vid.autoplay = true;
vid.load();