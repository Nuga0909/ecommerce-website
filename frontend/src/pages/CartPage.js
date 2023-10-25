import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../state/red.js";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, product) => {
    return total + product.count * product.price;
  }, 0);

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="max(400px, 30%)"
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h5">SHOPPING BAG ({cart.length})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.length > 0 ? (
              cart.map((product) => {
                // Compute total price for each individual product based on count
                const productTotalPrice = product.count * product.price;
                return (
                  <Box key={product._id}>
                    <FlexBox p="15px 0">
                      <Box flex="1 1 40%">
                        <img
                          alt={product.productName}
                          width="123px"
                          height="164px"
                          src={`http://localhost:3000/uploads/${product.imageName}`}
                        />
                      </Box>
                      <Box flex="1 1 60%">
                        <FlexBox mb="5px">
                          <Typography fontWeight="bold">
                            {product.productName}
                          </Typography>
                          <IconButton
                            onClick={() =>
                              dispatch(removeFromCart({ _id: product._id }))
                            }
                          >
                            <CloseIcon />
                          </IconButton>
                        </FlexBox>
                        <Typography>{product.description}</Typography>
                        <FlexBox m="15px 0">
                          <Box
                            display="flex"
                            alignItems="center"
                            border={`1.5px solid "#cfcdcd"`}
                          >
                            <IconButton
                              onClick={() =>
                                dispatch(decreaseCount({ _id: product._id }))
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <Typography>{product.count}</Typography>
                            <IconButton
                              onClick={() =>
                                dispatch(increaseCount({ _id: product._id }))
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                          <Typography fontWeight="bold">
                            ${productTotalPrice}{" "}
                            {/* Displaying computed total price here */}
                          </Typography>
                        </FlexBox>
                      </Box>
                    </FlexBox>
                    <Divider />
                  </Box>
                );
              })
            ) : (
              <><Typography
                  variant="h4"
                  align="center"
                  style={{ margin: "100px 0px", fontSize: "50px" }}
                >
                  Your cart is empty!
                </Typography><Divider /></>
            )}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: "#333333",
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "20px 40px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
