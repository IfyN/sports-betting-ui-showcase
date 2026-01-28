import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.darkGreen};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Logo = styled.img`
  height: 35px;
  width: auto;
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 28px;
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo src="/assets/bet365.svg" alt="bet365" />
      </HeaderContent>
    </HeaderWrapper>
  );
}