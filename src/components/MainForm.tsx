import * as React from "react";
import { Form, Formik } from "formik";
import { Container, Col, Row } from "reactstrap";
import * as Yup from "yup";

import UserForm, { userValidationSchema, userInitialValues } from "./UserForm";
import MainSectionForm, { mainSectionInitialValues } from "./MainSectionForm";
import axios, { AxiosError } from "axios";

const validationSchema = Yup.object({
    personal_info: userValidationSchema,
    // address: addressValidationSchema,
});

const initialValues = {
    personal_info: userInitialValues,
    main_section: mainSectionInitialValues,
};

const MainForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                values.main_section.languages.descriptions.forEach(function (
                    part,
                    index,
                    langArray
                ) {
                    langArray[index].fluency = parseInt(
                        langArray[index].fluency.toString()
                    );
                },
                values.main_section.languages.descriptions); // use arr as this
                setSubmitting(true);
                axios({
                    url: "http://localhost:8080/user",
                    method: "POST",
                    responseType: "blob", // important
                    data: values,
                })
                    .then((response) => {
                        const url = window.URL.createObjectURL(
                            new Blob([response.data])
                        );
                        const link = document.createElement("a");
                        link.href = url;
                        link.setAttribute("download", "file.pdf");
                        document.body.appendChild(link);
                        link.click();
                        setSubmitting(false);
                    })
                    .catch((err: AxiosError): void => {
                        setSubmitting(false);
                        alert(
                            JSON.stringify(err.response?.statusText, null, 2)
                        );
                    });
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
                                setFieldValue={formik.setFieldValue}
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
                                        disabled={formik.isSubmitting}
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
