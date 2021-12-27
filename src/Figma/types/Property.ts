export type StyleType =
  | 'EFFECT' | 'FILL' | 'GRID' | 'TEXT'
  | 'effect' | 'fill' | 'grid' | 'text';


export interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}


export interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}


export interface Vector2D {
  x: number;
  y: number;
};


export enum LayoutMode {
  None = 'NONE',
  Horizontal = 'HORIZONTAL',
  Vertical = 'VERTICAL'
}


export enum AxisSizingMode {
  FIXED = 'FIXED',
  AUTO = 'AUTO'
}


export enum EasingType {
  EASE_IN = 'EASE_IN',
  EASE_OUT = 'EASE_OUT',
  EASE_IN_AND_OUT = 'EASE_IN_AND_OUT',
  LINEAR = 'LINEAR'
}


export interface Path {
  path: string;
  windingRule: PathWindingRule;
}


export interface ExportSetting {
  suffix: string;
  format: ImageType;
  constraint: Constrain;
}


export interface Constrain {
  type: ConstrainType;
  value: number;
}


export interface LayoutConstraint {
  vertical: LayoutConstraintVertical;
  horizontal: LayoutConstraintHorizontal;
};


// 2x3 matrix - [[1, 0, 0], [0, 1, 0]].
export type Transform = [
  [ number, number, number ],
  [ number, number, number ]
];


export type StylesMap = {
  [type in StyleType]?: string;
};


// Paint is of three types
// https://www.figma.com/plugin-docs/api/Paint/

export interface ColorStop {
  position: number;
  color: Color;
}

export interface BasePaint {
  visible?: boolean;
  opacity?: number;
  blendMode?: BlendMode;
}

export interface SolidPaint extends BasePaint {
  type: PaintType.SOLID;
  color: Color;
}


export interface GradientPaint extends BasePaint {
  type:
    | PaintType.GRADIENT_ANGULAR | PaintType.GRADIENT_DIAMOND
    | PaintType.GRADIENT_LINEAR | PaintType.GRADIENT_RADIAL;

  gradientHandlePositions: Vector2D[];
  gradientStops: ColorStop[];
}


export interface ImagePaint extends BasePaint {
  type: PaintType.IMAGE;
  scaleMode: PaintSolidScaleMode;

  imageRef: string;
  gifRef: string;

  imageTransform?: Transform;
  scalingFactor?: number;

  // Image rotation, in degrees.
  rotation: number;
};


export type Paint = SolidPaint | GradientPaint | ImagePaint;


// TODO: Incomplete
export interface Effect {
  type: EffectType;
}


export interface LayoutGrid {
  pattern: LayoutGridPattern;
  sectionSize: number;
  visible: boolean;
  color: Color;
  alignment: LayoutGridAlignment;
  gutterSize: number;
  offset: number;
  count: number;
}


export enum PaintSolidScaleMode {
  FILL = 'FILL',
  FIT = 'FIT',
  TILE = 'TILE',
  STRETCH = 'STRETCH',
}


export enum EffectType {
  INNER_SHADOW = 'INNER_SHADOW',
  DROP_SHADOW = 'DROP_SHADOW',
  LAYER_BLUR = 'LAYER_BLUR',
  BACKGROUND_BLUR = 'BACKGROUND_BLUR'
}


export enum PaintType {
  SOLID = 'SOLID',
  GRADIENT_LINEAR = 'GRADIENT_LINEAR',
  GRADIENT_RADIAL = 'GRADIENT_RADIAL',
  GRADIENT_ANGULAR = 'GRADIENT_ANGULAR',
  GRADIENT_DIAMOND = 'GRADIENT_DIAMOND',
  IMAGE = 'IMAGE',

  // TODO: not found any documentation for this
  EMOJI = 'EMOJI'
}


export enum StrokeCap {
  NONE = 'NONE',
  ROUND = 'ROUND',
  SQUARE = 'SQUARE',
  LINE_ARROW = 'LINE_ARROW',
  TRIANGLE_ARROW = 'TRIANGLE_ARROW'
}

export enum StrokeAlign {
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE',
  CENTER = 'CENTER'
}


export enum StrokeJoin {
  MITER = 'MITER',
  BEVEL = 'BEVEL',
  ROUND = 'ROUND'
}


export enum ImageType {
  JPG = 'JPG',
  PNG = 'PNG',
  SVG = 'SVG'
}


export enum ConstrainType {
  SCALE = 'SCALE',
  WIDTH = 'WIDTH',
  HEIGHT = 'HEIGHT'
}


export enum BlendMode {
  PASS_THROUGH = 'PASS_THROUGH',
  NORMAL = 'NORMAL',

  // Darken
  DARKEN = 'DARKEN',
  MULTIPLY = 'MULTIPLY',
  LINEAR_BURN = 'LINEAR_BURN',
  COLOR_BURN = 'COLOR_BURN',

  // Lighten
  LIGHTEN = 'LIGHTEN',
  SCREEN = 'SCREEN',
  LINEAR_DODGE = 'LINEAR_DODGE',
  COLOR_DODGE = 'COLOR_DODGE',

  // Contrast
  OVERLAY = 'OVERLAY',
  SOFT_LIGHT = 'SOFT_LIGHT',
  HARD_LIGHT = 'HARD_LIGHT',

  // Inversion
  DIFFERENCE = 'DIFFERENCE',
  EXCLUSION = 'EXCLUSION',

  // Component
  HUE = 'HUE',
  SATURATION = 'SATURATION',
  COLOR = 'COLOR',
  LUMINOSITY = 'LUMINOSITY'
}

export enum LayoutConstraintVertical {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  CENTER = 'CENTER',
  TOP_BOTTOM = 'TOP_BOTTOM',
  SCALE = 'SCALE'
}

export enum LayoutConstraintHorizontal {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  CENTER = 'CENTER',
  LEFT_RIGHT = 'LEFT_RIGHT',
  SCALE = 'SCALE'
}


export enum LayoutAlign {
  INHERIT = 'INHERIT',
  STRETCH = 'STRETCH',
  MIN = 'MIN',
  CENTER = 'CENTER',
  MAX = 'MAX'
}


export enum PathWindingRule {
  EVENODD = 'EVENODD',
  NONZERO = 'NONZERO'
}

export enum LayoutGridPattern {
  COLUMNS = 'COLUMNS',
  ROWS = 'ROWS',
  GRID = 'GRID'
}

export enum LayoutGridAlignment {
  MIN = 'MIN',
  MAX = 'MAX',
  CENTER = 'CENTER'
}
