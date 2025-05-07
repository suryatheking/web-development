var t1=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 60%",
    scrub:true,
    markers:true
}})

t1.to(".fanta",{
    
    rotation:"360",
    top:"108%",
    left:"4%",
    
},'orange')

t1.to(".orange-cut",{
    top:"90%",
    left:"25%",
    rotate:"360"
},'orange')

t1.to(".leaf2",{
    top:"85%",
    left:"27%",
    rotate:"360"
},'orange')

t1.to(".leaf1",{
    top:"100%",
    left:"52%",
    rotate:"360"
},'orange')
t1.to(".orange",{
    top:"175%",
    left:"86%",
    rotate:"20"    
},'orange')


var t2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"50% 60%",
    scrub:true,
    markers:true
}})
t2.to(".fanta",{
    top:"224%",
    left:"36%",
    width:"30%",
    
    
    
})
t2.from(".card #sprite",{
    left:"-20%",
   top:"250%",
   rotate:"-90deg",

},'ani2')
t2.from(".card .lemon",{
    opacity:"0.5",
    

},'ani2')

t2.from(".cococola",{
    top:"250%",
    right:"-20%",
    rotate:"90deg",

},'ani2')
t2.to("button",{
    top:"20%",
    width:"80%",
    color:"red"
    
})