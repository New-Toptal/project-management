import React from 'react';
import ProjectNavbarLeft from "../src/page/NavbarLeft";
import { createQueryParamModalHelpers } from './util/queryParamModal';
import './App.css';

function App() {

  const issueSearchModalHelpers = createQueryParamModalHelpers('issue-search');
  const issueCreateModalHelpers = createQueryParamModalHelpers('issue-create');

  return (
    <div className="flex">
      <ProjectNavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        issueCreateModalOpen={issueCreateModalHelpers.open}
      />
    </div>
  );
}

export default App;
