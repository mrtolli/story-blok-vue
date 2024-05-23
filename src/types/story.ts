import type { AlternateStory } from "./alternate-story";
import type { TranslatableSlug } from "./translatable-slug";

export type Story<Content> = {
    name: string;
    created_at: string;
    published_at: string;
    id: number;
    uuid: string;
    content: Content;
    slug: string;
    full_slug: string;
    sort_by_date: string;
    position: number;
    tag_list: Array<string>;
    is_startpage: boolean;
    parent_id: number;
    meta_data: object;
    group_id: string;
    first_published_at: string;
    release_id: number;
    lang: string;
    path: string;
    alternates: Array<AlternateStory>
    default_full_slug: string;
    translated_slugs: Array<TranslatableSlug>;
}