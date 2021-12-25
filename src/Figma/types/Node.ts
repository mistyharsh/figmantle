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
  VectorDim
} from './Property';

export type NodeType =
  | 'DOCUMENT' | 'CANVAS'
  | 'FRAME' | 'GROUP' | 'COMPONENT' | 'COMPONENT_SET' | 'INSTANCE'
  | 'VECTOR' | 'BOOLEAN_OPERATION' | 'STAR' | 'LINE' | 'ELLIPSE' | 'REGULAR_POLYGON' | 'RECTANGLE' | 'TEXT'
  | 'SLICE'
  | 'STICKY' | 'SHAPE_WITH_TEXT' | 'CONNECTOR';


export interface Node {
  id: string;
  name: string;
  visible: boolean;
  type: NodeType;
  pluginData: any;
  sharedPluginData: any;
}


export interface Vector extends Node {
  type: 'VECTOR';
  exportSettings: ExportSetting[];
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
  size?: VectorDim;
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
