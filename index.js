window.onload = function(){

    TweenMax.set('h1' , {xPercent: -50 , yPercent: -50, x:0 , y:0})

    if(window.matchMedia("(min-width: 1000px)").matches){

        let tl = new TimelineMax();
        tl
        .to('.left h2' , 2, {delay: 0.5 , opacity:0 , y: -100 , ease: Expo.easeInOut})
        .to('.left ' , 2 , {top: "-150%" , autoAlpha: 0, ease: Expo.easeInOut }, '-=1')
        .to('.right h2' , 2 , {opacity:0 , y: +60 ,  ease: Expo.easeInOut} , '-=2')
        .to('.right ', 2 ,{top: "+100%" , autoAlpha: 0 , ease: Expo.easeInOut} , '-=1.5')
        .from('nav' , 1 , {opacity:0 , y: -60 , ease: Expo.easeInOut} , 3.5)
        .from('h1' , 1 , {opacity: 0 , x: 200 , ease : Expo.easeIt} , 3.5)
        .from('.social li' , 0.75 , {opacity: 0 , y: 360 , ease : Expo.easeIt} , 4)
        .staggerFrom('i' , 0.3 , {opacity: 0 , x: -160 ,  ease: Expo.easeInOut} , 0.25 , 4.25)
        .fromTo('.shape-btn', 1, { opacity: 0, y: 250 }, { opacity: 1, y: 0, ease: Expo.easeInOut }, 2.75)
        .call(showClothesSection); // Call the showClothesSection function when the animation is complete

    }else if (window.matchMedia("(max-width: 1000px)").matches){
        let tl2 = new TimelineMax();
        document.getElementById('left').style.display = "none";
        document.getElementById('right').style.display = "none";

        tl2
        .from('nav' , 1 , {opacity:0 , y: -60 , ease: Expo.easeInOut} , 0.5)
        .from('h1' , 1 , {opacity: 0 , x: 200 , ease : Expo.easeIt} , 0.5)
        .from('.social li' , 0.75 , {opacity: 0 , y: 360 , ease : Expo.easeIt} , 1)
        .staggerFrom('i' , 0.5 , {opacity: 0 , x: -160 ,  ease: Expo.easeInOut} , 0.35 , 1.25)
        .call(showClothesSection); // Call the showClothesSection function when the animation is complete

    }

    function showClothesSection() {
        const clothesSection = document.getElementById('clothes');
     
       
        clothesSection.style.visibility = "visible"; 
        clothesSection.style.display = "block";
        clothesSection.classList.add('clothes-show');

        const footer = document.getElementById('footer');   
        footer.style.visibility = "visible";
        footer.style.display = "block";
     
        TweenMax.to(clothesSection, 1, {opacity: 1, ease: Expo.easeInOut}); // Fade in the clothes section
        TweenMax.to(footer, 1, {opacity: 1, ease: Expo.easeInOut}); 
    }
   


}