import { Button, ButtonGroup, Col, InputGroup, Row } from "reactstrap";
import { TextInput, TextInputList } from "./TextInput";
import { Education, School } from "./Models";
import React from "react";
import { FieldArray } from "formik";

const schoolInitialValues: School = {
    institution: "",
    major: "",
    level: "",
    gpa: "",
    start_period: "",
    end_period: "",
    location: "",
    descriptions: [""],
};
export const educationInitialValues: Education = {
    label: "Education",
    lists: [schoolInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: any) => void;
    values: Education;
}

const EducationForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Education</h3>
            <Row>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Institution name"
                        name={namespace + ".lists[0].institution"}
                        onChange={handleChange}
                        placeholder="University/institute/school name"
                        required
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Major"
                        name={namespace + ".lists[0].major"}
                        onChange={handleChange}
                        placeholder="Your major/specialization"
                        required
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".lists[0].level"}
                        label="Degree"
                        placeholder="Degree obtained"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".lists[0].gpa"}
                        label="GPA"
                        placeholder="GPA/score"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Location"
                        name={namespace + ".lists[0].location"}
                        onChange={handleChange}
                        placeholder="University/institute/school location"
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="date"
                        name={namespace + ".lists[0].start_period"}
                        label="Start Date"
                        placeholder="Start Date"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="date"
                        name={namespace + ".lists[0].end_period"}
                        label="End Date"
                        placeholder="End Date"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <p>Additional Notes</p>
                    <FieldArray
                        name={namespace + ".lists[0].descriptions"}
                        render={(arrayHelpers) => (
                            <div className="my-2">
                                {props.values.lists[0].descriptions.length >
                                    0 &&
                                    props.values.lists[0].descriptions.map(
                                        (role, index) => {
                                            return (
                                                <div key={index}>
                                                    <div>
                                                        <InputGroup>
                                                            <TextInputList
                                                                name={
                                                                    namespace +
                                                                    `.lists[0].descriptions.${index}`
                                                                }
                                                                type="text"
                                                                placeholder="Tell more about your education"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            {props.values
                                                                .lists[0]
                                                                .descriptions
                                                                .length > 1 &&
                                                            props.values
                                                                .lists[0]
                                                                .descriptions ? (
                                                                <div>
                                                                    <ButtonGroup>
                                                                        <Button
                                                                            type="button"
                                                                            onClick={() => {
                                                                                arrayHelpers.push(
                                                                                    ""
                                                                                );
                                                                            }}
                                                                        >
                                                                            +
                                                                        </Button>
                                                                        <Button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                arrayHelpers.remove(
                                                                                    index
                                                                                )
                                                                            }
                                                                        >
                                                                            -
                                                                        </Button>
                                                                    </ButtonGroup>
                                                                </div>
                                                            ) : (
                                                                <Button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        arrayHelpers.push(
                                                                            ""
                                                                        );
                                                                    }}
                                                                >
                                                                    +
                                                                </Button>
                                                            )}
                                                        </InputGroup>
                                                        <br />
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default EducationForm;
