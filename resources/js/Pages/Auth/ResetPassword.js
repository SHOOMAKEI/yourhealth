import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/inertia-react';
import TextInput from '@/Shared/TextInput'
import LoadingButton from '@/Shared/LoadingButton'

export default () => {
    const { status,token, email, errors } = usePage().props;
    const [sending, setSending] = useState(false);
    const [values, setValues] = useState({
        email: email,
        password: '',
        password_confirmation:'',
        token: token

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
        Inertia.post(route('password.update'), values).then(() => {
            setSending(false);
        });
    }


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
                      <h4 className="text-center mb-3">Reset Password</h4>
                      {status &&
                        <div class="alert alert-primary alert-borderless" role="alert">
                            {status}
                        </div>
                        }
                      <form onSubmit={handleSubmit}>
                      <TextInput
                        name="email"
                        type="text"
                        placeholder="Email"
                        label="Email"
                        errors={errors.email}
                        value={values.email}
                        onChange={handleChange}
                      />
                      <TextInput
                        name="password"
                        type="password"
                        placeholder="Password"
                        label="Password"
                        errors={errors.password}
                        value={values.password}
                        onChange={handleChange}
                      />
                      <TextInput
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        errors={errors.password_confirmation}
                        value={values.password_confirmation}
                        onChange={handleChange}
                      />

                        <div className="form-group my-3 row">
                          <div className="col-12 text-right">
                          <LoadingButton
                              type="submit"
                              className="btn btn-primary btn-block"
                              loading={sending}
                            >
                            Reset Password
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
