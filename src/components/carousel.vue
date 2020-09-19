<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      img-width="1024"
      img-height="350"
      class="carousel-border"
    >
      <b-carousel-slide
        img-src="../uploads/slide-1.jpg" height="100%"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/350/?image=12"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://picsum.photos/1024/350/?image=22"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<style scoped>
.carousel,
.slide,
.carousel .carousel-inner,
.carousel .carousel-item,
.carousel .carousel-item img,
.carousel .carousel-control {
  border-radius: 12px;
  overflow: hidden;
}
</style>
