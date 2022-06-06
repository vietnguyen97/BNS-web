import React from "react";
import Icon from "@ant-design/icons";
import { IconComponentProps } from "@ant-design/icons/lib/components/Icon";

const BuildingSvg = (
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.6667 20.5013H23.3333V33.8346H31.6667C32.5871 33.8346 33.3333 33.0884 33.3333 32.168V22.168C33.3333 21.2475 32.5871 20.5013 31.6667 20.5013ZM20 17.168V37.168H31.6667C34.4281 37.168 36.6667 34.9294 36.6667 32.168V22.168C36.6667 19.4065 34.4281 17.168 31.6667 17.168H20Z"
            fill="#23262F"
        />
        <path
            d="M30.0013 25.4987C30.0013 24.5782 29.2551 23.832 28.3346 23.832C27.4142 23.832 26.668 24.5782 26.668 25.4987C26.668 26.4192 27.4142 27.1654 28.3346 27.1654C29.2551 27.1654 30.0013 26.4192 30.0013 25.4987Z"
            fill="#23262F"
        />
        <path
            d="M30.0013 30.4987C30.0013 29.5782 29.2551 28.832 28.3346 28.832C27.4142 28.832 26.668 29.5782 26.668 30.4987C26.668 31.4192 27.4142 32.1654 28.3346 32.1654C29.2551 32.1654 30.0013 31.4192 30.0013 30.4987Z"
            fill="#23262F"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.33203 37.1654C5.57061 37.1654 3.33203 34.9268 3.33203 32.1654V8.83203C3.33203 6.07061 5.57061 3.83203 8.33203 3.83203H18.332C21.0935 3.83203 23.332 6.07061 23.332 8.83203V37.1654H8.33203ZM8.33203 7.16536H18.332C19.2525 7.16536 19.9987 7.91156 19.9987 8.83203V33.832H16.6654V32.1654C16.6654 31.2449 15.9192 30.4987 14.9987 30.4987H11.6654C10.7449 30.4987 9.9987 31.2449 9.9987 32.1654V33.832H8.33203C7.41156 33.832 6.66536 33.0858 6.66536 32.1654V8.83203C6.66536 7.91156 7.41156 7.16536 8.33203 7.16536Z"
            fill="#23262F"
        />
        <path
            d="M15 10.5C15.9205 10.5 16.6667 11.2462 16.6667 12.1667C16.6667 13.0871 15.9205 13.8333 15 13.8333H11.6667C10.7462 13.8333 10 13.0871 10 12.1667C10 11.2462 10.7462 10.5 11.6667 10.5H15Z"
            fill="#23262F"
        />
        <path
            d="M15 17.1667C15.9205 17.1667 16.6667 17.9129 16.6667 18.8333C16.6667 19.7538 15.9205 20.5 15 20.5H11.6667C10.7462 20.5 10 19.7538 10 18.8333C10 17.9129 10.7462 17.1667 11.6667 17.1667H15Z"
            fill="#23262F"
        />
        <path
            d="M16.6667 25.5C16.6667 24.5795 15.9205 23.8333 15 23.8333H11.6667C10.7462 23.8333 10 24.5795 10 25.5C10 26.4205 10.7462 27.1667 11.6667 27.1667H15C15.9205 27.1667 16.6667 26.4205 16.6667 25.5Z"
            fill="#23262F"
        />
    </svg>
);

export const BuildingIcon = (
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
) => <Icon component={BuildingSvg} {...props} />;