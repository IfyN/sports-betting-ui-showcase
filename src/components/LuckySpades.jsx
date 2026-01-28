import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

// Animated Counter Hook
function useAnimatedCounter(targetValue, duration = 2000) {
  const [displayValue, setDisplayValue] = useState(500000);
  
  useEffect(() => {
    if (targetValue === 0) return;
    
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (targetValue - startValue) * easeOut;
      
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [targetValue, duration]);
  
  return displayValue;
}

// Styled Components
const SectionWrapper = styled.section`
  background: radial-gradient(circle,
  rgba(0, 120, 90, 0.8) 0%,
  rgb(7, 19, 4) 40%);
  position: relative;
  overflow-x: hidden;
  margin: 2rem 0;
  padding: 2rem 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const TitleWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  &::before {
    position: absolute; 
    content: '';
    left: 0;
    right: calc(60% + 30px);
    height: 2px;
    flex: 1;
    background: #D3D3D3;
    margin-top: 55px;
  }
  
  &::after {
    content: '';
    position: absolute;   
    left: calc(60% + 30px);
    right: 0;
    height: 2px;
    flex: 1;
    background: #D3D3D3;
    margin-bottom: 55px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;

const LuckySpadesImage = styled(motion.img)`
  height: 120px;
  width: auto;
  filter: drop-shadow(0 0 20px rgba(0, 229, 176, 0.4));
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 80px;
  }
`;

const JackpotCard = styled(motion.div)`
  padding: 2.5rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const JackpotBadgeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: calc(50% + 100px);
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.colors.cyan}
    );
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      right: calc(50% + 90px);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      right: calc(50% + 80px);
      height: 1px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    left: calc(50% + 100px);
    width: 100%;
    right: 0;
    height: 2px;
    background: linear-gradient(
      270deg,
      transparent,
      ${props => props.theme.colors.cyan}
    );
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: calc(50% + 90px);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      left: calc(50% + 80px);
      height: 1px;
    }
  }
`;

const JackpotBadge = styled(motion.div)`
  background: rgba(0, 229, 176, 0.2);
  color: ${props => props.theme.colors.white};
  padding: 0.6rem 2rem;
  border-radius: 50px;
  font-size: 1.26rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 
    0 0 20px rgba(0, 229, 176, 0.9),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
  white-space: nowrap;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
`;

const SpadeIconLeft = styled(motion.img)`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  filter: drop-shadow(0 0 10px ${props => props.theme.colors.cyan});
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

const JackpotAmount = styled.div`
  font-size: 4.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  margin-bottom: 2rem;
  text-shadow: 
    0 0 10px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(0, 0, 0, 0.6),
    2px 2px 4px rgba(0, 0, 0, 0.9),
    0 4px 8px rgba(0, 0, 0, 0.5);
    
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 3.5rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const PrizeTiersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2.5rem;
  }
`;

const MinorBadgeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.5rem;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: calc(50% - 50vw);
    width: 30%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.colors.cyan}
    );
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      width: 18%;
      height: 1.5px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      width: 15%;
      height: 1px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 100px;  
    width: 120px;  
    height: 2px;
    background: linear-gradient(90deg, ${props => props.theme.colors.cyan}, transparent);
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 150px;
      width: 100px;
      height: 1.5px;
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      left: 180px;
      width: 80px;
      height: 1px;
    }
  }
`;

const MiniBadgeWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    right: calc(10% + 100px);
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.colors.cyan}
    );
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      right: calc(50% + 40px);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      right: calc(50% + 30px);
      height: 1px;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    left: calc(90% + 50px);
    width: 100%;
    right: 0;
    height: 2px;
    background: linear-gradient(
      270deg,
      transparent,
      ${props => props.theme.colors.cyan}
    );
    box-shadow: 0 0 8px ${props => props.theme.colors.cyan};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: calc(50% + 90px);
    }
    
    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      left: calc(50% + 80px);
      height: 1px;
    }
  }
`;

const MinorBadge = styled(motion.div)`
  background: rgba(0, 229, 176, 0.2);
  color: ${props => props.theme.colors.white};
  padding: 0.6rem 2rem;
  border-radius: 50px;
  font-size: 1.26rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 
    0 0 20px rgba(0, 229, 176, 0.9),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  white-space: nowrap;
  margin-left: -3vw;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: -2.5vw;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin-left: 21vw;
  }
`;

const MiniBadge = styled(motion.div)`
  margin-left: 75%;
  background: rgba(0, 229, 176, 0.2);
  color: ${props => props.theme.colors.white};
  padding: 0.6rem 2rem;
  border-radius: 50px;
  font-size: 1.26rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 
    0 0 20px rgba(0, 229, 176, 0.9),
    inset 0 0 10px rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 1;
  white-space: nowrap;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-left: 75%;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-right: 55%;
    padding: 0.5rem 1.5rem;
    font-size: 0.875rem;
    letter-spacing: 1px;
  }
`;

const SpadeIconMinor = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 240px;
  top: 50%;
  transform: translateY(-50%);
  filter: drop-shadow(0 0 10px ${props => props.theme.colors.cyan});
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    left: 250px;
    width: 28px;
    height: 28px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    left: 180px; 
    width: 24px;
    height: 24px;
  }
`;

const SpadeIconMini = styled(motion.img)`
  width: 32px;
  height: 32px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(0 0 10px ${props => props.theme.colors.cyan});
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 28px;
    height: 28px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 24px;
    height: 24px;
  }
`;

const PrizeTier = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align === 'right' ? 'flex-end' : 'flex-start'};
  gap: 0.5rem;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    align-items: center;
  }
`;

const PrizeAmount = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-shadow: 
    0 0 8px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(0, 0, 0, 0.6),
    1px 1px 3px rgba(0, 0, 0, 0.9),
    0 3px 6px rgba(0, 0, 0, 0.5);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`;

const PlayButton = styled(motion.button)`
  background: ${props => props.theme.colors.cyan};
  color: ${props => props.theme.colors.darkText};
  padding: 1.2rem 4rem;
  font-size: 1.25rem;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 229, 176, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1.2rem 2rem;
  }
`;

const Terms = styled.p`
  text-align: center;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.lightGray};
  margin-top: 2rem;
  opacity: 0.7;
`;

export default function LuckySpadesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const jackpotValue = useAnimatedCounter(isInView ? 540675.4 : 0, 2500);
  const minorValue = useAnimatedCounter(isInView ? 660.70 : 0, 2000);
  const miniValue = useAnimatedCounter(isInView ? 5.50 : 0, 1800);
  
  const formatCurrency = (value, decimals = 2) => {
    return `£${value.toLocaleString('en-GB', { 
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals 
    })}`;
  };

  return (
    <SectionWrapper ref={ref}>
      <Container>
        <TitleWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <LuckySpadesImage 
            src="/assets/GamesLuckySpadesLogo.svg" 
            alt="Lucky Spades"
          />
        </TitleWrapper>

        <JackpotCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <JackpotBadgeWrapper>
            <SpadeIconLeft src="/assets/GamesLuckySpadesSpade.svg" alt="" />
            <JackpotBadge
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              JACKPOT
            </JackpotBadge>
          </JackpotBadgeWrapper>
          
          <JackpotAmount>
            {formatCurrency(jackpotValue)}
          </JackpotAmount>
        </JackpotCard>

        <PrizeTiersWrapper>
          <PrizeTier
            align="left"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <MinorBadgeWrapper>
              <MinorBadge
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <SpadeIconMinor src="/assets/GamesLuckySpadesSpade.svg" alt="" />
                MINOR
              </MinorBadge>
            </MinorBadgeWrapper>
            <PrizeAmount>{formatCurrency(minorValue)}</PrizeAmount>
          </PrizeTier>

          <PrizeTier
            align="right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MiniBadgeWrapper>
              <SpadeIconMini src="/assets/GamesLuckySpadesSpade.svg" alt="" />
              <MiniBadge
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                MINI
              </MiniBadge>
            </MiniBadgeWrapper>
            <PrizeAmount>{formatCurrency(miniValue)}</PrizeAmount>
          </PrizeTier>
        </PrizeTiersWrapper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <PlayButton
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 8px 30px rgba(0, 229, 176, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Play Now
          </PlayButton>
        </motion.div>

        <Terms>T&C's apply</Terms>
      </Container>
    </SectionWrapper>
  );
}