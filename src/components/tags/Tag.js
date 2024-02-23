import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({ tag }) {
  const { title } = tag;
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(title) ? true : false;

  // styles
  const style = isSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";
  // handle onClick
  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <div className={style} onClick={handleSelect}>
      {title}
    </div>
  );
}
