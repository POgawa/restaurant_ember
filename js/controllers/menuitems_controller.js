Restaurant.MenuitemsController = Ember.ArrayController.extend({
  actions: {
    createMenuitem: function() {
      // Get the Menuitem title set by the "New Menuitem" text field
      var name = this.get('newName');
      if (!name.trim()) { return; }

      var description = this.get('newDescription');
      if (!description.trim()) { return; }

      var cost = this.get('newCost');


      // Create the new Menuitem model
      var menuitem = this.store.createRecord('menuitem', {
        name: name,
        description: description,
        cost: cost
      });
      // Clear the "New Menuitem" text field
      this.set('newName', '');
      this.set('newDescription', '' );
      this.set('newCost', '');

      // Save the new model
      menuitem.save();
    }
  }
});
