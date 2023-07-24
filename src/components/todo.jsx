import React, { Component } from 'react';

class Todo extends Component {

    state = {

        newItem: '',

        items: [
            {
                id: 1,
                description: "Do todo app",
                isCompleted: false
            }
        ],



    }

    // const [inputValue, setInputValue] = useState('');


    addItem = (e) => {


        let newItem = {
            id: this.state.items.length + 1,
            description: this.state.newItem,
            isCompleted: false
        };
        this.setState({
            items: [
                ...this.state.items,
                newItem
            ],
            newItem: ''
        });


    }




    render() {
        const isDisabled = this.state.desc === ''; // Disable the button if the desc property is empty
        return (

















            <div><h2>Todo List Component</h2>
                <div>


                    <input type="text" defaultValue={this.state.newItem} onChange={(e) => { this.setState({ newItem: e.target.value }) }} />
                    <button

                        disabled={isDisabled}

                        type='button' onClick={() => this.addItem(this)} className="btn btn-primary">Add Item
                    </button>
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Is Completed</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.items.map((item) => (
                            <tr key={item.id}>
                                {/* <td>{item.id}</td> */}
                                <td>{item.description}</td>
                                <td>
                                    <input type="checkbox" name="completionStatus" id="" value={item.isCompleted} />
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        );
    }

}
export default Todo;