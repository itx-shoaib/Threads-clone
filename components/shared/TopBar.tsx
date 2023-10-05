import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, SignInButton, SignOutButton } from "@clerk/nextjs";

function TopBar() {
    return (
        <nav className="topbar">
            <Link href="/" className="flex items-center gap-4">
                <Image src="/assets/logo.svg" alt="Logo " width={28} height={28}/>
                <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
            </Link>

            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignInButton>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
                            </div>
                        </SignOutButton>
                    </SignInButton>
                </div>

                <OrganizationSwitcher
                appearance={{
                    elements:{
                        organizationSwitcherTrigger: "py-2 px-4"
                    }
                }}
                />
            </div>
        </nav>
    );
  }
  
  export default TopBar;
  