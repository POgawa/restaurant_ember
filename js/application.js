window.Restaurant = Ember.Application.create({
  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_TRANSITIONS_INTERNAL: true
});

Restaurant.ApplicationAdapter = DS.FixtureAdapter.extend();
// Restaurant.ApplicationAdapter = DS.LSAdapter.extend({
//   namespace: 'restaurant-emberjs'
// });
