import { AudioStreamOptions } from "./types/options";
interface ExportData {
    init: (options: AudioStreamOptions) => void;
    start: () => void;
    stop: () => void;
    addRecordingEventListener: (listener: (data: any) => void) => void;
}
declare const _default: ExportData;
export default _default;
