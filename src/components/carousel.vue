<template>
  <div class="hero-section">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      img-width="1024"
      class="carousel-border"
    >
      <b-carousel-slide
      >
      <template v-slot:img>
          <img
            class="d-block w-100 carousel-slide-image"
            width="1024"
            src="/uploads/slide-1.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block w-100 carousel-slide-image"
            width="1024"
            src="/uploads/slide-2.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block w-100 carousel-slide-image"
            width="1024"
            src="/uploads/slide-3.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
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


.carousel-slide-image{
  height: 78vh;
}

@media (max-width: 600px) {
 .hero-section{
  height: 45vh;
  /* background:green; */
}
.carousel-slide-image{
  height: 45vh;
  
}
}
</style>
