import React from 'react';
import { bulletStyles } from 'styles';
import { css, SerializedStyles } from '@emotion/core';
import { palette } from '@guardian/src-foundations';
import LeftColumn from 'components/shared/leftColumn';
import { PillarStyles, Pillar, getPillarStyles } from 'pillar';
import { renderText } from 'renderer';
import { Option } from 'types/option';

const StandfirstStyles = ({ liveblogBackground }: PillarStyles): SerializedStyles => css`
    padding-bottom: 6px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    background: ${liveblogBackground};
    color: ${palette.neutral[97]};

    p, ul {
        margin: 0;
    }

    a {
        color: ${palette.neutral[93]};
    }

    ${bulletStyles(liveblogBackground, .4)}
`;

interface LiveblogStandfirstProps {
    standfirst: Option<DocumentFragment>;
    pillar: Pillar;
}

const LiveblogStandfirst = ({ standfirst, pillar }: LiveblogStandfirstProps): JSX.Element | null =>
    standfirst.map<JSX.Element | null>(doc =>
        // This is not an iterator, ESLint is confused
        // eslint-disable-next-line react/jsx-key
        <LeftColumn className={StandfirstStyles(getPillarStyles(pillar))}>
            <div>{ renderText(doc, pillar) }</div>
        </LeftColumn>
    ).withDefault(null)

export default LiveblogStandfirst;
