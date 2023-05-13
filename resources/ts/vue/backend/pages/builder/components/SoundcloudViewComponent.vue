<template>
    <div>
        <iframe :width="width" :height="height" scrolling="no" frameborder="no" :src='"https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2" + soundcloud.value + "&color=orange_white&size=32"'>
</iframe>

    </div>
</template>

<script>
export default {
props:['soundcloud'],
data(){
    return {
        width:"250",
        height:"150"
    }
},
}
</script>

<style>

</style>
