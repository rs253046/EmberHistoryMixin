import Ember from 'ember';
import History from '../mixins/history';

export default Ember.Route.extend(History, {
	beforeModel(transition) {
    this._super(...arguments);
    transition.abort();
   	this.previousTransition();
	}
});
