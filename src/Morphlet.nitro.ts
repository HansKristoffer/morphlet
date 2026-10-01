import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface MorphletProps extends HybridViewProps {
  color: string;
}
export interface MorphletMethods extends HybridViewMethods {}

export type Morphlet = HybridView<
  MorphletProps,
  MorphletMethods
>;
