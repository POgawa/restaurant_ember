Restaurant.Menuitem = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  cost: DS.attr('string')
});

Restaurant.Menuitem.FIXTURES = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious',
    cost: '10'
  },
  {
    id: 2,
    name: 'Tacos',
    description: 'More delicious',
    cost: '5'
  },
  {
    id: 3,
    name: 'Beer',
    description: 'Most delicious',
    cost: '3'
  }
];
