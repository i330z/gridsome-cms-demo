<template>
    <div class="faq py-100">
        <div class="pt-5 pb-5">
            <SectionHeader title= "Frequently Asked" />
            <b-row>
                <b-col>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim distinctio totam omnis suscipit, earum eaque atque sunt reprehenderit corporis, asperiores repudiandae nam dolorum veritatis dolor autem possimus fugit, quod est.
                </b-col>
            </b-row>
        </div>
    </div>
</template>


<style scoped>
.faq{
    background-color: #cdea7e;
    padding: 0;
    position: relative;
}

.faq::before{
    content: "";
    background-image: url(//cdn.shopify.com/s/files/1/0013/7487/9814/t/4/assets/pattern_arrow.png?175);
    background-repeat: repeat;
    float: left;
    width: 100%;
    height: 11px;
    top: -1px;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    -webkit-animation: arrows 1s infinite;
    animation: arrows 1s infinite;
}

.faq::after{
    content: "";
    background-image: url(https://cdn.shopify.com/s/files/1/0013/7487/9814/t/4/assets/pattern_arrow.png?175);
    background-repeat: repeat;
    float: left;
    width: 100%;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: 2;
    position: absolute;
    height: 11px;
    transform: rotate(-180deg);
}
</style>