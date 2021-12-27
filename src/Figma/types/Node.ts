import {
  ExportSetting,
  StrokeCap,
  StrokeAlign,
  StrokeJoin,
  StylesMap,
  BlendMode,
  LayoutAlign,
  LayoutConstraint,
  Rectangle,
  EasingType,
  Path,
  Transform,
  Paint,
  Effect,
  Vector2D,
  LayoutMode,
  AxisSizingMode,
  LayoutGrid
} from './Property';

export type NodeType =
  | 'DOCUMENT' | 'CANVAS'
  | 'FRAME' | 'GROUP' | 'COMPONENT' | 'COMPONENT_SET' | 'INSTANCE'
  | 'VECTOR' | 'BOOLEAN_OPERATION' | 'STAR' | 'LINE' | 'ELLIPSE' | 'REGULAR_POLYGON' | 'RECTANGLE' | 'TEXT'
  | 'SLICE'
  | 'STICKY' | 'SHAPE_WITH_TEXT' | 'CONNECTOR';


export type Node =
  | Frame | Group | Component
  | Vector;


export interface BaseNode {
  id: string;
  name: string;
  visible?: boolean;
  type: NodeType;
  pluginData?: any;
  sharedPluginData?: any;
}


export interface Vector extends BaseNode {
  type: 'VECTOR';

  exportSettings?: ExportSetting[];
  locked?: boolean,
  blendMode: BlendMode;
  preserveRatio?: boolean;

  // Determines if the layer should stretch along the parent’s counter axis.
  // This property is only provided for direct children of auto-layout frames.
  layoutAlign?: LayoutAlign;

  layoutGrow?: number;
  constraints: LayoutConstraint;
  transitionNodeID?: string | null;
  transitionDuration?: number | null;
  transitionEasing?: EasingType | null;
  opacity?: number;
  absoluteBoundingBox: Rectangle;
  size?: Vector2D;
  relativeTransform?: Transform;
  effects?: Effect[];
  isMask?: boolean;
  fills: Paint[];
  fillGeometry?: Path[];
  strokes: Paint[];
  strokeWeight: number;
  strokeCap?: StrokeCap,
  strokeGeometry?: Path[];
  strokeAlign: StrokeAlign;
  strokeJoin?: StrokeJoin;
  strokeDashes?: number[];
  strokeMiterAngle?: number;
  styles?: StylesMap;
}


export interface Frame extends BaseNode {
  type: 'FRAME';

  children: Array<Vector | Frame | Component | Group>;
  locked?: boolean;
  background: Paint[];
  fills: Paint[];
  strokes: Paint[];
  strokeWeight: number;
  strokeAlign: StrokeAlign;
  cornerRadius?: number;
  rectangleCornerRadii?: [number, number, number, number];
  exportSettings?: ExportSetting[];
  blendMode: BlendMode;
  preserveRatio: boolean;
  constraints: LayoutConstraint;
  layoutAlign?: LayoutAlign;

  transitionNodeID?: string|null;
  transitionDuration?: number|null;
  transitionEasing?: EasingType|null;
  opacity?: number;
  absoluteBoundingBox: Rectangle;
  size?: Vector2D;
  relativeTransform?: Transform;
  clipsContent: boolean;
  layoutMode?: LayoutMode;
  primaryAxisSizingMode?: AxisSizingMode;
  counterAxisSizingMode?: AxisSizingMode;

  // Figma doesn't have dedicated property type for these values
  primaryAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX' | 'SPACE_BETWEEN';
  counterAxisAlignItems?: 'MIN' | 'CENTER' | 'MAX';
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  horizontalPadding?: number;
  verticalPadding?: number;
  itemSpacing?: number;
  overflowDirection?: 'NONE' | 'HORIZONTAL_SCROLLING' | 'VERTICAL_SCROLLING' | 'HORIZONTAL_AND_VERTICAL_SCROLLING';
  layoutGrids?: LayoutGrid[];
  effects: Effect[];
  isMask?: boolean;
  isMaskOutline?: boolean;
}


export interface Component extends BaseNode, Omit<Frame, 'type'> {
  type: 'COMPONENT';
}


export interface Group extends BaseNode, Omit<Frame, 'layoutGrids' | 'type'> {
  type: 'GROUP';
}
