<template>
  <div class="navbar-cake">
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="/">Bake Bunny</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">  
          <b-navbar-nav>
            <b-nav-item href="/category/chocolate">Chocolate</b-nav-item>
            <b-nav-item href="/category/strawberry">Strawberry</b-nav-item>
            <b-nav-item href="/category/vanilla">Vanilla</b-nav-item>
            <b-nav-item href="/category/butterscotch">Butterscotch</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>

.navbar-brand{
  font-size: 30px;
  font-family: 'Lobster Two', cursive;
}


.nav-item{
  padding: 0px 10px;
}
.nav-link{
  font-size: 20px;
  font-family: 'Lobster Two', cursive;
  letter-spacing: 2px;
}
.navbar-cake{
  position: relative;
}
  .navbar-cake::before{
    content: "";
    background-image: url(//cdn.shopify.com/s/files/1/0013/7487/9814/t/4/assets/pattern_arrow.png?175);
    background-repeat: repeat;
    float: left;
    width: 100%;
    height: 11px;
    bottom: -10px;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    -webkit-animation: arrows 1s infinite;
    animation: arrows 1s infinite;
  }
</style>