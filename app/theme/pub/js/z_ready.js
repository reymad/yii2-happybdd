/**
 * Created by jrey on 19/09/2016.
 * ready
 */
$(document).ready(function(){

    console.log('hello nen!');

    // comment here
    fun();

    $('.scrollto').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('data-scrollto')).offset().top
        }, 2000);
    });


    /*
    $('form').on('afterSubmit', function(){

        $.blockUI({
            message: YIIJS.t['app.general.cargando'],
            baseZ: 9998,
            css: {
                'z-index': 9999,
            }
        });

       return true;//

    });
    */

    /*
    var to = setInterval(function(){
        $('div.transition')
            .slideToggle('slow')
            .promise()
            .done(function(){
                console.log('done!!');
            });

        intervalCounter++;
        if(intervalCounter>5){ clearInterval(to); }
    }, 2000);
    $.blockUI(growlUIconfig);
    $.blockUI({})
    */

});

function openLoading(){

    $.blockUI({
        message: YIIJS.t['app.general.cargando'],
        baseZ: 9998,
        css: {
            'z-index': 9999,
        }
    });

}

function closeLoading(){
    $.unblockUI();
}

// scroll manage
$(window).on("scroll load", function () {
    if ($(this).scrollTop() > 10) {
        $("nav#main-header").css({'top':'0px','height': '60px'});
    }
    else {
        $("nav#main-header").css({'top':'10px','height': '60px'});
    }
});

/*
$(window).on('resize', function(){
    $.each($('.tellWidth'), function(){
        tellWidth($(this));
    });
});
*/
/*
$(window).on('click', function(){
    $.unblockUI();
});
*/

// $(document).ajaxStart(ajaxStart).ajaxStop(ajaxStop);

/*
* fin ready
* */
