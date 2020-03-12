document.addEventListener('DOMContentLoaded', function(){ 
        var d = 4,
            t = .5 ,
            tl = new TimelineMax(),
            easeInOut = Power1.easeInOut,
            easeIn = Power1.easeIn,
            easeOut = Power1.easeOut;

//F1
            //pre-set tablet pos/ scale/ rotation
            tl.set("#tablet", {transform:"rotateY(-30deg) rotateX(18deg) scale(0.7)", ease:easeOut})
            //branding
            .addLabel("initHeadline01")
            .to("#logo", t, {css:{height: "63px"}, ease:easeOut},"initHeadline01")
            .from("#logo", t ,{y:"-=30"}, "initHeadline01")  
            .to("#cta", t, {css:{height: "32px"}, ease:easeOut, delay:t/2}, "initHeadline01")
            .from("#cta", t ,{y:"+=30"}, "initHeadline01")  
            
            //tablet zoomIn    
            .to("#tablet", t, {opacity:1, ease:easeIn}, "initHeadline01")
            .from("#tablet", t*2, {scale:0.5, ease:easeOut}, "initHeadline01")
            
            
            .from("#headlineImage", t*2, {y:"+=30", ease:easeOut}, "initHeadline01")
            .to(".f1_headline", t/1.5, {opacity:1, ease:easeOut}, "initHeadline01")
            .from(".f1_headline", t*1.5, {x:"+=250",  ease:easeOut}, "initHeadline01")
//F2
            //tablt rotation
            .addLabel("rotation", "+="+t*2) //delay f1-f2
            .to("#tablet", t*3, {x:38, y:-9, rotationY:"0", rotationX:"0", rotationZ:"0", scale:"1", ease:easeInOut}, "rotation")
            //h1 slide out
            .to(".f1_headline", t, {y:"+=60",  ease:easeIn}, "rotation")
            
//h201 slide in
            .to(".f2_headline", t/1.5, {opacity:1, ease:easeOut, delay:t}, "rotation")
            .from(".f2_headline_top", t*1.5, {y:"-=80",  ease:easeOut, delay:t}, "rotation")
            .from(".f2_headline_bottom", t*1.5, {y:"+=30",  ease:easeOut, delay:t}, "rotation")
          
//h201 slide out
            .addLabel("endF2Headline01", "+="+t*2) //delay f2-f3
            .to(".f2_headline_top", t, {y:"-=60", ease:easeOut}, "endF2Headline01")  
            .to(".f2_headline_bottom", t, {y:"+=60", ease:easeOut}, "endF2Headline01")   
//F3
            //h3 slide in
            .addLabel("initHeadline03", "-="+t/2)
            .to("#mask", t*1, {width:"241px",  ease:easeOut}, "initHeadline03")
            .to(".f3_headline", t/1.5, {opacity:1, ease:easeOut}, "initHeadline03")
            .from(".f3_headline_top", t*1.5, {y:"-=80",  ease:easeOut}, "initHeadline03")
            .from(".f3_headline_bottom", t*1.5, {y:"+=60",  ease:easeOut}, "initHeadline03")
        
            //h3 slide out
            .addLabel("endHeadline03", "+="+t*2) //delay f2-f3
            .to("#mortgage_text", t*1.5, {y:"-=30",  ease:easeOut}, "endHeadline03")
            .to(".f3_headline_top", t, {y:"-=60", ease:easeOut}, "endHeadline03")  
            .to(".f3_headline_bottom", t, {y:"+=60", ease:easeOut}, "endHeadline03")  
// //F4
            //h4 slide in
            .addLabel("initHeadline04", "-="+t/2)
            .to("#apply_text", t*1.5, {opacity:1,  ease:easeOut}, "endHeadline02")      
            .to("#legal", t, {bottom:"61px",opacity:1, ease:easeOut}, "initHeadline04")  
            .to(".f4_headline", t/1.5, {opacity:1, ease:easeOut}, "initHeadline04")
            .from(".f4_headline_top", t*1.5, {y:"-=30",  ease:easeOut}, "initHeadline04")
            .from(".f4_headline_bottom", t*1.5, {y:"+=60",  ease:easeOut}, "initHeadline04");

}, false);


