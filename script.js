$(document).ready(function() {
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });


    
// my services
     $(Window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 1200) {
            $('.baner-headin').addClass('banner-heading');
            $('.banner-hading0').addClass('banner-heading0');
            $('.banner-heding1').addClass('banner-heading1');

        }
        else {
            $('.baner-headin').removeClass('banner-heading');
            $('.banner-hading0').removeClass('banner-heading0');
            $('.banner-heding1').removeClass('banner-heading1');

        }
     });

    //  project work

    $(Window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 1800) {
            $('.anner-heading1').addClass('banner-heading1');
            $('.r-heading1').addClass('banner-heading1');
            $('.r-heading1').addClass('banner-heading1');
            $('.er-heading0').addClass('banner-heading0');


        }
        else {
            $('.anner-heading1').removeClass('banner-heading1');
            $('.r-heading1').removeClass('banner-heading1');
            $('.r-heading1').removeClass('banner-heading1');
            $('.er-heading0').removeClass('banner-heading0');

        }
     });


     $(Window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position >= 2100) {
            $('.er-par2').addClass('banner-par2');
            $('.a-heading1').addClass('banner-heading1');
            $('.a-heading1').addClass('banner-heading1');
            $('.a-heading1').addClass('banner-heading1');


        }
        else {
            $('.er-par2').removeClass('banner-par2');
            $('.a-heading1').removeClass('banner-heading1');
            $('.a-heading1').removeClass('banner-heading1');
            $('.a-heading1').removeClass('banner-heading1');

        }
     });


    
});
    

    

    






    
       

    