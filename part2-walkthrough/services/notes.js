import axios from "axios";
const baseUrl = "/api/notes";

const getAll = () => {
  const req = axios.get(baseUrl);
  return req
    .then((response) => response.data)
    .catch((error) => {
      console.log("fail");
    });
};

const create = (newObject) => {
  const req = axios.post(baseUrl, newObject);
  return req.then((response) => response.data);
};

const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((response) => response.data);
};

// const deleteNote = (id) => {
//   const req = axios.delete(`${baseUrl}/${id}`);
//   return req.then((response) => response.data);
// };

export default {
  getAll,
  create,
  update,
};
