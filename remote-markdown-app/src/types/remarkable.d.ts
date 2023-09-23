declare module 'remarkable' {
/**
 * The `StateCore` class manages state.
 *
 * @param {Object} `instance` Remarkable instance
 * @param {String} `str` Markdown string
 * @param {Object} `env`
 */
declare class StateCore {
    src: string;
    env: Record<any, any>;
    options: Record<any, unknown>;
    tokens: Array<unknown>;
    inlineMode: boolean;
    inline: ParserInline;
    block: ParserBlock;
    renderer: Renderer;
    typographer: boolean;
    constructor(instance: Remarkable, str: string, env: Record<any, any>);
}

declare class StateBlock {
    bMarks: Array<number>;
    eMarks: Array<number>;
    tShift: Array<number>;
    src: string;
    blkIndent: number;
    line: number;
    tokens: Array<Record<any, unknown>>;
    level: number;
    skipSpaces(pos: number): number;
    skipChars(pos: number, code: unknown): number;
    getLines(begin: number, end: number, indent: number, keepLastLF: boolean): string;
}
declare class StateInline {
    src: string;
    env: Record<any, unknown>;
    options: Record<any, unknown>;
    parser: ParserInline;
    tokens: Array<Record<any, unknown>>;
    pos: number;
    posMax: number;
    level: number;
    pending: string;
    pendingLevel: number;
    cache: Record<any, number>[];
    isInLabel = false;
    linkLevel: number;
    linkContent: string;
    labelUnmatchedScopes: number;
    push(token: Record<any, unknown>): void;
};
declare class ParserInline {
    ruler: Ruler;
}
declare class ParserBlock {
    ruler: Ruler;
}
declare class ParserCore {
    process(state: StateCore): void;
}
declare class Renderer {
  rules: Record<unknown>
}
declare class Ruler {
    push(ruleName: string, fn: Function, options: Record<any, unknown>): void;
}
/**
 * The main `Remarkable` class. Create an instance of
 * `Remarkable` with a `preset` and/or `options`.
 *
 * @param {String} `preset` If no preset is given, `default` is used.
 * @param {Object} `options`
 */
export declare class Remarkable {
    inline: ParserInline;
    block: ParserBlock;
    core: ParserCore;
    renderer: Renderer;
    ruler: Ruler;
    options: Record<any, unknown>;
    typographer: boolean | undefined;
    constructor(preset?: 'default' | 'full' | 'commonmark' | Record<any, unknown>, options?: {
        linkify?: Function;
    });
    use(plugin: Function, options?: object): this;
    render(str: string, env?: Record<any, unknown>): string;
  }
}
