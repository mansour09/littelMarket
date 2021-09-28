import React from "react";
import jungle_pic from "../download.jpg";
function Homebody() {
  return (
    <>
      <div className="bg-white container shadow rounded mb-5">
        <h3>موضوع متن</h3>
        <hr />
        <div className="d-flex">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد
          </p>
          <img
            className="rounded"
            width="30%"
            height="30%"
            src={jungle_pic}
            alt="عکس"
          />
        </div>
        <div className="mt-5">
          <h3>ویژگی های محصول :</h3>
          <div className="mr-3 mt-5">
            <ul>
              <li>قیمت به صرفه</li>
              <li>طول عمر بالا</li>
              <li>سلامت و دارای گواهی</li>
              <li>ارزش غذایی بالا</li>
            </ul>
          </div>
        </div>

        <div className="mt-5 d-flex flex-column">
          <h3>برچسب ها :</h3>
          <div className="bg-green rounded p-1 in-shadow ml-auto pl-3">
            <a href="/#" className="btn bg-s-green rounded shadow mr-1 ml-3">
              سلامت
            </a>
            <a href="/#" className="btn bg-s-green rounded shadow mr-1 ml-3">
              گیاه
            </a>
            <a href="/#" className="btn bg-s-green rounded shadow mr-1 ml-3">
              دارویی
            </a>
          </div>
        </div>
        <div className="mt-5 d-flex pb-2">
          <div className="bg-s-green in-shadow rounded ml-auto pl-2">
            <h5>قیمت محصول : 320 هزار تومان</h5>
          </div>
          <a href="/products" className="btn bg-s-green shadow mr-4">
            خرید محصول <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Homebody;
