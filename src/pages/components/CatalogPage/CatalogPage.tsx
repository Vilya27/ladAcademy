import { ProductCatalog, Cart } from "@/components";
import PublicLayout from "@/layout/PublicLayout";
import { initialState } from "./initialState";
import { useImmerReducer } from "use-immer";
import { catalogReducer } from "./reducer";

const CatalogPage = () => {
  const [state, dispatch] = useImmerReducer(catalogReducer, initialState);
  return (
    <>
      <PublicLayout>
        <section>
          <ProductCatalog products={state} dispatch={dispatch} />
        </section>
        <section>
          <Cart products={state} dispatch={dispatch} />
        </section>
      </PublicLayout>
    </>
  );
};
export default CatalogPage;
