Restaurant.MenuitemController = Ember.ObjectController.extend({
  actions: {
      editMenuitem: function() {
        this.set('isEditing', true);
      },

      removeMenuitem: function() {
        var menuitem = this.get('model');
        menuitem.deleteRecord();
        menuitem.save();
      }
    },
    acceptChanges: function() {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.name'))) {
        this.send('removeMenuitem');
      } else {
        this.get('model').save();
      }
    },

    isEditing: false
});
