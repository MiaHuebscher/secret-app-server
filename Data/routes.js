import * as dao from "./dao.js";

export default function DataRoutes(app) {
  const getData = async (req, res) => {
    const data = await dao.getData();
    res.json(data)
  };

  const updateData = async (req, res) => { 
    const { dataId } = req.params;
    const status = await dao.updateData(dataId, req.body);
    res.json(status);
  };

  app.get("/api/data", getData);
  app.put("/api/data/:dataId", updateData);
};
