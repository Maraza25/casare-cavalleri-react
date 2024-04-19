import React, { useState } from 'react';
import { RadioGroup, CardActionArea, Radio } from '@mui/material';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { setResinColor } from '../features/tableValuesSlice';
import { setLegColor } from '../features/legValuesSlice';
const { Text } = Typography;

function ColorSelectionCard({ colorName, colorValue, selectedColor, onChange }) {
    const [ellipsis] = useState(true);

    const cardStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '2px 0',
        padding: '16px',
        backgroundColor: 'transparent',
        border: colorValue === selectedColor ? "1px solid black" : "none",
        borderBottom: colorValue === selectedColor ? "1px solid black" : "1px solid white",
    };

    return (
        <CardActionArea onClick={() => onChange(colorValue)} style={{...cardStyle, borderRadius:10}}>
            <div style={{
                backgroundColor: colorValue,
                width: '35px',
                height: '30px',
                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            }}></div>

            <Text
                style={{color:"white", maxWidth: '50%',}}
                ellipsis={ellipsis ? { tooltip: colorName } : false}
            >
                {colorName}
            </Text>

            <Radio
                value={colorValue}
                checked={colorValue === selectedColor}
                onChange={() => onChange(colorValue)}
            />
        </CardActionArea>
    );
}

function ColorPicker({ colors , style}) {
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch();

    const handleChange = (colorValue) => {
        setSelectedColor(colorValue);
        dispatch(setLegColor(colorValue));
    };

    return (
        <RadioGroup style={{maxHeight: '65vh' , overflow: 'auto', display: 'flex', flexDirection: "row", ...style}} value={selectedColor} >
            {colors.map(color => (
                <ColorSelectionCard
                    key={color.colorValue}
                    colorName={color.colorName}
                    colorValue={color.colorValue}
                    selectedColor={selectedColor}
                    onChange={handleChange}
                />
            ))}
        </RadioGroup>
    );
}

export default ColorPicker;
