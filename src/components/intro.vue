<template>
    <div class="intro">
        <span>
            Cakes for Celebration
        </span>
        <h2>Welcome to BakeBunny</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas numquam cupiditate veniam, enim repudiandae a aperiam ipsam! Non similique quisquam impedit libero ut quaerat dicta sint sed dolorum, reprehenderit expedita!</p>
        <button class="intro-btn mt-4">Shop Now</button>
    </div>
</template>


<style scoped>
.intro{
    background-image: url(//cdn.shopify.com/s/files/1/0013/7487/9814/files/bg-3.jpg?v=1534417152);
    background-repeat: no-repeat;
    background-position: center;
    background-color: #ffffff;
    padding: 13.5%;
    color: #FF6BA4;
    text-align: center;
}

.intro p{
    font-size: clamp(15px,2.5vw, 1.2rem);
    width: min(1000px, calc(60% + 100px));
    margin: 0 auto; 
    color:black
}

.intro span{
    font-size:25px; text-align:center; margin: 0 auto;  display:block;font-family: 'Lobster Two', cursive; color: black;
}

.intro-btn{
    
    border-radius: 30px;
    border: 2px solid #ffe450;
    background: white;
    padding: 8px 20px;
    transition: 0.4s all ease-in-out;
}

.intro-btn:hover{
    background: #ff6ea7;
    border: 2px solid #ff6ea7;
    color: white;
}
</style>