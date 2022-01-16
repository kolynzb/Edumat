import React, { useContext, useState } from "react";
import { Grid, Typography, Button, Box, MenuItem } from "@mui/material";

// Custom components
import Cardsm from "../../components/Cardsm";

import { AppContext, cart } from "../../Contexts/AppContext";

let total = 0;
const Cart = () => {
  const { isLoaded, products, cart } = useContext(AppContext);

  return (
    <Grid container style={{ padding: "100px 10%" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        lx={12}
        style={{ padding: "30px 0px" }}
        align="center"
      >
        <Typography
          variant="h3"
          style={{
            color: "#8a8a8a",
            borderBottom: "1px #e5e5e5 solid",
            paddingBottom: "30px",
          }}
        >
          My Cart
        </Typography>
      </Grid>
      <Grid container spacing={2} style={{ padding: "10px 5%" }} align="center">
        {isLoaded ? (
          <Grid item xs={12} sm={12} md={6} lg={6} lx={6} style={{}}>
            {cart.map((product) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                lx={12}
                style={{ paddingTop: "20px" }}
                align="center"
              >
                <Cardsm
                  products={products}
                  productID={product.productId}
                  prodQty={product.quantity}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            lx={12}
            style={{}}
            align="center"
          >
            <div className="App-logo">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 .75c.172 0 .333.034.484.102a1.214 1.214 0 0 1 .664.664c.068.15.102.312.102.484s-.034.333-.102.484a1.214 1.214 0 0 1-.265.399 1.324 1.324 0 0 1-.399.273A1.254 1.254 0 0 1 8 3.25c-.172 0-.333-.031-.484-.094a1.324 1.324 0 0 1-.672-.672A1.254 1.254 0 0 1 6.75 2c0-.172.031-.333.094-.484.067-.151.159-.284.273-.399.115-.114.248-.203.399-.265A1.17 1.17 0 0 1 8 .75zM2.633 3.758a1.111 1.111 0 0 1 .68-1.031 1.084 1.084 0 0 1 .882 0c.136.057.253.138.352.242.104.099.185.216.242.351a1.084 1.084 0 0 1 0 .883 1.122 1.122 0 0 1-.594.594 1.169 1.169 0 0 1-.883 0 1.19 1.19 0 0 1-.359-.234 1.19 1.19 0 0 1-.234-.36 1.169 1.169 0 0 1-.086-.445zM2 7a.941.941 0 0 1 .703.297A.941.941 0 0 1 3 8a.97.97 0 0 1-.078.39 1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 2 9a.97.97 0 0 1-.39-.078 1.104 1.104 0 0 1-.32-.211 1.104 1.104 0 0 1-.212-.32A.97.97 0 0 1 1 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 2 7zm.883 5.242a.887.887 0 0 1 .531-.805.863.863 0 0 1 .68 0c.11.047.203.11.281.188a.887.887 0 0 1 .188.96.887.887 0 0 1-1.148.461.913.913 0 0 1-.462-.46.863.863 0 0 1-.07-.344zM8 13.25c.208 0 .385.073.531.219A.723.723 0 0 1 8.75 14a.723.723 0 0 1-.219.531.723.723 0 0 1-.531.219.723.723 0 0 1-.531-.219A.723.723 0 0 1 7.25 14c0-.208.073-.385.219-.531A.723.723 0 0 1 8 13.25zm3.617-1.008c0-.177.06-.325.18-.445s.268-.18.445-.18.326.06.445.18c.12.12.18.268.18.445s-.06.326-.18.445a.605.605 0 0 1-.445.18.605.605 0 0 1-.445-.18.605.605 0 0 1-.18-.445zM14 7.5a.48.48 0 0 1 .352.148A.48.48 0 0 1 14.5 8a.48.48 0 0 1-.148.352A.48.48 0 0 1 14 8.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 13.5 8a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14 7.5zm-1.758-5.117c.188 0 .365.036.531.11a1.413 1.413 0 0 1 .735.734c.073.166.11.343.11.53 0 .188-.037.365-.11.532a1.413 1.413 0 0 1-.735.734 1.31 1.31 0 0 1-.53.11c-.188 0-.365-.037-.532-.11a1.415 1.415 0 0 1-.734-.734 1.31 1.31 0 0 1-.11-.531c0-.188.037-.365.11-.531a1.413 1.413 0 0 1 .734-.735c.167-.073.344-.11.531-.11z"></path>
              </svg>
            </div>
          </Grid>
        )}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          lx={6}
          style={{ padding: "33px 5%" }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            lx={12}
            style={{
              width: "100%",
              padding: "20px 10%",
              border: "1px #C4C4C4 solid",
              borderRadius: "20px",
            }}
          >
            <Box style={{ height: "350px" }}>
              <div className="total">
                {cart.length !== 0 && cart.forEach((i) => (total += i.price))}
                <h3>Total:{total}USD</h3>
                {console.log(cart)}
              </div>
            </Box>
            <Button
              style={{
                width: "90%",
                padding: "5px 0px",
                backgroundColor: "#323232",
                color: "white",
              }}
            >
              Check Out
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cart;
