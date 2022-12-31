'use strict';

/* 
Основные понятия и использование API

Web Animations API (API веб-анимации) обеспечивает общий язык для браузеров и разработчиков для описания анимации элементов DOM. 

Animation - Обеспечивает элементы управления воспроизведением и временную шкалу для узла анимации или источника. 

KeyframeEffect - Описывает наборы анимируемых свойств и значений, называемых ключевыми кадрами и их

AnimationTimeline - Представляет график анимации. 

DocumentTimeline - Представляет временные рамки анимации

AnimationEffectTimingProperties - принимают необязательный словарь объект синхронизации свойств.
 */
const click1 = document.querySelector('#click1'),
      click2 = document.querySelector('#click2'),
      img = document.querySelector('#img');

let animationImg;
click1.addEventListener('click', () => {
    if(!animationImg) {
        animationImg = img.animate([
            {transform: 'translateY(0)'},
            {transform:' translateY(50px)'},
            {transform: 'translateY(-0px)'},
            {transform:' translateY(0)'}
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if(animationImg.playState === 'paused') {
        animationImg.play();
    } else {
        animationImg.pause();
    }
})
