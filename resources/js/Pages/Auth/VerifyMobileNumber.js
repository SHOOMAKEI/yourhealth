import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink, usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default () => {
    const { status, errors } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        email: ''
    });

    function handleChange(e) {
        const key = e.target.name;
        const value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSending(true);
        Inertia.post(route('verification_code.verify'), values).then(() => {
            setSending(false);
        });
    }


  return (
    <div className="wrapper-login" >
        <div className="container">

          <div id="app justify-content-center">

            <div className="row">

              <div className="col-md-3"></div>
              <div className="col-md-6">
                <br />
              <div className="login-form">
                  <div className="card mb-0 mt-5 p-4">
                    <div className="card-body">
                      <h4 className="text-center mb-3">Verify Mobile Number</h4>
                      {status && status === 'wrong-verification-code'?

                        <div className="alert alert-danger alert-borderless" role="alert">
                            Wrong code provided. Please try again.
                        </div>:null

                        }
                        {status && status === 'verification-code-sent'?

                            <div className="alert alert-primary alert-borderless" role="alert">
                                Verification code sent to your mobile number successful.
                            </div>:null

                        }
                      <form onSubmit={handleSubmit}>
                      <TextInput
                        name="verification_code"
                        type="text"
                        placeholder="Verification Code"
                        label="Enter Verification Code"
                        errors={errors.verification_code}
                        value={values.verification_code}
                        onChange={handleChange}
                      />

                        <div className="form-group my-3 row">
                          <div className="col-12 text-center">
                          <InertiaLink
                              href={route('verification_code.send')}
                              className="btn btn-success btn-md mr-3"
                          >
                              Resend Verification Code
                          </InertiaLink>
                          <LoadingButton
                              type="submit"
                              className="btn btn-primary btn-md"
                              loading={sending}
                            >
                            Verify
                            </LoadingButton>
                          </div>
                        </div>
                      </form>
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
