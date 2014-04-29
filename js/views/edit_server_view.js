Restaurant.EditServerView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-server', Restaurant.EditServerView);
