pageoneLoad();
pageoneMove();
// 页面跳转
$(function(){
    let a = document.body.clientHeight;
    let t = $(document).scrollTop();
    let time = 0;
    //上移
    // 页面一加载
    $('#up_two').click(function(){
        $('.dis_div_one').css({
            display:'grid',
            opacity:'1'
        })
        $("html,body").animate({ scrollTop: t-a },800);
        setTimeout(() => {
            $('.dis_div_two').css({
                display:'none',
                opacity:'0'
            });
        }, 900);
    });
    // 页面二加载
    $('#up_three').click(function(){
        $('.dis_div_two').css({
            display:'grid',
            opacity:'1'
        })
        
        $("html,body").animate({ scrollTop: t-a },800);
        pagetwoLoad();

        setTimeout(() => {
            $('.dis_div_three').css({
                display:'none',
                opacity:'0'
            });
        }, 900);
    });
    //页面三加载
    $('#up_four').click(function(){
        $('.dis_div_three').css({
            display:'grid',
            opacity:'1'
        })
        
        $("html,body").animate({ scrollTop: t-a },800);
        pagethreeLoad();

        setTimeout(() => {
            $('.dis_div_four').css({
                display:'none',
                opacity:'0'
            });
            
        }, 900);
    });
    //页面四加载
    $('#up_five').click(function(){
        console.log("five")
        $('.dis_div_four').css({
            display:'grid',
            opacity:'1'
        })
        
        $("html,body").animate({ scrollTop: t-a },800);
        pagefourLoad();

        setTimeout(() => {
            $('.dis_div_five').css({
                display:'none',
                opacity:'0'
            });
            
        }, 900);
    });

    // 下滑   
    // 页面二加载
    $('#down_one').click(function(){
        time++;
        // console.log(time);
        $('.dis_div_two').css({
            display:'grid'
        })
        $("html,body").animate({ scrollTop: t+a }, 800);
        setTimeout(() => {
            pagetwoLoad();     
            $('.dis_div_one').css({
                opacity:'0',
                display:'none'
            });
            // 首次记载执行动画
            if(time <= 1){
                //会话框加载
                setTimeout(() => {
                    LefttalkOnload(); 
                }, 3000);
                // 顶部动画
                setTimeout(() => {
                    ToptitleOnload()
                }, 7300);
            }
            else{
                $('.two_left_talk_div').css({
                    opacity:1
                })
            }
            
        }, 1000);
    });
    //页面三加载
    $('#down_two').click(function(){
        $('.dis_div_three').css({
            display:'grid',
        })
        $("html,body").animate({ scrollTop: t+a }, 800);
        setTimeout(() => {
            pagethreeLoad();     
            $('.dis_div_two').css({
                opacity:'0',
                display:'none'
            });
        }, 1000);
    })
    //页面四加载
    $('#down_three').click(function(){
        $('.dis_div_four').css({
            display:'grid',
        })
        $("html,body").animate({ scrollTop: t+a }, 800);
        setTimeout(() => {
            $('.dis_div_four').css({
                opacity:1
            })
            pagefourLoad();     
            $('.dis_div_three').css({
                opacity:'0',
                display:'none'
            });
        }, 1000);
    })
    //页面五加载
    $('#down_four').click(function(){
        $('.dis_div_five').css({
            display:'grid',
        })
        $("html,body").animate({ scrollTop: t+a }, 800);
        setTimeout(() => {
            $('.dis_div_five').css({
                opacity:1
            })
            pagefiveLoad();     
            $('.dis_div_four').css({
                opacity:'0',
                display:'none'
            });
        }, 1000);
    })
})

// 页面一加载
function pageoneLoad(){
    let tl1 = new TimelineLite();
    setTimeout(() => {
        pageoneDivLoad();
    }, 2000);
    setTimeout(() => {
        $('.top_title_one').css({opacity:1});
        $('.top_title_two').css({opacity:1});
        $('.one_vice_title_div').css({display: 'inherit'});

        tl1.from($('.top_title_one'),0.3,{
            bottom:20,
            opacity:0
        },'+=0.3')
        tl1.from($('.top_title_two'),0.3,{
            bottom:20,
            opacity:0
        },'+=1')
        $('.one_main_title').addClass('draw_title');
        $('.one_more_path').css({
            animation: 'draw_title 2s linear forwards'
        })
        $('.one_next_svg').css({
            animation: 'draw_title 1s linear forwards'
        })
        tl1.from($('.one_vice_title_div'),0.3,{
            bottom:20,
            opacity:0
        })
    }, 3000);
}
//界面一右滑动
function pageoneMove(){
    let tl1 = new TimelineLite();
    tl1.from($('.dis_div_one'),1,{
        left:1600
    })
}
// 界面一放大
function pageoneDivLoad(){
    $('.dis_div_one').css({
        transform: 'scale(1)'
    })
}
// 页面二加载
function pagetwoLoad(){
    $('.dis_div_two').css({
        opacity:'1'
    }); 
    
    let tl2 = new TimelineLite();
    // 右侧小标题加载
    tl2.from($('.two_title_one'),0.3,{
        opacity:0,
        bottom:20
    })
    tl2.from($('.two_title_two'),0.3,{
        opacity:0,
        bottom:20
    })
    tl2.from($('.two_decorate_div'),0.3,{
        opacity:0,
        right:200
    })
    // 图片加载
    tl2.from($('.two_pic_div'),0.3,{
        opacity:0,
        top:200
    },'+=0.1')
    tl2.from($('.two_intr_title_div'),0.3,{
        opacity:0,
        left:20
    })
    // 上下键加载
    tl2.from($('.down_two'),0.3,{
        opacity:0,
        bottom:200
    })
    // 修饰加载
    tl2.from($('.two_decorate_div_two'),0.3,{
        opacity:0,
        top:200
    })
    tl2.from($('.two_left_div'),0.3,{
        opacity:0,
        right:200
    },'+=0.1')
    tl2.from($('.two_top_div'),0.3,{
        opacity:0,
        bottom:20
    },'+=0.1')
    
}
// 界面二左侧对话框加载
function LefttalkOnload(){
    $('.two_left_talk_div').css({
        opacity:1
    })
    let tl2 = new TimelineLite();
    // 左侧对话框加载
    tl2.from($('.two_left_talk_one'),0.5,{
        opacity:0,
        top:20
    },'+=0.2');
    tl2.from($('.two_left_talk_two'),0.5,{
        opacity:0,
        top:50
    },'+=0.5');
    setTimeout(() => {
        $('.two_svg').css({
            opacity:1
        })
        TweenMax.fromTo("#two_path", 1, {drawSVG:"0%"},{drawSVG:"0% 100%"}); 
    }, 1000);

    tl2.from($('.two_left_reply_one'),0.3,{
        opacity:0
    })
    tl2.from($('.two_left_talk_three'),0.3,{
        opacity:0,
        top:20
    })
    // 右一对话框下移
    tl2.to($('.two_left_talk_two'),0.5,{
        top:20
    },'+=0.5');
    tl2.from($('.two_reply_one'),0.2,{
        opacity:0
    });
    tl2.from($('.two_reply_two'),0.2,{
        opacity:0
    })
    tl2.from($('.two_left_talk_four'),0.2,{
        top:20,
        opacity:0
    })
    setTimeout(() => {
        $('.two_reply_text').text('2 Replies');
    }, 5000);
    setTimeout(() => {
        $('.two_svg_two').css({
            opacity:1
        })
        TweenMax.fromTo("#two_path_two", 1, {drawSVG:"0%"},{drawSVG:"0% 100%"}); 
    }, 4000);
    
    // 左三对话框下移
    tl2.to($('.two_left_talk_three'),0.5,{
        top:30
    },'+=0.5');

}
// 界面二顶部标题展示
function ToptitleOnload(){
    mySplitText = new SplitText("#two_top_text", {type:"chars"}); 
    chars = mySplitText.chars;
    TweenMax.set("#two_top_text", {perspective:400});

    // click me
    setTimeout(() => {
        TweenMax.to(".two_top_btn",0.3,{
            opacity:0.5,
            transform: 'scale(0.9)',
        })
    }, 800);
    setTimeout(() => {
        TweenMax.to($('.two_message'),1,{
            left:180,
            top:10
        })
    }, 1200);
    setTimeout(() => {
        $('.two_message_path').css({
            fill:'#b10505'
        })
    }, 1500);
    setTimeout(() => {
        $('.top_text_div').css({
            opacity:1
        })
        TweenMax.staggerFrom(chars, 0.8,{opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01);
    }, 2000);
    
}
//右上角标题变化
$(function(){
    function debounce(fn, wait) {    
        var timeout = null;    
        return function() {        
            if(timeout !== null)   clearTimeout(timeout);        
            timeout = setTimeout(fn, wait);    
        }
    }
    // 展开
    function twoIntrMoreclick(){
        $('#two_intr_more').click(function(){
            $('#two_intr_more').css({
                transform: 'rotate(45deg)',
            })
            $('#two_intr_more').attr('id','two_intr_more_close')
            TweenMax.to($('.two_intr_title_span_one'),0.5,{
                bottom:200,
                opacity:0,
                display:'none',
            })
            setTimeout(() => {
                $('#two_intr_circle').css({
                    display:'flex'
                })
                TweenMax.to($('#two_intr_circle'),0.8,{
                    left:200,
                    top:10,
                    transform: 'scale(30)',
                });
            }, 400);
            setTimeout(() => {
                TweenMax.to($('.two_intr_title_span_two'),0.3,{
                    display:'flex',
                    opacity:1,
                    top:10,
                })
            }, 1300);
        })
    }
    window.addEventListener('click', debounce(twoIntrMoreclick(), 1000));        
})
//右下角图片变大
$(function(){
    $('.two_pic').click(function(){
        TweenMax.to($('.two_pic'),1,{
            transform: 'scale(1.6)',
            left:300,
            top:300
        });
        TweenMax.to($('.two_pic_intr'),1.3,{
            opacity:1,
            display:'flex'
        })
    })
})

// 页面三加载
function pagethreeLoad(){
    $('.dis_div_three').css({
        opacity:'1'
    }); 
    let tl3 = new TimelineLite();
        tl3.from($('.box'),0.2,{
            right:80,
            opacity:0
        },'+=0.2');
        tl3.from($('.three_logo'),0.2,{
            right:80,
            opacity:0
        })
        tl3.from($('.three_title_left_div'),0.2,{
            bottom:20,
            opacity:0
        })
        tl3.from($('.three_title_right_div'),0.2,{
            left:100,
            opacity:0
        })
        tl3.from($('.three_right_pic_div'),0.4,{
            left:100,
            opacity:0
        })
        tl3.from($('.three_intr_div_bottom'),0.4,{
            top:100,
            opacity:0
        })
        tl3.from($('.three_vice_title'),0.2,{
            right:200,
            opacity:0
        })
        tl3.from($('.three_main_title'),0.2,{
            right:200,
            opacity:0
        })
        tl3.from($('.three_down_div'),0.2,{
            opacity:0
        })
}
// 界面四加载
function pagefourLoad(){
    let tl4 = new TimelineLite();
    tl4.from($('.montain1'),0.3,{
        right:100,
        opacity:0
    });
    tl4.from($('.montain4'),0.3,{
        left:80,
        opacity:0
    })
    tl4.from($('.montain3'),0.3,{
        left:100,
        opacity:0
    })
    tl4.from($('.montain2'),0.3,{
        right:100,
        opacity:0
    })
    tl4.from($('.tree'),0.3,{
        top:100,
        opacity:0
    })
    tl4.from($('.four_title_main'),1,{
        left:80,
        opacity:0
    });
    tl4.from($('.four_intr'),0.4,{
        bottom:50,
        opacity:0
    },'+=0.2');
    tl4.from($('.four_change_icon'),0.5,{
        opacity:0
    });
    // 按键点击
    $('#four_change_icon').click(function(){
        // console.log("run success")
        TweenLite.to('.four_browser_div',1,{
            scale:0.7
        });
        $('#four_change_icon').css({
            opacity:'0'
        });
        TweenLite.to($('.four_browser_div'),1,{
            left:400,
            top:20
        });
        setTimeout(() => {
            $('.four_text_div').css({
                display:'grid'
            });
            $('.four_top_down').css({
                display:'flex'
            })
            tl4.from($('.four_text_div'),1,{
                right:300
            });
            tl4.from($('.four_text_content_left'),0.2,{
                bottom:90,
                opacity:0
            });
            tl4.from($('.four_text_content_right'),0.2,{
                top:90,
                opacity:0
            });
            tl4.from($('.four_line'),0.4,{
                right:30,
                opacity:0
            });
            tl4.from($('.four_text_right'),1,{
                right:20,
                opacity:0
            });
            tl4.from($('.four_top_down'),0.6,{
                top:20,
                opacity:0
            });
        }, 1200);
        
    })
    
}
//页面五加载
function pagefiveLoad(){
    let tl5 = new TimelineLite();
    tl5.from('.five_left_div',0.8,{
        opacity:0
    })
    tl5.from('.five_right_div',0.2,{
        opacity:0
    })
    tl5.from('.left_shadow',0.5,{
        opacity:0
    })
    setTimeout(() => {
        TweenLite.to('.right_map_img',1,{
            scale:0.7
        });
    }, 1000);
    tl5.from('.five_right_title',0.5,{
        bottom:200,
        opacity:0
    },'+=1')
    tl5.from('.five_more',0.5,{
        opacity:0
    },'+=0.2')
    
    setTimeout(() => {
        $('#five_path').css({
            opacity:1
        })
        TweenMax.fromTo("#five_path", 2, {drawSVG:"0%"},{drawSVG:"0% 100%"}); 
    }, 1000);
    setTimeout(() => {
        tl5.from('.five_location',0.2,{
            bottom:10,
        })
        $('.five_location').css({
            opacity:1
        });
        $('.five_top_down').css({
            opacity:1
        });
        tl5.from('.five_top_down',0.5,{
            left:20,
            opacity:0
        })
        
    }, 3000);
    
}

//图片变化
$(function(){
    Array.from($('.grid__item-img')).forEach((el) => {
        const imgs = Array.from($('.one_pic'));
        new hoverEffect({
            parent: el,
            intensity: el.dataset.intensity || undefined,
            speedIn: el.dataset.speedin || undefined,
            speedOut: el.dataset.speedout || undefined,
            easing: el.dataset.easing || undefined,
            hover: el.dataset.hover || undefined,
            image1: imgs[0].getAttribute('src'),
            image2: imgs[1].getAttribute('src'),
            displacementImage: el.dataset.displacement
        });
    });
})

// 防抖函数
$(function(){
    function delay(fn){
        let timeout = null;
        return function(){
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(this,arguments)
            }, 200);
        };
    }
    function hover(){
        // console.log('success');
        $('.down').hover(function(){
            if($('.down').hasClass('move_down')){
                $('.down').removeClass('move_down')
            }else{
                $('.down').addClass('move_down')
            }
        });
    }
    $('.down').hover = delay(hover());

})

// 界面一蒙版变化
$(function(){
    $('.one_vice_title_div').mouseover(function(){
        $('.one_black').css({
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        })
    })
    $('.one_vice_title_div').mouseout(function(){
        $('.one_black').css({
            backgroundColor: 'rgba(0, 0, 0, 0.3)'
            
        })
    })
})
//界面一阻止a默认事件
function pageoneHref(){
    // alert(111);
    $('.dis_div_one').css({
        transform: 'scale(0.7)'
    });
    TweenMax.to($('.dis_div_one'),0.5,{
        left:2000
    })
    setTimeout(() => {
        window.location.href = "./pages/logon.html"
    }, 1000);
}