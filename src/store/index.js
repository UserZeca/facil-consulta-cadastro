/* eslint-disable */
import { createStore } from 'vuex'
import professionalInformation from './modules/professionalInformation';
import serviceInformation from './modules/serviceInformation';




export default createStore({

  modules: {

    professionalInformation,
    serviceInformation

  }
    
})
