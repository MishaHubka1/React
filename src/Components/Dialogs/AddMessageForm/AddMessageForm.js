import {Field, reduxForm} from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLenght50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
    <div>
        <Field component={Textarea} 
        validate={[required, maxLenght50]}
        name="newMessageBody" placeholder="Enter your message" />
    </div>
    <div><button>Send</button></div>
</form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'}) (AddMessageForm);