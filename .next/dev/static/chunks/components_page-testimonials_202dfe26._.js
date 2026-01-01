(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/page-testimonials/pageTestimonials.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "pageTestimonials-module___v3k4a__card",
  "cardText": "pageTestimonials-module___v3k4a__cardText",
  "closeButton": "pageTestimonials-module___v3k4a__closeButton",
  "container": "pageTestimonials-module___v3k4a__container",
  "expanded": "pageTestimonials-module___v3k4a__expanded",
  "featuredCard": "pageTestimonials-module___v3k4a__featuredCard",
  "featuredContent": "pageTestimonials-module___v3k4a__featuredContent",
  "featuredSection": "pageTestimonials-module___v3k4a__featuredSection",
  "featuredText": "pageTestimonials-module___v3k4a__featuredText",
  "featuredVideoWrapper": "pageTestimonials-module___v3k4a__featuredVideoWrapper",
  "grid": "pageTestimonials-module___v3k4a__grid",
  "sectionTitle": "pageTestimonials-module___v3k4a__sectionTitle",
  "videoWrapper": "pageTestimonials-module___v3k4a__videoWrapper",
});
}),
"[project]/components/page-testimonials/PageTestimonials.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageTestimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/page-testimonials/pageTestimonials.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
/* eslint-disable camelcase */ 'use client';
;
;
;
function getYouTubeId(url) {
    if (!url) return null;
    if (url.includes('<iframe')) {
        const match = url.match(/src=["'](.*?)["']/);
        if (match && match[1]) {
            url = match[1];
        }
    }
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
}
function PageTestimonials({ mainTestimonial, testimonials = [] }) {
    _s();
    const [expandedIndex, setExpandedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const playerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const activeIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTestimonials.useEffect": ()=>{
            __turbopack_context__.A("[project]/node_modules/lite-youtube-embed/src/lite-yt-embed.js [app-client] (ecmascript, async loader)");
            if (!window.YT) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        }
    }["PageTestimonials.useEffect"], []);
    const handleVideoClick = (index, videoId)=>{
        // Only set expanded if not already (to avoid re-triggering logic unnecessarily)
        if (expandedIndex !== index) {
            activeIndexRef.current = index;
            setExpandedIndex(index);
        }
        const checkIframe = setInterval(()=>{
            const container = document.getElementById(`testimonial-card-${index}`);
            const iframe = container?.querySelector('iframe');
            if (iframe && window.YT && window.YT.Player) {
                clearInterval(checkIframe);
                playerRefs.current[index] = new window.YT.Player(iframe, {
                    events: {
                        'onStateChange': (event)=>{
                            const playerState = event.data;
                            const PLAYING = 1;
                            if (playerState === PLAYING) {
                                // Pause others logic
                                Object.keys(playerRefs.current).forEach((key)=>{
                                    const otherIndex = parseInt(key);
                                    if (otherIndex !== index) {
                                        const otherPlayer = playerRefs.current[key];
                                        if (otherPlayer && typeof otherPlayer.pauseVideo === 'function') {
                                            otherPlayer.pauseVideo();
                                        }
                                    }
                                });
                                activeIndexRef.current = index;
                            }
                        // REMOVED: Logic to collapse on PAUSE or ENDED
                        }
                    }
                });
            }
        }, 500);
        setTimeout(()=>clearInterval(checkIframe), 10000);
    };
    const handleClose = (e, index)=>{
        e.stopPropagation(); // Prevent triggering the card click
        setExpandedIndex(null);
        activeIndexRef.current = null;
        // Optionally pause the video when closing
        const player = playerRefs.current[index];
        if (player && typeof player.pauseVideo === 'function') {
            player.pauseVideo();
        }
    };
    const mainVideoId = getYouTubeId(mainTestimonial?.url_del_video);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            mainVideoId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Historia Destacada"
                    }, void 0, false, {
                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredVideoWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lite-youtube", {
                                    videoid: mainVideoId,
                                    playlabel: "Reproducir video"
                                }, void 0, false, {
                                    fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredContent,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featuredText,
                                    children: mainTestimonial?.texto_complementario_video
                                }, void 0, false, {
                                    fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gridSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sectionTitle,
                        children: "Más Historias de Éxito"
                    }, void 0, false, {
                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                        children: testimonials.map((item, index)=>{
                            const videoId = getYouTubeId(item.url_video_testimonio);
                            if (!videoId) return null;
                            const isExpanded = expandedIndex === index;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: `testimonial-card-${index}`,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${isExpanded ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expanded : ''}`,
                                onClick: ()=>handleVideoClick(index, videoId),
                                children: [
                                    isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeButton,
                                        onClick: (e)=>handleClose(e, index),
                                        "aria-label": "Cerrar video",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoWrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lite-youtube", {
                                            videoid: videoId,
                                            playlabel: "Reproducir testimonio",
                                            params: "enablejsapi=1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, this),
                                    item.texto_complementarios_testimonio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$page$2d$testimonials$2f$pageTestimonials$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardText,
                                        children: item.texto_complementarios_testimonio
                                    }, void 0, false, {
                                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/page-testimonials/PageTestimonials.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(PageTestimonials, "uU++lERvk8qOy1Y5z4P/pEYiRRs=");
_c = PageTestimonials;
var _c;
__turbopack_context__.k.register(_c, "PageTestimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_page-testimonials_202dfe26._.js.map