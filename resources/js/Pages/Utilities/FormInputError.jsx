import { React } from "react";

export default function FormInputError({title, message}) {
    return (
        <div className="alert alert-danger bg-danger text-white border-0 fade show mt-1" role="alert">
            <strong>{title} - </strong> {message}
        </div>
    )
}
