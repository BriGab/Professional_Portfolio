import React from 'react';
import { Text as StyledText } from './style';


const Text = ({ children, size, color }) => {


    return (
        <StyledText size={size} color={color}>{children}</StyledText >
    )
}

export default Text;