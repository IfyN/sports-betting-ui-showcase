import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionWrapper = styled.section`
  background: ${props => props.theme.colors.charcoalGray};
  padding: 3rem 0;
  overflow: hidden;
 margin: 2rem 0;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 2rem 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0;
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
    padding: 0 1rem;
  }
`;

const CardsWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    cursor: grab;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    &:active {
      cursor: grabbing;
    }
  }
`;

const CardsContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
   justify-content: flex-start;
    padding: 0 1rem;
  }
`;

const NewsCard = styled.div`
  flex: 0 0 auto;
  width: 280px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative; /* ← Add this */

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 260px;
  }
`;

const NewsImage = styled.div`
  width: 100%;
  height: 450px; 
  overflow: hidden;
  position: relative; 

  img {
    width: 100%;
    height: 100%;
   object-fit: cover;
   object-position: 70% center; 
  }

  /* Dark gradient overlay */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 400px;
  }
`;

const NewsContent = styled.div`
  position: absolute; 
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  z-index: 1; 
`;

const CategoryBadge = styled.div`
  color: ${props => props.theme.colors.cyan};
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const NewsTitle = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.3;
`;

const NewsExcerpt = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.lightGray};
  line-height: 1.5;
`;

// Sample news data
const NEWS_ITEMS = [
  {
    image: '/assets/NewsCarouselImage.jpg',
    category: 'FOOTBALL',
    title: 'News Story Title',
    excerpt: 'News Story News Story News Story News Story News Story News Story News Story'
  },
  {
    image: '/assets/NewsCarouselImage.jpg',
    category: 'FOOTBALL',
    title: 'News Story Title',
    excerpt: 'News Story News Story News Story News Story News Story News Story News Story'
  },
  {
    image: '/assets/NewsCarouselImage.jpg',
    category: 'FOOTBALL',
    title: 'News Story Title',
    excerpt: 'News Story News Story News Story News Story News Story News Story News Story'
  },
  {
    image: '/assets/NewsCarouselImage.jpg',
    category: 'FOOTBALL',
    title: 'News Story Title',
    excerpt: 'News Story News Story News Story News Story News Story News Story News Story'
  },
  {
    image: '/assets/NewsCarouselImage.jpg',
    category: 'FOOTBALL',
    title: 'News Story Title',
    excerpt: 'News Story News Story News Story News Story News Story News Story News Story'
  },
];

export default function LatestNewsSection() {
  return (
    <SectionWrapper>
      <Container>
        <Title>Latest News</Title>
        
        <CardsWrapper>
          <CardsContainer
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            dragElastic={0.1}
            style={{ x: 0 }}
          >
            {NEWS_ITEMS.map((news, index) => (
              <NewsCard key={index}>
                <NewsImage>
                  <img src={news.image} alt={news.title} />
                </NewsImage>
                <NewsContent>
                  <CategoryBadge>{news.category}</CategoryBadge>
                  <NewsTitle>{news.title}</NewsTitle>
                  <NewsExcerpt>{news.excerpt}</NewsExcerpt>
                </NewsContent>
              </NewsCard>
            ))}
          </CardsContainer>
        </CardsWrapper>
      </Container>
    </SectionWrapper>
  );
}