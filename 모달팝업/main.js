$('#notice>ul>li>a').on("click", function(){
    $('.popup').css("display", "block");

    var txt = $(this).text();
    $('.popup>h1').text(txt);
});

$('#close').click(function(){
    $('.popup').css("display" , "none");
})