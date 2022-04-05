
import { useEffect } from "react";

const DiscordInvite = () => {

    useEffect(() => {
        window.location.href="https://discord.com/invite/mariostrikers"
    })

    return (
        <div>
           <span>If you didn't get redirected click <a href="https://discord.gg/de2YaWg">here</a> </span>
        </div>
    )
}

export default DiscordInvite;