import React from "react";
import Swiper from "react-id-swiper";
import jungle_pic from "../download.jpg";
import forest_pic from "../forest.jpg";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }
  //for go nex swip
  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }
  //for prev swip
  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    //our swip options
    const params = {
      pagination: ".swiper-pagination",
      paginationClickable: true,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      spaceBetween: 30,
      runCallbacksOnInit: true,
      onInit: (swiper) => {
        this.swiper = swiper;
      },
    };

    return (
      <div className="container mt-3 mb-3">
        <Swiper {...params}>
          <div className="d-flex justify-content-center">
            <div class="card text-left ml-3 shadow">
              <img
                style={{height:"200px",width:"100%"}}
                className="card-img-top rounded"
                src={jungle_pic}
                alt=""
              />
              <div className="carousel-caption mb-0">
                <h3 style={{ fontSize: "100%" }}>گیاهان دارویی</h3>
                <p style={{ fontSize: "60%" }}>برای درمان طبع و مشکلات گوارش</p>
              </div>
            </div>

            <div className="card text-left shadow">
              <img style={{height:"200px",width:"100%"}} className="card-img-top rounded" src={forest_pic} alt="" />
              <div className="carousel-caption mb-0">
                <h3 style={{ fontSize: "100%" }}>طبیعت گردی</h3>
                <p style={{ fontSize: "70%" }}>
                  با گیاهان دارویی بیشتر اشنا شوید (خواص)
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div class="card text-left ml-3 shadow">
              <img
                style={{height:"200px",width:"100%"}}
                className="card-img-top rounded"
                src={jungle_pic}
                alt=""
              />
              <div className="carousel-caption mb-0">
                <h3 style={{ fontSize: "100%" }}>گیاهان دارویی</h3>
                <p style={{ fontSize: "60%" }}>برای درمان طبع و مشکلات گوارش</p>
              </div>
            </div>

            <div className="card text-left shadow">
              <img style={{height:"200px",width:"100%"}} className="card-img-top rounded" src={forest_pic} alt="" />
              <div className="carousel-caption mb-0">
                <h3 style={{ fontSize: "100%" }}>طبیعت گردی</h3>
                <p style={{ fontSize: "70%" }}>
                  با گیاهان دارویی بیشتر اشنا شوید (خواص)
                </p>
              </div>
            </div>
          </div>
        </Swiper>
        <div className="d-flex justify-content-between">
          <button
            className="btn rounded-circle bg-white order-1"
            onClick={this.goNext}
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button
            className="btn rounded-circle bg-white order-0"
            onClick={this.goPrev}
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}
