import React from "react";
import "./Contact.css"
import { contactConfig } from "./ContactOption";
export default function Contact() {


    return (
        <>
        <div className="contact-container">
            <div className="ctn-hed">
                <div lg="8">
                    <h1 className=" ">Contact Us</h1>

                </div>
            </div>

            <div className="ctn-1-hding">
                <div>
                    <h3 className="ctn-hn-3 ">Get in touch</h3>
                    <address>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br />
                        <br />
                        {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p>
                                <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ""
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </div>
                <div className="contact__form ">
                    <form>
                        <div className="ctn-1-hding-1">
                            <div>
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                            </div>
                        </div>
                        <textarea
                            
                            id="message"
                            name="message"
                            placeholder="Message"
                            divs="5"
                            required
                        ></textarea>
                        <br />
                        <div>
                            <div>
                                <button className="btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}