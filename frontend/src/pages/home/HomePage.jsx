import { NavbarComponent } from "../../components/layouts/NavbarComponent.jsx";
import { CarsoulComponent } from "../../components/layouts/CarsoulComponent.jsx";
import { CategoryContainerCard } from "../../components/categories/CategoryContainerCard.jsx";
import { ProductContainerCard } from "../../components/products/ProductContainerCard.jsx";
import DiscountSection from "../../components/home/DiscountSection.jsx";
import { BrandContainerCard } from "../../components/brands/BrandContainerCard.jsx";
export const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <CarsoulComponent />
      <CategoryContainerCard name={"التصنيفات"} />
      <ProductContainerCard name="الاكثر مبيعا" />
      <DiscountSection />
      <ProductContainerCard name="احدث الازياء" />
      <BrandContainerCard name="اشهر الماركات " />
      {/* <BrandContainerCard /> */}
    </div>
  );
};
