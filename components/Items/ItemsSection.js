"use client";
import ItemsList from "./ItemsList";
import { useEffect, useState } from "react";
import { getItems } from "@/lib/getItems";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const ItemsSection = ({ title }) => {
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
      <Container>
        <Typography component="h5" variant="h5" sx={{ fontWeight: 600, ml: 1 }}>
          {title}
        </Typography>
        <ItemsList items={items} />
      </Container>
    </section>
  );
};

export default ItemsSection;
