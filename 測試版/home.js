//// ********** Date **********
//const date = document.getElementsByClassName('date');
//for (i = 0; i < date.length; i ++) {
//    date[i].innerHTML = new Date().getFullYear();
//}
//
//// ********** Nav Button **********
//const navBtn = document.querySelector('.nav-btn');
//const linkContainer = document.querySelector('.link-container');
//const linkCluster = document.querySelector('.link-cluster');
//
//navBtn.addEventListener('click', function() {
//    const linkContainerHeight = linkContainer.getBoundingClientRect().height;
//    const linkClusterHeight = linkCluster.getBoundingClientRect().height;
//
//    if (linkContainerHeight === 0) {
//        linkContainer.style.height = `${ linkClusterHeight }px`;
//    }
//    else {
//        linkContainer.style.height = 0;
//    }
//})

// ********** Scroll - Fixed Nav & Go Top **********
const navContainer = document.getElementById('nav-container');
//const navContainer = document.querySelector('.header');
const xzCarouselContainer = document.querySelector('.about');
//const goTop = document.querySelector('.go-top');

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    const xzCarouselContainerHeight = (xzCarouselContainer.getBoundingClientRect().height)/2;
    const cutOffPoint = navContainerHeight + xzCarouselContainerHeight;
    
    if (window.matchMedia('(min-width: 768px)').matches) {
        if (scrollHeight > cutOffPoint) {
            navContainer.classList.add('fixed-nav');
        }
        else {
            navContainer.classList.remove('fixed-nav');
        }
    }
        
//    if (scrollHeight > 500) {
//        goTop.classList.add('show-go-top');
//    }
//    else {
//        goTop.classList.remove('show-go-top');
//    }
})

// ********** Scroll - Link **********
//const link = document.querySelectorAll('.link');
//link.forEach(function(eachLink) {
//    eachLink.addEventListener('click', function(e) {
//        e.preventDefault();
//
//        const linkId = e.currentTarget.getAttribute('href').slice(1);
//        const targetLink = document.getElementById(linkId);
//
//        const navContainerHeight = (navContainer.getBoundingClientRect().height) * 0.36;
//        const linkContainerHeight = linkContainer.getBoundingClientRect().height;        
//        const xzCarouselContainerHeight = xzCarouselContainer.getBoundingClientRect().height;
//        const cutOffPoint = navContainerHeight + xzCarouselContainerHeight;
//
//        const fixedNav = navContainer.classList.contains('fixed-nav');
//
//        let position = targetLink.offsetTop - linkContainerHeight;
//
//        if (fixedNav) {
//            position = targetLink.offsetTop - navContainerHeight;
//        }
//
//        if (window.matchMedia('(min-width: 675px)').matches && !fixedNav) {
//            position = targetLink.offsetTop - cutOffPoint;
//        }
//
//        window.scrollTo({
//            left: 0,
//            top: position
//        })
//
//        linkContainer.style.height = 0;
//    })
//})