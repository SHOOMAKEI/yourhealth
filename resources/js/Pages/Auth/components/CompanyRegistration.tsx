import * as Yup from 'yup';

interface CompanyValues {
    email: String;
    password: String;
    first_name: String;
    middle_name: String;
    last_name: String;
    mobile_number: String;
    password_confirmation: String;
    account_category: String;
    //company info
    name: String;
    vrn: String;
    tin: String;
}

const CompanyRegistrationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password too short!')
        .max(15, 'Password too long!')
        .required('Password is required'),
    email: Yup.string().email('Invalid email provided').required('Please provide a valid email'),
    first_name: Yup.string().required('First name is required'),
    middle_name: Yup.string().required('Middle name is required'),
    last_name: Yup.string().required('Last name is required'),
    mobile_number: Yup.string().required('Mobile number is required'),
    password_confirmation: Yup.string().min(8, 'Password too short!')
        .max(15, 'Password too long!')
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    account_category: Yup.string()
        .required('Account category is required')
        .oneOf(['Individual', 'Company', 'Facility']),
    //company info
    name: Yup.string().required('Company name is required'),
    vrn: Yup.string().required('VRN number is required'),
    tin: Yup.string().required('TIN number is required'),
});

export default function CompanyRegister() {
    const initialValues: CompanyValues = {
        account_category: "",
        first_name: "",
        last_name: "",
        middle_name: "",
        mobile_number: "",
        name: "",
        password_confirmation: "",
        tin: "",
        vrn: "",
        email: '', password: ''}
        const [registerUser, {loading, errors, data, called}] = useApi({query: REGISTER_USER})
        const router = useRouter()

    useEffect(() => {
        if (data && data.createAccount !== null) {
            router.push('/auth/login')
        }
    }, [data])

    function onSubmit(values: CompanyValues, { setSubmitting } : FormikHelpers<CompanyValues>) {
        let input = {
            first_name: values.first_name,
            middle_name: values.middle_name,
            last_name: values.last_name,
            email: values.email,
            mobile_number: values.mobile_number,
            password: values.password,
            password_confirmation: values.password_confirmation,
            vrn: values.vrn,
            tin: values.tin,
            name: values.name,
            account_category: "service-provider",
            account_category_type: "company",
            ownership_type: 'self'
        }

        registerUser({variables: {input: input}})
    }


    return (
        <div>
            {
                errors  && errors.map(({message}: Error) => (
                    <div className="alert alert-danger bg-danger text-white border-0 mb-0 show mb-4" role="alert">
                        <strong>Login errors </strong> {message}
                    </div>
                ))
            }
            <div className="row mb-2">
                <div className="col">
                    <Link href="/auth/Register">
                        <a className="btn btn-light">
                            <i className=" uil-arrow-left mr-1"></i>
                            Go back
                        </a>
                    </Link>
                </div>
            </div>
           {
               called && loading ?
                <Spinner /> :
                <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validator={() => ({})}
        >
            {({ errors, touched }) => (
                <Form>
                    <h4 className="text-dark-50 text-left mb-3 font-weight-bold">Personal information</h4>
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="first_name">First name</label>
                                <Field id="first_name" name="first_name" placeholder="John" type="text" className="form-control"/>
                                {errors.first_name && touched.first_name ? <FormInputError title="First name error" message={errors.first_name} /> : null}
                            </div>
                            <div className="form-group">auth/RegisterFacility
                                <label htmlFor="middle_name">Middle name</label>
                                <Field id="middle_name" name="middle_name" placeholder="well" type="text" className="form-control"/>
                                {errors.middle_name && touched.middle_name ? <FormInputError title="Middle name error" message={errors.middle_name} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Last name</label>
                                <Field id="last_name" name="last_name" placeholder="doe" type="text" className="form-control"/>
                                {errors.last_name && touched.last_name ? <FormInputError title="Last name error" message={errors.last_name} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <Field id="email" name="email" placeholder="email@example.com" type="text" className="form-control"/>
                                {errors.email && touched.email ? <FormInputError title="Email error" message={errors.email} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone number</label>
                                <Field id="mobile_number" name="mobile_number" placeholder="+255 XXX XXX XXX" type="text" className="form-control"/>
                                {errors.mobile_number && touched.mobile_number ? <FormInputError title="Phone number error" message={errors.mobile_number} /> : null}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-group input-group-merge">
                                    <Field id="password" name="password" placeholder="password" type="password" className="form-control"/>
                                    <div className="input-group-append" data-password="false">
                                        <div className="input-group-text">
                                            <span className="password-eye"></span>
                                        </div>
                                    </div>
                                </div>
                                {errors.password && touched.password ? <FormInputError title="Password Error" message={errors.password} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm password</label>
                                <div className="input-group input-group-merge">
                                    <Field id="password_confirmation" name="password_confirmation" placeholder="confirm password" type="password" className="form-control"/>
                                    <div className="input-group-append" data-password="false">
                                        <div className="input-group-text">
                                            <span className="password-eye"></span>
                                        </div>
                                    </div>
                                </div>
                                {errors.password_confirmation && touched.password_confirmation ? <FormInputError title="Password Error" message={errors.password_confirmation} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Company Name</label>
                                <Field id="name" name="name" placeholder="TMHS Company limited" type="text" className="form-control"/>
                                {errors.name && touched.name ? <FormInputError title="Company name" message={errors.name} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="tin">TIN</label>
                                <Field id="tin" name="tin" placeholder="121212" type="text" className="form-control"/>
                                {errors.tin && touched.tin ? <FormInputError title="Tin number error" message={errors.tin} /> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="vrn">VRN</label>
                                <Field id="vrn" name="vrn" placeholder="121212" type="text" className="form-control"/>
                                {errors.vrn && touched.vrn ? <FormInputError title="Tin number error" message={errors.vrn} /> : null}
                            </div>
                            <div className="form-group mb-0 text-right">
                                <button className="btn btn-primary" type="submit"> {loading ? 'Register...': 'Register'} </button><br />
                            </div>
                        </div>
                    </div>
                </Form>
            )}
            </Formik>
           }
        </div>
    )
}

