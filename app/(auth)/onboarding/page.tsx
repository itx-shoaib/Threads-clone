import { currentUser } from "@clerk/nextjs";

import ActionProfile from "@/components/form/ActionProfile";

async function Page(){
    const user = await currentUser();

    const userInfo = {}

    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo?.username || user?.username,
        name: userInfo?.name || user.firstName ,
        bio:  userInfo?.bio || "",
        image: userInfo?.image || user.imageUrl
    }

    return (
        <main className="mx-auto max-w-3xl flex flex-col justify-start px-10 py-20">
            <h1 className="head-text">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">Finish setting up your profile to access Threads.</p>

            <section className="bg-dark-2 p-10 mt-9">
                <ActionProfile user={userData} btnTitle="Continue" />
            </section>
        </main>
    )
}

export default Page;