const tl=gsap.timeline({defaults:{ease: "power1.out"}});
tl.to(".intro-logo",{y:"0%", duration:1});
tl.to(".slider", {y:"-100%", duration:1.5, delay:0.1});
tl.to(".intro",{y:"-100%",duration:1},"-=1" );


const links=document.querySelectorAll('.side_links')
function openSlideMenu(){
    document.getElementById('side-menu').style.width ='200px';
    for(const link of links){
        link.style.display ='block';
    }
}

function closeSlideMenu(){
    for(const link of links){
        link.style.display ='none';
    }
    document.getElementById('side-menu').style.width ='0px';
}

for(const link of links){
    link.addEventListener('click',()=>{
        closeSlideMenu();
    })
}

particlesJS.load('particle-div','./js/particlesjs-config.json');
AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
});