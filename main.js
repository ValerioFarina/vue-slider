var app = new Vue({
    el : '#root',

    data : {
        // this array contains the urls of the carousel's images
        images : [
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg'
        ],
        // imgIndex represents the index (within the array images) of the image currently displayed in the carousel
        imgIndex : 0,
        isCurrent : false
    },

    methods : {
        // this function will be called at the click of the carousel's left arrow
        prev() {
            // we decrement imgIndex
            this.imgIndex--;
            // if imgIndex becomes < 0 (i.e. if the image currently displayed in the carousel is the first image within the array images),
            // then we put imgIndex equal to images.length-1 (which is the last index within the array images)
            if (this.imgIndex < 0) {
                this.imgIndex = this.images.length - 1;
            }
        },
        // this function will be called at the click of the carousel's right arrow
        next() {
            // we increment imgIndex
            this.imgIndex++;
            // if imgIndex becomes > images.length - 1 (i.e. if the image currently displayed in the carousel is the last image within the array images),
            // then we put imgIndex equal to 0 (which is the first index within the array images)
            if (this.imgIndex > this.images.length - 1) {
                this.imgIndex = 0;
            }
        },
        // this function will be called at the click of one of the carousel's arrows
        // the invocation of this function will stop the carousel's autoplay
        stop() {
            clearInterval(this.clock);
        }
    },
    // this function is called after the Vue's instance is created
    // this function sets an interval of 3 seconds
    // every 3 seconds the function next is called, and thus the carousel's images "scroll" from left to right automatically every 3 seconds
    // the reference to the interval is saved in the variable "clock", which will be a key within the data object
    created : function() {
        this.clock = setInterval(this.next, 3000);
    }
});
