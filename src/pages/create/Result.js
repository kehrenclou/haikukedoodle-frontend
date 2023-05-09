import { useStateMachine } from "little-state-machine"
import { updateSubjectDetails } from "../../actions/subjectDetails"
import"./create.css";

export default function Result(){
    const{state}=useStateMachine(updateSubjectDetails);
    return(
        <>
        {/* <pre className="create__result- text">{JSON.stringify(state,null,2)}</pre> */}
       <p></p>
        </>
    )
}