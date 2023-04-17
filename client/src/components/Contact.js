import React, {useState} from "react";
import {Form, Button} from "react-bootstrap";

const Contact = () => {
    const [submit, setSubmit] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(e);
        setTimeout(() => {
            setSubmit(true);
        }, 100)
    }

    if (submit) {
        return;
    }

    return(

            <Form className="fs-3 p-4" onSubmit={handleSubmit}>
                <div className="border border-primary p-5">
                <Form.Group className="mb-3" controlId="form.Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
               
                <Form.Group controlId="form.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                
                <Form.Group controlId="form.Textarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                
                <Button variant='dark' type='submit' className="mt-4">
                    Send 
                </Button>
                </div>
            </Form>

)
};

export default Contact;