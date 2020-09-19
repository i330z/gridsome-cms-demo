<template>
    <Layout>
        <h1>{{ $page.post.title }}</h1>
        <div v-html="$page.post.content"></div>
    </Layout>
</template>

<page-query>

query Post($path: String !){
    post: post(path: $path){
        title
        content
    }
}

</page-query>
