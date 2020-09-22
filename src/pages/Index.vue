<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1> -->

    <HeroCarousel />
    <section class="py-5">
      <div class="cake-divider">
        <img src="/uploads/divider.png"  alt="" />
      </div>
      <span style="font-size:25px; text-align:center; margin: 0 auto;  display:block;font-family: 'Crimson Text', serif;">Cakes & Bakes</span>
      <h2 style="text-align:center; color:#37DED8">Best Selling Cake</h2>
      <b-row>
        <b-col
          class="my-4"
          md="12"
        >
          <ClientOnly>
      <carousel :perPageCustom="[[400, 1],[768, 3], [1024, 4]]">
        <slide>
          <div>
            <div class=" cake-card p-2">
              <!-- <div style="height:120px"></div> -->
              <div class="cake-img">
                <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/products/p6_cfa55e6f-3b8c-4c7a-8e6e-092809ed8d4b_grande.jpg?v=1535529185" alt="" class="img-fluid" />
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              
                <h3>Chocolate Cake</h3>
             
              <p>Chocolate</p>
              <!-- <g-link :to="post.node.path"> -->
              <b-button class="card-button" style="color:black;font-family:'Lobster Two', cursive;"
                >Check Detail</b-button
              >
               <!-- </g-link> -->
            </div>
          </div>
        </slide>
        <slide>
          <div>
            <div class=" cake-card p-2">
              <!-- <div style="height:120px"></div> -->
              <div class="cake-img">
                <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/products/p6_cfa55e6f-3b8c-4c7a-8e6e-092809ed8d4b_grande.jpg?v=1535529185" alt="" class="img-fluid" />
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              
                <h3>Chocolate Cake</h3>
             
              <p>Chocolate</p>
              <!-- <g-link :to="post.node.path"> -->
              <b-button class="card-button" style="color:black;font-family:'Lobster Two', cursive;"
                >Check Detail</b-button
              >
               <!-- </g-link> -->
            </div>
          </div>
        </slide>
        <slide>
          <div>
            <div class=" cake-card p-2">
              <!-- <div style="height:120px"></div> -->
              <div class="cake-img">
                <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/products/p6_cfa55e6f-3b8c-4c7a-8e6e-092809ed8d4b_grande.jpg?v=1535529185" alt="" class="img-fluid" />
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              
                <h3>Chocolate Cake</h3>
             
              <p>Chocolate</p>
              <!-- <g-link :to="post.node.path"> -->
              <b-button class="card-button" style="color:black;font-family:'Lobster Two', cursive;"
                >Check Detail</b-button
              >
               <!-- </g-link> -->
            </div>
          </div>
        </slide>
        <slide>
          <div>
            <div class=" cake-card p-2">
              <!-- <div style="height:120px"></div> -->
              <div class="cake-img">
                <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/products/p6_cfa55e6f-3b8c-4c7a-8e6e-092809ed8d4b_grande.jpg?v=1535529185" alt="" class="img-fluid" />
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              
                <h3>Chocolate Cake</h3>
             
              <p>Chocolate</p>
              <!-- <g-link :to="post.node.path"> -->
              <b-button class="card-button" style="color:black;font-family:'Lobster Two', cursive;"
                >Check Detail</b-button
              >
               <!-- </g-link> -->
            </div>
          </div>
        </slide>
      </carousel>
    </ClientOnly>
        </b-col>
      </b-row>
    </section>
    <CakeSection />
    <Faq />

    
    <div></div>
  </Layout>
</template>

<page-query>
query{
  posts:allPost{
    edges{
      node{
        path
        title
        thumbnail
        category
      }
    }
  }
}
</page-query>

<script>
// import {Carousel,Slide} from 'vue-carousel'
import CakeSection from "../components/cakeSection"
import HeroCarousel from "../components/carousel";
import Faq from "../components/faq";
export default {
  components: {
    HeroCarousel,
    CakeSection,
    Faq,
    Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    // Carousel,
    // Slide
  },
  metaInfo: {
    title: "Hello, world!",
  },
  mounted:{
    
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.cake-card {
  position: relative;
  text-align: center;
  background: #f8f8f8;
  border-radius: 12px;
  margin: 20px;
  /* box-shadow: 0 0 12px rgba(41, 41, 41, 0.15);  */
}

/* .cake-img {
  position: absolute;
  top: -20%;
  left: 8%;
  width: 260px;
} */

.cake-card-button {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px 50px;
  border: 2px solid #f36461;
  background: #f8d700;
  color: #f36461;
  border-radius: 12px;
}
.cake-card-button:hover {
  border: 2px solid #f8d700;
  background: #f36461;
}
.cake-divider {
  -webkit-appearance: none;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  outline-style: none;
  text-align: center;
  min-height: 3px;
  border-color: #edecec;
  overflow: hidden;
  margin-bottom: 8px;
}

.cake-divider::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  left: 0;
  top: 50%;
  margin-top: -1.5px;
  border-bottom: 3px solid;
  border-color: white;
  
}

.cake-divider img {
  display: block;
  margin: auto;
  padding: 0 20px;
  background: white;
  /* width: 240px; */
}
</style>
