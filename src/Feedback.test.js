import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import Feedback from "./Feedback";
import '@testing-library/jest-dom/extend-expect';

describe('Test Feedback', ()=>{
    it('renders properly', ()=>{
        const {baseElement} = render(<Feedback/>);
        expect(baseElement).toBeInTheDocument();
    });

    it('receives input text', ()=>{
        const {getByTestId} = render(<Feedback/>);

        const email = getByTestId('email-input');
        expect(email).toBeInTheDocument();

        const message = getByTestId('message-input');
        expect(message).toBeInTheDocument();

        const feedback = getByTestId('submit-feedback');
        expect(feedback).toBeInTheDocument();
    })

    it('matches snapshot', ()=> {
        const {baseElement} = render(<Feedback/>);
        expect(baseElement).toMatchSnapshot();
    });
});
  