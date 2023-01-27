import { EmitterSubscription } from "react-native";
import { AudioStreamOptions } from "./types/options";
interface ExportData {
    init: (options: AudioStreamOptions) => void;
    start: () => void;
    stop: () => void;
    addRecordingEventListener: (listener: (data: any) => void) => EmitterSubscription;
}
declare const _default: ExportData;
export default _default;
