import React, { useEffect, useState } from "react";
import "../components-css/PlansScreen.css";
import db from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

function PlansScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: "price_1NidAHSJQYvVkVusJQ4FtpQI",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();
      // console.log(sessionId);
      // console.log(error);

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud function logs in the firebase console.
        alert(`An Error occured: ${error.message}`);
      }

      if (sessionId) {
        // We have a Session, let's redirect to checkout
        // Init stripe
        const stripe = await loadStripe(
          "pk_test_51NiZI4SJQYvVkVusZdd8k78LBgBKTJKQoG9XNv89nLYVM0xAB6s8WT5MqssFYieP9SVG83dottKU5IwI0c2OYiJN00v0l7szCG"
        );
        stripe.redirectToCheckout({ sessionId: sessionId });
      }
    });
  };

  return (
    <div className="plansScreen">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <div className="plansScreen__plan" key={productId}>
            <div className="plansScreen__info">
              <h5>{productData.name}</h5>
              <h6>{productData.description}</h6>
            </div>

            <button onClick={() => loadCheckout(productData.prices.priceId)}>
              Subscribe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PlansScreen;
