let line1 = document.querySelector('.head_counter_else_line1');
let line2 = document.querySelector('.head_counter_else_line2');
let line3 = document.querySelector('.head_counter_else_line3');
let line4 = document.querySelector('.head_counter_else_line4');
let line5 = document.querySelector('.head_counter_else_line5');

let question = document.querySelector('.next');

let header_header = document.querySelector('.header_header');
let title = document.querySelector('.title');
let menu_image = document.querySelector('.menu_image');
let menu = document.querySelector('.menu');
let atelie = document.querySelector('.atelie');

question.addEventListener('click', () => {
    line1.style.visibility = 'visible';
    line1.style.animation = 'line1 0.4s linear forwards';
});

//адаптив верхней вылезающей хрени
let windowInnerWidth = window.innerWidth;
window.addEventListener('resize', () => {
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 1200) {
        atelie.style['border-right'] = '4px solid #F2F4F7';
        menu.style['border-left'] = '0';
    } else {
        menu.style['border-left'] = '4px solid #F2F4F7';
        atelie.style['border-right'] = '0';

    }
});

//Адаптив текста заголовка
let head_title = document.querySelector('.head_title');
window.addEventListener('resize', () => {
    if (windowInnerWidth < 525) {
        head_title.innerHTML = "Пошив и ремонт одежды."
    } else {
        head_title.innerHTML = "Пошив и ремонт одежды."
    }
});


let c = 0;
let elem_top;
if (!sessionStorage.getItem("1")) {
    sessionStorage.setItem('1', '0');
} else if (sessionStorage.getItem("1") == '0' && document.documentElement.scrollTop != 0) {
    header_header.classList.add('active');
    title.classList.add('active_title');
} else if (sessionStorage.getItem("1") == '1') {
    menu_image.setAttribute("src", './images/menu.png');
    header_header.classList.remove('active');
    header_header.classList.add('active_color');
    title.classList.add('active_title');
    if (windowInnerWidth > 1200) {
        atelie.style['border-right'] = '4px solid #F2F4F7';
    } else {
        menu.style['border-left'] = '4px solid #F2F4F7';
    }
    header_header.style.border = '4px solid #F2F4F7';
}
window.addEventListener('scroll', function () {
    windowInnerWidth = window.innerWidth;
    if (c == 0) {
        c += 1;
        elem_top = document.documentElement.scrollTop;
    }
    //up
    if (document.documentElement.scrollTop > elem_top) {
        header_header.classList.add('active');
        menu_image.setAttribute("src", './images/menu_white.png');
        title.classList.add('active_title');
        header_header.classList.remove('active_color');
        title.style.transition = '0.5s';
        sessionStorage.setItem('1', '0');
        c = 0;
    }
    //down
    else if (document.documentElement.scrollTop + 80 < elem_top && document.documentElement.scrollTop != 0) {
        header_header.classList.remove('active');
        menu_image.setAttribute("src", './images/menu.png');
        header_header.classList.add('active_color');
        if (windowInnerWidth > 1200) {
            atelie.style['border-right'] = '4px solid #F2F4F7';
        } else {
            menu.style['border-left'] = '4px solid #F2F4F7';
        }
        header_header.style.border = '4px solid #F2F4F7';
        title.style.transition = '0.5s';
        sessionStorage.setItem('1', '1');
        c = 0;
    } else if (document.documentElement.scrollTop === 0) {
        header_header.classList.remove('active');
        header_header.classList.remove('active_color');
        menu_image.setAttribute("src", './images/menu_white.png');
        if (windowInnerWidth > 1200) {
            atelie.style['border-right'] = '4px solid rgb(255, 255, 255)';
        } else {
            menu.style['border-left'] = '4px solid rgb(255, 255, 255)';
        }
        header_header.style.border = '4px solid rgb(255, 255, 255)';
        header_header.style['border-top'] = '6px solid rgb(255, 255, 255)';
        title.classList.remove('active_title');
        title.style.transition = '0s';
        sessionStorage.setItem('1', '0');
        c = 0;
    }
});

//анимация второго блока
let main_desc_title = document.querySelector('.main_desc_title');
let main_desc_description = document.querySelector('.main_desc_description');

if (main_desc_title.classList.contains('show_main_desc_title')) {
    alert(1)
    main_desc_title.style.transition = '0s';
    main_desc_description.style.transition = '0s';
}

window.addEventListener('resize', (e) => {
    if (windowInnerWidth < 1200) {
        main_desc_title.style.top = '0px';
        main_desc_title.style.opacity = '1';
        main_desc_description.style.top = '0px';
        main_desc_description.style.opacity = '1';
        main_desc_title.classList.remove('show_main_desc_title');
        main_desc_description.classList.remove('show_main_desc_description');
        main_desc.style.position = 'static';
    } else if (windowInnerWidth > 1200) {
        main_desc_title.style.top = '40px';
        main_desc_title.style.opacity = '0';
        main_desc_description.style.top = '40px';
        main_desc_description.style.opacity = '0';
        if (scrollY >= 430) {
            main_desc_title.classList.add('show_main_desc_title');
            setTimeout(() => {
                main_desc_description.classList.add('show_main_desc_description');
            }, 500)
        } else if (scrollY <= 400) {
            main_desc_title.classList.remove('show_main_desc_title');
            main_desc_description.classList.remove('show_main_desc_description');
        }

    }
})
window.addEventListener('scroll', (e) => {
    if (scrollY >= 430 && windowInnerWidth > 1200) {
        main_desc_title.classList.add('show_main_desc_title');
        setTimeout(() => {
            main_desc_description.classList.add('show_main_desc_description');
        }, 500)
    } else if (scrollY <= 270 && windowInnerWidth > 1200) {
        main_desc_title.classList.remove('show_main_desc_title');
        main_desc_description.classList.remove('show_main_desc_description');
    }
});

// медленная прокрутка второго блока и третьего блока
// 896
let main_desc = document.querySelector('.main_desc');
let header = document.querySelector('.header');
let uslugi = document.querySelector('.uslugi');
let c2 = 0;
let startcoords2;

let izdeliaImg = document.querySelectorAll('.izdelia_wrap');
let c3 = 0;
let startcoords3;
let prom3;
console.log(izdeliaImg)
if (windowInnerWidth < 1200) {
    main_desc_title.style.top = '0px';
    main_desc_title.style.opacity = '1';
    main_desc_description.style.top = '0px';
    main_desc_description.style.opacity = '1';
}

let topscroll;
if (windowInnerWidth > 1200) {
    topscroll = 0;
} else {
    topscroll = 1;
}

window.addEventListener('resize', (e) => {
    if (windowInnerWidth > 1200 && topscroll == 1) {
        document.documentElement.scrollIntoView(true);
        topscroll = 0;
    } else if (windowInnerWidth < 1200) {
        topscroll = 1;
    }
    c2 = 0;
    c3 = 0;
    if (windowInnerWidth < 1200) {
        main_desc_title.style.top = '0px';
        main_desc_title.style.opacity = '1';
        main_desc_description.style.top = '0px';
        main_desc_description.style.opacity = '1';
        main_desc.style.opacity = '1';
        main_desc.style.visibility = 'visible';
        main_desc.style.top = '0';

        uslugi.style.position = 'static';
        uslugi.style.opacity = '1';
        uslugi.style.visibility = 'visible';
        izdeliaImg.forEach((item) => {
            item.style.transform = `scale(1)`;
            item.firstChild.style.transform = `scale(1)`;
        });
    }
});

window.addEventListener('scroll', (e) => {
    if (windowInnerWidth > 1200) {
        if (header.getBoundingClientRect().y <= -header.clientHeight) {
            if (c2 == 0) {
                startcoords2 = header.getBoundingClientRect().y / 20 * (windowInnerWidth / 1000);
                c2 = 1;
            }
            main_desc.style.position = 'fixed';
            // sessionStorage.setItem('main_desc.style.position','fixed');
            main_desc.style.top = `${header.getBoundingClientRect().y / 20 * (windowInnerWidth/1000)-startcoords2}px`;
            // sessionStorage.setItem('main_desc.style.top',`${header.getBoundingClientRect().y / 20 * (windowInnerWidth/1000)-startcoords2}px`);
            if (main_desc.getBoundingClientRect().y < -4) {
                main_desc.style.opacity = `${(header.getBoundingClientRect().y+1138)/400}`;
                // sessionStorage.setItem('main_desc.style.opacity',`${(header.getBoundingClientRect().y+1138)/400}`);
            }
        } else if (header.getBoundingClientRect().y > -header.clientHeight) {
            main_desc.style.opacity = `1`;
            main_desc.style.position = 'absolute';
            main_desc.style.top = `0`;
        }
        if (main_desc.style.opacity < 0) {
            main_desc.style.visibility = 'hidden';
            uslugi.style.opacity = '0';
            uslugi.style.visibility = 'visible';
            uslugi.style.opacity = `${Math.abs(header.getBoundingClientRect().y+1138)/400}`;
            if (uslugi.style.opacity < 1) {
                uslugi.style.position = 'fixed';
                izdeliaImg.forEach((item) => {
                    item.style.transform = `scale(${Math.abs(header.getBoundingClientRect().y+1138)/400})`;
                    item.firstElementChild.style.transform = `scale(${Math.abs(Math.floor(Math.abs(header.getBoundingClientRect().y+1138))*5/1000-3)})`;
                });
            } else {
                uslugi.style.position = 'absolute';
                uslugi.style.bottom = '0px';
                uslugi.style.top = 'auto';
                izdeliaImg.forEach((item) => {
                    item.style.transform = `scale(1)`;
                });
            }
        } else if (main_desc.style.opacity > 0) {
            main_desc.style.visibility = 'visible';
            uslugi.style.visibility = 'hidden';
        }
    }
});

// прокрутка вверх при перезагрузке страницы
window.onbeforeunload = function () {
    if (windowInnerWidth > 1200) {
        document.documentElement.scrollIntoView(true);
    }
}

// map overlay
let map_overlay = document.querySelector('.map_overlay');

map_overlay.addEventListener('click',()=>{
    map_overlay.style.display = 'none';
})

// Всплывающая подсказка
// let description = document.querySelector('.description');

// map_overlay.addEventListener("mousemove",function(e){
//     description.innerHTML="Нажмите чтобы активировать карту.";
//     description.style.left=`${e.pageX+12}px`;
//     description.style.top=`${e.pageY-12}px`;
//     description.style.display='flex';
// });
// map_overlay.addEventListener("mouseleave",function(e){
//     description.style.display='none';
// });

// Меню
let menu_popup = document.querySelector('.menu_popup');
let close = document.querySelector('.close');
let menu_uslugi = document.querySelector('.menu_uslugi');
let menu_nashi_raboty = document.querySelector('.menu_nashi_raboty');
let menu_kak_nas_nayti = document.querySelector('.menu_kak_nas_nayti');
let nashi_uslugi = document.querySelector('.nashi_uslugi');
let nashi_izdelia = document.querySelector('.nashi-izdelia');
let map = document.querySelector('.map');

menu.addEventListener('click',()=>{
    menu_popup.style.right = '0';
})
close.addEventListener('click',()=>{
    menu_popup.style.right = '-300px';
})

menu_uslugi.addEventListener('click',()=>{
    menu_popup.style.right = '-300px';
    nashi_uslugi.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})
menu_nashi_raboty.addEventListener('click',()=>{
    menu_popup.style.right = '-300px';
    nashi_izdelia.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})
menu_kak_nas_nayti.addEventListener('click',()=>{
    menu_popup.style.right = '-300px';
    map.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
})

