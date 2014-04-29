Restaurant.EditMenuitemView = Ember.TextField.extend({
  didInsertElement: function() {
    // this.$().focus();

  }
});

Ember.Handlebars.helper('edit-name', Restaurant.EditMenuitemView);
Ember.Handlebars.helper('edit-description', Restaurant.EditMenuitemView);
Ember.Handlebars.helper('edit-cost', Restaurant.EditMenuitemView);
