export type Content<Block> = {
    _uid: string;
    component: string;
    body: Array<Block>;
}