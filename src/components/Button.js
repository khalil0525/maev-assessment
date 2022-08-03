import { Flex, Box, Text, Button, IconButton, Grid } from "theme-ui";
import { PrimaryText } from "./Text";
import { ArrowIcon } from "./Icon";
import { tokens } from "../styles/theme";

export const PrimaryButton = (props) => {
  return (
    <IconButton
      variant="primary"
      sx={{
        width: "300px",
        height: "60px",
        cursor: "pointer",
        lineHeight: "18px",
        span: {
          fontWeight: 400,
        },
        "&:hover": {
          bg: "#0E6966",
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <PrimaryText>{props.text}</PrimaryText>
        <ArrowIcon />
      </Flex>
    </IconButton>
  );
};

export const SecondaryButton = (props) => {
  return (
    <IconButton
      variant="secondary"
      sx={{
        width: "300px",
        height: "60px",
        borderRadius: "0px",
        cursor: "pointer",
        lineHeight: "18px",
        span: {
          fontWeight: 400,
        },
        "&:hover": {
          color: tokens.colors.textSecondary,
          bg: "#0E6966",
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <PrimaryText>{props.text}</PrimaryText>
        <ArrowIcon />
      </Flex>
    </IconButton>
  );
};

export const TertiaryButton = (props) => {
  return (
    <Button
      variant="tertiary"
      sx={{
        cursor: "pointer",
        lineHeight: "18px",
        span: {
          fontWeight: 400,
        },
        "&:hover": {
          textDecorationColor: "#0E6966",
          border: 0,
          span: {
            color: "#0E6966",
          },
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          color: "inherit",
        }}
      >
        <PrimaryText>{props.text}</PrimaryText>
      </Flex>
    </Button>
  );
};

export const AddToCartButton = (props) => {
  return (
    <IconButton
      variant="primary"
      sx={{
        width: "359px",
        height: "60px",
        cursor: "pointer",
        lineHeight: "18px",
        span: {
          fontWeight: 400,
        },
        "&:hover": {
          bg: "#0E6966",
        },
      }}
    >
      <Grid gap={2} columns={[2, "1fr 2fr"]}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "5px",
          }}
        >
          <PrimaryText
            sx={{ span: { fontSize: "16px", fontWeight: 400 } }}
          >{`$${props.price}`}</PrimaryText>
          <PrimaryText
            sx={{ span: { fontSize: "14px" } }}
          >{`$${props.costPerMeal} per meal`}</PrimaryText>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "12px",
          }}
        >
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <PrimaryText sx={{ span: { fontSize: "16px", fontWeight: 400 } }}>
              {props.action}
            </PrimaryText>
            <ArrowIcon />
          </Flex>

          <PrimaryText sx={{ span: { fontSize: "14px", fontWeight: 400 } }}>
            {props.subtext}
          </PrimaryText>
        </Flex>
      </Grid>
    </IconButton>
  );
};
