import { ChangeEvent, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import styled from "styled-components";
import useLocalStorage from "../../hooks/useLocalStorage";
import { getLocalStorageSizeInKB } from "../../utils/common";

const StyledBackButton = styled.button`
    border: none;
`;

export default function Settings() {
    const [isSoundActive, setIsSoundActive] = useLocalStorage('sound', true);
    const [environment, setEnvironment] = useState<string>();
    
    const history = useHistory();

    useEffect(() => {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        setEnvironment('development')
      } else {
        setEnvironment('production')
      }
    }, []);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === 'yes') {
            setIsSoundActive(true)
        } else {
            setIsSoundActive(false)
        }
    }

    return (
        <>
            <StyledBackButton onClick={() => history.push('/')}><FaArrowLeft/></StyledBackButton>
            <h3>Settings</h3>
            <form>
                <span>Sound?</span>
                <input type="radio" id="soundYes" name="sound" value="yes" checked={isSoundActive} onChange={handleChange}/>
                <label htmlFor="soundYes">Yes</label>
                <input type="radio" id="soundNo" name="sound" value="no" checked={!isSoundActive} onChange={handleChange} />
                <label htmlFor="soundNo">No</label>
            </form>

            <p>Used storage space: {getLocalStorageSizeInKB()} KB</p>
            <button onClick={() => localStorage.clear()}>Clear data</button>

            <p>This app is in {environment} mode.</p>
        </>
    );
}