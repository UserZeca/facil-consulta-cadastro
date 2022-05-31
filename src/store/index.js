import { createStore } from 'vuex'
import serviceInformation from './modules/serviceInformation';
import professionalInformation from './modules/professionalInformation';





export default createStore({

  modules: {

    serviceInformation,
    professionalInformation

  }
})
