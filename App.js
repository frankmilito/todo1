import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: '',
            list: []
        }
    }
    changeUserInput(input) {
        this.setState({
            userInput: input
        })
    }
    addToList(input) {
        let listArray = this.state.list;
        listArray.push(input)
        this.setState({
            list: listArray
        })
    }
    render() {
        return (
            <div className='todo-list'>
                <input
                    onChange={(e) => this.changeUserInput(e.target.value)}
                    value={this.state.userInput} type="text" />
                <button onClick={this.addToList(this.state.userInput)}>Add Todos</button>
            </div>
        )
    }
}

export default App