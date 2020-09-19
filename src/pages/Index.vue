<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <ul>
      <li v-for="post in $page.posts.edges" :key="post.id">
        
        <g-link :to="post.node.path">{{ post.node.title }}</g-link>
      </li>
    </ul>

  </Layout>
</template>


<page-query>
query{
  posts:allPost{
    edges{
      node{
        path
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
