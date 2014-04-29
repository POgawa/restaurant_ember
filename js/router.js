Restaurant.Router.map(function() {
  this.resource('tables', { path: '/' }, function () {
    // this.route('active');
    // this.route('completed');
    this.resource('menuitems', { path: '/menuitem' });
  });
});

Restaurant.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});

Restaurant.MenuitemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('menuitem');
  }
});
// Restaurant.IndexRoute = Ember.Route.extend({
//   renderTemplate: function() {
//     this.render('index');
//     this.render('tables', {
//       outlet : 'tables',
//       into   : 'index'
//     });
//   }
// });

// Restaurant.ServersIndexRoute = Ember.Route.extend({
//   model: function() {
//     return this.modelFor('servers');
//   }
// });

// Restaurant.MenuitemsRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('menuitem');
//   }
// });

// Restaurant.MenuitemsIndexRoute = Ember.Route.extend({
//   model: function() {
//     return this.modelFor('menuitems');
//   }
// });

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
