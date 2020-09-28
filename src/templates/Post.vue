<template>
  <Layout>
    <section>
      <b-row>
        <b-col md="12">
          <div
            style="text-align:center;padding: 90px 0px; background: lightgrey"
          >
            <h2 class="item-category">{{ $page.post.category }} Cake</h2>
          </div>
          
        </b-col>
      </b-row>
      <b-row>
        <b-col
          md="6"
          class="py-100 mt-4"
          style="background: lightyellow; border-radius: 12px"
        >
          <img :src="$page.post.thumbnail" class="detail-page-img" alt="" />
        </b-col>
        <b-col md="6" class="py-100 mt-0 px-5">
          <h1>{{ $page.post.title }}</h1>
          <span style="color:#FF599A; font-weight: bold; font-size: 25px"
            >&#8377; 300</span
          >
          (0.5kg)
          <!-- <div v-html="$page.post.content" class="mt-3"></div> -->
          <p class="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            inventore ea sint, ullam assumenda voluptates doloremque deleniti
            dolores, fugit nam autem! Dolorum voluptatum consectetur illum
            reprehenderit deserunt numquam officia autem.
          </p>
          <div class="cake-detail">
            <span><strong>Flavour:</strong> Chocolate</span> <br />
            <span><strong>Price:</strong></span>
            <table>
              <tr>
                <th>Kg</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>0.5kg</td>
                <td>&#8377; 300</td>
              </tr>
              <tr>
                <td>1kg</td>
                <td>&#8377; 500</td>
              </tr>
            </table>
          </div>
          <div class="mt-4 text-center">
            <button class="order-button">Order Now</button>
          </div>
        </b-col>
      </b-row>
    </section>
    <!-- <h1>{{ $page.post.title }}</h1>
        <img :src="$page.post.thumbnail" width="500" alt="">
        <div v-html="$page.post.content"></div> -->
  </Layout>
</template>

<page-query>

query Post($path: String !){
    
    post: post(path: $path){
        title
        content
        thumbnail (width:400)
        category
    }
}

</page-query>




<style scoped>
.cake-detail span {
  /* margin-bottom: 1px; */
  display: block;
}

.cake-detail span > strong {
  font-size: 20px;
}

.detail-page-img {
  width: 100%;
}

.item-category{
  text-transform: capitalize;
}


table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  margin-left: 80px;
}
th, td {
  padding: 8px;
  width: 20%;
}

@media(max-width: 380px){
  table, th, td {
  margin-left: 0px;
}
}
</style>
