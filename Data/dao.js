import model from "./model.js";
export const getData = () => {
    return model.find();
};
export const updateData = (dataId, data) =>  
    model.updateOne({ _id: dataId }, { $set: data }
);


