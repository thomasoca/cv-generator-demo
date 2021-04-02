import * as React from "react";
import * as Yup from "yup";
import { Row, Col } from "reactstrap";
import TextInput from "./TextInput";
import { PersonalInfo } from "./Models";

export const userValidationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address"),
});

interface UserProps {
    namespace: string;
    handleChange: (e: any) => void;
}

export const userInitialValues: PersonalInfo = {
    name: "",
    headline: "",
    picture: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    twitter: "",
    location_1: "",
    location_2: "",
};

const UserForm = (props: UserProps) => {
    const { handleChange, namespace } = props;
    return (
        <div>
            <h3 className="my-2">Personal Info</h3>
            <Row>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Name"
                        name={namespace + ".name"}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                </Col>
                <Col xs={12} className="my-2">
                    <TextInput
                        type="text"
                        label="Headline"
                        name={namespace + ".headline"}
                        onChange={handleChange}
                        placeholder="Your awesome headline"
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="email"
                        name={namespace + ".email"}
                        label="Email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        label="Phone Number"
                        name={namespace + ".phone"}
                        onChange={handleChange}
                        placeholder="Phone number"
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".location_1"}
                        label="Address Line 1"
                        placeholder="Address Line 1 (Street no., Apartment name, etc.)"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".location_2"}
                        label="Address Line 2"
                        placeholder="Address Line 2 (city, state, county)"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".twitter"}
                        label="Twitter"
                        placeholder="Your Twitter account"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        label="LinkedIn"
                        name={namespace + ".linkedin"}
                        onChange={handleChange}
                        placeholder="Your LinkedIn Profile Name"
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".github"}
                        label="Github"
                        placeholder="Your Github profile"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".picture"}
                        label="Profile Picture"
                        placeholder="Fill with your picture URL"
                        onChange={handleChange}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default UserForm;
