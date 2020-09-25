<template>
  <div class="hero-section">
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
        img-src="../uploads/slide-2.jpg" height="100%"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="../uploads/slide-3.jpg" height="100%"
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

.hero-section{
  height: 78vh;
}

@media (max-width: 600px) {
 .hero-section{
  height: 30vh;
}
}
</style>
