import React from "react";
import AbsoluteWrapper from './wrappers/AbsoluteWrapper';

import BuildTable from './BuildTable';

const BuildsPage = () => {
  return (
    <AbsoluteWrapper>
      <section className="row justify-content-center text-center p-5">
        <div className="card-body">
          <BuildTable />
        </div>
      </section>
    </AbsoluteWrapper>
  );
};

export default BuildsPage;