import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import {InertiaLink, usePage} from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default () => {
    const { status, email, errors, alertType } = usePage().props;
    const [sending, setSending] = useState(false);
    const [recovery, setRecovery] = useState(false);
    const [values, setValues] = useState({
        email: email,
        two_factory_code: '',
        recovery_code: ''

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
        Inertia.post(route('two-factor.verify'), values).then(() => {
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
                      <h4 className="text-center mb-3">Two Factor Authentication</h4>
                        <small>
                            {recovery?
                                'Please confirm access to your account by entering one of your emergency recovery codes.':
                                'Please confirm access to your account by entering the authentication code provided by your authenticator application.'}
                        </small>
                      {status &&
                        <div class={`alert alert-${alertType ==='success'?'primary':'danger'} alert-borderless`} role="alert">
                            {status}
                        </div>
                        }
                        {
                            errors.email && <div
                                className={`alert alert-danger alert-borderless`}
                                role="alert">
                                Something went wrong please try to login again.
                            </div>
                        }
                      <form onSubmit={handleSubmit}>
              {!recovery && <TextInput
                        name="two_factory_code"
                        type="text"
                        placeholder="Two Factor Code"
                        label="Two Factor Code"
                        errors={errors.two_factory_code}
                        value={values.two_factory_code}
                        onChange={handleChange}
                      />
              }
              {recovery && <TextInput
                              name="recovery_code"
                              type="text"
                              placeholder="Recovery Code"
                              label="Recovery Code"
                              errors={errors.recovery_code}
                              value={values.recovery_code}
                              onChange={handleChange}
                          />
              }
                        <div className="form-group my-3 row">
                          <div className="col-md-12 text-center">
                          <a
                              href="#"
                              className="btn btn-success btn-md mr-3"
                              onClick={()=> {
                                  setRecovery(!recovery)
                                  setValues({
                                      email: email,
                                      two_factory_code: '',
                                      recovery_code: ''

                                  })
                              }}
                          >
                              {recovery? 'Use Two Factor Code': 'Use Recovery Code'}
                          </a>
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
