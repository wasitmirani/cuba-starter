<template >
    <div class="error-wrapper">
        <div class="container"><img class="img-100" src="/assets/images/other-images/sad.png" alt="">

            <div class="mt-3">
                <img src="/assets/images/page-misc-error-light.png" alt="page-misc-error-light"
                width="500" class="img-fluid" data-app-dark-img="/page-misc-error-dark.png" data-app-light-img="/page-misc-error-light.png">
              </div>
          <div class="error-heading">
            <h2 class="headline font-danger">404</h2>
          </div>
          <div class="col-md-8 offset-md-2">
            <p class="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
          </div>
          <div><router-link class="btn btn-danger-gradien btn-lg" to="/">BACK TO HOME PAGE</router-link></div>
        </div>
      </div>
</template>
<script>
export default {

}
</script>
<style lang="">

</style>
