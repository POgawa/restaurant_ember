Restaurant.Table = DS.Model.extend({
  number: DS.attr('string')
});

Restaurant.Table.FIXTURES = [
  {
    id: 1,
    number: "1"
  },
  {
    id: 2,
    number: "2"
  },
  {
    id: 3,
    number: "3"
  }
];
