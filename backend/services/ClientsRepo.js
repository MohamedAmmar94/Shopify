import Client from "../models/ClientModel.js";
// import clientResource from "../resources/clientResource.js";
export async function all_clients() {
  await Client.createIndexes();
  const clients = await Client.find({}, { __v: false, password: false });
  return clients;
  //   console.log(clients);
  //   return clientResource(clients);
}
export async function store_clients(data) {
  const newClient = new Client(data);
  //   const token = await createJwt(newUser);
  //   newUser.token = token;
  return newClient.save();
}
