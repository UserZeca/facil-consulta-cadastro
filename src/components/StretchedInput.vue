<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <div class="btn">    
                <input type="checkbox" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"/>
                <label class="form-check-label" for="flexCheckDefault">Accordion Item #1</label>
            </div>
            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Default checked radio
                        </label>
                    </div>
                </div>
            </div>
        </div>
                    
    </div>
</template>

<script>
   
   export default {

       name: 'StretchedInput'


   }

</script>


<style>



</style>