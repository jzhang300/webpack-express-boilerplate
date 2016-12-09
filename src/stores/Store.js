import assign from 'object-assign';
import { EventEmitter } from 'events';
import  Actions from 'actions/Actions';
import Dispatcher from 'dispatcher/AppDispatcher';

let _value = 'react';
let _count = 0;

const Store = assign({}, EventEmitter.prototype, {
  get() {
    return {
      value: _value,
      count: _count
    };
  }
});

Store.dispatchToken = Dispatcher.register((payload) => {
  const action = payload.action;
  switch (action.type) {

  case Actions.TYPES.SET:
    _value = action.value;
    Store.emit('change');
    break;

  case Actions.TYPES.ADD:
    _count += action.n;
    Store.emit('change');
    break;

  default:
    break;
  }
});


/**
 * Expose
 */
exports = module.exports = Store;
