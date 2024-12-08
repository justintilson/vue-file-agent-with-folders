import { PropType } from 'vue';
import { ErrorText, default as FileRecord, RawFileRecord } from '../lib/file-record';
import { CreateFormDataFn } from '../lib/upload-helper';
import { ConfigureFn } from '../lib/ajax-request';
import { Sortable, SortEvent } from '../types';
import { FileAgentFile } from '../lib/interfaces';
declare const _sfc_main: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    accept: StringConstructor;
    auto: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    averageColor: BooleanConstructor;
    capture: {
        type: PropType<boolean | "user" | "environment">;
        required: false;
    };
    compact: BooleanConstructor;
    deletable: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    errorText: {
        type: PropType<ErrorText>;
        required: false;
    };
    helpText: StringConstructor;
    linkable: BooleanConstructor;
    maxFiles: NumberConstructor;
    maxSize: StringConstructor;
    meta: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: BooleanConstructor;
    read: BooleanConstructor;
    readonly: BooleanConstructor;
    resumable: BooleanConstructor;
    sortable: {
        type: PropType<Sortable>;
    };
    theme: StringConstructor;
    thumbnailSize: NumberConstructor;
    uploadConfig: {
        type: PropType<CreateFormDataFn>;
        required: false;
    };
    uploadHeaders: {
        type: ObjectConstructor;
    };
    uploadUrl: StringConstructor;
    uploadWithCredentials: BooleanConstructor;
    rawModelValue: {
        (arrayLength: number): RawFileRecord[];
        (...items: RawFileRecord[]): RawFileRecord[];
        new (arrayLength: number): RawFileRecord[];
        new (...items: RawFileRecord[]): RawFileRecord[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
}>, {}, {
    fileRecords: FileRecord[];
    rawFileRecords: RawFileRecord[];
    isDragging: boolean;
    isSorting: boolean;
    isSortingActive: boolean;
    transitionDuration: number;
    overallProgress: number;
    uniqueId: string;
    sortTimeout: number;
}, {
    withCredentials(): boolean | undefined;
    canAddMore(): boolean;
    helpTextComputed(): string;
    isDeletable(): boolean;
    isSortable(): boolean;
    hasMultiple(): boolean;
    shouldRead(): boolean;
    dragOptions(): {
        animation: number;
        group: string;
        disabled: boolean;
        ghostClass: string;
    };
}, {
    createThumbnail(fileRecord: FileRecord, video: HTMLVideoElement): Promise<void>;
    initVideo(fileRecord: FileRecord): void;
    getFileRecordOrRawInstance(fileRecordOrRaw: FileRecord | RawFileRecord, raw: boolean): FileRecord | RawFileRecord;
    getFileRecordRawInstance(fileRecordOrRaw: FileRecord | RawFileRecord): RawFileRecord;
    getFileRecordInstance(fileRecordOrRaw: FileRecord | RawFileRecord): FileRecord;
    prepareConfigureFn(configureXhr?: ConfigureFn): ConfigureFn | undefined;
    upload(url: string, headers: object, fileRecordsOrRaw: FileRecord[] | RawFileRecord[], createFormData?: ((fileRecord: FileRecord) => FormData) | undefined, configureXhr?: ConfigureFn): Promise<any>;
    deleteUpload(url: string, headers: object, fileRecordOrRaw: FileRecord | RawFileRecord, uploadData?: any, configureXhr?: ConfigureFn): Promise<any>;
    updateUpload(url: string, headers: object, fileRecord: FileRecord | RawFileRecord, uploadData?: any, configureXhr?: ConfigureFn): Promise<any>;
    autoUpload(fileRecords: FileRecord[]): Promise<any>;
    autoDeleteUpload(fileRecord: FileRecord | RawFileRecord): Promise<any>;
    autoUpdateUpload(fileRecord: FileRecord): Promise<any>;
    equalFiles(file1: FileAgentFile, file2: FileAgentFile): boolean;
    isFileAddedAlready(file: FileAgentFile): boolean;
    handleFiles(files: File[] | FileList): void;
    filesChanged(event: Event): void;
    drop(event: DragEvent): void;
    dragEnter(event: DragEvent): void;
    dragOver(event: DragEvent): void;
    dragLeave(event: DragEvent): void;
    removeFileRecord(fileRecord: FileRecord): void;
    dismissError(fileRecord: FileRecord): void;
    deleteFileRecord(fileRecordOrRaw: FileRecord): void;
    filenameChanged(fileRecord: FileRecord): void;
    checkValue(): void;
    sortStart(): void;
    sortEnd(sortData: SortEvent): void;
    sort(from: number, to: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sort" | "rename" | "delete" | "beforedelete" | "change" | "drop" | "select" | "upload" | "upload:error" | "upload:delete" | "upload:delete:error" | "upload:update" | "upload:update:error" | "update:modelValue" | "update:rawModelValue")[], "sort" | "rename" | "delete" | "beforedelete" | "change" | "drop" | "select" | "upload" | "upload:error" | "upload:delete" | "upload:delete:error" | "upload:update" | "upload:update:error" | "update:modelValue" | "update:rawModelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    accept: StringConstructor;
    auto: {
        type: BooleanConstructor;
        required: false;
        default: undefined;
    };
    averageColor: BooleanConstructor;
    capture: {
        type: PropType<boolean | "user" | "environment">;
        required: false;
    };
    compact: BooleanConstructor;
    deletable: BooleanConstructor;
    disabled: BooleanConstructor;
    editable: BooleanConstructor;
    errorText: {
        type: PropType<ErrorText>;
        required: false;
    };
    helpText: StringConstructor;
    linkable: BooleanConstructor;
    maxFiles: NumberConstructor;
    maxSize: StringConstructor;
    meta: {
        type: BooleanConstructor;
        default: boolean;
    };
    multiple: BooleanConstructor;
    read: BooleanConstructor;
    readonly: BooleanConstructor;
    resumable: BooleanConstructor;
    sortable: {
        type: PropType<Sortable>;
    };
    theme: StringConstructor;
    thumbnailSize: NumberConstructor;
    uploadConfig: {
        type: PropType<CreateFormDataFn>;
        required: false;
    };
    uploadHeaders: {
        type: ObjectConstructor;
    };
    uploadUrl: StringConstructor;
    uploadWithCredentials: BooleanConstructor;
    rawModelValue: {
        (arrayLength: number): RawFileRecord[];
        (...items: RawFileRecord[]): RawFileRecord[];
        new (arrayLength: number): RawFileRecord[];
        new (...items: RawFileRecord[]): RawFileRecord[];
        isArray(arg: any): arg is any[];
        readonly prototype: any[];
        from<T>(arrayLike: ArrayLike<T>): T[];
        from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
        from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
        from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
        of<T_4>(...items: T_4[]): T_4[];
        readonly [Symbol.species]: ArrayConstructor;
    };
}>> & Readonly<{
    onRename?: ((...args: any[]) => any) | undefined;
    onSort?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onBeforedelete?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onDrop?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    onUpload?: ((...args: any[]) => any) | undefined;
    "onUpload:error"?: ((...args: any[]) => any) | undefined;
    "onUpload:delete"?: ((...args: any[]) => any) | undefined;
    "onUpload:delete:error"?: ((...args: any[]) => any) | undefined;
    "onUpload:update"?: ((...args: any[]) => any) | undefined;
    "onUpload:update:error"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:rawModelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    averageColor: boolean;
    deletable: boolean;
    disabled: boolean;
    editable: boolean;
    linkable: boolean;
    compact: boolean;
    multiple: boolean;
    read: boolean;
    readonly: boolean;
    resumable: boolean;
    uploadWithCredentials: boolean;
    auto: boolean;
    meta: boolean;
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
    VueFilePreview: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        filenameChanged(completed?: boolean | undefined): void;
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
    VueFileList: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        list: {
            type: {
                (arrayLength: number): FileRecord[];
                (...items: FileRecord[]): FileRecord[];
                new (arrayLength: number): FileRecord[];
                new (...items: FileRecord[]): FileRecord[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            required: true;
        };
        axis: {
            type: StringConstructor;
            required: true;
        };
        appendTo: {
            type: StringConstructor;
            required: true;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        list: {
            type: {
                (arrayLength: number): FileRecord[];
                (...items: FileRecord[]): FileRecord[];
                new (arrayLength: number): FileRecord[];
                new (...items: FileRecord[]): FileRecord[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            required: true;
        };
        axis: {
            type: StringConstructor;
            required: true;
        };
        appendTo: {
            type: StringConstructor;
            required: true;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    VueFileListItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        index: NumberConstructor;
    }>> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SlickList: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
    SlickItem: import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, {}, any>;
}, {
    vfaSortableHandle: {
        beforeMount(el: HTMLElement): void;
    };
}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _sfc_main;
