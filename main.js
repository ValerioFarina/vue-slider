var app = new Vue({

    el : '#root',

    data : {
        // this array contains the urls of the carousel's images
        images : [
            'img/img1.jpg',
            'img/img2.jpg',
            'img/img3.jpg',
            'img/img4.jpg',
            'img/img5.jpg',
            'img/img6.jpg'
        ],
        // imgIndex represents the index (within the array images) of the image currently displayed in the carousel
        imgIndex : 0,
        // the value of newImg will the url inserted by the user
        newImg : '',
        // the value of inputMessage is the text displayed in the input before the user insert the url of an image
        inputMessage : 'Insert an image URL'
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
        },
        // this function adds a new image to the carousel
        // the function will be called at the click of the coresponding button
        addNewImg() {
            // every time the button is clicked, we set inputMessage equal to "Insert an image URL"
            this.inputMessage = 'Insert an image URL';
            // if the image url inserted by the user was not previously inserted by the user himself,
            // and if the user input is not an empty string,
            if (!this.images.includes(this.newImg) && this.newImg != '') {
                // then we push the url in the array images
                this.images.push(this.newImg);
                // moreover, we reset newImg (i.e. the value of the input)
                this.newImg = '';
            // else, if the url has already been inserted
            } else if (this.images.includes(this.newImg)) {
                // we reset newImg (i.e. the value of the input)
                this.newImg = '';
                // moreover, we notify the user
                this.inputMessage = 'WARNING : This image has already been inserted';
            }
        },
        // this function deletes the currently displayd image
        // the function will be called at the click of the corresponding button
        deleteImg() {
            let leftSlice = this.images.slice(0, this.imgIndex);
            let rightSlice = this.images.slice(this.imgIndex + 1);
            this.images = leftSlice.concat(rightSlice);
            // if the deleted image was the last one, we have to decrement imgIndex
            if (this.imgIndex == this.images.length) {
                this.imgIndex--;
            }
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
