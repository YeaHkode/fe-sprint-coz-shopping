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
    <Grid xs={3} component="li">
      <Card>
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
      </Card>
    </Grid>
  );
};

export default Item;
