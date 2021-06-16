import { Spinner } from "reactstrap";

interface IProps {
    loading: boolean;
}

const Loading = (props: IProps) => {
    return props.loading ? (
        <div className="overlay-content">
            <div className="wrapper">
                <Spinner color="primary" />
                <span className="message">
                    Creating your CV, please wait...
                </span>
            </div>
        </div>
    ) : null;
};

export default Loading;
