<template>
    <footer class="footer">
        <div class="px-5">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo ipsum aliquam facere. Atque quis debitis unde quae. Corporis ipsa, nam modi, porro quibusdam nostrum veniam illum itaque officia neque voluptatum.</p>
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
</style>