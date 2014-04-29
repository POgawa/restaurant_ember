Restaurant.Server = DS.Model.extend({
  tables: DS.hasMany('tables'),
  name: DS.attr('string')
});

Restaurant.Server.FIXTURES = [
 {
   id: 1,
   name: 'Batman'
 },
 {
   id: 2,
   name: 'Superman'
 },
 {
   id: 3,
   name: 'Green Lantern'
 }
];
