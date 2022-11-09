import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export function HeadNav() {

    const StyledIcon = styled(IconButton)(({}) => ({
        color: '#D89C60',
    }))

    return (
            
        <div id='home' className="head-nav-container">
            <StyledIcon><a href='#home'><img className="head-logo" src="logo.png" alt="logo" /></a></StyledIcon>
            <div className="head-nav-links">
                <a href='#about'>
                    <Button>
                        <span className="head-nav-text">About</span>
                    </Button>
                </a>
                <a href='#projects'>
                    <Button>
                        <span className="head-nav-text">Projects</span>
                    </Button>
                </a>
                <a href='#resume'>    
                    <Button>
                        <span className="head-nav-text">Resume</span>
                    </Button>
                </a>
            </div>
        </div>
    )
}