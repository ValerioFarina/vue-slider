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
        imgIndex : 0
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
        }
    }
});
