<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>
        <img :src="$page.post.thumbnail" width="500" alt="">
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>

query Post($path: String !){
    post: post(path: $path){
        title
        content
        thumbnail
    }
}

</page-query>
