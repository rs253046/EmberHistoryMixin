import Ember from 'ember';
import History from '../mixins/history';

export default Ember.Route.extend(History, {
	actions: {
		Back() {
			this.goBack();
		}
	}

});
