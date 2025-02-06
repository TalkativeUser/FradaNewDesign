"use client";
import { Container } from "react-bootstrap";
import "./SingleProductDescription.css";
import { useState } from "react";
const SingleProductDescription = ({ descriptions }) => {
  const [activeLink, setActiveLink] = useState(
    descriptions?.productDescription&& descriptions.productDescription?.length > 0?0:descriptions?.additionalInfo?1:descriptions?.trademarkInfo&&2
  );
  return (
    <>
      {descriptions!=null ? (
        <Container>
          <div className="product-description-container">
            <ul className="list-links list-unstyled d-flex flex-row-reverse align-items-center gap-3 px-1">
              {descriptions.productDescription &&
                descriptions.productDescription.length > 0 && (
                  <li
                    className={`p-2 rounded ${activeLink == 0 && "active"}`}
                    onClick={() => setActiveLink(0)}
                  >
                    وصف المنتج
                  </li>
                )}
              {descriptions.additionalInfo && (
                <li
                  className={`p-2 rounded ${activeLink == 1 && "active"}`}
                  onClick={() => setActiveLink(1)}
                >
                  معلومات إضافية
                </li>
              )}

              {descriptions.trademarkInfo && (
                <li
                  className={`p-2 rounded ${activeLink == 2 && "active"}`}
                  onClick={() => setActiveLink(2)}
                >
                  معلومات العلامة التجارية
                </li>
              )}
            </ul>
            <div className="content">
              {activeLink == 0 ? (
                <div className="product-desc">
                  {descriptions.productDescription &&
                    descriptions.productDescription.length > 0 &&
                    descriptions.productDescription?.map((desc, index) => (
                      <div className="product-desc-content" key={index}>
                        {desc?.Title && <h6>{desc?.Title}</h6>}
                        {desc?.Description && <p>{desc?.Description}</p>}
                      </div>
                    ))}
                </div>
              ) : activeLink == 1 ? (
                <div className="product-additional-info">
                  {descriptions.additionalInfo}
                </div>
              ) : (
                <div className="product-trademark">
                  {descriptions.trademarkInfo}
                </div>
              )}
            </div>
          </div>
        </Container>
      ) : null}
    </>
  );
};
export default SingleProductDescription;
