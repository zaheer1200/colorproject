function timelineOne(){var tl= gsap.timeline({
    scrollTrigger:{
        trigger:"#home",
        start: " Top Top",
        
        markers:true,
        scrub:1,
        pin:true,
       
    }
})
.to("#circle #btm img",{
    rotate:"-180deg",
    scale:0,
    stagger:.1,
    duration:1,
    ease: Power1,
},"hello")

.to("#cimg img",{
    
    scale:0,
   duration:.5,
   
    ease: Power1,
},"hello")
.to("#center-img h5",{
    
   opacity:0,
   duration:.5,
   
    ease: Power1,
},"hello")
.to("#circle #top img",{
   
    scale:0,
    stagger:.1,
    duration:1,
    ease: Power1,
},"hello")
.to("#overlay>h4",{
    bottom:"-50%",
 ease:Power1,
 },"hello")
.to("#golla",{
    top:"50%",
    scale:2,
 ease:Power1,
 },"hello")
.to("#overlay>h1",{
   bottom:"6%",
    scale:2,
    rotate:0,
 ease:Power1,
 },"hello1")
.to("#golla",{
    opacity:0,
 ease:Power1,
 },"hello1")

 .to("#leftimgbox img",{
    top:"0%",
    duration:5,
    
  },"hello1")
.to("#sm-circle",{
   
    scale:0,
  
    duration:.5,
    ease: Power1,
},"hello1")

.to("#circle",{
   
    scale:0,
   
    duration:.5,
    ease: Power1,
},"hello1")
.to("#leftimgbox img",{
    top:"-100%",
    duration:.6,
    
  },"hello2")







}
function timelineTwo(){var tl= gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        start: " Top Top",
        
        markers:true,
        scrub:1,
        pin:true,
       
    }
})
  .to("#circle1",{
        top:"50%",
        duration:2,
        delay:3,
        ease: Power1 ,

    
    })
  .to("#circle2",{
        top:"50%",
        duration:2,
        delay:3,
        ease: Power1 ,
 
    
    })
  .to("#circle1",{
        left:"50%",
        duration:2,
           ease: Power1 ,
    
    })
  .to("#circle2",{
        left:"50%",
        duration:.5,
        ease: Power1 ,
      
  
          scale:10,
        background:"linear-gradient(to right, palevioletred , pulm)"

    
    })
  .to("#stop>h2",{
        left:"-180%",
        duration:8,
        ease: Power1 ,
    },"a")
  .to("#sbtm #onep",{
       opacity:0,
        // duration:3,
        ease: Power1 ,
    },"a")
  .to("#sbtm #twop",{
       opacity:1,
      delay:2,
        duration:4,
        ease: Power1 ,
    },"a")

}

timelineOne();
timelineTwo();