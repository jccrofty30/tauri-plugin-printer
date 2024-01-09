
export type ScaleOption = "noscale" | "shrink" | "fit"
export type MethodOption = "duplex" | "duplexshort" | "simplex"
export type PaperOption = "A2" | "A3" | "A4" | "A5" | "A6" | "letter" | "legal" | "tabloid"
export type OrientationOption = "portrait" | "landscape" 

// new types
export type PrintType = "text" | "barCode" | "qrCode" | "image" | "table";
export type PrintPosition = "left" | "center" | "right";
export type PrintTableField = {
	type: "text" | "image";
	value?: string;
	path?: string;
	style?: PrintStyle;
	width?: string;
	height?: string;
}
export type PrintData = {
    type: PrintType;
	value?: string;
	style?: PrintStyle;
	width?: number;
	height?: number;
	fontsize?: number;
	displayValue?: boolean;
	position?: PrintPosition;
	path?: string;
	url?: string;
	tableHeader?: PrintTableField[] | string[];
	tableBody?: PrintTableField[][] | string[][];
	tableFooter?: PrintTableField[] | string[];
	tableHeaderStyle?: PrintStyle;
	tableBodyStyle?: PrintStyle;
	tableFooterStyle?: PrintStyle;
}

export type PrintStyle = {
    accentColor?: string;
	alignContent?: string;
	alignItems?: string;
	alignSelf?: string;
	alignmentBaseline?: string;
	all?: string;
	appearance?: string;
	aspectRatio?: string;
	backfaceVisibility?: string;
	background?: string;
	backgroundAttachment?: string;
	backgroundBlendMode?: string;
	backgroundClip?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundOrigin?: string;
	backgroundPosition?: string;
	backgroundPositionX?: string;
	backgroundPositionY?: string;
	backgroundRepeat?: string;
	backgroundSize?: string;
	baselineShift?: string;
	blockSize?: string;
	border?: string;
	borderBlock?: string;
	borderBlockColor?: string;
	borderBlockEnd?: string;
	borderBlockEndColor?: string;
	borderBlockEndStyle?: string;
	borderBlockEndWidth?: string;
	borderBlockStart?: string;
	borderBlockStartColor?: string;
	borderBlockStartStyle?: string;
	borderBlockStartWidth?: string;
	borderBlockStyle?: string;
	borderBlockWidth?: string;
	borderBottom?: string;
	borderBottomColor?: string;
	borderBottomLeftRadius?: string;
	borderBottomRightRadius?: string;
	borderBottomStyle?: string;
	borderBottomWidth?: string;
	borderCollapse?: string;
	borderColor?: string;
	borderEndEndRadius?: string;
	borderEndStartRadius?: string;
	borderImage?: string;
	borderImageOutset?: string;
	borderImageRepeat?: string;
	borderImageSlice?: string;
	borderImageSource?: string;
	borderImageWidth?: string;
	borderInline?: string;
	borderInlineColor?: string;
	borderInlineEnd?: string;
	borderInlineEndColor?: string;
	borderInlineEndStyle?: string;
	borderInlineEndWidth?: string;
	borderInlineStart?: string;
	borderInlineStartColor?: string;
	borderInlineStartStyle?: string;
	borderInlineStartWidth?: string;
	borderInlineStyle?: string;
	borderInlineWidth?: string;
	borderLeft?: string;
	borderLeftColor?: string;
	borderLeftStyle?: string;
	borderLeftWidth?: string;
	borderRadius?: string;
	borderRight?: string;
	borderRightColor?: string;
	borderRightStyle?: string;
	borderRightWidth?: string;
	borderSpacing?: string;
	borderStartEndRadius?: string;
	borderStartStartRadius?: string;
	borderStyle?: string;
	borderTop?: string;
	borderTopColor?: string;
	borderTopLeftRadius?: string;
	borderTopRightRadius?: string;
	borderTopStyle?: string;
	borderTopWidth?: string;
	borderWidth?: string;
	bottom?: string;
	boxShadow?: string;
	boxSizing?: string;
	breakAfter?: string;
	breakBefore?: string;
	breakInside?: string;
	captionSide?: string;
	caretColor?: string;
	clear?: string;
	/** @deprecated */
	clip?: string;
	clipPath?: string;
	clipRule?: string;
	color?: string;
	colorInterpolation?: string;
	colorInterpolationFilters?: string;
	colorScheme?: string;
	columnCount?: string;
	columnFill?: string;
	columnGap?: string;
	columnRule?: string;
	columnRuleColor?: string;
	columnRuleStyle?: string;
	columnRuleWidth?: string;
	columnSpan?: string;
	columnWidth?: string;
	columns?: string;
	contain?: string;
	content?: string;
	counterIncrement?: string;
	counterReset?: string;
	counterSet?: string;
	cssFloat?: string;
	cssText?: string;
	cursor?: string;
	direction?: string;
	display?: string;
	dominantBaseline?: string;
	emptyCells?: string;
	fill?: string;
	fillOpacity?: string;
	fillRule?: string;
	filter?: string;
	flex?: string;
	flexBasis?: string;
	flexDirection?: string;
	flexFlow?: string;
	flexGrow?: string;
	flexShrink?: string;
	flexWrap?: string;
	float?: string;
	floodColor?: string;
	floodOpacity?: string;
	font?: string;
	fontFamily?: string;
	fontFeatureSettings?: string;
	fontKerning?: string;
	fontOpticalSizing?: string;
	fontSize?: string;
	fontSizeAdjust?: string;
	fontStretch?: string;
	fontStyle?: string;
	fontSynthesis?: string;
	fontVariant?: string;
	fontVariantAlternates?: string;
	fontVariantCaps?: string;
	fontVariantEastAsian?: string;
	fontVariantLigatures?: string;
	fontVariantNumeric?: string;
	fontVariantPosition?: string;
	fontVariationSettings?: string;
	fontWeight?: string;
	gap?: string;
	grid?: string;
	gridArea?: string;
	gridAutoColumns?: string;
	gridAutoFlow?: string;
	gridAutoRows?: string;
	gridColumn?: string;
	gridColumnEnd?: string;
	/** @deprecated This is a legacy alias of `columnGap`. */
	gridColumnGap?: string;
	gridColumnStart?: string;
	/** @deprecated This is a legacy alias of `gap`. */
	gridGap?: string;
	gridRow?: string;
	gridRowEnd?: string;
	/** @deprecated This is a legacy alias of `rowGap`. */
	gridRowGap?: string;
	gridRowStart?: string;
	gridTemplate?: string;
	gridTemplateAreas?: string;
	gridTemplateColumns?: string;
	gridTemplateRows?: string;
	height?: string;
	hyphens?: string;
	/** @deprecated */
	imageOrientation?: string;
	imageRendering?: string;
	inlineSize?: string;
	inset?: string;
	insetBlock?: string;
	insetBlockEnd?: string;
	insetBlockStart?: string;
	insetInline?: string;
	insetInlineEnd?: string;
	insetInlineStart?: string;
	isolation?: string;
	justifyContent?: string;
	justifyItems?: string;
	justifySelf?: string;
	left?: string;
	readonly length?: number;
	letterSpacing?: string;
	lightingColor?: string;
	lineBreak?: string;
	lineHeight?: string;
	listStyle?: string;
	listStyleImage?: string;
	listStylePosition?: string;
	listStyleType?: string;
	margin?: string;
	marginBlock?: string;
	marginBlockEnd?: string;
	marginBlockStart?: string;
	marginBottom?: string;
	marginInline?: string;
	marginInlineEnd?: string;
	marginInlineStart?: string;
	marginLeft?: string;
	marginRight?: string;
	marginTop?: string;
	marker?: string;
	markerEnd?: string;
	markerMid?: string;
	markerStart?: string;
	mask?: string;
	maskClip?: string;
	maskComposite?: string;
	maskImage?: string;
	maskMode?: string;
	maskOrigin?: string;
	maskPosition?: string;
	maskRepeat?: string;
	maskSize?: string;
	maskType?: string;
	maxBlockSize?: string;
	maxHeight?: string;
	maxInlineSize?: string;
	maxWidth?: string;
	minBlockSize?: string;
	minHeight?: string;
	minInlineSize?: string;
	minWidth?: string;
	mixBlendMode?: string;
	objectFit?: string;
	objectPosition?: string;
	offset?: string;
	offsetDistance?: string;
	offsetPath?: string;
	offsetRotate?: string;
	opacity?: string;
	order?: string;
	orphans?: string;
	outline?: string;
	outlineColor?: string;
	outlineOffset?: string;
	outlineStyle?: string;
	outlineWidth?: string;
	overflow?: string;
	overflowAnchor?: string;
	overflowWrap?: string;
	overflowX?: string;
	overflowY?: string;
	overscrollBehavior?: string;
	overscrollBehaviorBlock?: string;
	overscrollBehaviorInline?: string;
	overscrollBehaviorX?: string;
	overscrollBehaviorY?: string;
	padding?: string;
	paddingBlock?: string;
	paddingBlockEnd?: string;
	paddingBlockStart?: string;
	paddingBottom?: string;
	paddingInline?: string;
	paddingInlineEnd?: string;
	paddingInlineStart?: string;
	paddingLeft?: string;
	paddingRight?: string;
	paddingTop?: string;
	pageBreakAfter?: string;
	pageBreakBefore?: string;
	pageBreakInside?: string;
	paintOrder?: string;
	perspective?: string;
	perspectiveOrigin?: string;
	placeContent?: string;
	placeItems?: string;
	placeSelf?: string;
	pointerEvents?: string;
	position?: string;
	printColorAdjust?: string;
	quotes?: string;
	resize?: string;
	right?: string;
	rotate?: string;
	rowGap?: string;
	rubyPosition?: string;
	scale?: string;
	scrollBehavior?: string;
	scrollMargin?: string;
	scrollMarginBlock?: string;
	scrollMarginBlockEnd?: string;
	scrollMarginBlockStart?: string;
	scrollMarginBottom?: string;
	scrollMarginInline?: string;
	scrollMarginInlineEnd?: string;
	scrollMarginInlineStart?: string;
	scrollMarginLeft?: string;
	scrollMarginRight?: string;
	scrollMarginTop?: string;
	scrollPadding?: string;
	scrollPaddingBlock?: string;
	scrollPaddingBlockEnd?: string;
	scrollPaddingBlockStart?: string;
	scrollPaddingBottom?: string;
	scrollPaddingInline?: string;
	scrollPaddingInlineEnd?: string;
	scrollPaddingInlineStart?: string;
	scrollPaddingLeft?: string;
	scrollPaddingRight?: string;
	scrollPaddingTop?: string;
	scrollSnapAlign?: string;
	scrollSnapStop?: string;
	scrollSnapType?: string;
	scrollbarGutter?: string;
	shapeImageThreshold?: string;
	shapeMargin?: string;
	shapeOutside?: string;
	shapeRendering?: string;
	stopColor?: string;
	stopOpacity?: string;
	stroke?: string;
	strokeDasharray?: string;
	strokeDashoffset?: string;
	strokeLinecap?: string;
	strokeLinejoin?: string;
	strokeMiterlimit?: string;
	strokeOpacity?: string;
	strokeWidth?: string;
	tabSize?: string;
	tableLayout?: string;
	textAlign?: string;
	textAlignLast?: string;
	textAnchor?: string;
	textCombineUpright?: string;
	textDecoration?: string;
	textDecorationColor?: string;
	textDecorationLine?: string;
	textDecorationSkipInk?: string;
	textDecorationStyle?: string;
	textDecorationThickness?: string;
	textEmphasis?: string;
	textEmphasisColor?: string;
	textEmphasisPosition?: string;
	textEmphasisStyle?: string;
	textIndent?: string;
	textOrientation?: string;
	textOverflow?: string;
	textRendering?: string;
	textShadow?: string;
	textTransform?: string;
	textUnderlineOffset?: string;
	textUnderlinePosition?: string;
	top?: string;
	touchAction?: string;
	transform?: string;
	transformBox?: string;
	transformOrigin?: string;
	transformStyle?: string;
	translate?: string;
	unicodeBidi?: string;
	userSelect?: string;
	verticalAlign?: string;
	visibility?: string;
	whiteSpace?: string;
	widows?: string;
	width?: string;
	willChange?: string;
	wordBreak?: string;
	wordSpacing?: string;
	writingMode?: string;
	zIndex?: string;
}

export type PrintMargin = {
    marginType?: 'default' | 'none' | 'printableArea' | 'custom';
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
}

export interface SizeOptions {
    height: number;
    width: number;
}

export type Printer = {
    id: string;
    name: string;
    driver_name: string;
    job_count: number;
    print_processor: string;
    port_name: string;
    share_name: string;
    computer_name: string;
    printer_status: number;  // https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/win32-printer
    shared: boolean;
    type: number; // 0: local; 1: connection
    priority: number
}

export type ColorType = "color" | "monochrome"

export type RangeOptions = {
    from: number,
    to: number
}
export type PrintSettings = {
    paper?: PaperOption;
    method?: MethodOption;
    scale?: ScaleOption;
    color_type?: ColorType
    orientation?: OrientationOption;
    repeat?: Number;
    range?: RangeOptions|string
}
export type PrintOptions = {
    id?: string;
    name?: string;
    preview?: boolean;
    page_size: SizeOptions;
    print_setting?: PrintSettings;
    remove_temp?: boolean;
}

export type PrintFileOptions = {
    id?: string;
    name?: string;
    path?: string;
    file?: Buffer,
    print_setting?: PrintSettings;
    remove_temp?: boolean;
}

export type JobsStatus = {
    code: number;
    name: string;
    description: string;
}
export type Jobs = {
    job_status: JobsStatus,
    computer_name: string,
    data_type: string,
    document_name: string,
    id: string,
    job_id: number,
    job_time: number,
    pages_printed: number,
    position: number,
    printer_name: string,
    priority: number,
    size: number,
    submitted_time: number | null,
    total_pages: number,
    username: string
}

export type ResponseResult = {
    message: string|undefined;
    success: boolean;
}