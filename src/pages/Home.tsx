import CategoryProductList from "../widgets/CategoryProductList/CategoryProductList";
import Container from "../components/Container";
import { useCategoriesQuery } from "../api/query";

function Home() {
  const { data: categories } = useCategoriesQuery();

  return (
    <Container size="lg">
      <div className="flex flex-col gap-12 mt-12">
        {categories?.map((category) => (
          <CategoryProductList category={category} key={category.id} />
        ))}
      </div>
    </Container>
  );
}

export default Home;
