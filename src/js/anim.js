/* Scale Animation */
$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('scale__anim');
            } else {
                $(entry.target).removeClass('scale__anim');
            }
        });
    });

    const hiddenElements = $('.scale__anim__hide');
    hiddenElements.each(function () {
        observer.observe(this);
    });
});


/* Blur Animtion */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('blur__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.blur__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('blur__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

/* Slide In Animtaion */
$(function () {
    let lastScrollTop = 0;

    const observer = new IntersectionObserver((entries) => {
        const currentScrollTop = $(window).scrollTop();

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('slidein__anim');
            }
        });

        lastScrollTop = currentScrollTop;
    }, {
        threshold: 0.5
    });

    $('.slidein__anim__hide').each(function () {
        observer.observe(this);

        if (isInViewport(this)) {
            $(this).addClass('slidein__anim');
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight &&
            rect.bottom >= 0
        );
    }
});

/*
$(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.intersectionRatio >= 0.5) {
                $(entry.target).addClass('slidein__anim');
            } else {
                $(entry.target).removeClass('slidein__anim');
            }
        });
    }, {
        threshold: 0.5
    });

    $('.slidein__anim__hide').each(function () {
        observer.observe(this);
    });
});
*/