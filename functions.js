$(document).ready(function(){
    //toggle() function
    $("button#toggler").click(function(){
        $('#toggle').toggle()
      });
      
     // toggleClass() Function
    $("button#classToggler").click(function(){
        $('.toggleClass').toggleClass("colorChange");
      });

     //fadeToggle() Function
     $('button#fader').click(function(){
        $('#fadeToggle1').fadeToggle()
        $('#fadeToggle2').fadeToggle('slow')
         $('#fadeToggle3').fadeToggle(3000)
     })

     //slideToggle() Function
     $('#slideToggle1').click(function(){
         $('#panel1').slideToggle()
     })
     $('#slideToggle2').click(function(){
        $('#panel2').slideToggle('slow')
    })
    $('#slideToggle3').click(function(){
        $('#panel3').slideToggle(3000)
    })
})

