import React from "react";
import { Form, Button } from "react-bootstrap";

const ContactUs = () =>{
    return( 
        <div className="contactContainer">
            <div>
                <div  style={{fontSize:40, display:"flex", alignItems:"center", justifyContent:"center"}}>
                Get in touch!
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:5}}>Contact us if you have any information </div>
                <div style={{flexDirection:"row", }}> 
                  
                </div>
               
                <div style={{backgroundColor:"", width:"35vw", height:"35vw", padding:20, marginTop:15}}>
                <div style={{fontSize:20, paddingTop:20}}>
                Contact form
                </div>
                
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingTop:20}}>
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Last name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingTop:20}}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="First name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text> */}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword" style={{paddingTop:20}}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="" type="submit" style={{marginTop:20, backgroundColor:"#E25132"}}>
                        SUBMIT
                    </Button>
                    </Form>
                 
            </div>

           
            </div>
           
        </div>
    )
}


export default ContactUs;