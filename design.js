const BackTop = document.getElementById("BackTop");

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        BackTop.style.display = 'block';
    } else {
        BackTop.style.display = 'none';
    };
};

BackTop.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;

    document.body.scrollTop = 0;
});

// ********** Scroll - Fixed Nav & Go Top **********
const navContainer = document.getElementById('nav-container');
//const navContainer = document.querySelector('.header');
const xzCarouselContainer = document.querySelector('.about');

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
    
    if (window.matchMedia('(max-width: 767px)').matches) {
        if (scrollHeight > cutOffPoint) {
            navContainer.classList.add('fixed-nav');
        }
        else {
            navContainer.classList.remove('fixed-nav');
        }
    }
})