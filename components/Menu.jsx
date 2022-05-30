import Image from "next/image";
import { useState } from "react";
import pizzas from "@data/pizzas";
import burgers from "@data/burgers";
import drinks from "@data/drinks";
import styles from "@styles/Menu.module.css";

const Menu = () => {
  const [active, setActive] = useState({
    pizza: true,
    burger: false,
    drink: false,
  });

  const { pizza, burger, drink } = active;

  return (
    <section className={styles.Menu}>
      <div className={styles.Titles}>
        <h2>Menu</h2>
        <p
          className={pizza ? styles.Active : null}
          onClick={() =>
            setActive({ ...active, pizza: true, burger: false, drink: false })
          }
        >
          Pizza
        </p>
        <p
          className={burger ? styles.Active : null}
          onClick={() =>
            setActive({ ...active, burger: true, pizza: false, drink: false })
          }
        >
          Burger
        </p>
        <p
          className={drink ? styles.Active : null}
          onClick={() =>
            setActive({ ...active, drink: true, pizza: false, burger: false })
          }
        >
          Drink
        </p>
      </div>

      <div className={styles.Items}>
        {pizza &&
          pizzas.map((pizza, i) => (
            <div className={styles.Item} key={i + 1}>
              <Image src={pizza.image} width={400} height={400} />
              <div className={styles.Content}>
                <div>
                  <p>{pizza.name}</p>
                  <p>{pizza.description}</p>
                </div>
                <p>{pizza.price}</p>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.Items}>
        {burger &&
          burgers.map((burger, i) => (
            <div className={styles.Item} key={i + 1}>
              <Image src={burger.image} width={400} height={400} />
              <div className={styles.Content}>
                <div>
                  <p>{burger.name}</p>
                  <p>{burger.description}</p>
                </div>
                <p>{burger.price}</p>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.Items}>
        {drink &&
          drinks.map((drink, i) => (
            <div className={styles.Item} key={i + 1}>
              <Image src={drink.image} width={400} height={400} />
              <div className={styles.Content}>
                <div>
                  <p>{drink.name}</p>
                  <p>{drink.description}</p>
                </div>
                <p>{drink.price}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Menu;
