import * as React from "react";
import { Col, Row } from "reactstrap";
import { TextInput } from "./TextInput";
import WorkForm, { experienceInitialValues } from "./WorkForm";
import { MainSection, AboutMe } from "./Models";

const aboutMeInitialValues: AboutMe = {
    label: "About Me",
    descriptions: "",
};

export const mainSectionInitialValues: MainSection = {
    about_me: aboutMeInitialValues,
    work_experience: experienceInitialValues,
    // address: addressInitialValues,
};

interface IProps {
    namespace: string;
    handleChange: (e: any) => void;
    values: MainSection;
}

const MainSectionForm = (props: IProps) => {
    const { handleChange, namespace, values } = props;
    return (
        <div>
            <h3 className="my-2">Personal Info</h3>
            <Row>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="textarea"
                        label="About Me"
                        name={namespace + ".about_me.descriptions"}
                        onChange={handleChange}
                        placeholder="Your wholesome bio"
                        required
                    />
                </Col>
                <WorkForm
                    values={values.work_experience}
                    handleChange={handleChange}
                    namespace={namespace + ".work_experience"}
                />
            </Row>
        </div>
    );
};

export default MainSectionForm;
