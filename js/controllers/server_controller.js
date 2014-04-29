Restaurant.ServerController = Ember.ObjectController.extend({
  // isCompleted: function(key, value){
  //   var model = this.get('model');

  //   if (value === undefined) {
  //     // property being used as a getter
  //     return model.get('isCompleted');
  //   } else {
  //     // property being used as a setter
  //     model.set('isCompleted', value);
  //     model.save();
  //     return value;
  //   }
  // }.property('model.isCompleted'),

  actions: {
    editServer: function() {
      this.set('isEditing', true);
    },

    removeServer: function() {
      var server = this.get('model');
      server.deleteRecord();
      server.save();
    }
  },
  acceptChanges: function() {
    this.set('isEditing', false);

    if (Ember.isEmpty(this.get('model.name'))) {
      this.send('removeServer');
    } else {
      this.get('model').save();
    }
  },

  isEditing: false
});
