import { describe, expect, it } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import Page, { PagePresenter } from '../src/app/page'

describe('PagePresenter', () => {
  it('renders a form', () => {
    const session = {
      user: {
        email: 'hogehoge@example.com',
        name: 'John',
      },
      expires: new Date('2024-04-04T10:25:54.820Z'),
    }

    render(<PagePresenter session={session} />)

    const form = screen.getByRole('form')

    expect(form).toBeInTheDocument()
  })
})
