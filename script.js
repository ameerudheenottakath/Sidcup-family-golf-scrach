
var crs = document.querySelector(".curser")
var blur = document.querySelector(".curser-blur")

document.addEventListener("mousemove",function(dets){
    crs.style.left = dets.x+"px"
    crs.style.top = dets.y+"px"
    blur.style.left = dets.x-150+"px"
    blur.style.top = dets.y-150+"px"     
})


gsap.to(".nav",{
    backgroundColor:"#000",
    height:"120px",
    duration:0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})