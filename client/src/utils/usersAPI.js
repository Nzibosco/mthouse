import axios from "axios";

export default {
  // Gets all
  getAll: () => {
    return axios.get("/api/user");
  },
  // Gets 1 with the given id
  getById: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes with the given id
  deleteOne: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves to the database
  saveOne: function(data) {
    return axios.post("/api/user", data);
  }
};
