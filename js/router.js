Restaurant.Router.map(function() {
  this.resource('servers', { path: '/' }, function () {
    // this.route('active');
    // this.route('completed');
  });
});

Restaurant.ServersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('server');
  }
});

Restaurant.ServersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('servers');
  }
});

// Restaurant.TodosActiveRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.filter('todo', function(todo) {
//       return !todo.get('isCompleted');
//     });
//   },
//   renderTemplate: function(controller) {
//     this.render('todos/index', {controller: controller});
//   }
// });

// Restaurant.TodosCompletedRoute = Ember.Route.extend({
//   model: function(){
//     return this.store.filter('todo', function(todo) {
//       return todo.get('isCompleted');
//     });
//   },
//   renderTemplate: function(controller) {
//     this.render('todos/index', {controller: controller });
//   }
// });
