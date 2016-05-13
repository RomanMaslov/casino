 var _inputParams; 
 var _casinoSound;
 var _openSound;
 
 $(function () {
	
	appStart();
	
});

function appStart(){

	//$("#divSoundOldIe").html("<bgsound src='sound/start/01.wav' loop='1' volume='' balance='0' />");
		
	_inputParams = inputParams;
	
	//��� ������ 1 �������
	count = 1;
	$("#spanCount").html("1"); 
	$("#tdBank").html("0"); 
	
	//���������� ���-�� �������.
	$("#spanAllCount").html(inputParams.num.length);
	var _casino = new casino();
	
	//appSizeSet();
	
	eventsSet(_casino);
	
	_casinoSound = new casinoSound();
	
	_openSound = document.getElementById("audioOpenNum");
		
	$("#aAgain").attr("href", _inputParams.again);
}

//���������� �������.
function eventsSet(o){

	//������� ���� �� �����
	$("a.num").live("click",  o.elNumClick);
	//������� ���� �� �����
	$("a.sign").live("click",  o.elSignClick);
	//������� ���� �� �����
	$("#divNext").live("click",  o.elNextClick);
}

//������������� ������� �������� �����
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

//������ �����.
function playAgain(){
	
	appStart();
	
	//���������� ���-�� �������.
	$("#spanAllCount").html(inputParams.num.length);
	
	testSound();
	
}