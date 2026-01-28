import { useState } from 'react';
import styled from 'styled-components';


const SectionWrapper = styled.section`
  background: ${props => props.theme.colors.charcoalGray};
  padding: 4rem 0;
margin: 2rem 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.white};
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 2rem;
    overflow-x: auto;
    justify-content: flex-start;
    padding: 0 1rem;
    margin: 0 -1rem 3rem;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1.5rem;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 0;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  ${props => props.$active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 3px;
      background: ${props.theme.colors.cyan};
    }
  `}

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.9rem;
  }
`;

const PlayerCardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const PlayerCard = styled.div`
  background: rgba(31, 58, 44, 0.6);
  border: 1.5px solid ${props => props.theme.colors.lightGrayOne};
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(31, 58, 44, 0.9);
    transform: translateX(4px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem;
  }
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Position = styled.div`
  color: ${props => props.theme.colors.lightGray};
  font-size: 0.875rem;
  font-weight: 400;
`;

const PlayerName = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.125rem;
  }
`;

const DropdownIcon = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 0.875rem;
`;

const FlagIcon = styled.div`
  width: 48px;
  height: 32px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 40px;
    height: 28px;
  }
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 0 auto 2.5rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const DropdownArrow = styled.span`
  font-size: 0.875rem;
`;

const CTAButton = styled.button`
  display: block;
  margin: 0 auto;
  background: ${props => props.theme.colors.yellow};
  color: ${props => props.theme.colors.darkText};
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

   &:hover {
    background:rgb(199, 171, 60); /* ← Darker yellow on hover */
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(255, 217, 61, 0.3);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 400px;
  }
`;

// Sample player data
const PLAYERS = [
  { 
    name: 'Stephan Shaw', 
    position: 'Forward',
    flag: '/assets/Flag1.svg' // Poland flag placeholder
  },
  { 
    name: 'Alexa Richardson', 
    position: 'Forward',
    flag: '/assets/Flag2.svg' // Wales flag placeholder
  },
  { 
    name: 'Jana Strassmann', 
    position: 'Forward',
    flag: '/assets/Flag3.svg' // UAE flag placeholder
  },
  { 
    name: 'Nitithorn Prinya', 
    position: 'Forward',
    flag: '/assets/FlagGrey.svg' // Thailand flag placeholder (using white flag as placeholder)
  },
];

export default function PlayerStatsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Forwards', 'Midfielders', 'Defenders', 'Goalkeepers'];

  return (
    <SectionWrapper>
      <Container>
        <Title>Player Stats</Title>

        <TabsContainer>
          {tabs.map((tab) => (
            <Tab
              key={tab}
              $active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </TabsContainer>

        <PlayerCardsGrid>
          {PLAYERS.map((player, index) => (
            <PlayerCard key={index}>
              <PlayerInfo>
                <Position>{player.position}</Position>
                <PlayerName>
                  {player.name}
                  <DropdownIcon> <img src="/assets/SportsPlayerStatsChevron.svg" alt="arrow down" /></DropdownIcon>
                </PlayerName>
              </PlayerInfo>
              <FlagIcon>
              <img src={player.flag} alt="flag" />
              </FlagIcon>
            </PlayerCard>
          ))}
        </PlayerCardsGrid>

        <ShowMoreButton>
          Show More <DropdownArrow> <img src="/assets/SportsPlayerStatsChevron.svg" alt="arrow down" /></DropdownArrow>
        </ShowMoreButton>

        <CTAButton>See player markets</CTAButton>
      </Container>
    </SectionWrapper>
  );
}