<template >
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="max-width: 60%;">
      <div class="row g-0" style="padding: 20px;">
        <h1 class="card-title ">Sobre o Profissional</h1>

        <div class="col-md-6">
          <div class="card-body">
            <!--<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            -->
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
              </div>
              
              <div class="mb-3 row">
                <div class="col">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  
                </div>

                <div class="col">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>              

              <div class="mb-3 row">
                <div class="col-10"> 
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div> 
                <div class="col-2">

                  <h5>1 de 2</h5>
                  
                </div>

              </div>

              <div  class="mb-3 row">

                <button type="submit" class="btn btn-primary">Submit</button>


              </div>
            
            </form>
          </div>
          
        </div>
        
        
        <div class="col-md-6 ">
          <img :src="src" class="img-fluid rounded-start " alt="...">
        </div>
      </div>

     


      <div class="row g-0">
      </div>
    </div>
    
</template>

<script>



export default {
  name: 'CardBody',
  
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