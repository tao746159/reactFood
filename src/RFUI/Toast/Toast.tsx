import React from 'react'
import ReactDOM from 'react-dom'

import Confirm from '../Confirm/Confirm'
import './index.styl'
const modal = (Component: any, innerHtml: string, type: string, disa: number) => {
  let body = document.body;
  let showDom = document.createElement("div");
  // 设置基本属性
  showDom.setAttribute('class', 'toast')

  body.appendChild(showDom);
  // 自我删除的方法
  let close = () => {
    ReactDOM.unmountComponentAtNode(showDom);
    body.removeChild(showDom);
  }
  setTimeout(() => {
    close()
  }, disa)


  ReactDOM.render(
    <Confirm type={type} >{innerHtml}</Confirm>, showDom
  );
}
export default modal