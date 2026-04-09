import React, { useContext } from "react";
import Card from "../../../components/Card";
import { ThemeContext } from "../../../components/ThemeContext";

export default function Accessibility() {
  const {
    highContrastEnabled,
    setHighContrastEnabled,
    backgroundEnabled,
    setBackgroundEnabled,
    acrylicEnabled,
    setAcrylicEnabled,
  } = useContext(ThemeContext);

  const handleHighContrastToggle = (e) => {
    const isChecked = e.target.checked;
    setHighContrastEnabled(isChecked);

    if (isChecked) {
      // Backup current appearance settings before disabling them
      localStorage.setItem("hiosBackupBackground", backgroundEnabled);
      localStorage.setItem("hiosBackupAcrylic", acrylicEnabled);

      // Turn off background and acrylic for high contrast mode
      setBackgroundEnabled(false);
      setAcrylicEnabled(false);
    } else {
      // Restore previous settings when turning high contrast off
      const prevBackground =
        localStorage.getItem("hiosBackupBackground") !== "false";
      const prevAcrylic = localStorage.getItem("hiosBackupAcrylic") !== "false";

      setBackgroundEnabled(prevBackground);
      setAcrylicEnabled(prevAcrylic);
    }
  };

  return (
    <main className="container mt-4 mb-5">
      <div className="row mb-2">
        <div className="col-12">
          <Card>
            <div className="top-container">
              <h1 className="blue-h2">
                <span className="titleIcon material-symbols-rounded">
                  accessibility_new
                </span>
                Accessibility
              </h1>
              <p id="para">
                Adjust visual settings to make HiOS easier to use.
              </p>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <h1 className="card-title">Vision</h1>
        <div className="settings-group mt-3">
          <div className="switchContainer p-3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <label
                className="form-check-label ms-2"
                style={{ marginRight: "auto" }}
              >
                High Contrast UI
              </label>
              <label className="switch" style={{ marginLeft: "auto" }}>
                <input
                  type="checkbox"
                  checked={highContrastEnabled}
                  onChange={handleHighContrastToggle}
                />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
          <div className="infoBubble">
            <h4>
              <span className="material-symbols-rounded helpcenterIcons">
                contrast
              </span>{" "}
              Increase legibility across the system.
            </h4>
            <p
              style={{
                fontSize: "14px",
                margin: "8px 0 0 0",
                opacity: 0.8,
              }}
            >
              This overrides theme colors with maximum contrast alternatives and
              disables transparency effects like acrylic glass.
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
}
