import Item from "./Item";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemsList;
