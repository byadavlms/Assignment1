export type ElementType = {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    label: string;
    pattern: string;
    required: boolean;
    value?: string | number;
}

export type Fields = {
    firstName: string;
    lastName: string;
    phone: number | '';
}