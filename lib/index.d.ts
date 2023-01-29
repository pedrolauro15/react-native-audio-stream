import { EmitterSubscription } from "react-native";
import { AudioStreamOptions } from "./types/options";
interface RnLiveAudio {
    init: (options: AudioStreamOptions) => void;
    start: () => void;
    stop: () => void;
    addRecordingEventListener: (listener: (data: ArrayBuffer) => void) => EmitterSubscription;
}
declare const _default: RnLiveAudio;
export default _default;
