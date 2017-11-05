import Ember from 'ember';

export default Ember.Mixin.create({
	history: Ember.A(),
	maxHistoryStack: 10,
	recentlyExpiredRouteHistory: Ember.A(),

  model(model, transition) {
    if (this.get('history').length > this.get('maxHistoryStack')) {
    	this.get('recentlyExpiredRouteHistory').clear();
    	this.get('recentlyExpiredRouteHistory').push(this.get('history').shift());     
    }

    const history = {
    	transition: transition,
    	hash: window.location.hash
    };

  	this.get('history').push(history);
  },

  previousTransitionHistory() {
  	const lastIndex = this.get('history').length;
  	return this.get('history')[lastIndex-2];
  },

  transitionToRouteInHistory(history = {}) {
		const hash = history.hash || '';
  	const splittedHash = hash.split('?');
  	if (splittedHash[1]) {
      window.location.href = url;
  	} else {
  		history.transition.retry();
  	}
  },

  transitionHistoryAt(index) {
  	const lastIndex = this.get('history').length;
    return this.get('history')[lastIndex + index - 1];
  },

  goBack() {
  	const history = this.previousTransitionHistory();
  	this.transitionToRouteInHistory(history);
  },

  goTo(index) {
  	const history = this.transitionHistoryAt(index);
  	this.transitionToRouteInHistory(history);
  }
});
