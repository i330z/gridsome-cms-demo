<template>
<Layout>
    <div>
        <b-row>
          <b-col md="12" class="category-header">
            <h1>{{ $context.category}} Cake</h1>
          </b-col>
        </b-row>
        <b-row>
           <b-col md="3" class="cake-card-col"  v-for="cake in $page.cakes.edges" :key="cake.id">
                <div class="cake-holder">
                    <div class="image">
                        <g-image :src="cake.node.thumbnail" alt="" />
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>{{cake.node.title}}</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>&#8377;500</strike></span>
                        <span>&#8377;250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
        </b-row>

            <!-- {{ $page.cakes.edges }}
        <div v-for="cake in $page.cakes.edges" :key="cake.id">
            {{cake.node.title}}

        </div> -->

        
    </div>
</Layout>
</template>

<page-query>

query ($category: String){
 cakes: allPost(filter: { category: { eq: $category}}){
  edges{
    node{
      category
      title
      id
      thumbnail
    }
  }
}
}
</page-query>


<style scoped>
.category-header{
  background:#F8D700 ;
  text-align: center;
  padding: 90px 0px;
}

.category-header h1{
  text-transform: capitalize;
  font-size: 51px;
}

.cake-holder{
  background: lightyellow;
}
.cake-card-col{
  margin-top: 50px;
  margin-bottom: 30px;
}
</style>