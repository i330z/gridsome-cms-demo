<template>
    <div>
        <div class="cake-divider">
        <img src="/uploads/divider.png"  alt="" />
      </div>
        <span class="subtitle">{{subtitle}}</span>
        <h2 class="center mb-5" :style="{color: activeColor}">{{title}}</h2>
    </div>
</template>


<script>
export default {
    props:{
      title:{
        type: String,
        required: true
      },
      subtitle:{
        type: String,
      },
      activeColor:{
        type: String,
        required: true,
        default: 'black'
      }
    }
}
</script>

<style scoped>

.subtitle{
  font-size:clamp(20px, 2.5vw, 25px);
  text-align:center; 
  margin: 0 auto;  
  display:block;
  font-family: 'Crimson Text', serif;
}
.cake-divider {
  -webkit-appearance: none;
  position: relative;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  outline-style: none;
  text-align: center;
  min-height: 3px;
  border-color: #edecec;
  overflow: hidden;
  margin-bottom: 8px;
}

.cake-divider::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  left: 0;
  top: 50%;
  margin-top: -1.5px;
  border-bottom: 3px solid;
  border-color: transparent;
}

.cake-divider img {
  display: block;
  margin: auto;
  padding: 0 20px;
  background: transparent;
  width: 240px;
}
</style>