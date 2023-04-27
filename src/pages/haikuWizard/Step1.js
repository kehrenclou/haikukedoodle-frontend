/* --------------------------------- imports -------------------------------- */
import SubjectForm from "../../components/form/subjectForm"
import { useStateMachine } from "little-state-machine"
import { updateSubjectDetails } from "../../actions/subjectDetails"
/* ---------------------------------- Step1 --------------------------------- */
export default function Step1(){

//state
const{state}=useStateMachine({});
console.log("step1",state.subjectDetails)
    return(
        <>
        <SubjectForm/>
        </>
    )
}