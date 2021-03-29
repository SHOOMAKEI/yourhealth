import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';


export default () => {
    const { flash, errors } = usePage().props;
    const [sending, setSending] = useState(false);

  return (
    <div className="wrapper-login" >
        <div className="container">

          <div id="app justify-content-center">

            <div className="row">

              <div className="col-md-3"></div>
              <div className="col-md-5">
                <br />
              <div className="login-form">
                  <div className="card mb-0 mt-5 p-4">
                    <div className="card-body">
                      <h6 className="text-center mb-3">Resend Email Verification Link</h6>
                      {flash.status=='verification-link-sent' && 
                        <div class="alert alert-primary alert-borderless" role="alert">
                            {flash.status}
                        </div>
                        }
                        <InertiaLink href={route('verification.send')} className="btn btn-success" method="post">Resend Verification Email</InertiaLink>
                        <InertiaLink href={route('logout')} className="btn btn-primary" method="post">Logout</InertiaLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>


              </div>

          </div>

        </div>
    </div>
  );
};
