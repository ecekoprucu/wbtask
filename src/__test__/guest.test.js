import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import store from "../store/store";
import {Provider} from "react-redux";
import App from "../App";
import {Guest} from '../components/Guest';
import SearchComponent from "../components/SearchComponent";


test('renders correctly', () => {
    const {container} = render(<Provider store={store}><App><SearchComponent/></App></Provider>);
    expect(container.firstElementChild.innerHTML).toContain('guestContainer');
});

test('details appear when clicked', () => {
    render(<Provider store={store}><Guest/></Provider>);
    fireEvent.click(screen.getByTestId('guestWrapper'));
    expect(screen.getByTestId('detailGuestContainer')).toBeInTheDocument();
});

test('number increases and decreases correctly', () => {
    render(<Provider store={store}><Guest/></Provider>);
    fireEvent.click(screen.getByTestId('guestWrapper'));
    expect(screen.getByTestId('adultCount').innerHTML).toEqual("0");
    expect(screen.getByTestId('guestCount').innerHTML).toEqual('Guests');
    fireEvent.click(screen.getByTestId('increase'));
    expect(screen.getByTestId('adultCount').innerHTML).toEqual("1");
    expect(screen.getByTestId('guestCount').innerHTML).toEqual('1 Guests');

    fireEvent.click(screen.getByTestId('decrease'));
    expect(screen.getByTestId('adultCount').innerHTML).toEqual("0");
});

