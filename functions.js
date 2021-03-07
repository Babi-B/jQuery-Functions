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

    // text() Function
    $('#addText').click(function(){
        $("#text").text('The text() method sets or returns the text content of the selected elements.When this method is used to return content, it returns the text content of all matched elements (HTML markup will be removed).When this method is used to set content, it overwrites the content of ALL matched elements.')
        $('#htmlLink').text('Check out the html() function')
    })

    // html() Function
    $('#addTag').click(function(){
        $('#htmlTag').html('<p>The html() method sets or returns the content (innerHTML) of the selected elements.<br> When this method is used to return content, it returns the content of the FIRST matched element.<br>When this method is used to set content, it overwrites the content of ALL matched elements.</p>')
    })

    //appendTo() Function
    $('#append').click(function(){
        $('<p>The <b>appendTo()</b> is an <b>inbuilt method in jQuery </b>that is used to insert HTML element at the end of the selected element. Here the element content specifies the content to be inserted. Parameters: It accepts a parameters “selector” which specifies the elements to which content will be appended.</p>').appendTo('#appendInfo')
    })

    //prependTo() Function
    $('#prepend').click(function(){
        $('<p>The <b>prependTo()</b> method is an <b>inbuilt method in jQuery</b> which is used to insert HTML elements or some content at the beginning of the selected element.<br><b>Parameters:</b> This function accepts two parameters as mentioned above and described below: <br>&nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;<b>content: </b>It is required parameter and used to specify the content to be inserted.<br>&nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;<b> selector:</b> It is required parameter and used to specify the elements to prepend the content.</p>').prependTo('#prependInfo')
    })
})

