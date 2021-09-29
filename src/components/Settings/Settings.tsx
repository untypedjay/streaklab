import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import styled from "styled-components";

const StyledBackButton = styled.button`
    border: none;
`;

export default function Settings() {
    const history = useHistory();

    return (
        <>
            <StyledBackButton onClick={() => history.push('/')}><FaArrowLeft/></StyledBackButton>
            <h3>Settings</h3>
            <form>
                <span>Sound?</span>
                <input type="radio" id="soundYes" name="sound" value="Yes" />
                <label htmlFor="soundYes">Yes</label>
                <input type="radio" id="soundNo" name="sound" value="No" />
                <label htmlFor="soundNo">No</label>
            </form>
        </>
    );
}