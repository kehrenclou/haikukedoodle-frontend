/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm"
import { useStateMachine } from "little-state-machine"
import { updateSubjectDetails } from "../../actions/subjectDetails"
/* ---------------------------------- Step2 --------------------------------- */
export default function Step2(){
    //state
    const{state}=useStateMachine({});
    return(
        <>
        <p>step 2</p>
        </>
    )
}