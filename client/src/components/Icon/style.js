import styled from 'styled-components';

export const StyledIcon = styled.i.attrs(src => ({
    className: src
}))`
    font-size: 3rem;
    display: inline-block;
    padding-right: 1rem;
    hover: {
    filter: brightness(2)
    }
`