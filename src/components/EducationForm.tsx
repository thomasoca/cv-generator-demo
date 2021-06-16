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
    descriptions: [],
};
export const educationInitialValues: Education = {
    label: "Education",
    lists: [schoolInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: Education;
}

interface DescriptionProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: School;
}

const EducationForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Education</h3>
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
                                                        schoolInitialValues
                                                    );
                                                }}
                                            >
                                                Add more education
                                            </Button>
                                            &nbsp;
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.remove(index)
                                                }
                                            >
                                                Remove this education
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            arrayHelpers.push(
                                                schoolInitialValues
                                            );
                                        }}
                                    >
                                        Add more education
                                    </Button>
                                )}
                                <Row>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Institution name"
                                            name={
                                                namespace +
                                                `.lists.${index}.institution`
                                            }
                                            onChange={handleChange}
                                            placeholder="University/institute/school name"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Major"
                                            name={
                                                namespace +
                                                `.lists.${index}.major`
                                            }
                                            onChange={handleChange}
                                            placeholder="Your major/specialization"
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <TextInput
                                            type="text"
                                            name={
                                                namespace +
                                                `.lists.${index}.level`
                                            }
                                            label="Degree"
                                            placeholder="Degree obtained"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Col>
                                    <Col xs={12} md={6} className="my-2">
                                        <TextInput
                                            type="text"
                                            name={
                                                namespace +
                                                `.lists.${index}.gpa`
                                            }
                                            label="GPA"
                                            placeholder="GPA/score"
                                            onChange={handleChange}
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
                                            placeholder="University/institute/school location"
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
                                        <p>Additional Notes</p>
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
                                                placeholder="Tell more about your education"
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

export default EducationForm;
