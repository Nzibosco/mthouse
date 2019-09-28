import axios from "axios";

export default {
  // Gets all
  getMembers: () => {
    return axios.get("/api/member");
  },
  // Gets 1 with the given id
  getById: function(id) {
    return axios.get("/api/member/" + id);
  },
  // Deletes with the given id
  deleteOne: function(id) {
    return axios.delete("/api/member/" + id);
  },
  // Saves to the database
  saveMember: function(memberData) {
    return axios.post("/api/member", memberData);
  }
};