import { Plugin } from 'vue';
import VueFileIcon from './components/VueFileIcon.vue';
import VueFilePreview from './components/VueFilePreview.vue';
import VueFileList from './components/VueFileList.vue';
import VueFileListItem from './components/VueFileListItem.vue';
import VueFileAgent from './components/VueFileAgent.vue';
export { default as plugins } from './lib/plugins';
export { VueFileIcon, VueFilePreview, VueFileList, VueFileListItem, VueFileAgent };
export type { Sortable, SortEvent } from './types';
export type { RawFileRecord } from './lib/file-record';
export type { default as FileRecord } from './lib/file-record';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        VueFileIcon: typeof VueFileIcon;
        VueFilePreview: typeof VueFilePreview;
        VueFileList: typeof VueFileList;
        VueFileListItem: typeof VueFileListItem;
        VueFileAgent: typeof VueFileAgent;
    }
}
declare const plugin: Plugin;
export { plugin as VueFileAgentNext };
export default plugin;
