import React, { useState } from 'react';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';


export default () => {
    const { status, errors } = usePage().props;
    const [sending, setSending] = useState(false);

  return (
    <div className="wrapper-login" >
        <div className="container">

          <div id="app justify-content-center">

            <div className="row">

              <div className="col-md-3"></div>
              <div className="col-md-7">
                <br />
              <div className="login-form">
                  <div className="card mb-0 mt-5 p-4">
                    <div className="card-body">
                        <h4>Email Verification</h4>
                        <p>
                            Thanks for signing up! Before getting started, could you verify your
                            email address by clicking on the link we just emailed to you? If you didn't
                            receive the email, we will gladly send you another.
                        </p>
                      {status && status==='verification-link-sent' &&
                        <div className="alert alert-primary alert-borderless" role="alert">
                            A new verification link has been sent to the email address you provided during registration.
                        </div>
                        }
                        <InertiaLink href={route('verification.send')} className="btn btn-success mr-3" method="post">Resend Verification Email</InertiaLink>
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
