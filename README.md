<div style="text-align: center;">

# Digital Velocity - Tech Test

</div>
<div style="width:200px; margin: auto;">

![Alt text](https://www.digital-velocity.co.uk/static/logo-no-text-633f9951a41d341e2633ed2636d42039.png "Digital Velocity")

</div>

## Welcome, Developer!

In this test, you'll be working with Shopify's Storefront API and Remix to build a functional e-commerce site. Your task is to style a Product Lister Page and create a Cart system that integrates seamlessly with Shopify’s backend.

## Challenge Overview

Here’s what you need to accomplish:

1. **Build a persistent Cart**: Create a cart using Shopify's Storefront API that persists across browser refreshes. Ensure the cart retains its state so users don't lose their selections when they refresh the page.

2. **Synchronize Product Card Quantities**: Each product card should accurately reflect the quantity of items currently in the cart. If a product is in the cart, the quantity on the product card should match the number of line items in the cart.

## Key Tasks

-   **Implement Cart Persistence**: Utilize the Storefront API to maintain the cart's state even after a page refresh.
-   **Update Product Card Quantities**: Ensure that the product cards display the correct quantity based on the items in the cart.

## Known Issues to Fix

1. **Cart Icon Counter**: The cart icon currently lacks a counter to show the number of items. Implement this feature to match the design specifications.

2. **Cart Drawer**: The cart icon should open a cart drawer when clicked. Make sure this functionality is correctly implemented.

3. **Pricing Formatting**: Pricing throughout the application is not formatted correctly. Adjust the formatting to meet the design requirements and improve readability.

## Getting Started

To get started with this challenge, follow these steps:

1. Fork this repository and navigate into the project directory.
2. Run the following commands:

```
npm ci
npm run dev
```

The environment variables needed to connect to Shopify have already been included in the .env file, so you're all set to begin debugging and improving the project right away!

##### Good Luck!

If you run into any issues or have any questions, feel free to reach out to a.pearson@digital-velocity.co.uk
