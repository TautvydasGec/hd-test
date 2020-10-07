import React from 'react';

import Form from './components/Form'
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
    console.log(this.state.places)
    return (
      <div className="App">
        <button onClick={this.handleShowForm}>Add a place</button>
        {this.state.showForm
          ? (<Form onSubmit={this.handleFormData} />)
          : null}

      </div>
    )
  }
}

export default App;
