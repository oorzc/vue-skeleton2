import { Component } from 'vue-property-decorator'
import BaseComponent from './BaseComponent'
import Rectangular from './components/Rect'
import List from './components/List'
import Avatar from './components/Avatar'
import CustomList from './components/Custom'
import StraightLine from './components/StraightLine'
import CircleCom from './components/Circle'
import CardCom from './components/Card'
import ListCom from './components/ListCom'
import style from './style/style.less'


/**
 * type?: Type,
 * active?: Boolean,
 * loading?: Boolean,
 * title?: Boolean
 */
@Component
class skeleton extends BaseComponent {
  public static componentName: string = 'skeleton'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(skeleton.componentName, skeleton)

  public render(h) {
    const { type, options, title, loading, active, childrenOption, start, center, end, rules } = this.$props

    switch (type) {
      case 'rect':
        return <Rectangular
                title={title}
                loading={loading}
                active={active}
                options={options}
        />
        break;
      case 'list':
        return <List
          title={title}
          loading={loading}
          active={active}
          options={options}
        />
        break;
      case 'avatar':
        return <Avatar
          title={title}
          loading={loading}
          active={active}
          options={options}
        />
        break;
      case 'custom':
        return <CustomList
          title={title}
          loading={loading}
          active={active}
          options={options}
          childrenOption={childrenOption}
        />
        break;
      case 'straightLine':
        return <StraightLine
          title={title}
          rules={rules}
          loading={loading}
          active={active}
          options={options}
        />
        break;
      case 'circlecom':
        return <CircleCom
          title={title}
          rules={rules}
          loading={loading}
          active={active}
          options={options}
        />
        break;
      case 'card':
        return <CardCom
          title={title}
          rules={rules}
          loading={loading}
          active={active}
          options={options}
        />
      
        break;
      case 'listcom':
        return <ListCom
          title={title}
          rules={rules}
          loading={loading}
          active={active}
          options={options}
        />
        break;
      default:
        break;
    }

  }
}

export default skeleton
