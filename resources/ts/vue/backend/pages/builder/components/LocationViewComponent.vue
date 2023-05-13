<template>
    <div>
        <i :style="{color: this.color}" class=" icon-size icofont icofont-location-pin font-size-30 margin-2 cursor-pointer mr-2"></i>
        <a target="_blank" :style="{color: this.color}" :href="`https://maps.google.com/?q=${value}`">
         {{this.location.value ? location.value : 'Click to get location'}}
        </a>

    </div>
</template>

<script>
export default {
 props:['location','color'],
    data(){
        return{
            value:'',
        }
    },
 mounted(){
    this.value=this.location.value ? this.location.value : `${this.location.lat},${this.value=this.location.lng}`;
 console.log('this is location', this.location);
 }
}

</script>

