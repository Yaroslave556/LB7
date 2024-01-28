let slider = {
    slides: ['Lady_DMC3SE_29.webp', 'Nero_DMC5.webp', '1.png', '2.png'],
    i: 0,
    set: function(image) {
        document.getElementById("scr").style.backgroundImage = "url(" + image + ")";
    },
    init: function() {
        this.set(this.slides[this.i]);
    },
    left: function() {
        this.i--;
        if (this.i < 0) this.i = this.slides.length - 1;
        this.set(this.slides[this.i]);
    },
    right: function() {
        this.i++;
        if (this.i == this.slides.length) this.i = 0;
        this.set(this.slides[this.i]);
    }
};

window.onload = function() {
    slider.init();
    setInterval(function() { slider.right(); }, 5000);

    let btn1 = document.querySelector('.left');
    btn1.addEventListener('click', () => slider.left());

    let btn2 = document.querySelector('.right');
    btn2.addEventListener('click', () => slider.right());
};
