<template>

    <div v-if="this.branding.active" class="text-center centered-button pt-10">
      <!-- <img class="img-fluid" src="" alt="" /> -->
  
      <!-- <h4 :style="{color: this.branding.color, fontFamily: this.branding.fontFamily, fontSize: this.branding.fontSize + 'px'}">{{this.branding.name}}</h4> -->
    
        <a   :style="{color: this.branding.color, fontFamily: this.branding.fontFamily, fontSize: this.branding.fontSize + 'px'}" class="glow-on-hover pd-20"  :href="this.branding.url"
            >Purchase {{this.branding.name}}</a>

  </div>
</template>

<script>
export default {
    name: ['BrandingComponent'],
    props: ['branding'],

};
</script>

<style>
.sidebar-img-section {
  max-width: 250px;
  width: 250px;
  margin: 0 auto;
}
.centered-button{
    -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-top: 30px;
    margin-bottom: 20px;
}

/* BRANDING BUTTON  */



.glow-on-hover {
  width: 220px;
  height: 50px;
  border: none;
  outline: none;
  color: #fff;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  color: #000
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}

/* END BRANDING BUTTON  */
</style>