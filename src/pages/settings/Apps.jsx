import React from "react";
import Card from "../../../components/Card";
import MenuActionBtn from "../../../components/MenuActionBtn";

export default function Apps() {
  return (
    <main className="container mt-4 mb-5">
      <div className="row mb-2">
        <div className="col-12">
          <Card>
            <div className="top-container">
              <h1 className="blue-h2">
                <span className="titleIcon material-symbols-rounded">
                  dashboard_customize
                </span>
                Apps and Websites
              </h1>
              <p id="para" className="subtitle mb-0">
                Take a look at our other great apps, services, and websites
                below.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="row g-2">
        {/*Left col*/}
        <div className="col-12 col-md-6">
          <Card>
            <h2 className="card-title">Recommended</h2>
            <MenuActionBtn
              icon="music_note"
              text="HiOSMusic"
              className="full"
              onClick={() => {
                window.location.href = "https://github.com/aarjay123/hiosmusic";
                return null;
              }}
            />
            <div className="infoBubble">
              <p
                style={{ fontSize: "14px", margin: "8px 0 0 0", opacity: 0.8 }}
              >
                This is our brand new music app. Your Music, Your Vibe.
              </p>
            </div>
          </Card>
        </div>

        <div className="col-12 col-md-6">
          <Card>
            <MenuActionBtn
              icon="code"
              text="Other software developed by nuggetdev"
              className="full"
              onClick={() => {
                window.location.href =
                  "https://hienterprises.github.io/nuggetdev/home";
                return null;
              }}
            />
            <div className="infoBubble">
              <p
                style={{ fontSize: "14px", margin: "8px 0 0 0", opacity: 0.8 }}
              >
                Take a look at other great apps, software, and services also
                developed by nuggetdev!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
