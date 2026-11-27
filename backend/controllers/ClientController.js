import clientResource from "../resources/clientResource.js";
import { all_clients, store_clients } from "../services/ClientsRepo.js";
import { successResponse } from "../helpers/responseHelper.js";
export const getAllClients = async (req, res, next) => {
  // console.log("get all");
  const page = Math.max(1, parseInt(req.query.page) || 1);
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 10));
  const clients = await all_clients();
  const data = clients.map(clientResource);
  const total = await User.countDocuments();
  return successResponse(res, clients.map(clientResource));
};
export const storeClient = async (req, res, next) => {
  // console.log("get all");
  const client = await store_clients(req.body);
  return successResponse(res, clientResource(client));
};
