Restaurant.TableController = Ember.ObjectController.extend({
  actions: {
      editTable: function() {
        this.set('isEditing', true);
      },

      removeTable: function() {
        var table = this.get('model');
        table.deleteRecord();
        table.save();
      }
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.number'))) {
        this.send('removeTable');
      } else {
        this.get('model').save();
      }
    },

    isEditing: false

});
