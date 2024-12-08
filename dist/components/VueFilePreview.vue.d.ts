import { PropType } from 'vue';
import FileRecord, { ErrorText } from '../lib/file-record';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    averageColor: BooleanConstructor;
    deletable: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    errorText: {
        type: PropType<ErrorText>;
        required: false;
    };
    linkable: BooleanConstructor;
    thumbnailSize: NumberConstructor;
    fileRecord: {
        type: PropType<FileRecord>;
        required: true;
    };
    withCredentials: BooleanConstructor;
}>, {}, {
    isEditInputFocused: boolean;
    isEditCancelable: boolean;
}, {
    hasLinkableUrl(): boolean;
}, {
    getPathAndName(fileRecord: FileRecord): string;
    createThumbnail(fileRecord: FileRecord, video: HTMLVideoElement): void;
    playAv(fileRecord: FileRecord): void;
    removeFileRecord(fileRecord: FileRecord): void;
    editFileName(): void;
    editInputFocused(): void;
    editInputBlured(): void;
    filenameChanged(completed?: boolean): void;
    filenameClearPressed(): void;
    clearFilename(): boolean;
    dismissError(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("dismisserror" | "remove" | "rename")[], "dismisserror" | "remove" | "rename", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    averageColor: BooleanConstructor;
    deletable: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    errorText: {
        type: PropType<ErrorText>;
        required: false;
    };
    linkable: BooleanConstructor;
    thumbnailSize: NumberConstructor;
    fileRecord: {
        type: PropType<FileRecord>;
        required: true;
    };
    withCredentials: BooleanConstructor;
}>> & Readonly<{
    onDismisserror?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onRename?: ((...args: any[]) => any) | undefined;
}>, {
    averageColor: boolean;
    deletable: boolean;
    disabled: boolean;
    editable: boolean;
    linkable: boolean;
    withCredentials: boolean;
}, {}, {
    VueFileIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        ext: {
            type: StringConstructor;
            required: false;
        };
        name: {
            type: StringConstructor;
            required: false;
        };
        viewBox: {
            type: StringConstructor;
            required: false;
        };
    }>, {}, {}, {
        viewBoxComputed(): string;
        icon(): import("../lib/icons").SvgIcon;
    }, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        ext: {
            type: StringConstructor;
            required: false;
        };
        name: {
            type: StringConstructor;
            required: false;
        };
        viewBox: {
            type: StringConstructor;
            required: false;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
