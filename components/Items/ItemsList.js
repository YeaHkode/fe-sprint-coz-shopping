import Item from "./Item";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";

const StyledGrid = styled(Grid)`
  margin: 0;
`;

const ItemsList = ({ items }) => {
  return (
    <StyledGrid component="ul" container spacing={2}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </StyledGrid>
  );
};

export default ItemsList;
