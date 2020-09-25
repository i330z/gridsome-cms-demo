<template>
    <footer class="footer">
        <div class="px-5">
            <b-row>
                <b-col md="4">
                    <div>
                        <h4>Contact Us</h4>
                    </div>
                    <div class="address">
                        Hatigaon, Guwahati <br>
                        Newmarica, <br>
                        ZoombieLand
                    </div>
                </b-col>
                <b-col md="4">
                    <h4>Help</h4>
                    <ul class="px-0">
                        <li>Search</li>
                        <li>Shipping Details</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Return & Refund Policy</li>
                    </ul>
                </b-col>
                <b-col md="4">
                    <h4>Bake Bunny</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius sequi ut voluptas praesentium ex. Harum a dolorem mollitia, fuga aliquid iusto nam assumenda accusamus excepturi repudiandae similique possimus pariatur iure.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col class="mt-3">
                    <div>
                        Design & Developed by <a href="https//:www.vegastep.com" style="color:#ff6ea7">Vegastep.com</a>
                    </div>
                </b-col>
            </b-row>
        </div>
    </footer>
</template>


<style scoped>
.footer{
    position: relative;
    width: 100%;
    background-image: url(//cdn.shopify.com/s/files/1/0013/7487/9814/files/bg-4.jpg?v=1534485412);
    background-repeat: no-repeat;
    background-position: left top;
    background-color: #fff;
    color: white;
    padding: 60px 0px;
    margin-top: 20px;
}

.footer::before{
    content: "";
    background-image: url(//cdn.shopify.com/s/files/1/0013/7487/9814/t/4/assets/pattern_arrow.png?175);
    background-repeat: repeat;
    width: 100%;
    height: 11px;
    top: -1px;
    left: 0;
    right: 0;
    position: absolute;
    z-index: 2;
    
}
.footer h4{
    font-family: 'Lobster Two', cursive;
    color: #ff6ea7;
}

li{
    list-style: none;
}
</style>