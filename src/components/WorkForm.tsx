import { Col, Row } from "reactstrap";
import TextInput from "./TextInput";
import { Work, WorkExperience } from "./Models";
import React, { useState } from "react";
import { produce } from "immer";

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
    handleChange: (e: any) => void;
}

const WorkForm = (props: IProps) => {
    const { handleChange, namespace } = props;
    const [roles, setRoles] = useState<string[]>([""]);
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
                <Col xs={12} className="my-2">
                    <button
                        type="button"
                        onClick={() => {
                            setRoles((currentRoles) => [...currentRoles, ""]);
                        }}
                    >
                        Add new job description
                    </button>
                    {roles.map((p, index) => {
                        return (
                            <div>
                                <TextInput
                                    type="text"
                                    label="Job Description"
                                    name={`.lists[0].descriptions.${index}`}
                                    onChange={(e) => {
                                        const newRole = e.target.value;
                                        setRoles((currentRoles) =>
                                            produce(currentRoles, (v) => {
                                                v[index] = newRole;
                                            })
                                        );
                                    }}
                                    placeholder="What did you do?"
                                />
                            </div>
                        );
                    })}
                </Col>
            </Row>
        </div>
    );
};

export default WorkForm;
