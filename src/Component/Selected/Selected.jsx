import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

export default function Selected({selectedPlayers}){
    return(
        <>
            <h1>We are selected</h1>

           {
             selectedPlayers.map(selectedPlayer => <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>)
           }

            
        </>
    )
}