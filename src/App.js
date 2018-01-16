import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/todoList';
import InprogressList from './components/inprogressList';
import DoneList from './components/doneList';
import { bindActionCreators } from 'redux';
import { getAppDetails, removeItem, updateList } from './actions/actions';

class App extends Component {

    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

  componentDidMount() {
      fetch('https://api.myjson.com/bins/vgkil').then( (response) => {
          return response.json();
      }).then( (details) => {
          this.props.actions.getAppDetails(details.data);
      });
  }

  removeItem(obj) {
      this.props.actions.removeCard(obj);
  }

  updateItem(data, type, types) {
      const { item } = data;
      let updateItem;
      if(types.length) {
        updateItem = JSON.parse(item[types[0]] ? item[types[0]] : item[types[1]]);
        updateItem.addType = type;
      }
      else {
        updateItem = {item: data, addType: type};
      }
      this.props.actions.updateList(updateItem);
  }

  render() {

    const { todo = [], inprogress = [], done = [] } = this.props.appReducer;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dummy drag and drop using React/Redux</h1>
        </header>
        <div className='wrapper'>
            <div className='list'>
                <TodoList types = {['inprogress', 'done']} type={'todo'} removeItem={ this.removeItem } cardList={ todo } updateItem={ this.updateItem } />
            </div>
            <div className='list'>
                <InprogressList types = {['done', 'todo']} type={'inprogress'} removeItem={ this.removeItem } cardList={ inprogress } updateItem={ this.updateItem } />
            </div>
            <div className='list'>
                <DoneList types = {['todo', 'inprogress']} type={'done'} removeItem={ this.removeItem } cardList={ done } updateItem={ this.updateItem } />
            </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        appReducer: state.appReducer
    }
}

function mapDispatchToProps(dispatch) {
  return {
      actions: {
          getAppDetails: bindActionCreators(getAppDetails, dispatch),
          updateList: bindActionCreators(updateList, dispatch),
          removeCard: bindActionCreators(removeItem, dispatch)
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
