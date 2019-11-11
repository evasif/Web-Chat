import React from 'react';
import ListViews from '../ListViews/ListViews';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';
/*class Container extends React.Component {
  render () {
    return {
      <div className="container">{this.props.children}</div>
    }
  }
}*/
class Container extends React.Component = () => {
  constructor() {
    this.state = {
      filter: '',
      categoryFilter: ''
    }
  }
  onInput(e) {
    this.setState({
      filter: e.target.value
    });
  }
  render( ) {
    const { news, filter, categoryFilter } = this.state;
    const filteredNews = new.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase())
                                            && e.category === categoryFilter);

    return (
      <div className="container">
        <SearchBar onInput={this.onInput.bind(this)}>/
        <Filter onFilter={(category) => this.setState({ categoryFilter})}/>
        <ListView>
          {filteredNews.map((newsItem) => (<ListViewItem key={newsItem.id} info={newsItem} />))}
        <ListView/>
      </div>
    )
  }
}
export default Container;
