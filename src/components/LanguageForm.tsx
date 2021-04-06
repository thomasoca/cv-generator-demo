import { Button, ButtonGroup, Col, Input, InputGroup, Row } from "reactstrap";
import { TextInputList } from "./TextInput";
import { Language, Languages } from "./Models";
import React from "react";
import { FieldArray } from "formik";

const languageInitalValues: Language = {
    language: "",
    fluency: 1,
};
export const languagesInitialValues: Languages = {
    label: "Languages",
    descriptions: [languageInitalValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: any) => void;
    values: Languages;
}

const LanguageForm = (props: IProps) => {
    const { handleChange, namespace } = props;
    return (
        <div>
            <h3 className="my-2">Language Skills (Fluency level)</h3>
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
                                                                    `.descriptions.${index}.language`
                                                                }
                                                                type="text"
                                                                placeholder="Language skills"
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            />
                                                            <Input
                                                                type="select"
                                                                name={
                                                                    namespace +
                                                                    `.descriptions.${index}.fluency`
                                                                }
                                                                onChange={
                                                                    handleChange
                                                                }
                                                            >
                                                                <option>
                                                                    1
                                                                </option>
                                                                <option>
                                                                    2
                                                                </option>
                                                                <option>
                                                                    3
                                                                </option>
                                                                <option>
                                                                    4
                                                                </option>
                                                                <option>
                                                                    5
                                                                </option>
                                                            </Input>
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
                                                                                    languageInitalValues
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
                                                                            languageInitalValues
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

export default LanguageForm;
