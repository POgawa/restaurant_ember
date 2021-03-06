Restaurant.ServersController = Ember.ArrayController.extend({
  actions: {
    createServer: function() {
      // Get the todo title set by the "New Todo" text field
      var name = this.get('newName');
      if (!name.trim()) { return; }

      // Create the new Todo model
      var server = this.store.createRecord('server', {
        name: name
      });
      // Clear the "New server" text field
      this.set('newName', '');

      // Save the new model
      server.save();
    }
    // removeCompleted: function() {
    //   var todos = this.filterBy('isCompleted', true);
    //   todos.invoke('deleteRecord');
    //   todos.invoke('save');
    // }
  }
  // hasCompleted: function() {
  //   return this.get('completed') > 0;
  // }.property('completed'),

  // completed: function() {
  //   return this.filterBy('isCompleted', true).get('length');
  // }.property('@each.isCompleted'),

  // remaining: function() {
  //   return this.filterBy('isCompleted', false).get('length');
  // }.property('@each.isCompleted'),

  // inflection: function() {
  //   var remaining = this.get('remaining');
  //   return remaining === 1 ? 'item' : 'items';
  // }.property('remaining'),

  // allAreDone: function(key, value) {
  //   if (value === undefined) {
  //     return !!this.get('length') && this.everyProperty('isCompleted', true);
  //   } else {
  //     this.setEach('isCompleted', value);
  //     this.invoke('save');
  //     return value;
  //   }
  // }.property('@each.isCompleted')
});
