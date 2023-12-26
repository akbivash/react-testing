import { render, screen} from "@testing-library/react"
import Counter from "./Counter"
import '@testing-library/jest-dom/jest-globals';

it('should render text', () => {
    render(<Counter/>)
    let text = screen.getByText(/hello/)
   expect(text).toBeInTheDocument()

})