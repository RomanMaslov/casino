
 function casinoSound() {
 
	var startSound = "<audio id='audioStart'><source src='sound/start/01.mp3' /><source src='sound/start/01.wav' /><source src='sound/start/01.acc' />error</audio>";
	var openNext = "<audio id='audioOpenNum'><source src='sound/openNext/openNext.mp3' /><source src='sound/openNext/openNext.wav' /><source src='sound/openNext/openNext.acc' />error</audio>";
	
	//Голос при старте приложения
	this.beginStartSound = function(){
	
		soundBegin(startSound, "audioStart");
	}
	
	//Открытие карточек или далее
	this.beginOpenNext = function(){
	
		//soundBegin(openNext, "audioOpen");
		// var _openSound = document.getElementById("audioOpenNum");
		
		  if(!_openSound.ended)
			soundBegin(openNext, "audioOpenNum");
		else
			_openSound.play();
	}
	
	//Вариант все правильно
	this.beginSuccesSound = function(fshkCount){
	
		var id = stringFormat("audio{0}fishk", fshkCount);
		var audio = getSoundSucces(fshkCount, id)
		
		soundBegin(audio, id);
	}
	
	//Не угадал.
	this.beginWrongGuessing = function(direction){
		
		var id = stringFormat("audio{0}", direction);
		var audio = stringFormat("<audio id='audio{0}'><source src='sound/noGuessing/leftSide{0}.mp3' /><source src='sound/noGuessing/leftSide{0}.wav' /><source src='sound/noGuessing/leftSide{0}.acc' />error</audio>", direction);
		
		soundBegin(audio, id);
	}
	
	//Не верно.
	this.beginWrong = function(direction){
		
		var id = stringFormat("audioW{0}", direction);
		var audio = stringFormat("<audio id='audioW{0}'><source src='sound/wrong/leftSide{0}.mp3' /><source src='sound/wrong/leftSide{0}.wav' /><source src='sound/wrong/leftSide{0}.acc' />error</audio>", direction);
		
		soundBegin(audio, id);
	}
	
	//Фишки прилетели.
	this.beginFshkDown = function(){
		
		if($.browser.msie &&  $.browser.version == "7.0" | $.browser.version == "8.0"){

		}
		 else{ 

			var audio = "<audio id='audioFshkDown'><source src='sound/fshkDown/down.mp3' /><source src='sound/fshkDown/down.wav' /><source src='sound/fshkDown/down.acc' />error</audio>";
			
			//soundBegin(audio, "audioFshkDown");
			$("#divSound").append(audio);
			
			var sound = document.getElementById("audioFshkDown");
			
			sound.play();	
		}
	}
	
	//Конец игры 0 фишек.
	this.beginLoss = function(){
		
		var audio = "<audio id='audioLoss'><source src='sound/loss/loss.mp3' /><source src='sound/loss/loss.wav' /><source src='sound/loss/loss.acc' />error</audio>";
		
		soundBegin(audio, "audioLoss");
	}
	
	//Конец игры больше 0 фишек.
	this.beginAppl = function(){
		
		var audio = "<audio id='audioAppl'><source src='sound/applaus/appl.mp3' /><source src='sound/applaus/appl.wav' /><source src='sound/applaus/appl.acc' />error</audio>";
		
		soundBegin(audio, "audioAppl");
	}
	
	function getSoundSucces(fshkCount, id){
		
		var filePath = stringFormat("successful/{0}fshk", fshkCount);
		
		return stringFormat("<audio id='{0}'><source src='sound/{1}.mp3' /><source src='sound/{1}.wav' /><source src='sound/{1}.acc' />error</audio>", id, filePath);
	}
	
	function soundBegin(audio, id){
		
		var  b = $.browser;
	
		if($.browser.msie &&  $.browser.version == "7.0" | $.browser.version == "8.0"){

		}
		 else{ 
		 
		 		$("#divSound").html(audio);
				var sound = document.getElementById(id);
				sound.play();	

		
			// var reg = /\w+\/\w+.wav/ig;
			// var path = stringFormat("sound/{0}", reg.exec(audio)[0]);
			
			//$("#divSoundOldIe").html(stringFormat("<bgsound src='{0}' loop='1' volume='' balance='0' />", path));
			//$("#divSoundOldIe").html("<bgsound src='sound/start/01.wav' loop='1' volume='' balance='0' />");
		}
	}
	
	this.stopSound = function(){
				
		$("#divSound").html("");
	}
 }