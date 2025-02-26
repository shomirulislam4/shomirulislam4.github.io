/* Main Menu Toggle */
$(function(){
    $('.sib__main__menu').on('click', function(){
        $('.sb__header .wrapper').addClass('show');
    })
    $('.sib__mainmenu__close').on('click', function(){
        $('.sb__header .wrapper').removeClass('show');
    })
})