<template>
    <div>
        <b-row>
            <b-col md="3">
                <div class="cake-holder">
                    <div class="image">
                        <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-2_f2039377-2a01-4fd2-b6a3-8c89873ddf18.jpg?v=1534416990" alt="" />
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>Strawberry Cake</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>&#8377; 500</strike></span>
                        <span>&#8377; 250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
            <b-col md="3">
                <div class="cake-holder">
                    <div class="image">
                        <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-2_f2039377-2a01-4fd2-b6a3-8c89873ddf18.jpg?v=1534416990" alt="" />
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>Strawberry Cake</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>&#8377; 500</strike></span>
                        <span>&#8377; 250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
            <b-col md="3">
                <div class="cake-holder">
                    <div class="image">
                        <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-2_f2039377-2a01-4fd2-b6a3-8c89873ddf18.jpg?v=1534416990" alt="" />
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>Strawberry Cake</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>&#8377; 500</strike></span>
                        <span>&#8377; 250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
            <b-col md="3">
                <div class="cake-holder">
                    <div class="image">
                        <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-2_f2039377-2a01-4fd2-b6a3-8c89873ddf18.jpg?v=1534416990" alt="" />
                        <button class="card-button opa-button">Buy Now</button>
                    </div>
                    <div class="card-content">
                        <h3>Strawberry Cake</h3>
                        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                    </div>
                    <div>
                        <span class="strike-price mr-3"><strike>&#8377; 500</strike></span>
                        <span>&#8377; 250</span>
                    </div>
                    <!-- <button class="card-button">Buy Now</button> -->
                </div>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <div class="text-center mt-5 mb-0 pb-0">
                    <g-link to="/category/strawberry">
                        <button class="card-button">View More</button>
                    </g-link>
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

