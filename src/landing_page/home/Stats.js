import React from "react";
function Stats() {
  return (
    <div className="container  p-3">
      <div className="row p-5 ">
        <div className="col-6 p-5">
          <h1 className="fs-2">Trust with Confidence</h1>

          <h2 className="mt-4 fs-3">Customer-first always</h2>
          <p style={{ width: "75%" }} className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-3">No spam or gimmicks</h2>
          <p style={{ width: "75%" }} className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href=""> Our philosophies.</a>{" "}
          </p>
          <h2 className="fs-3">The Zerodha universe</h2>
          <p style={{ width: "75%" }} className="text-muted">
            More than just a broker. We have built a complete ecosystem of
            products and services around investing and trading to help you
            become a better investor.{" "}
          </p>
          <h2 className="fs-3">Do better with money</h2>
          <p style={{ width: "75%" }} className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="col-6 p-5">
          <img
            src="/Media/image/ecosystem.png"
            alt=""
            style={{ width: "100%" }}
          />

          <div className="text-cneter">
            <a href="" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products <i class="fa-solid fa-arrow-right"></i>{" "}
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try kit <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
