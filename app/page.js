"use client";
import ItemsSection from "@/components/Items/ItemsSection";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <main>
      <Stack direction="column" spacing={2} sx={{ mt: 4, mb: 4 }}>
        <ItemsSection title={"상품 리스트"} />
        <ItemsSection title={"북마크 리스트"} />
      </Stack>
    </main>
  );
};

export default HomePage;
