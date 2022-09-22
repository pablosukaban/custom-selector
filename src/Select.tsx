import React from 'react';
import { X, CaretDown } from 'phosphor-react';

type SelectOption = {
    label: string;
    value: any;
};

interface SelectProps {
    options: SelectOption[];
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    return (
        <div
            className={
                'relative w-[20em] border rounded border-primary flex items-center gap-2 p-2 focus:border-blue-400'
            }
        >
            <span className={'flex-grow '}>Value</span>
            <button
                className={
                    'text-primary focus:text-secondary hover:text-secondary'
                }
            >
                <X size={18} weight="fill" />
            </button>
            <div className={'w-[0.05em] self-stretch bg-primary'}></div>
            <div className={'text-primary'}>
                <CaretDown size={16} weight="fill" />
            </div>
            <ul
                className={
                    'max-h-60 m-0 p-0 overflow-y-auto w-full absolute left-0 top-full mt-2 border border-gray-600 rounded bg-white z-50 '
                }
            >
                {options.map((option) => (
                    <li className={'px-1 py-2 cursor-pointer'} key={option.label}>
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
