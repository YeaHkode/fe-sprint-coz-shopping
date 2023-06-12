"use client";
import FilterBar from "@/components/FilterBar";
import ItemsList from "@/components/Items/ItemsList";
import { getItems } from "@/lib/getItems";
import { Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const ProductListPage = () => {
  const [items, setItems] = useState([]);

  // useEffect에서는 바로 async 사용 불가
  // getItems는 비동기 -> 부모도 비동기여야함
  useEffect(() => {
    const getData = async () => {
      const data = await getItems(8);
      setItems(data);
    };

    getData();
  }, []);

  return (
    <main>
      <Container>
        <Stack direction="column" spacing={2} sx={{ mt: 4, mb: 4 }}>
          <FilterBar />
          <ItemsList items={items} />
        </Stack>
      </Container>
    </main>
  );
};

export default ProductListPage;
