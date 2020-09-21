<template>
    <div>
        <div class="cake-divider">
        <img src="/uploads/divider.png"  alt="" />
      </div>
        <h2 class="center mb-5">{{title}}</h2>
    </div>
</template>


<script>
export default {
    props:{
        title : String,
        required: true
    }
}
</script>

<style scoped>
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