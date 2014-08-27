/******************************
Overlay Effect for individual page
******************************/

/* Variables */
var AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
var members = $('.members');
var membersButton = $('.members-el');
var overlay = $('.overlay');

/* On menu button click event */
$(membersButton).click(function(event){

    /* This conditional statement is here to prevent
    clicks on inactive buttons on IE10, as pointer-events
    cannot be applied on non-SVG elements */

    if ($(this).hasClass("inactive")) {

        event.preventDefault();

    } else {

        /* Remove old previous classes */
        $(membersButton).removeClass('inactive_reverse active_reverse');
        $(members).removeClass('fx-box_rotate fx-box_rotate_reverse');
        $(overlay).removeClass('active active_reverse');

        /* Add classes on defined elements */
        $(this).siblings().addClass('inactive');
        $(this).addClass('active');
        $(members).addClass('fx-box_rotate');

        /* Activate related overlay */
        var o_target = $(this).data('id');
        $('#'+o_target).addClass('active');


    }

});

/* On close button click event */
$(".close").click(function(){

    /* Add *_reverse classes */
    $('.active', members).removeClass('active').addClass('active_reverse');
    $('.inactive', members).addClass('inactive_reverse');
    $(members).addClass('fx-box_rotate_reverse');
    $(this).parent().addClass('active_reverse');

    /* Remove .inactive when animation is finished */
    $('.inactive_reverse').bind(AnimEnd, function(){

        $(membersButton).removeClass('inactive');
        $('.inactive_reverse').unbind(AnimEnd);

    });

});