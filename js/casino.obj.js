  //Кол-во попыток
 var count;
 
function casino() {
 
	var _fishkCount = 1; //Кол-во фишек
	var _messOk = "<span class='green'>Правильно! Твой выигрыш – {0} фишк{1}.</span>";
	
	var _messWrongLeftMooRight = "<span class='red'>Ты не угадал! Левая часть больше правой. </span>";
	var _messWrongLeftLessRight = "<span class='red'>Ты не угадал! Левая часть меньше правой. </span>";
	
	var _messMooWrongt = "<span class='red'>Неверно! Левая часть меньше правой.</span>";
	var _messLessWrong = "<span class='red'>Неверно! Левая часть больше правой.</span>";
	var _maxVal = 99;
	var _minVal = 10;
	
	//Кнопки цифры
	this.elNumClick = function(){
		
		//Выключаем стартовый звук
		_casinoSound.stopSound();
		
		_casinoSound.beginOpenNext();
		
		$(this).parent().css("background", "#FFFFFF");
		var elId = $(this).attr("id"); 
		
		switch(elId) {
			case  "aSign1": {
					openNum(this, "left", 0)
				break;
			}
			case  "aSign2": {
					openNum(this, "left", 1)
				break;
			}
			case  "aSign3": {
					openNum(this, "right", 0)
				break;
			}
			case  "aSign4": {
					openNum(this, "right", 1)
				break;
			}
		}
		
		fishkKill();
		
		return false;
	}
	
	//Кнопки больше/меньше
	/*
		Если не угодал то подставляем контр-условие из конфига если нет ставим 10 или 99. 
	*/
	this.elSignClick = function(){
	
		//Текущие значения из конфига.
		var numLeft = parseInt(  getNumConfig( "left", 0 ) + getNumConfig( "left", 1 ));
		var numRight = parseInt( getNumConfig( "right", 0 ) + getNumConfig( "right", 1 ));
		
		var num1Config = parseInt(  getNumConfig( "left", 0 ));
		var num2Config = parseInt(  getNumConfig( "left", 1 ));
		var num3Config = parseInt(  getNumConfig( "right", 0 ));
		var num4Config = parseInt(  getNumConfig( "right", 1 ));
	
        var num1 = $("#divSign1").html().length > 1 ? "" : $("#divSign1").html();
        var num2 = $("#divSign2").html().length > 1 ? "" : $("#divSign2").html();
        var num3 = $("#divSign3").html().length > 1 ? "" : $("#divSign3").html();
        var num4 = $("#divSign4").html().length > 1 ? "" : $("#divSign4").html();
        
        var len = num1 + num2 + num3 + num4;
        var left = 0;        
        var right = 0;
		
		var elClickId = $(this).attr("id");
		
        if((num1 + num2).length == 2)
            left = parseInt((num1 + num2)); //полная левая цифра
        
        if((num3 + num4).length == 2)
            right = parseInt((num3 + num4)); // полная правая цифра
        
        if(elClickId == "aLess"){ //Кликнули знак меньше
			
				if(len.length == 0){//все закрыты
					
					showNum();
					
					if(numLeft >  numRight){
						
						exep(this);
						
						return false;
					}
					else{
						
						$("#divSign1").html("9");
						$("#divSign2").html("9");
						$("#divSign3").html("1");
						$("#divSign4").html("0");
					}
				}
				else if(left != 0 && left == 10){
				
					exep(this);
					return false;
				}
				else if(left != 0 && left == 99){
					
					exep(this);
					return false;
				}
				else if(right != 0 && right == 10){
				
					exep(this);
					return false;
				}
				else if(right != 0 && right == 99){
					
					exep(this);
					return false;
				}
				else if(num1 != "" &&  num3 != "" &&  num1 == num3 && getNumConfig( "left", 1 ) > getNumConfig( "right", 1 )){ 
					
					exep(this);
					return false;
				}
				else if( parseInt(num1) < parseInt(num3)){ 
					
					exep(this);
					return false;
				}
				else if( parseInt(num1) > parseInt(num3)){ 
					
					exep(this);
					return false;
				}
				else if( num1 == "" &&  num3 == "" && numLeft >  numRight ){ 
					
					exep(this);
					return false;
				}
				else if( num1 == "" &&  num2 == "" && numLeft >  numRight ){ 
					
					exep(this);
					return false;
				}
				else if( num3 == "" &&  num4 == "" && numLeft >  numRight ){ 
					
					exep(this);
					return false;
				}
				else if( num1 != "" && num2 != "" && num3 != "" && num2Config == 0 && num1Config == num3Config ){ 
					
					exep(this);
					return false;
				}
				else{//Что то открыто
					
					showNum();
				
					if(num1 == "")
						$("#divSign1").html("9");
					
					if(num2 == "")
						$("#divSign2").html("9");
						
					if(num3 == "")
						$("#divSign3").html("1");
					
					if(num4 == "")
						$("#divSign4").html("0");
				}
		}
		else{

			if(len.length == 0){//все закрыты
				
				showNum();
				if(numLeft <  numRight){
				
					exep(this);
					return false;
				}
				else{
					$("#divSign1").html("1");
					$("#divSign2").html("0");
					$("#divSign3").html("9");
					$("#divSign4").html("9");
				}
			}
			else if(right != 0 && right == 99){
				
					exep(this);
					return false;
			}
			else if(left != 0 && left == 99){
				
					exep(this);
					return false;
			}
			else if(right != 0 && right == 10){
				
					exep(this);
					return false;
			}
			else if(left != 0 && left == 10){
				
					exep(this);
					return false;
			}
			else if(num1 != "" &&  num3 != "" && num1 == num3 && getNumConfig( "left", 1 ) < getNumConfig( "right", 1 )){
					
					exep(this);
					return false;
			}
			else if(parseInt(num1) < parseInt(num3)){ 
					
					exep(this);
					return false;
			}
			else if(parseInt(num1) > parseInt(num3)){ 
					
					exep(this);
					return false;
			}
			else if( num1 == "" &&  num3 == "" && numLeft <  numRight ){ 
					
					exep(this);
					return false;
			}
			else if( num1 == "" &&  num2 == "" && numLeft <  numRight ){ 
					
					exep(this);
					return false;
			}
			else if( num3 == "" &&  num4 == "" && numLeft <  numRight ){ 
					
					exep(this);
					return false;
			}
			else if( num1 != "" && num3 != "" && num4 != "" && num4Config == 0 && num1Config == num3Config ){ 
					
					exep(this);
					return false;
			}
			else{//Что то открыто
					
				showNum();
					
				if(num1 == "")
					$("#divSign1").html("1");
				
				if(num2 == "")
					$("#divSign2").html("0");
					
				if(num3 == "")
					$("#divSign3").html("9");
				
				if(num4 == "")
					$("#divSign4").html("9");
			}
		}
		
		numCompareExist(this);
           
       // $("#divNext").css("display", "block");
    
        return false;
	}
	
	//Кнопка далее
	this.elNextClick = function(){
	
		setDefaultNumColor();
		
		//_casinoSound.beginOpenNext();
		$("#divSound").html("");
		
		
		//Устанавливаем цвет цифр в дефолт
		numDefaultColor(); 
		
		setDefaultFshk();
			
		//Увеличиваем номер попытки на 1
		$("#spanCount").html((parseInt($("#spanCount").html()) + 1));
		
		$("#tdMess").html("");
		
		$("#divNext").css("display", "none");
		
		hideSigns();
		
		
		if(_inputParams.num.length + 1 == count){ //Игра закончилась!

			$("#divMain").css( "display",  "none");
			
			$("#divEnd").css( "display",  "block");
			
			var bank = parseInt($("#tdBank").html())
			
			$("#divCountResult").html( bank );
			
			if(bank == 0) //0 - фишек грохот лузер
				_casinoSound.beginLoss();
			else // аплодисменты
				_casinoSound.beginAppl();
			
		}
		
		return false;
	}
	
	function openNum(el, direction, position){
		
		var num = direction == "left" ? _inputParams.num[count - 1].left.toString() :  _inputParams.num[count - 1].right.toString();
		num = position == 0 ? num.substr(0, 1) : num.substr(1, 2);
		
		$(el).parent().html(num);
	}
	
	//Возвращает текушие номера из файла конфигурации
	function getNumConfig(direction, position){
		
		var num = direction == "left" ? _inputParams.num[count - 1].left.toString() :  _inputParams.num[count - 1].right.toString();
		num = position == 0 ? num.substr(0, 1) : num.substr(1, 2);
		
		return num;
	}
	
	//Сравниваем цифры
	function numCompareExist(el){
		
		var left = getNum("left");
		var right = getNum("right");
		
		//Определяем какой знак кликнули
	 	var elId = $(el).attr("id");
		allSignsHide();
		
		if(elId == "aLess"){ //Кликнули знак меньше
		
			if( left < right ){ //Правильно
			
				var fishkCount = getFillFshkCount(); //Сколько выиграли
				_casinoSound.beginSuccesSound(fishkCount);//Звук сколько выиграли
				
				$("#tdMess").html( stringFormat(_messOk,  fishkCount, fishkCount == 1 ? "a" : "и" )); //Мессага. 
				
				$("#signLessTrue").css("display", "block");  //показываем зеленый знак <
			}
			else{//не правильно
				
				$("#signLessFalse").css("display", "block");  //показываем красный знак >
				
				//Левая часть больше правой.
				_casinoSound.beginWrong("More");
				$("#tdMess").html( _messLessWrong);
				fishkKill("all");
				
				$("#divNext").css("display", "block");
			}
		}
		else{//Кликнули знак больше
			
			if( left > right ){ //Правильно
				
				var fishkCount = getFillFshkCount(); //Сколько выиграли
				_casinoSound.beginSuccesSound(fishkCount); //Звук сколько выиграли
				
				$("#tdMess").html( stringFormat(_messOk,  fishkCount, fishkCount == 1 ? "a" : "и" )); //Мессага. 
				$("#signMooTrue").css("display", "block");  //показываем зеленый знак >
			}
			else{//не правильно
				
				$("#signMooFalse").css("display", "block");  //показываем красный знак >
				
				//Левая часть меньше правой.
				_casinoSound.beginWrong("Lower");
				$("#tdMess").html( _messMooWrongt);
				fishkKill("all");
				
				$("#divNext").css("display", "block");
			}
		}
		
		count++;
	}
	
	//Исключительная ситуация (максимальное значение, 
	//не можем подставить больше, подставляем из 
	//кофигурации и сравниваем) и т.д.
	function exep(el){
	
		openAllNum(count);
		numCompareExist(el);
					
		//$("#divNext").css("display", "block");	
	}
	
	function compare(sign){
		
		var num1 = parseInt( getNumConfig( "left", 0 ));
		var num3 = parseInt(getNumConfig( "right", 0 ));
		
		var numLeft = parseInt(  getNumConfig( "left", 0 ) + getNumConfig( "left", 1 ));
		var numRight = parseInt( getNumConfig( "right", 0 ) + getNumConfig( "right", 1 ));
		
		if(sign == "aLess"){
		
			if(numLeft < numRight){
			
				//exep(el);
				
				return true;
			}
			else if(numLeft > numRight){
			
				//exep(el);
				
				return true;
			}			
		}
		else{

			if(numLeft > numRight){
			
				//exep(el);
				
				return true;
			}
		}	
		
		return false;
	}
 }
 
 
 
 
 
 
 