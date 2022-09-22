import React, { useState } from 'react';
import Select, { SelectOption } from './Select';

const options = [
    { label: 'First', value: 1 },
    { label: 'Sec', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 },
];

function App() {
    const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);
    const [value2, setValue2] = useState<SelectOption[]>([options[0]]);
    return (
        <div className={'max-w-md mx-auto mt-28'}>
            <Select
                multiple={false}
                options={options}
                value={value1}
                onChange={(opt) => setValue1(opt)}
            />
            <br />
            <Select
                multiple={true}
                options={options}
                value={value2}
                onChange={(opt) => setValue2(opt)}
            />
        </div>
    );
}

export default App;
