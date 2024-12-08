declare const _default: {
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
            type: import("vue").PropType<import("../lib/file-record").ErrorText>;
            required: false;
        };
        linkable: BooleanConstructor;
        thumbnailSize: NumberConstructor;
        fileRecord: {
            type: import("vue").PropType<import("../lib/file-record").default>;
            required: true;
        };
        withCredentials: BooleanConstructor;
    }>, {}, {
        isEditInputFocused: boolean;
        isEditCancelable: boolean;
    }, {
        hasLinkableUrl(): boolean;
    }, {
        getPathAndName(fileRecord: import("../lib/file-record").default): string;
        createThumbnail(fileRecord: import("../lib/file-record").default, video: HTMLVideoElement): void;
        playAv(fileRecord: import("../lib/file-record").default): void;
        removeFileRecord(fileRecord: import("../lib/file-record").default): void;
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
            type: import("vue").PropType<import("../lib/file-record").ErrorText>;
            required: false;
        };
        linkable: BooleanConstructor;
        thumbnailSize: NumberConstructor;
        fileRecord: {
            type: import("vue").PropType<import("../lib/file-record").default>;
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
                (arrayLength: number): import("../lib/file-record").default[];
                (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
                new (arrayLength: number): import("../lib/file-record").default[];
                new (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
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
                (arrayLength: number): import("../lib/file-record").default[];
                (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
                new (arrayLength: number): import("../lib/file-record").default[];
                new (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
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
    VueFileAgent: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        accept: StringConstructor;
        auto: {
            type: BooleanConstructor;
            required: false;
            default: undefined;
        };
        averageColor: BooleanConstructor;
        capture: {
            type: import("vue").PropType<boolean | "user" | "environment">;
            required: false;
        };
        compact: BooleanConstructor;
        deletable: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        errorText: {
            type: import("vue").PropType<import("../lib/file-record").ErrorText>;
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
            type: import("vue").PropType<import("../types/Sortable").default>;
        };
        theme: StringConstructor;
        thumbnailSize: NumberConstructor;
        uploadConfig: {
            type: import("vue").PropType<import("../lib/upload-helper").CreateFormDataFn>;
            required: false;
        };
        uploadHeaders: {
            type: ObjectConstructor;
        };
        uploadUrl: StringConstructor;
        uploadWithCredentials: BooleanConstructor;
        rawModelValue: {
            (arrayLength: number): import("../lib/file-record").RawFileRecord[];
            (...items: import("../lib/file-record").RawFileRecord[]): import("../lib/file-record").RawFileRecord[];
            new (arrayLength: number): import("../lib/file-record").RawFileRecord[];
            new (...items: import("../lib/file-record").RawFileRecord[]): import("../lib/file-record").RawFileRecord[];
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
        fileRecords: import("../lib/file-record").default[];
        rawFileRecords: import("../lib/file-record").RawFileRecord[];
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
        createThumbnail(fileRecord: import("../lib/file-record").default, video: HTMLVideoElement): Promise<void>;
        initVideo(fileRecord: import("../lib/file-record").default): void;
        getFileRecordOrRawInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, raw: boolean): import("../lib/file-record").default | import("../lib/file-record").RawFileRecord;
        getFileRecordRawInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): import("../lib/file-record").RawFileRecord;
        getFileRecordInstance(fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): import("../lib/file-record").default;
        prepareConfigureFn(configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): import("../lib/ajax-request").ConfigureFn | undefined;
        upload(url: string, headers: object, fileRecordsOrRaw: import("../lib/file-record").default[] | import("../lib/file-record").RawFileRecord[], createFormData?: ((fileRecord: import("../lib/file-record").default) => FormData) | undefined, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        deleteUpload(url: string, headers: object, fileRecordOrRaw: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, uploadData?: any, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        updateUpload(url: string, headers: object, fileRecord: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord, uploadData?: any, configureXhr?: import("../lib/ajax-request").ConfigureFn | undefined): Promise<any>;
        autoUpload(fileRecords: import("../lib/file-record").default[]): Promise<any>;
        autoDeleteUpload(fileRecord: import("../lib/file-record").default | import("../lib/file-record").RawFileRecord): Promise<any>;
        autoUpdateUpload(fileRecord: import("../lib/file-record").default): Promise<any>;
        equalFiles(file1: import("../lib/interfaces").FileAgentFile, file2: import("../lib/interfaces").FileAgentFile): boolean;
        isFileAddedAlready(file: import("../lib/interfaces").FileAgentFile): boolean;
        handleFiles(files: File[] | FileList): void;
        filesChanged(event: Event): void;
        drop(event: DragEvent): void;
        dragEnter(event: DragEvent): void;
        dragOver(event: DragEvent): void;
        dragLeave(event: DragEvent): void;
        removeFileRecord(fileRecord: import("../lib/file-record").default): void;
        dismissError(fileRecord: import("../lib/file-record").default): void;
        deleteFileRecord(fileRecordOrRaw: import("../lib/file-record").default): void;
        filenameChanged(fileRecord: import("../lib/file-record").default): void;
        checkValue(): void;
        sortStart(): void;
        sortEnd(sortData: import("../types/SortEvent").default): void;
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
            type: import("vue").PropType<boolean | "user" | "environment">;
            required: false;
        };
        compact: BooleanConstructor;
        deletable: BooleanConstructor;
        disabled: BooleanConstructor;
        editable: BooleanConstructor;
        errorText: {
            type: import("vue").PropType<import("../lib/file-record").ErrorText>;
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
            type: import("vue").PropType<import("../types/Sortable").default>;
        };
        theme: StringConstructor;
        thumbnailSize: NumberConstructor;
        uploadConfig: {
            type: import("vue").PropType<import("../lib/upload-helper").CreateFormDataFn>;
            required: false;
        };
        uploadHeaders: {
            type: ObjectConstructor;
        };
        uploadUrl: StringConstructor;
        uploadWithCredentials: BooleanConstructor;
        rawModelValue: {
            (arrayLength: number): import("../lib/file-record").RawFileRecord[];
            (...items: import("../lib/file-record").RawFileRecord[]): import("../lib/file-record").RawFileRecord[];
            new (arrayLength: number): import("../lib/file-record").RawFileRecord[];
            new (...items: import("../lib/file-record").RawFileRecord[]): import("../lib/file-record").RawFileRecord[];
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
                type: import("vue").PropType<import("../lib/file-record").ErrorText>;
                required: false;
            };
            linkable: BooleanConstructor;
            thumbnailSize: NumberConstructor;
            fileRecord: {
                type: import("vue").PropType<import("../lib/file-record").default>;
                required: true;
            };
            withCredentials: BooleanConstructor;
        }>, {}, {
            isEditInputFocused: boolean;
            isEditCancelable: boolean;
        }, {
            hasLinkableUrl(): boolean;
        }, {
            getPathAndName(fileRecord: import("../lib/file-record").default): string;
            createThumbnail(fileRecord: import("../lib/file-record").default, video: HTMLVideoElement): void;
            playAv(fileRecord: import("../lib/file-record").default): void;
            removeFileRecord(fileRecord: import("../lib/file-record").default): void;
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
                type: import("vue").PropType<import("../lib/file-record").ErrorText>;
                required: false;
            };
            linkable: BooleanConstructor;
            thumbnailSize: NumberConstructor;
            fileRecord: {
                type: import("vue").PropType<import("../lib/file-record").default>;
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
                    (arrayLength: number): import("../lib/file-record").default[];
                    (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
                    new (arrayLength: number): import("../lib/file-record").default[];
                    new (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
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
                    (arrayLength: number): import("../lib/file-record").default[];
                    (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
                    new (arrayLength: number): import("../lib/file-record").default[];
                    new (...items: import("../lib/file-record").default[]): import("../lib/file-record").default[];
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
};
export default _default;
