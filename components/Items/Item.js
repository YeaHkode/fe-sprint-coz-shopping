import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Item = ({ item }) => {
  console.log(item);

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

  return (
    <Grid xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={cardUrl} title={cardTitle} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2" component="div">
            {cardTitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Item;
