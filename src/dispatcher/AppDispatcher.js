import { Dispatcher } from 'flux';
import assign from 'object-assign';

const AppDispatcher = assign(new Dispatcher(), {

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the server.
   */
  handleServerAction(action) {
    const payload = {
      source: 'server',
      action
    };
    this.dispatch(payload);
  },

  /**
   * @param {object} action The details of the action, including the action's
   * type and additional data coming from the view.
   */
  handleViewAction(action) {
    const payload = {
      source: 'view',
      action
    };
    this.dispatch(payload);
  }

});

module.exports = AppDispatcher;
