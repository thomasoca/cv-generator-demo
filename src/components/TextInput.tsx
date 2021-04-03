import React from "react";
import { useField } from "formik";
import { Label, Input } from "reactstrap";
import { InputType } from "reactstrap/lib/Input";

interface IProps {
    label?: string;
    required?: boolean;
    type: InputType;
    name: string;
    placeholder?: string;
    onChange: (e: any) => void;
    id?: string;
}

export function TextInput(props: IProps) {
    const [field, meta] = useField(props.name);

    return (
        <>
            <Label htmlFor={props.id || props.name}>
                {props.label}
                {props.required && <span className="text-danger"> *</span>}
            </Label>
            <br />
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <small className="text-danger m-2">{meta.error}</small>
            ) : null}
        </>
    );
}

export function TextInputList(props: IProps) {
    const [field, meta] = useField(props.name);

    return (
        <>
            <Input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <small className="text-danger m-2">{meta.error}</small>
            ) : null}
        </>
    );
}
