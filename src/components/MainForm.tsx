import * as React from "react";
import { Form, Formik } from "formik";
import { Container, Col, Row } from "reactstrap";
import * as Yup from "yup";

import UserForm, { userValidationSchema, userInitialValues } from "./UserForm";
import MainSectionForm, { mainSectionInitialValues } from "./MainSectionForm";

const validationSchema = Yup.object({
    personal_info: userValidationSchema,
    // address: addressValidationSchema,
});

const initialValues = {
    personal_info: userInitialValues,
    main_section: mainSectionInitialValues,
    // address: addressInitialValues,
};

const MainForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                console.log(JSON.stringify(values));
                setSubmitting(false);
            }}
        >
            {(formik) => {
                return (
                    <Container>
                        <h2 className="mt-5 text-center">
                            CV Generator Live Demo
                        </h2>
                        <Form onSubmit={formik.handleSubmit}>
                            <UserForm
                                handleChange={formik.handleChange}
                                namespace="personal_info"
                            />
                            <br />
                            <MainSectionForm
                                values={formik.values.main_section}
                                handleChange={formik.handleChange}
                                namespace="main_section"
                            />

                            <Row>
                                <Col xs={12} sm={{ size: 4, offset: 4 }}>
                                    <input
                                        className="my-4 btn btn-primary btn-block"
                                        type="submit"
                                        value="Submit"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                );
            }}
        </Formik>
    );
};

export default MainForm;
