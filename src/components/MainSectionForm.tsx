import * as React from "react";
import { Col, Row } from "reactstrap";
import { TextInput } from "./TextInput";
import WorkForm, { experienceInitialValues } from "./WorkForm";
import EducationForm, { educationInitialValues } from "./EducationForm";
import SkillsForm, { skillsInitialValues } from "./SkillsForm";
import LanguageForm, { languagesInitialValues } from "./LanguageForm";
import { MainSection, AboutMe } from "./Models";
import ExtraCurricularForm, {
    extraExpInitialValues,
} from "./ExtraCurricularForm";
import ProjectForm, { projetcsInitialValues } from "./ProjectForm";

const aboutMeInitialValues: AboutMe = {
    label: "About Me",
    descriptions: "",
};

export const mainSectionInitialValues: MainSection = {
    about_me: aboutMeInitialValues,
    work_experience: experienceInitialValues,
    education: educationInitialValues,
    skills: skillsInitialValues,
    languages: languagesInitialValues,
    extracurricular: extraExpInitialValues,
    projects: projetcsInitialValues,
};

interface IProps {
    namespace: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: MainSection;
}

const MainSectionForm = (props: IProps) => {
    const { handleChange, namespace, values } = props;
    return (
        <div>
            <h3 className="my-2">Summary</h3>
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
                <Col xs={12} className="my-2">
                    <WorkForm
                        values={values.work_experience}
                        handleChange={handleChange}
                        namespace={namespace + ".work_experience"}
                    />
                    <EducationForm
                        values={values.education}
                        handleChange={handleChange}
                        namespace={namespace + ".education"}
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <ExtraCurricularForm
                        values={values.extracurricular}
                        handleChange={handleChange}
                        namespace={namespace + ".extracurricular"}
                    />
                    <ProjectForm
                        values={values.projects}
                        handleChange={handleChange}
                        namespace={namespace + ".projects"}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <SkillsForm
                        handleChange={handleChange}
                        namespace={namespace + ".skills"}
                        values={values.skills}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <LanguageForm
                        handleChange={handleChange}
                        namespace={namespace + ".languages"}
                        values={values.languages}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default MainSectionForm;
