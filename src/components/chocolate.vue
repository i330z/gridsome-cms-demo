<template>
    <div>
        <SectionHeader title= "Our Collection" />
        <b-row>
            <b-col md=12>
                <div class="center">
                    <ul class="tab-cake mb-4">
                    <li>
                        <a href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-4_50x.png?v=1535456716" alt="">
                       <div>Vannila</div> 
                    </a>
                    </li>
                    <li>
                        <a href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-2_3ae11ff2-a5cd-43e4-90d2-7e13bdf1ce82_50x.png?v=1535456729" alt="">
                       <div>Strawberry</div> 
                    </a>
                    <li>
                        <a href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-3_50x.png?v=1535456740" alt="">
                       <div>Chocolate</div> 
                    </a>
                    </li>
                    <li>
                        <a href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-1_50x.png?v=1535456749" alt="">
                       <div>Butter Scotch</div> 
                    </a>
                    </li>
                </ul>
                </div>
            </b-col>
        </b-row>
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

