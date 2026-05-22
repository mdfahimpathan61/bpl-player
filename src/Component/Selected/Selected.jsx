import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

export default function Selected({btnHandler, setCountSelected, countSelected, setSelectedPlayers, selectedPlayers }) {
    const removePlayer = (name) => {
        const remainingPlayers = selectedPlayers.filter(playerName => playerName.name != name);
        setSelectedPlayers(remainingPlayers)
        console.log(remainingPlayers)

        setCountSelected(countSelected - 1);
    }
    return (
        <>
            <h1>We are selected</h1>

            <div className="mb-20">
                {
                    selectedPlayers.map(selectedPlayer => <SelectedPlayer removePlayer={removePlayer} selectedPlayer={selectedPlayer}></SelectedPlayer>)
                }


                <button onClick={() =>btnHandler(true)} className="my-5 bg-[#E7FE29] outline outline-[#E7FE29] outline-offset-4 font-bold py-2 px-3 border-none rounded-lg">Add more player</button>

            </div>


        </>
    )
}