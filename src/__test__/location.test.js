import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import store from "../store/store";
import {Provider} from "react-redux";
import App from "../App";
import {Location} from '../components/Location';
import SearchComponent from "../components/SearchComponent";


test('renders correctly', () => {
    const {container} = render(<Provider store={store}><App><SearchComponent/></App></Provider>);
    expect(container.firstElementChild.innerHTML).toContain('locationContainer');
});

test('input changes correctly', () => {
    render(<Provider store={store}><Location/></Provider>);
    const input = screen.getByTestId('locationInput');
    //Empty at the beginning
    expect(input.value).toBe('');
    fireEvent.change(input, {
        target: {
            value: 'Istanbul'
        }
    })
    expect(input.value).toBe('Istanbul');
});

test('details appear when clicked', () => {
    render(<Provider store={store}><Location/></Provider>);
    const locationWrapper = screen.getByTestId('locationWrapper');
    fireEvent.click(locationWrapper);
    expect(screen.getByTestId('detailLocationContainer')).toBeInTheDocument()
})
