import React from 'react';
import { Header, PageContent, Button, Categories, Questions } from "./components";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gameStarted: false }
  }

  onGameStart = () => {
    console.log("Game started!")
    this.setState({ gameStarted: true })
  }

  // State is managed in a component. It can be passed down as props to other components. 
  // These components can consume the props or pass it even further down to their child components. 
  // A component can manage a whole lot of state, 
  // pass it down as props to its child components and 
  // pass a couple of functions along the way to enable child components to alter the state in the parent component again.
  onCategorySelected = (categoryId) => {
    console.log(categoryId)
    this.setState({ categoryId: categoryId })
  }

  onAnswersSubmitted = (answers) => {
    
  }

  render() {
    return (
      <div>
        <Header text="Welcome to Trivia Game!" />
        <PageContent>
          <Button onClick={this.onGameStart} text="Start Game!" />
          {this.state.gameStarted ? <Categories onCategorySelected={this.onCategorySelected} /> : null}
          {this.state.categoryId ? <Questions categoryId={this.state.categoryId} /> : null}
          {this.state.score ? <Score value={this.state.score} /> : null}
        </PageContent>
      </div >
    );
  }
}

export default App;
