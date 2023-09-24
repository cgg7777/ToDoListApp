import React from "react";

const MenuIcon = () => {
    return (
        <svg style={{ marginLeft: "2vw", position: "absolute" }} xmlns="http://www.w3.org/2000/svg" width="36" height="32" fill="none">
            <g filter="url(#a)">
                <path fill="#fff" d="M4 24h28v-4H4v4Zm0-10h28v-4H4v4ZM4 0v4h28V0H4Z" />
            </g>
            <defs>
                <filter id="a" width="36" height="32" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_6_7" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_7" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default MenuIcon;
