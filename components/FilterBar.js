import Link from "next/link";
import Exhibition from "@/assets/기획전.png";
import Brand from "@/assets/브랜드.png";
import Product from "@/assets/상품.png";
import All from "@/assets/전체.png";
import Category from "@/assets/카테고리.png";

const filterList = [
  { title: "전체", img: All },
  { title: "상품", img: Product },
  { title: "브랜드", img: Brand },
  { title: "카테고리", img: Category },
  { title: "기획전", img: Exhibition },
];

const FilterBar = () => {
  return (
    <section>
      <div>
        {filterList.map(({ title, img }) => (
          <Link href="" key={title}>
            {title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FilterBar;
