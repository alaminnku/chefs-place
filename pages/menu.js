import Menu from "@components/Menu";
import { pizzas, burgers, drinks } from "@data/menu";

const MenuPage = () => {
  return (
    <div>
      <Menu pizzas={pizzas} burgers={burgers} drinks={drinks} />
    </div>
  );
};

export default MenuPage;
