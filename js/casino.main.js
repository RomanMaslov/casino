 var _inputParams; 
 var _casinoSound;
 var _openSound;
 
 $(function () {
	
	appStart();
	
});

function appStart(){

	//$("#divSoundOldIe").html("<bgsound src='sound/start/01.wav' loop='1' volume='' balance='0' />");
		
	_inputParams = inputParams;
	
	//При старте 1 попытка
	count = 1;
	$("#spanCount").html("1"); 
	$("#tdBank").html("0"); 
	
	//Определяем кол-во попыток.
	$("#spanAllCount").html(inputParams.num.length);
	var _casino = new casino();
	
	//appSizeSet();
	
	eventsSet(_casino);
	
	_casinoSound = new casinoSound();
	
	_openSound = document.getElementById("audioOpenNum");
		
	$("#aAgain").attr("href", _inputParams.again);
}

//Подключаем события.
function eventsSet(o){

	//Событие клик по цифре
	$("a.num").live("click",  o.elNumClick);
	//Событие клик по знаку
	$("a.sign").live("click",  o.elSignClick);
	//Событие клик по Далее
	$("#divNext").live("click",  o.elNextClick);
}

//Устанавливаем размеры внешнего блока
function appSizeSet(){

	var width = stringFormat("{0}px", _inputParams.appWidth);
	var height = stringFormat("{0}px", _inputParams.appHeight);
	
	$("#divMain").css("width", width);
	$("#divMain").css("height", height);
}

function testSound(){
	
	$("#divTestStart").css("display", "none"); 
	
	$("#divMain").css("display", "block"); 
	$("#divEnd").css("display", "none"); 
	
	_casinoSound.beginStartSound();
}

//Играть снова.
function playAgain(){
	
	appStart();
	
	//Определяем кол-во попыток.
	$("#spanAllCount").html(inputParams.num.length);
	
	testSound();
	
}