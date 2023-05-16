import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    max-width: none;
  }
`;

const Item = ({ item }) => {
  // console.log(item);

  const [isOpen, setIsOpen] = useState(false);

  // 구조분해
  const {
    brand_image_url,
    brand_name,
    discountPercentage,
    follower,
    id,
    image_url,
    price,
    sub_title,
    title,
    type,
  } = item;

  const cardTitle = type === "Brand" ? brand_name : title;
  const cardUrl = type === "Brand" ? brand_image_url : image_url;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Grid xs={3} component="li">
      <Card>
        <CardActionArea onClick={onClick}>
          <CardMedia
            sx={{ aspectRatio: 4 / 3 }}
            image={cardUrl}
            title={cardTitle}
          />
          <CardContent>
            <Typography gutterBottom component="div" sx={{ fontWeight: 500 }}>
              {cardTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <StyledDialog
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <DialogContent>
          <Image src={cardUrl} width={744} height={480} alt={cardTitle} />
          <DialogContentText>{cardTitle}</DialogContentText>
        </DialogContent>
      </StyledDialog>
    </Grid>
  );
};

export default Item;
