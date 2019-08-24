import React from 'react';
import './App.css';
import Quotes from './components/quotes';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      quote: "",
      author: ""
    }
  }


  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(res=> res.json())
      .then((data) => {
        const rand = Math.floor(Math.random() * 100) + 1 ;
        this.setState({
          quote: data.quotes[rand].quote,
          author: data.quotes[rand].author
          })
      })
      .catch(console.log)
  }

  render() {
    return (
      <Quotes quote={this.state.quote}  author={this.state.author} fetchData={this.fetchData}/>
    );
  }
}

export default App;
