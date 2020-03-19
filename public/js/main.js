$(document).ready(function(){
    console.log('js loaded')
    $('.collapsible').collapsible();
    // $(".dropdown-trigger").dropdown({
    //    constrainWidth: false,
    //    coverTrigger: false,
    // //    hover: true,
    //    alignment: 'right',
    // });
    $('.sidenav').sidenav({
        isFixed:true,
        isOpen: true,
    });
});
