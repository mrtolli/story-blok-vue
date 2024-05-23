export type Asset = {
    id: number;
    alt: string;
    name: string;
    focus: string;
    title: string;
    source: string;
    filename: string;
    copyright: string;
    fieldtype: string;
    meta_data: {
        alt: string;
        title: string;
        source: string;
        copyright: string;
    };
    is_private: boolean;
    is_external_url: boolean;
}