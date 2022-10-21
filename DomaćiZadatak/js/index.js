
 //$('.open-btn').click( function(){
 //$('.cookies').toggle(2000);

 //} );

 //$('.cookies').click(function (){

//$('.zatvori').close();

 //});
 $(document).ready(function(){

   
   
$('.open-btn').on({
    "click":function(){
        $(".cookies").css({ transform:"scale(1,1)"});
}
})
});

 $('.zatvori').on({
    "click":function(){
        $(".cookies").css({ transform:"scale(0,0)"});
}
});
 
