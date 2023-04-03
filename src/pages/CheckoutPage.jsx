import React, { useCallback } from "react";
import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports

import { Link } from "react-router-dom";
 import { useUserContext } from '../context/user_context';
import { useCartContext } from "../context/cart_context";
// import { useAuth0 } from '@auth0/auth0-react';

const CheckoutPage = () => {
  const {cart} = useCartContext()
  return (
    <main>
      <PageHero title="Checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? <div className="empty">
          <h2>your cart is empty</h2>
          <Link to='/products' className="btn">fill it</Link>
        </div> : <StripeCheckout/>}
      
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
.empty{
  text-align:center;
}
`;
export default CheckoutPage;
