//轮播图
$(function(){
    var num=1;
//轮播图上的选项卡
    var banner=$('#innert_top').children();
    var banner_i=$('.box');
    //按钮区
    banner.each(function () {
        $('<i>').appendTo('.box')
    });
    var i_i=banner_i.find('i');//下按钮

    i_i.eq(0).addClass('red');
    i_i.on('mouseenter',function () {
         clearInterval(time)
        console.log(1)
        $(this).addClass('red')
            .siblings().removeClass('red');
        banner.eq($(this).index()).removeClass('hidden')
            .siblings().addClass('hidden');

});
    i_i.on('mouseleave',function () {
        time=setInterval(function () {
            $('#innert_top').find("li").eq(num).removeClass('hidden').siblings().addClass('hidden');
            i_i.eq(num).addClass('red')
                .siblings().removeClass('red');
            num++;
            if(num>8){
                num=0;
            }
        },1000);
    });

    var time=setInterval(function () {
        $('#innert_top').find("li").eq(num).removeClass('hidden').siblings().addClass('hidden');
        i_i.eq(num).addClass('red')
            .siblings().removeClass('red');
        num++;
        if(num>8){
            num=0;
        }


    },1000);

$('#li_1').children().hover(function () {
    $('#xuan').show();
    $('#xuan').find('li').eq($(this).index()).show().siblings().hide();

}, function () {
    $('#xuan').hide();
});
//时间倒计时
     var i=60;
     setInterval(run,1000);
       function run(){
         i--;

         if(i===0){i=60}
           if(i<10){
               i='0'+ i
           }
           $(".miao").html(i);
        }


});



