import DS from 'ember-data';
 
export default DS.FirebaseAdapter.extend({
  firebase: new window.Firebase('mateo-ember-todomvc.firebaseIO.com')
});