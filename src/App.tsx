import Container from "./components/Container";
import Layout from "./widgets/layout/Layout";
import { getCategories } from "./api/api";
import { useApi } from "./hooks/useApi";
import CategoryProductList from "./widgets/CategoryProductList/CategoryProductList";

export default function App() {
  const {
    data: categories,
    isError: isErrorCategories,
    isLoading: isLoadingCategories,
  } = useApi(getCategories);

  return (
    <Layout>
      <Container size="lg">
        <div className="flex flex-col gap-12 mt-12">
          {categories?.map((category) => (
            <CategoryProductList category={category} key={category.id} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}
