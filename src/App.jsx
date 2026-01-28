import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LuckySpadesSection from './components/LuckySpades';
import PlayerStatsSection from './components/PlayerStatsSection';
import LatestNewsSection from './components/LatestNewsSection';
import NewCustomerCTA from './components/NewCustomerCTA';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <LuckySpadesSection/>
      <PlayerStatsSection />
      <LatestNewsSection/>
      <NewCustomerCTA />
    </ThemeProvider>
  );
}

export default App;