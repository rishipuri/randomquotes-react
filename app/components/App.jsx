import React from 'react';
import $ from 'jQuery';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [
        {
          quote: 'What I cannot create, I do not understand.',
          author: 'Richard Feynman'
        },
        {
          quote: 'Nothing could be worse than the fear that one had given up too soon, and left one unexpended effort that might have saved the world.',
          author: 'Jane Addams'
        },
        {
          quote: 'If you accept the expectations of others, especially negative ones, then you never will change the outcome.',
          author: 'Michael Jordan'
        },
        {
          quote: 'We make our own fortunes and we call them fate.',
          author: 'Benjamin Disraeli'
        }
      ],
      randomquote: 0
    };
  }

  getRandom = () => {
    const newrand =  Math.floor(Math.random() * (this.state.quotes.length - 0) + 0);

    this.setState({
      randomquote: newrand
    });
  }
  render() {

    return (
      <div>
        <p className='quote'>{ this.state.quotes[this.state.randomquote].quote }</p>
        <p className='author'>{ this.state.quotes[this.state.randomquote].author }</p>
        <button onClick={this.getRandom}>New Quote</button>
      </div>
    );
  }
}