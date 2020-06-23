import React, { useState } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import RouterInit from './router/routerInit';
import './App.styl';
import './stylus/index.styl'
import configureStore from './redux/configReducers'
import Tarbar from './RFUI/Tarbar/Tarbar';
import TarberItem from './RFUI/Tarbar/TarbarItem/TarbarItem';

let store = configureStore()

function App() {
  let [state, setState] = useState('home')
  let handleTab = (name: string) => {
    setState(state = name)
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <RouterInit />
          <Tarbar onClick={handleTab}>
            <TarberItem
              router="home"
              isSelecd={state === 'home'}
              onPren={() => { setState(state = 'home') }}
              title="首页"
              icon={<span className="home_icon"></span>}
              activeIcon={<span className="home_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="sort"
              isSelecd={state === 'sort'}
              onPren={() => { setState(state = 'sort') }}
              title="分类"
              icon={<span className="sort_icon"></span>}
              activeIcon={<span className="sort_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="foodie"
              isSelecd={state === 'foodie'}
              onPren={() => { setState(state = 'foodie') }}
              title="食友圈"
              icon={<span className="shiyouq_icon"></span>}
              activeIcon={<span className="shiyouq_icon_active"></span>}
            ></TarberItem>
            <TarberItem
              router="my"
              isSelecd={state === 'my'}
              onPren={() => { setState(state = 'my') }}
              title="我的"
              icon={<span className="my_icon"></span>}
              activeIcon={<span className="my_icon_active"></span>}
            ></TarberItem>
          </Tarbar>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
