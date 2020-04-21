import React from "react";
import AbsoluteWrapper from './wrappers/AbsoluteWrapper';

const AccountPage = () => {
  return (
    <AbsoluteWrapper>
      <section className="row justify-content-center text-center p-5">
        <article className="col-md-6">
          <div className="card p-1 m-1 shadow">
            <div className="card-body">
              <h4 className="card-title mt-1">Account Info Here</h4>
            </div>
          </div>
        </article>
      </section>
    </AbsoluteWrapper>
  );
};

export default AccountPage;