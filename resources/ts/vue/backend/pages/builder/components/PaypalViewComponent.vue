<template>
    <div>
        <a :href="'https://paypal.com/cgi-bin/webscr?business=' + this.paypal?.paypal_email + '&cmd=_cart&currency_code='+
            this.paypal.currency_code + '&amount=' + this.paypal.price + '&item_name=' + this.paypal.product_title +
            '&button_subtype='+this.paypal.type+ '&add=1'" class="btn btn-pill btn-primary">{{this.paypal?.name}}</a>

    </div>
</template>

<script>
export default {
props:['paypal'],
data(){
    return {
        width:"250",
        height:"150"
    }
},
mounted(){
    console.log('paypa', this.paypal)
}
}
</script>

<style>

</style>
 