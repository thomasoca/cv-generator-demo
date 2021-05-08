import { Button, ButtonGroup, Col, InputGroup, Row } from "reactstrap";
import { TextInputList } from "./TextInput";
import { Skills } from "./Models";
import React from "react";
import { FieldArray } from "formik";

export const skillsInitialValues: Skills = {
    label: "Skills",
    descriptions: [""],
};

interface IProps {
    namespace: string;
    handleChange: (e: any) => void;
    values: Skills;
}

const SkillsForm = (props: IProps) => {
    const { handleChange, namespace } = props;
    return (
        <div>
            <h3 className="my-2">
                Skills <span className="text-danger"> *</span>
            </h3>
            <Row>
                <Col xs={12} className="my-2">
                    {/* <p>Additional Notes</p> */}
                    <FieldArray
                        name={namespace + ".descriptions"}
                        render={(arrayHelpers) => (
                            <div className="my-2">
                                {props.values.descriptions.length > 0 &&
                                    props.values.descriptions.map(
                                        (role, index) => {
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
                                                                placeholder="List all of your skills"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                                required
                                                            />
                                                            {props.values
                                                                .descriptions
                                                                .length > 1 &&
                                                            props.values
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

export default SkillsForm;
