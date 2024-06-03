import React, { useEffect, useState } from 'react';
import ImageListComponent from '../../ImageListComponent';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { setMeasurements } from '../../../features/tableValuesSlice';

function ShapePanel() {
    const { selectedModel, measurements } = useSelector((state) => ({
        selectedModel: state.tableValues.selectedModel,
        measurements: state.tableValues.measurements
    }));
    const dispatch = useDispatch();

    const [formValues, setFormValues] = useState(measurements);
    const [selectedModelIndex, setSelectedModelIndex] = useState(0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSave = () => {
        dispatch(setMeasurements(formValues));
    };

    const shapeData = [
        { imageUrl: '/Shape/Ltable.png', value: 'Ltable' },
        { imageUrl: '/Shape/circle.png', value: 'circle' },
        { imageUrl: '/Shape/elips.png', value: 'elips' },
        { imageUrl: '/Shape/rectangle.png', value: 'rectangle' },
        { imageUrl: '/Shape/square.png', value: 'square' }
    ];

    // Seçilen modelin indexini bul
    useEffect(() => {
        console.log(selectedModel);
        const index = shapeData.findIndex((item) => item.value === selectedModel);
        setSelectedModelIndex(index);
    } , [selectedModel]);

    const commonTextFieldStyle = {
        '& .MuiInputBase-root': { color: 'white' }, // Text color
        '& .MuiInputLabel-root': { color: 'white' }, // Label color
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' }, // Border color
            '&:hover fieldset': { borderColor: 'white' }, // Hover border color
            '&.Mui-focused fieldset': { borderColor: 'white' } // Focus border color
        }
    };

    const renderInputs = () => {
        switch (selectedModel) {
            case 'square':
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lunghezza lati"
                                type="number"
                                name="side1"
                                value={formValues.side1 || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Spessore"
                                type="number"
                                name="spessore"
                                value={formValues.spessore || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                    </Grid>
                );
            case 'rectangle':
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lato lungo"
                                type="number"
                                name="length"
                                value={formValues.length || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lato corto"
                                type="number"
                                name="width"
                                value={formValues.width || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Spessore"
                                type="number"
                                name="spessore"
                                value={formValues.spessore || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                    </Grid>
                );
            case 'circle':
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Diametro"
                                type="number"
                                name="diameter"
                                value={formValues.diameter || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Spessore"
                                type="number"
                                name="spessore"
                                value={formValues.spessore || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                    </Grid>
                );
            case 'elips':
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Asse maggiore"
                                type="number"
                                name="majorAxis"
                                value={formValues.majorAxis || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Asse minore"
                                type="number"
                                name="minorAxis"
                                value={formValues.minorAxis || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Spessore"
                                type="number"
                                name="spessore"
                                value={formValues.spessore || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                    </Grid>
                );
            case 'Ltable':
                return (
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lunghezza del primo lato"
                                type="number"
                                name="length1"
                                value={formValues.length1 || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lunghezza del secondo lato"
                                type="number"
                                name="length2"
                                value={formValues.length2 || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Lunghezza del terzo lato"
                                type="number"
                                name="length3"
                                value={formValues.length3 || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Larghezza"
                                type="number"
                                name="width"
                                value={formValues.width || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label="Spessore"
                                type="number"
                                name="spessore"
                                value={formValues.spessore || ''}
                                onChange={handleInputChange}
                                fullWidth
                                sx={commonTextFieldStyle}
                            />
                        </Grid>
                    </Grid>
                );
            default:
                return <p style={{ color: 'white' }}>Seleziona un modello.</p>;
        }
    };

    return (
        <Box p={0} >
            <ImageListComponent data={shapeData} actionType="TableModel" selectedModelIndex={selectedModelIndex} />
            
            <form>
                <Box mt={3}>{renderInputs()}</Box>
                <Box mt={3}>
                    <Button
                        variant="contained"
                        sx={{ color: 'black', backgroundColor: 'white' }}
                        onClick={handleSave}
                    >
                        Kaydet
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

export default ShapePanel;
