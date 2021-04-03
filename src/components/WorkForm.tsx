import { Button, ButtonGroup, Col, InputGroup, Row } from "reactstrap";
import { TextInput, TextInputList } from "./TextInput";
import { Work, WorkExperience } from "./Models";
import React from "react";
import { FieldArray } from "formik";

const workInitialValues: Work = {
    company: "",
    position: "",
    start_period: "",
    end_period: "",
    location: "",
    descriptions: [""],
};
export const experienceInitialValues: WorkExperience = {
    label: "Experience",
    lists: [workInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: any) => void;
    values: WorkExperience;
}

const WorkForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Work Experience</h3>
            <Row>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Company/organization name"
                        name={namespace + ".lists[0].company"}
                        onChange={handleChange}
                        placeholder="Company/organization name"
                        required
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Position"
                        name={namespace + ".lists[0].position"}
                        onChange={handleChange}
                        placeholder="Your role in company/organization"
                        required
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Location"
                        name={namespace + ".lists[0].location"}
                        onChange={handleChange}
                        placeholder="Company/organization location"
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
                    <p>Job Description</p>
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
                                                                placeholder="Your roles"
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

export default WorkForm;
