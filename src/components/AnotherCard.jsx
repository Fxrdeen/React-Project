import { BsFillBagFill } from "react-icons/bs";
import styles from './css/AnotherCard.module.css';
const AnotherCard = ({id, img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <>
      <section className={styles.card}>
        <img src={img} alt={title} className={styles.card-img} />
        <div className={styles.card_details}>
          <h3 className={styles.card-title}>{title}</h3>
          <section className={styles.card-reviews}>
            {star} {star} {star} {star}
            <span className={styles.total-reviews}>{reviews}</span>
          </section>
          <section className={styles.card_price}>
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className={styles.bag}>
              <BsFillBagFill className={styles.bag_icon} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AnotherCard;