export enum ValueType {
    Null = 'null',
    Boolean = 'boolean',
    Integer = 'integer',
    Number = 'number',
    String = 'string',
    Object = 'object',
    Array = 'array',
}

export type Schema = {
    type?: ValueType | ValueType[];
    items?: Schema;
    properties?: Record<string, Schema>;
    required?: string[];
    anyOf?: Array<Schema>;
    default?: Object
};

export type SchemaGenOptions = {
    noRequired: boolean;
    defaultValues: boolean;
};

export type SchemaComparisonOptions = {
    ignoreRequired: boolean;
};
