<template >
    <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="max-width: 60%;">
      
      





    </div>
    
</template>

<script>
import SelectOption from './SelectOption.vue'
import InputForms from './InputForms.vue';
import ProgressBar from './ProgressBar.vue';
import ProgressButton from './ProgressButton.vue';


export default {
    name: "CardBody",
    props: {
        src: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            items: [
                { option: "Algo" },
                { option: "Outro" }
            ],

            progressForm: 1


        };
    },
    components: {
    SelectOption,
    InputForms,
    ProgressBar,
    ProgressButton
}
}


</script>

<style scoped>



</style>