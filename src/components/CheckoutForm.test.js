import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstName = screen.getByLabelText(/first name:/i)
      userEvent.type(firstName, 'Khaleel')
    const lastName = screen.getByLabelText(/last name:/i)
      userEvent.type(lastName, 'Musleh')
    const address = screen.getByLabelText(/address:/i)
      userEvent.type(address, '351 Brighton Ave')
    const city = screen.getByLabelText(/city:/i)
      userEvent.type(city, 'San Francisco')
    const state = screen.getByLabelText(/state:/i)
      userEvent.type(state, 'CA')
    const zipCode = screen.getByLabelText(/zip:/i)
      userEvent.type(zipCode, '94112')
    const submit = screen.getByRole('button')
      userEvent.click(submit)

    const successMessage = screen.getAllByTestId('successMessage')
      expect(successMessage)
    
    waitFor(() => {
      const first = screen.queryByTestId('Khaleel')
        expect(first).toBeVisible()
      const last = screen.queryByTestId('Musleh')
        expect(last).toBeVisible()
      const address = screen.queryByTestId('351 Brighton Ave')
        expect(address).toBeVisible()
      const city = screen.queryByTestId('San Francisco')
        expect(city).toBeVisible()
      const state = screen.queryByTestId('CA')
        expect(state).toBeVisible()
      const zip = screen.queryByTestId('94112')
        expect(zip).toBeVisible()
      const successMessage = screen.queryByTestId('successMessage')
        expect(successMessage).toBeVisible()
    })
})