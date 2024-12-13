import { useApi } from "../hooks/useApi";
import { getCategories } from "../api/api";
import CategoryProductList from "../widgets/CategoryProductList/CategoryProductList";
import Container from "../components/Container";

function Home() {
  const {
    data: categories,
    isError: isErrorCategories,
    isLoading: isLoadingCategories,
  } = useApi(getCategories);

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
