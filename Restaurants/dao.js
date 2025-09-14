import model from "./model.js";
export const createRestaurant = (restaurant) => {
    return model.create(restaurant);
};
export const findAllRestaurants = () => model.find();
export const findRestaurantByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({ restaurantName: { $regex: regex }  });
  };  
export const findRestaurantByPartialCity = (partialCity) => {
    const regex = new RegExp(partialCity, "i"); // 'i' makes it case-insensitive
    return model.find({ city: { $regex: regex } });
  };  
export const findUsersByState = (state) => model.find({ state: state });
export const findUsersByCountry = (country) => model.find({ country: country });
export const findUsersByCuisine = (cuisine) => model.find({ cuisine: cuisine });
export const findUsersBySource = (source) => model.find({ source: source });
export const findUsersByAngelasRating = (angelasRating) => model.find({ angelasRating: angelasRating });
export const findUsersByAddedBy = (addedBy) => model.find({ addedBy: addedBy });
export const updateRestaurant = (restId, restaurant) =>  model.updateOne({ _id: restId }, { $set: restaurant });
export const deleteRestaurant = (restId) => model.deleteOne({ _id: restId });
