import React from "react";

import { Navbar, Home, CreateProject,ProjectDetail } from "./";
function App() {
  return (
    <div className="App">
      {/* Headers */}
      <Navbar />
      {/* <Home />
      <CreateProject /> */}
      <ProjectDetail />
    </div>
  );
}

export default App;
