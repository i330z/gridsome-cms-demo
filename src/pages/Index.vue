<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1> -->

    <Carousel />
    <section class="py-5">.
      <h2 style="text-align:center">Featured Cake</h2>
      <b-row>
        <b-col  class="my-4" md="3" v-for="post in $page.posts.edges" :key="post.id">
          
            <div>
              <div class=" cake-card p-2">
                <div style="height:120px"></div>
              <div class="cake-img">
              <img :src="post.node.thumbnail" alt="" class="img-fluid">
                <!-- <img src="/uploads/cake-1.png" alt="" class="img-fluid"> -->
              </div>
              <g-link :to="post.node.path">
              <h3>{{ post.node.title }}</h3>
              </g-link>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, praesentium!</p>
              </div>
            </div>
          
        </b-col>
      </b-row>
    </section>
    <div>
  
</div>

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
      }
    }
  }
}
</page-query>

<script>
import Carousel from '../components/carousel'
export default {
  components:{
    Carousel
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.cake-card{
  position: relative;
  text-align: center;
  background: rgba(255, 192, 203, 0.534);
  border-radius: 12px;
  margin-top: 60px;
  box-shadow: 0 0 12px rgba(41, 41, 41, 0.15);
}

.cake-img{
  position: absolute;
  top: -20%;
  left: 8%;
  width: 260px;
}
</style>
