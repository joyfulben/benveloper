import React from 'react';
import ProgressBar from './ProgressBar';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import BatchPredictionOutlinedIcon from '@mui/icons-material/BatchPredictionOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export function NavBar() {

    const StyledIcon = styled(IconButton)(({}) => ({
        color: '#D89C60',
    }))

    return (
        <div className='nav-progress-container'>
            <ProgressBar />
            <div className="nav-bar">
                <StyledIcon><a href='#home'><img className="logo" src="logo.png" alt="logo" /></a></StyledIcon>
                <div className="nav-bar-links">
                    <a href='#about'>
                        <span>
                        
                            <StyledIcon>
                                <InfoOutlinedIcon sx={{ fontSize: 20 }}/>
                            </StyledIcon>
                            
                        </span>
                    </a>
                    <a href='#projects'>
                        <span>
                            
                            <StyledIcon>
                                <BatchPredictionOutlinedIcon sx={{ fontSize: 20 }} />
                            </StyledIcon>
                            
                        </span>
                    </a>
                    <a href='#resume'>
                        <span>
                            
                            <StyledIcon>
                                <AssignmentOutlinedIcon sx={{ fontSize: 20 }}/>
                            </StyledIcon>
                            
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}