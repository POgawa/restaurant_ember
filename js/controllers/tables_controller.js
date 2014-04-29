Restaurant.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      // Get the table title set by the "New table" text field
      var number = this.get('newNumber');
      if (!number.trim()) { return; }



      // Create the new table model
      var table = this.store.createRecord('table', {
        number: number
      });
      // Clear the "New table" text field
      this.set('newNumber', '');

      // Save the new model
      table.save();
    }
  }
});

