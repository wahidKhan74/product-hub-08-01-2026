import styled from 'styled-components';

const StyledTitle = styled.h2`
    color: #4CAF50;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
`;

const StyledParagraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333333;
`;

const StyledButton = styled.button`
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 10px 24px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    margin-bottom: 20px;
`;

export default function ComponentStyle() {
    return (
        <div>
            <StyledTitle>This is a heading with styled-components</StyledTitle>
            <StyledParagraph>
                This paragraph is styled using styled-components in a React component.
            </StyledParagraph>
            <StyledButton>Click me</StyledButton>
        </div>
    );
}