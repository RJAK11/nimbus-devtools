/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainPage from "./components/MainPage";
import FeatureConfigPage from "./components/FeatureConfigPage";
import SettingsPage from "./components/SettingsPage";
import JEXLDebuggerPage from "./components/JEXLDebuggerPage";
import ExperimentBrowserPage from "./components/ExperimentBrowserPage";
import ExperimentStorePage from "./components/ExperimentStorePage";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#app").forEach((el) => {
    const root = createRoot(el);
    root.render(
      <StrictMode>
        <Router>
          <Navbar />
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/experiment-json" element={<MainPage />} />
              <Route
                path="/experiment-feature-config"
                element={<FeatureConfigPage />}
              />
              <Route path="/jexl-debugger" element={<JEXLDebuggerPage />} />
              <Route
                path="/experiment-store"
                element={<ExperimentStorePage />}
              />
              <Route
                path="/experiment-browser"
                element={<ExperimentBrowserPage />}
              />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </Router>
      </StrictMode>,
    );
  });
});
