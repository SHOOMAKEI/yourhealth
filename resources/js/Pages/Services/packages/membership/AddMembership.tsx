import * as Yup from "yup";

import { CREATE_PACKAGE_MEMBERSHIP, UPDATE_PACKAGE_MEMBERSHIP } from "@pages/utils/Mutations";
import {Field, Form, Formik, FormikErrors, FormikHelpers} from "formik";
import {addMembership, updateMembership} from "@pages/data/actions/memberships";
import {useDispatch, useSelector} from "react-redux";

import FormInputError from "@pages/components/FormInputError";
import ModalForm from "@pages/components/ModalForm";
import Spinner from "@pages/auth/components/Spinner";
import {membershipsStateValues} from "@pages/data/reducers/memberships";
import {membershipsValues} from "@pages/data/constants/memberships";
import { useApi } from "@pages/utils/ApolloClient";
import {useEffect} from "react";

const MembershipSchema = Yup.object().shape({
    name: Yup.string().required(),
    description: Yup.string().required(),
    is_active: Yup.boolean().required(),
});

interface Props {
    modalID: string;
    initialData?: membershipsValues;
    operation?: "add" | "update";
    title?: string;
}


export default function AddMembershipModal({modalID, operation, title,}: Props) {
    const initialValues: membershipsValues = {
        name: "",
        description: "No description",
        is_active: false,
    };
    const dispatch = useDispatch();
    const {selectedMembership} = useSelector<membershipsStateValues, membershipsStateValues>(state => state.membershipsStore)
    const [createPackageMembership, createPackageMembershipResponse] = useApi({query: CREATE_PACKAGE_MEMBERSHIP});
    const [updatePackageMembership, updatePackageMembershipResponse] = useApi({query: UPDATE_PACKAGE_MEMBERSHIP});

    useEffect(() => {
        let data = createPackageMembershipResponse.data;

        if (data && data.createPackageMemberShip) {
            dispatch(addMembership(data.createPackageMemberShip));
        }
    }, [createPackageMembershipResponse.data])

    useEffect(() => {
        let data = updatePackageMembershipResponse.data;

        if (data && data.updatePackageMemberShip) {
            dispatch(updateMembership(data.updatePackageMemberShip));
        }
    }, [updatePackageMembershipResponse.data])

    function onSubmit(values: membershipsValues, { setSubmitting }: FormikHelpers<membershipsValues>) {
        setTimeout(() => {
            switch (operation) {
                case "add":
                    _addMembership(values.name, values.description, values.is_active);
                    break;

                case "update":
                    _updateMembership(values.name, values.description, selectedMembership.is_active);
                    break;

                default:
                    _addMembership(values.name, values.description, values.is_active);
                    break;
            }

            setSubmitting(false);
        }, 500);
    }

    function _addMembership(name: string, description: string, status: boolean) {
        let membership = {
            name: name,
            description: description,
            is_active: status,
        };
        createPackageMembership({variables: {input: membership}});
    }

    function _updateMembership(name: string, description: string, status: boolean) {
        let membership = {
            id: selectedMembership.id,
            name: name,
            description: description,
            is_active: status
        };
        updatePackageMembership({variables: {input: membership}});
    }

    function renderForm() {
        return createPackageMembershipResponse.loading || updatePackageMembershipResponse.loading ?
            <Spinner /> :
            (
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={MembershipSchema}
                    enableReinitialize={true}
                >
                    {({ errors, touched, setFieldValue }) => {
                        useEffect(() => {
                            if (operation === "update") {
                                setFieldValue("name", selectedMembership.name);
                                setFieldValue("description", selectedMembership.description);
                            }
                        }, [selectedMembership]);
    
                        return (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="name">Membership name</label>
                                    <Field id="name" name="name" placeholder="membership name" type="text" className="form-control"/>
                                    {errors.name && touched.name ? <FormInputError title="Membership name error" message={errors.name} /> : null}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Membership description</label>
                                    <Field id="description" name="description" placeholder="description" as="textarea" className="form-control" rows={3}/>
                                    {errors.description && touched.description ? <FormInputError title="Description error" message={errors.description} /> : null}
                                </div>
                                {
                                    operation === "add" && (
                                        <div>
                                            <div className="custom-control custom-switch form-group">
                                                <Field type="checkbox" className="custom-control-input" id="is_active" name="is_active" />
                                                <label className="custom-control-label" htmlFor="is_active">Show membership to public</label>
                                            </div>
                                            <p className="text-muted">
                                                If the above option is selected the public will see the membership,
                                                otherwise the public will not see the membership. You can edit it
                                                later on from category settings.
                                            </p>
                                        </div>
                                    )
                                }
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light" data-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">{operation === "add" ? "Add membership" : "Update"}</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            )
    }

    return (
        <ModalForm
            modalID={modalID}
            title={title ? title : "Add new membership"}
            renderForm={renderForm}
        />
    )
}