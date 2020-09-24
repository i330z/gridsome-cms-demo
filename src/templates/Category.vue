<template>
    <div>
        <h1>Category template</h1>

            {{ $page.cakes.edges }}
        <div v-for="cake in $page.cakes.edges" :key="cake.id">
            {{cake.node.title}}

        </div>

        
    </div>
</template>

<page-query>

query ($category: String){
 cakes: allPost(filter: { category: { eq: $category}}){
  edges{
    node{
      category
      title
      id
    }
  }
}
}
</page-query>


