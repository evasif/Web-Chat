import React from 'react';
//import newsServices from '../../services/newsServices';
import ListViewItem from '../ListViewItem/ListViewItem';
class ListView extends React.Component {
  /*componentDidMount() {
    //console.log('componentDidMount');
    newsServices.getNews().then((new) => {
      console.log(news);
    })
  }*/
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          id:1,
          title:"Zombie apocolypse",
          shortDescription:"A zombie apocolypse has brooked loose!",
          category: "world"
        },
        {
          id:2,
          title:"Bitcoin has dropped!",
          shortDescription:"Bitcoin took a steep dig this morning!",
          category:"financial"
        },
        {
          id:3,
          title:"PS5 has announced its debut",
          shortDescription:"Sony has announced the new PS5!!!",
          category:"technology"
        }
      ]
    };
  }

  render() {
    return {
      <ul className="list-view">
        {this.state.news.map((newsItem) => {
          return <ListViewItem key={newsItem.id} info={newsItem}/>;
        })}
      </ul>
    };
  }
}

export default ListView;
