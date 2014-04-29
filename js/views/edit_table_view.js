Restaurant.EditTableView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});


Ember.Handlebars.helper('edit-table', Restaurant.EditTableView);
