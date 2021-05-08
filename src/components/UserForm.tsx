import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import {
    Row,
    Col,
    Input,
    FormGroup,
    Label,
    Button,
    InputGroup,
} from "reactstrap";
import { TextInput, TextInputList } from "./TextInput";
import { PersonalInfo } from "./Models";

export const userValidationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address"),
});

interface UserProps {
    namespace: string;
    setFieldValue: (field: string, value: any) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    values: { [field: string]: any };
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

const getBase64 = (file: File) => {
    return new Promise<string>((resolve) => {
        let baseURL: string = "";
        // Make new FileReader
        let reader = new FileReader();

        // Convert the file to base64 text
        reader.readAsDataURL(file);

        // on reader load somthing...
        reader.onload = () => {
            // Make a fileInfo Object
            baseURL = reader.result as string;
            resolve(baseURL);
        };
    });
};

const UserForm = (props: UserProps) => {
    const placeholderImg: string = "./preview.jpg";
    const errorImg: string = "./error.jpg";
    const { handleChange, namespace, setFieldValue, values } = props;
    const [uploadType, setUploadType] = useState("local");
    const [imageSrc, setImageSrc] = useState(placeholderImg);
    const errorHandler = useCallback(() => {
        setImageSrc(errorImg || placeholderImg);
    }, [errorImg, placeholderImg]);
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
                <Col xs={12} md={4} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".twitter"}
                        label="Twitter"
                        placeholder="Your Twitter account"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={4} className="my-2">
                    <TextInput
                        type="text"
                        label="LinkedIn"
                        name={namespace + ".linkedin"}
                        onChange={handleChange}
                        placeholder="Your LinkedIn Profile Name"
                    />
                </Col>
                <Col xs={12} md={4} className="my-2">
                    <TextInput
                        type="text"
                        name={namespace + ".github"}
                        label="Github"
                        placeholder="Your Github profile"
                        onChange={handleChange}
                    />
                </Col>
                <Col xs={12} md={6} className="my-2">
                    <p>Profile Picture</p>
                    <img
                        onError={errorHandler}
                        src={imageSrc}
                        alt="preview"
                        width="200"
                        height="200"
                    />
                    <br />
                    <FormGroup check>
                        <Label check>
                            <Input
                                defaultChecked
                                type="radio"
                                name="profpicselector"
                                value="local"
                                onClick={() => {
                                    setImageSrc(placeholderImg);
                                    setUploadType("local");
                                    setFieldValue(
                                        namespace + ".picture",
                                        userInitialValues.picture
                                    );
                                }}
                            />
                            Upload from local folder
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                                type="radio"
                                name="profpicselector"
                                value="publicurl"
                                onClick={() => {
                                    setImageSrc(placeholderImg);
                                    setUploadType("publicurl");
                                    setFieldValue(
                                        namespace + ".picture",
                                        userInitialValues.picture
                                    );
                                }}
                            />
                            Upload using public URL
                        </Label>
                    </FormGroup>
                    <br />
                    {uploadType === "local" ? (
                        <Input
                            type="file"
                            accept=".jpg, .jpeg, .png"
                            name={namespace + ".picture"}
                            id="exampleFile"
                            onChange={(e) => {
                                let file = e?.target.files?.item(0)!;
                                getBase64(file)
                                    .then((result) => {
                                        setFieldValue(
                                            namespace + ".picture",
                                            result
                                        );
                                        setImageSrc(result);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }}
                        />
                    ) : (
                        <div>
                            <InputGroup>
                                <TextInputList
                                    type="text"
                                    name={namespace + ".picture"}
                                    placeholder="Fill with your picture URL"
                                    onChange={handleChange}
                                />
                                &nbsp;
                                <Button
                                    type="button"
                                    onClick={() => {
                                        setImageSrc(
                                            values[namespace]["picture"]
                                        );
                                    }}
                                >
                                    Preview URL
                                </Button>
                            </InputGroup>
                        </div>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default UserForm;
