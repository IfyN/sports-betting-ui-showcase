import styled from 'styled-components';

const SectionWrapper = styled.section`
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.darkGreen} 0%,
    ${props => props.theme.colors.darkerGreen} 70%
  );
  padding: 5rem 0;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 4rem 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Badge = styled.div`
  color: ${props => props.theme.colors.yellow};
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.cyan};
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled.button`
  background: ${props => props.theme.colors.cyan};
  color: ${props => props.theme.colors.darkText};
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 3rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 3rem;

  &:hover {
    background: #00d19e;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 229, 176, 0.3);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
    padding: 1rem 2rem;
    margin-bottom: 2.5rem;
  }
`;

const Terms = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.lightGray};
  line-height: 1.6;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.7rem;
  }
`;

export default function NewCustomerCTA() {
  return (
    <SectionWrapper>
      <Container>
        <Badge>New Customer</Badge>
        
        <Title>
          Great things<br />are waiting
        </Title>
        
        <Description>
          Become a member and discover all that awaits
        </Description>
        
        <CTAButton>Join now</CTAButton>
        
        <Terms>
          T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply T&C's apply
        </Terms>
      </Container>
    </SectionWrapper>
  );
}