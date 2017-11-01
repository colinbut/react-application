import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      content: "Content is Not here! Hello!!!!"
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.content}</h1>
      </div>
    );
  }
}

export default App;
