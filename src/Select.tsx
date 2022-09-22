import React, { useEffect, useState } from 'react';
import { X, CaretDown } from 'phosphor-react';

type SelectOption = {
    label: string;
    value: string | number;
};

interface MultipleSelectProps {
    multiple: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
}

interface SingleSelectProps {
    multiple?: false;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
}

interface SelectProps {
    options: SelectOption[];
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const clearOptions = (e: React.MouseEvent) => {
        e.stopPropagation();
        onChange(undefined);
    };

    const selectOption = (option: SelectOption) => {
        if (option !== value) onChange(option);
    };

    const isOptionSelected = (option: SelectOption) => {
        return option === value;
    };

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);

    return (
        <div
            onClick={() => setIsOpen((prev) => !prev)}
            onBlur={() => setIsOpen(false)}
            tabIndex={0}
            className={
                'relative w-[20em] min-h-[42px] border rounded border-primary flex items-center gap-2 p-2 focus:border-blue-400'
            }
        >
            <span className={'flex-grow '}>{value?.label}</span>
            <button
                onClick={clearOptions}
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
                className={`max-h-60 m-0 p-0 overflow-y-auto w-full absolute left-0 top-full mt-2 border border-gray-600 rounded bg-white z-50 hidden ${
                    isOpen && 'shown'
                }`}
            >
                {options.map((option, index) => (
                    <li
                        onClick={(e) => {
                            e.stopPropagation();
                            selectOption(option);
                            setIsOpen(false);
                        }}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        className={`py-1 px-2 cursor-pointer ${
                            isOptionSelected(option) && 'selected'
                        } ${index === highlightedIndex && 'highlighted'}`}
                        key={option.value}
                    >
                        {option.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Select;
