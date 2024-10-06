/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as StorefrontTypes from './storefront.types';

export type CartLineFieldsFragment = (
  Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
  & { merchandise: (
    Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
    & { product: (
      Pick<StorefrontTypes.Product, 'id' | 'title'>
      & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
    ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
  ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
);

export type CartFieldsFragment = (
  Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
  & { lines: { edges: Array<{ node: (
        Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
        & { merchandise: (
          Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
          & { product: (
            Pick<StorefrontTypes.Product, 'id' | 'title'>
            & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
          ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
        ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
      ) }> } }
);

export type CartCreateMutationVariables = StorefrontTypes.Exact<{
  input: StorefrontTypes.CartInput;
}>;


export type CartCreateMutation = { cartCreate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { product: (
                Pick<StorefrontTypes.Product, 'id' | 'title'>
                & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
              ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
            ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
          ) }> } }
    )> }> };

export type CartQueryQueryVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
}>;


export type CartQueryQuery = { cart?: StorefrontTypes.Maybe<(
    Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
    & { lines: { edges: Array<{ node: (
          Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
          & { merchandise: (
            Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
            & { product: (
              Pick<StorefrontTypes.Product, 'id' | 'title'>
              & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
            ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
          ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
        ) }> } }
  )> };

export type CartLinesAddMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineInput> | StorefrontTypes.CartLineInput;
}>;


export type CartLinesAddMutation = { cartLinesAdd?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { product: (
                Pick<StorefrontTypes.Product, 'id' | 'title'>
                & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
              ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
            ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
          ) }> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

export type CartLinesUpdateMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lines: Array<StorefrontTypes.CartLineUpdateInput> | StorefrontTypes.CartLineUpdateInput;
}>;


export type CartLinesUpdateMutation = { cartLinesUpdate?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { product: (
                Pick<StorefrontTypes.Product, 'id' | 'title'>
                & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
              ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
            ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
          ) }> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

export type CartLinesRemoveMutationVariables = StorefrontTypes.Exact<{
  cartId: StorefrontTypes.Scalars['ID']['input'];
  lineIds: Array<StorefrontTypes.Scalars['ID']['input']> | StorefrontTypes.Scalars['ID']['input'];
}>;


export type CartLinesRemoveMutation = { cartLinesRemove?: StorefrontTypes.Maybe<{ cart?: StorefrontTypes.Maybe<(
      Pick<StorefrontTypes.Cart, 'id' | 'totalQuantity'>
      & { lines: { edges: Array<{ node: (
            Pick<StorefrontTypes.CartLine, 'id' | 'quantity'>
            & { merchandise: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale'>
              & { product: (
                Pick<StorefrontTypes.Product, 'id' | 'title'>
                & { featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>> }
              ), price: Pick<StorefrontTypes.MoneyV2, 'amount' | 'currencyCode'> }
            ), attributes: Array<Pick<StorefrontTypes.Attribute, 'key' | 'value'>> }
          ) }> } }
    )>, userErrors: Array<Pick<StorefrontTypes.CartUserError, 'field' | 'message'>> }> };

export type ProductFieldsFragment = (
  Pick<StorefrontTypes.Product, 'id' | 'title'>
  & { variants: { edges: Array<{ node: (
        Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale' | 'quantityAvailable' | 'currentlyNotInStock'>
        & { price: Pick<StorefrontTypes.MoneyV2, 'amount'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
      ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, options: Array<(
    Pick<StorefrontTypes.ProductOption, 'name' | 'id'>
    & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'name' | 'id'>> }
  )> }
);

export type GetAllProductsQueryVariables = StorefrontTypes.Exact<{ [key: string]: never; }>;


export type GetAllProductsQuery = { products: { edges: Array<{ node: (
        Pick<StorefrontTypes.Product, 'id' | 'title'>
        & { variants: { edges: Array<{ node: (
              Pick<StorefrontTypes.ProductVariant, 'id' | 'title' | 'availableForSale' | 'quantityAvailable' | 'currentlyNotInStock'>
              & { price: Pick<StorefrontTypes.MoneyV2, 'amount'>, image?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, selectedOptions: Array<Pick<StorefrontTypes.SelectedOption, 'name' | 'value'>> }
            ) }> }, featuredImage?: StorefrontTypes.Maybe<Pick<StorefrontTypes.Image, 'url' | 'altText'>>, options: Array<(
          Pick<StorefrontTypes.ProductOption, 'name' | 'id'>
          & { optionValues: Array<Pick<StorefrontTypes.ProductOptionValue, 'name' | 'id'>> }
        )> }
      ) }> } };

interface GeneratedQueryTypes {
  "#graphql\n    query cartQuery($cartId: ID!) {\n        cart(id: $cartId) {\n            ...CartFields\n        }\n    }\n    #graphql\nfragment CartFields on Cart {\n  id\n  totalQuantity\n  lines(first: 100) {\n    edges {\n      node {\n        ...CartLineFields\n      }\n    }\n  }\n}\n\n#graphql\nfragment CartLineFields on CartLine {\n  id\n  quantity\n  merchandise {\n    ... on ProductVariant {\n      id\n      title\n      availableForSale\n      product {\n        id\n        title\n        featuredImage {\n          url\n          altText\n        }\n      }\n      price {\n        amount\n        currencyCode\n      }\n    }\n  }\n  attributes {\n    key\n    value\n  }\n}\n\n\n": {return: CartQueryQuery, variables: CartQueryQueryVariables},
  "#graphql\n    query getAllProducts {\n        products(first: 100) {\n            edges {\n                node {\n                    ...ProductFields\n                }\n            }\n        }\n    }\n    #graphql\nfragment ProductFields on Product {\n    id\n    title\n    variants(first: 100, sortKey: POSITION) {\n        edges {\n            node {\n                id\n                title\n                availableForSale\n                quantityAvailable\n                price {\n                    amount\n                }\n                image {\n                    url\n                    altText\n                }\n                currentlyNotInStock\n                selectedOptions {\n                    name\n                    value\n                }\n            }\n        }\n    }\n    featuredImage {\n        url\n        altText\n    }\n    options(first: 100) {\n        optionValues {\n            name\n            id\n        }\n        name\n        id\n    }\n}\n\n": {return: GetAllProductsQuery, variables: GetAllProductsQueryVariables},
}

interface GeneratedMutationTypes {
  "#graphql\n    mutation cartCreate($input: CartInput!) {\n        cartCreate(input: $input) {\n            cart {\n                ...CartFields\n            }\n        }\n    }\n    #graphql\nfragment CartFields on Cart {\n  id\n  totalQuantity\n  lines(first: 100) {\n    edges {\n      node {\n        ...CartLineFields\n      }\n    }\n  }\n}\n\n#graphql\nfragment CartLineFields on CartLine {\n  id\n  quantity\n  merchandise {\n    ... on ProductVariant {\n      id\n      title\n      availableForSale\n      product {\n        id\n        title\n        featuredImage {\n          url\n          altText\n        }\n      }\n      price {\n        amount\n        currencyCode\n      }\n    }\n  }\n  attributes {\n    key\n    value\n  }\n}\n\n\n": {return: CartCreateMutation, variables: CartCreateMutationVariables},
  "#graphql\n    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {\n        cartLinesAdd(cartId: $cartId, lines: $lines) {\n            cart {\n                ...CartFields\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n    #graphql\nfragment CartFields on Cart {\n  id\n  totalQuantity\n  lines(first: 100) {\n    edges {\n      node {\n        ...CartLineFields\n      }\n    }\n  }\n}\n\n#graphql\nfragment CartLineFields on CartLine {\n  id\n  quantity\n  merchandise {\n    ... on ProductVariant {\n      id\n      title\n      availableForSale\n      product {\n        id\n        title\n        featuredImage {\n          url\n          altText\n        }\n      }\n      price {\n        amount\n        currencyCode\n      }\n    }\n  }\n  attributes {\n    key\n    value\n  }\n}\n\n\n": {return: CartLinesAddMutation, variables: CartLinesAddMutationVariables},
  "#graphql\n    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {\n        cartLinesUpdate(cartId: $cartId, lines: $lines) {\n            cart {\n                ...CartFields\n            }\n            userErrors {\n            field\n            message\n            }\n        }\n    }\n    #graphql\nfragment CartFields on Cart {\n  id\n  totalQuantity\n  lines(first: 100) {\n    edges {\n      node {\n        ...CartLineFields\n      }\n    }\n  }\n}\n\n#graphql\nfragment CartLineFields on CartLine {\n  id\n  quantity\n  merchandise {\n    ... on ProductVariant {\n      id\n      title\n      availableForSale\n      product {\n        id\n        title\n        featuredImage {\n          url\n          altText\n        }\n      }\n      price {\n        amount\n        currencyCode\n      }\n    }\n  }\n  attributes {\n    key\n    value\n  }\n}\n\n\n": {return: CartLinesUpdateMutation, variables: CartLinesUpdateMutationVariables},
  "#graphql\n    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {\n        cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {\n            cart {\n                ...CartFields\n            }\n            userErrors {\n                field\n                message\n            }\n        }\n    }\n    #graphql\nfragment CartFields on Cart {\n  id\n  totalQuantity\n  lines(first: 100) {\n    edges {\n      node {\n        ...CartLineFields\n      }\n    }\n  }\n}\n\n#graphql\nfragment CartLineFields on CartLine {\n  id\n  quantity\n  merchandise {\n    ... on ProductVariant {\n      id\n      title\n      availableForSale\n      product {\n        id\n        title\n        featuredImage {\n          url\n          altText\n        }\n      }\n      price {\n        amount\n        currencyCode\n      }\n    }\n  }\n  attributes {\n    key\n    value\n  }\n}\n\n\n": {return: CartLinesRemoveMutation, variables: CartLinesRemoveMutationVariables},
}
declare module '@shopify/storefront-api-client' {
  type InputMaybe<T> = StorefrontTypes.InputMaybe<T>;
  interface StorefrontQueries extends GeneratedQueryTypes {}
  interface StorefrontMutations extends GeneratedMutationTypes {}
}
