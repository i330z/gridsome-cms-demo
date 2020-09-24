<template>
    <Layout>

        <section>
            <b-row>
                <b-col md="12">
                    <div style="text-align:center;padding: 90px 0px; background: lightgrey">
                        <h2>Chocolate Cake</h2>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6" class="py-100 mt-5" style="background: lightyellow; border-radius: 12px">
                    <g-image :src="$page.post.thumbnail" width="100%" alt="" />
                </b-col>
                <b-col md="6" class="py-100 mt-5 px-5"> 
                    <h1>{{ $page.post.title }}</h1>
                    <span style="color:#FF599A; font-weight: bold; font-size: 25px">&#8377; 300</span>
                    <!-- <div v-html="$page.post.content" class="mt-3"></div> -->
                    <p class="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi inventore ea sint, ullam assumenda voluptates doloremque deleniti dolores, fugit nam autem! Dolorum voluptatum consectetur illum reprehenderit deserunt numquam officia autem.</p>
                    <div class="cake-detail">
                        <span><strong>Flavour:</strong> Chocolate</span> <br>
                        <span><strong>Price:</strong></span>
                    </div>
                </b-col>
            </b-row>
        </section>
        <!-- <h1>{{ $page.post.title }}</h1>
        <img :src="$page.post.thumbnail" width="500" alt="">
        <div v-html="$page.post.content"></div> -->
    </Layout>
</template>

<style scoped>
.cake-detail span{
    /* margin-bottom: 1px; */
    display: block;
}

.cake-detail span>strong{
    font-size: 20px;
}
</style>

<page-query>

query Post($path: String !){
    
    post: post(path: $path){
        title
        content
        thumbnail
    }
}

</page-query>
