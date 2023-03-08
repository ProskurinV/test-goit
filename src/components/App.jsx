import { MainCard } from './MainCard/MainCard';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'ffffff',
      }}
    >
      <MainCard />
    </div>
  );
};
