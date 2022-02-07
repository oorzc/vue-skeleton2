import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import style from '../style/style.less'

@Component
class cardCom extends BaseComponent {
  public static componentName: string = 'card'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(cardCom.componentName, cardCom)
  public name: string = 'card'
  public mounted() {
    // tslint:disable-next-line:no-console
  }
  public render(h) {
    const { type, title = false, options, loading = false, active = false, start = true, center = false, end = false } = this.$props

    const styleC = Object.assign({width:'100%',height:'100%'},options)
  
    return (
        <div style={[styleC]} class={[active ? style.progActive : style.prog]}></div>
    )
  }
}

export default cardCom