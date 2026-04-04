import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import MenuActionBtn from "../../components/MenuActionBtn";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <main className="container mt-4 mb-5">
      <div className="row mb-2">
        <div className="col-12">
          <Card>
            <div className="top-container">
              <h1 className="blue-h2">
                <span className="titleIcon material-symbols-rounded">
                  settings
                </span>
                Settings
              </h1>
              <p id="para" className="subtitle mb-0">
                Choose a settings category from below.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="row g-2">
        {/*Left col*/}
        <div className="col-12 col-md-6">
          <Card>
            <h2 className="card-title">Customise HiOS</h2>
            <MenuActionBtn
              icon="palette"
              text="Appearance"
              className="full"
              onClick={() => navigate("/settings/appearance")}
            />
          </Card>

          <Card className="mt-2">
            <h2 className="card-title">General</h2>
            <MenuActionBtn
              icon="dashboard_customize"
              text="Apps and Websites"
              className="full"
              onClick={() => navigate("/settings/apps")}
            />
          </Card>
        </div>

        {/*Right col*/}
        <div className="col-12 col-md-6">
          <Card>
            <h2 className="card-title">More</h2>
            <MenuActionBtn
              icon="info"
              text="About HiOS"
              className="joinTop"
              onClick={() => navigate("/settings/about")}
            />

            <MenuActionBtn
              icon="security"
              text="Privacy Policy"
              className="joinBottom"
              onClick={() => navigate("/settings/privacy")}
            />
          </Card>
        </div>
      </div>
    </main>
  );
}
