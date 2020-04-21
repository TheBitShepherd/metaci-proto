import React from "react";
import AbsoluteWrapper from './wrappers/AbsoluteWrapper';

import BuildTable from './BuildTable';

const BuildsPage = () => {
  return (
    <AbsoluteWrapper>
      <section className="row justify-content-center text-center">
        <h4 className="jumbotron-heading latest-builds-header">Latest Builds</h4>
      </section>
      <section className="row justify-content-center text-center">
        <div className="card-body">
          <BuildTable />
        </div>
      </section>
    </AbsoluteWrapper>
  );;
}

export default BuildsPage;