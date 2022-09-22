import React, { useEffect, useState } from 'react';
import { X, CaretDown } from 'phosphor-react';

export type SelectOption = {
    label: string;
    value: string | number;
};

type MultipleSelectProps = {
    multiple: true;
    value: SelectOption[];
    onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
    multiple?: false;
    value?: SelectOption;
    onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
    options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

const Select: React.FC<SelectProps> = ({
    multiple,
    options,
    value,
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);

    const clearOptions = (e: React.MouseEvent) => {
        e.stopPropagation();
        multiple ? onChange([]) : onChange(undefined);
    };

    const selectOption = (option: SelectOption) => {
        if (multiple) {
            if (value.includes(option)) {
                onChange(value.filter((opt) => opt !== option));
            } else {
                onChange([...value, option]);
            }
        } else {
            if (option !== value) onChange(option);
        }
    };

    const isOptionSelected = (option: SelectOption) => {
        return multiple ? value.includes(option) : option === value;
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
            <span className={'flex-grow flex flex-wrap gap-1'}>
                {multiple
                    ? value.map((item) => (
                          <button
                              onClick={(e) => {
                                  e.stopPropagation();
                                  selectOption(item);
                              }}
                              key={item.value}
                              className={
                                  'flex justify-center items-center border border-primary hover:bg-lightRed hover:border-normalRed focus:bg-lightRed focus:border-normalRed rounded gap-2 px-1 py-1'
                              }
                          >
                              <span>{item.label}</span>

                              <span>
                                  <X size={14} weight="fill" />
                              </span>
                          </button>
                      ))
                    : value?.label}
            </span>
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
