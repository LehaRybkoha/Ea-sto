import 'jquery.scrollto';
import 'jquery-validation';
import 'jquery-mask-plugin';
import Vue from 'vue';
$.fn.hasAttr = function(name) {
   return this.attr(name) !== undefined;
};


$(document).ready(function() {
	jQuery.extend(jQuery.validator.messages, {
	    required: "",
	    email: "",
		remote: "",
		url: "",
		date: "",
		dateISO: "",
		number: "",
		digits: "",
		equalTo: "",
		maxlength: $.validator.format( "" ),
		minlength: $.validator.format( "" ),
		rangelength: $.validator.format( "" ),
		range: $.validator.format( "" ),
		max: $.validator.format( "" ),
		min: $.validator.format( "" ),
		step: $.validator.format( "" )
	});
  let $signupForm = $( '#form' );
  let form = $("#form");
  // let empty = $("#emptyWeight");
  // let permanent = $("#permanentWeight"), weightTimeOut;
  let phone = $(".phone");
  phone.mask("+7(999)-999-99-99");

	$signupForm.validate({
  	rules: {
 		sername:"required",
 		name:"required",
 		mark:"required",
 		model:"required",
 		year:"required",
 		milage:"required",
 		docNumFirst:"required",
 		docNumSecond:"required",
 		police:"required",
 		docDay:"required",
 		docMonth:"required",
 		docYear:"required",
 		age:"required",
 		vin:"required",
 		carcass:"required",
 		frame:"required",
 		gosNum:"required",
 		region:"required",
 		email: {
      		required: true,
      		email: true
    	}
 	},
  });

  $signupForm.formToWizard({
    submitButton: 'submitButton',
    nextBtnClass: 'continue-button',
    nextBtnName: 'Продолжить',
    submitButtonName: 'Оформить',
    buttonTag:    'a href="#form"',
    validateBeforeNext: function(form, step) {
      let stepIsValid = true;
      let validator = form.validate();
      $(':input', step).each( function(index) {
        let xy = validator.element(this);
        stepIsValid = stepIsValid && (typeof xy == 'undefined' || xy);
      });
      return stepIsValid;
    }
  });
  
  // function checkInput(){
  //     form.find('.form-content__field-input').each(function(){
  //       if($(this).val() != ''){
  //         // Если поле не пустое удаляем класс-указание
		// $('.valid-label').css('display', 'block');
  //       } else {
  //         // Если поле пустое добавляем класс-указание
		// $('.valid-label').css('display', 'none');
  //       }
  //     });
  //   }
 // permanent.keyup(function() {
 // 	clearTimeout(weightTimeOut);
 // 	weightTimeOut = setTimeout(weightFunc, 2000, $(this).val())
 // });

 // permanent.keydown(function() {
 // 	clearTimeout(weightTimeOut);
 // });

 // function weightFunc() {
 // 	if(empty.val() > permanent.val()) {
 // 		permanent.addClass('error')
 // 		permanent.val("");
 // 		alert("Разрешенная масса должна быть больше Массы без нагрузки, пожалуйста, проверьте данные и введите их еще раз.");
 // 	}
 // }

  $('#mark').keyup(function() {
    var replaceSpace = $(this).val(); 

        var result = replaceSpace.replace(/[““()/-]/g, " ");

        $("#mark").val(result);

	});

  $('#model').keyup(function() {
    let replaceSpace = $(this).val(); 

        let result = replaceSpace.replace(/[,.““()/-]/g, " ");

        $("#model").val(result);

  });

 //  $('#milage').keyup(function() {
 //    let milage = $(this).val();
        
 //    $("#milage").blur(function() {
 //    	if (milage < 1000) {
 //    		milage = 1000;
 //    	} else {
 //    		milage = Math.round(milage / 1000) * 1000;
 //    	}
	// 	$("#milage").val(milage);
	// 	$("#checkMilage").html(milage);
	// });
 //  });

  $('#docNum-first').keyup(function() {
    let docNumFirst = $(this).val();
    let re = /[A-Za-z]/;
    // if (this.value.match(re)) {
    // 	let result = this.value.replace(/[A-Za-z]/g, "");
    // 	$('#docNum-first').val(result);
    // 	alert("Серия документа может содержать только РУССКИЕ буквы и цифры (4 символа). Проверьте, что раскладка клавиатуры установлена на русском языке и повторите ввод.");
    // }
    $("#checkDocNumFirst").html(docNumFirst);
  });

  $('#docNum-second').keyup(function() {
    let docNumSecond = $(this).val();
    let re = /[A-Za-zА-Яа-яЁё]/;
    // if (this.value.match(re)) {
    // 	let result = this.value.replace(/[A-Za-zА-Яа-яЁё]/g, "");
    // 	$('#docNum-second').val(result);
    // 	alert("Номер документа может содержать только 6 цифр. Пожалуйста, не вводите буквы.");
    // }
    $("#checkDocNumSecond").html(docNumSecond);
  });
  $('#vin').on("keyup keydown", function() {
  	let vin = $(this).val();
  	let re = /[,.-/QqIiOoА-Яа-яЁё]/;
  	let result;
    // if (this.value.match(re)) {
    // 	result = this.value.replace(/[,.-/QqIiOoА-Яа-яЁё]/g, "");
    // 	$('#vin').val(result);
    // 	alert("VIN-номер может содержать только АНГЛИЙСКИЕ буквы, цифры и знаки. Проверьте, что раскладка клавиатуры установлена на английском языке. Также в VIN-номере невозможно использование английских букв O, Q, I. Вместо них, пожалуйста, используйте цифры 0, 1 и повторите ввод.");
    // }
    $("#checkVin").html(vin);
 });

 $('#carcass').keyup(function() {
    let carcass = $(this).val();
    let re = /[^0-9A-Za-z-/ ,]/;
    let result;
    // if (this.value.match(re)) {
    // 	result = this.value.replace(/[^0-9A-Za-z-/ ,]/g, "");
    // 	$('#carcass').val(result);
    // 	alert("Номер кузова может содержать только АНГЛИЙСКИЕ буквы, цифры и знаки. Проверьте, что раскладка клавиатуры установлена на английском языке и повторите ввод.");
    // }
    $("#checkCarcass").html(carcass);
 });

 $('#frame').keyup(function() {
    let frame = $(this).val();
    let re = /[^0-9A-Za-z-/ ,]/;
    let resultж
    // if (this.value.match(re)) {
    // 	result = this.value.replace(/[^0-9A-Za-z-/ ,]/g, "");
    // 	$('#frame').val(result);
    // 	alert("Номер шасси может содержать только АНГЛИЙСКИЕ буквы, цифры и знаки. Проверьте, что раскладка клавиатуры установлена на английском языке и повторите ввод.Номер кузова может содержать только АНГЛИЙСКИЕ буквы, цифры и знаки. Проверьте, что раскладка клавиатуры установлена на английском языке и повторите ввод.");
    // }
    $("#checkFrame").html(frame);
 });

  $('#gosNum').keyup(function() {
    let gosNum = $(this).val();
    let re = /[A-Za-z]/;
    let result;
    // if (this.value.match(re)) {
    // 	result = this.value.replace(/[A-Za-z]]/g, "");
    // 	$('#gosNum').val(result);
    // 	alert("Государственный регистрационный номер может содержать только РУССКИЕ буквы и цифры. Проверьте, что раскладка клавиатуры установлена на русском языке и повторите ввод.");
    // }
    $("#checkGosNum").val(gosNum);
 });

  $('#region').keyup(function() {
    let region = $(this).val();
    let result = region.replace(/[^0-9]/g, function() {
    	alert("Регион гос. номера может содержать только 2 или 3 цифры. Повторите ввод.");
    	$("#region").val("");
    });
    $("#checkRegion").html(region);
 });

  $('.phone').keyup(function() {
   let val = $('.phone').val();
   $('#checkPhone').html(val);
 });
$( ".continue-button" ).on( "click", function() {
	if ($( ".form-content__field-input" ).hasClass("error")) {
		$("input.error").focus();
	} else {
		$.scrollTo(".form", 500);
	}
});
$( "#stepDownOne" ).on( "click", function() {
	$signupForm.formToWizard('GotoStep', '1');
});
$( "#stepDownTwo" ).on( "click", function() {
	$signupForm.formToWizard('GotoStep', '2');
});
$( "#stepDownThree" ).on( "click", function() {
	$signupForm.formToWizard('GotoStep', '3');
});

$( "#use-first" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-first').attr('value');
  		$('#checkUse1').html(val);
  		$('#checkUse4').text("");
  	}
    else {
   		$('#checkUse1').text("");
   	}
	});
// $( "#use-second" ).on( "click", function() {
// 	if($(this).is(":checked")) {
// 		var val = $('#label-use-second').attr('value');
//   		$('#checkUse2').html(val);
//   	}
//     else {
//    		$('#checkUse2').text("");
//    	}
// 	});
// $( "#use-third" ).on( "click", function() {
// 	if($(this).is(":checked")) {
// 		var val = $('#label-use-third').attr('value');
//   		$('#checkUse3').html(val);
//   	}
//     else {
//    		$('#checkUse3').text("");
//    	}
// 	});
$( "#use-fourth" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-fourth').attr('value');
  		$('#checkUse4').html(val);
  		$('#checkUse1').text("");
  	}
    else {
   		$('#checkUse4').text("");
   	}
	});
$( "#empty-first" ).on( "change", function() {
	if($(this).is(':checked')) {
		$("#vin").val("");
	    $("#vin").val("ОТСУТСТВУЕТ");
	    $('#checkVin').html("ОТСУТСТВУЕТ");
  	}
    else {
    	$("#vin").val("");
   	}
	});
$( "#asVin-first" ).on( "change", function() {
	let vin = $("#vin").val();
	if($(this).is(':checked')) {
		$("#carcass").val(vin);
		$("#checkCarcass").html(vin);
  	}
    else {
    	$("#carcass").val("");
   	}
	});
$( "#empty-second" ).on( "change", function() {
	if($(this).is(':checked')) {
		$("#carcass").val("");
	    $("#carcass").val("ОТСУТСТВУЕТ");
	    $('#checkCarcass').html("ОТСУТСТВУЕТ");
  	}
    else {
    	$("#carcass").val("");
   	}
	});
$( "#empty-third" ).on( "change", function() {
	if($(this).is(':checked')) {
		$("#frame").val("");
	    $("#frame").val("ОТСУТСТВУЕТ");
	    $('#checkFrame').html("ОТСУТСТВУЕТ");
  	}
    else {
    	$("#frame").val("");
   	}
	});
$( "#asVin-second" ).on( "change", function() {
	let vin = $("#vin").val();
	if($(this).is(':checked')) {
		$("#frame").val(vin);
		$("#checkFrame").html(vin);
  	}
    else {
    	$("#frame").val("");
   	}
	});

$( "#empty-fourth" ).on( "change", function() {
	if($(this).is(':checked')) {
		$("#gosNum, #region").val("");
	    $("#gosNum, #region").val("ОТСУТСТВУЕТ");
	    $("#gosNum, #region").removeAttr("maxlength");
	    $('#checkGosNum').html("ОТСУТСТВУЕТ");
  	}
    else {
    	$("#gosNum, #region").val("");
    	$("#gosNum").attr("maxlength", "6");
    	$("#region").attr("maxlength", "3");
   	}
	});
// $( ".form-content__field-input" ).on( "change", function() {
// 	if($('.form-content__field-input').hasClass('form')) {
//         alert('work');
//     } else {
        
//     }
// 	});

$('.form-content__use--checkbox').change(function() {
  $('.form-content__use--checkbox').not(this).prop('checked', false);
})

$(".form-content__field-input--one").focus(function() {
		$(".warning-message-sername").slideDown("slow");
	});
	$(".form-content__field-input--one").blur(function() {
		$(".warning-message-sername").slideUp("slow");
	});

	$(".form-content__field-input--two").focus(function() {
		$(".warning-message-name").slideDown("slow");
	});
	$(".form-content__field-input--two").blur(function() {
		$(".warning-message-name").slideUp("slow");
	});

	$(".form-content__field-input--three").focus(function() {
		$(".warning-message-patronymic").slideDown("slow");
	});
	$(".form-content__field-input--three").blur(function() {
		$(".warning-message-patronymic").slideUp("slow");
	});

	$(".form-content__field-input--fourth").focus(function() {
		$(".warning-message-email").slideDown("slow");
	});
	$(".form-content__field-input--fourth").blur(function() {
		$(".warning-message-email").slideUp("slow");
	});

	$(".form-content__field-input--five").focus(function() {
		$(".warning-message-city").slideDown("slow");
	});
	$(".form-content__field-input--five").blur(function() {
		$(".warning-message-city").slideUp("slow");
	});	

	$(".form-content__field-input--eight").focus(function() {
		$(".warning-message-mark").slideDown("slow");
	});	
	$(".form-content__field-input--eight").blur(function() {
		$(".warning-message-mark").slideUp("slow");
	});	

	$(".form-content__field-input--nine").focus(function() {
		$(".warning-message-model").slideDown("slow");
	});	
	$(".form-content__field-input--nine").blur(function() {
		$(".warning-message-model").slideUp("slow");
	});

	$(".form-content__field-input--eleven").focus(function() {
		$(".warning-message-fuel").slideDown("slow");
	});	
	$(".form-content__field-input--eleven").blur(function() {
		$(".warning-message-fuel").slideUp("slow");
	});

	$(".form-content__field-input--twelve").focus(function() {
		$(".warning-message-break").slideDown("slow");
	});	
	$(".form-content__field-input--twelve").blur(function() {
		$(".warning-message-break").slideUp("slow");
	});

	$(".form-content__field-input--thirteen").focus(function() {
		$(".warning-message-tires").slideDown("slow");
	});	
	$(".form-content__field-input--thirteen").blur(function() {
		$(".warning-message-tires").slideUp("slow");
	});

	$(".form-content__field-input--fourteen").focus(function() {
		$(".warning-message-mileage").slideDown("slow");
	});	
	$(".form-content__field-input--fourteen").blur(function() {
		$(".warning-message-mileage").slideUp("slow");
	});

	$(".form-content__field-input--sixteen").focus(function() {
		$(".warning-message-docNum").slideDown("slow");
	});	
	$(".form-content__field-input--sixteen").blur(function() {
		$(".warning-message-docNum").slideUp("slow");
	});

	$(".form-content__field-input--seventeen").focus(function() {
		$(".warning-message-docNumSec").slideDown("slow");
	});	
	$(".form-content__field-input--seventeen").blur(function() {
		$(".warning-message-docNumSec").slideUp("slow");
	});

	$(".form-content__field-input--twenty").focus(function() {
		$(".warning-message-vin").slideDown("slow");
	});	
	$(".form-content__field-input--twenty").blur(function() {
		$(".warning-message-vin").slideUp("slow");
	});

	$(".form-content__field-input--twentyOne").focus(function() {
		$(".warning-message-carcass").slideDown("slow");
	});	
	$(".form-content__field-input--twentyOne").blur(function() {
		$(".warning-message-carcass").slideUp("slow");
	});

	$(".form-content__field-input--twentyTwo").focus(function() {
		$(".warning-message-frame").slideDown("slow");
	});	
	$(".form-content__field-input--twentyTwo").blur(function() {
		$(".warning-message-frame").slideUp("slow");
	});

	$(".form-content__field-input--twentyThree").focus(function() {
		$(".warning-message-loadWeight").slideDown("slow");
	});	
	$(".form-content__field-input--twentyThree").blur(function() {
		$(".warning-message-loadWeight").slideUp("slow");
	});

	$(".form-content__field-input--twentyFour").focus(function() {
		$(".warning-message-permanentWeight").slideDown("slow");
	});	
	$(".form-content__field-input--twentyFour").blur(function() {
		$(".warning-message-permanentWeight").slideUp("slow");
	});

	$(".form-content__field-input--twentyFive").focus(function() {
		$(".warning-message-gosNum").slideDown("slow");
	});	
	$(".form-content__field-input--twentyFive").blur(function() {
		$(".warning-message-gosNum").slideUp("slow");
	});
});

$(function() {
	let checkName = $("#checkName").val();
	let checkSername = $("#checkSername").val();
	let checkPatronymic = $("#checkPatronymic").val();
	let checkEmail = $("#checkEmail").val();
	let checkPhone = $("#checkPhone").val();
	let checkCity = $("#checkCity").val();
	let checkType = $("#checkType").val();
	let checkMark = $("#checkMark").val();
	let checkModel = $("#checkModel").val();
	let checkYear = $("#checkYear").val();
	let checkFuel = $("#checkFuel").val();
	let checkBreaks = $("#checkBreaks").val();
	let checkTires = $("#checkTires").val();
	let checkMilage = $("#checkMilage").val();
	let checkUse1 = $("#checkUse1").val();
	let checkUse2 = $("#checkUse2").val();
	let checkUse3 = $("#checkUse3").val();
	let checkUse4 = $("#checkUse4").val();
	let checkDocType = $("#checkDocType").val();
	let checkDocNum = $("#checkDocNum").val();
	let checkPolice = $("#checkPolice").val();
	let checkDate = $("#checkDate").val();
	let checkVin = $("#checkVin").val();
	let checkCarcass = $("#checkCarcass").val();
	let checkFrame = $("#checkFrame").val();
	let checkLoad = $("#checkLoad").val();
	let checkPerm = $("#checkPerm").val();
	let checkGosNum = $("#checkGosNum, checkRegion").val();

      $('#form').submit(function(e) {
        var $form = $(this);
        $(this).attr('disabled', true);
			$( ".submitText" ).css('display', 'none');
			$( ".submitButton" ).css('height', '44px');
			$( ".submitButton" ).css('width', '170px');
			$( ".progress-bar" ).css('display', 'block');
			$( ".continue-button" ).css('background-color', '#5d7bff');
			$( ".continue-button" ).css('border-color', '#5d7bff');
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: {
            checkSername:checkSername,
            checkPatronymic:checkPatronymic,
            checkEmail:checkEmail,
            checkPhone:checkPhone,
            checkCity:checkCity,
            checkType:checkType,
            checkMark:checkMark,
            checkModel:checkModel,
            checkYear:checkYear,
            checkFuel:checkFuel,
            checkBreaks:checkBreaks,
            checkTires:checkTires,
            checkMilage:checkMilage,
            checkUse1:checkUse1,
            checkUse2:checkUse2,
            checkUse3:checkUse3,
            checkUse4:checkUse4,
            checkDocType:checkDocType,
            checkDocNum:checkDocNum,
            checkPolice:checkPolice,
            checkDate:checkDate,
            checkVin:checkVin,
            checkCarcass:checkCarcass,
            checkFrame:checkFrame,
            checkLoad:checkLoad,
            checkPerm:checkPerm,
            checkGosNum:checkGosNum,
            },
        }).done(function() {
          console.log('success');
          $('.request').css('display', 'block');
          $('.form-content, .form-head, .about, .steps-section, .advantage, .card-section, .price, .question, .video, .reviews, .partners, .footer').css('display', 'none');
 		  $('body').scrollTop(5000);
 		  	const el = document.getElementById('form');
			el.scrollIntoView(); // Прокрутка до верхней границы
        }).fail(function() {
          console.log('fail');
        });
        //отмена действия по умолчанию для кнопки submit
        e.preventDefault(); 
      });
    });

new Vue ({
	el: '#form',
	data: {
		sername:null,
		name:null,
		patronymic:null,
		age:"25",
		email:null,
		phone:null,
		city:"Ваш город",
		type:"Легковые автомобили",
		mark:null,
		model:null,
		year:null,
		fuel:"Бензин",
		breaks:"Гидравлическая",
		tires:"Не выбрано",
		milage:null,
		docType:"Свидетельство о регистрации ТС",
		docNumFirst:null,
		docNumSecond:null,
		police:null,
		docDay:"01",
		docMonth:"01",
		docYear:"2019",
		loadWeight:null,
		permanentWeight:null,
		nothing4:null,
		nothing3:null,
		nothing2:null,
		nothing1:null,
		asVin2:null,
		asVin1:null,
		series:null,
		number:null
	},
});
