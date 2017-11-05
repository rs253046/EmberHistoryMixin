import Ember from 'ember';
import History from '../mixins/history';

export default Ember.Route.extend(History, {
  queryParams: {
    asdf: {
      refreshModel: true
    }
  },
});
