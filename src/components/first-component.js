import React from "react";

// -------------------------------------------------------------------------------------------
// Przyklad numer 1
// -------------------------------------------------------------------------------------------
/*const FirstComponent = () => {

    const [active, setActive] = React.useState(false);
    const changeState = () => setActive(value => !value)
    return (
        <div>
            <div>The state is {active ? 'active' : 'inactive'}</div>
            <button onClick={changeState}>Change state</button>
        </div>
    );
}*/

// -------------------------------------------------------------------------------------------
// Przyklad numer 2
// -------------------------------------------------------------------------------------------
/*const FirstComponent = () => {
    const [active, setActive] = React.useState(false)
    const changeState = () => setActive(value => !value)
    return <StateManager active={active} onChange={changeState} />
}

const StateManager = ({active, onChange}) => {
    return (
        <div>
            <div>The state is {active ? 'active' : 'inactive'}</div>
            <button onClick={onChange}>Change state</button>
        </div>
    )
}*/

// -------------------------------------------------------------------------------------------
// Przyklad numer 3
// -------------------------------------------------------------------------------------------
const FirstComponent = () => {
    const [active, setActive] = React.useState(false)
    const changeState = () => setActive(value => !value)
    return <StateManager active={active} onChange={changeState} />
}

// Co prawda komponent StateManager nie potrzebuje uzywac zmiennej active oraz metody onChange
// jednak musi je przyjac jako argument i przekazac dalej zeby komponenty potomne StateManagerMessage
// oraz StateManagerButton mogly z nich skorzystac i wlasnie taki proces "przekazywania dalej" nazywamy
// prop drilling
const StateManager = ({active, onChange}) => {
    return (
        <div>
            <StateManagerMessage active={active} />
            <StateManagerButton onChange={onChange} />
        </div>
    )
}

const StateManagerMessage = ({active}) => {
    return <div>The state is {active ? 'active' : 'inactive'}</div>
}

const StateManagerButton = ({onChange}) => {
    return <button onClick={onChange}>Change state</button>
}

export default FirstComponent;

/*
    Mechanizm prop drilling:

    Zalety:
    -> dobry dla malej ilosci zagniezdzen

    -> pozwala wtedy na grupowanie danych wedlug potrzeb i dzielenie aplikacji na mniejsze wygodne w utrzymaniu
       komponenty

    Wady:
    -> przy duzej ilosci zagniezdzonych komponentow i relacji miedzy komponentami moze stac sie nieczytelny

    -> przesylasz dane do komponentow ktore tego nie potrzebuja - musisz dbac w nich o prawidlowe przekazanie
       takich danych dalej

    Jak sobie radzic kiedy prop drilling staje sie problematyczny?

    -> zastanow sie czy naprawde potrzebujesz dzielic kod na coraz mniejsze i mniejsze komponenty
       nie chodzi o to zeby wszystko pisac w jednym komponencie, ale lepiej przemyslec mechanizm dzielenia
       twojej aplikacji na mniejsze komponenty

    -> mozesz stosowac mechanizmy, ktore ustawiaja domyslne wartosci wlasciwosci np defaultProps z PropTypes

    -> kiedy potrzebujesz uzywac pewne dane we wszystkich czesciach aplikacji byc moze lepiej pomyslec nad
       Context API

    -> staraj sie trzymac stan / dane zwiazane z danym komponentem jak najblizej tego komponentu, dzieki czemu
       w razie przekazywania nie musisz przesylac danych przez kilka komponentow posrednich
*/
