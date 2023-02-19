import * as React from 'react';
import { Button } from '@mui/material';
import styled from '@emotion/styled';

const NavBtn = styled(Button)({
    backgroundImage: 'linear-gradient(45deg, #ffa600, gold, #ffa600)',
    color: '#ffeebb',
    fontSize: '20px',
    fontWeight: 'bold',
    textShadow: '0 0 5px silver',
    marginLeft: '30px'
})

export default function NavButton(props) {
    return (
        <NavBtn
            variant='contained'
            href={props.url}
        >
            {props.text}
        </NavBtn>
    );
}