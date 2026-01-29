import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <ul className="social-wrapper">

{/* LeetCode */}
<li className="icon leetcode">
  <a
    href="https://leetcode.com/theagrim0410"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="tooltip">LeetCode</span>

    <svg
      viewBox="-17.76 -17.76 83.52 83.52"
      xmlns="http://www.w3.org/2000/svg"
      className="leetcode-svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="4.8"
    >
      <g>
        <path
          d="M33.8092,34.8772,26.8725,41.814a5.7258,5.7258,0,0,1-8.1154,0L8.6127,31.67a5.726,5.726,0,0,1,0-8.1155L18.7571,13.41a5.7258,5.7258,0,0,1,8.1154,0L34.5,21.0373"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.7571,13.41,27.7647,4.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5838,27.5918h21.49"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </a>
</li>


      {/* LinkedIn */}
      <li className="icon linkedin">
        <a
          href="http://linkedin.com/in/agrim-saxena-5a24b5256/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip">LinkedIn</span>
          <svg viewBox="0 0 448 512" fill="currentColor" height="1.3em">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 01107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
          </svg>
        </a>
      </li>

      {/* Twitter */}
      <li className="icon twitter">
        <a
          href="https://twitter.com/theagrim0410"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tooltip">Twitter</span>
          <svg viewBox="0 0 48 48" fill="currentColor" height="1.5em">
            <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162
            c1.526-0.906,2.7-2.351,3.251-4.058
            c-1.428,0.837-3.01,1.452-4.693,1.776
            C34.967,9.884,33.05,9,30.926,9
            c-4.08,0-7.387,3.278-7.387,7.32
            c0,0.572,0.067,1.129,0.193,1.67
            c-6.138-0.308-11.582-3.226-15.224-7.654
            c-0.64,1.082-1,2.349-1,3.686
            c0,2.541,1.301,4.778,3.285,6.096
            c-1.211-0.037-2.351-0.374-3.349-0.914
            c0,0.022,0,0.055,0,0.086
            c0,3.551,2.547,6.508,5.923,7.181
            c-0.617,0.169-1.269,0.263-1.941,0.263
            c-0.477,0-0.942-0.054-1.392-0.135
            c0.94,2.902,3.667,5.023,6.898,5.086
            c-2.528,1.96-5.712,3.134-9.174,3.134
            c-0.598,0-1.183-0.034-1.761-0.104
            C9.268,36.786,13.152,38,17.321,38
            c13.585,0,21.017-11.156,21.017-20.834
            c0-0.317-0.01-0.633-0.025-0.945
            C39.763,15.197,41.013,13.905,42,12.429"/>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
