import { createElement } from "react";

import { MenditectDocumentationLinkerContainerProps } from "../typings/MenditectDocumentationLinkerProps";

import "./ui/MenditectDocumentationLinker.css";

export default function MenditectDocumentationLinker(props: MenditectDocumentationLinkerContainerProps): JSX.Element {
    function LinkContent(): JSX.Element {
        if (props.layout === "text") {
            return <span>{props.text}</span>;
        } else if (props.layout === "icon") {
            return <Icon />;
        } else if (props.layout === "iconwithtext") {
            return (
                <span>
                    <span>{props.text}</span>
                    <Icon />
                </span>
            );
        } else if (props.layout === "link") {
            return <span>{props.text}</span>;
        } else {
            return <span>documentation</span>;
        }
    }

    return (
        <a
            className={`md-doc-link md-doc-link--${props.layout}`}
            href={props.link}
            target="_blank"
            rel="noreferrer"
            title="link to documentation"
        >
            <LinkContent />
        </a>
    );
}

function Icon(): JSX.Element {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt"
            height="512.000000pt"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path
                    d="M2315 5109 c-597 -61 -1141 -318 -1563 -739 -1002 -1000 -1002 -2620
0 -3620 406 -405 901 -648 1493 -732 119 -17 512 -16 635 1 580 80 1089 330
1489 732 464 467 723 1061 748 1719 26 711 -242 1393 -749 1900 -393 394 -891
643 -1453 726 -122 18 -477 26 -600 13z m615 -378 c464 -84 859 -290 1185
-616 419 -419 645 -964 645 -1555 0 -591 -226 -1136 -645 -1555 -419 -419
-964 -645 -1555 -645 -590 0 -1137 227 -1555 645 -331 331 -536 730 -622 1210
-25 143 -25 547 0 690 86 480 291 879 622 1210 357 357 789 566 1310 635 123
16 484 5 615 -19z"
                />
                <path
                    d="M2427 3839 c-172 -14 -328 -81 -434 -185 -151 -148 -170 -337 -42
-416 101 -63 181 -45 254 56 86 121 148 157 283 164 212 12 342 -84 330 -242
-9 -110 -51 -167 -223 -306 -176 -142 -237 -225 -276 -378 -26 -104 -26 -280
0 -339 27 -59 66 -77 167 -77 145 0 194 46 194 184 0 170 46 254 210 391 262
216 381 441 350 661 -47 327 -375 524 -813 487z"
                />
                <path
                    d="M2405 1868 c-179 -66 -232 -290 -102 -426 102 -107 258 -106 362 1
158 163 56 423 -170 434 -33 1 -73 -3 -90 -9z"
                />
            </g>
        </svg>
    );
}
