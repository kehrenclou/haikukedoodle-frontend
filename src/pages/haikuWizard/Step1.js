import SubjectForm from "../../components/form/subjectForm"
import { useStateMachine } from "little-state-machine"
import { updateSubjectDetails } from "../../actions/subjectDetails"

export default function Step1(){

//state
const{state}=useStateMachine({});
console.log("step1",state.subjectDetails.subject)
    return(
        <>
        <SubjectForm/>
        </>
    )
}