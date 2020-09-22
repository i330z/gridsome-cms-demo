<template>
    <div class="py-100">
        <!-- <span style="font-size:25px; text-align:center; margin: 0 auto;  display:block">Prepare with Love & Care</span> -->
        <SectionHeader title= "Our Collection" activeColor="#F3D708"/>
        <b-row>
            <b-col md=12>
                <div class="center">
                    <ul class="tab-cake mb-5">
                    <li>
                        <a href="" v-on:click="component='Vanilla'">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-4_50x.png?v=1535456716" alt="">
                       <div>Vannila</div> 
                    </a>
                    </li>
                    <li>
                        <a href="" v-on:click="component='Strawberry'">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-2_3ae11ff2-a5cd-43e4-90d2-7e13bdf1ce82_50x.png?v=1535456729" alt="">
                       <div>Strawberry</div> 
                    </a>
                    <li>
                        <a href="" v-on:click="component='Chocolate'">
                        <img  src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-3_50x.png?v=1535456740" alt="">
                       <div>Chocolate</div> 
                    </a>
                    </li>
                    <li>
                        <a href="">
                        <img src="https://cdn.shopify.com/s/files/1/0013/7487/9814/files/icon-1_50x.png?v=1535456749" alt="">
                       <div>Butter Scotch</div> 
                    </a>
                    </li>
                </ul>
                </div>
            </b-col>
        </b-row>
        <transition name="component-fade" mode="out-in">
        <component :is="component"></component>
        </transition>
        <!-- <Chocolate /> -->
    </div>
</template>



<script>
import Chocolate from '../components/chocolate' 
import Strawberry from '../components/strawberry' 
import Vanilla from '../components/vanilla' 
export default {
    components:{
        Chocolate,
        Strawberry,
        Vanilla
    },
    data(){
        return{
            component : 'Chocolate'
        }
    }
}
</script>


<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>