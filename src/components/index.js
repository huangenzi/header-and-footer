import Vue from 'vue'
import Header from './Header.vue'
const Components = {
    Header
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components