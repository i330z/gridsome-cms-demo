<template>
    <div>
        <SectionHeader title= "Chocolate Cake" />
        <b-row>
            <b-col md="3">
                <div class="cake-holder">
                    <div class="image">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-3_f5666565-c070-4664-8562-b91db787caf3.jpg?v=1534415048" alt="">
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>Creamy Cup Cake</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>Rs 500</strike></span>
                        <span>Rs 250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
        </b-row>
    </div>
</template>


<style>

.card-content{
    margin-top: 15px;
    padding: 2px;
}

.card-content span{
    color: rgb(109, 109, 109);
}
.opa-button{
    position: absolute;
    z-index: 1;
    bottom: 10px;
    left: 50%;
    transform: translate3d(-50%,0,0);
    opacity: 0;
}

.image{
    position: relative;
}
.image:hover .opa-button{
    opacity: 1;
   
}
.image img{
    width: 100% ;
    border-radius: 12px;
    overflow: hidden;
}
</style>

