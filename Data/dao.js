import model from "./model.js";
export const getData = () => {
    return model.find();
};
