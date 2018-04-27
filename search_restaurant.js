// === Search restaurants ===

ESApi.searchRestaurants({ 'street-address' }, function(response) {
    var address = response.address;
    var restaurants = response.restaurants;
    console.log(address, restaurants);
});

// === Load menu ===

ESApi.getRestaurantDetails({ apiKey: 358 }, function(response) {
    var restaurant = response.restaurant;
    console.log(restaurant);
});

