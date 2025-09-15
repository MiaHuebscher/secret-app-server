import * as dao from "./dao.js";

export default function RestaurantRoutes(app) {
  const createRestaurant = async (req, res) => {
    const restaurant = await dao.createRestaurant(req.body);
    res.json(restaurant);
  };
  const deleteRestaurant = async (req, res) => { 
    const status = await dao.deleteRestaurant(req.params.restId);
    res.json(status);
  };
  const findAllRestaurants = async (req, res) => { 
    const { restName, cityName, state, country, cuisine, source, angelasRating, addedBy } = req.query;
    if (restName) {
      const restaurants = await dao.findRestaurantByPartialName(restName);
      res.json(restaurants);
      return;
    }
    if (cityName) {
      const restaurants = await dao.findRestaurantByPartialCity(cityName);
      res.json(restaurants);
      return;
    }
    if (state) {
      const restaurants = await dao.findUsersByState(state);
      res.json(restaurants);
      return;
    }
    if (country) {
      const restaurants = await dao.findUsersByCountry(country);
      res.json(restaurants);
      return;
    }
    if (cuisine) {
      const restaurants = await dao.findUsersByCuisine(cuisine);
      res.json(restaurants);
      return;
    }
    if (source) {
      const restaurants = await dao.findUsersBySource(source);
      res.json(restaurants);
      return;
    }
    if (angelasRating) {
      const restaurants = await dao.findUsersByAngelasRating(angelasRating);
      res.json(restaurants);
      return;
    }
    if (addedBy) {
      const restaurants = await dao.findUsersByAddedBy(addedBy);
      res.json(restaurants);
      return;
    }
    const restaurants = await dao.findAllRestaurants();
    res.json(restaurants);
  };
  
  const updateRestaurant = async (req, res) => { 
    const { restId } = req.params;
    const status = await dao.updateRestaurant(restId, req.body);
    res.json(status);
  };
  
  app.post("/api/restaurants", createRestaurant);
  app.get("/api/restaurants", findAllRestaurants);
  app.put("/api/restaurants/:restId", updateRestaurant);
  app.delete("/api/restaurants/:restId", deleteRestaurant);
};
