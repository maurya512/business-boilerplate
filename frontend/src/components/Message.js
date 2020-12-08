// message component that will be displayed when an error occurs while loading the products or a route isn't hit
import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
