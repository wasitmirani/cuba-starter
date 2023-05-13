<template>
    <div>
        <iframe width="100%" :height="height"
:src="youtube.value">
</iframe>

    </div>
</template>

<script>
export default {
props:['youtube','link_style'],
data(){
    return {
        width:"100%",
        height:"150"
    }
},
created(){
    if(this.link_style){
        this.width = this.link_style.width;
        this.height = this.link_style.height;
    }
}
}
</script>

<style>

</style>
