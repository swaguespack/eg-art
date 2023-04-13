import React, {useState} from "react";

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
    <div className="card bg-white w-25">
        <div className="card-header bg-dark text-center">
            <h1>Contact</h1>
        </div>
        <div className="card-body m-5">
        <form onSubmit={handleSubmit}>
            <div>
            <label>Name: </label>
            <input
                type="text"
                placeholder="Your name"
                name="name"
                className=""
                required
            />
            </div>
            <div>
            <label>Email: </label>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className=""
                    required
                />
            </div>
            <div>
            <label>Message: </label>
                <textarea
                placeholder="Your message"
                name="message"
                className=""
                required
            />
            </div>
            <div>
                <button className="btn" type="submit">
                Submit
                </button>
            </div>
        </form>
        </div>

    </div>
)
};

export default Contact;