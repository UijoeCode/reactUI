import React from 'react'

export default function Header() {
    return (
        <header>
            <img alt="uijoe" src={`${process.env.PUBLIC_URL}/uijoe_logo.svg`} />
        </header>
    )
}
