import axios from "../../utils/axios";

const updateLike = async (id, likes) => {
  console.log("🚀 ~ file: likesApi.js:4 ~ updateLike ~ likes:", likes);

  const res = await axios.patch(
    `/blogs/${id}`,
    {
      likes: likes + 1,
    },
    {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );

  return res.data;
};

export default updateLike;
