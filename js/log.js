$(function(){
    let a = document.body.clientHeight;
    // let t = $(document).scrollTop();

    //注册界面展开
    let tl = new TimelineLite();
    $('#sign_down').click(function(){
        TweenLite.to('.log_title_left',0.8,{
            x:-400,
            display:'none'
        })
        TweenLite.to('.sign_title_left',0.8,{
            x:-400,
            display:'none'
        })
        TweenLite.to('.log_div',1,{
            y:a/2
        })
        TweenLite.to('.sign_div',1,{
            y:a/2
        });
        setTimeout(() => {
            tl.to('.sign_dis_div',1,{opacity:1});
            tl.to('#sign_down',0.4,{opacity:0});
        }, 1000);
    });

    // 登录界面展开
    $('#log_up').click(function(){
        // 标题左移
        TweenLite.to('.log_title_left',0.8,{
            x:-400,
            display:'none'
        })
        TweenLite.to('.sign_title_left',0.8,{
            x:-400,
            display:'none'
        })
        // div展开
        TweenLite.to('.log_div',1,{
            y:-a/2
        })
        TweenLite.to('.sign_div',1,{
            y:-a/2
        });
        setTimeout(() => {
            tl.to('.log_dis_div',1,{opacity:1});
            tl.to('#log_up',0.4,{opacity:0});
        }, 1000);
    });

    // 注册后展开登录
    $('#sign_submit').click(function(){
        // $('#sign_submit').stopPropagation();
        TweenLite.to('.log_div',1,{
            y:-a/2
        })
        TweenLite.to('.sign_div',1,{
            y:-a/2
        });
        setTimeout(() => {
            tl.to('.log_dis_div',1,{opacity:1});
            tl.to('#log_up',0.4,{opacity:0});
        }, 1000);
    })

    // 登录跳注册
    $('#log_sign').click(function(){
        TweenLite.to('.log_div',1,{
            y:a/2
        })
        TweenLite.to('.sign_div',1,{
            y:a/2
        });
        setTimeout(() => {
            tl.to('.sign_dis_div',1,{opacity:1});
            tl.to('#sign_down',0.4,{opacity:0});
        }, 1000);
    })
})

$(function(){
    TweenMax.fromTo(".a", 1.5, {drawSVG:"0%"},{drawSVG:"0% 100%"}); 
    TweenMax.fromTo(".b", 1.5, {drawSVG:"0%"},{drawSVG:"0% 100%"}); 

})