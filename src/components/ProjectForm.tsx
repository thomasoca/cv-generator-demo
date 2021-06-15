import { Button, ButtonGroup, Col, Row } from "reactstrap";
import { TextInput } from "./TextInput";
import { Project, Projects } from "./Models";
import React from "react";
import { FieldArray } from "formik";

const projectInitialValues: Project = {
    title: "",
    link: "",
    start_period: "",
    end_period: "",
    descriptions: "",
};
export const projetcsInitialValues: Projects = {
    label: "Projects",
    lists: [projectInitialValues],
};

interface IProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: Projects;
}

const ProjectForm = (props: IProps) => {
    const { handleChange, namespace } = props;

    return (
        <div>
            <h3 className="my-2">Projects</h3>
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
                                                        projectInitialValues
                                                    );
                                                }}
                                            >
                                                Add more project
                                            </Button>
                                            &nbsp;
                                            <Button
                                                type="button"
                                                onClick={() =>
                                                    arrayHelpers.remove(index)
                                                }
                                            >
                                                Remove this projects
                                            </Button>
                                        </ButtonGroup>
                                    </div>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={() => {
                                            arrayHelpers.push(
                                                projectInitialValues
                                            );
                                        }}
                                    >
                                        Add more project
                                    </Button>
                                )}
                                <Row>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Project Title"
                                            name={
                                                namespace +
                                                `.lists.${index}.title`
                                            }
                                            onChange={handleChange}
                                            placeholder="Title/name of your project"
                                        />
                                    </Col>
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="text"
                                            label="Link"
                                            name={
                                                namespace +
                                                `.lists.${index}.link`
                                            }
                                            onChange={handleChange}
                                            placeholder="Public URL of your project"
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
                                    <Col xs={12} className="my-2">
                                        <TextInput
                                            type="textarea"
                                            label="Project descriptions"
                                            name={
                                                namespace +
                                                `.lists.${index}.descriptions`
                                            }
                                            onChange={handleChange}
                                            placeholder="Explain more about your awesome project"
                                        />
                                    </Col>
                                </Row>
                                <br />
                            </div>
                        );
                    })
                }
            />
        </div>
    );
};

export default ProjectForm;
