import React from "react";
import { render, fireEvent, cleanup, wait } from "@testing-library/react";
import Footer from "./Footer";
import '@testing-library/jest-dom/extend-expect';

describe('Test Footer', ()=>{
    it('renders properly', ()=>{
        const {baseElement} = render(<Footer/>);
        expect(baseElement).toBeInTheDocument();
    });

    it('Check for contents in footer', ()=>{
        const {getByTestId} = render(<Footer/>);

        const phn = getByTestId('phn');
        expect(phn).toBeInTheDocument();

        const address = getByTestId('address');
        expect(address).toBeInTheDocument();
    })

    it('matches snapshot', ()=> {
        const {baseElement} = render(<Footer/>);
        expect(baseElement).toMatchSnapshot();
    });
});
  