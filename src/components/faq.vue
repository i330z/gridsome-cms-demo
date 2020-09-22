<template>
    <div class="faq py-100">
        <div class="pt-5 pb-5">
            <SectionHeader title= "Frequently Asked" subtitle="Best solution" />
            <b-row>
                <b-col md="6">
                    <div class="p-4">
                        <g-image src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/img-6_c4046eea-944c-4046-968b-bb3081825c3b.jpg?v=1534405206" class="faq-img" />
                    </div>
                </b-col>
                <b-col md="6">
                    <div class="p-5 faq-question">
                        <div class="accordion" role="tablist">
                            <div>
                                <h3 v-b-toggle.accordion-1 role="tab" style="cursor:pointer">How do I order cake from bakebunny?</h3>
                                <b-collapse id="accordion-1" role="tabpanel" visible accordion="my-accordion">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, obcaecati.</p>
                                </b-collapse>
                            </div>
                            <div>
                                <h3 v-b-toggle.accordion-2 role="tab">How do I make the payment after purchase?</h3>
                                <b-collapse id="accordion-2" role="tabpanel" accordion="my-accordion">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, dolorem.</p>
                                </b-collapse>
                            </div>
                            <div>
                                <h3 v-b-toggle.accordion-3 role="tab">Who let the dogs out?</h3>
                                <b-collapse id="accordion-3" role="tabpanel" accordion="my-accordion">
                                    <p>Who let the dogs out
                                        Woof, woof, woof, woof, woof
                                        Who let the dogs out
                                        Woof, woof, woof, woof, woof
                                        Who let the dogs out
                                        Woof, woof, woof, woof, woof
                                        Who let the dogs out</p>
                                </b-collapse>
                            </div>
                            
                        </div>
                    </div>
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

.faq-question h3{
    cursor: pointer;
    padding-bottom: 20px;
    border-bottom: 1px solid black;
}

h3:focus{
    outline: none;
}

.faq-img{
    width: 591px;
    border-radius: 12px;
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