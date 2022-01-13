import styled from 'styled-components'



export const Text = styled.p(
    ({ size = "16px", color = "white" }) => `
    font-family: 'Abel', sans-serif;
   color: ${color};
   font-size: ${size};
`

)