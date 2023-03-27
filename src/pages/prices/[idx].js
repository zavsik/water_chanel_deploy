import React, { useRef } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Navbar from "../../components/navbar"
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function ProductPage() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { service, price } = router.query
    

    const form = useRef()
    

    const handleSubmit = (e) => {
        console.log(form.current)
        e.preventDefault()
        emailjs.sendForm('service_0h6numv', 'template_lpghnm9', form.current, 'pcbsf_ZPxLz-oYZfK')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          })
        
        e.target.reset()
        
        setOpen(true)

      }
    
    return(
        <Container maxWidth='lg'>
            <Navbar />
            <Container maxWidth='lg' sx={{marginTop: 2}}>
                <Collapse in={open}>
                    <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >
                     Ваша заявка успешно отправлена!
                    </Alert>
                </Collapse>
                </Container>
                <Container maxWidth='lg'>
                    <Box sx={{  marginTop: 3 }}>
                        <Paper elevation={3} sx={{padding: 5, display: 'flex', justifyContent: 'center'}}>
                            <Box component='form' ref={form} onSubmit={handleSubmit}>
                                <Typography variant='h5' sx={{ textAlign: 'center' }}>
                                    Оформление заказа
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id='name'
                                    label='Имя'
                                    name='name'
                                    autoComplete='name'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    type='adress'
                                    id='adress'
                                    label='Адрес'
                                    name='adress'
                                    autoComplete='adress'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    type='phone'
                                    id='phone'
                                    label='Номер телефона'
                                    name='phone'
                                    autoComplete='phone'
                                    autoFocus
                                    sx={{ marginTop: 1, boxSizing: 'border-box' }}
                                />

                                <Box sx={{ marginTop: 2 }}>
                                    <Typography variant='h6' sx={{marginTop: 2}}>
                                        Ваш заказ: 
                                    </Typography>
                                    <TextField
                                        sx={{ marginTop: 1 }}
                                        fullWidth
                                        id='service'
                                        name='service'
                                        label="Заказ"
                                        defaultValue={service}
                                        multiline
                                        InputProps={{
                                            readOnly: true,
                                          }}
                                        />
                                    <TextField
                                        sx={{ marginTop: 1 }}
                                        fullWidth
                                        id='price'
                                        name='price'
                                        label="Цена"
                                        defaultValue={price}
                                        multiline
                                        InputProps={{
                                            readOnly: true,
                                          }}
                                        />
                                    
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                                    <Button variant="contained" sx={{ width: '100%' }} type="submit">Заказать</Button>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Container>
        </Container>
    )
}

export default ProductPage