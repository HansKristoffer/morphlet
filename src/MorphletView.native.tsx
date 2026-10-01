import { getHostComponent } from 'react-native-nitro-modules';
const MorphletConfig = require('../nitrogen/generated/shared/json/MorphletConfig.json');
import type {
  MorphletMethods,
  MorphletProps,
} from './Morphlet.nitro';

export const MorphletView = getHostComponent<
  MorphletProps,
  MorphletMethods
>('Morphlet', () => MorphletConfig);
