import { Filters } from './Filters'
import { CartIcon } from './icons'

export function Header () {
    return (
        <header>
            <h1>React Shop {CartIcon()}</h1>
            <Filters />
        </header>
    )
}