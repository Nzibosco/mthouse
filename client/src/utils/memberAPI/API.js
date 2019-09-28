import axios from "axios";

export default {
  // Gets all
  getMembers: () => {
    return axios.get("/api/event");
  },
  // Gets 1 with the given id
  getById: function(id) {
    return axios.get("/api/event/" + id);
  },
  // Deletes with the given id
  deleteOne: function(id) {
    return axios.delete("/api/event/" + id);
  },
  // Saves to the database
  saveMember: function(data) {
    return axios.post("/api/event", data);
  }
};