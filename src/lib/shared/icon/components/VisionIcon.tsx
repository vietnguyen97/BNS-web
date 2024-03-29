import React from "react";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

const VisionSvg = (
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
        {...props}
    >
        <rect width="68" height="68" rx="34" fill="#7C50D0" />
        <path
            d="M37.2533 42.7462H30.7599C30.6284 42.7446 30.4983 42.7739 30.3802 42.8318C30.2621 42.8897 30.1593 42.9746 30.0799 43.0795C29.988 43.1756 29.9206 43.2924 29.8835 43.42C29.8464 43.5477 29.8406 43.6824 29.8666 43.8128C30.0335 44.7899 30.5407 45.6765 31.2984 46.3157C32.056 46.9548 33.0153 47.3054 34.0066 47.3054C34.9978 47.3054 35.9572 46.9548 36.7148 46.3157C37.4725 45.6765 37.9796 44.7899 38.1466 43.8128C38.1722 43.6834 38.1675 43.5499 38.1328 43.4227C38.0981 43.2954 38.0343 43.178 37.9466 43.0795C37.8632 42.9758 37.7576 42.892 37.6376 42.8344C37.5177 42.7767 37.3864 42.7466 37.2533 42.7462Z"
            fill="white"
        />
        <path
            d="M39.559 22.6398C38.5303 21.8068 37.328 21.2151 36.0404 20.9082C34.7528 20.6014 33.4128 20.5871 32.119 20.8665C30.6125 21.1892 29.2174 21.9023 28.0734 22.9344C26.9295 23.9665 26.0771 25.2812 25.6017 26.7467C25.1262 28.2122 25.0445 29.777 25.3646 31.284C25.6848 32.7911 26.3956 34.1875 27.4257 35.3331C28.0826 36.0696 28.4601 37.0134 28.4924 37.9998V38.6664C28.4913 39.2737 28.6831 39.8657 29.0402 40.3569C29.3972 40.8482 29.9011 41.2133 30.479 41.3998C30.5714 41.4188 30.6667 41.4188 30.759 41.3998H37.2524C37.3492 41.4188 37.4488 41.4188 37.5457 41.3998C38.119 41.2075 38.6176 40.8405 38.9716 40.3502C39.3255 39.8599 39.517 39.2711 39.519 38.6664V37.9998C39.533 36.965 39.9214 35.9702 40.6124 35.1998C41.3923 34.3121 41.9851 33.2762 42.3554 32.1541C42.7258 31.032 42.8659 29.8467 42.7676 28.6692C42.6693 27.4916 42.3344 26.346 41.7831 25.3009C41.2318 24.2557 40.4754 23.3325 39.559 22.5864V22.6398ZM38.159 30.3731C37.9186 30.3731 37.688 30.2776 37.5179 30.1076C37.3479 29.9375 37.2524 29.7069 37.2524 29.4664C37.2489 28.6047 36.905 27.7792 36.2956 27.1699C35.6862 26.5605 34.8608 26.2166 33.999 26.2131C33.7586 26.2131 33.528 26.1176 33.3579 25.9476C33.1879 25.7775 33.0924 25.5469 33.0924 25.3064C33.0924 25.066 33.1879 24.8354 33.3579 24.6653C33.528 24.4953 33.7586 24.3998 33.999 24.3998C35.3417 24.4033 36.6284 24.9382 37.5778 25.8877C38.5272 26.8371 39.0622 28.1238 39.0657 29.4664C39.0623 29.7058 38.9656 29.9345 38.7963 30.1037C38.627 30.273 38.3984 30.3697 38.159 30.3731Z"
            fill="white"
        />
    </svg>
);

export const VisionIcon = (
    props: JSX.IntrinsicAttributes &
        Pick<
            IconComponentProps,
            | "max"
            | "required"
            | "type"
            | "data"
            | "default"
            | "high"
            | "low"
            | "key"
            | "id"
            | "media"
            | "height"
            | "width"
            | "start"
            | "open"
            | "name"
            | "color"
            | "content"
            | "rotate"
            | "translate"
            | "value"
            | "hidden"
            | "cite"
            | "dir"
            | "form"
            | "label"
            | "slot"
            | "span"
            | "style"
            | "summary"
            | "title"
            | "pattern"
            | "acceptCharset"
            | "action"
            | "method"
            | "noValidate"
            | "target"
            | "accessKey"
            | "draggable"
            | "lang"
            | "className"
            | "prefix"
            | "ariaLabel"
            | "children"
            | "contentEditable"
            | "inputMode"
            | "nonce"
            | "tabIndex"
            | "async"
            | "disabled"
            | "multiple"
            | "size"
            | "manifest"
            | "wrap"
            | "src"
            | "accept"
            | "allowFullScreen"
            | "allowTransparency"
            | "alt"
            | "as"
            | "autoComplete"
            | "autoFocus"
            | "autoPlay"
            | "capture"
            | "cellPadding"
            | "cellSpacing"
            | "charSet"
            | "challenge"
            | "checked"
            | "classID"
            | "cols"
            | "colSpan"
            | "controls"
            | "coords"
            | "crossOrigin"
            | "dateTime"
            | "defer"
            | "download"
            | "encType"
            | "formAction"
            | "formEncType"
            | "formMethod"
            | "formNoValidate"
            | "formTarget"
            | "frameBorder"
            | "headers"
            | "href"
            | "hrefLang"
            | "htmlFor"
            | "httpEquiv"
            | "integrity"
            | "keyParams"
            | "keyType"
            | "kind"
            | "list"
            | "loop"
            | "marginHeight"
            | "marginWidth"
            | "maxLength"
            | "mediaGroup"
            | "min"
            | "minLength"
            | "muted"
            | "optimum"
            | "defaultChecked"
            | "defaultValue"
            | "suppressContentEditableWarning"
            | "suppressHydrationWarning"
            | "contextMenu"
            | "placeholder"
            | "spellCheck"
            | "radioGroup"
            | "role"
            | "about"
            | "datatype"
            | "inlist"
            | "property"
            | "resource"
            | "typeof"
            | "vocab"
            | "autoCapitalize"
            | "autoCorrect"
            | "autoSave"
            | "itemProp"
            | "itemScope"
            | "itemType"
            | "itemID"
            | "itemRef"
            | "results"
            | "security"
            | "unselectable"
            | "is"
            | "aria-activedescendant"
            | "aria-atomic"
            | "aria-autocomplete"
            | "aria-busy"
            | "aria-checked"
            | "aria-colcount"
            | "aria-colindex"
            | "aria-colspan"
            | "aria-controls"
            | "aria-current"
            | "aria-describedby"
            | "aria-details"
            | "aria-disabled"
            | "aria-dropeffect"
            | "aria-errormessage"
            | "aria-expanded"
            | "aria-flowto"
            | "aria-grabbed"
            | "aria-haspopup"
            | "aria-hidden"
            | "aria-invalid"
            | "aria-keyshortcuts"
            | "aria-label"
            | "aria-labelledby"
            | "aria-level"
            | "aria-live"
            | "aria-modal"
            | "aria-multiline"
            | "aria-multiselectable"
            | "aria-orientation"
            | "aria-owns"
            | "aria-placeholder"
            | "aria-posinset"
            | "aria-pressed"
            | "aria-readonly"
            | "aria-relevant"
            | "aria-required"
            | "aria-roledescription"
            | "aria-rowcount"
            | "aria-rowindex"
            | "aria-rowspan"
            | "aria-selected"
            | "aria-setsize"
            | "aria-sort"
            | "aria-valuemax"
            | "aria-valuemin"
            | "aria-valuenow"
            | "aria-valuetext"
            | "viewBox"
            | "playsInline"
            | "poster"
            | "preload"
            | "readOnly"
            | "rel"
            | "reversed"
            | "rows"
            | "rowSpan"
            | "sandbox"
            | "scope"
            | "scoped"
            | "scrolling"
            | "seamless"
            | "selected"
            | "shape"
            | "sizes"
            | "srcDoc"
            | "srcLang"
            | "srcSet"
            | "step"
            | "useMap"
            | "wmode"
            | "dangerouslySetInnerHTML"
            | "onCopy"
            | "onCopyCapture"
            | "onCut"
            | "onCutCapture"
            | "onPaste"
            | "onPasteCapture"
            | "onCompositionEnd"
            | "onCompositionEndCapture"
            | "onCompositionStart"
            | "onCompositionStartCapture"
            | "onCompositionUpdate"
            | "onCompositionUpdateCapture"
            | "onFocus"
            | "onFocusCapture"
            | "onBlur"
            | "onBlurCapture"
            | "onChange"
            | "onChangeCapture"
            | "onBeforeInput"
            | "onBeforeInputCapture"
            | "onInput"
            | "onInputCapture"
            | "onReset"
            | "onResetCapture"
            | "onSubmit"
            | "onSubmitCapture"
            | "onInvalid"
            | "onInvalidCapture"
            | "onLoad"
            | "onLoadCapture"
            | "onError"
            | "onErrorCapture"
            | "onKeyDown"
            | "onKeyDownCapture"
            | "onKeyPress"
            | "onKeyPressCapture"
            | "onKeyUp"
            | "onKeyUpCapture"
            | "onAbort"
            | "onAbortCapture"
            | "onCanPlay"
            | "onCanPlayCapture"
            | "onCanPlayThrough"
            | "onCanPlayThroughCapture"
            | "onDurationChange"
            | "onDurationChangeCapture"
            | "onEmptied"
            | "onEmptiedCapture"
            | "onEncrypted"
            | "onEncryptedCapture"
            | "onEnded"
            | "onEndedCapture"
            | "onLoadedData"
            | "onLoadedDataCapture"
            | "onLoadedMetadata"
            | "onLoadedMetadataCapture"
            | "onLoadStart"
            | "onLoadStartCapture"
            | "onPause"
            | "onPauseCapture"
            | "onPlay"
            | "onPlayCapture"
            | "onPlaying"
            | "onPlayingCapture"
            | "onProgress"
            | "onProgressCapture"
            | "onRateChange"
            | "onRateChangeCapture"
            | "onSeeked"
            | "onSeekedCapture"
            | "onSeeking"
            | "onSeekingCapture"
            | "onStalled"
            | "onStalledCapture"
            | "onSuspend"
            | "onSuspendCapture"
            | "onTimeUpdate"
            | "onTimeUpdateCapture"
            | "onVolumeChange"
            | "onVolumeChangeCapture"
            | "onWaiting"
            | "onWaitingCapture"
            | "onAuxClick"
            | "onAuxClickCapture"
            | "onClick"
            | "onClickCapture"
            | "onContextMenu"
            | "onContextMenuCapture"
            | "onDoubleClick"
            | "onDoubleClickCapture"
            | "onDrag"
            | "onDragCapture"
            | "onDragEnd"
            | "onDragEndCapture"
            | "onDragEnter"
            | "onDragEnterCapture"
            | "onDragExit"
            | "onDragExitCapture"
            | "onDragLeave"
            | "onDragLeaveCapture"
            | "onDragOver"
            | "onDragOverCapture"
            | "onDragStart"
            | "onDragStartCapture"
            | "onDrop"
            | "onDropCapture"
            | "onMouseDown"
            | "onMouseDownCapture"
            | "onMouseEnter"
            | "onMouseLeave"
            | "onMouseMove"
            | "onMouseMoveCapture"
            | "onMouseOut"
            | "onMouseOutCapture"
            | "onMouseOver"
            | "onMouseOverCapture"
            | "onMouseUp"
            | "onMouseUpCapture"
            | "onSelect"
            | "onSelectCapture"
            | "onTouchCancel"
            | "onTouchCancelCapture"
            | "onTouchEnd"
            | "onTouchEndCapture"
            | "onTouchMove"
            | "onTouchMoveCapture"
            | "onTouchStart"
            | "onTouchStartCapture"
            | "onPointerDown"
            | "onPointerDownCapture"
            | "onPointerMove"
            | "onPointerMoveCapture"
            | "onPointerUp"
            | "onPointerUpCapture"
            | "onPointerCancel"
            | "onPointerCancelCapture"
            | "onPointerEnter"
            | "onPointerEnterCapture"
            | "onPointerLeave"
            | "onPointerLeaveCapture"
            | "onPointerOver"
            | "onPointerOverCapture"
            | "onPointerOut"
            | "onPointerOutCapture"
            | "onGotPointerCapture"
            | "onGotPointerCaptureCapture"
            | "onLostPointerCapture"
            | "onLostPointerCaptureCapture"
            | "onScroll"
            | "onScrollCapture"
            | "onWheel"
            | "onWheelCapture"
            | "onAnimationStart"
            | "onAnimationStartCapture"
            | "onAnimationEnd"
            | "onAnimationEndCapture"
            | "onAnimationIteration"
            | "onAnimationIterationCapture"
            | "onTransitionEnd"
            | "onTransitionEndCapture"
            | "spin"
            | "component"
        > &
        React.RefAttributes<HTMLSpanElement>
) => <Icon component={VisionSvg} {...props} />;
