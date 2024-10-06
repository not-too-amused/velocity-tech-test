const CART_LINE_FIELDS = `#graphql
fragment CartLineFields on CartLine {
  id
  quantity
  merchandise {
    ... on ProductVariant {
      id
      title
      availableForSale
      product {
        id
        title
        featuredImage {
          url
          altText
        }
      }
      price {
        amount
        currencyCode
      }
    }
  }
  attributes {
    key
    value
  }
}
`;

const CART_FIELDS = `#graphql
fragment CartFields on Cart {
  id
  totalQuantity
  lines(first: 100) {
    edges {
      node {
        ...CartLineFields
      }
    }
  }
}

${CART_LINE_FIELDS}
`;

export const cartCreate = `#graphql
    mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
            cart {
                ...CartFields
            }
        }
    }
    ${CART_FIELDS}
`;

export const cartQuery = `#graphql
    query cartQuery($cartId: ID!) {
        cart(id: $cartId) {
            ...CartFields
        }
    }
    ${CART_FIELDS}
`;

export const cartLinesAdd = `#graphql
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
                ...CartFields
            }
            userErrors {
                field
                message
            }
        }
    }
    ${CART_FIELDS}
`;

export const cartLinesUpdate = `#graphql
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
        cartLinesUpdate(cartId: $cartId, lines: $lines) {
            cart {
                ...CartFields
            }
            userErrors {
            field
            message
            }
        }
    }
    ${CART_FIELDS}
`;

export const cartLinesRemove = `#graphql
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
            cart {
                ...CartFields
            }
            userErrors {
                field
                message
            }
        }
    }
    ${CART_FIELDS}
`;
