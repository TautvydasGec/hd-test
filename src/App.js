import React from 'react';

import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'
class App extends React.Component {
  state = {
    showForm: false,
    places: [],
  }

  handleShowForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }))
  }

  handleFormData = (data) => {
    this.handleShowForm()
    let newPLaces = [data, ...this.state.places]
    this.setState({
      places: newPLaces,
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShowForm}>Add a place</button>
        {this.state.showForm
          ? (<Form onSubmit={this.handleFormData} />)
          : null}
        <Cards places={this.state.places} />
      </div>
    )
  }
}

export default App;
