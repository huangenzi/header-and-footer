import SlHeader from './packages/header/sl-header'
import SlFooter from './packages/footer/sl-footer'

const component = [
    SlHeader,
    SlFooter
]

const install = function(Vue, opts = {}) {
    component.map(component => {
        Vue.component(component.name, component)
    })
}

// 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    SlHeader,
    SlFooter
}