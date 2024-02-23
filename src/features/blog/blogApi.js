import axios from "../../utils/axios";

const getBlog = async (id) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export default getBlog;
