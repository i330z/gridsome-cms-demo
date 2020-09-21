<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1> -->

    <Carousel />
    <section class="py-5">
      <div class="cake-divider">
        <img src="/uploads/divider.png"  alt="" />
      </div>
      <h2 style="text-align:center">Featured Cake</h2>
      <b-row>
        <b-col
          class="my-4"
          md="3"
          v-for="post in $page.posts.edges"
          :key="post.id"
        >
          <div>
            <div class=" cake-card p-2">
              <div style="height:120px"></div>
              <div class="cake-img">
                <img :src="post.node.thumbnail" alt="" class="img-fluid" />
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              
                <h3>{{ post.node.title }}</h3>
             
              <p>{{ post.node.category }}</p>
              <g-link :to="post.node.path">
              <b-button class="cake-card-button" style="posi"
                >Check Detail</b-button
              >
               </g-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </section>
    <CakeSection />
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
import Carousel from "../components/carousel";
import CakeSection from "../components/cakeSection"
export default {
  components: {
    Carousel,
    CakeSection
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.cake-card {
  position: relative;
  text-align: center;
  background: rgba(255, 192, 203, 0.534);
  border-radius: 12px;
  margin-top: 60px;
  box-shadow: 0 0 12px rgba(41, 41, 41, 0.15);
}

.cake-img {
  position: absolute;
  top: -20%;
  left: 8%;
  width: 260px;
}

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
  width: 240px;
}
</style>
