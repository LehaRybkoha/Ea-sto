let form = $("#form");

// $(function(){
//  $('.form-content__first-step').validate({
//  	rules: {
//  		onsubmit: false,
//  		sername:"required",
//  		name:"required",
//  		email: {
//       		required: true,
//       		email: true
//     	},
//  	},
//  })
// });


$( function() {
  let $signupForm = $( '#form' );
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
  $('#milage').keyup(function() {
    let milage = $(this).val();
    let result = Math.round(milage / 1000) * 1000;
    result += " км";
        
    $("#milage").blur(function() {
		$("#milage").val(result);
	});
  });
  $('#docNum-first').keyup(function() {
    let docNumfFirst = $(this).val();
    let result = docNumfFirst.replace(/[A-Za-z]/g, "");
        $("#docNum-first").val(result);
  });
  $('#docNum-second').keyup(function() {
    let docNumSecond = $(this).val();
    let result = docNumSecond.replace(/\D [^0-9]/g, "");
        $("#docNum-seclnd").val(result);
  });
  $('#vin').keyup(function() {
    let vinLength = $(this).val().length;
    let vin = $(this).val();
    let result = vin.replace(/[а-яА-ЯёЁ]/g, "");
        $("#vin").val(result);

    $("#vin").blur(function() {
		if(vinLength < 16) {
	    	$("#vin").val("");
	    	$("#vin").val("ОТСУТСВУЕТ");
	    	$('#checkVin').html("ОТСУТСВУЕТ");
	    }
	});
	while(vinLength == 17) {
		$('#vin').unbind();
		$('#checkVin').html("");
		$('#checkVin').html(vin);
		vinLength = false;
		break;
	}
	// if(vinLength == 17) {
	// 	$('#vin').unbind();
	// 	$('#checkVin').html("");
	// 	$('#checkVin').html(vin);
	// } else if (vinLength < 16){
	// 	$('#checkVin').html("");
	// 	$('#checkVin').html("ОТСУТСВУЕТ");
	// }

 });

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
    buttonTag:    'button',
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
});



// $(document).ready(function(){
//   $('.slick').slick({
//   	nextArrow: $('.nextArr'),

//   });
// });
// $("#form").steps({
//     headerTag: "h3",
//     bodyTag: "fieldset",
//     enableAllSteps: true,
//     enablePagination: false
// });

// $('#form').submit(function() { 
//     // submit the form 
//     $(this).ajaxSubmit(); 
//     // return false to prevent normal browser submit and page navigation 
//     return false; 
// });


$(document).ready(function(){
var masking = $(".phone");
masking.mask("+7(999)-999-99-99");

$('.phone').keyup(function() {
  var val = $('.phone').val();
  $('#checkPhone').html(val);
});

// var selected = new Array()
// $(".form-content__use--checkbox:checked").each(function() {
//        selected.push($(".form-content__use--text").attr('value'));
// });
// console.log(selected);

$( "#use-first" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-first').attr('value');
  		$('#checkUse1').html(val);
  	}
    else {
   		$('#checkUse1').text("");
   	}
	});
$( "#use-second" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-second').attr('value');
  		$('#checkUse2').html(val);
  	}
    else {
   		$('#checkUse2').text("");
   	}
	});
$( "#use-third" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-third').attr('value');
  		$('#checkUse3').html(val);
  	}
    else {
   		$('#checkUse3').text("");
   	}
	});
$( "#use-fourth" ).on( "click", function() {
	if($(this).is(":checked")) {
		var val = $('#label-use-fourth').attr('value');
  		$('#checkUse4').html(val);
  	}
    else {
   		$('#checkUse4').text("");
   	}
	});
$( "#empty-first" ).on( "change", function() {
	if($(this).is(':checked')) {
		$("#vin").val("");
	    $("#vin").val("ОТСУТСВУЕТ");
	    $('#checkVin').html("ОТСУТСВУЕТ");
  	}
    else {
    	$("#vin").val("");
   	}
	});
});

// $('#empty-first').on('change', function () {
// 	if ($(this).val() == '') {
// 	    $('input[name=vin]').val('Отсутствует');
// 	}
// });



new Vue ({
	el: '#form',
	data: {
		sername:null,
		name:null,
		patronymic:null,
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
		vin:null,
		carcass:null,
		frame:null,
		loadWeight:null,
		permanentWeight:null,
		gosNum:null,
		region:null,
		nothing4:null,
		nothing3:null,
		nothing2:null,
		nothing1:null,
		asVin2:null,
		asVin1:null
	},
	methods: {

	}
});


$(document).ready(function() {
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