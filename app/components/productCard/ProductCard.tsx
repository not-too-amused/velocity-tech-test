import "./ProductCard.css";

import { ProductFieldsFragment } from "types/storefront.generated";
import QuantitySelector from "../quantitySelector/QuantitySelector";

const ProductCard = ({ product }: { product: ProductFieldsFragment }) => {
  const initialVariant =
    product.variants.edges.length > 0 ? product.variants.edges[0].node.id : "";

  return (
    <div className="product__card">
      <div className="product__card-tags">
        <div className="product__card-tags-left">
          <div className="product__card-tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g clipPath="url(#clip0_318_307)">
                <path
                  d="M12.3203 0.534457H11.3416C11.293 0.229053 11.0362 0 10.7238 0H3.27615C2.97075 0 2.70699 0.229053 2.66534 0.534457H1.68666C0.756569 0.534457 0 1.28409 0 2.21418V3.27615C0 4.78929 1.2355 6.02479 2.74864 6.02479H3.00545C3.42885 7.03818 4.22013 7.84333 5.21963 8.30144L4.87258 10.6336C3.94943 10.6336 3.19286 11.3902 3.19286 12.3203V13.3823C3.19286 13.7224 3.4705 14 3.81061 14H10.1963C10.5364 14 10.8141 13.7224 10.8141 13.3823V12.3203C10.8141 11.3902 10.0575 10.6406 9.13436 10.6336L8.78037 8.30144C9.78681 7.84333 10.5711 7.03818 11.0015 6.02479H11.2583C12.7714 6.02479 14 4.78929 14 3.27615V2.21418C14 1.28409 13.2504 0.534457 12.3203 0.534457ZM1.68666 1.76996H2.6584V4.78235C1.86713 4.7407 1.2355 4.08131 1.2355 3.27615V2.21418C1.2355 1.97124 1.43679 1.76996 1.68666 1.76996ZM9.12742 11.8761C9.37729 11.8761 9.57858 12.0704 9.57858 12.3203V12.7645H4.42836V12.3203C4.42836 12.0704 4.62965 11.8761 4.87258 11.8761H9.12742ZM6.12196 10.6336L6.42043 8.64155C6.80912 8.69707 7.19782 8.69707 7.57957 8.64155L7.87804 10.6336H6.12196ZM10.1061 4.33813C10.1061 6.05255 8.71096 7.44769 7.00347 7.44769C5.29598 7.44769 3.90084 6.05255 3.90084 4.33813V1.2355H10.1061V4.33813ZM12.7645 3.27615C12.7645 4.08131 12.1329 4.7407 11.3416 4.78235V1.76996H12.3203C12.5632 1.76996 12.7645 1.97124 12.7645 2.21418V3.27615Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_318_307">
                  <rect width="14" height="14" fill="currentColor" />
                </clipPath>
              </defs>
            </svg>
            <span>New</span>
          </div>
        </div>
        <div className="product__card-tags-right">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
            >
              <path
                d="M13.9999 21.3731C13.7871 21.3731 13.5743 21.3021 13.3919 21.1704C13.2196 21.0387 9.07491 17.9175 7.50418 15.8907C6.1868 14.1781 5.62944 12.1919 6.02466 10.5806C6.32867 9.31393 7.16977 8.32082 8.45675 7.72293C10.3416 6.8413 12.5305 7.23651 13.9999 8.59443C15.4693 7.22638 17.6582 6.8413 19.5431 7.72293C20.83 8.32082 21.6711 9.31393 21.9751 10.5806C22.3704 12.202 21.813 14.1883 20.4956 15.8907C18.9249 17.9276 14.7802 21.0387 14.6079 21.1704C14.4255 21.3021 14.2127 21.3731 13.9999 21.3731ZM10.5646 9.27339C10.1592 9.27339 9.7336 9.3646 9.30799 9.55714C8.58849 9.89155 8.14261 10.3982 7.9906 11.0569C7.74739 12.0703 8.17301 13.4485 9.10531 14.6544C10.1795 16.0427 12.8041 18.1607 13.9999 19.093C15.1957 18.1607 17.8203 16.0529 18.8945 14.6544C19.8268 13.4485 20.2524 12.0703 20.0092 11.0569C19.8471 10.3982 19.4012 9.89155 18.6918 9.55714C17.1211 8.82751 15.5504 9.6078 14.8613 10.7124C14.4965 11.3103 13.5033 11.3103 13.1385 10.7124C12.642 9.90168 11.6691 9.27339 10.5646 9.27339Z"
                fill="currentColor"
              />
            </svg>
            Favourite
          </button>
        </div>
      </div>
      <div className="product__card-image">
        <img
          src={product.featuredImage?.url}
          alt={product.featuredImage?.altText ?? ""}
        />
      </div>
      <div className="product__card-pi">
        <h3>{product.title}</h3>
        <p>{product.variants.edges[0].node.title}</p>
      </div>
      <hr />
      <div className="product__card-si">
        <QuantitySelector variantId={initialVariant} />
        <div className="product__card-si-price">
          {product.variants.edges[0]?.node.price.amount}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
