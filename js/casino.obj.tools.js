	//Возвращает количество заполненных фишек 
	//для банка
	function getFillFshkCount(){

		var j=0;
		
		$("#tblFishka td").each(function(index, td) { 
				
				if($(td).attr("class") == "fishkaEmpty" && $(td).html().length != 0 ) {
					
					var len = 0;
					var id = $(td).find("img").attr("id");
					
					if(id == "imgF1")
						len = 685;
					
					if(id == "imgF2")
						len = 600;
						
					if(id == "imgF3")
						len = 515;
					
					if(id == "imgF4")
						len = 435;
						
					if(id == "imgF5")
						len = 350;
						
					
					fshkGo(id, len); 
					
					j++; 
				}
		});
		
		return j;
	}

	//Открываем все номера
	function openAllNum(count){
		
		showNum();
		
		$("#divSign1").html(_inputParams.num[count - 1].left.toString().substr(0, 1) );
		$("#divSign2").html(_inputParams.num[count - 1].left.toString().substr(1, 2));
		$("#divSign3").html(_inputParams.num[count - 1].right.toString().substr(0, 1));
		$("#divSign4").html(_inputParams.num[count - 1].right.toString().substr(1, 2));	
	}

	//Убираем фишки
	function fishkKill(count){
		
			if(count){ //Все фишки 

				$("td.fishkaEmpty").html("");
				return false;
			}
			
			$("#tblFishka td").each(function(index, td) { //по одной
				if($(td).attr("class") == "fishkaEmpty" && $(td).html().length != 0 ) {
					
					$(td).html("");
						
					return false;
				}
			});
	}

	//убираем знаки
	function allSignsHide(){

		$("#divAllSign").css("display", "none"); 
	}

	//Скрываем знаки, показываем знаки
	function hideSigns(){
		
		$("#signLessTrue").css("display", "none");
		$("#signMooTrue").css("display", "none");
		$("#signLessFalse").css("display", "none");
		$("#signMooFalse").css("display", "none");
			
		$("#divAllSign").css("display", "block");
	}

	//Открывает и делает шрифт
	//красным (метод необходимо вызывать перед вставкой цифр)
	function showNum(){

		$("#tblNum div.sign").each(function(i, td) { 
			
			$(this).css("background", "#FFFFFF");
			
			if($(this).html().length > 1)
				$(this).css("color", "#FF0000");
			
		});
	}
	
	function showRedNum(el){

		$(el).css("color", "#FF0000");
	}
	
	function setDefaultNumColor(){

		//Закрашиваем цифры
		for (var j = 1; j < 5; j++) {       
			
			$("#divSign" + j).html(stringFormat("<a id='aSign{0}'  class='num' href=''>?</a>", j));
			$("#divSign" + j).css("background", "#FFCC00");
		}
	}

	function numDefaultColor(){

		$("#tblNum div.sign").each(function(i, td) { 
					
			$(this).css("color", "#3333CC");
		});
	}
	
	//Парсим номера, определяем значенмия 
	function getNum(direction){
	
		var val = (direction == "left") ? $("#divSign1").html() + $("#divSign2").html() : $("#divSign3").html() + $("#divSign4").html();
		
		return parseInt(val);
	}
	
	//Парсим номера, определяем значенмия 
	function getOneNum(elId){
	
		var val =  $("#" + elId).html() ;
		
		return parseInt(val);
	}

	function stringFormat () {
			
			var s = arguments[0];
		
			for (var i = 0; i < arguments.length - 1; i++) {       
				var reg = new RegExp("\\{" + i + "\\}", "gm");             
				s = s.replace(reg, arguments[i + 1]);
			}

			return s;
	}

	//Возвращаем фишки на место.
	function setDefaultFshk(){
		
			var j =1;
		
			$("#tblFishka td").each(function(index, td) { 
					
					if($(td).attr("class") != "space"){
					
						$(td).html( "<img id='imgF" + j + "' class='fishkaFill' alt='' src='img/fishkaFill.png' />");
						
						j ++;
						
					}
			});
	}

	//Отправляем фищки в полет!
	function fshkGo(elId, len){

		var manager = new jsAnimManager();
		var shroom = document.getElementById(elId);  
	  
		shroom.style.position = "relative";  
	  
		var anim = manager.createAnimObject(elId);  
	  
		anim.add({
				property: Prop.left, 
				to: len, 
				duration: 1000
			});  
			
			anim.add({
				property: Prop.bottom, 
				to: 60, 
				duration: 100,
				onComplete: function() {
				
					$("#" + elId).css("display", "none");
					
					
					var fishkCount = parseInt($("#tdBank").html()) + 1;
					$("#tdBank").html(fishkCount);
					
					//Звук фишки прелетели!
					_casinoSound.beginFshkDown();
					
					$("#divNext").css("display", "block");
				
				}
			});  
	}
	
	function wrong(){
			
			alert("wrong !");
			
	}
