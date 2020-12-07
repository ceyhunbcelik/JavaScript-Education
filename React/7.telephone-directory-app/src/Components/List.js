import React from 'react';

import '../css/list.css';

class List extends React.Component{
    render() {
      return (
        <div>
          <div className={'listArea'}>
            <input name={'filter'} id={'filter'} placeholder={'Name or Phone..'} />

            <ul className={'list'}>
                <li>
                  <span className={'name'}>Ceyhun Bahadır Çelik</span>
                  <span className={'phone'}> +90 111 111 11 11</span>
                  <span className={'clearfix'}></span>
                </li>
                <li>
                  <span className={'name'}>Şeyma Başar</span>
                  <span className={'phone'}> +90 222 222 22 22</span>
                  <span className={'clearfix'}></span>
                </li>
                <li>
                  <span className={'name'}>Kaan Çelik</span>
                  <span className={'phone'}> +90 333 333 33 33</span>
                  <span className={'clearfix'}></span>
                </li>
            </ul>
          </div>
        </div>
      )
    };
}

export default List;