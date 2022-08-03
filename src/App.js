import "./App.css";
import { Box, Button, Flex, ThemeProvider } from "theme-ui";
import { Frame } from "./components/Frame";
import { theme } from "./styles/theme";
import { PrimaryHeader } from "./components/Text";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  AddToCartButton,
} from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        my={6}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PrimaryHeader>Component Testing</PrimaryHeader>
        <Flex
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Frame>
            {/* Put your components in here */}
            {/* Primary */}
            <Box my={2}>
              <PrimaryButton text="Add to Cart" />
            </Box>
            {/* Secondary */}
            <Box my={2}>
              <SecondaryButton text="CTA Copy Area" />
            </Box>
            {/* Tertiary */}
            <Box my={2}>
              <TertiaryButton text="See Details" />
            </Box>
            {/* Add To Cart */}
            <Box my={2}>
              <AddToCartButton
                price="149"
                costPerMeal="2.48"
                action="Add to Cart"
                subtext="Subscribe now, cancel anytime"
              />
            </Box>
          </Frame>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
