<template>
    <div>

            <div class="avatar">
                        <div class="row">
        <div class="col">

                 <a target="_blank" :href="`${spotify.value}`">
                      <img class="img-40 b-r-25" src="/images/icons/spotify.png" alt="#" />
           <div class="ml-4 ">
                  {{spotify.name}}
           </div>
         </a>
        </div>

    </div>
        </div>

    </div>
</template>

<script>
export default {
 props:['spotify'],

 mounted(){
 console.log('this is location', this.spotify);
 }
}

</script>

