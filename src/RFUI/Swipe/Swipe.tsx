import * as React from 'react';
import './index.styl'
interface Props {
  imgs: string[]
}

interface State {
  height: number,
  listWidth: number,
  width: number,
  num: number,
  ulCten: any,
  timer: any
}


export default class Swipe extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      height: document.documentElement.clientHeight,
      listWidth: document.documentElement.clientWidth * this.props.imgs.length,
      width: document.documentElement.clientWidth,
      num: 1,
      ulCten: React.createRef(),
      timer: null
    }

    let timer
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(() => {
        this.next(this.state.num)
      }, 2000)
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  next = (num: number) => {
    if (num >= this.props.imgs.length) {
      this.state.ulCten.current.style.transition = `0s`
      this.state.ulCten.current.style.transform = `translateX(0px)`
      setTimeout(() => {
        this.setState({ num: 1 })
        this.next(this.state.num)
      }, 18)
      return
    }
    this.setState({
      num: num + 1
    })
    this.state.ulCten.current.style.transition = `1s`
    this.state.ulCten.current.style.transform = `translateX(${-num * this.state.width}px)`

  }

  prevn = (num:number) => {
    if (num < 0) {
      this.state.ulCten.current.style.transition = `0s`
      this.state.ulCten.current.style.transform = `translateX(0px)`
      setTimeout(() => {
        this.setState({ num: this.props.imgs.length -1 })
        this.prevn(this.state.num)
      }, 18)
    } else {
       this.setState({
      num: num - 1
    })
    this.state.ulCten.current.style.transition = `1s`
    this.state.ulCten.current.style.transform = `translateX(${-num * this.state.width}px)`
    }
  }

  public render() {
    const { imgs } = this.props
    return (
      <div className="swipe">
        <ul style={{ width: this.state.listWidth }} ref={this.state.ulCten}>
          {
            imgs.map((item, index) => {
              return <li key={index} style={{ width: this.state.width }}>
                <img src={item} />
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
