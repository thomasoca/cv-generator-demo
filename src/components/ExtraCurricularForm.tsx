import { Button, ButtonGroup, Col, InputGroup, Row } from "reactstrap";
import { TextInput, TextInputList } from "./TextInput";
import { ExtraCurricular, ExtraCurricularExperience } from "./Models";
import React from "react";
import { FieldArray } from "formik";

const extraInitialValues: ExtraCurricular = {
    institution: "",
    position: "",
    start_period: "",
    end_period: "",
    location: "",
    descriptions: [],
};
export const extraExpInitialValues: ExtraCurricularExperience = {
    label: "Extra-curricular Activities",
    lists: [extraInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: ExtraCurricularExperience;
}

interface DescriptionProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: ExtraCurricular;
}

const ExtraCurricularForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Extra-curricular Activities</h3>
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
                                                        extraInitialValues
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
                                                extraInitialValues
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
                                            label="Institution/organization name"
                                            name={
                                                namespace +
                                                `.lists.${index}.institution`
                                            }
                                            onChange={handleChange}
                                            placeholder="Institution/organization name"
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
                                            placeholder="Your role in institution/organization"
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
                                            placeholder="Institution/organization location"
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
                                                placeholder="Describe your roles"
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

export default ExtraCurricularForm;
