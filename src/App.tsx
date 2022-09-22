import React, { useState } from 'react';
import Select from './Select';

const options = [
    { label: 'First', value: 1 },
    { label: 'Sec', value: 2 },
    { label: 'Third', value: 3 },
    { label: 'Forth', value: 4 },
];

function App() {
    const [value, setValue] = useState<typeof options[0] | undefined>(
        options[0]
    );
    return (
        <div className={'max-w-md mx-auto mt-28'}>
            <Select
                options={options}
                value={value}
                onChange={(opt) => setValue(opt)}
            />
        </div>
    );
}

export default App;
