import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const ThemeDefault = dynamic(() => import('@/views/landings/default/theme'));
const MainLayout = dynamic(() => import('@/views/landings/default/layout'));

/***************************  LAYOUT - DEFAULT  ***************************/

export default function Default({ children }) {
  return (
    <ThemeDefault>
      <MainLayout>
        <>
          {children}

          {/* scroll to top section */}
          <ScrollFab />
        </>
      </MainLayout>
    </ThemeDefault>
  );
}

Default.propTypes = { children: PropTypes.any };
