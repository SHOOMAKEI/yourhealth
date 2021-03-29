import {FormikErrors} from 'formik'

interface FormInputErrorProps {
    title: String;
    message: FormikErrors<String>;
}

export default function FormInputError({title, message}: FormInputErrorProps) {
    return (
        <div className="alert alert-danger bg-danger text-white border-0 fade show mt-1" role="alert">
            <strong>{title} - </strong> {message}
        </div>
    )
}