import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import style from '../style/style.less'

@Component
class circlecom extends BaseComponent {
  public static componentName: string = 'circleCom'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(circlecom.componentName, circlecom)
  public name: string = 'circlecom'
  public mounted() {
    // tslint:disable-next-line:no-console
  }
  public render(h) {
    const { type, title = false, options, loading = false, active = false, start = true, center = false, end = false } = this.$props

    this.$nextTick(() => {
      // console.log(this.$el.clientWidth)
    })


    const styleC = Object.assign({width : '100%', size:'default',background: '#ebebeb',
    'border-radius': '50%'},options)



    return (
      <div class={[style.CircleCom]}>
        <div style={[styleC]} class={[active ? style.progActive : style.prog]}></div>
        {/* <div style={[flag === 'center' ? styleC : '']} class={[active ? style.progActive : style.prog]}></div>
        <div style={[flag === 'end' ? styleC : '']} class={[active ? style.progActive : style.prog]}></div> */}
      </div>
    )
    
  }
}

export default circlecom
