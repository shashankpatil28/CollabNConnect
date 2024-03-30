import { redirect } from "next/navigation";

import { InitialModal } from "@/components/modals/initial-modal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/intial-profile"
import { redirectToSignIn } from "@clerk/nextjs";

// import { ModeToggle } from "@/components/mode-toggle";

const SetupPage = async () => {
    const profile = await initialProfile();

    if(!profile) {
        return redirectToSignIn();
    }
    
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if(server) {
        return redirect(`/servers/${server.id}`);
    }

    return (
        <InitialModal/>
    )
    
}
export default SetupPage