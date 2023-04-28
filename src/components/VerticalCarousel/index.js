import React from "react";
import "./VerticalCarousel.css";

export const VerticalCarousel = ({ images }) => {
//   const images = [
//     {
//       images: [
//         "https://www.pricerunner.se/product/150x150/1788138987/Neff-T17TT76N1.jpg?ph=true",
//         "https://www.pricerunner.se/product/150x150/3002387244/Neff-KI1812FF0-Integrerad.jpg?ph=true",
//         "https://www.pricerunner.se/product/150x150/1554122146/Neff-C17GR00N0-Rostfritt-staal.jpg?ph=true",
//       ],
//     },
//     {
//       images: [
//         "https://www.pricerunner.se/product/150x150/1788138987/Neff-T17TT76N1.jpg?ph=true",
//         "https://www.pricerunner.se/product/150x150/3002387244/Neff-KI1812FF0-Integrerad.jpg?ph=true",
//         "https://www.pricerunner.se/product/150x150/1554122146/Neff-C17GR00N0-Rostfritt-staal.jpg?ph=true",
//       ],
//     },
//   ];
  return (
    <div className="TqLWKQ5WSi pr-zi4fgm" style={{ background: "#f4f1e7" }}>
      <div className="pr-1wvi6jk">
        <div className="OrxvcPYXbo pr-lqwo05">
          {images.map((data, index) => (
            <React.Fragment key={index}>
              <div className="UsiG9bXE2_ pr-bq2b8z">
                <a className="pr-noof45" href="#">
                  <div className="O1_JKDC4AK BdrF90TR9L uCtpXdkvvj pr-hxaf01">
                    <div className="pr-15o1nmi">
                      <div className="cHORm9q4_D pr-1cpzyzc">
                        <img
                          data-testid="productImage"
                          className="xUAmIg3IAt pr-0"
                          alt="Produktbild"
                          src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="NKJAPDB50i pr-bq2b8z">
                <a className="pr-noof45" href="#">
                  <div className="O1_JKDC4AK BdrF90TR9L uCtpXdkvvj pr-hxaf01">
                    <div className="pr-15o1nmi">
                      <div className="cHORm9q4_D pr-1cpzyzc">
                        <img
                          data-testid="productImage"
                          className="xUAmIg3IAt pr-0"
                          alt="Produktbild"
                          src={process.env.PUBLIC_URL + `/images/img${images.length - index}.jpg`}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="UsiG9bXE2_ pr-bq2b8z">
                <a className="pr-noof45" href="#">
                  <div className="O1_JKDC4AK BdrF90TR9L uCtpXdkvvj pr-hxaf01">
                    <div className="pr-15o1nmi">
                      <div className="cHORm9q4_D pr-1cpzyzc">
                        <img
                          data-testid="productImage"
                          className="xUAmIg3IAt pr-0"
                          alt="Produktbild"
                          src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
