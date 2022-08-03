import { Flex, Button, IconButton, Grid, Spinner } from "theme-ui";
import { PrimaryText } from "./Text";
import { ArrowIcon, CheckMarkIcon } from "./Icon";
import { tokens } from "../styles/theme";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleButtonClick = () => {
    if (!isAdded) {
      setIsLoading(true);
      setIsAdded(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsAdded(true);

        setTimeout(() => {
          setIsAdded(false);
        }, 3000);
      }, 3000);
    }
  };

  return (
    <IconButton
      variant="primary"
      sx={{
        width: "359px",
        height: "60px",
        cursor: "pointer",
        lineHeight: "18px",
        span: {
          color: isAdded ? "#ffffff" : "",
        },
        svg: {
          color: isAdded ? "#ffffff" : "",
        },
        bg: isAdded ? "#0E6966" : "#e5ff00",
        "&:hover": {
          bg: "#0E6966",
        },
      }}
      onClick={handleButtonClick}
    >
      <Grid gap={5} columns={[2, "1fr 2fr"]}>
        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",

            "span:first-child": { fontSize: "16px", fontWeight: 400 },
            "span:last-child": { fontSize: "14px", fontWeight: 300 },
          }}
        >
          <PrimaryText>{`$${props.price}`}</PrimaryText>
          <PrimaryText
            sx={{ span: { fontSize: "14px" } }}
          >{`$${props.costPerMeal} per meal`}</PrimaryText>
        </Flex>

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",

            "span:first-child": { fontSize: "16px", fontWeight: 400 },
            "span:last-child": { fontSize: "14px", fontWeight: 400 },
          }}
        >
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <PrimaryText>{props.action}</PrimaryText>
            <ArrowIcon />
          </Flex>
          <PrimaryText>{props.subtext}</PrimaryText>
        </Flex>
      </Grid>

      {(isLoading || isAdded) && (
        <Flex
          sx={{
            position: "absolute",
            width: "359px",
            height: "60px",
            backgroundColor: "rgba(14, 105, 102, 0.8)",
          }}
        >
          <Flex
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            {isLoading ? (
              <Spinner size="40" strokeWidth="2" />
            ) : (
              <Flex
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CheckMarkIcon />
                <PrimaryText>Added</PrimaryText>
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </IconButton>
  );
};
