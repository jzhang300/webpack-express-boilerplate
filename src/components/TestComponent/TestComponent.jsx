import styles from './TestComponent.css';
import React from 'react';
import Actions from 'actions/Actions';
import Store from 'stores/Store';

const TestComponent = React.createClass({
  getInitialState() {
    return Store.get();
  },
  componentDidMount() {
    Store.addListener('change', this.changeEventHandler);
  },
  changeEventHandler() {
    this.setState(Store.get());
  },
  handleChange(event) {
    Actions.set(event.target.value);
  },
  handleButtonClick() {
    Actions.add(1);
  },
  render() {
    return (
    	<div className={styles.container}>
    		Hello sdf jsdlfk as <input onChange={this.handleChange} defaultValue={this.state.value} type="text"/>
    		<button onClick={this.handleButtonClick}>+1</button>
        <hr/>
        <span>{this.state.count}: {this.state.value}</span>
     	</div>
    );
  }
});

module.exports = TestComponent;
