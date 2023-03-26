import Button from '@mui/material/Button'
import Link from 'next/link'

const buttonStyle = {
    width: 'max-content',
}
const linkStyle = {
  
}

function ButtonLink(props) {
  return <Link href={props.link} underline='none' style={{ textDecoration: 'none', margin: 2 }}><Button size='small' sx={buttonStyle}>{props.label}</Button></Link>
}

export default ButtonLink
