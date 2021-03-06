import React from 'react';

import { SvgIcon, SvgIconProps } from '@material-ui/core';

const LinkedInIcon = (props: SvgIconProps): React.ReactElement => (
  <SvgIcon {...props} viewBox="0 0 16 16">
    <g clipPath="url(#LinkedInIcon)">
      {/* eslint-disable-next-line max-len */}
      <path d="M3.63213 16V5.20483H0.202355V16H3.63213ZM1.91769 3.73005C3.11371 3.73005 3.85818 2.9011 3.85818 1.8652C3.83589 0.805936 3.11376 0 1.94038 0C0.767194 0 0 0.805952 0 1.8652C0 2.90115 0.744284 3.73005 1.8953 3.73005H1.91758H1.91769ZM5.5305 16H8.96028V9.97146C8.96028 9.64882 8.98256 9.32651 9.07313 9.09587C9.32108 8.45125 9.88542 7.7836 10.8329 7.7836C12.074 7.7836 12.5705 8.77355 12.5705 10.2248V15.9999H16V9.81008C16 6.49422 14.308 4.95139 12.0514 4.95139C10.2011 4.95139 9.38877 6.03334 8.93746 6.77026H8.96036V5.20461H5.53058C5.57559 6.21757 5.53058 15.9998 5.53058 15.9998L5.5305 16Z" />
    </g>
    <defs>
      <clipPath id="LinkedInIcon">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
);

export default React.memo(LinkedInIcon);
