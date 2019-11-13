import React from 'react';
import { css, cx } from 'emotion';

import ArrowRight from '@frontend/static/icons/arrow-right.svg';
import { palette } from '@guardian/src-foundations';
import { textSans } from '@guardian/src-foundations/typography';
import { until } from '@guardian/src-foundations/mq';

const supportStyles = css`
    align-self: flex-start;
    background-color: ${palette.yellow.main};
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    min-height: 30px;
    ${until.mobileMedium} {
        padding: 0 10px;
        min-height: 24px;
    }
`;

const supportHeaderStyles = css`
    ${supportStyles}
    justify-content: center;
    margin-top: 10px;
    margin-left: 10px;
    ${until.mobileMedium} {
        margin-top: 28px;
    }
`;

const supportFooterStyles = css`
    ${supportStyles}
    margin-bottom: 6px;
`;

const supportLinkStyles = css`
    position: relative;
    color: ${palette.neutral[7]};
    ${textSans.medium()};
    font-weight: 700;
    display: block;
    text-decoration: none;
    width: 100%;

    padding-right: 20px;
    ${until.mobileMedium} {
        ${textSans.small()};
        padding-right: 18px;
    }

    svg {
        position: absolute;
        top: -5px;
        ${until.mobileMedium} {
            top: -2px;
            width: 26px;
            height: 26px;
        }
    }
`;

const supportLinkStylesNoArrow = css`
    ${supportLinkStyles}
    padding-right: 0px;

    ${until.mobileMedium} {
        padding-right: 0px;
    }
`;

const rightAlignedIcon = css`
    position: absolute;
    height: 20px;
    width: 20px;
    right: 0;
    top: 0;
`;

export const ReaderRevenueButton: React.SFC<{
    nav: NavType;
    linkLabel: string;
    rrLink: ReaderRevenuePosition;
    rrCategory: ReaderRevenueCategory;
    rightAlignIcon?: boolean;
    showArrow?: boolean;
}> = ({
    nav,
    linkLabel,
    rrLink,
    rrCategory,
    rightAlignIcon,
    showArrow = true,
}) => {
    const url = nav.readerRevenueLinks[rrLink][rrCategory];

    if (url === '') {
        return null;
    }

    const isAmpHeader = rrLink === 'ampHeader';

    return (
        <div
            className={cx([
                isAmpHeader ? supportHeaderStyles : supportFooterStyles,
            ])}
        >
            <a
                className={
                    showArrow ? supportLinkStyles : supportLinkStylesNoArrow
                }
                href={url}
            >
                {linkLabel}
                {showArrow && (
                    <span
                        className={cx({
                            [rightAlignedIcon]: !!rightAlignIcon,
                        })}
                    >
                        <ArrowRight />
                    </span>
                )}
            </a>
        </div>
    );
};