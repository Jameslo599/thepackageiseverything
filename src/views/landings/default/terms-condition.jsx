// @project
import { SmallHero1 } from '@/blocks/small-hero';
import TermsConditionPage from '@/blocks/TermsCondition';

// @data
import { smallHero1 } from './data';

/***************************  PAGE - TERMS CONDITION  ***************************/

export default function TermsCondition() {
  return (
    <>
      <SmallHero1 {...smallHero1} />
      <TermsConditionPage />
    </>
  );
}
