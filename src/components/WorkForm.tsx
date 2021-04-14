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
    descriptions: [],
};
export const experienceInitialValues: WorkExperience = {
    label: "Experience",
    lists: [workInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: WorkExperience;
}

interface DescriptionProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: Work;
}

const WorkForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Work Experience</h3>
            <FieldArray
                name={namespace + ".lists"}
                render={(arrayHelpers) =>
                    props.values.lists.map((works, index) => {
                        return (
                            <div key={index}>
                                {props.values.lists.length > 1 &&
                                props.values.lists ? (
                                    <div>
                                        <ButtonGroup>
                                            <Button
                                                type="button"
                                                onClick={() => {
                                                    arrayHelpers.push(
                                                        workInitialValues
                                                    );
                                                }}
                                            >
                                                Add more experience
                                            </Button>
                                            &nbsp;
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.remove(index)
                                                }
                                            >
                                                Remove this experience
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            arrayHelpers.push(
                                                workInitialValues
                                            );
                                        }}
                                    >
                                        Add more experience
                                    </Button>
                                )}
                                <Row>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Company/organization name"
                                            name={
                                                namespace +
                                                `.lists.${index}.company`
                                            }
                                            onChange={handleChange}
                                            placeholder="Company/organization name"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Position"
                                            name={
                                                namespace +
                                                `.lists.${index}.position`
                                            }
                                            onChange={handleChange}
                                            placeholder="Your role in company/organization"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Location"
                                            name={
                                                namespace +
                                                `.lists.${index}.location`
                                            }
                                            onChange={handleChange}
                                            placeholder="Company/organization location"
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <TextInput
                                            type="date"
                                            name={
                                                namespace +
                                                `.lists.${index}.start_period`
                                            }
                                            label="Start Date"
                                            placeholder="Start Date"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <TextInput
                                            type="date"
                                            name={
                                                namespace +
                                                `.lists.${index}.end_period`
                                            }
                                            label="End Date"
                                            placeholder="End Date"
                                            onChange={handleChange}
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <p>Job Description</p>
                                        <DescriptionForm
                                            namespace={
                                                namespace + `.lists.${index}`
                                            }
                                            handleChange={handleChange}
                                            values={props.values.lists[index]}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        );
                    })
                }
            />
        </div>
    );
};

const DescriptionForm = (props: DescriptionProps) => {
    const { handleChange, namespace } = props;
    return (
        <FieldArray
            name={namespace + ".descriptions"}
            render={(arrayHelpers) => (
                <div className="my-2">
                    {props.values.descriptions.length > 0 ? (
                        props.values.descriptions.map((role, index) => {
                            return (
                                <div key={index}>
                                    <div>
                                        <InputGroup>
                                            <TextInputList
                                                name={
                                                    namespace +
                                                    `.descriptions.${index}`
                                                }
                                                type="text"
                                                placeholder="Your roles"
                                                onChange={handleChange}
                                            />
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
                                        </InputGroup>
                                        <br />
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <Button
                            type="button"
                            onClick={() => arrayHelpers.push("")}
                        >
                            Add more descriptions
                        </Button>
                    )}
                </div>
            )}
        />
    );
};

export default WorkForm;
