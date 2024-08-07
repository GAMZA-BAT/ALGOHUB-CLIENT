import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import { Theme } from '@/styles/theme';

interface rankingBoxPropType {
  ranking: 1 | 2 | 3;
  name: string;
  solved: number;
  src: string;
}
const RankingBox = ({ ranking, name, solved, src }: rankingBoxPropType) => {
  const height = ['0', '17rem', '13.5rem', '8rem'];
  return (
    <div css={Wrapper}>
      <MaskIcon width={15} height={15} src={src} isCircle={true} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: end;
          padding-bottom: 10px;
          gap: 5px;
          width: 20rem;
          height: ${height[ranking]};
          color: white;
          background-color: ${Theme.color.mainBlue};
        `}
      >
        <p css={Meta}>{name}</p>
        <p css={Description}>{solved}문제 solved</p>
      </div>
    </div>
  );
};

export default RankingBox;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Meta = css`
  font-size: 2.5rem;
`;

const Description = css`
  font-size: 1.5rem;
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;
