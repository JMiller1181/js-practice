let photoSlideShow = {
  photoList: ["photo1", "photo2", "photo3"],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex < this.photoList.length) {
      this.currentPhotoIndex++;
    } else {
      console.log("End of slideshow.");
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    } else {
      console.log("Beginning of slideshow.");
    }
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
};
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
photoSlideShow.nextPhoto();
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.prevPhoto();
console.log(photoSlideShow.getCurrentPhoto());
