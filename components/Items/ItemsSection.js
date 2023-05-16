"use client";
import ItemsList from "./ItemsList";
import { useEffect, useState } from "react";
import { getItems } from "@/lib/getItems";

const ItemsSection = () => {
  const [items, setItems] = useState([]);

  // useEffect에서는 바로 async 사용 불가
  // getItems는 비동기 -> 부모도 비동기여야함
  useEffect(() => {
    const getData = async () => {
      const data = await getItems();
      setItems(data);
    };
    getData();
  }, []);

  return (
    <section>
      <div>
        <h3>상품 리스트</h3>
        <ItemsList items={items} />
      </div>
    </section>
  );
};

export default ItemsSection;
