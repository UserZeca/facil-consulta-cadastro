<template>
    <div class="card mb-3" style="max-width: 80%; max-height: 80%;" >
      <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="col-md-4">
          <img :src="src" class="img-fluid rounded-start" alt="...">
        </div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>
    
</template>

<script>

import HelloWorld from './HelloWorld.vue'


export default {
  name: 'CardBody',
  components: {
    HelloWorld
  },  
  props: {
        src: {
            type: String,
            default: '',
        },
    },
    
}


</script>

<style scoped>


</style>