import axios from "../../utils/axios";

const getBlogs = async (filterStatus) => {
  let queryString = "";
  if (filterStatus === "all") queryString = "";
  if (filterStatus === "saved") queryString = "?isSaved=true";
  const response = await axios.get(`/blogs${queryString}`);
  return response.data;
};

export default getBlogs;
