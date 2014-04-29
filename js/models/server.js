Restaurant.Server = DS.Model.extend({
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
