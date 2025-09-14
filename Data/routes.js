import * as dao from "./dao.js";

export default function DataRoutes(app) {
  const getData = async (req, res) => {
    const data = await dao.getData();
    res.json(data)
  };

  app.get("/api/data", getData);
};
