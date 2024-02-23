import axios from "../../utils/axios";

const updateSave = async (id) => {
  const res = await axios.patch(
    `/blogs/${id}`,
    {
      isSaved: true,
    },
    {
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );

  return res.data;
};

export default updateSave;
