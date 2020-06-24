import * as React from 'react';
import { createPortal } from "react-dom";
export interface Props {
  hideDialog: () => {}
}
interface State {
  node: any
}
const doc = window.document;
let node = doc.createElement("div");
export default class Dialog extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    doc.body.appendChild(node);
  }
  componentWillUnmount() {
    window.document.body.removeChild(node);
  }
  render() {
    const { hideDialog } = this.props;
    return createPortal(
      <div className="dialog">
        {this.props.children}
        {typeof hideDialog === "function" && (
          <button onClick={hideDialog}>关掉弹窗</button>
        )}
      </div>,
      node
    );
  }

}
