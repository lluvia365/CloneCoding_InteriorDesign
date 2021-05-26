$(function(){
    
    $('.gallery').click(function(){
        
        // 모달이미지의 src를 클릭한 이미지의src로 바꿈
        $('#modalImage').attr('src', $(this).attr('src'));
        
        // 모달이미지의 alt를 클릭한 이미지의 alt로 바꿈
        $('#modalCaption').html($(this).attr('alt'));
        
        $('#modal').fadeIn();
        $('#modal').css('display','flex');
        
    });
    
    // 모달창 닫기버튼 클릭하면 화면닫음
    $('#modalClose').click(function(){
        $('#modal').fadeOut();
    });
    
    // 펼침버튼 누르면 왼쪽메뉴 보이게
    $('#view').click(function(){  
                
        var x = $('#leftBox').css('left');  // leftBox의 가로 위치값
        console.log(x)
        
        if(x == "-200px")  // 가로위치가 -200px이면
            $('#leftBox').css('left','0');  // 화면 안으로 이동
        else  // 그렇지 않으면
            $('#leftBox').css('left','-200px')  // 화면 밖으로 이동
    });

});  // $(function())


$(window).resize(function(){
    if($(this).window() > 700)
        $('#leftBox').removeAttr('style');
})


