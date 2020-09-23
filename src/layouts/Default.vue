<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>

    </header> -->
    
      <Navbar/>
    <slot/>
  </div>
</template>

<script>
import Navbar from '~/components/navigation'
export default {
  components:{
    Navbar
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>




<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 98%;
  margin: 0 auto;
  padding-left: clamp(10px, 2vw, 20px);
  padding-right: clamp(10px, 2vw, 20px);
}

/* .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
} */

/* .nav__link {
  margin-left: 20px;
} */
</style>
